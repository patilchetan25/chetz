const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const yearEl = document.getElementById("year");
const root = document.documentElement;
const dayEl = document.querySelector(".hero__badge-day");

if (dayEl) {
  const today = new Date().getDate().toString().padStart(2, "0");
  dayEl.textContent = today;
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.setAttribute("aria-hidden", String(expanded));
  });

  navLinks.setAttribute("aria-hidden", "true");
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const updateBackgroundMotion = () => {
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
  const shift = (progress - 0.5) * 260;
  const fadeWave = 0.5 + 0.5 * Math.sin(progress * Math.PI * 3);
  root.style.setProperty("--bg-shift", `${shift}px`);
  root.style.setProperty("--bg-fade", fadeWave.toString());
};

updateBackgroundMotion();
window.addEventListener("scroll", updateBackgroundMotion, { passive: true });
window.addEventListener("resize", updateBackgroundMotion);

const revealElements = document.querySelectorAll(".reveal-on-scroll");
if (revealElements.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  revealElements.forEach((el) => observer.observe(el));
}
