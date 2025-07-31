document.addEventListener("DOMContentLoaded", () => {
  const themeSelect = document.getElementById("theme-select");
  const languageSelect = document.getElementById("language-select");
  const headline = document.getElementById("headline");
  const subline = document.getElementById("subline");

  // 1. Theme Toggle
  themeSelect.addEventListener("change", () => {
    document.body.className = ""; // Remove existing theme
    document.body.classList.add(themeSelect.value); // Add new theme class
  });

  // 2. Language Toggle
const translations = {
  en: {
    headline: "We Grow Your Business with TikTok.",
    subline: "Fast, affordable, local-friendly content management.",
    about: {
      heading: "Why Robera?",
      text: "We help small businesses grow using powerful TikTok strategies tailored for the Ethiopian market. Whether you're in Shashemene or Addis Ababa, we deliver content that connects.",
    },
  },
  am: {
    headline: "በቲክቶክ ንግድዎን እናደግፋለን።",
    subline: "ፈጣን፣ ቀላል፣ የአካባቢ ማስተዳደር።",
    about: {
      heading: "ለምን ሮቤራ?",
      text: "በኢትዮጵያ የታመነ የቲክቶክ ስታቴጂ በመጠቀም ቢዝነሶችን እናደግፋለን። በሻሸመኔ ወይም በአዲስ አበባ እንዳሉ እንዲገናኙ ይረዳዎታል።",
    },
  },
  or: {
    headline: "TikTokn hojii kee guddisna.",
    subline: "Itti fufiinsa, gatii salphaa, fi deeggarsa naannoo.",
    about: {
      heading: "Maaliif Robera?",
      text: "TikTokn tarsiimoo cimaa waliin hojjettoota xixiqqaa guddisuuf hojjenna. Shashamane keessa jiraattanii yookin Finfinne keessa jiraattanii, dhimmamtoota kee waliin wal qunnamsiisa.",
    },
  },
};
  
  // 3. Reveal animation on scroll
  const sections = document.querySelectorAll(".section");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
  });

  sections.forEach(section => {
    revealObserver.observe(section);
  });

  // 4. Smart pricing based on location (Addis vs Other)
  const packages = [
    {
      name: "Starter",
      features: "3 TikToks/week, Basic editing, Captions",
      priceAddis: "5,000 birr",
      priceOther: "3,500 birr",
    },
    {
      name: "Growth",
      features: "5 TikToks/week, Strategy session, Captions, Audio trends",
      priceAddis: "10,000 birr",
      priceOther: "7,000 birr",
    },
    {
      name: "Pro",
      features: "7 TikToks/week, Monthly analytics, Comment support",
      priceAddis: "20,000 birr",
      priceOther: "15,000 birr",
    },
    {
      name: "Premium",
      features: "Daily TikToks, Advanced analytics, Influencer collab",
      priceAddis: "50,000 birr",
      priceOther: "35,000 birr",
    }
  ];

function renderPricing(isInAddis) {
  const tableBody = document.getElementById("packages-body");
  const note = document.getElementById("location-note");

  tableBody.innerHTML = "";
  note.textContent = isInAddis
    ? "You are in Addis Ababa – Standard Pricing"
    : "You are outside Addis – Discounted Pricing";

  packages.forEach(pkg => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td data-label="Package">${pkg.name}</td>
      <td data-label="Features">${pkg.features}</td>
      <td data-label="Price">${isInAddis ? pkg.priceAddis : pkg.priceOther}</td>
    `;
    tableBody.appendChild(row);
  });
}

// 5. Detect Location (Simulated IP Logic for now)
function simulateLocationDetection() {
  const isInAddis = confirm("Are you located in Addis Ababa?");
  renderPricing(isInAddis);
}

simulateLocationDetection();


  // Update About section on language change
  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;
    if (translations[lang]) {
      headline.textContent = translations[lang].headline;
      subline.textContent = translations[lang].subline;

      document.getElementById("about-heading").textContent = translations[lang].about.heading;
      document.getElementById("about-text").textContent = translations[lang].about.text;
    }
  });

});