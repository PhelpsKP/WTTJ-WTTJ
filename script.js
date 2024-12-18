// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Add "loaded" class to body after the splash screen
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 2000); // Adjust time as needed

  // Fancybox initialization for the gallery
  $(".fancybox").fancybox();

  // Smooth scrolling for video gallery
  const videoScrollContainer = document.querySelector(".video-scroll");

  if (videoScrollContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    videoScrollContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      videoScrollContainer.classList.add("active");
      startX = e.pageX - videoScrollContainer.offsetLeft;
      scrollLeft = videoScrollContainer.scrollLeft;
    });

    videoScrollContainer.addEventListener("mouseleave", () => {
      isDown = false;
      videoScrollContainer.classList.remove("active");
    });

    videoScrollContainer.addEventListener("mouseup", () => {
      isDown = false;
      videoScrollContainer.classList.remove("active");
    });

    videoScrollContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - videoScrollContainer.offsetLeft;
      const walk = (x - startX) * 3; // Scroll speed multiplier
      videoScrollContainer.scrollLeft = scrollLeft - walk;
    });
  }

  // Scroll Indicator Animation
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    window.addEventListener("scroll", () => {
      const opacity = 1 - window.scrollY / 200;
      scrollIndicator.style.opacity = opacity < 0 ? 0 : opacity;
    });
  }

  // Highlight active navigation link
  const navLinksList = document.querySelectorAll(".nav-tray a");
  const currentPage = window.location.pathname;

  navLinksList.forEach((link) => {
    if (link.href.includes(currentPage)) {
      link.classList.add("active");
    }
  });

  // Populate Video Gallery
  const videoGallery = [
    "https://www.youtube.com/embed/BEo206xCMAE",
    "https://www.youtube.com/embed/ywcZ2aPCvZ8",
    "https://www.youtube.com/embed/I4BRuuY-9pI",
    "https://www.youtube.com/embed/L-OR7iBHmPo",
    "https://www.youtube.com/embed/uivGlk5Y5mE",
    "https://www.youtube.com/embed/vEO9pAlNDPo"
  ];

  const sliderWrapper = document.getElementById("sliderWrapper");
  if (sliderWrapper) {
    videoGallery.forEach((videoSrc) => {
      const videoItem = document.createElement("div");
      videoItem.className = "video-item";
      videoItem.innerHTML = `
        <iframe 
          src="${videoSrc}" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>`;
      sliderWrapper.appendChild(videoItem);
    });
  }

  // Video Gallery Scroll Buttons
  const scrollButtons = {
    prev: document.querySelector(".gallery-prev"),
    next: document.querySelector(".gallery-next"),
  };

  if (sliderWrapper && scrollButtons.prev && scrollButtons.next) {
    scrollButtons.prev.addEventListener("click", () => {
      sliderWrapper.scrollBy({ left: -300, behavior: "smooth" });
    });

    scrollButtons.next.addEventListener("click", () => {
      sliderWrapper.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});

// Lazy-loading YouTube videos
document.querySelectorAll(".video-item iframe").forEach((iframe) => {
  iframe.loading = "lazy";
});
