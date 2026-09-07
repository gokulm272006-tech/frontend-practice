/**
 * JavaScript Learning Showcase - Interactive Application Logic
 * Implements:
 * - Dynamic card rendering for Programs, Topics, Concepts, Timeline, Skills, Technologies, Showcase
 * - Search & Filter for Logical Programs
 * - Program Detail Modal & Topic Detail Modal
 * - Code Copying with Toast Feedback
 * - Interactive Live JavaScript Playground (Even/Odd, Prime, Fibonacci, Palindrome)
 * - Mobile Navigation Drawer
 * - Stat Counter Animations
 * - Lucide Icon Initialization
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize UI Renderers
  renderLogicalPrograms();
  renderTopics();
  renderConcepts();
  renderTimeline();
  renderSkills();
  renderTechnologies();
  renderCodeShowcase();
  
  // 2. Initialize Interactive Playground
  initPlayground();
  
  // 3. Initialize Event Listeners & Modals
  initModalHandlers();
  initSearchAndFilter();
  initMobileMenu();
  initCopyButtons();
  initStatCounters();

  // 4. Render Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Toast Notification Utility
 */
function showToast(message, type = "success") {
  const toast = document.getElementById("toast-notification");
  const toastMessage = document.getElementById("toast-message");
  const toastIcon = document.getElementById("toast-icon");
  
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  
  if (type === "success") {
    toastIcon.setAttribute("data-lucide", "check-circle-2");
    toastIcon.className = "w-5 h-5 text-emerald-600 mr-2";
  } else {
    toastIcon.setAttribute("data-lucide", "info");
    toastIcon.className = "w-5 h-5 text-brand-indigo mr-2";
  }

  if (window.lucide) window.lucide.createIcons();

  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/**
 * Helper to escape HTML for safe display in code blocks
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Basic syntax highlighting converter for JavaScript code strings
 */
function highlightJsCode(code) {
  const lines = code.split("\n");
  const highlightedLines = lines.map(line => {
    let escaped = escapeHtml(line);
    
    // Comments
    if (escaped.trim().startsWith("//")) {
      return `<span class="syn-comm">${escaped}</span>`;
    }

    // Replace keywords
    escaped = escaped.replace(/\b(let|const|var|if|else|for|while|return|function|class|constructor|new|break)\b/g, '<span class="syn-kw">$1</span>');
    
    // Replace numbers
    escaped = escaped.replace(/\b(\d+)\b/g, '<span class="syn-num">$1</span>');

    // Replace built-in methods / objects
    escaped = escaped.replace(/\b(console\.log|Math\.sqrt|Math\.max|Math\.floor|reduce|map|filter|split|reverse|join|slice|toLowerCase)\b/g, '<span class="syn-fn">$1</span>');

    // Replace strings: "..." or '...' or `...`
    escaped = escaped.replace(/(["'`].*?["'`])/g, '<span class="syn-str">$1</span>');

    return escaped;
  });

  return highlightedLines.join("\n");
}

/**
 * Render 11 Logical Programs
 */
function renderLogicalPrograms(programsToRender = projectData.logicalPrograms) {
  const container = document.getElementById("logical-programs-grid");
  if (!container) return;

  if (programsToRender.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center">
        <div class="inline-flex p-4 rounded-full bg-stone-100 text-stone-400 mb-3">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h4 class="text-base font-semibold text-brand-text">No programs found</h4>
        <p class="text-sm text-brand-muted mt-1">Try clearing your search query or selecting "All".</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Accent color mapping for subtle badges and borders
  const accentClasses = {
    teal: {
      bg: "bg-teal-50",
      text: "text-teal-700",
      border: "border-teal-200",
      accentHover: "accent-border-teal",
      iconBg: "bg-teal-100/70 text-teal-800"
    },
    coral: {
      bg: "bg-orange-50",
      text: "text-coral",
      border: "border-orange-200",
      accentHover: "accent-border-coral",
      iconBg: "bg-orange-100/70 text-orange-800"
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-200",
      accentHover: "accent-border-indigo",
      iconBg: "bg-indigo-100/70 text-indigo-800"
    },
    violet: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      accentHover: "accent-border-violet",
      iconBg: "bg-purple-100/70 text-purple-800"
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-800",
      border: "border-amber-200",
      accentHover: "accent-border-amber",
      iconBg: "bg-amber-100/70 text-amber-800"
    }
  };

  container.innerHTML = programsToRender.map(prog => {
    const styling = accentClasses[prog.accent] || accentClasses.teal;
    
    const conceptTags = prog.concepts.map(c => `
      <span class="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-stone-100/80 text-brand-text border border-brand-border/60">
        ${c}
      </span>
    `).join("");

    return `
      <div class="glass-card ${styling.accentHover} rounded-xl p-5 md:p-6 flex flex-col justify-between group relative overflow-hidden">
        <div>
          <!-- Header: Number and Icon -->
          <div class="flex items-center justify-between mb-4">
            <span class="font-mono text-xs font-bold tracking-wider px-2.5 py-1 rounded bg-stone-100 text-brand-muted border border-brand-border">
              #${prog.number}
            </span>
            <div class="w-10 h-10 rounded-lg ${styling.iconBg} flex items-center justify-center transition-transform group-hover:scale-105">
              <i data-lucide="${prog.icon}" class="w-5 h-5"></i>
            </div>
          </div>

          <!-- Title & Subtitle -->
          <h3 class="text-lg font-bold text-brand-text group-hover:text-brand-indigo transition-colors flex items-center gap-2">
            ${prog.title}
          </h3>
          <p class="text-xs text-brand-muted font-medium mt-0.5">${prog.subtitle}</p>

          <!-- Explanation -->
          <p class="text-sm text-brand-muted mt-3 line-clamp-2 leading-relaxed">
            ${prog.explanation}
          </p>

          <!-- Concepts Tags -->
          <div class="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-brand-border/60">
            ${conceptTags}
          </div>
        </div>

        <!-- Action Button -->
        <div class="mt-5 pt-3 border-t border-brand-border/60 flex items-center justify-between">
          <button 
            type="button" 
            onclick="openProgramModal('${prog.id}')"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-text hover:text-brand-indigo px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200/80 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
          >
            <span>View Logic</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"></i>
          </button>
          <span class="text-[11px] font-mono text-brand-muted">JS Practice</span>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Render 10 Core JavaScript Topics
 */
function renderTopics() {
  const container = document.getElementById("topics-grid");
  if (!container) return;

  const accentClasses = {
    teal: "text-teal-700 bg-teal-50 border-teal-200",
    coral: "text-coral bg-orange-50 border-orange-200",
    indigo: "text-indigo-700 bg-indigo-50 border-indigo-200",
    violet: "text-purple-700 bg-purple-50 border-purple-200",
    amber: "text-amber-800 bg-amber-50 border-amber-200"
  };

  container.innerHTML = projectData.topics.map(topic => {
    const pillClass = accentClasses[topic.accent] || accentClasses.teal;
    const conceptsPills = topic.keyConcepts.map(c => `
      <span class="inline-block px-2 py-0.5 text-[11px] font-medium rounded bg-stone-100 text-brand-text border border-brand-border">
        ${c}
      </span>
    `).join("");

    return `
      <div class="glass-card rounded-xl p-5 md:p-6 flex flex-col justify-between group">
        <div>
          <!-- Header with Number & Icon -->
          <div class="flex items-center justify-between mb-4">
            <span class="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-brand-muted border border-brand-border">
              TOPIC ${topic.number}
            </span>
            <div class="w-9 h-9 rounded-lg ${pillClass} border flex items-center justify-center">
              <i data-lucide="${topic.icon}" class="w-4 h-4"></i>
            </div>
          </div>

          <!-- Name & Subtitle -->
          <h3 class="text-lg font-bold text-brand-text group-hover:text-brand-violet transition-colors">
            ${topic.title}
          </h3>
          <p class="text-xs text-brand-muted font-medium mt-0.5">${topic.subtitle}</p>

          <!-- Description -->
          <p class="text-sm text-brand-muted mt-3 leading-relaxed">
            ${topic.description}
          </p>

          <!-- Key Concepts -->
          <div class="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-brand-border/60">
            ${conceptsPills}
          </div>
        </div>

        <!-- Button -->
        <div class="mt-5 pt-3 border-t border-brand-border/60">
          <button 
            type="button" 
            onclick="openTopicModal('${topic.id}')"
            class="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-brand-text hover:text-brand-violet px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200/80 transition-all cursor-pointer focus:outline-none"
          >
            <span>Learn More & Syntax</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Render Concepts Showcase Badges
 */
function renderConcepts() {
  const container = document.getElementById("concepts-container");
  if (!container) return;

  container.innerHTML = projectData.conceptsList.map((item, index) => {
    return `
      <div 
        class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-brand-border shadow-xs hover:border-brand-indigo hover:text-brand-indigo transition-all cursor-default group"
      >
        <div class="w-1.5 h-1.5 rounded-full bg-brand-indigo/60 group-hover:bg-brand-indigo"></div>
        <span class="text-sm font-semibold text-brand-text group-hover:text-brand-indigo transition-colors">
          ${item.name}
        </span>
      </div>
    `;
  }).join("");
}

/**
 * Render Learning Journey Timeline
 */
function renderTimeline() {
  const container = document.getElementById("journey-timeline");
  if (!container) return;

  container.innerHTML = projectData.learningJourney.map((step, index) => {
    return `
      <div class="relative pl-8 md:pl-0 md:flex md:items-start group">
        <!-- Milestone Circle -->
        <div class="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-brand-indigo flex items-center justify-center font-mono text-xs font-bold text-brand-indigo shadow-sm z-10">
          ${step.step}
        </div>

        <!-- Card Container (Alternating left/right on md screens) -->
        <div class="w-full md:w-[46%] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} mb-8">
          <div class="glass-card rounded-xl p-5 border border-brand-border">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                ${step.badge}
              </span>
              <span class="text-xs font-mono text-brand-muted">Phase ${step.step}</span>
            </div>
            <h4 class="text-base font-bold text-brand-text">${step.title}</h4>
            <p class="text-sm text-brand-muted mt-1.5 leading-relaxed">${step.description}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Render Skills Section Cards
 */
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  const statusBadges = {
    Practiced: "bg-teal-50 text-teal-700 border-teal-200",
    Implemented: "bg-indigo-50 text-indigo-700 border-indigo-200",
    "Hands-on": "bg-purple-50 text-purple-700 border-purple-200"
  };

  container.innerHTML = projectData.skills.map(skill => {
    const badgeStyle = statusBadges[skill.status] || "bg-stone-100 text-stone-700 border-stone-200";

    return `
      <div class="glass-card rounded-xl p-5 border border-brand-border flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-base font-bold text-brand-text">${skill.title}</h4>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeStyle}">
              ${skill.status}
            </span>
          </div>
          <p class="text-sm text-brand-muted leading-relaxed">${skill.description}</p>
        </div>
        <div class="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-muted font-mono">
          <span>Student Demonstration</span>
          <i data-lucide="check" class="w-4 h-4 text-emerald-600"></i>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Render Technologies Cards
 */
function renderTechnologies() {
  const container = document.getElementById("technologies-grid");
  if (!container) return;

  const colorMap = {
    coral: "bg-orange-50 text-coral border-orange-200",
    teal: "bg-teal-50 text-teal-700 border-teal-200",
    amber: "bg-amber-50 text-amber-800 border-amber-200",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
    violet: "bg-purple-50 text-purple-700 border-purple-200"
  };

  const githubSvg = `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

  container.innerHTML = projectData.technologies.map(tech => {
    const styling = colorMap[tech.accent] || "bg-stone-100 text-stone-700 border-stone-200";
    const iconMarkup = tech.icon === "github" ? githubSvg : `<i data-lucide="${tech.icon}" class="w-5 h-5"></i>`;

    return `
      <div class="glass-card rounded-xl p-5 border border-brand-border group">
        <div class="w-10 h-10 rounded-lg ${styling} border flex items-center justify-center mb-3">
          ${iconMarkup}
        </div>
        <div class="flex items-center justify-between">
          <h4 class="text-base font-bold text-brand-text">${tech.name}</h4>
          <span class="text-[11px] font-mono text-brand-muted px-2 py-0.5 rounded bg-stone-100">${tech.category}</span>
        </div>
        <p class="text-xs text-brand-muted mt-2 leading-relaxed">${tech.description}</p>
      </div>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Render Code Showcase Cards
 */
function renderCodeShowcase() {
  const container = document.getElementById("code-showcase-container");
  if (!container) return;

  container.innerHTML = projectData.codeShowcase.map(item => {
    const highlighted = highlightJsCode(item.code);

    return `
      <div class="glass-card rounded-2xl p-6 md:p-7 border border-brand-border">
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 class="text-lg font-bold text-brand-text">${item.title}</h3>
            <p class="text-xs text-brand-muted">${item.subtitle}</p>
          </div>
          <button 
            type="button"
            onclick="copySnippet('${encodeURIComponent(item.code)}', this)"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-brand-text border border-brand-border transition-all cursor-pointer"
          >
            <i data-lucide="copy" class="w-3.5 h-3.5"></i>
            <span>Copy Code</span>
          </button>
        </div>

        <!-- Code Editor Presentation -->
        <div class="code-window mb-4">
          <div class="code-window-header">
            <div class="flex items-center gap-1.5">
              <span class="code-dot code-dot-red"></span>
              <span class="code-dot code-dot-yellow"></span>
              <span class="code-dot code-dot-green"></span>
            </div>
            <span class="text-[11px] font-mono text-slate-400">javascript.js</span>
            <span class="text-[11px] font-mono text-emerald-400">ES6+</span>
          </div>
          <pre class="p-4 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed"><code>${highlighted}</code></pre>
        </div>

        <!-- Explanation & Output Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-stone-50 border border-brand-border">
            <span class="font-bold text-brand-text block mb-1">Concept Insight:</span>
            <p class="text-brand-muted leading-relaxed">${item.explanation}</p>
          </div>
          <div class="p-3.5 rounded-xl bg-stone-50 border border-brand-border">
            <span class="font-bold text-brand-text block mb-1">Console Output:</span>
            <pre class="font-mono text-brand-indigo whitespace-pre-wrap">${escapeHtml(item.output)}</pre>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Search & Filter Handling for Logical Programs
 */
function initSearchAndFilter() {
  const searchInput = document.getElementById("program-search");
  const filterPills = document.querySelectorAll(".filter-pill");

  let currentCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    let filtered = projectData.logicalPrograms.filter(prog => {
      // Text search match
      const queryMatch = 
        prog.title.toLowerCase().includes(searchQuery) ||
        prog.subtitle.toLowerCase().includes(searchQuery) ||
        prog.explanation.toLowerCase().includes(searchQuery) ||
        prog.concepts.some(c => c.toLowerCase().includes(searchQuery));

      if (!queryMatch) return false;

      // Category filter match
      if (currentCategory === "all") return true;
      if (currentCategory === "modulo") return prog.concepts.some(c => c.toLowerCase().includes("modulo") || c.toLowerCase().includes("parity"));
      if (currentCategory === "prime") return prog.title.toLowerCase().includes("prime");
      if (currentCategory === "loops") return prog.concepts.some(c => c.toLowerCase().includes("loop"));
      if (currentCategory === "arrays") return prog.concepts.some(c => c.toLowerCase().includes("array") || c.toLowerCase().includes("reduce"));
      if (currentCategory === "es6") return prog.concepts.some(c => c.toLowerCase().includes("es6") || c.toLowerCase().includes("spread") || c.toLowerCase().includes("template"));

      return true;
    });

    renderLogicalPrograms(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => {
        p.classList.remove("bg-brand-indigo", "text-white", "border-brand-indigo");
        p.classList.add("bg-white", "text-brand-text", "border-brand-border");
      });
      pill.classList.remove("bg-white", "text-brand-text", "border-brand-border");
      pill.classList.add("bg-brand-indigo", "text-white", "border-brand-indigo");

      currentCategory = pill.getAttribute("data-category");
      applyFilters();
    });
  });
}

/**
 * Logical Program Modal
 */
window.openProgramModal = function(programId) {
  const prog = projectData.logicalPrograms.find(p => p.id === programId);
  if (!prog) return;

  const modal = document.getElementById("program-modal");
  const modalNumber = document.getElementById("modal-prog-number");
  const modalTitle = document.getElementById("modal-prog-title");
  const modalSubtitle = document.getElementById("modal-prog-subtitle");
  const modalProblem = document.getElementById("modal-prog-problem");
  const modalInput = document.getElementById("modal-prog-input");
  const modalOutput = document.getElementById("modal-prog-output");
  const modalCode = document.getElementById("modal-prog-code");
  const modalConcepts = document.getElementById("modal-prog-concepts");
  const modalNotes = document.getElementById("modal-prog-notes");
  const copyBtn = document.getElementById("modal-copy-btn");

  modalNumber.textContent = `#${prog.number}`;
  modalTitle.textContent = prog.title;
  modalSubtitle.textContent = prog.subtitle;
  modalProblem.textContent = prog.problem;
  modalInput.textContent = prog.exampleInput;
  modalOutput.textContent = prog.output;
  modalNotes.textContent = prog.notes;

  // Render Highlighted Code
  modalCode.innerHTML = highlightJsCode(prog.code);

  // Setup Copy Button
  copyBtn.onclick = () => copySnippet(prog.code, copyBtn);

  // Render Concept Pills
  modalConcepts.innerHTML = prog.concepts.map(c => `
    <span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-stone-100 text-brand-text border border-brand-border">
      ${c}
    </span>
  `).join("");

  // Show Modal
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  if (window.lucide) window.lucide.createIcons();
};

/**
 * Topic Detail Modal
 */
window.openTopicModal = function(topicId) {
  const topic = projectData.topics.find(t => t.id === topicId);
  if (!topic) return;

  const modal = document.getElementById("topic-modal");
  const modalNumber = document.getElementById("modal-topic-number");
  const modalTitle = document.getElementById("modal-topic-title");
  const modalSubtitle = document.getElementById("modal-topic-subtitle");
  const modalDesc = document.getElementById("modal-topic-desc");
  const modalCode = document.getElementById("modal-topic-code");
  const modalConcepts = document.getElementById("modal-topic-concepts");
  const copyBtn = document.getElementById("modal-topic-copy-btn");

  modalNumber.textContent = `TOPIC #${topic.number}`;
  modalTitle.textContent = topic.title;
  modalSubtitle.textContent = topic.subtitle;
  modalDesc.textContent = topic.deepDive;
  modalCode.innerHTML = highlightJsCode(topic.codeSnippet);

  copyBtn.onclick = () => copySnippet(topic.codeSnippet, copyBtn);

  modalConcepts.innerHTML = topic.keyConcepts.map(c => `
    <span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-stone-100 text-brand-text border border-brand-border">
      ${c}
    </span>
  `).join("");

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  if (window.lucide) window.lucide.createIcons();
};

/**
 * Modal Close and Backdrop Handlers
 */
function initModalHandlers() {
  const progModal = document.getElementById("program-modal");
  const topicModal = document.getElementById("topic-modal");

  const closeProgModal = () => {
    if (progModal) progModal.classList.add("hidden");
    document.body.style.overflow = "auto";
  };

  const closeTopicModal = () => {
    if (topicModal) topicModal.classList.add("hidden");
    document.body.style.overflow = "auto";
  };

  document.querySelectorAll(".close-program-modal").forEach(btn => {
    btn.addEventListener("click", closeProgModal);
  });

  document.querySelectorAll(".close-topic-modal").forEach(btn => {
    btn.addEventListener("click", closeTopicModal);
  });

  // Close on Backdrop Click
  window.addEventListener("click", (e) => {
    if (e.target === progModal) closeProgModal();
    if (e.target === topicModal) closeTopicModal();
  });

  // Close on Esc Key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProgModal();
      closeTopicModal();
    }
  });
}

/**
 * Copy to Clipboard with Toast Notification
 */
window.copySnippet = function(textOrEncoded, buttonEl) {
  let text = textOrEncoded;
  try {
    text = decodeURIComponent(textOrEncoded);
  } catch (e) {
    // Already decoded
  }

  navigator.clipboard.writeText(text).then(() => {
    showToast("Code copied to clipboard!", "success");
    if (buttonEl) {
      const originalText = buttonEl.innerHTML;
      buttonEl.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Copied!`;
      if (window.lucide) window.lucide.createIcons();
      setTimeout(() => {
        buttonEl.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();
      }, 1800);
    }
  }).catch(() => {
    showToast("Failed to copy snippet", "error");
  });
};

function initCopyButtons() {
  // Global hook if needed
}

/**
 * Interactive JavaScript Playground
 * Implements:
 * 1. Even / Odd Checker (Primary required prompt item)
 * 2. Prime Checker
 * 3. Fibonacci Sequence Generator
 * 4. Palindrome Checker
 */
function initPlayground() {
  const tabs = document.querySelectorAll(".playground-tab");
  const runBtn = document.getElementById("playground-run-btn");
  const numInput = document.getElementById("playground-input");
  const resultDisplay = document.getElementById("playground-result");
  const explanationDisplay = document.getElementById("playground-explanation");
  const executionBadge = document.getElementById("playground-time");
  const inputLabel = document.getElementById("playground-input-label");

  let activeMode = "even-odd";

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("bg-brand-indigo", "text-white");
        t.classList.add("bg-stone-100", "text-brand-text");
      });
      tab.classList.remove("bg-stone-100", "text-brand-text");
      tab.classList.add("bg-brand-indigo", "text-white");

      activeMode = tab.getAttribute("data-mode");

      // Adjust input label and placeholder according to active mode
      if (activeMode === "even-odd") {
        inputLabel.textContent = "Enter an Integer:";
        numInput.type = "number";
        numInput.value = "10";
        numInput.placeholder = "e.g. 10, 27";
      } else if (activeMode === "prime") {
        inputLabel.textContent = "Enter Number to Test for Primality:";
        numInput.type = "number";
        numInput.value = "13";
        numInput.placeholder = "e.g. 13, 29";
      } else if (activeMode === "fibonacci") {
        inputLabel.textContent = "Number of Fibonacci Terms (N):";
        numInput.type = "number";
        numInput.value = "8";
        numInput.placeholder = "e.g. 8 (between 1 and 25)";
      } else if (activeMode === "palindrome") {
        inputLabel.textContent = "Enter Word or Number:";
        numInput.type = "text";
        numInput.value = "madam";
        numInput.placeholder = "e.g. racecar, 1221";
      }

      executeLogic();
    });
  });

  function executeLogic() {
    const rawVal = numInput.value.trim();
    if (!rawVal && rawVal !== "0") {
      resultDisplay.textContent = "Please enter a value.";
      resultDisplay.className = "text-sm font-semibold text-amber-600";
      explanationDisplay.textContent = "Waiting for valid user input.";
      return;
    }

    const startTime = performance.now();

    if (activeMode === "even-odd") {
      const n = parseInt(rawVal, 10);
      if (isNaN(n)) {
        resultDisplay.textContent = "Invalid Number";
        resultDisplay.className = "text-sm font-semibold text-rose-600";
        explanationDisplay.textContent = "Please provide an integer value.";
        return;
      }

      const isEven = n % 2 === 0;
      if (isEven) {
        resultDisplay.textContent = `${n} is EVEN`;
        resultDisplay.className = "text-base font-bold text-teal-700";
        explanationDisplay.textContent = `Because ${n} % 2 === 0 (remainder is 0), it is classified as an Even number.`;
      } else {
        resultDisplay.textContent = `${n} is ODD`;
        resultDisplay.className = "text-base font-bold text-coral";
        explanationDisplay.textContent = `Because ${n} % 2 !== 0 (remainder is ${Math.abs(n % 2)}), it is classified as an Odd number.`;
      }
    } else if (activeMode === "prime") {
      const n = parseInt(rawVal, 10);
      if (isNaN(n) || n <= 1) {
        resultDisplay.textContent = `${rawVal} is NOT Prime`;
        resultDisplay.className = "text-base font-bold text-coral";
        explanationDisplay.textContent = "Prime numbers must be strictly integers greater than 1.";
      } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          resultDisplay.textContent = `${n} is a PRIME Number`;
          resultDisplay.className = "text-base font-bold text-teal-700";
          explanationDisplay.textContent = `No integer factors exist between 2 and √${n} (${Math.sqrt(n).toFixed(2)}). Exactly two divisors: 1 and ${n}.`;
        } else {
          resultDisplay.textContent = `${n} is COMPOSITE (Not Prime)`;
          resultDisplay.className = "text-base font-bold text-amber-700";
          explanationDisplay.textContent = `${n} has factors other than 1 and itself.`;
        }
      }
    } else if (activeMode === "fibonacci") {
      const count = parseInt(rawVal, 10);
      if (isNaN(count) || count < 1) {
        resultDisplay.textContent = "Please enter count >= 1";
        resultDisplay.className = "text-sm font-semibold text-rose-600";
        explanationDisplay.textContent = "Count must be positive.";
        return;
      }
      const safeCount = Math.min(count, 30);
      const fib = [0, 1];
      for (let i = 2; i < safeCount; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      const resultArr = fib.slice(0, safeCount);
      resultDisplay.textContent = resultArr.join(", ");
      resultDisplay.className = "text-sm font-mono font-bold text-indigo-700 break-words";
      explanationDisplay.textContent = `Generated first ${safeCount} terms using additive recurrence: F(n) = F(n-1) + F(n-2).`;
    } else if (activeMode === "palindrome") {
      const clean = rawVal.toLowerCase().replace(/[^a-z0-9]/g, "");
      const reversed = clean.split("").reverse().join("");
      const isPal = clean.length > 0 && clean === reversed;

      if (isPal) {
        resultDisplay.textContent = `"${rawVal}" is a PALINDROME`;
        resultDisplay.className = "text-base font-bold text-teal-700";
        explanationDisplay.textContent = `Forward string matches reversed string: "${clean}" === "${reversed}".`;
      } else {
        resultDisplay.textContent = `"${rawVal}" is NOT a Palindrome`;
        resultDisplay.className = "text-base font-bold text-coral";
        explanationDisplay.textContent = `Forward "${clean}" differs from reversed "${reversed}".`;
      }
    }

    const elapsed = (performance.now() - startTime).toFixed(2);
    if (executionBadge) {
      executionBadge.textContent = `${elapsed} ms`;
    }
  }

  if (runBtn) {
    runBtn.addEventListener("click", executeLogic);
  }

  if (numInput) {
    numInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") executeLogic();
    });
  }

  // Run initial calculation
  executeLogic();
}

/**
 * Mobile Navigation Menu Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menuDrawer = document.getElementById("mobile-menu-drawer");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menuDrawer) return;

  toggleBtn.addEventListener("click", () => {
    menuDrawer.classList.toggle("hidden");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuDrawer.classList.add("hidden");
    });
  });
}

/**
 * Statistics Counter Animation
 */
function initStatCounters() {
  const statElements = document.querySelectorAll(".stat-counter");
  if (statElements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        let count = 0;
        const speed = target > 15 ? 40 : 80;

        const update = () => {
          count++;
          el.textContent = count;
          if (count < target) {
            setTimeout(update, speed);
          } else {
            el.textContent = target + (el.getAttribute("data-suffix") || "");
          }
        };
        update();
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(el => observer.observe(el));
}
