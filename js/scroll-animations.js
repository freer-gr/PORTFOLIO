document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('.section-animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-active');
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
});
