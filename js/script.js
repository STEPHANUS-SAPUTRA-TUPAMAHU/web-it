document.addEventListener('DOMContentLoaded', function () {
  /* ------------------------------ lucide icons ------------------------------ */
  if (window.lucide) lucide.createIcons();

  /* ------------------------------ mobile nav ------------------------------ */
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('hidden');
      navToggle.querySelectorAll('i[data-icon]').forEach(function (ic) {
        ic.classList.toggle('hidden');
      });
    });
  }

  /* ------------------------------ accordion ------------------------------ */
  document.querySelectorAll('.accordion-item').forEach(function (item) {
    var head = item.querySelector('.accordion-head');
    if (!head) return;
    head.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item.open').forEach(function (o) {
        o.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ------------------------------ scroll reveal ------------------------------ */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* stagger children of [data-stagger] containers */
  document.querySelectorAll('[data-stagger]').forEach(function (root) {
    root.querySelectorAll('.reveal').forEach(function (el, i) {
      el.style.transitionDelay = (i * 90) + 'ms';
    });
  });

  /* ------------------------------ back to top ------------------------------ */
  var topBtn = document.getElementById('back-to-top');
  if (topBtn) {
    var updateTop = function () {
      var show = window.scrollY > 400;
      topBtn.classList.toggle('opacity-0', !show);
      topBtn.classList.toggle('pointer-events-none', !show);
    };
    window.addEventListener('scroll', updateTop, { passive: true });
    updateTop();
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});