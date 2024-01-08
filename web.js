// JavaScript
window.addEventListener('scroll', checkScroll);

function checkScroll() {
  var elements = document.querySelectorAll('.scroll-grow');

  for (var i = 0; i < elements.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = elements[i].getBoundingClientRect().top;
    var elementVisible = 100; // Change this to control when the animation starts

    if (elementTop < windowHeight - elementVisible) {
      elements[i].classList.add('grow');
    } else {
      elements[i].classList.remove('grow');
    }
  }
}

// Function to run when an intersection is observed
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Apply the animation with a delay based on the index
        entry.target.style.animationDelay = `${index * 0.2}s`;
        entry.target.classList.add('slide-in');
      }
    });
  }, { threshold: 0.5 }); // Trigger when half the item is in view

  // Observe all projects
  document.querySelectorAll('.project').forEach(project => observer.observe(project));
});
document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Reduce the delay on mobile
        const delay = window.innerWidth <= 768 ? index * 0.1 : index * 0.2;
        entry.target.style.animationDelay = `${delay}s`;
        entry.target.classList.add('slide-in');
      }
    });
  }, { threshold: 0.5 });

  projects.forEach(project => observer.observe(project));
});
