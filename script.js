// Lightweight, recruiter-friendly interactions
(function () {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile navigation toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Elevator pitch — aligned to site content
  const copyBtn = document.getElementById("copyElevator");
  const status = document.getElementById("copyStatus");

  const elevator =
   "Hi, I’m Betti — a software engineer with hands-on experience in web and mobile development, Linux troubleshooting, AWS cloud fundamentals, and applied research in activity recognition. I build reliable, user-focused solutions and communicate clearly across technical and non-technical teams. I’m targeting roles in Software Engineering and Cloud/Infrastructure where I can learn quickly and deliver dependably.";
  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = "Copied.";
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      status.textContent = "Copied.";
    }

    setTimeout(() => (status.textContent = ""), 2200);
  }

  if (copyBtn && status) copyBtn.addEventListener("click", () => copy(elevator));

  // Simple image gallery
  const galleryImg = document.getElementById("galleryImg");
  const prev = document.getElementById("prevImg");
  const next = document.getElementById("nextImg");

  const images = [
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
  ];

  let index = 0;

  function showImage() {
    if (galleryImg) galleryImg.src = images[index];
  }

  if (prev && next && galleryImg) {
    prev.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      showImage();
    });

    next.addEventListener("click", () => {
      index = (index + 1) % images.length;
      showImage();
    });
  }
})();
