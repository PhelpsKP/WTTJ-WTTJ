document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.video-gallery');
    const scrollAmount = 200; // Adjust this value as needed
  
    document.getElementById('scroll-left').addEventListener('click', () => {
      gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  
    document.getElementById('scroll-right').addEventListener('click', () => {
      gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
  