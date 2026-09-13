/**
 * Ganpati Utsav Invitation Website Scripts
 * Features:
 * - Trilingual Language Switcher (Marathi, Hindi, English) with instant UI translation
 * - Floating festive particles (marigold petals, diyas, spark particles)
 * - Interactive Leaflet Map with custom golden temple pin and popup
 * - Intersection Observer scroll reveal animations
 * - Ambient Shehnai / devotional flute background music synthesis (Web Audio API)
 */

// --- Content Dictionary for Trilingual Support ---
const translations = {
  mr: {
    brandText: "श्री गणेशाय नमः",
    shlokBanner: "॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    kidsLabel: "🌸 श्रीजा & श्रीजय 🌸",
    heroTitle: "गणपती बाप्पा मोरया! आपले सहर्ष स्वागत आहे",
    heroSubtitle: "आम्हा सर्व पवार कुटुंबियांतर्फे आपणांस आणि आपल्या परिवारास श्री गणेशोत्सवानिमित्त हार्दिक आमंत्रण!",
    hostFamily: "पवार परिवार (श्रीजा & श्रीजय)",
    arrivalLabel: "आगमन: शनिवार, १४ सप्टेंबर २०२४ (सकाळी ९:०० वा.)",
    visarjanLabel: "विसर्जन: अनंत चतुर्दशी",
    
    // Details Section
    detailsTitle: "उत्सव कार्यक्रम व वेळ",
    detailsSub: "बाप्पाच्या सेवेत व उत्सवात सहभागी व्हा",
    muhuratTitle: "स्थापना मुहूर्त व पूजा",
    muhuratDesc: "भाद्रपद शुक्ल चतुर्थी, सकाळी ०९:१५ ते दुपारी ०१:३०",
    venueTitle: "उत्सव स्थळ",
    venueDesc: "करण अपार्टमेंट, फ्लॅट नं. ७०१, प्लॉट नं. ८, सेक्टर १६, कळंबोली डी-मार्ट जवळ, रोडपाली, कळंबोली",
    prasadTitle: "महाप्रसाद",
    prasadDesc: "दररोज दुपारी १:०० ते ३:०० आणि संध्याकाळी ८:०० ते १०:००",

    // Aarti Timings
    aartiHeader: "दैनिक आरती वेळ",
    morningAarti: "सकाळची आरती",
    morningAartiTime: "सकाळी ०८:०० वा.",
    eveningAarti: "संध्याकाळची आरती",
    eveningAartiTime: "संध्याकाळी ०८:०० वा.",
    visarjanAarti: "उत्तरपूजा व महाआरती",
    visarjanAartiTime: "दुपारी १२:०० वा. (विसर्जन दिनी)",

    // Map Section
    mapTitle: "स्थळ आणि मार्ग नकाशा",
    mapSub: "कळंबोली डी-मार्ट जवळ आमच्या घरी पोहोचण्यासाठी नकाशा",
    mapMarkerTitle: "पवार निवास (करण अपार्टमेंट)",
    getDirectionsBtn: "गुगल मॅपवर दिशा मिळवा (Get Directions)",

    // Contact Section
    contactTitle: "संपर्क आणि पत्ता",
    contactSub: "काही अडचण असल्यास कृपया संपर्क साधावा",
    hostLabel: "निमंत्रक",
    hostPerson: "श्रीजा & श्रीजय (पवार परिवार)",
    phoneLabel: "संपर्क क्रमांक",
    addressLabel: "पत्ता",
    addressShortVal: "सेक्टर १६, रोडपाली, कळंबोली",
    closingQuote: "“आपली उपस्थिती आमच्यासाठी आनंदाची गोष्ट असेल. बाप्पाच्या आशीर्वादाने सर्वांचे जीवन सुख-समृद्धीने भरून जावो!”",
    footerBlessing: "॥ गणपती बाप्पा मोरया, मंगलमूर्ती मोरया ॥",
    footerSubtext: "पवार परिवारातर्फे गणेशोत्सवाचे सादर आमंत्रण 🪔"
  },
  hi: {
    brandText: "श्री गणेशाय नमः",
    shlokBanner: "॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    kidsLabel: "🌸 श्रीजा एवं श्रीजय 🌸",
    heroTitle: "गणपति बप्पा मोरया! आपका हार्दिक स्वागत है",
    heroSubtitle: "हम सभी पवार परिवार की ओर से आपको एवं आपके परिवार को श्री गणेशोत्सव के पावन पर्व पर सादर आमंत्रण!",
    hostFamily: "पवार परिवार (श्रीजा & श्रीजय)",
    arrivalLabel: "आगमन: शनिवार, १४ सितम्बर २०२४ (प्रातः ९:०० बजे)",
    visarjanLabel: "विसर्जन: अनंत चतुर्दशी",
    
    // Details Section
    detailsTitle: "उत्सव विवरण एवं समय",
    detailsSub: "बप्पा की सेवा एवं मंगल उत्सव में पधारें",
    muhuratTitle: "स्थापना मुहूर्त एवं पूजा",
    muhuratDesc: "भाद्रपद शुक्ल चतुर्थी, प्रातः ०९:१५ से दोपहर ०१:३०",
    venueTitle: "उत्सव स्थल",
    venueDesc: "करण अपार्टमेंट, फ्लैट नं. ७०१, प्लॉट नं. ८, सेक्टर १६, कलंबोली डी-मार्ट के पास, रोडपाली, कलंबोली",
    prasadTitle: "महाप्रसाद",
    prasadDesc: "प्रतिदिन दोपहर १:०० से ३:०० एवं सायं ८:०० से १०:००",

    // Aarti Timings
    aartiHeader: "दैनिक आरती समय",
    morningAarti: "प्रातः आरती",
    morningAartiTime: "प्रातः ०८:०० बजे",
    eveningAarti: "संध्या आरती",
    eveningAartiTime: "सायं ०८:०० बजे",
    visarjanAarti: "उत्तरपूजा एवं महाआरती",
    visarjanAartiTime: "दोपहर १२:०० बजे (विसर्जन दिवस)",

    // Map Section
    mapTitle: "स्थान एवं मार्ग दर्शक",
    mapSub: "कलंबोली डी-मार्ट के पास हमारे निवास तक पहुँचने का मैप",
    mapMarkerTitle: "पवार निवास (करण अपार्टमेंट)",
    getDirectionsBtn: "गूगल मैप पर दिशा देखें (Get Directions)",

    // Contact Section
    contactTitle: "संपर्क एवं पता",
    contactSub: "किसी भी जानकारी हेतु कृपया संपर्क करें",
    hostLabel: "निमंत्रक",
    hostPerson: "श्रीजा जयदीप पवार एवं श्रीजय जयदीप पवार",
    phoneLabel: "संपर्क सूत्र",
    addressLabel: "पता",
    addressShortVal: "सेक्टर १६, रोडपाली, कलंबोली",
    closingQuote: "“आपकी उपस्थिति हमारे लिए अत्यंत हर्ष और सौभाग्य की बात होगी। बप्पा आप सभी का कल्याण करें!”",
    footerBlessing: "॥ गणपति बप्पा मोरया, मंगलमूर्ति मोरया ॥",
    footerSubtext: "पवार परिवार की ओर से गणेशोत्सव का सादर आमंत्रण 🪔"
  },
  en: {
    brandText: "SHREE GANESHAYA NAMAH",
    shlokBanner: "॥ Vakratunda Mahakaya Suryakoti Samaprabha | Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada ॥",
    kidsLabel: "🌸 Shreeja & Shreejay 🌸",
    heroTitle: "Ganpati Bappa Morya! You're Warmly Invited",
    heroSubtitle: "We cordially invite you and your family to join us in celebrating the auspicious arrival and blessings of Lord Ganesha.",
    hostFamily: "The Pawar Family (Shreeja & Shreejay)",
    arrivalLabel: "Aagman: Saturday, 14th September 2024 (9:00 AM)",
    visarjanLabel: "Visarjan: Anant Chaturdashi",
    
    // Details Section
    detailsTitle: "Celebration Schedule",
    detailsSub: "Join us in seeking the divine blessings of Vighnaharta",
    muhuratTitle: "Sthapana Muhurat & Puja",
    muhuratDesc: "Bhadrapada Shukla Chaturthi, 09:15 AM to 01:30 PM",
    venueTitle: "Venue",
    venueDesc: "Karan Apartment, Flat No. 701, Plot No. 8, Sector 16, Near D-Mart Kalamboli, Roadpali, Kalamboli",
    prasadTitle: "Maha Prasad & Bhog",
    prasadDesc: "Daily Lunch: 1:00 PM - 3:00 PM | Dinner: 8:00 PM - 10:00 PM",

    // Aarti Timings
    aartiHeader: "Daily Aarti Schedule",
    morningAarti: "Morning Aarti",
    morningAartiTime: "08:00 AM",
    eveningAarti: "Evening Aarti",
    eveningAartiTime: "08:00 PM",
    visarjanAarti: "Uttar Puja & Maha Aarti",
    visarjanAartiTime: "12:00 PM (Visarjan Day)",

    // Map Section
    mapTitle: "Venue Location & Map",
    mapSub: "Interactive guide to navigate to our residence near D-Mart Kalamboli",
    mapMarkerTitle: "Pawar Residence (Karan Apartment)",
    getDirectionsBtn: "Get Directions on Google Maps",

    // Contact Section
    contactTitle: "Host & Address Details",
    contactSub: "Feel free to reach out to us for any assistance",
    hostLabel: "Hosts",
    hostPerson: "Shreeja Jaydeep Pawar & Shreejay Jaydeep Pawar",
    phoneLabel: "Phone Number",
    addressLabel: "Address",
    addressShortVal: "Sector 16, Roadpali, Kalamboli",
    closingQuote: "“Your gracious presence will make our celebrations truly complete. May Lord Ganesha bestow boundless peace, health, and prosperity upon your family!”",
    footerBlessing: "॥ Ganpati Bappa Morya, Mangal Murti Morya ॥",
    footerSubtext: "Warmly invited by the Pawar Family for Ganeshotsav 🪔"
  }
};

let currentLang = 'mr';

// --- Exact Venue Coordinates: Karan Apartment, Sector 16, Roadpali, Kalamboli, Navi Mumbai (Near DMart) ---
const VENUE_LAT = 19.0385;
const VENUE_LNG = 73.1008;
let leafletMap = null;
let venueMarker = null;

// --- DOM Ready Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initParticleEffects();
  initLeafletMap();
  initScrollObserver();
  initAudioExperience();
});

// --- Language Switcher Logic ---
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang === currentLang) return;

      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentLang = selectedLang;
      applyLanguage(selectedLang);
    });
  });

  // Apply default
  applyLanguage('mr');
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update Body class for font styling
  document.body.classList.remove('lang-mr', 'lang-hi', 'lang-en');
  document.body.classList.add(`lang-${lang}`);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update Directions button link with current lat/lng
  const dirBtn = document.getElementById('btn-get-directions');
  if (dirBtn) {
    dirBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${VENUE_LAT},${VENUE_LNG}`;
  }

  // Update Leaflet marker popup if initialized
  if (venueMarker) {
    venueMarker.setPopupContent(`
      <div style="font-family: inherit; text-align: center; padding: 4px;">
        <div class="popup-title">🪔 ${t.mapMarkerTitle}</div>
        <div class="popup-desc">${t.venueDesc}</div>
      </div>
    `);
  }
}

// --- Floating Festive Particles Canvas ---
function initParticleEffects() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle types: 0 = Marigold Petal (Orange/Gold), 1 = Sparkle Light, 2 = Diya Aura
  const particles = [];
  const PARTICLE_COUNT = 35;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 4,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: Math.random() * 0.8 + 0.4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.5,
      type: Math.random() > 0.4 ? 'petal' : 'sparkle',
      opacity: Math.random() * 0.5 + 0.25,
      color: Math.random() > 0.5 ? '#FFA500' : '#FFD700'
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = p.opacity;

    // Draw stylized marigold petal
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, 2 * Math.PI);
    ctx.fill();

    // Subtle inner gradient/highlight
    ctx.fillStyle = '#FFE600';
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size * 0.5, p.size * 0.25, 0, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
  }

  function drawSparkle(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.globalAlpha = p.opacity;

    ctx.fillStyle = '#FFF8DC';
    ctx.shadowColor = '#FFD700';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(0, 0, p.size * 0.35, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;

      // Wrap around edges smoothly
      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      if (p.type === 'petal') {
        drawPetal(p);
      } else {
        drawSparkle(p);
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// --- Leaflet Map with Custom Golden Pin ---
function initLeafletMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement || typeof L === 'undefined') return;

  try {
    // Exact coordinates for Karan Apartment, Sector 16, Roadpali, Kalamboli (near DMart)
    leafletMap = L.map('map', {
      scrollWheelZoom: false,
      zoomControl: true
    }).setView([VENUE_LAT, VENUE_LNG], 16);

    // OpenStreetMap standard tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(leafletMap);

    // Custom Gold Diya Pin Icon
    const goldCustomIcon = L.divIcon({
      className: 'custom-gold-marker',
      html: `
        <div style="
          width: 44px;
          height: 44px;
          background: radial-gradient(circle, #ffe259, #ffa751);
          border: 2px solid #fff;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.95), 0 4px 10px rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <span style="
            transform: rotate(45deg);
            font-size: 22px;
            color: #50000a;
            font-weight: bold;
          ">🪔</span>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 44],
      popupAnchor: [0, -44]
    });

    const t = translations[currentLang];
    venueMarker = L.marker([VENUE_LAT, VENUE_LNG], { icon: goldCustomIcon }).addTo(leafletMap);
    venueMarker.bindPopup(`
      <div style="font-family: inherit; text-align: center; padding: 6px; max-width: 240px;">
        <div class="popup-title" style="color: #ffd700; font-weight: bold; font-size: 1.05rem; margin-bottom: 4px;">🪔 ${t.mapMarkerTitle}</div>
        <div class="popup-desc" style="font-size: 0.88rem; color: #ebd3a6; line-height: 1.4;">${t.venueDesc}</div>
        <div style="margin-top: 8px;">
          <a href="https://maps.google.com/?q=Karan+Apartment+Sector+16+Kalamboli+Roadpali+Navi+Mumbai" target="_blank" style="color: #ffd700; font-weight: bold; text-decoration: underline; font-size: 0.85rem;">Google Maps ने उघडा ↗</a>
        </div>
      </div>
    `).openPopup();

    // Invalidate map size so it fits properly in its container
    setTimeout(() => {
      if (leafletMap) leafletMap.invalidateSize();
    }, 300);

    window.addEventListener('resize', () => {
      if (leafletMap) leafletMap.invalidateSize();
    });
  } catch (err) {
    console.error("Leaflet map initialization error:", err);
  }
}

// --- Framer Motion Smooth Physics-Based Transitions & Animations ---
function initScrollObserver() {
  // Check for Motion global from Framer Motion
  const MotionLib = window.Motion || window.framerMotion || (typeof Motion !== 'undefined' ? Motion : null);
  const animateFn = MotionLib && MotionLib.animate ? MotionLib.animate : null;

  // 1. Smooth Hero Entrance with spring physics
  if (animateFn) {
    // Shlok Banner
    animateFn('.shlok-banner', 
      { opacity: [0, 1], y: [-20, 0], scale: [0.95, 1] }, 
      { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    );

    // Ganpati Idol Stage (Spring pop with radiant expansion)
    animateFn('.idol-stage', 
      { opacity: [0, 1], scale: [0.8, 1], y: [30, 0] }, 
      { duration: 1.4, delay: 0.2, type: 'spring', stiffness: 70, damping: 14 }
    );

    // Side Kids Container (Slide & Spring from right)
    animateFn('.side-kids-container', 
      { opacity: [0, 1], scale: [0.85, 1], x: [30, 0] }, 
      { duration: 1.3, delay: 0.35, type: 'spring', stiffness: 75, damping: 15 }
    );

    // Hero Title & Subtitle
    animateFn('.hero-title', 
      { opacity: [0, 1], y: [25, 0] }, 
      { duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }
    );

    animateFn('.hero-subtitle', 
      { opacity: [0, 1], y: [20, 0] }, 
      { duration: 1.0, delay: 0.55, ease: [0.22, 1, 0.36, 1] }
    );

    animateFn('.dates-pill-container', 
      { opacity: [0, 1], scale: [0.9, 1], y: [15, 0] }, 
      { duration: 1.1, delay: 0.65, type: 'spring', stiffness: 85, damping: 16 }
    );
  }

  // 2. Interactive Scroll Observer with Framer Motion Staggered Reveal
  const sections = document.querySelectorAll('.reveal-on-scroll');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        if (animateFn) {
          // Animate card container
          animateFn(entry.target.querySelectorAll('.festive-card'),
            { opacity: [0, 1], y: [40, 0], scale: [0.97, 1] },
            { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
          );

          // Stagger child detail items
          const items = entry.target.querySelectorAll('.detail-item, .aarti-badge, .contact-card-item');
          if (items.length) {
            items.forEach((item, index) => {
              animateFn(item, 
                { opacity: [0, 1], y: [25, 0], scale: [0.95, 1] }, 
                { duration: 0.7, delay: 0.15 + (index * 0.1), type: 'spring', stiffness: 90, damping: 16 }
              );
            });
          }
        }

        if (entry.target.id === 'venue-map' && leafletMap) {
          setTimeout(() => leafletMap.invalidateSize(), 250);
        }
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  sections.forEach(el => observer.observe(el));
}

// --- Ganpati Bappa Background Song (Exclusive: Ekadantaya Vakratundaya Slowed & Reverb) ---
const singleTrack = {
  title: "🎧 एकदंताय वक्रतुण्डाय (Slowed & Reverb)",
  artist: "गणेश चतुर्थी स्पेशल 🪔",
  src: "audio/ekadantaya_vakratundaya_slowed_reverb.mp3"
};

let isAudioPlaying = false;
let audioPlayer = null;

function initAudioExperience() {
  audioPlayer = document.getElementById('ganpatiAudioPlayer');
  const playBtn = document.getElementById('audio-toggle-btn');
  const playIcon = document.getElementById('playIcon');
  const trackTitleEl = document.getElementById('currentTrackTitle');
  const statusTagEl = document.getElementById('musicStatusTag');

  if (!audioPlayer || !playBtn) return;

  if (trackTitleEl) trackTitleEl.textContent = singleTrack.title;
  if (statusTagEl) statusTagEl.textContent = `${singleTrack.artist} • Playing`;

  function updateUiPlaying() {
    isAudioPlaying = true;
    playBtn.classList.add('playing');
    if (playIcon) {
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
    }
    if (statusTagEl) statusTagEl.textContent = "Playing in Background 🎶";
  }

  function updateUiPaused() {
    isAudioPlaying = false;
    playBtn.classList.remove('playing');
    if (playIcon) {
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
    }
    if (statusTagEl) statusTagEl.textContent = "Click to Play 🪔";
  }

  function playTrack() {
    const playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updateUiPlaying();
          cleanupInstantListeners();
        })
        .catch(err => {
          console.log("Waiting for user interaction to start audio:", err);
          // Attach listeners to start instantly on ANY user action
          attachInstantStartListeners();
        });
    }
  }

  function pauseTrack() {
    audioPlayer.pause();
    updateUiPaused();
  }

  function instantStartHandler() {
    if (!isAudioPlaying) {
      audioPlayer.play().then(() => {
        updateUiPlaying();
        cleanupInstantListeners();
      }).catch(() => {});
    }
  }

  const triggerEvents = ['click', 'touchstart', 'touchend', 'scroll', 'keydown', 'pointerdown', 'mousemove'];

  function attachInstantStartListeners() {
    triggerEvents.forEach(evt => {
      window.addEventListener(evt, instantStartHandler, { capture: true, once: true, passive: true });
    });
  }

  function cleanupInstantListeners() {
    triggerEvents.forEach(evt => {
      window.removeEventListener(evt, instantStartHandler, { capture: true });
    });
  }

  // Audio element events
  audioPlayer.addEventListener('play', updateUiPlaying);
  audioPlayer.addEventListener('pause', updateUiPaused);

  // Welcome Modal Enter Button Interaction (Guarantees instant music initiation)
  const welcomeOverlay = document.getElementById('welcomeOverlay');
  const welcomeEnterBtn = document.getElementById('welcomeEnterBtn');

  if (welcomeEnterBtn && welcomeOverlay) {
    welcomeEnterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      welcomeOverlay.classList.add('hidden');
      setTimeout(() => {
        welcomeOverlay.style.display = 'none';
      }, 800);
      playTrack();
    });

    // Also auto-dismiss if user interacts anywhere or if autoplay succeeded
    audioPlayer.addEventListener('play', () => {
      welcomeOverlay.classList.add('hidden');
      setTimeout(() => {
        welcomeOverlay.style.display = 'none';
      }, 800);
    }, { once: true });
  }

  // Attempt instant play immediately
  playTrack();

  // Also listen for first interaction just in case
  attachInstantStartListeners();

  // Play / Pause Click Handler
  playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAudioPlaying) {
      playTrack();
    } else {
      pauseTrack();
    }
  });
}



