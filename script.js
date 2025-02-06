function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

window.addEventListener('resize', () => {
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const headerHeight = document.querySelector("header").offsetHeight;

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const offsetTop = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    });
  });
});


  document.addEventListener("scroll", function() {
    const profileContainer = document.querySelector(".profile-container");
    const footer = document.querySelector("footer");
    const header = document.querySelector("header");
    const footerOffset = footer.offsetTop;
    const profileHeight = profileContainer.offsetHeight;
    const scrollPosition =  document.documentElement.scrollTop;
    const headerHeight = header.offsetHeight;

    if (scrollPosition + profileHeight + headerHeight >= footerOffset) {
      profileContainer.style.top = (footerOffset - scrollPosition - profileHeight) + "px";
    } else {
      profileContainer.style.top = headerHeight + "px";
    }
  });

