/* =========================================================
   SUNSHINE TECHNO SYSTEM — COOKIE CONSENT ENGINE
   ========================================================= */

(function () {
  const STORAGE_KEY = 'sunshine_cookie_consent';
  const CURRENT_VERSION = 1;

  // Default consent state structure
  const defaultConsent = {
    version: CURRENT_VERSION,
    essential: true,
    analytics: false,
    preferences: false,
    marketing: false,
    timestamp: null,
  };

  // Get consent from localStorage
  function getConsent() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.version === CURRENT_VERSION) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Cookie consent localStorage read error:', e);
    }
    return null;
  }

  // Save consent to localStorage
  function saveConsent(state) {
    try {
      const payload = {
        version: CURRENT_VERSION,
        essential: true,
        analytics: Boolean(state.analytics),
        preferences: Boolean(state.preferences),
        marketing: Boolean(state.marketing),
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      applyConsentHooks(payload);
      return payload;
    } catch (e) {
      console.warn('Cookie consent localStorage write error:', e);
    }
  }

  // Public helper: check if specific category has consent
  window.hasConsent = function (category) {
    if (category === 'essential') return true;
    const consent = getConsent();
    return Boolean(consent && consent[category]);
  };

  // Consent Hooks (Gating real integrations)
  function applyConsentHooks(consent) {
    if (!consent) return;

    if (consent.analytics) {
      if (typeof window.loadAnalytics === 'function') {
        window.loadAnalytics();
      }
    }

    if (consent.marketing) {
      if (typeof window.loadMarketing === 'function') {
        window.loadMarketing();
      }
    }

    if (consent.preferences) {
      if (typeof window.loadPreferences === 'function') {
        window.loadPreferences();
      }
    }
  }

  // DOM Elements Injection
  function renderConsentUI() {
    if (document.getElementById('sunshine-cookie-banner')) return;

    // Cookie Banner HTML
    const bannerHTML = `
      <div class="cookie-banner-wrap" id="sunshine-cookie-banner" role="region" aria-label="Cookie Privacy Banner">
        <div class="cookie-banner-inner">
          <div class="cookie-banner-content">
            <div class="cookie-icon-badge">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
              </svg>
            </div>
            <div class="cookie-banner-text">
              <h3>Your Privacy Matters</h3>
              <p>We use cookies to keep our website working properly, understand how visitors use our site, and improve your experience.</p>
            </div>
          </div>
          <div class="cookie-banner-actions">
            <button type="button" class="btn-cookie-accept" id="btn-cookie-accept-all">Accept All</button>
            <button type="button" class="btn-cookie-reject" id="btn-cookie-reject-optional">Reject Non-Essential</button>
            <button type="button" class="btn-cookie-manage" id="btn-cookie-manage-prefs">Manage Preferences</button>
          </div>
        </div>
      </div>

      <!-- Preferences Modal -->
      <div class="cookie-modal-backdrop" id="sunshine-cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-modal-heading">
        <div class="cookie-modal-card">
          <div class="cookie-modal-header">
            <div class="cookie-modal-title">
              <h2 id="cookie-modal-heading">Cookie Preferences</h2>
              <p>Choose which optional cookies you allow. Essential cookies are always active because they are required for the website to function.</p>
            </div>
            <button type="button" class="cookie-modal-close" id="btn-cookie-modal-close" aria-label="Close Cookie Preferences">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:1.25rem;height:1.25rem"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <div class="cookie-categories-list">
            <!-- Essential -->
            <div class="cookie-category-item">
              <div class="cookie-category-info">
                <h4>Essential Cookies</h4>
                <p>Required for security, page navigation, form submissions and basic website functionality. Always enabled.</p>
              </div>
              <div class="cookie-toggle-wrap">
                <span class="cookie-always-active">Always Active</span>
              </div>
            </div>

            <!-- Analytics -->
            <div class="cookie-category-item">
              <div class="cookie-category-info">
                <h4>Analytics Cookies</h4>
                <p>Helps us analyze aggregate visitor traffic and performance to improve website usability.</p>
              </div>
              <div class="cookie-toggle-wrap">
                <label class="cookie-switch" aria-label="Toggle Analytics Cookies">
                  <input type="checkbox" id="toggle-cookie-analytics" />
                  <span class="cookie-slider"></span>
                </label>
              </div>
            </div>

            <!-- Preferences -->
            <div class="cookie-category-item">
              <div class="cookie-category-info">
                <h4>Preference Cookies</h4>
                <p>Remembers optional UI preferences, custom batch view states, and user selections.</p>
              </div>
              <div class="cookie-toggle-wrap">
                <label class="cookie-switch" aria-label="Toggle Preference Cookies">
                  <input type="checkbox" id="toggle-cookie-preferences" />
                  <span class="cookie-slider"></span>
                </label>
              </div>
            </div>

            <!-- Marketing -->
            <div class="cookie-category-item">
              <div class="cookie-category-info">
                <h4>Marketing Cookies</h4>
                <p>Used for future campaign measurement and marketing channel performance tracking.</p>
              </div>
              <div class="cookie-toggle-wrap">
                <label class="cookie-switch" aria-label="Toggle Marketing Cookies">
                  <input type="checkbox" id="toggle-cookie-marketing" />
                  <span class="cookie-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="cookie-modal-footer">
            <button type="button" class="btn-cookie-reject" id="btn-cookie-modal-reject">Reject Optional</button>
            <button type="button" class="btn-cookie-accept" id="btn-cookie-save-prefs">Save Preferences</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', bannerHTML);
    bindConsentEvents();
  }

  function bindConsentEvents() {
    const banner = document.getElementById('sunshine-cookie-banner');
    const modal = document.getElementById('sunshine-cookie-modal');

    // Accept All Button
    document
      .getElementById('btn-cookie-accept-all')
      ?.addEventListener('click', () => {
        saveConsent({ analytics: true, preferences: true, marketing: true });
        hideBanner();
        hideModal();
      });

    // Reject Non-Essential Button
    document
      .getElementById('btn-cookie-reject-optional')
      ?.addEventListener('click', () => {
        saveConsent({ analytics: false, preferences: false, marketing: false });
        hideBanner();
        hideModal();
      });

    // Modal Reject Button
    document
      .getElementById('btn-cookie-modal-reject')
      ?.addEventListener('click', () => {
        saveConsent({ analytics: false, preferences: false, marketing: false });
        hideBanner();
        hideModal();
      });

    // Manage Preferences Button
    document
      .getElementById('btn-cookie-manage-prefs')
      ?.addEventListener('click', () => {
        openModal();
      });

    // Modal Save Preferences Button
    document
      .getElementById('btn-cookie-save-prefs')
      ?.addEventListener('click', () => {
        const analyticsVal = document.getElementById(
          'toggle-cookie-analytics',
        ).checked;
        const preferencesVal = document.getElementById(
          'toggle-cookie-preferences',
        ).checked;
        const marketingVal = document.getElementById(
          'toggle-cookie-marketing',
        ).checked;

        saveConsent({
          analytics: analyticsVal,
          preferences: preferencesVal,
          marketing: marketingVal,
        });

        hideBanner();
        hideModal();
      });

    // Modal Close Button & Backdrop Click
    document
      .getElementById('btn-cookie-modal-close')
      ?.addEventListener('click', hideModal);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) hideModal();
    });

    // Escape Key Listener
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal?.classList.contains('open')) {
        hideModal();
      }
    });
  }

  function showBanner() {
    const banner = document.getElementById('sunshine-cookie-banner');
    if (banner) {
      setTimeout(() => banner.classList.add('show'), 300);
    }
  }

  function hideBanner() {
    const banner = document.getElementById('sunshine-cookie-banner');
    if (banner) {
      banner.classList.remove('show');
    }
  }

  function openModal() {
    const modal = document.getElementById('sunshine-cookie-modal');
    const current = getConsent() || defaultConsent;

    // Populate toggles with current saved or default values
    const toggleAnalytics = document.getElementById('toggle-cookie-analytics');
    const togglePreferences = document.getElementById(
      'toggle-cookie-preferences',
    );
    const toggleMarketing = document.getElementById('toggle-cookie-marketing');

    if (toggleAnalytics) toggleAnalytics.checked = Boolean(current.analytics);
    if (togglePreferences)
      togglePreferences.checked = Boolean(current.preferences);
    if (toggleMarketing) toggleMarketing.checked = Boolean(current.marketing);

    if (modal) {
      modal.classList.add('open');
    }
  }

  function hideModal() {
    const modal = document.getElementById('sunshine-cookie-modal');
    if (modal) {
      modal.classList.remove('open');
    }
  }

  // Global function to allow footer link to open preferences modal anytime
  window.openCookiePreferences = function (e) {
    if (e) e.preventDefault();
    openModal();
  };

  // Initialization on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      renderConsentUI();
      const currentConsent = getConsent();
      if (!currentConsent) {
        showBanner();
      } else {
        applyConsentHooks(currentConsent);
      }
    });
  } else {
    renderConsentUI();
    const currentConsent = getConsent();
    if (!currentConsent) {
      showBanner();
    } else {
      applyConsentHooks(currentConsent);
    }
  }
})();
