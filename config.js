/* Deployment configuration. Automatically uses local API on localhost, and standalone cloud PWA mode on mobile/production. */
window.__BROKERAI_CONFIG__ = {
  apiBaseUrl: (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
    ? 'http://localhost:8081/api'
    : ''
};
