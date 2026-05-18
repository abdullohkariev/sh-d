function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});
