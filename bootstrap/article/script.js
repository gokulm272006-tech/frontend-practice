/**
 * Rust Technology Article - Interactive Features & Utilities
 * Features: Scrollspy TOC, Reading Progress, Copy Code, Ownership Demo, Quiz, Roadmap Tracker
 */

document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initScrollSpy();
  initCopyCodeButtons();
  initOwnershipSimulator();
  initRoadmapChecklist();
  initQuiz();
  initCategoryFilters();
  initBackToTop();
  initMobileNav();
});

/* ==========================================================================
   1. Reading Progress Bar
   ========================================================================== */
function initProgressBar() {
  const progressBar = document.getElementById('reading-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

/* ==========================================================================
   2. ScrollSpy for Table of Contents
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('article section[id]');
  const navLinks = document.querySelectorAll('.toc-item a');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const parentItem = link.closest('.toc-item');
          if (link.getAttribute('href') === `#${id}`) {
            parentItem.classList.add('active');
            // Auto scroll sidebar TOC if needed
            parentItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          } else {
            parentItem.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   3. Copy Code Snippets with Toast Notification
   ========================================================================== */
function initCopyCodeButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const codeWrapper = btn.closest('.code-block-wrapper');
      const codeElement = codeWrapper.querySelector('code');
      if (!codeElement) return;

      const codeText = codeElement.innerText;

      try {
        await navigator.clipboard.writeText(codeText);
        
        // Button state
        const originalText = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
        
        showToast('Code copied to clipboard!');

        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        showToast('Failed to copy code');
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/* ==========================================================================
   4. Interactive Ownership & Borrowing Visualizer
   ========================================================================== */
function initOwnershipSimulator() {
  const btnMove = document.getElementById('demo-move-btn');
  const btnBorrow = document.getElementById('demo-borrow-btn');
  const btnClone = document.getElementById('demo-clone-btn');
  const btnReset = document.getElementById('demo-reset-btn');
  const logOutput = document.getElementById('ownership-log');
  const cardS1 = document.getElementById('var-s1');
  const cardS2 = document.getElementById('var-s2');

  if (!btnMove || !cardS1 || !cardS2) return;

  function resetState() {
    cardS1.className = 'variable-card active-owner';
    cardS2.className = 'variable-card';
    cardS1.querySelector('.var-status').textContent = 'Owner of "hello" (Valid)';
    cardS2.querySelector('.var-status').textContent = 'Uninitialized';
    cardS1.querySelector('.var-value').textContent = 'String::from("hello")';
    cardS2.querySelector('.var-value').textContent = '---';
    if (logOutput) {
      logOutput.innerHTML = `<code>let s1 = String::from("hello");</code><br><span style="color:#94a3b8">// Memory allocated on Heap. s1 is the sole owner.</span>`;
    }
  }

  btnMove.addEventListener('click', () => {
    cardS1.className = 'variable-card invalidated';
    cardS2.className = 'variable-card active-owner';
    cardS1.querySelector('.var-status').textContent = 'Moved & Inactive (Invalid)';
    cardS2.querySelector('.var-status').textContent = 'New Sole Owner of "hello"';
    cardS2.querySelector('.var-value').textContent = 's1 (Data Moved)';
    if (logOutput) {
      logOutput.innerHTML = `<code>let s2 = s1; // Ownership transferred to s2</code><br><span style="color:#ef4444">// Rust automatically invalidates s1. No double-free possible!</span>`;
    }
  });

  btnBorrow.addEventListener('click', () => {
    cardS1.className = 'variable-card active-owner';
    cardS2.className = 'variable-card active-owner';
    cardS1.querySelector('.var-status').textContent = 'Original Owner';
    cardS2.querySelector('.var-status').textContent = 'Immutable Borrow (&s1)';
    cardS2.querySelector('.var-value').textContent = '&s1 (Reference)';
    if (logOutput) {
      logOutput.innerHTML = `<code>let s2 = &s1; // Shared immutable reference</code><br><span style="color:#38bdf8">// Both can read. Data is not duplicated. Safe & fast!</span>`;
    }
  });

  btnClone.addEventListener('click', () => {
    cardS1.className = 'variable-card active-owner';
    cardS2.className = 'variable-card active-owner';
    cardS1.querySelector('.var-status').textContent = 'Owner of Heap Block #1';
    cardS2.querySelector('.var-status').textContent = 'Owner of Heap Block #2 (Copy)';
    cardS2.querySelector('.var-value').textContent = 's1.clone()';
    if (logOutput) {
      logOutput.innerHTML = `<code>let s2 = s1.clone(); // Deep copy on Heap</code><br><span style="color:#10b981">// Explicit heap duplication. Both remain independent owners.</span>`;
    }
  });

  if (btnReset) {
    btnReset.addEventListener('click', resetState);
  }
}

/* ==========================================================================
   5. Interactive Learning Roadmap Checklist
   ========================================================================== */
function initRoadmapChecklist() {
  const roadmapItems = document.querySelectorAll('.roadmap-item');
  const progressFill = document.querySelector('.roadmap-progress-fill');
  const progressText = document.getElementById('roadmap-progress-text');

  if (!roadmapItems.length) return;

  function updateRoadmapProgress() {
    const total = roadmapItems.length;
    const completed = document.querySelectorAll('.roadmap-item.completed').length;
    const percentage = Math.round((completed / total) * 100);

    if (progressFill) {
      progressFill.style.width = `${percentage}%`;
    }
    if (progressText) {
      progressText.textContent = `${completed}/${total} Completed (${percentage}%)`;
    }
  }

  roadmapItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      item.classList.toggle('completed');
      const checkbox = item.querySelector('.roadmap-checkbox');
      if (item.classList.contains('completed')) {
        checkbox.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      } else {
        checkbox.innerHTML = '';
      }
      updateRoadmapProgress();
    });
  });

  updateRoadmapProgress();
}

/* ==========================================================================
   6. Interactive Beginner Knowledge Quiz
   ========================================================================== */
function initQuiz() {
  const options = document.querySelectorAll('.quiz-option');

  options.forEach((option) => {
    option.addEventListener('click', function () {
      const card = this.closest('.quiz-question-card');
      const allSiblings = card.querySelectorAll('.quiz-option');
      const isCorrect = this.getAttribute('data-correct') === 'true';
      const feedback = card.querySelector('.quiz-feedback');

      // Disable further clicks on this question
      allSiblings.forEach((btn) => {
        btn.style.pointerEvents = 'none';
        if (btn.getAttribute('data-correct') === 'true') {
          btn.classList.add('correct');
        }
      });

      if (isCorrect) {
        this.classList.add('correct');
        if (feedback) {
          feedback.style.background = 'rgba(16, 185, 129, 0.15)';
          feedback.style.color = '#34d399';
          feedback.style.border = '1px solid rgba(16, 185, 129, 0.3)';
          feedback.innerHTML = `<strong>Correct!</strong> ${feedback.getAttribute('data-explanation') || ''}`;
          feedback.classList.add('show');
        }
      } else {
        this.classList.add('incorrect');
        if (feedback) {
          feedback.style.background = 'rgba(239, 68, 68, 0.15)';
          feedback.style.color = '#f87171';
          feedback.style.border = '1px solid rgba(239, 68, 68, 0.3)';
          feedback.innerHTML = `<strong>Incorrect.</strong> ${feedback.getAttribute('data-explanation') || ''}`;
          feedback.classList.add('show');
        }
      }
    });
  });
}

/* ==========================================================================
   7. Filterable Category Tabs (Applications Section)
   ========================================================================== */
function initCategoryFilters() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.app-card');

  if (!tabButtons.length || !cards.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   8. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   9. Mobile Menu Navigation
   ========================================================================== */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggle || !navMenu) return;

  toggle.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'flex';
    navMenu.style.display = isOpen ? 'none' : 'flex';
    if (!isOpen) {
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '72px';
      navMenu.style.left = '0';
      navMenu.style.right = '0';
      navMenu.style.background = '#0a0d14';
      navMenu.style.padding = '1.5rem';
      navMenu.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    }
  });
}
