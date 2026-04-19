/**
 * Scroll progress, header state, IntersectionObserver reveals, stat count-up.
 */

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

let scrollProgressBound = false;

function bindScrollProgress(): void {
  if (scrollProgressBound || typeof document === 'undefined') return;
  scrollProgressBound = true;

  const progress = () => document.getElementById('pm-scroll-progress');

  const onScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
    const bar = progress();
    if (bar) {
      bar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    }

    const header = document.getElementById('header');
    if (header) {
      if (scrollTop >= 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const onMotion = () => {
    const root = document.documentElement;
    if (mq.matches) root.classList.add('pm-reduced-motion');
    else root.classList.remove('pm-reduced-motion');
  };
  mq.addEventListener('change', onMotion);
  onMotion();
}

function initRevealObserver(): void {
  const root = document.documentElement;
  const reduce = prefersReducedMotion();
  if (reduce) {
    root.classList.add('pm-reduced-motion');
  }

  const nodes = document.querySelectorAll<HTMLElement>('[data-pm-reveal]');
  if (!nodes.length) return;

  if (reduce) {
    nodes.forEach((el) => el.classList.add('pm-is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add('pm-is-visible');
        if (el.hasAttribute('data-pm-reveal-once')) {
          io.unobserve(el);
        }
      });
    },
    { root: null, threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  nodes.forEach((el) => io.observe(el));
}

function parseStatTarget(raw: string): { value: number; decimals: number } | null {
  const trimmed = raw.trim();
  const pct = trimmed.endsWith('%');
  const numericPart = pct ? trimmed.slice(0, -1) : trimmed.replace(/[^\d.]/g, '');
  const value = parseFloat(numericPart);
  if (Number.isNaN(value)) return null;
  const decimals = pct ? Math.min(2, (numericPart.split('.')[1] || '').length) : 0;
  return { value, decimals: pct ? decimals : 0 };
}

function formatStat(value: number, decimals: number, suffix: string, prefix: string): string {
  const n = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  return `${prefix}${n}${suffix}`;
}

function initCountUpObserver(): void {
  const reduce = prefersReducedMotion();
  const nodes = document.querySelectorAll<HTMLElement>('[data-pm-count]');
  if (!nodes.length) return;

  const animate = (el: HTMLElement) => {
    const raw = el.getAttribute('data-pm-count') || '';
    const suffix = el.getAttribute('data-pm-suffix') || '';
    const prefix = el.getAttribute('data-pm-prefix') || '';
    const parsed = parseStatTarget(raw);
    if (!parsed) return;

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      const current = parsed.value * eased;
      el.textContent = formatStat(current, parsed.decimals, suffix, prefix);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = formatStat(parsed.value, parsed.decimals, suffix, prefix);
    };

    requestAnimationFrame(tick);
  };

  if (reduce) {
    nodes.forEach((el) => {
      const raw = el.getAttribute('data-pm-count') || '';
      const suffix = el.getAttribute('data-pm-suffix') || '';
      const prefix = el.getAttribute('data-pm-prefix') || '';
      const parsed = parseStatTarget(raw);
      if (parsed) el.textContent = formatStat(parsed.value, parsed.decimals, suffix, prefix);
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        if (el.dataset.pmAnimated === 'true') return;
        el.dataset.pmAnimated = 'true';
        animate(el);
        io.unobserve(el);
      });
    },
    { threshold: 0.35 }
  );

  nodes.forEach((el) => {
    el.dataset.pmAnimated = '';
    io.observe(el);
  });
}

export function initPremiumChrome(): void {
  if (typeof document === 'undefined') return;

  bindScrollProgress();
  initRevealObserver();
  initCountUpObserver();
}
