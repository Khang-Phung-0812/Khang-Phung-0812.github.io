'use strict';

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener('click', () => {
    const isOpen = sidebar.getAttribute('data-open') === 'true';
    sidebar.setAttribute('data-open', String(!isOpen));
    sidebarBtn.textContent = isOpen ? 'Show Contacts' : 'Hide Contacts';
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.textContent.trim().toLowerCase();

    pages.forEach((page) => {
      page.classList.toggle('active', page.dataset.page === target);
    });

    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
