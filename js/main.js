(() => {
  const header = document.querySelector('.header');
  const hamburger = document.getElementById('hamburger');
  const gnav = document.getElementById('gnav');
  const pagetop = document.getElementById('pagetop');
  const fixedCta = document.getElementById('fixedCta');
  const reserve = document.getElementById('reserve');

  // ハンバーガーメニュー
  const setMenu = (open) => {
    gnav.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  hamburger.addEventListener('click', () => setMenu(!gnav.classList.contains('is-open')));
  gnav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  // スクロール連動(ヘッダー背景・PAGE TOP・SP固定予約バー)
  let reserveVisible = false;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 40);
    pagetop.classList.toggle('is-show', y > 600);
    if (fixedCta) fixedCta.classList.toggle('is-show', y > 500 && !reserveVisible);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (reserve) {
    new IntersectionObserver(([entry]) => {
      reserveVisible = entry.isIntersecting;
      onScroll();
    }).observe(reserve);
  }

  // PAGE TOP
  pagetop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 動画は画面内にあるときだけ再生
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.js-movie').forEach((video) => {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      video.controls = true;
      return;
    }
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => { video.controls = true; });
      } else {
        video.pause();
      }
    }, { threshold: 0.25 }).observe(video);
  });

  // フェードイン
  const targets = document.querySelectorAll(
    '.sec-head, .concept__grid > *, .collage img, .menu-row, .char-item, .therapist__grid > *, ' +
    '.worry-list li, .reason-item, .detail__grid, .voice-item, .price-item, .flow-step, .faq-item, .other-menu a, .access__grid > *'
  );
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((el) => {
      el.classList.add('js-fade');
      io.observe(el);
    });
  }
})();
