document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");


  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  });

  const coll = document.querySelectorAll(".collapsible");
  coll.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
  });

  // const slack_button = document.querySelector('.btn-slack');
  // const slack_img = document.querySelector('.slack-img');

  // slack_button.addEventListener('mouseenter', () => {
  //   slack_img.style.backgroundColor = '#50144c';
  // });

  // slack_button.addEventListener('mouseleave', () => {
  //   slack_img.style.backgroundColor = '';
  // });

  
  function smoothScrollToTarget(targetSelector, duration = 1000) {
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(step);
  }

  
  const viewCourseBtn = document.querySelector('.btn.btn-secondary');
  if (viewCourseBtn) {
    viewCourseBtn.addEventListener('click', function (e) {
      e.preventDefault();
      smoothScrollToTarget('#course');
    });
  }

  const contactLink = document.querySelector('a[href="#contact"]');
  if (contactLink) {
    contactLink.addEventListener('click', function (e) {
      e.preventDefault();
      smoothScrollToTarget('#contact');
    });
  }
});

