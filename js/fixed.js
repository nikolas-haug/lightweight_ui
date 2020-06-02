// When the user scrolls the page, execute myFunction
window.onscroll = function() {fixedSidebar()};

// Get the navbar
const sidebar = document.querySelector('.sidebar');

// Get the content
const content = document.querySelector('.content');

// Get the offset position of the sidebar
const sticky = sidebar.offsetTop;

// Get all list items in sidebar
const sidebarItems = document.querySelectorAll('ul li a');

// Add the sticky class to the sidebar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixedSidebar() {
  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("aside--fixed");
    content.classList.add('content--fixed');
  } else {
    sidebar.classList.remove("aside--fixed");
    content.classList.remove('content--fixed');
  }
  // Add active class to current content section
  sidebarItems.forEach(item => {
    let refElement = document.querySelector(item.getAttribute('href'));
    if(refElement.offsetTop <= window.pageYOffset && refElement.offsetTop + refElement.offsetHeight > window.pageYOffset) {
        item.classList.add('aside--active');
    } else {
        item.classList.remove('aside--active');
    }
  });
}