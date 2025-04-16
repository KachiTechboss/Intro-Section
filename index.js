document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('open');

      // Optional: Close other dropdowns
      document.querySelectorAll('.dropdown').forEach(item => {
        if (item !== parent) {
          item.classList.remove('open');
        }
      });
    });
  });

  // Optional: Click outside to close
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(item => {
        item.classList.remove('open');
      });
    }
});
document.querySelectorAll('.dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        const dropdownMenu = this.nextElementSibling;
        const arrowIcon = this.querySelector('img');

        // Toggle dropdown menu visibility
        dropdownMenu.classList.toggle('visible');

        // Toggle arrow icon
        if (arrowIcon.src.includes('icon-arrow-up.svg')) {
            arrowIcon.src = 'images/icon-arrow-down.svg';
        } else {
            arrowIcon.src = 'images/icon-arrow-up.svg';
        }
    });
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class on .nav-links
});
const closeMenu = document.querySelector('.close-menu');

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Remove the 'active' class to hide the menu
});



