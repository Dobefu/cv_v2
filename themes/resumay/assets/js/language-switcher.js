(() => {
  "use strict";

  const switchers = document.querySelectorAll(".language-switcher");

  if (!switchers) {
    return;
  }

  for (const switcher of switchers) {
    const toggle = switcher.querySelector(".language-switcher__button");
    const dropdown = switcher.querySelector(".language-switcher__dropdown");

    if (!toggle || !dropdown) {
      continue;
    }

    toggle.addEventListener("click", (e) => {
      e.preventDefault();

      dropdown.classList.add("is-transitioning");
      dropdown.classList.toggle("open");

      setTimeout(() => {
        dropdown.classList.remove("is-transitioning");
      }, 200);
    });
  }
})();
