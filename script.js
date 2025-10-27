// Select sidebar elements outside to avoid re-querying inside functions
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const sidebarOverlay = document.getElementById('sidebar-overlay');

// Show the right section only and update active link
function showSection(sectionId) {
  document.querySelectorAll('.neat-section').forEach(s => s.style.display = 'none');
  const section = document.getElementById(sectionId);
  if (section) section.style.display = 'block';

  // Update active navigation link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.textContent.trim().toLowerCase() === sectionId);
  });

  // Close sidebar if open on mobile
  closeSidebar();
}

// Toggle sidebar open/close
function toggleSidebar() {
  navLinks.classList.toggle('show');
  sidebarOverlay.classList.toggle('show');
}

// Close sidebar (remove classes)
function closeSidebar() {
  navLinks.classList.remove('show');
  sidebarOverlay.classList.remove('show');
}

// Event Listeners
hamburger.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.textContent.trim().toLowerCase();
    showSection(sectionId);
  });
});

// Download Resume Handler
function downloadResume() {
  window.open('My_Resume.pdf', '_blank');
}

// Toggle project/cert details
function toggleDetails(id) {
  const el = document.getElementById(id);
  if(el) el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}

// Initial setup: show home on load
window.onload = () => showSection('home');
