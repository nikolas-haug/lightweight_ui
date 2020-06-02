// When the user scrolls the page, execute myFunction
window.onscroll = function() {fixedSidebar()};

// Get the navbar
const sidebar = document.querySelector('.sidebar');

// Get the content
const content = document.querySelector('.content');

// Get the offset position of the sidebar
const sticky = sidebar.offsetTop;

// Get all list items in sidebar
const sidebarItems = document.querySelectorAll('.target-link');

// Get the mobile toggle button
const mobileToggle = document.querySelector('.mobile-toggle');

document.querySelector('.mobile-toggle').addEventListener('click', function(e) {
    sidebar.classList.toggle('sidebar-mobile--active');

    mobileToggle.classList.toggle('mobile-toggle--active');

    if(document.querySelector('.mobile-toggle > .mobile-toggle__hamburger').classList.contains('open-animate')) {
        document.querySelector('.mobile-toggle > .mobile-toggle__hamburger').classList.add('close-animate');
        document.querySelector('.mobile-toggle > .mobile-toggle__hamburger').classList.remove('open-animate');
    } else {
        document.querySelector('.mobile-toggle > .mobile-toggle__hamburger').classList.add('open-animate');
        document.querySelector('.mobile-toggle > .mobile-toggle__hamburger').classList.remove('close-animate');
    }

});

mobileToggle.addEventListener('transitionend', function(e) {
    this.classList.remove('animate');
});

sidebarItems.forEach(item => {
    item.addEventListener('click', (e) => {
        sidebar.classList.remove('sidebar-mobile--active');
    });
});

// Add the sticky class to the sidebar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixedSidebar() {
  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sidebar--fixed");
    content.classList.add('content--fixed');
  } else {
    sidebar.classList.remove("sidebar--fixed");
    content.classList.remove('content--fixed');
  }
  // Add active class to current content section
  sidebarItems.forEach(item => {
    let refElement = document.querySelector(item.getAttribute('href'));
    if(refElement.offsetTop <= window.pageYOffset && refElement.offsetTop + refElement.offsetHeight > window.pageYOffset && refElement.getAttribute('id') !== 'about') {
        item.classList.add('sidebar--active');
    } else {
        item.classList.remove('sidebar--active');
    }
  });
}