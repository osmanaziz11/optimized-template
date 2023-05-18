!(function () {
  'use strict';
  let e = (e, t = !1) =>
      ((e = e.trim()), t)
        ? [...document.querySelectorAll(e)]
        : document.querySelector(e),
    t = (t, s, l, a = !1) => {
      a
        ? e(s, a).forEach((e) => e.addEventListener(t, l))
        : e(s, a).addEventListener(t, l);
    },
    s = (e, t) => {
      e.addEventListener('scroll', t);
    },
    l = e('#navbar .scrollto', !0),
    a = () => {
      let t = window.scrollY + 200;
      l.forEach((s) => {
        if (!s.hash) return;
        let l = e(s.hash);
        l &&
          (t >= l.offsetTop && t <= l.offsetTop + l.offsetHeight
            ? s.classList.add('active')
            : s.classList.remove('active'));
      });
    };
  window.addEventListener('load', a), s(document, a);
  let i = e('#header');
  if (i) {
    let o = () => {
      window.scrollY > 100
        ? i.classList.add('header-scrolled')
        : i.classList.remove('header-scrolled');
    };
    window.addEventListener('load', o), s(document, o);
  }
  let r = e('.back-to-top');
  if (r) {
    let c = () => {
      window.scrollY > 100
        ? r.classList.add('active')
        : r.classList.remove('active');
    };
    window.addEventListener('load', c), s(document, c);
  }
  t('click', '.mobile-nav-toggle', function (t) {
    e('#navbar').classList.toggle('navbar-mobile'),
      this.classList.toggle('bi-list'),
      this.classList.toggle('bi-x');
    e('#open').classList.toggle('d-none');
    e('#close').classList.toggle('d-block');
  }),
    t(
      'click',
      '.navbar .dropdown > a',
      function (t) {
        e('#navbar').classList.contains('navbar-mobile') &&
          (t.preventDefault(),
          this.nextElementSibling.classList.toggle('dropdown-active'));
      },
      !0
    );
})();
