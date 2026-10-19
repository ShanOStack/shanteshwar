/**
 * ============================================================================
 * SAANTUVERSE - ADVANCED ADMIN CMS & VISUAL PORTFOLIO ENGINE
 * Author: Shanteshwar Ojha (Saantu)
 * Stealth Triple-Click Access | Complete Customization | Word-Style Live Edit
 * Google Drive "my portofolio data" Auto-Sync | Offline CSV Table Export
 * ============================================================================
 */

(function () {
  'use strict';

  // --- 1. CREDENTIALS & CONSTANTS ---
  const ADMIN_CREDENTIALS = {
    username: "shanteshwar_ojha",
    password: "1dmojha23."
  };

  const STORAGE_KEYS = {
    MASTER_DATA: 'saantu_portfolio_master',
    AUTH_STATE: 'saantu_admin_authenticated',
    VISITOR_LOGS: 'saantu_visitor_logs',
    LEADS_DATA: 'saantu_leads_data',
    HISTORY_DATA: 'saantu_history_timeline',
    HISTORY_INDEX: 'saantu_history_index',
    LIVE_EDITS: 'saantu_live_word_edits',
    GDRIVE_SETTINGS: 'saantu_gdrive_config'
  };

  // --- 2. DEFAULT INITIAL PORTFOLIO DATASET ---
  const DEFAULT_PORTFOLIO = {
    profile: {
      name: "Shanteshwar Ojha",
      alias: "Saantu",
      headline: "AI/ML Engineer, Data Science & Digital Media Creator",
      subheadline: "Building high-performance AI agents, real-time autonomous systems, and digital cinema experiences from Lucknow, India.",
      bio: "Hi, I'm Shanteshwar Ojha (Saantu) — an AI/ML Engineer and Digital Media Creator based in Lucknow, UP. Diploma in Computer Science & Engineering from Government Polytechnic Bara, Prayagraj (BTEUP) in Big Data and Grade A++ in Python & Data Analytics from Techpile Technology Lucknow.",
      location: "Lucknow, Uttar Pradesh, India",
      email: "shanteshwarojha123213@gmail.com",
      availability: "Open for Software Engineering & AI/ML Contracts",
      profileImage: "images/saantu_profile.jpg",
      heroBanner: "images/saantu_hero_panorama.jpg"
    },
    resume: {
      fileName: "Shanteshwar_Ojha_Resume.pdf",
      url: "mailto:shanteshwarojha123213@gmail.com?subject=Resume%20Request%20for%20Saantu%20Ojha",
      directPdfData: ""
    },
    seo: {
      title: "Shanteshwar Ojha (Saantu) | AI/ML Engineer & Digital Media Creator",
      description: "Official portfolio of Shanteshwar Ojha (Saantu) — AI/ML Engineer, Data Science & Digital Media Creator based in Lucknow, UP. Creator of Lerna AI, Autonomous Conversational AI Chatbot, and AI Library Management System.",
      keywords: "Shanteshwar Ojha, Saantu, ShanOStack, AI/ML Engineer, Python Developer, Data Science, Lerna AI, Autonomous AI Chatbot, Lucknow"
    },
    maintenanceMode: false,
    skills: {
      languages: ["Python", "C", "C++", "SQL", "Java (Core/Basic)", "HTML", "CSS", "JavaScript"],
      backend: ["FastAPI", "RESTful APIs", "PostgreSQL & SQLite Schema Design", "AsyncIO", "WebSockets"],
      tools: ["Git", "GitHub", "VS Code", "Vercel Deployment", "Linux Terminal", "Docker basics"],
      other: ["AI-Augmented Software Development", "API Integration", "Rapid Prototyping", "Data Structures & Algorithms", "DBMS & OOP Fundamentals", "LLM Prompt Engineering"],
      creative: ["Screenwriting & Narrative Writing", "Film Direction & Scene Pacing", "DaVinci Resolve Color Grading", "Premiere Pro Video Editing", "Sound Design & Audio Mixing"]
    },
    projects: [
      {
        id: "proj-lerna",
        title: "Lerna AI (AI Search & Research Agent)",
        isMajor: true,
        category: "Full-Stack / PWA / AI / Local-First",
        tech: "LangChain + Groq (Llama-3.3-70b), Voice STT/TTS, Mind Map, YouTube & Web Scraping, Python",
        image: "images/lerna_ai.png",
        desc: "Lerna AI — Multi-Modal Learning Platform is an elegant, privacy-first personal memory for the internet that allows users to save articles, products, videos, recipes, and ideas without accounts or central tracking.",
        coreVision: "Designed as an uncompromising privacy-first personal knowledge vault. By uniting the Android Web Share Target API with client-side Service Worker request interception.",
        metrics: [
          { label: "100% Local Privacy", desc: "Zero accounts or tracking; all bookmarks and knowledge stay on your device." },
          { label: "Sub-15ms Latency", desc: "Groq Llama-3.3-70b hardware-accelerated inference." }
        ],
        links: [
          { label: "GitHub Repository", url: "https://github.com/ShanOStack" }
        ],
        visible: true,
        type: "ai"
      },
      {
        id: "proj-chatbot",
        title: "Autonomous Conversational AI Chatbot",
        isMajor: true,
        category: "Generative AI / Concurrency / FastAPI",
        tech: "FastAPI, Async Concurrency, Multi-LLM Routing (Groq, Gemini), Vector Search, Tailwind",
        image: "images/ai_chatbot_banner.png",
        desc: "Autonomous contextual chatbot engine with intent classification, multi-turn memory buffering, and dynamic sub-15ms token streaming response architecture.",
        coreVision: "Engineered to deliver ChatGPT-grade conversational fluency directly in the browser with fallback routing and zero reliance on heavy server containers.",
        metrics: [
          { label: "Sub-15ms Response", desc: "High-throughput asynchronous event loops." },
          { label: "Multi-Engine Fallback", desc: "Groq Cloud LLaMA 3.3 and Google Gemini APIs." }
        ],
        links: [
          { label: "GitHub Repository", url: "https://github.com/ShanOStack" }
        ],
        visible: true,
        type: "ai"
      },
      {
        id: "proj-library",
        title: "AI-Powered Library Management System",
        isMajor: false,
        category: "Full-Stack / Database / Automation",
        tech: "Python, FastAPI, SQLite / PostgreSQL, QR Code Scanner, Role-Based Access Control",
        image: "images/ai_library.png",
        desc: "Automated digital library platform with real-time book issue tracking, automated fine calculating algorithms, and administrative transaction ledgers.",
        coreVision: "Eliminating manual book logs through intelligent barcode scanning, predictive return date reminders, and relational transaction records.",
        metrics: [
          { label: "Zero Discrepancy", desc: "Automated inventory sync & audit logs." }
        ],
        links: [
          { label: "GitHub Repository", url: "https://github.com/ShanOStack" }
        ],
        visible: true,
        type: "web"
      },
      {
        id: "proj-codesession",
        title: "#CODE_session — DSA & Programming Education",
        isMajor: true,
        category: "AI/ML & Code Project",
        tech: "Python, C++, DSA, Competitive Programming, System Design",
        image: "images/ai_chatbot_banner.png",
        desc: "Educational tech initiative dedicated to teaching Data Structures & Algorithms, competitive coding, and practical software engineering.",
        coreVision: "Democratizing computer science knowledge and practical software engineering for students and aspiring developers across India.",
        metrics: [
          { label: "Hands-on Focus", desc: "Deep-dive algorithm implementations & breakdown." }
        ],
        links: [
          { label: "GitHub Repository", url: "https://github.com/ShanOStack" }
        ],
        visible: true,
        type: "media"
      }
    ],
    certificates: [
      {
        id: "cert-1",
        title: "1. GenAI Powered Data Analytics",
        issuer: "TATA & Forage",
        date: "July 2026",
        credentialId: "TATA-GENAI-2026",
        image: "images/cert_1_genai_data_analytics.jpg",
        description: "Job simulation covering data cleaning, predictive analytics and LLM workflows.",
        visible: true
      },
      {
        id: "cert-2",
        title: "2. AI Chatbot Development",
        issuer: "DigiCoders Technologies",
        date: "July 2026",
        credentialId: "DGT-AICB-9921",
        image: "images/cert_2_ai_chatbot.jpg",
        description: "Specialized certification in building autonomous natural language processing chatbots.",
        visible: true
      },
      {
        id: "cert-3",
        title: "3. Python with AI & Machine Learning",
        issuer: "GyanAstra Institute",
        date: "June 2026",
        credentialId: "GA-PYAI-8812",
        image: "images/cert_3_python_with_ai.jpg",
        description: "Comprehensive coursework in Python scientific stack, NumPy, Pandas, Scikit-learn.",
        visible: true
      },
      {
        id: "cert-4",
        title: "4. Career Essentials in Generative AI",
        issuer: "Microsoft & LinkedIn Learning",
        date: "May 2026",
        credentialId: "MS-GENAI-PATH",
        image: "images/cert_4_microsoft_genai.jpg",
        description: "Full learning path completed in foundational Generative AI principles and prompt engineering.",
        visible: true
      },
      {
        id: "cert-5",
        title: "5. Generative AI Specialization (Grade A++)",
        issuer: "Techpile Technology Pvt. Ltd.",
        date: "July 2026",
        credentialId: "TechpileST261109",
        image: "images/cert_5_techpile_genai.jpg",
        description: "Top-tier distinction in Generative AI, Large Language Model architectures and deployment.",
        visible: true
      }
    ],
    socials: [
      { id: "soc-gh", label: "GitHub", url: "https://github.com/ShanOStack", icon: "github", visible: true },
      { id: "soc-li", label: "LinkedIn", url: "https://www.linkedin.com/in/shanteshwar-ojha-25a35237a", icon: "linkedin", visible: true },
      { id: "soc-ig", label: "Instagram", url: "https://www.instagram.com/shanteshwar_ojha", icon: "instagram", visible: true },
      { id: "soc-wa", label: "WhatsApp", url: "https://wa.me/918081693423", icon: "whatsapp", visible: true },
      { id: "soc-mail", label: "Gmail", url: "mailto:shanteshwarojha123213@gmail.com", icon: "mail", visible: true },
      { id: "soc-yt", label: "YouTube (#CODE_session)", url: "https://github.com/ShanOStack", icon: "youtube", visible: true }
    ],
    customFeatures: []
  };

  // --- 3. STATE INITIALIZER ---
  let portfolioData = (function loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.MASTER_DATA);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to load portfolio master data, falling back to default:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO));
  })();

  // Expose data globally so compiled React or scripts can access
  window.PORTFOLIO_MASTER = portfolioData;

  window.getFilteredProjects = function(type, fallback) {
    if (window.PORTFOLIO_MASTER && window.PORTFOLIO_MASTER.projects) {
      const list = window.PORTFOLIO_MASTER.projects.filter(p => {
        if (p.visible === false) return false;
        if (type === 'ai') return p.type === 'ai' || (!p.type && (p.category.includes('AI') || p.tech.includes('AI')));
        if (type === 'web') return p.type === 'web' || (!p.type && (p.category.includes('PWA') || p.category.includes('Full-Stack')));
        if (type === 'media') return p.type === 'media' || (!p.type && (p.category.includes('Media') || p.category.includes('Cinema') || p.category.includes('Code Project')));
        return true;
      });
      if (list.length > 0) {
        return list.map(item => ({
          ...item,
          metrics: item.metrics || [{ label: "Engine", desc: item.tech || "Custom" }],
          techStack: item.techStack || [{ name: item.tech || "Architecture", desc: item.category || "" }],
          features: item.features || [{ title: "System Module", desc: item.desc || "" }],
          links: item.links || [{ label: "View Project", url: item.github || item.live || "#" }]
        }));
      }
    }
    return fallback;
  };

  window.getFilteredSkills = function(fallback) {
    if (window.PORTFOLIO_MASTER && window.PORTFOLIO_MASTER.skills) {
      return window.PORTFOLIO_MASTER.skills;
    }
    return fallback;
  };

  window.getFilteredCertificates = function(fallback) {
    if (window.PORTFOLIO_MASTER && window.PORTFOLIO_MASTER.certificates) {
      return window.PORTFOLIO_MASTER.certificates.filter(c => c.visible !== false);
    }
    return fallback;
  };

  function saveMasterData(actionName = 'Updated Portfolio Content') {
    try {
      localStorage.setItem(STORAGE_KEYS.MASTER_DATA, JSON.stringify(portfolioData));
      window.PORTFOLIO_MASTER = portfolioData;
      recordHistory(actionName);
      applyDataToDOM();
      showToast('success', actionName);
    } catch (e) {
      console.error('Error saving portfolio data:', e);
      showToast('error', 'Storage error! Check size.');
    }
  }

  // --- 4. HISTORY / REVISION STACK (UNDO / REDO) ---
  function getHistoryStack() {
    try {
      const list = localStorage.getItem(STORAGE_KEYS.HISTORY_DATA);
      return list ? JSON.parse(list) : [];
    } catch (e) {
      return [];
    }
  }

  function getHistoryIndex() {
    try {
      const idx = localStorage.getItem(STORAGE_KEYS.HISTORY_INDEX);
      return idx !== null ? parseInt(idx, 10) : -1;
    } catch (e) {
      return -1;
    }
  }

  function recordHistory(action) {
    try {
      let history = getHistoryStack();
      let index = getHistoryIndex();

      // If we are back in history and make a new change, slice forward history
      if (index >= 0 && index < history.length - 1) {
        history = history.slice(0, index + 1);
      }

      const snapshot = {
        id: Date.now(),
        action: action || 'Configuration Change',
        timestamp: new Date().toLocaleString(),
        data: JSON.parse(JSON.stringify(portfolioData))
      };

      history.push(snapshot);
      if (history.length > 25) history.shift(); // Keep last 25 revisions

      localStorage.setItem(STORAGE_KEYS.HISTORY_DATA, JSON.stringify(history));
      localStorage.setItem(STORAGE_KEYS.HISTORY_INDEX, (history.length - 1).toString());
    } catch (e) {
      console.warn('History record failed:', e);
    }
  }

  function undoHistory() {
    let history = getHistoryStack();
    let index = getHistoryIndex();
    if (index > 0) {
      index--;
      portfolioData = JSON.parse(JSON.stringify(history[index].data));
      localStorage.setItem(STORAGE_KEYS.MASTER_DATA, JSON.stringify(portfolioData));
      localStorage.setItem(STORAGE_KEYS.HISTORY_INDEX, index.toString());
      window.PORTFOLIO_MASTER = portfolioData;
      applyDataToDOM();
      showToast('info', `Undo: Reverted to "${history[index].action}"`);
      renderActiveTab();
    } else {
      showToast('error', 'No earlier history available to undo!');
    }
  }

  function redoHistory() {
    let history = getHistoryStack();
    let index = getHistoryIndex();
    if (index < history.length - 1) {
      index++;
      portfolioData = JSON.parse(JSON.stringify(history[index].data));
      localStorage.setItem(STORAGE_KEYS.MASTER_DATA, JSON.stringify(portfolioData));
      localStorage.setItem(STORAGE_KEYS.HISTORY_INDEX, index.toString());
      window.PORTFOLIO_MASTER = portfolioData;
      applyDataToDOM();
      showToast('info', `Redo: Restored "${history[index].action}"`);
      renderActiveTab();
    } else {
      showToast('error', 'No forward history available to redo!');
    }
  }

  // --- 5. VISITOR TRACKING & CONTACT LEADS CAPTURE ---
  function trackVisitor() {
    if (sessionStorage.getItem('saantu_session_logged')) return;
    try {
      sessionStorage.setItem('saantu_session_logged', 'true');
      const visits = JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITOR_LOGS) || '[]');
      const newVisit = {
        id: 'VIS-' + Date.now(),
        timestamp: new Date().toISOString(),
        dateFormatted: new Date().toLocaleString(),
        device: getDeviceType(),
        browser: getBrowserName(),
        screen: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'Direct Visit',
        path: window.location.pathname || '/'
      };
      visits.unshift(newVisit);
      if (visits.length > 500) visits.pop();
      localStorage.setItem(STORAGE_KEYS.VISITOR_LOGS, JSON.stringify(visits));

      // Attempt background Google Drive sync if configured
      triggerGoogleDriveSync({ type: 'visit', data: newVisit }, false);
    } catch (e) {
      console.warn('Visit tracker error:', e);
    }
  }

  function captureContactLead(name, email, message) {
    try {
      const leads = JSON.parse(localStorage.getItem(STORAGE_KEYS.LEADS_DATA) || '[]');
      const newLead = {
        id: 'LEAD-' + Date.now(),
        name: name || 'Anonymous Visitor',
        email: email || 'No Email Provided',
        message: message || '',
        timestamp: new Date().toISOString(),
        dateFormatted: new Date().toLocaleString(),
        device: getDeviceType(),
        browser: getBrowserName()
      };
      leads.unshift(newLead);
      localStorage.setItem(STORAGE_KEYS.LEADS_DATA, JSON.stringify(leads));
      showToast('success', 'Inquiry recorded into Admin Leads!');

      // Send to Google Drive "my portofolio data"
      triggerGoogleDriveSync({ type: 'lead', data: newLead }, true);
    } catch (e) {
      console.error('Lead capture error:', e);
    }
  }

  function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'Tablet';
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated/i.test(ua)) return 'Mobile';
    return 'Desktop PC';
  }

  function getBrowserName() {
    const ua = navigator.userAgent;
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Edg/')) return 'Edge';
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';
    return 'Web Browser';
  }

  // --- 6. GOOGLE DRIVE SYNC ("my portofolio data" FOLDER) & CSV EXPORT ---
  function getGoogleDriveSettings() {
    try {
      const config = localStorage.getItem(STORAGE_KEYS.GDRIVE_SETTINGS);
      return config ? JSON.parse(config) : {
        webhookUrl: '',
        folderName: 'my portofolio data',
        autoSync: true
      };
    } catch (e) {
      return { webhookUrl: '', folderName: 'my portofolio data', autoSync: true };
    }
  }

  function saveGoogleDriveSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.GDRIVE_SETTINGS, JSON.stringify(settings));
    showToast('success', 'Google Drive settings updated!');
  }

  function triggerGoogleDriveSync(payload, showAlert = true) {
    const settings = getGoogleDriveSettings();
    if (!settings.webhookUrl || !settings.webhookUrl.startsWith('http')) {
      if (showAlert) {
        showToast('info', 'Google Apps Script Webhook not configured yet. Configure in Settings to auto-sync to Drive folder "my portofolio data"!');
      }
      return;
    }

    // Google Apps Script accepts POST
    fetch(settings.webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        folderName: settings.folderName || 'my portofolio data',
        timestamp: new Date().toISOString(),
        payload: payload
      })
    }).then(() => {
      if (showAlert) showToast('success', 'Data sent to Google Drive "my portofolio data" folder!');
    }).catch(err => {
      console.warn('Google Drive sync network error:', err);
      if (showAlert) showToast('error', 'Google Drive sync failed. Check webhook URL.');
    });
  }

  function exportTableToCsv() {
    try {
      const leads = JSON.parse(localStorage.getItem(STORAGE_KEYS.LEADS_DATA) || '[]');
      const visits = JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITOR_LOGS) || '[]');

      let csvContent = 'Type,ID,Date & Time,Name / Device,Email / Browser,Message / Info\n';

      leads.forEach(l => {
        csvContent += `"LEAD","${l.id}","${l.dateFormatted}","${(l.name||'').replace(/"/g, '""')}","${(l.email||'').replace(/"/g, '""')}","${(l.message||'').replace(/\n/g, ' ').replace(/"/g, '""')}"\n`;
      });

      visits.forEach(v => {
        csvContent += `"VISIT","${v.id}","${v.dateFormatted}","${v.device}","${v.browser}","Screen: ${v.screen} | Referrer: ${v.referrer}"\n`;
      });

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `saantu_portfolio_data_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('success', 'CSV Data Table exported successfully!');
    } catch (e) {
      console.error('CSV export error:', e);
      showToast('error', 'Failed to generate CSV export.');
    }
  }

  // --- 7. STEALTH MULTI-METHOD ADMIN TRIGGER ---
  let logoClickCount = 0;
  let logoClickTimer = null;

  function initStealthTrigger() {
    // 1. Direct URL triggers: #admin, ?admin=1, or ?admin=true
    function checkUrlTrigger() {
      if (window.location.hash === '#admin' || window.location.search.includes('admin=1') || window.location.search.includes('admin=true')) {
        setTimeout(openAuthModal, 300);
      }
    }
    checkUrlTrigger();
    window.addEventListener('hashchange', checkUrlTrigger);

    // 2. Secret keyboard typing: "admin" or "saantu" anywhere
    let keyBuffer = '';
    document.addEventListener('keydown', function (e) {
      // Hotkey: Ctrl + Shift + A
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        openAuthModal();
        return;
      }
      // Typing "admin" anywhere on keyboard
      if (e.key && e.key.length === 1 && !['INPUT', 'TEXTAREA'].includes((e.target && e.target.tagName) || '')) {
        keyBuffer += e.key.toLowerCase();
        if (keyBuffer.length > 8) keyBuffer = keyBuffer.slice(-8);
        if (keyBuffer.endsWith('admin') || keyBuffer.endsWith('saantu')) {
          keyBuffer = '';
          openAuthModal();
        }
      }
    });

    // 3. Multi-click on ANY brand logo element:
    document.addEventListener('click', function (e) {
      const target = e.target;
      if (!target) return;

      const isLogoClick = 
        target.closest('a[href="#home"]') ||
        target.closest('.ambient-depth-logo') ||
        (target.tagName === 'IMG' && (target.src || '').includes('logo')) ||
        (target.tagName === 'svg' && (target.innerHTML || '').includes('E63946')) ||
        (target.closest && target.closest('svg') && (target.closest('svg').innerHTML || '').includes('E63946')) ||
        target.closest('.group.shrink-0') ||
        (target.innerText && target.innerText.toLowerCase().includes('saantuverse')) ||
        (target.textContent && target.textContent.toLowerCase().includes('saantuverse'));

      if (isLogoClick) {
        logoClickCount++;

        // Visual subtle feedback ripple
        const ripple = document.createElement('span');
        ripple.className = 'sa-logo-ripple';
        ripple.style.left = `${(e.clientX || 20) - 7}px`;
        ripple.style.top = `${(e.clientY || 20) - 7}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        clearTimeout(logoClickTimer);
        logoClickTimer = setTimeout(() => {
          logoClickCount = 0;
        }, 2500); // Generous 2.5 second window

        if (logoClickCount >= 3) {
          e.preventDefault();
          e.stopPropagation();
          logoClickCount = 0;
          openAuthModal();
        }
      }
    }, true);

    // Also expose global direct helper
    window.openAdmin = openAuthModal;
    window.openAdminPanel = openAuthModal;
  }

  // --- 8. AUTHENTICATION MODAL & LOGIC ---
  function openAuthModal() {
    if (sessionStorage.getItem(STORAGE_KEYS.AUTH_STATE) === 'true') {
      openDashboard();
      return;
    }

    let overlay = document.getElementById('sa-auth-modal-overlay');
    if (!overlay) {
      createAuthModalDOM();
      overlay = document.getElementById('sa-auth-modal-overlay');
    }
    overlay.style.display = 'flex';
    overlay.classList.add('sa-active');
    const userField = document.getElementById('sa-auth-username');
    if (userField) {
      userField.value = '';
      userField.focus();
    }
  }

  function closeAuthModal() {
    const overlay = document.getElementById('sa-auth-modal-overlay');
    if (overlay) {
      overlay.classList.remove('sa-active');
      overlay.style.display = 'none';
    }
  }

  function handleLoginSubmit(e) {
    if (e) e.preventDefault();
    const user = document.getElementById('sa-auth-username').value.trim();
    const pass = document.getElementById('sa-auth-password').value.trim();
    const card = document.querySelector('.sa-auth-card');

    if (user === ADMIN_CREDENTIALS.username && pass === ADMIN_CREDENTIALS.password) {
      sessionStorage.setItem(STORAGE_KEYS.AUTH_STATE, 'true');
      closeAuthModal();
      showToast('success', 'Welcome, Shanteshwar Ojha! Admin console unlocked.');
      openDashboard();
    } else {
      if (card) {
        card.classList.add('sa-shake');
        setTimeout(() => card.classList.remove('sa-shake'), 450);
      }
      showToast('error', 'Invalid Credentials! Access denied.');
    }
  }

  function logoutAdmin() {
    sessionStorage.removeItem(STORAGE_KEYS.AUTH_STATE);
    closeDashboard();
    showToast('info', 'Admin logged out safely.');
  }

  function createAuthModalDOM() {
    const modal = document.createElement('div');
    modal.id = 'sa-auth-modal-overlay';
    modal.innerHTML = `
      <div class="sa-auth-card">
        <button class="sa-auth-close" onclick="window.SaantuAdmin.closeAuthModal()" title="Close">✕</button>
        <div class="sa-auth-header">
          <div class="sa-auth-badge">
            <span class="sa-auth-badge-dot"></span>
            <span>SAANTUVERSE SECURE CONSOLE</span>
          </div>
          <h2 class="sa-auth-title">Admin Access Portal</h2>
          <p class="sa-auth-subtitle">Verify identity to manage skills, projects, and portfolio data</p>
        </div>
        <form class="sa-auth-form" onsubmit="window.SaantuAdmin.handleLoginSubmit(event)">
          <div class="sa-form-group">
            <label class="sa-form-label">Username</label>
            <input type="text" id="sa-auth-username" class="sa-input" placeholder="shanteshwar_ojha" autocomplete="off" required />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Password</label>
            <div class="sa-input-wrapper">
              <input type="password" id="sa-auth-password" class="sa-input" placeholder="••••••••••••" required />
              <button type="button" class="sa-input-toggle" onclick="window.SaantuAdmin.togglePassVisibility('sa-auth-password', this)">Show</button>
            </div>
          </div>
          <button type="submit" class="sa-auth-btn">
            <span>Unlock Dashboard</span>
            <span>→</span>
          </button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeAuthModal();
    });
  }

  // --- 9. FULL ADMIN DASHBOARD UI & NAVIGATION ---
  let activeTab = 'overview';

  function openDashboard() {
    let overlay = document.getElementById('sa-dashboard-overlay');
    if (!overlay) {
      createDashboardDOM();
      overlay = document.getElementById('sa-dashboard-overlay');
    }
    overlay.style.display = 'flex';
    overlay.classList.add('sa-active');
    renderActiveTab();
  }

  function closeDashboard() {
    const overlay = document.getElementById('sa-dashboard-overlay');
    if (overlay) {
      overlay.classList.remove('sa-active');
      overlay.style.display = 'none';
    }
  }

  function switchTab(tabId) {
    activeTab = tabId;
    document.querySelectorAll('.sa-nav-item').forEach(item => {
      item.classList.toggle('sa-active', item.dataset.tab === tabId);
    });
    renderActiveTab();
  }

  function createDashboardDOM() {
    const overlay = document.createElement('div');
    overlay.id = 'sa-dashboard-overlay';
    overlay.innerHTML = `
      <div class="sa-dashboard-container">
        <!-- Sidebar Navigation -->
        <aside class="sa-sidebar">
          <div class="sa-sidebar-header">
            <div class="sa-sidebar-brand">
              <div class="sa-sidebar-logo-badge">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2.5L2.5 21H7.2L12 11.2L16.8 21H21.5L12 2.5Z" fill="#FFFFFF"/>
                  <polygon points="9.5,15.5 14.5,15.5 12,10.2" fill="#0A0A0A"/>
                  <circle cx="12" cy="18.2" r="1.1" fill="#E63946"/>
                </svg>
              </div>
              <div>
                <div class="sa-sidebar-title">SaantuVerse CMS</div>
                <div class="sa-sidebar-subtitle">Super Admin Mode</div>
              </div>
            </div>
            <button class="sa-icon-btn" onclick="window.SaantuAdmin.closeDashboard()" title="Close Dashboard">✕</button>
          </div>

          <nav class="sa-sidebar-nav">
            <div class="sa-nav-section-title">Core Controls</div>
            <div class="sa-nav-item sa-active" data-tab="overview" onclick="window.SaantuAdmin.switchTab('overview')">
              <span class="sa-nav-icon">📊</span>
              <span>Overview & Stats</span>
            </div>
            <div class="sa-nav-item" data-tab="projects" onclick="window.SaantuAdmin.switchTab('projects')">
              <span class="sa-nav-icon">🚀</span>
              <span>Projects & Labs</span>
              <span class="sa-nav-badge" id="sa-badge-projects-count">4</span>
            </div>
            <div class="sa-nav-item" data-tab="skills" onclick="window.SaantuAdmin.switchTab('skills')">
              <span class="sa-nav-icon">⚡</span>
              <span>Skills Matrix</span>
            </div>
            <div class="sa-nav-item" data-tab="certificates" onclick="window.SaantuAdmin.switchTab('certificates')">
              <span class="sa-nav-icon">📜</span>
              <span>Certificates</span>
            </div>

            <div class="sa-nav-section-title">Profile & Content</div>
            <div class="sa-nav-item" data-tab="profile" onclick="window.SaantuAdmin.switchTab('profile')">
              <span class="sa-nav-icon">👤</span>
              <span>Profile & Avatar</span>
            </div>
            <div class="sa-nav-item" data-tab="resume" onclick="window.SaantuAdmin.switchTab('resume')">
              <span class="sa-nav-icon">📄</span>
              <span>Resume / CV</span>
            </div>
            <div class="sa-nav-item" data-tab="socials" onclick="window.SaantuAdmin.switchTab('socials')">
              <span class="sa-nav-icon">🌐</span>
              <span>Social Links</span>
            </div>
            <div class="sa-nav-item" data-tab="wordedit" onclick="window.SaantuAdmin.switchTab('wordedit')">
              <span class="sa-nav-icon">✍️</span>
              <span>Word-Style Live Edit</span>
            </div>

            <div class="sa-nav-section-title">Analytics & Tools</div>
            <div class="sa-nav-item" data-tab="data" onclick="window.SaantuAdmin.switchTab('data')">
              <span class="sa-nav-icon">📈</span>
              <span>Data & Leads</span>
            </div>
            <div class="sa-nav-item" data-tab="history" onclick="window.SaantuAdmin.switchTab('history')">
              <span class="sa-nav-icon">⏱️</span>
              <span>History (Undo/Redo)</span>
            </div>
            <div class="sa-nav-item" data-tab="feature_builder" onclick="window.SaantuAdmin.switchTab('feature_builder')">
              <span class="sa-nav-icon">➕</span>
              <span>Custom Feature Builder</span>
            </div>
            <div class="sa-nav-item" data-tab="settings" onclick="window.SaantuAdmin.switchTab('settings')">
              <span class="sa-nav-icon">⚙️</span>
              <span>Settings & Sync</span>
            </div>
          </nav>

          <div class="sa-sidebar-footer">
            <div class="sa-admin-user-info">
              <div class="sa-admin-avatar">SO</div>
              <div>
                <div style="font-size:11px;font-weight:700;color:#0A0A0A;">shanteshwar_ojha</div>
                <div style="font-size:9px;color:#10b981;">Online • Admin</div>
              </div>
            </div>
            <button class="sa-admin-logout-btn" onclick="window.SaantuAdmin.logoutAdmin()">Logout</button>
          </div>
        </aside>

        <!-- Main Workspace -->
        <main class="sa-main-content">
          <div class="sa-top-bar">
            <div class="sa-top-bar-left">
              <h3 class="sa-current-tab-title" id="sa-tab-header-title">Overview & Controls</h3>
            </div>
            <div class="sa-top-bar-actions">
              <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.undoHistory()" title="Undo last change">↶ Undo</button>
              <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.redoHistory()" title="Redo change">↷ Redo</button>
              <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.triggerWholeWebEdit()">✍️ Live Edit Whole Web</button>
              <button class="sa-btn sa-btn-success" onclick="window.location.reload()" title="Apply all changes and reload live site">🔄 Apply & View Site</button>
              <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.closeDashboard()">Exit View</button>
            </div>
          </div>

          <!-- Dynamic Tab Pane Container -->
          <div id="sa-active-tab-container" class="sa-tab-pane sa-active">
            <!-- Populated dynamically via renderActiveTab -->
          </div>
        </main>
      </div>

      <!-- General Reusable Inner Modal Container -->
      <div id="sa-inner-modal-backdrop" class="sa-modal-backdrop">
        <div class="sa-modal-dialog" id="sa-inner-modal-dialog"></div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  // --- 10. TAB RENDERERS ---
  function renderActiveTab() {
    const container = document.getElementById('sa-active-tab-container');
    const headerTitle = document.getElementById('sa-tab-header-title');
    if (!container) return;

    // Update count badges
    const badgeProj = document.getElementById('sa-badge-projects-count');
    if (badgeProj) badgeProj.textContent = portfolioData.projects.length;

    switch (activeTab) {
      case 'overview':
        if (headerTitle) headerTitle.textContent = "Dashboard Overview & Quick Controls";
        renderOverviewTab(container);
        break;
      case 'projects':
        if (headerTitle) headerTitle.textContent = "Projects & Labs Manager";
        renderProjectsTab(container);
        break;
      case 'skills':
        if (headerTitle) headerTitle.textContent = "Technical Skills Matrix";
        renderSkillsTab(container);
        break;
      case 'certificates':
        if (headerTitle) headerTitle.textContent = "Certificates & Accreditations";
        renderCertificatesTab(container);
        break;
      case 'profile':
        if (headerTitle) headerTitle.textContent = "Profile Bio, Avatar & Coordinates";
        renderProfileTab(container);
        break;
      case 'resume':
        if (headerTitle) headerTitle.textContent = "Resume & CV Attachment";
        renderResumeTab(container);
        break;
      case 'socials':
        if (headerTitle) headerTitle.textContent = "Social Networks & Direct Reach";
        renderSocialsTab(container);
        break;
      case 'wordedit':
        if (headerTitle) headerTitle.textContent = "MS Word-Style Inline Live Editor";
        renderWordEditTab(container);
        break;
      case 'data':
        if (headerTitle) headerTitle.textContent = "Visitor Data, Feedback Leads & Drive Sync";
        renderDataTab(container);
        break;
      case 'history':
        if (headerTitle) headerTitle.textContent = "Change History & Revisions (Undo/Redo)";
        renderHistoryTab(container);
        break;
      case 'feature_builder':
        if (headerTitle) headerTitle.textContent = "Custom Feature & Module Builder";
        renderFeatureBuilderTab(container);
        break;
      case 'settings':
        if (headerTitle) headerTitle.textContent = "Settings, Maintenance & Backup";
        renderSettingsTab(container);
        break;
      default:
        // Handle custom features created by user
        if (activeTab.startsWith('custom_')) {
          const featKey = activeTab.replace('custom_', '');
          const feat = portfolioData.customFeatures.find(f => f.key === featKey);
          if (feat) {
            if (headerTitle) headerTitle.textContent = `Custom Feature: ${feat.name}`;
            renderCustomFeatureTab(container, feat);
            break;
          }
        }
        renderOverviewTab(container);
    }
  }

  // --- TAB: OVERVIEW ---
  function renderOverviewTab(container) {
    const leads = JSON.parse(localStorage.getItem(STORAGE_KEYS.LEADS_DATA) || '[]');
    const visits = JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITOR_LOGS) || '[]');
    const totalSkills = Object.values(portfolioData.skills).reduce((acc, arr) => acc + arr.length, 0);

    container.innerHTML = `
      <div class="sa-grid-4">
        <div class="sa-stat-card">
          <div class="sa-stat-label">Total Projects</div>
          <div class="sa-stat-value">${portfolioData.projects.length}</div>
          <div class="sa-stat-meta">Active & Flagship modules</div>
        </div>
        <div class="sa-stat-card">
          <div class="sa-stat-label">Skills Catalog</div>
          <div class="sa-stat-value">${totalSkills}</div>
          <div class="sa-stat-meta">Across 5 distinct domains</div>
        </div>
        <div class="sa-stat-card">
          <div class="sa-stat-label">Inquiries & Leads</div>
          <div class="sa-stat-value">${leads.length}</div>
          <div class="sa-stat-meta">${leads.length > 0 ? 'Captured from forms & bot' : 'Ready to capture'}</div>
        </div>
        <div class="sa-stat-card">
          <div class="sa-stat-label">Site Impressions</div>
          <div class="sa-stat-value">${visits.length}</div>
          <div class="sa-stat-meta">Device & browser visits</div>
        </div>
      </div>

      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">⚡ Quick Action Bar</div>
            <div class="sa-card-subtitle">Instant toggles and operations for live portfolio</div>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;">
          <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.triggerWholeWebEdit()">
            ✍️ Open MS Word-Style Whole Web Editor
          </button>
          <button class="sa-btn sa-btn-success" onclick="window.SaantuAdmin.openAddProjectModal()">
            + Add New Project
          </button>
          <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.openAddSkillModal()">
            + Add New Skill
          </button>
          <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.exportTableToCsv()">
            📥 Download Leads CSV
          </button>
          <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.exportFullBackupJson()">
            💾 Export Full Backup (.json)
          </button>
        </div>
      </div>

      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">🚧 Maintenance Mode Status</div>
            <div class="sa-card-subtitle">When active, normal visitors see a sleek 'Under Construction' screen while admin access remains open.</div>
          </div>
          <div>
            <label class="sa-switch">
              <input type="checkbox" id="sa-overview-maint-toggle" ${portfolioData.maintenanceMode ? 'checked' : ''} onchange="window.SaantuAdmin.toggleMaintenance(this.checked)" />
              <span class="sa-slider"></span>
            </label>
          </div>
        </div>
        <div style="font-size:12px;color:${portfolioData.maintenanceMode ? '#ef4444' : '#10b981'};font-weight:600;">
          Status: ${portfolioData.maintenanceMode ? '⚠️ ACTIVE (Public website is protected with Maintenance screen)' : '✓ INACTIVE (Website is live for everyone)'}
        </div>
      </div>
    `;
  }

  // --- TAB: PROJECTS ---
  function renderProjectsTab(container) {
    let rowsHtml = portfolioData.projects.map((p, idx) => `
      <tr>
        <td style="width:50px;">
          <img src="${p.image || 'images/ai_chatbot_banner.png'}" style="width:40px;height:40px;border-radius:6px;object-fit:cover;border:1px solid rgba(10,10,10,0.08);" onerror="this.src='images/ai_chatbot_banner.png'" />
        </td>
        <td>
          <div style="font-weight:700;color:#0A0A0A;">${escapeHtml(p.title)}</div>
          <div style="font-size:11px;color:#94a3b8;">${escapeHtml(p.category || 'General')}</div>
        </td>
        <td>
          <div style="max-width:260px;font-size:11px;color:#cbd5e1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
            ${escapeHtml(p.desc || '')}
          </div>
        </td>
        <td>
          <span class="sa-badge ${p.visible !== false ? 'sa-badge-green' : 'sa-badge-gray'}">
            ${p.visible !== false ? '● Visible' : '○ Hidden'}
          </span>
        </td>
        <td>
          <div class="sa-table-actions">
            <button class="sa-icon-btn" onclick="window.SaantuAdmin.toggleProjectVisibility(${idx})" title="Toggle Show/Hide">
              ${p.visible !== false ? '👁️' : '🚫'}
            </button>
            <button class="sa-icon-btn" onclick="window.SaantuAdmin.openEditProjectModal(${idx})" title="Edit Details">
              ✏️
            </button>
            <button class="sa-icon-btn sa-danger" onclick="window.SaantuAdmin.deleteProject(${idx})" title="Delete Project">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `).join('');

    container.innerHTML = `
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">🚀 Portfolio Projects (${portfolioData.projects.length})</div>
            <div class="sa-card-subtitle">Manage project cards, descriptions, images, tags, and visibility switches</div>
          </div>
          <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.openAddProjectModal()">
            + Add New Project
          </button>
        </div>
        <div class="sa-table-container">
          <table class="sa-table">
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Project Name & Domain</th>
                <th>Description Preview</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml || '<tr><td colspan="5" style="text-align:center;padding:24px;">No projects yet. Click "+ Add New Project" to add one!</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- TAB: SKILLS ---
  function renderSkillsTab(container) {
    const categories = [
      { key: 'languages', title: 'Programming & Markup Languages' },
      { key: 'backend', title: 'Backend Frameworks & Databases' },
      { key: 'tools', title: 'Developer Tools & Platforms' },
      { key: 'other', title: 'AI Engineering & CS Fundamentals' },
      { key: 'creative', title: 'Digital Media, Video & Audio' }
    ];

    let sectionsHtml = categories.map(cat => {
      const skills = portfolioData.skills[cat.key] || [];
      const chips = skills.map((s, idx) => `
        <span class="sa-badge sa-badge-blue" style="font-size:12px;padding:5px 10px;">
          ${escapeHtml(s)}
          <button onclick="window.SaantuAdmin.deleteSkill('${cat.key}', ${idx})" style="background:none;border:none;color:#94a3b8;cursor:pointer;margin-left:4px;" title="Remove Skill">✕</button>
        </span>
      `).join('');

      return `
        <div class="sa-card" style="margin-bottom:16px;">
          <div class="sa-card-header">
            <div>
              <div class="sa-card-title">${cat.title} (${skills.length})</div>
            </div>
            <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.openAddSkillModal('${cat.key}')">+ Add Skill</button>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${chips || '<span style="font-size:12px;color:#64748b;">No skills in this category yet.</span>'}
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div>
        <div style="margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h4 style="font-size:16px;font-weight:700;color:#0A0A0A;margin:0;">Skills Matrix Management</h4>
            <p style="font-size:12px;color:#94a3b8;margin:2px 0 0 0;">Add, modify or delete individual skills across all domains</p>
          </div>
        </div>
        ${sectionsHtml}
      </div>
    `;
  }

  // --- TAB: CERTIFICATES ---
  function renderCertificatesTab(container) {
    let rowsHtml = portfolioData.certificates.map((c, idx) => `
      <tr>
        <td style="width:50px;">
          <img src="${c.image || 'images/techpile_certificate.jpg'}" style="width:40px;height:40px;border-radius:6px;object-fit:cover;border:1px solid rgba(10,10,10,0.08);" onerror="this.src='images/techpile_certificate.jpg'" />
        </td>
        <td>
          <div style="font-weight:700;color:#0A0A0A;">${escapeHtml(c.title)}</div>
          <div style="font-size:11px;color:#94a3b8;">${escapeHtml(c.issuer)} • ID: ${escapeHtml(c.credentialId || 'N/A')}</div>
        </td>
        <td>
          <div style="font-size:11px;color:#cbd5e1;">${escapeHtml(c.date || '')}</div>
        </td>
        <td>
          <span class="sa-badge ${c.visible !== false ? 'sa-badge-green' : 'sa-badge-gray'}">
            ${c.visible !== false ? '● Visible' : '○ Hidden'}
          </span>
        </td>
        <td>
          <div class="sa-table-actions">
            <button class="sa-icon-btn" onclick="window.SaantuAdmin.toggleCertVisibility(${idx})" title="Toggle Show/Hide">
              ${c.visible !== false ? '👁️' : '🚫'}
            </button>
            <button class="sa-icon-btn" onclick="window.SaantuAdmin.openEditCertModal(${idx})" title="Edit Certificate">
              ✏️
            </button>
            <button class="sa-icon-btn sa-danger" onclick="window.SaantuAdmin.deleteCert(${idx})" title="Delete Certificate">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `).join('');

    container.innerHTML = `
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">📜 Verified Credentials (${portfolioData.certificates.length})</div>
            <div class="sa-card-subtitle">Manage degree, diploma and AI certifications displayed in credentials section</div>
          </div>
          <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.openAddCertModal()">
            + Add New Certificate
          </button>
        </div>
        <div class="sa-table-container">
          <table class="sa-table">
            <thead>
              <tr>
                <th>Certificate</th>
                <th>Title & Issuer</th>
                <th>Date Issued</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml || '<tr><td colspan="5" style="text-align:center;padding:24px;">No certificates yet.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- TAB: PROFILE & AVATAR ---
  function renderProfileTab(container) {
    const prof = portfolioData.profile;

    container.innerHTML = `
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">👤 Profile Identity & Hero Configuration</div>
            <div class="sa-card-subtitle">Update your profile photo, hero titles, bio, and availability status</div>
          </div>
        </div>

        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;margin-bottom:24px;">
          <div>
            <label class="sa-form-label" style="display:block;margin-bottom:8px;">Profile Photo</label>
            <div style="position:relative;width:120px;height:120px;border-radius:20px;overflow:hidden;border:1px solid rgba(10,10,10,0.12);">
              <img id="sa-profile-preview" src="${prof.profileImage || 'images/saantu_profile.jpg'}" style="width:100%;height:100%;object-fit:cover;" onerror="this.src='images/profile.png'" />
            </div>
            <div style="margin-top:10px;">
              <input type="file" id="sa-profile-file-input" accept="image/*" style="display:none;" onchange="window.SaantuAdmin.handleProfilePhotoUpload(this)" />
              <button class="sa-btn sa-btn-secondary" onclick="document.getElementById('sa-profile-file-input').click()" style="font-size:11px;padding:6px 10px;">
                📷 Upload New Photo
              </button>
            </div>
          </div>

          <div style="flex:1;min-width:280px;display:flex;flex-direction:column;gap:14px;">
            <div class="sa-form-group">
              <label class="sa-form-label">Full Name & Display Alias</label>
              <div style="display:flex;gap:10px;">
                <input type="text" id="sa-prof-name" class="sa-input" value="${escapeHtml(prof.name)}" placeholder="Full Name" />
                <input type="text" id="sa-prof-alias" class="sa-input" value="${escapeHtml(prof.alias)}" placeholder="Alias (e.g. Saantu)" style="max-width:140px;" />
              </div>
            </div>

            <div class="sa-form-group">
              <label class="sa-form-label">Hero Headline</label>
              <input type="text" id="sa-prof-headline" class="sa-input" value="${escapeHtml(prof.headline)}" />
            </div>

            <div class="sa-form-group">
              <label class="sa-form-label">Availability Status</label>
              <input type="text" id="sa-prof-availability" class="sa-input" value="${escapeHtml(prof.availability)}" placeholder="Open for Software Engineering..." />
            </div>
          </div>
        </div>

        <div class="sa-form-group" style="margin-bottom:16px;">
          <label class="sa-form-label">Hero Subheadline</label>
          <textarea id="sa-prof-subheadline" class="sa-input" rows="2">${escapeHtml(prof.subheadline)}</textarea>
        </div>

        <div class="sa-form-group" style="margin-bottom:16px;">
          <label class="sa-form-label">About Me / Bio</label>
          <textarea id="sa-prof-bio" class="sa-input" rows="4">${escapeHtml(prof.bio)}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
          <div class="sa-form-group">
            <label class="sa-form-label">Coordinates / Location</label>
            <input type="text" id="sa-prof-location" class="sa-input" value="${escapeHtml(prof.location)}" />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Primary Contact Email</label>
            <input type="email" id="sa-prof-email" class="sa-input" value="${escapeHtml(prof.email)}" />
          </div>
        </div>

        <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.saveProfileChanges()">
          💾 Save Profile Changes
        </button>
      </div>
    `;
  }

  // --- TAB: RESUME / CV ---
  function renderResumeTab(container) {
    const res = portfolioData.resume;

    container.innerHTML = `
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">📄 Resume / CV Manager</div>
            <div class="sa-card-subtitle">Upload updated PDF resume or set direct link for the "Request Resume / CV" buttons</div>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:16px;max-width:640px;">
          <div class="sa-form-group">
            <label class="sa-form-label">Current Resume File / Link</label>
            <input type="text" id="sa-resume-url" class="sa-input" value="${escapeHtml(res.url)}" placeholder="https://... or PDF path" />
          </div>

          <div class="sa-form-group">
            <label class="sa-form-label">Resume Display Filename</label>
            <input type="text" id="sa-resume-filename" class="sa-input" value="${escapeHtml(res.fileName || 'Shanteshwar_Ojha_Resume.pdf')}" />
          </div>

          <div style="padding:16px;background:#FAFAFB;border:1px dashed var(--sa-admin-border);border-radius:12px;text-align:center;">
            <div style="font-size:13px;color:#0A0A0A;font-weight:600;margin-bottom:6px;">Upload New Resume PDF Directly</div>
            <div style="font-size:11px;color:#94a3b8;margin-bottom:12px;">File will be encoded and stored locally for instant 1-click download by visitors</div>
            <input type="file" id="sa-resume-file-input" accept=".pdf" style="display:none;" onchange="window.SaantuAdmin.handleResumePdfUpload(this)" />
            <button class="sa-btn sa-btn-secondary" onclick="document.getElementById('sa-resume-file-input').click()">
              📎 Select PDF File from Device
            </button>
            <div id="sa-resume-upload-status" style="margin-top:8px;font-size:11px;color:#10b981;">
              ${res.directPdfData ? '✓ Custom PDF is attached and ready' : ''}
            </div>
          </div>

          <div style="display:flex;gap:10px;">
            <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.saveResumeChanges()">
              💾 Save Resume Settings
            </button>
            <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.testDownloadResume()">
              🧪 Test Download
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --- TAB: SOCIAL LINKS ---
  function renderSocialsTab(container) {
    let rowsHtml = portfolioData.socials.map((s, idx) => `
      <tr>
        <td style="font-weight:700;color:#0A0A0A;">${escapeHtml(s.label)}</td>
        <td>
          <input type="text" class="sa-input" value="${escapeHtml(s.url)}" onchange="window.SaantuAdmin.updateSocialUrl(${idx}, this.value)" style="padding:8px 10px;font-size:12px;" />
        </td>
        <td>
          <span class="sa-badge ${s.visible !== false ? 'sa-badge-green' : 'sa-badge-gray'}">
            ${s.visible !== false ? '● Active' : '○ Hidden'}
          </span>
        </td>
        <td>
          <button class="sa-icon-btn" onclick="window.SaantuAdmin.toggleSocialVisibility(${idx})" title="Toggle Show/Hide">
            ${s.visible !== false ? '👁️' : '🚫'}
          </button>
        </td>
      </tr>
    `).join('');

    container.innerHTML = `
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">🌐 Social Networks & Inquiries Reach</div>
            <div class="sa-card-subtitle">Update links for GitHub, LinkedIn, Instagram, WhatsApp, and Gmail</div>
          </div>
          <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.saveMasterData('Updated Social Links')">
            💾 Save Social Links
          </button>
        </div>
        <div class="sa-table-container">
          <table class="sa-table">
            <thead>
              <tr>
                <th style="width:140px;">Platform</th>
                <th>Target URL / Link</th>
                <th style="width:100px;">Status</th>
                <th style="width:80px;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- TAB: MS WORD-STYLE WHOLE WEB LIVE EDIT ---
  function renderWordEditTab(container) {
    container.innerHTML = `
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">✍️ MS Word-Style Whole Web Live Editor</div>
            <div class="sa-card-subtitle">Edit any text, heading, or paragraph directly on the live website like a document</div>
          </div>
        </div>

        <div style="font-size:13px;line-height:1.6;color:#cbd5e1;margin-bottom:20px;max-width:680px;">
          Jab aap <strong>"Activate Word-Style Live Editor"</strong> par click karenge:
          <ul style="margin:10px 0 16px 20px;list-style:disc;font-size:12px;color:#94a3b8;">
            <li>Screen ke top par ek floating MS Word-style formatting toolbar aayega (Bold, Italic, Color, Save).</li>
            <li>Aap poori website ke kisi bhi text, title, bio ya card par direct mouse se click karke type kar sakenge.</li>
            <li>Toolbar par <strong>"💾 Save All Changes"</strong> par click karte hi aapke sabhi visual edits permanently save ho jayenge!</li>
          </ul>
        </div>

        <div style="display:flex;gap:12px;">
          <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.triggerWholeWebEdit()">
            🚀 Activate Word-Style Live Editor Now
          </button>
          <button class="sa-btn sa-btn-danger" onclick="window.SaantuAdmin.clearLiveEdits()">
            🔄 Reset All Live Edits to Original
          </button>
        </div>
      </div>
    `;
  }

  // --- TAB: VISITOR DATA, FEEDBACK LEADS & GOOGLE DRIVE ---
  function renderDataTab(container) {
    const leads = JSON.parse(localStorage.getItem(STORAGE_KEYS.LEADS_DATA) || '[]');
    const visits = JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITOR_LOGS) || '[]');
    const gDrive = getGoogleDriveSettings();

    let leadsHtml = leads.map(l => `
      <tr>
        <td style="font-size:11px;color:#94a3b8;">${escapeHtml(l.dateFormatted)}</td>
        <td style="font-weight:700;color:#0A0A0A;">${escapeHtml(l.name)}</td>
        <td style="color:#60a5fa;"><a href="mailto:${escapeHtml(l.email)}" style="color:inherit;text-decoration:underline;">${escapeHtml(l.email)}</a></td>
        <td style="max-width:280px;font-size:11px;color:#cbd5e1;">${escapeHtml(l.message)}</td>
        <td style="font-size:10px;font-family:monospace;color:#94a3b8;">${l.device} • ${l.browser}</td>
      </tr>
    `).join('');

    let visitsHtml = visits.slice(0, 50).map(v => `
      <tr>
        <td style="font-size:11px;color:#94a3b8;">${escapeHtml(v.dateFormatted)}</td>
        <td style="font-weight:600;color:#0A0A0A;">${escapeHtml(v.device)}</td>
        <td style="color:#cbd5e1;">${escapeHtml(v.browser)}</td>
        <td style="font-size:11px;color:#94a3b8;">${escapeHtml(v.screen)}</td>
        <td style="font-size:11px;color:#94a3b8;">${escapeHtml(v.referrer)}</td>
      </tr>
    `).join('');

    container.innerHTML = `
      <!-- Google Drive Folder Sync Setup -->
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">📁 Google Drive Auto-Sync ("my portofolio data")</div>
            <div class="sa-card-subtitle">Syncs all visitor inquiries and logs into your Google Drive folder automatically</div>
          </div>
          <button class="sa-btn sa-btn-success" onclick="window.SaantuAdmin.syncNowToGoogleDrive()">
            ☁️ Sync All Data to Google Drive Now
          </button>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
          <div class="sa-form-group">
            <label class="sa-form-label">Google Drive Target Folder</label>
            <input type="text" id="sa-gdrive-folder" class="sa-input" value="${escapeHtml(gDrive.folderName || 'my portofolio data')}" />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Google Apps Script Webhook URL</label>
            <input type="text" id="sa-gdrive-webhook" class="sa-input" value="${escapeHtml(gDrive.webhookUrl || '')}" placeholder="https://script.google.com/macros/s/.../exec" />
          </div>
        </div>

        <div style="display:flex;gap:10px;margin-bottom:16px;">
          <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.saveDriveConfig()">Save Drive Config</button>
          <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.showDriveScriptModal()">📋 View Free Google Apps Script Code</button>
          <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.exportTableToCsv()">📥 Download CSV Table</button>
        </div>
      </div>

      <!-- Inquiries & Feedback Leads -->
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">📬 Inquiries & Feedback Leads (${leads.length})</div>
            <div class="sa-card-subtitle">Captured from website contact form and AI chatbot inquiries</div>
          </div>
          <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.clearLeads()">Clear Leads</button>
        </div>
        <div class="sa-table-container">
          <table class="sa-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Device</th>
              </tr>
            </thead>
            <tbody>
              ${leadsHtml || '<tr><td colspan="5" style="text-align:center;padding:24px;">No inquiries captured yet.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Recent Visits -->
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">👁️ Recent Site Visits (${visits.length})</div>
            <div class="sa-card-subtitle">Live analytics of device types, browsers, and screen resolutions</div>
          </div>
          <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.clearVisits()">Clear Visits</button>
        </div>
        <div class="sa-table-container">
          <table class="sa-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Device</th>
                <th>Browser</th>
                <th>Screen</th>
                <th>Referrer</th>
              </tr>
            </thead>
            <tbody>
              ${visitsHtml || '<tr><td colspan="5" style="text-align:center;padding:24px;">No visits recorded yet.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- TAB: HISTORY & REVISIONS ---
  function renderHistoryTab(container) {
    const history = getHistoryStack();
    const curIdx = getHistoryIndex();

    let itemsHtml = history.map((item, idx) => `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:${idx === curIdx ? '#F4F4F6' : '#FAFAFB'};border:1px solid ${idx === curIdx ? '#0A0A0A' : 'var(--sa-admin-border)'};border-radius:10px;margin-bottom:8px;">
        <div>
          <div style="font-weight:700;color:#0A0A0A;font-size:13px;">
            ${escapeHtml(item.action)}
            ${idx === curIdx ? '<span class="sa-badge sa-badge-blue" style="margin-left:8px;">Active Version</span>' : ''}
          </div>
          <div style="font-size:11px;color:#94a3b8;margin-top:2px;">${item.timestamp}</div>
        </div>
        <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.restoreHistoryIndex(${idx})" style="font-size:11px;padding:5px 10px;">
          Restore This
        </button>
      </div>
    `).reverse().join('');

    container.innerHTML = `
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">⏱️ History Timeline & Revision Control</div>
            <div class="sa-card-subtitle">Every change is saved with Undo / Redo functionality</div>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.undoHistory()">↶ Undo</button>
            <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.redoHistory()">↷ Redo</button>
          </div>
        </div>
        <div>
          ${itemsHtml || '<p style="color:#64748b;font-size:12px;">No past history yet.</p>'}
        </div>
      </div>
    `;
  }

  // --- TAB: DYNAMIC FEATURE BUILDER ---
  function renderFeatureBuilderTab(container) {
    const feats = portfolioData.customFeatures || [];

    let listHtml = feats.map((f, idx) => `
      <div class="sa-card" style="margin-bottom:12px;">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">${f.icon || '📦'} ${escapeHtml(f.name)}</div>
            <div class="sa-card-subtitle">${escapeHtml(f.description || 'Custom Module')} • Fields: ${f.fields ? f.fields.join(', ') : 'Title, Description'}</div>
          </div>
          <div class="sa-table-actions">
            <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.switchTab('custom_${f.key}')">Open Manager</button>
            <button class="sa-icon-btn sa-danger" onclick="window.SaantuAdmin.deleteCustomFeature(${idx})">🗑️</button>
          </div>
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">➕ Dynamic Feature & Module Builder</div>
            <div class="sa-card-subtitle">Add brand new sections, features, and custom options to your Admin Panel and Portfolio</div>
          </div>
          <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.openCreateFeatureModal()">
            + Create New Feature / Section
          </button>
        </div>

        <div style="font-size:13px;color:#cbd5e1;line-height:1.6;margin-bottom:18px;">
          Aap bina kisi code ko touch kiye Admin Panel me naya section add kar sakte hain (jaise: <em>Services, Testimonials, Awards, Articles, Work Experience</em>).
          System aapse requirements poochega aur dynamically management tab aur UI generate kar dega!
        </div>

        <div>
          ${listHtml || '<p style="color:#64748b;font-size:12px;">No custom features added yet. Click "+ Create New Feature / Section" to add your first one!</p>'}
        </div>
      </div>
    `;
  }

  function renderCustomFeatureTab(container, feat) {
    const items = feat.items || [];
    let rowsHtml = items.map((it, idx) => `
      <tr>
        <td style="font-weight:700;color:#0A0A0A;">${escapeHtml(it.title || 'Untitled')}</td>
        <td style="font-size:11px;color:#cbd5e1;">${escapeHtml(it.description || '')}</td>
        <td>
          <span class="sa-badge ${it.visible !== false ? 'sa-badge-green' : 'sa-badge-gray'}">
            ${it.visible !== false ? '● Visible' : '○ Hidden'}
          </span>
        </td>
        <td>
          <button class="sa-icon-btn sa-danger" onclick="window.SaantuAdmin.deleteCustomItem('${feat.key}', ${idx})">🗑️</button>
        </td>
      </tr>
    `).join('');

    container.innerHTML = `
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">${feat.icon || '📦'} ${escapeHtml(feat.name)} (${items.length} Entries)</div>
            <div class="sa-card-subtitle">${escapeHtml(feat.description)}</div>
          </div>
          <div style="display:flex;gap:10px;">
            <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.openAddCustomItemModal('${feat.key}')">+ Add New Entry</button>
            <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.switchTab('feature_builder')">Back to Builder</button>
          </div>
        </div>
        <div class="sa-table-container">
          <table class="sa-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Details</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml || '<tr><td colspan="4" style="text-align:center;padding:24px;">No entries yet in this custom section.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- TAB: SETTINGS & MAINTENANCE ---
  function renderSettingsTab(container) {
    container.innerHTML = `
      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">🔍 SEO Meta Tags & Google Ranking</div>
            <div class="sa-card-subtitle">Customize titles and descriptions shown on Google search and social shares</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;max-width:680px;margin-bottom:16px;">
          <div class="sa-form-group">
            <label class="sa-form-label">Page Title</label>
            <input type="text" id="sa-seo-title" class="sa-input" value="${escapeHtml(portfolioData.seo.title)}" />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Meta Description</label>
            <textarea id="sa-seo-desc" class="sa-input" rows="3">${escapeHtml(portfolioData.seo.description)}</textarea>
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Meta Keywords</label>
            <input type="text" id="sa-seo-keywords" class="sa-input" value="${escapeHtml(portfolioData.seo.keywords)}" />
          </div>
          <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.saveSeoSettings()">
            💾 Save SEO Tags
          </button>
        </div>
      </div>

      <div class="sa-card">
        <div class="sa-card-header">
          <div>
            <div class="sa-card-title">💾 Backup & Restore Full Portfolio (.JSON)</div>
            <div class="sa-card-subtitle">Export all projects, skills, certificates, and settings to a single file, or restore anytime</div>
          </div>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.exportFullBackupJson()">
            📥 Download Complete Backup (.json)
          </button>
          <input type="file" id="sa-restore-json-input" accept=".json" style="display:none;" onchange="window.SaantuAdmin.handleRestoreBackupJson(this)" />
          <button class="sa-btn sa-btn-secondary" onclick="document.getElementById('sa-restore-json-input').click()">
            📤 Restore from Backup File
          </button>
          <button class="sa-btn sa-btn-danger" onclick="window.SaantuAdmin.resetFactoryDefaults()">
            ⚠️ Reset to Factory Defaults
          </button>
        </div>
      </div>
    `;
  }

  // --- 11. MODALS & FORMS (PROJECTS, SKILLS, CERTS, FEATURE BUILDER) ---
  function openAddProjectModal() {
    showInnerModal(`
      <h3 style="font-size:18px;font-weight:700;color:#0A0A0A;margin:0 0 16px 0;">+ Add New Project</h3>
      <form onsubmit="window.SaantuAdmin.submitProjectForm(event, -1)" style="display:flex;flex-direction:column;gap:14px;">
        <div class="sa-form-group">
          <label class="sa-form-label">Project Title</label>
          <input type="text" id="sa-pf-title" class="sa-input" placeholder="e.g. Autonomous Vision AI" required />
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div class="sa-form-group">
            <label class="sa-form-label">Category</label>
            <input type="text" id="sa-pf-category" class="sa-input" placeholder="e.g. AI / Full-Stack" required />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Section Type</label>
            <select id="sa-pf-type" class="sa-input">
              <option value="ai">AI Systems</option>
              <option value="web">Web Apps</option>
              <option value="media">Cinema & Media</option>
            </select>
          </div>
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Tech Stack (comma separated)</label>
          <input type="text" id="sa-pf-tech" class="sa-input" placeholder="Python, FastAPI, Groq, PyTorch, React" required />
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Short Description</label>
          <textarea id="sa-pf-desc" class="sa-input" rows="2" placeholder="Brief summary of the project..." required></textarea>
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Extended Story / Core Vision</label>
          <textarea id="sa-pf-vision" class="sa-input" rows="3" placeholder="Deep technical background..."></textarea>
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Project Image / Banner (Upload or Path)</label>
          <div style="display:flex;gap:10px;">
            <input type="text" id="sa-pf-image" class="sa-input" placeholder="images/ai_chatbot_banner.png or URL" />
            <input type="file" id="sa-pf-file" accept="image/*" style="display:none;" onchange="window.SaantuAdmin.handleImageUpload(this, 'sa-pf-image')" />
            <button type="button" class="sa-btn sa-btn-secondary" onclick="document.getElementById('sa-pf-file').click()">Browse</button>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div class="sa-form-group">
            <label class="sa-form-label">GitHub Repository Link</label>
            <input type="url" id="sa-pf-github" class="sa-input" placeholder="https://github.com/..." />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Live Demo Link</label>
            <input type="url" id="sa-pf-live" class="sa-input" placeholder="https://..." />
          </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px;">
          <button type="button" class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.closeInnerModal()">Cancel</button>
          <button type="submit" class="sa-btn sa-btn-primary">Add Project</button>
        </div>
      </form>
    `);
  }

  function openEditProjectModal(index) {
    const p = portfolioData.projects[index];
    if (!p) return;

    showInnerModal(`
      <h3 style="font-size:18px;font-weight:700;color:#0A0A0A;margin:0 0 16px 0;">✏️ Edit Project</h3>
      <form onsubmit="window.SaantuAdmin.submitProjectForm(event, ${index})" style="display:flex;flex-direction:column;gap:14px;">
        <div class="sa-form-group">
          <label class="sa-form-label">Project Title</label>
          <input type="text" id="sa-pf-title" class="sa-input" value="${escapeHtml(p.title)}" required />
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div class="sa-form-group">
            <label class="sa-form-label">Category</label>
            <input type="text" id="sa-pf-category" class="sa-input" value="${escapeHtml(p.category || '')}" required />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Section Type</label>
            <select id="sa-pf-type" class="sa-input">
              <option value="ai" ${p.type === 'ai' ? 'selected' : ''}>AI Systems</option>
              <option value="web" ${p.type === 'web' ? 'selected' : ''}>Web Apps</option>
              <option value="media" ${p.type === 'media' ? 'selected' : ''}>Cinema & Media</option>
            </select>
          </div>
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Tech Stack</label>
          <input type="text" id="sa-pf-tech" class="sa-input" value="${escapeHtml(p.tech || '')}" required />
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Short Description</label>
          <textarea id="sa-pf-desc" class="sa-input" rows="2" required>${escapeHtml(p.desc || '')}</textarea>
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Extended Story / Core Vision</label>
          <textarea id="sa-pf-vision" class="sa-input" rows="3">${escapeHtml(p.coreVision || '')}</textarea>
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Project Image</label>
          <div style="display:flex;gap:10px;">
            <input type="text" id="sa-pf-image" class="sa-input" value="${escapeHtml(p.image || '')}" />
            <input type="file" id="sa-pf-file" accept="image/*" style="display:none;" onchange="window.SaantuAdmin.handleImageUpload(this, 'sa-pf-image')" />
            <button type="button" class="sa-btn sa-btn-secondary" onclick="document.getElementById('sa-pf-file').click()">Browse</button>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div class="sa-form-group">
            <label class="sa-form-label">GitHub Repository Link</label>
            <input type="url" id="sa-pf-github" class="sa-input" value="${escapeHtml((p.links && p.links[0] && p.links[0].url) || p.github || '')}" />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Live Demo Link</label>
            <input type="url" id="sa-pf-live" class="sa-input" value="${escapeHtml((p.links && p.links[1] && p.links[1].url) || p.live || '')}" />
          </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px;">
          <button type="button" class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.closeInnerModal()">Cancel</button>
          <button type="submit" class="sa-btn sa-btn-primary">Update Project</button>
        </div>
      </form>
    `);
  }

  function submitProjectForm(e, index) {
    e.preventDefault();
    const title = document.getElementById('sa-pf-title').value.trim();
    const category = document.getElementById('sa-pf-category').value.trim();
    const type = document.getElementById('sa-pf-type').value;
    const tech = document.getElementById('sa-pf-tech').value.trim();
    const desc = document.getElementById('sa-pf-desc').value.trim();
    const vision = document.getElementById('sa-pf-vision').value.trim();
    const image = document.getElementById('sa-pf-image').value.trim() || 'images/ai_chatbot_banner.png';
    const github = document.getElementById('sa-pf-github').value.trim();
    const live = document.getElementById('sa-pf-live').value.trim();

    const links = [];
    if (github) links.push({ label: "GitHub Repository", url: github });
    if (live) links.push({ label: "Live Demo", url: live });

    const projectObj = {
      id: index >= 0 ? portfolioData.projects[index].id : 'proj-' + Date.now(),
      title,
      category,
      type,
      tech,
      desc,
      coreVision: vision,
      image,
      links,
      visible: index >= 0 ? (portfolioData.projects[index].visible !== false) : true,
      metrics: [
        { label: "Architecture", desc: tech.split(',')[0] || "Custom Engine" }
      ]
    };

    if (index >= 0) {
      portfolioData.projects[index] = projectObj;
      saveMasterData(`Updated Project "${title}"`);
    } else {
      portfolioData.projects.unshift(projectObj);
      saveMasterData(`Added New Project "${title}"`);
    }

    closeInnerModal();
    renderActiveTab();
  }

  function deleteProject(index) {
    if (confirm(`Are you sure you want to delete "${portfolioData.projects[index].title}"?`)) {
      const removed = portfolioData.projects.splice(index, 1);
      saveMasterData(`Deleted Project "${removed[0].title}"`);
      renderActiveTab();
    }
  }

  function toggleProjectVisibility(index) {
    const p = portfolioData.projects[index];
    p.visible = (p.visible === false);
    saveMasterData(`Toggled visibility for "${p.title}" to ${p.visible ? 'Visible' : 'Hidden'}`);
    renderActiveTab();
  }

  // --- SKILLS MODAL & LOGIC ---
  function openAddSkillModal(defaultCat = 'languages') {
    showInnerModal(`
      <h3 style="font-size:18px;font-weight:700;color:#0A0A0A;margin:0 0 16px 0;">+ Add New Skill</h3>
      <form onsubmit="window.SaantuAdmin.submitSkillForm(event)" style="display:flex;flex-direction:column;gap:14px;">
        <div class="sa-form-group">
          <label class="sa-form-label">Skill Name</label>
          <input type="text" id="sa-sk-name" class="sa-input" placeholder="e.g. PyTorch, Docker, Kubernetes" required />
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Category</label>
          <select id="sa-sk-cat" class="sa-input">
            <option value="languages" ${defaultCat === 'languages' ? 'selected' : ''}>Programming & Markup</option>
            <option value="backend" ${defaultCat === 'backend' ? 'selected' : ''}>Backend & Databases</option>
            <option value="tools" ${defaultCat === 'tools' ? 'selected' : ''}>Tools & DevOps</option>
            <option value="other" ${defaultCat === 'other' ? 'selected' : ''}>AI & CS Fundamentals</option>
            <option value="creative" ${defaultCat === 'creative' ? 'selected' : ''}>Digital Media & Creative</option>
          </select>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px;">
          <button type="button" class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.closeInnerModal()">Cancel</button>
          <button type="submit" class="sa-btn sa-btn-primary">Add Skill</button>
        </div>
      </form>
    `);
  }

  function submitSkillForm(e) {
    e.preventDefault();
    const name = document.getElementById('sa-sk-name').value.trim();
    const cat = document.getElementById('sa-sk-cat').value;

    if (!portfolioData.skills[cat]) portfolioData.skills[cat] = [];
    portfolioData.skills[cat].push(name);
    saveMasterData(`Added Skill "${name}" to ${cat}`);
    closeInnerModal();
    renderActiveTab();
  }

  function deleteSkill(category, index) {
    const list = portfolioData.skills[category];
    if (list && list[index]) {
      const removed = list.splice(index, 1);
      saveMasterData(`Removed Skill "${removed[0]}"`);
      renderActiveTab();
    }
  }

  // --- CERTIFICATES MODAL & LOGIC ---
  function openAddCertModal() {
    showInnerModal(`
      <h3 style="font-size:18px;font-weight:700;color:#0A0A0A;margin:0 0 16px 0;">+ Add Certificate</h3>
      <form onsubmit="window.SaantuAdmin.submitCertForm(event, -1)" style="display:flex;flex-direction:column;gap:14px;">
        <div class="sa-form-group">
          <label class="sa-form-label">Certificate Title</label>
          <input type="text" id="sa-cert-title" class="sa-input" placeholder="e.g. Deep Learning Specialization" required />
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div class="sa-form-group">
            <label class="sa-form-label">Issuing Organization / Institute</label>
            <input type="text" id="sa-cert-issuer" class="sa-input" placeholder="e.g. Techpile, Stanford, Coursera" required />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Issue Date</label>
            <input type="text" id="sa-cert-date" class="sa-input" placeholder="e.g. August 2026" required />
          </div>
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Credential ID / Verify URL</label>
          <input type="text" id="sa-cert-id" class="sa-input" placeholder="e.g. TechpileST260123" />
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Certificate Image (Upload or File Path)</label>
          <div style="display:flex;gap:10px;">
            <input type="text" id="sa-cert-image" class="sa-input" placeholder="images/techpile_certificate.jpg" />
            <input type="file" id="sa-cert-file" accept="image/*" style="display:none;" onchange="window.SaantuAdmin.handleImageUpload(this, 'sa-cert-image')" />
            <button type="button" class="sa-btn sa-btn-secondary" onclick="document.getElementById('sa-cert-file').click()">Browse</button>
          </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px;">
          <button type="button" class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.closeInnerModal()">Cancel</button>
          <button type="submit" class="sa-btn sa-btn-primary">Save Certificate</button>
        </div>
      </form>
    `);
  }

  function openEditCertModal(index) {
    const c = portfolioData.certificates[index];
    if (!c) return;

    showInnerModal(`
      <h3 style="font-size:18px;font-weight:700;color:#0A0A0A;margin:0 0 16px 0;">✏️ Edit Certificate</h3>
      <form onsubmit="window.SaantuAdmin.submitCertForm(event, ${index})" style="display:flex;flex-direction:column;gap:14px;">
        <div class="sa-form-group">
          <label class="sa-form-label">Certificate Title</label>
          <input type="text" id="sa-cert-title" class="sa-input" value="${escapeHtml(c.title)}" required />
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div class="sa-form-group">
            <label class="sa-form-label">Issuer</label>
            <input type="text" id="sa-cert-issuer" class="sa-input" value="${escapeHtml(c.issuer)}" required />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Date</label>
            <input type="text" id="sa-cert-date" class="sa-input" value="${escapeHtml(c.date || '')}" required />
          </div>
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Credential ID</label>
          <input type="text" id="sa-cert-id" class="sa-input" value="${escapeHtml(c.credentialId || '')}" />
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Certificate Image</label>
          <div style="display:flex;gap:10px;">
            <input type="text" id="sa-cert-image" class="sa-input" value="${escapeHtml(c.image || '')}" />
            <input type="file" id="sa-cert-file" accept="image/*" style="display:none;" onchange="window.SaantuAdmin.handleImageUpload(this, 'sa-cert-image')" />
            <button type="button" class="sa-btn sa-btn-secondary" onclick="document.getElementById('sa-cert-file').click()">Browse</button>
          </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px;">
          <button type="button" class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.closeInnerModal()">Cancel</button>
          <button type="submit" class="sa-btn sa-btn-primary">Update Certificate</button>
        </div>
      </form>
    `);
  }

  function submitCertForm(e, index) {
    e.preventDefault();
    const title = document.getElementById('sa-cert-title').value.trim();
    const issuer = document.getElementById('sa-cert-issuer').value.trim();
    const date = document.getElementById('sa-cert-date').value.trim();
    const credId = document.getElementById('sa-cert-id').value.trim();
    const image = document.getElementById('sa-cert-image').value.trim() || 'images/techpile_certificate.jpg';

    const certObj = {
      id: index >= 0 ? portfolioData.certificates[index].id : 'cert-' + Date.now(),
      title,
      issuer,
      date,
      credentialId: credId,
      image,
      visible: index >= 0 ? (portfolioData.certificates[index].visible !== false) : true
    };

    if (index >= 0) {
      portfolioData.certificates[index] = certObj;
      saveMasterData(`Updated Certificate "${title}"`);
    } else {
      portfolioData.certificates.push(certObj);
      saveMasterData(`Added Certificate "${title}"`);
    }

    closeInnerModal();
    renderActiveTab();
  }

  function deleteCert(index) {
    if (confirm(`Delete certificate "${portfolioData.certificates[index].title}"?`)) {
      const removed = portfolioData.certificates.splice(index, 1);
      saveMasterData(`Deleted Certificate "${removed[0].title}"`);
      renderActiveTab();
    }
  }

  function toggleCertVisibility(index) {
    const c = portfolioData.certificates[index];
    c.visible = (c.visible === false);
    saveMasterData(`Toggled visibility for certificate "${c.title}"`);
    renderActiveTab();
  }

  // --- DYNAMIC FEATURE BUILDER LOGIC ---
  function openCreateFeatureModal() {
    showInnerModal(`
      <h3 style="font-size:18px;font-weight:700;color:#0A0A0A;margin:0 0 16px 0;">➕ Create New Feature / Section</h3>
      <p style="font-size:12px;color:#94a3b8;margin-bottom:14px;">Define what information your new section requires</p>
      <form onsubmit="window.SaantuAdmin.submitFeatureBuilderForm(event)" style="display:flex;flex-direction:column;gap:14px;">
        <div class="sa-form-group">
          <label class="sa-form-label">Feature / Section Name</label>
          <input type="text" id="sa-fb-name" class="sa-input" placeholder="e.g. Client Testimonials, Awards & Honors" required />
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div class="sa-form-group">
            <label class="sa-form-label">Section Icon (Emoji or symbol)</label>
            <input type="text" id="sa-fb-icon" class="sa-input" placeholder="⭐, 🏆, 💬, 🎬" value="✨" required />
          </div>
          <div class="sa-form-group">
            <label class="sa-form-label">Internal Key (Lowercase, no spaces)</label>
            <input type="text" id="sa-fb-key" class="sa-input" placeholder="e.g. testimonials, awards" required />
          </div>
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Description / Purpose</label>
          <textarea id="sa-fb-desc" class="sa-input" rows="2" placeholder="Explain what this feature is used for..."></textarea>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px;">
          <button type="button" class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.closeInnerModal()">Cancel</button>
          <button type="submit" class="sa-btn sa-btn-primary">Generate Feature Module</button>
        </div>
      </form>
    `);
  }

  function submitFeatureBuilderForm(e) {
    e.preventDefault();
    const name = document.getElementById('sa-fb-name').value.trim();
    const icon = document.getElementById('sa-fb-icon').value.trim() || '✨';
    const key = document.getElementById('sa-fb-key').value.trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');
    const desc = document.getElementById('sa-fb-desc').value.trim();

    if (!portfolioData.customFeatures) portfolioData.customFeatures = [];

    const newFeature = {
      key,
      name,
      icon,
      description: desc,
      fields: ['Title', 'Description', 'Image / Link'],
      items: []
    };

    portfolioData.customFeatures.push(newFeature);
    saveMasterData(`Created Custom Feature "${name}"`);
    closeInnerModal();
    renderActiveTab();
  }

  function deleteCustomFeature(index) {
    if (confirm(`Remove custom feature "${portfolioData.customFeatures[index].name}"?`)) {
      const removed = portfolioData.customFeatures.splice(index, 1);
      saveMasterData(`Deleted Custom Feature "${removed[0].name}"`);
      renderActiveTab();
    }
  }

  function openAddCustomItemModal(featKey) {
    showInnerModal(`
      <h3 style="font-size:18px;font-weight:700;color:#0A0A0A;margin:0 0 16px 0;">+ Add Entry to ${featKey}</h3>
      <form onsubmit="window.SaantuAdmin.submitCustomItemForm(event, '${featKey}')" style="display:flex;flex-direction:column;gap:14px;">
        <div class="sa-form-group">
          <label class="sa-form-label">Title / Name</label>
          <input type="text" id="sa-ci-title" class="sa-input" required />
        </div>
        <div class="sa-form-group">
          <label class="sa-form-label">Description / Content</label>
          <textarea id="sa-ci-desc" class="sa-input" rows="3"></textarea>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px;">
          <button type="button" class="sa-btn sa-btn-secondary" onclick="window.SaantuAdmin.closeInnerModal()">Cancel</button>
          <button type="submit" class="sa-btn sa-btn-primary">Add Entry</button>
        </div>
      </form>
    `);
  }

  function submitCustomItemForm(e, featKey) {
    e.preventDefault();
    const title = document.getElementById('sa-ci-title').value.trim();
    const desc = document.getElementById('sa-ci-desc').value.trim();

    const feat = portfolioData.customFeatures.find(f => f.key === featKey);
    if (feat) {
      if (!feat.items) feat.items = [];
      feat.items.push({
        id: 'CI-' + Date.now(),
        title,
        description: desc,
        visible: true
      });
      saveMasterData(`Added entry to "${feat.name}"`);
    }
    closeInnerModal();
    renderActiveTab();
  }

  function deleteCustomItem(featKey, index) {
    const feat = portfolioData.customFeatures.find(f => f.key === featKey);
    if (feat && feat.items && feat.items[index]) {
      feat.items.splice(index, 1);
      saveMasterData(`Deleted entry from "${feat.name}"`);
      renderActiveTab();
    }
  }

  // --- 12. MS WORD-STYLE INLINE WHOLE WEB LIVE EDITING ENGINE ---
  let isWordEditActive = false;

  function triggerWholeWebEdit() {
    closeDashboard();
    enableWordLiveEditor();
  }

  function enableWordLiveEditor() {
    isWordEditActive = true;
    let toolbar = document.getElementById('sa-word-live-toolbar');
    if (!toolbar) {
      createWordLiveToolbar();
      toolbar = document.getElementById('sa-word-live-toolbar');
    }
    toolbar.classList.add('sa-active');

    // Make all text containers editable
    const targets = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li');
    targets.forEach((el, index) => {
      // Don't make admin UI or chatbot controls editable
      if (el.closest('#sa-word-live-toolbar') || el.closest('#sa-dashboard-overlay') || el.closest('#sa-auth-modal-overlay') || el.closest('#sa-toast-container')) return;
      el.setAttribute('contenteditable', 'true');
      el.setAttribute('data-sa-editable-id', `el-${index}`);
    });

    showToast('info', 'MS Word Live Edit Mode Activated! Click any text on the page to edit.');
  }

  function disableWordLiveEditor() {
    isWordEditActive = false;
    const toolbar = document.getElementById('sa-word-live-toolbar');
    if (toolbar) toolbar.classList.remove('sa-active');

    const targets = document.querySelectorAll('[contenteditable="true"]');
    targets.forEach(el => el.removeAttribute('contenteditable'));
  }

  function saveWordLiveEdits() {
    const edits = {};
    const targets = document.querySelectorAll('[data-sa-editable-id]');
    targets.forEach(el => {
      const id = el.getAttribute('data-sa-editable-id');
      if (id) edits[id] = el.innerHTML;
    });

    localStorage.setItem(STORAGE_KEYS.LIVE_EDITS, JSON.stringify(edits));
    recordHistory('Whole Web Visual Inline Edits');
    showToast('success', 'All visual edits permanently saved to website!');
    disableWordLiveEditor();
  }

  function applyLiveWordEdits() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.LIVE_EDITS);
      if (!stored) return;
      const edits = JSON.parse(stored);
      const targets = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li');
      targets.forEach((el, index) => {
        if (el.closest('#sa-word-live-toolbar') || el.closest('#sa-dashboard-overlay') || el.closest('#sa-auth-modal-overlay') || el.closest('#sa-toast-container')) return;
        const key = `el-${index}`;
        if (edits[key] !== undefined) {
          el.innerHTML = edits[key];
        }
      });
    } catch (e) {
      console.warn('Applying live word edits error:', e);
    }
  }

  function clearLiveEdits() {
    if (confirm('Reset all MS Word live edits and revert to master portfolio text?')) {
      localStorage.removeItem(STORAGE_KEYS.LIVE_EDITS);
      showToast('success', 'Live edits reset. Reloading...');
      setTimeout(() => window.location.reload(), 600);
    }
  }

  function createWordLiveToolbar() {
    const tb = document.createElement('div');
    tb.id = 'sa-word-live-toolbar';
    tb.innerHTML = `
      <div class="sa-toolbar-brand">
        <span>✍️ MS WORD LIVE EDITOR</span>
      </div>
      <button class="sa-toolbar-btn" onclick="document.execCommand('bold', false, null)" title="Bold (Ctrl+B)"><b>B</b></button>
      <button class="sa-toolbar-btn" onclick="document.execCommand('italic', false, null)" title="Italic (Ctrl+I)"><i>I</i></button>
      <button class="sa-toolbar-btn" onclick="document.execCommand('underline', false, null)" title="Underline (Ctrl+U)"><u>U</u></button>
      <button class="sa-toolbar-btn" onclick="document.execCommand('strikeThrough', false, null)" title="Strikethrough"><s>S</s></button>
      <button class="sa-toolbar-btn sa-btn-save" onclick="window.SaantuAdmin.saveWordLiveEdits()">💾 Save All Changes</button>
      <button class="sa-toolbar-btn sa-btn-exit" onclick="window.SaantuAdmin.disableWordLiveEditor()">✕ Exit Live Edit</button>
    `;
    document.body.appendChild(tb);
  }

  // --- 13. DOM SYNCHRONIZATION (UPDATE PORTFOLIO CONTENT LIVE) ---
  function applyDataToDOM() {
    const prof = portfolioData.profile;

    // 1. Update Title and SEO
    if (portfolioData.seo) {
      if (portfolioData.seo.title) document.title = portfolioData.seo.title;
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta && portfolioData.seo.description) descMeta.setAttribute('content', portfolioData.seo.description);
    }

    // 2. Update Maintenance Mode
    updateMaintenanceScreen();

    // 3. Update Hero headline, bio, and images if elements exist
    document.querySelectorAll('img[src*="saantu_profile"], img[src*="profile.png"]').forEach(img => {
      if (prof.profileImage) img.src = prof.profileImage;
    });

    // 4. Update Resume Buttons
    document.querySelectorAll('a[href*="mailto:"][href*="Resume"], a[href*="resume"]').forEach(a => {
      if (portfolioData.resume.url) a.href = portfolioData.resume.url;
    });

    // 5. Apply any saved Word-style edits
    applyLiveWordEdits();
  }

  function updateMaintenanceScreen() {
    let overlay = document.getElementById('sa-maintenance-overlay');
    const isAdmin = sessionStorage.getItem(STORAGE_KEYS.AUTH_STATE) === 'true';

    if (portfolioData.maintenanceMode && !isAdmin) {
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'sa-maintenance-overlay';
        overlay.innerHTML = `
          <div class="sa-maintenance-box">
            <div style="font-size:36px;margin-bottom:12px;">🚧</div>
            <h2 style="font-size:24px;font-weight:800;letter-spacing:-0.02em;margin:0 0 10px 0;">Portfolio Under Scheduled Maintenance</h2>
            <p style="font-size:14px;color:#94a3b8;line-height:1.6;margin:0 0 24px 0;">
              SaantuVerse is currently undergoing scheduled updates and enhancements by Shanteshwar Ojha. Check back shortly!
            </p>
            <div style="font-size:11px;font-family:monospace;color:#60a5fa;">
              Triple-click logo or press Ctrl+Shift+A for Admin Login
            </div>
          </div>
        `;
        document.body.appendChild(overlay);
      }
      overlay.style.display = 'flex';
    } else {
      if (overlay) overlay.style.display = 'none';
    }
  }

  function toggleMaintenance(checked) {
    portfolioData.maintenanceMode = checked;
    saveMasterData(checked ? 'Enabled Maintenance Mode' : 'Disabled Maintenance Mode');
  }

  // --- 14. PROFILE & MEDIA FILE UPLOAD HANDLERS ---
  function handleProfilePhotoUpload(input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        portfolioData.profile.profileImage = e.target.result;
        const preview = document.getElementById('sa-profile-preview');
        if (preview) preview.src = e.target.result;
        saveMasterData('Updated Profile Photo');
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  function handleResumePdfUpload(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        portfolioData.resume.directPdfData = e.target.result;
        portfolioData.resume.fileName = file.name;
        portfolioData.resume.url = e.target.result; // Data URI for direct download
        const statusEl = document.getElementById('sa-resume-upload-status');
        if (statusEl) statusEl.textContent = `✓ Uploaded: ${file.name} (${Math.round(file.size / 1024)} KB)`;
        saveMasterData(`Attached Resume PDF "${file.name}"`);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleImageUpload(input, targetInputId) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const target = document.getElementById(targetInputId);
        if (target) target.value = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  function saveProfileChanges() {
    portfolioData.profile.name = document.getElementById('sa-prof-name').value.trim();
    portfolioData.profile.alias = document.getElementById('sa-prof-alias').value.trim();
    portfolioData.profile.headline = document.getElementById('sa-prof-headline').value.trim();
    portfolioData.profile.availability = document.getElementById('sa-prof-availability').value.trim();
    portfolioData.profile.subheadline = document.getElementById('sa-prof-subheadline').value.trim();
    portfolioData.profile.bio = document.getElementById('sa-prof-bio').value.trim();
    portfolioData.profile.location = document.getElementById('sa-prof-location').value.trim();
    portfolioData.profile.email = document.getElementById('sa-prof-email').value.trim();

    saveMasterData('Updated Profile & Identity Information');
  }

  function saveResumeChanges() {
    portfolioData.resume.url = document.getElementById('sa-resume-url').value.trim();
    portfolioData.resume.fileName = document.getElementById('sa-resume-filename').value.trim();
    saveMasterData('Updated Resume Link & Filename');
  }

  function testDownloadResume() {
    if (portfolioData.resume.directPdfData) {
      const link = document.createElement('a');
      link.href = portfolioData.resume.directPdfData;
      link.download = portfolioData.resume.fileName || 'Shanteshwar_Ojha_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(portfolioData.resume.url, '_blank');
    }
  }

  function updateSocialUrl(index, newUrl) {
    if (portfolioData.socials[index]) {
      portfolioData.socials[index].url = newUrl.trim();
    }
  }

  function toggleSocialVisibility(index) {
    const s = portfolioData.socials[index];
    s.visible = (s.visible === false);
    saveMasterData(`Toggled visibility for ${s.label}`);
    renderActiveTab();
  }

  function saveSeoSettings() {
    portfolioData.seo.title = document.getElementById('sa-seo-title').value.trim();
    portfolioData.seo.description = document.getElementById('sa-seo-desc').value.trim();
    portfolioData.seo.keywords = document.getElementById('sa-seo-keywords').value.trim();
    saveMasterData('Updated SEO Meta Information');
  }

  function saveDriveConfig() {
    const folder = document.getElementById('sa-gdrive-folder').value.trim() || 'my portofolio data';
    const webhook = document.getElementById('sa-gdrive-webhook').value.trim();
    saveGoogleDriveSettings({ folderName: folder, webhookUrl: webhook, autoSync: true });
  }

  function syncNowToGoogleDrive() {
    const leads = JSON.parse(localStorage.getItem(STORAGE_KEYS.LEADS_DATA) || '[]');
    const visits = JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITOR_LOGS) || '[]');
    triggerGoogleDriveSync({ type: 'bulk_sync', leads: leads, visits: visits }, true);
  }

  function showDriveScriptModal() {
    showInnerModal(`
      <h3 style="font-size:18px;font-weight:700;color:#0A0A0A;margin:0 0 10px 0;">Google Apps Script Integration</h3>
      <p style="font-size:12px;color:#94a3b8;margin-bottom:12px;">
        Follow these 3 easy steps to auto-save all leads & visits into your Google Drive folder <strong>"my portofolio data"</strong> for 100% free:
      </p>
      <ol style="font-size:11px;color:#cbd5e1;line-height:1.6;margin-left:18px;margin-bottom:12px;">
        <li>Open <a href="https://script.google.com" target="_blank" style="color:#60a5fa;">script.google.com</a> and click <strong>New Project</strong>.</li>
        <li>Paste the script below and click <strong>Deploy > New Deployment</strong> (Select 'Web app', Execute as: 'Me', Who has access: 'Anyone').</li>
        <li>Copy the resulting Webhook URL and paste it into the Webhook input in your Admin Panel!</li>
      </ol>
      <textarea readonly class="sa-input" style="font-family:monospace;font-size:10px;height:160px;white-space:pre;">
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var folderName = data.folderName || "my portofolio data";
    
    // Find or create target folder in Google Drive
    var folders = DriveApp.getFoldersByName(folderName);
    var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
    
    // Find or create Spreadsheet in folder
    var files = folder.getFilesByName("Portfolio_Leads_Table");
    var ss = files.hasNext() ? SpreadsheetApp.open(files.next()) : null;
    if (!ss) {
      ss = SpreadsheetApp.create("Portfolio_Leads_Table");
      DriveApp.getFileById(ss.getId()).moveTo(folder);
      ss.getSheets()[0].appendRow(["Timestamp", "Type", "Name / Device", "Email / Browser", "Message / Details"]);
    }
    
    var sheet = ss.getSheets()[0];
    if (data.payload.type === 'lead') {
      var d = data.payload.data;
      sheet.appendRow([new Date(), "LEAD", d.name, d.email, d.message]);
    } else if (data.payload.type === 'visit') {
      var v = data.payload.data;
      sheet.appendRow([new Date(), "VISIT", v.device, v.browser, "Screen: " + v.screen]);
    }
    
    return ContentService.createTextOutput(JSON.stringify({status: "ok"})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({error: err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
      </textarea>
      <div style="display:flex;justify-content:flex-end;margin-top:12px;">
        <button class="sa-btn sa-btn-primary" onclick="window.SaantuAdmin.closeInnerModal()">Got It</button>
      </div>
    `);
  }

  function exportFullBackupJson() {
    const fullBackup = {
      masterData: portfolioData,
      leads: JSON.parse(localStorage.getItem(STORAGE_KEYS.LEADS_DATA) || '[]'),
      visits: JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITOR_LOGS) || '[]'),
      liveEdits: JSON.parse(localStorage.getItem(STORAGE_KEYS.LIVE_EDITS) || '{}'),
      exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `shanteshwar_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('success', 'Full Portfolio JSON Backup downloaded!');
  }

  function handleRestoreBackupJson(input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const parsed = JSON.parse(e.target.result);
          if (parsed.masterData) {
            portfolioData = parsed.masterData;
            localStorage.setItem(STORAGE_KEYS.MASTER_DATA, JSON.stringify(portfolioData));
            if (parsed.leads) localStorage.setItem(STORAGE_KEYS.LEADS_DATA, JSON.stringify(parsed.leads));
            if (parsed.visits) localStorage.setItem(STORAGE_KEYS.VISITOR_LOGS, JSON.stringify(parsed.visits));
            if (parsed.liveEdits) localStorage.setItem(STORAGE_KEYS.LIVE_EDITS, JSON.stringify(parsed.liveEdits));
            showToast('success', 'Backup restored successfully! Refreshing...');
            setTimeout(() => window.location.reload(), 800);
          } else {
            showToast('error', 'Invalid backup file structure!');
          }
        } catch (err) {
          showToast('error', 'Corrupt JSON file!');
        }
      };
      reader.readAsText(input.files[0]);
    }
  }

  function resetFactoryDefaults() {
    if (confirm('DANGER: Reset entire portfolio to factory original defaults? All changes will be lost.')) {
      portfolioData = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO));
      localStorage.removeItem(STORAGE_KEYS.MASTER_DATA);
      localStorage.removeItem(STORAGE_KEYS.LIVE_EDITS);
      showToast('success', 'Factory defaults restored. Reloading...');
      setTimeout(() => window.location.reload(), 600);
    }
  }

  function clearLeads() {
    if (confirm('Clear all recorded inquiries and feedback leads?')) {
      localStorage.setItem(STORAGE_KEYS.LEADS_DATA, '[]');
      renderActiveTab();
      showToast('info', 'Leads cleared.');
    }
  }

  function clearVisits() {
    if (confirm('Clear all recorded visitor logs?')) {
      localStorage.setItem(STORAGE_KEYS.VISITOR_LOGS, '[]');
      renderActiveTab();
      showToast('info', 'Visits cleared.');
    }
  }

  // --- 15. TOAST NOTIFICATIONS & INNER MODAL HELPERS ---
  function showToast(type, text) {
    let container = document.getElementById('sa-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'sa-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `sa-toast sa-toast-${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span><span>${escapeHtml(text)}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('sa-active'), 10);
    setTimeout(() => {
      toast.classList.remove('sa-active');
      setTimeout(() => toast.remove(), 350);
    }, 3500);
  }

  function showInnerModal(contentHtml) {
    const backdrop = document.getElementById('sa-inner-modal-backdrop');
    const dialog = document.getElementById('sa-inner-modal-dialog');
    if (backdrop && dialog) {
      dialog.innerHTML = contentHtml;
      backdrop.classList.add('sa-active');
    }
  }

  function closeInnerModal() {
    const backdrop = document.getElementById('sa-inner-modal-backdrop');
    if (backdrop) backdrop.classList.remove('sa-active');
  }

  function togglePassVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (input) {
      if (input.type === 'password') {
        input.type = 'text';
        btn.textContent = 'Hide';
      } else {
        input.type = 'password';
        btn.textContent = 'Show';
      }
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- 16. FORM INTERCEPTORS & EVENT ATTACHMENTS ---
  function attachFormInterceptors() {
    // Intercept Contact Form Submissions
    document.addEventListener('submit', function (e) {
      const form = e.target;
      if (form && form.closest('#contact')) {
        const nameInput = form.querySelector('input[name="name"], input[placeholder*="Name" i]');
        const emailInput = form.querySelector('input[name="email"], input[type="email"]');
        const messageInput = form.querySelector('textarea[name="message"], textarea');

        const name = nameInput ? nameInput.value : '';
        const email = emailInput ? emailInput.value : '';
        const message = messageInput ? messageInput.value : '';

        captureContactLead(name, email, message);
      }
    }, true);
  }

  // --- 17. INITIALIZATION ON PAGE LOAD ---
  function init() {
    initStealthTrigger();
    attachFormInterceptors();
    trackVisitor();
    applyDataToDOM();

    // Re-apply DOM updates periodically in case of client-side routing / late mounts
    setTimeout(applyDataToDOM, 500);
    setTimeout(applyDataToDOM, 1500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // --- 18. PUBLIC EXPORTS ---
  window.SaantuAdmin = {
    openAuthModal,
    closeAuthModal,
    handleLoginSubmit,
    logoutAdmin,
    openDashboard,
    closeDashboard,
    switchTab,
    undoHistory,
    redoHistory,
    restoreHistoryIndex: function (idx) {
      let history = getHistoryStack();
      if (history[idx]) {
        portfolioData = JSON.parse(JSON.stringify(history[idx].data));
        localStorage.setItem(STORAGE_KEYS.MASTER_DATA, JSON.stringify(portfolioData));
        localStorage.setItem(STORAGE_KEYS.HISTORY_INDEX, idx.toString());
        window.PORTFOLIO_MASTER = portfolioData;
        applyDataToDOM();
        showToast('info', `Restored "${history[idx].action}"`);
        renderActiveTab();
      }
    },
    triggerWholeWebEdit,
    enableWordLiveEditor,
    disableWordLiveEditor,
    saveWordLiveEdits,
    clearLiveEdits,
    openAddProjectModal,
    openEditProjectModal,
    submitProjectForm,
    deleteProject,
    toggleProjectVisibility,
    openAddSkillModal,
    submitSkillForm,
    deleteSkill,
    openAddCertModal,
    openEditCertModal,
    submitCertForm,
    deleteCert,
    toggleCertVisibility,
    openCreateFeatureModal,
    submitFeatureBuilderForm,
    deleteCustomFeature,
    openAddCustomItemModal,
    submitCustomItemForm,
    deleteCustomItem,
    handleProfilePhotoUpload,
    handleResumePdfUpload,
    handleImageUpload,
    saveProfileChanges,
    saveResumeChanges,
    testDownloadResume,
    updateSocialUrl,
    toggleSocialVisibility,
    saveSeoSettings,
    saveDriveConfig,
    syncNowToGoogleDrive,
    showDriveScriptModal,
    exportTableToCsv,
    exportFullBackupJson,
    handleRestoreBackupJson,
    resetFactoryDefaults,
    clearLeads,
    clearVisits,
    toggleMaintenance,
    closeInnerModal,
    togglePassVisibility,
    saveMasterData
  };

})();
