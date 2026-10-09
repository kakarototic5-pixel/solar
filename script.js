/* =========================================================
   LE SYSTÈME SOLAIRE — script.js (v3)
   ========================================================= */

(function () {
  "use strict";

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =======================================================
     1. DONNÉES DES ASTRES
     ======================================================= */
  const PLANETS = {
    /* ---------- Planètes telluriques ---------- */
    Mercure: {
      type: "Tellurique",
      img: "img/Design_sans_titre-removebg-preview.png",
      desc: "La planète la plus proche du Soleil. Dépourvue d'atmosphère significative, elle subit des écarts de température extrêmes entre le jour (430 °C) et la nuit (−180 °C).",
      stats: {
        "Distance au Soleil": "57,9 M km",
        "Diamètre": "4 879 km",
        "Un jour dure": "58,6 jours",
        "Satellites": "0"
      }
    },
    "Vénus": {
      type: "Tellurique",
      img: "img/venus-mariner-10-pia23791-1920x640-1-removebg-preview.png",
      desc: "La planète la plus chaude du système solaire à cause de son atmosphère très dense, composée majoritairement de dioxyde de carbone. Sa pression au sol est 92 fois plus élevée que sur Terre.",
      stats: {
        "Distance au Soleil": "108,2 M km",
        "Diamètre": "12 104 km",
        "Température": "+465 °C",
        "Satellites": "0"
      }
    },
    Terre: {
      type: "Tellurique",
      img: "img/Terre-removebg-preview.png",
      desc: "La seule planète connue qui abrite la vie. Son atmosphère riche en oxygène, son eau liquide et son champ magnétique protecteur en font un monde unique dans le système solaire.",
      stats: {
        "Distance au Soleil": "149,6 M km",
        "Diamètre": "12 742 km",
        "Un jour dure": "23 h 56",
        "Satellites": "1 (la Lune)"
      }
    },
    Mars: {
      type: "Tellurique",
      img: "img/Mars-removebg-preview.png",
      desc: "Surnommée la planète rouge à cause de l'oxyde de fer présent à sa surface. Elle abrite le plus grand volcan du système solaire, Olympus Mons (21 km), et pourrait servir à une future colonisation humaine.",
      stats: {
        "Distance au Soleil": "227,9 M km",
        "Diamètre": "6 779 km",
        "Un jour dure": "24 h 37",
        "Satellites": "2 (Phobos, Déimos)"
      }
    },

    /* ---------- Géantes gazeuses ---------- */
    Jupiter: {
      type: "Gazeuse",
      img: "img/jupiter-marble-pia22946-16x9-1-removebg-preview.png",
      desc: "La plus grande planète du système solaire : 11 fois le diamètre de la Terre. C'est une géante gazeuse dont la Grande Tache Rouge est une tempête plus large que la Terre, active depuis plus de 350 ans.",
      stats: {
        "Distance au Soleil": "778,5 M km",
        "Diamètre": "142 984 km",
        "Un jour dure": "9 h 56",
        "Satellites": "plus de 95"
      }
    },
    Saturne: {
      type: "Gazeuse",
      img: "img/Saturn-removebg-preview.png",
      desc: "Célèbre pour ses magnifiques anneaux, composés de glace et de poussière. Elle est si peu dense qu'elle flotterait sur l'eau — la seule planète du système solaire dans ce cas.",
      stats: {
        "Distance au Soleil": "1,43 Md km",
        "Diamètre": "120 536 km",
        "Un jour dure": "10 h 42",
        "Satellites": "plus de 140"
      }
    },

    /* ---------- Géantes de glace ---------- */
    Uranus: {
      type: "Glacée",
      img: "img/uranus-removebg-preview.png",
      desc: "Une planète glacée qui tourne presque couchée sur elle-même : son axe est incliné d'environ 98° par rapport à son orbite. Elle effectue un tour complet du Soleil en 84 années terrestres.",
      stats: {
        "Distance au Soleil": "2,87 Md km",
        "Diamètre": "51 118 km",
        "Inclinaison": "98°",
        "Satellites": "plus de 27"
      }
    },
    Neptune: {
      type: "Glacée",
      img: "img/neptune-removebg-preview.png",
      desc: "La planète la plus éloignée du Soleil. Elle est balayée par les vents les plus violents du système solaire, qui peuvent dépasser 2 000 km/h. Une année neptunienne dure 165 années terrestres.",
      stats: {
        "Distance au Soleil": "4,50 Md km",
        "Diamètre": "49 528 km",
        "Vents": "jusqu'à 2 100 km/h",
        "Satellites": "plus de 14"
      }
    },

    /* ---------- Planètes naines ---------- */
    "Cérès": {
      type: "Naine",
      img: "img/ceres.png",
      desc: "Cérès est le plus grand objet de la ceinture d'astéroïdes, entre Mars et Jupiter. C'est la seule planète naine du système solaire interne, et la première à avoir été découverte (1801).",
      stats: {
        "Distance au Soleil": "413 M km",
        "Diamètre": "952 km",
        "Un jour dure": "9 h",
        "Satellites": "0"
      }
    },
    Pluton: {
      type: "Naine",
      img: "img/pluton.png",
      desc: "Longtemps considérée comme la neuvième planète du système solaire, Pluton a été reclassée comme planète naine en 2006 par l'Union astronomique internationale. Elle possède des plaines de glace d'azote et une atmosphère ténue.",
      stats: {
        "Distance au Soleil": "5,9 Md km",
        "Diamètre": "2 377 km",
        "Un jour dure": "6,4 jours",
        "Satellites": "5 (Charon, Nix, Hydra...)"
      }
    },
    "Hauméa": {
      type: "Naine",
      img: "img/haumea.png",
      desc: "Hauméa est une planète naine allongée qui tourne sur elle-même en seulement 4 heures — l'un des objets les plus rapides du système solaire. Elle possède deux petites lunes et un anneau.",
      stats: {
        "Distance au Soleil": "6,5 Md km",
        "Diamètre": "≈ 1 400 km",
        "Un jour dure": "3,9 h",
        "Satellites": "2 (Hi'iaka, Namaka)"
      }
    },
    "Makémaké": {
      type: "Naine",
      img: "img/makemake.png",
      desc: "Makémaké est une planète naine rougeâtre de la ceinture de Kuiper, découverte en 2005. Elle est recouverte de méthane gelé et ne possède aucune lune connue.",
      stats: {
        "Distance au Soleil": "6,8 Md km",
        "Diamètre": "≈ 1 430 km",
        "Un jour dure": "22,5 h",
        "Satellites": "0"
      }
    },
    "Éris": {
      type: "Naine",
      img: "img/eris.png",
      desc: "Aussi massive que Pluton, Éris a motivé la reclassification de Pluton en 2006. Elle est plus éloignée du Soleil que Pluton et met 558 années terrestres à en faire le tour.",
      stats: {
        "Distance au Soleil": "10,1 Md km",
        "Diamètre": "2 326 km",
        "Un jour dure": "25,9 h",
        "Satellites": "1 (Dysnomie)"
      }
    }
  };

  /* =======================================================
     2. ANIMATIONS D'APPARITION AU SCROLL
     ======================================================= */
  const revealEls = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* =======================================================
     3. MENU MOBILE
     ======================================================= */
  const navToggle = document.querySelector(".navToggle");
  const navList = document.getElementById("navList");

  if (navToggle && navList) {
    const closeNav = () => {
      navList.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navList.classList.toggle("is-open", !isOpen);
      navToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    navList.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", closeNav)
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeNav();
    });
  }

  /* =======================================================
     4. THÈME CLAIR / SOMBRE
     ======================================================= */
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle?.querySelector(".themeToggle__icon");
  const root = document.documentElement;

  const applyTheme = (theme) => {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      if (themeIcon) themeIcon.textContent = "☀️";
    } else {
      root.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "🌙";
    }
  };

  let savedTheme = null;
  try { savedTheme = localStorage.getItem("solar-theme"); } catch (e) {}
  applyTheme(savedTheme || "dark");

  themeToggle?.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem("solar-theme", next); } catch (e) {}
  });

  /* =======================================================
     5. BARRE DE PROGRESSION
     ======================================================= */
  const progressFill = document.getElementById("progressFill");

  const updateProgress = () => {
    if (!progressFill) return;
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    progressFill.style.width = pct + "%";
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  /* =======================================================
     6. BOUTON RETOUR EN HAUT
     ======================================================= */
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 500);
    };
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* =======================================================
     7. FILTRES
     ======================================================= */
  const filterChips = document.querySelectorAll(".filterChip");
  const planetCards = document.querySelectorAll(".planetCard");
  const emptyState = document.getElementById("emptyState");

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.dataset.filter;

      filterChips.forEach((c) => {
        const isActive = c === chip;
        c.classList.toggle("is-active", isActive);
        c.setAttribute("aria-selected", String(isActive));
      });

      let visible = 0;
      planetCards.forEach((card) => {
        const type = card.dataset.type;
        const show = filter === "all" || type === filter;
        card.classList.toggle("is-hidden", !show);
        if (show) {
          visible++;
          card.classList.remove("is-visible");
          void card.offsetWidth;
          card.classList.add("is-visible");
        }
      });

      if (emptyState) emptyState.hidden = visible > 0;
    });
  });

  /* =======================================================
     8. MODALE "FICHE ASTRE"
     ======================================================= */
  const dialog = document.getElementById("planetDialog");
  const dialogImg = document.getElementById("dialogImg");
  const dialogType = document.getElementById("dialogType");
  const dialogTitle = document.getElementById("dialogTitle");
  const dialogDesc = document.getElementById("dialogDesc");
  const dialogStats = document.getElementById("dialogStats");
  const dialogClose = dialog ? dialog.querySelector("[data-close]") : null;

  let lastFocused = null;
  const planetOrder = Object.keys(PLANETS);

  function openPlanet(name) {
    const data = PLANETS[name];
    if (!data || !dialog) return;

    lastFocused = document.activeElement;

    dialogImg.src = data.img;
    dialogImg.alt = name;
    dialogType.textContent = "Fiche · " + data.type;
    dialogTitle.textContent = name;
    dialogDesc.textContent = data.desc;

    dialogStats.innerHTML = "";
    Object.entries(data.stats).forEach(([label, value]) => {
      const wrapper = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      wrapper.append(dt, dd);
      dialogStats.appendChild(wrapper);
    });

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      toast(`🪐 ${name} — ${data.desc}`);
    }
  }

  function openPlanetByIndex(index) {
    const name = planetOrder[index];
    if (name) openPlanet(name);
  }

  if (dialog) {
    dialogClose?.addEventListener("click", () => dialog.close());

    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", () => {
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    });

    dialog.addEventListener("keydown", (e) => {
      const n = parseInt(e.key, 10);
      if (!isNaN(n) && n >= 1 && n <= 9) {
        const name = planetOrder[n - 1];
        if (name) openPlanet(name);
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (dialog && dialog.open) return;
    if (e.target.matches("input, textarea")) return;

    const n = parseInt(e.key, 10);
    if (!isNaN(n) && n >= 1 && n <= 9) {
      openPlanetByIndex(n - 1);
    }
  });

  /* =======================================================
     9. CARTES
     ======================================================= */
  planetCards.forEach((card) => {
    const name = card.dataset.planet || card.querySelector("h3")?.textContent.trim();
    card.addEventListener("click", () => {
      if (PLANETS[name]) openPlanet(name);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (PLANETS[name]) openPlanet(name);
      }
    });
  });

  /* =======================================================
     10. TOAST
     ======================================================= */
  let toastEl = null;
  let toastTimer = null;

  function toast(message, duration = 4200) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    void toastEl.offsetWidth;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), duration);
  }

  /* =======================================================
     11. BOUTON "INFO ESPACE"
     ======================================================= */
  const FACTS = [
    "🌍 Le système solaire s'est formé il y a environ 4,6 milliards d'années.",
    "☀️ Le Soleil représente à lui seul 99,86 % de la masse du système solaire.",
    "🪐 Jupiter est si grande que 1 300 Terres pourraient tenir à l'intérieur.",
    "💫 Une année sur Neptune dure environ 165 années terrestres.",
    "🌕 La Lune s'éloigne de la Terre d'environ 3,8 cm par an.",
    "🔥 Vénus est plus chaude que Mercure, pourtant plus proche du Soleil.",
    "🧊 Uranus roule sur son orbite : son axe est incliné de près de 98°.",
    "🛰️ La sonde Voyager 1 est l'objet humain le plus éloigné de la Terre.",
    "🌪️ Les vents sur Neptune peuvent dépasser 2 000 km/h.",
    "⭐ La lumière du Soleil met environ 8 minutes à nous parvenir.",
    "🌍 Notre système solaire orbite autour du centre de la Voie lactée à environ 828 000 km/h, et met 230 millions d'années pour en faire le tour.",
    "🌕 Le système solaire compte plus de 891 lunes confirmées.",
    "🪨 La ceinture d'astéroïdes, entre Mars et Jupiter, contient des centaines de milliers d'astéroïdes.",
    "💧 Europe, lune de Jupiter, possède un océan souterrain contenant deux fois plus d'eau que tous les océans terrestres.",
    "🌋 Io, lune de Jupiter, est le corps le plus volcaniquement actif du système solaire.",
    "☄️ La sonde Stardust a découvert l'acide aminé glycine dans la poussière d'une comète.",
    "🪐 Saturne est la seule planète du système solaire moins dense que l'eau.",
    "🌑 Pluton a été reclassée comme planète naine en 2006 par l'Union astronomique internationale.",
    "💎 Hauméa tourne sur elle-même en moins de 4 heures — c'est l'un des objets les plus rapides du système solaire.",
    "🚀 La sonde New Horizons a mis près de 10 ans pour atteindre Pluton après son lancement en 2006."
  ];

  const fab = document.getElementById("spaceFact");
  let lastFactIndex = -1;

  if (fab) {
    fab.addEventListener("click", () => {
      let index;
      do { index = Math.floor(Math.random() * FACTS.length); }
      while (index === lastFactIndex && FACTS.length > 1);
      lastFactIndex = index;
      toast(FACTS[index]);
    });
  }

  /* =======================================================
     12. HORLOGE SPATIALE
     ======================================================= */
  const clock = document.createElement("div");
  clock.className = "clock";
  clock.setAttribute("aria-hidden", "true");
  document.body.appendChild(clock);

  const timeFormatter = new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  });

  const updateClock = () => {
    clock.textContent = "🕒 " + timeFormatter.format(new Date());
  };

  updateClock();
  setInterval(updateClock, 1000);

  /* =======================================================
     13. SCROLL FLUIDE (fallback)
     ======================================================= */
  if (!CSS.supports("scroll-padding-top", "10px")) {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = link.getAttribute("href");
        if (id === "#" || id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const headerH = document.querySelector(".header")?.offsetHeight ?? 76;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 16;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  }

  /* =======================================================
     14. PARALLAX HERO
     ======================================================= */
  const heroImg = document.querySelector(".heroImg");

  if (heroImg && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
    const heroMedia = heroImg.closest(".heroMedia") || heroImg.parentElement;

    heroMedia.addEventListener("mousemove", (e) => {
      const rect = heroMedia.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroImg.style.transform =
        `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.04)`;
    });

    heroMedia.addEventListener("mouseleave", () => {
      heroImg.style.transform = "";
    });
  }

  /* =======================================================
     15. CHAMP D'ÉTOILES (canvas)
     ======================================================= */
  const canvas = document.getElementById("starfield");

  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    let stars = [];
    let w = 0;
    let h = 0;
    let raf = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);

      const count = Math.min(160, Math.floor((window.innerWidth * window.innerHeight) / 12000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.6 + 0.15,
        tw: Math.random() * 0.03 + 0.005,
        dir: Math.random() > 0.5 ? 1 : -1
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const light = document.documentElement.getAttribute("data-theme") === "light";
      const baseColor = light ? "20, 40, 70" : "255, 255, 255";

      stars.forEach((s) => {
        s.a += s.tw * s.dir;
        if (s.a <= 0.12 || s.a >= 0.85) s.dir *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor}, ${s.a})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    const start = () => {
      resize();
      if (raf) cancelAnimationFrame(raf);
      draw();
    };

    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(start, 200);
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (raf) cancelAnimationFrame(raf);
        raf = null;
      } else if (!raf) {
        draw();
      }
    });

    start();
  }
})();