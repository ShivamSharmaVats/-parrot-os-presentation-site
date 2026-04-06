const revealTargets = [
  ...document.querySelectorAll('.hero-inner'),
  ...document.querySelectorAll('.panel'),
  ...document.querySelectorAll('.panel .card')
];

revealTargets.forEach((el, index) => {
  el.classList.add('reveal');
  el.style.setProperty('--reveal-delay', `${(index % 6) * 70}ms`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -8% 0px'
  }
);

revealTargets.forEach((el) => observer.observe(el));
