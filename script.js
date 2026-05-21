const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const projectButtons = document.querySelectorAll("[data-project]");
const heroImage = document.querySelector(".hero__image");
const dialog = document.querySelector(".project-dialog");
const dialogClose = document.querySelector(".dialog-close");
const dialogImage = document.querySelector(".dialog-image");
const dialogTitle = document.querySelector("#dialog-title");
const dialogType = document.querySelector(".dialog-type");
const dialogLocation = document.querySelector(".dialog-location");
const dialogDescription = document.querySelector(".dialog-description");
const dialogTags = document.querySelector(".dialog-tags");
const dialogGallery = document.querySelector(".dialog-gallery");
const dialogAtmosphere = document.querySelector(".dialog-atmosphere");
const dialogMaterials = document.querySelector(".dialog-materials");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
let previousScrollY = 0;

const projects = {
  "amber-room": {
    title: "The Amber Room",
    type: "Private residence",
    location: "Antwerp",
    image:
      "https://images.unsplash.com/photo-1773578639782-2046b150ce28?auto=format&fit=crop&w=1800&q=84",
    alt: "Layered living space with green seating and timber floors.",
    description:
      "A private interior composed around deep comfort, timber warmth and quiet contrast. The room was designed as a living landscape where guests move from everyday ease into a more intimate, expressive atmosphere.",
    tags: ["Timber", "Olive", "Layered light", "Private ritual"],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1773578639782-2046b150ce28?auto=format&fit=crop&w=900&q=78",
        alt: "Wide view of the warm amber-toned residence.",
      },
      {
        src: "https://images.unsplash.com/photo-1772442364436-6ee6e42302a2?auto=format&fit=crop&w=900&q=78",
        alt: "Close interior detail with wood, stone and warm sunlight.",
      },
      {
        src: "https://images.unsplash.com/photo-1770625467884-9372c6a03b4a?auto=format&fit=crop&w=900&q=78",
        alt: "Dark timber surface with architectural rhythm.",
      },
    ],
    atmosphere:
      "Quiet, grounding and intimate, with the feeling of entering a room that has already gathered memories.",
    materials: "Waxed timber, olive upholstery, muted metal, soft wool and low amber light.",
  },
  "solstice-table": {
    title: "Table for Solstice",
    type: "Dinner experience",
    location: "Ghent",
    image:
      "https://images.unsplash.com/photo-1768594266719-ab1569870a1f?auto=format&fit=crop&w=1800&q=84",
    alt: "Elegant event table with candles, plants and soft fabric.",
    description:
      "An event setting built around the slow drama of candlelight, natural materials and close conversation. Every element was curated to make the table feel ceremonial without becoming distant.",
    tags: ["Candlelight", "Gathering", "Soft fabric", "Ceremony"],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1768594266719-ab1569870a1f?auto=format&fit=crop&w=900&q=78",
        alt: "Elegant event table with candles and soft textile layers.",
      },
      {
        src: "https://images.unsplash.com/photo-1716850724755-21a55ab68f25?auto=format&fit=crop&w=900&q=78",
        alt: "Close-up of candles on an intimate table.",
      },
      {
        src: "https://images.unsplash.com/photo-1773913106047-d8e205a63e4b?auto=format&fit=crop&w=900&q=78",
        alt: "Floral table arrangement with warm light.",
      },
    ],
    atmosphere:
      "A slow evening rhythm: candlelight, close conversation, soft movement and a sense of ritual.",
    materials: "Linen, glass, dark greenery, ceramic tableware and hand-placed candlelight.",
  },
  nocturne: {
    title: "Nocturne Panels",
    type: "Material installation",
    location: "Brussels",
    image:
      "https://images.unsplash.com/photo-1770625467884-9372c6a03b4a?auto=format&fit=crop&w=1800&q=84",
    alt: "Dark geometric wooden wall texture with atmospheric light.",
    description:
      "A tactile installation that explores shadow, rhythm and the emotional weight of material. The result is a deep architectural backdrop that changes throughout the evening.",
    tags: ["Dark wood", "Texture", "Shadow", "Architectural detail"],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1770625467884-9372c6a03b4a?auto=format&fit=crop&w=900&q=78",
        alt: "Dark geometric timber panels with warm backlight.",
      },
      {
        src: "https://images.unsplash.com/photo-1772442364436-6ee6e42302a2?auto=format&fit=crop&w=900&q=78",
        alt: "Sculptural interior detail in warm light.",
      },
      {
        src: "https://images.unsplash.com/photo-1773578639782-2046b150ce28?auto=format&fit=crop&w=900&q=78",
        alt: "Warm interior scene with layered architectural details.",
      },
    ],
    atmosphere:
      "Dense, architectural and nocturnal, built for a space that changes as people move through it.",
    materials: "Charred timber, shadow gaps, warm backlighting and deep matte surfaces.",
  },
  "linen-apartment": {
    title: "The Linen Apartment",
    type: "Apartment interior",
    location: "Mechelen",
    image:
      "https://images.unsplash.com/photo-1772442364436-6ee6e42302a2?auto=format&fit=crop&w=1800&q=84",
    alt: "Warm sunlight on sculptural interior objects and wood.",
    description:
      "A restrained apartment concept where sunlight, collected objects and soft-toned surfaces create a sense of slow domestic luxury. The design favors small moments that feel lived-in and intentional.",
    tags: ["Sunlight", "Stone", "Linen tones", "Quiet luxury"],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1772442364436-6ee6e42302a2?auto=format&fit=crop&w=900&q=78",
        alt: "Warm sunlight on wood, stone and collected objects.",
      },
      {
        src: "https://images.unsplash.com/photo-1773578639782-2046b150ce28?auto=format&fit=crop&w=900&q=78",
        alt: "Residential interior with soft seating and timber floors.",
      },
      {
        src: "https://images.unsplash.com/photo-1716850724755-21a55ab68f25?auto=format&fit=crop&w=900&q=78",
        alt: "Candlelit surface detail for a warm domestic mood.",
      },
    ],
    atmosphere:
      "Soft, collected and sun-warmed, designed around small pauses and daily rituals.",
    materials: "Linen, warm wood, aged brass, soft plaster and mineral stone.",
  },
  "quiet-ceremony": {
    title: "Quiet Ceremony",
    type: "Brand launch",
    location: "Knokke",
    image:
      "https://images.unsplash.com/photo-1773913106047-d8e205a63e4b?auto=format&fit=crop&w=1800&q=84",
    alt: "Table setting with floral centerpiece and lit candles.",
    description:
      "A launch environment designed as a sensory welcome: floral structure, reflective tableware and warm light working together to frame a brand story with intimacy and restraint.",
    tags: ["Florals", "Reflection", "Hosting", "Brand atmosphere"],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1773913106047-d8e205a63e4b?auto=format&fit=crop&w=900&q=78",
        alt: "Floral event table with lit candles.",
      },
      {
        src: "https://images.unsplash.com/photo-1768594266719-ab1569870a1f?auto=format&fit=crop&w=900&q=78",
        alt: "Elegant event table with plants and candlelight.",
      },
      {
        src: "https://images.unsplash.com/photo-1716850724755-21a55ab68f25?auto=format&fit=crop&w=900&q=78",
        alt: "Close candlelight detail on an intimate table.",
      },
    ],
    atmosphere:
      "Refined and welcoming, with a launch moment that feels hosted rather than staged.",
    materials: "Florals, reflective glass, ceramic pieces, warm metal and tonal linen.",
  },
};

const lockPageScroll = () => {
  if (document.body.classList.contains("is-dialog-open")) {
    return;
  }

  previousScrollY = window.scrollY;
  document.body.style.top = `-${previousScrollY}px`;
  document.body.classList.add("is-dialog-open");
};

const unlockPageScroll = () => {
  if (!document.body.classList.contains("is-dialog-open")) {
    return;
  }

  document.body.classList.remove("is-dialog-open");
  document.body.style.top = "";
  window.scrollTo(0, previousScrollY);
};

const openProjectDialog = () => {
  if (dialog.open) {
    return;
  }

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }

  dialog.scrollTop = 0;
  lockPageScroll();
};

const closeProjectDialog = () => {
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
    unlockPageScroll();
  }
};

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

const setHeroDrift = () => {
  if (!heroImage) {
    return;
  }

  const drift = Math.min(window.scrollY * 0.05, 28);
  heroImage.style.setProperty("--hero-drift", `${drift}px`);
};

setHeaderState();
setHeroDrift();
window.addEventListener(
  "scroll",
  () => {
    setHeaderState();
    setHeroDrift();
  },
  { passive: true },
);

const revealItems = document.querySelectorAll(
  ".intro__text, .intro__body, .mood, .mood__statement, .section-heading, .project-filters, .project-card, .studio__media, .studio__content, .contact__intro, .contact-form",
);

const revealVisibleItems = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

    if (isVisible) {
      item.classList.add("is-visible");
    }
  });
};

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal-target");
    item.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
    revealObserver.observe(item);
  });

  if (window.location.hash) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  requestAnimationFrame(revealVisibleItems);
  window.addEventListener("load", revealVisibleItems);
  window.addEventListener("hashchange", revealVisibleItems);
  window.addEventListener("scroll", revealVisibleItems, { passive: true });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);

      if (shouldShow) {
        card.classList.remove("is-filtering");
        void card.offsetWidth;
        card.classList.add("is-filtering");
      }
    });
  });
});

projectButtons.forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty("--x", `${x}%`);
    button.style.setProperty("--y", `${y}%`);
  });

  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];

    dialogImage.src = project.image;
    dialogImage.alt = project.alt;
    dialogTitle.textContent = project.title;
    dialogType.textContent = project.type;
    dialogLocation.textContent = project.location;
    dialogDescription.textContent = project.description;
    dialogAtmosphere.textContent = project.atmosphere;
    dialogMaterials.textContent = project.materials;
    dialogTags.replaceChildren(
      ...project.tags.map((tag) => {
        const item = document.createElement("li");
        item.textContent = tag;
        return item;
      })
    );
    dialogGallery.replaceChildren(
      ...project.gallery.map((image) => {
        const item = document.createElement("img");
        item.src = image.src;
        item.alt = image.alt;
        item.loading = "lazy";
        return item;
      })
    );

    openProjectDialog();
  });
});

dialogClose.addEventListener("click", closeProjectDialog);
dialog.addEventListener("close", unlockPageScroll);

dialog.addEventListener("click", (event) => {
  const dialogBox = dialog.getBoundingClientRect();
  const isInDialog =
    event.clientX >= dialogBox.left &&
    event.clientX <= dialogBox.right &&
    event.clientY >= dialogBox.top &&
    event.clientY <= dialogBox.bottom;

  if (!isInDialog) {
    closeProjectDialog();
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
  formStatus.textContent = "Thank you. Your inquiry is ready for the Sézane team.";
});
