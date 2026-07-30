// ============================================================
// SHARED COMPONENTS — Header, Footer, Floating Actions, Toast
// Used by all pages via script tag
// ============================================================

// --- SVG Icons helper ---
const icons = {
  menu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.338c0-1.243.987-2.25 2.206-2.25h.672c.628 0 1.193.377 1.449.96l1.07 2.462a1.574 1.574 0 01-.354 1.812l-.654.583a13.32 13.32 0 005.514 5.514l.583-.654a1.574 1.574 0 011.812-.354l2.462 1.07c.583.257.96.821.96 1.449v.672A2.228 2.228 0 0117.663 21.75C9.135 21.75 2.25 14.865 2.25 6.338z"/></svg>`,
  messageCircle: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"/></svg>`,
  navigation: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>`,
  messageSquare: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/></svg>`,
  loader: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="animation:spin .7s linear infinite"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>`,
};

// Lucide icon map for course cards (icon name → SVG path)
const courseIconSVGs = {
  'code-2': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>`,
  'coffee': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 2v2m0 0a4 4 0 004 4h4a4 4 0 004-4V2M6 4H4a2 2 0 00-2 2v1a7 7 0 007 7h6a7 7 0 007-7V6a2 2 0 00-2-2h-2M8 21h8m-4-4v4"/></svg>`,
  'bug': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  'shield-check': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>`,
  'database': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/></svg>`,
  'landmark': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"/></svg>`,
  'package': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>`,
  'terminal': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/></svg>`,
  'server': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v.75a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-.75m19.5 0A2.25 2.25 0 0019.5 15h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.75A2.25 2.25 0 0119.5 20.25h-15A2.25 2.25 0 012.25 18v-.75m19.5-9A2.25 2.25 0 0019.5 6.75h-15A2.25 2.25 0 002.25 9m19.5 0v.75A2.25 2.25 0 0119.5 12h-15A2.25 2.25 0 012.25 9.75V9m19.5 0A2.25 2.25 0 0019.5 6.75h-15A2.25 2.25 0 002.25 9"/></svg>`,
  'bar-chart-3': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>`,
  'brain': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>`,
  'sparkles': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/></svg>`,
  'cloud': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/></svg>`,
  'atom': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 12c1.5 0 3-1.5 3-3S13.5 6 12 6 9 7.5 9 9s1.5 3 3 3zm0 0c-3.5 2-6 5-6 7m6-7c3.5 2 6 5 6 7M6.5 6.5C8 5 10 4 12 4s4 1 5.5 2.5M6.5 17.5C8 19 10 20 12 20s4-1 5.5-2.5M4 12h.01M20 12h.01"/></svg>`,
  'layers': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"/></svg>`,
  'file-code': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/></svg>`,
  'file-code-2': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/></svg>`,
  'hash': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h13.5m-13.5 7.5h13.5M8.25 3l-2.25 18M17.25 3l-2.25 18"/></svg>`,
  'bot': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>`,
  'gem': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>`,
  'monitor-smartphone': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/></svg>`,
  'smartphone': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>`,
  'test-tube': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-6.3-11.896c.25.023.5.05.75.082M19.8 15l-2.7-2.7m2.7 2.7l-2.7 2.7M5 14.5L7.7 17.2M5 14.5l2.7 2.7M7.7 17.2L9.75 19.25M7.7 17.2a1.5 1.5 0 012.05.05L9.75 17.2"/></svg>`,
  'gauge': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  'activity': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12h4l3-9 4 18 3-9h4"/></svg>`,
  'calculator': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z"/></svg>`,
  'file-text': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>`,
  'network': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg>`,
  'code': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>`,
};

// Feature icon map
const featureIconSVGs = {
  users: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>`,
  clipboardCheck: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"/></svg>`,
  rocket: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  laptop: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/></svg>`,
  messageCircle: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>`,
  graduationCap: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>`,
  bookOpen: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/></svg>`,
};

// ============================================================
// RENDER HEADER
// ============================================================
function renderHeader() {
  const currentPage = getCurrentPage();
  const nav = [
    { href: 'index.html', label: 'Home', page: 'home' },
    { href: 'about.html', label: 'About', page: 'about' },
    { href: 'courses.html', label: 'Courses', page: 'courses' },
    { href: 'training.html', label: 'Training', page: 'training' },
    { href: 'why-us.html', label: 'Why Us', page: 'why-us' },
    { href: 'reviews.html', label: 'Reviews', page: 'reviews' },
    { href: 'faq.html', label: 'FAQ', page: 'faq' },
    { href: 'contact.html', label: 'Contact', page: 'contact' },
  ];

  const navLinks = nav.map(n => `
    <a href="${n.href}" class="nav-link ${currentPage === n.page ? 'active' : ''}">${n.label}</a>
  `).join('');

  const mobileLinks = nav.map(n => `
    <a href="${n.href}" class="mobile-nav-link ${currentPage === n.page ? 'active' : ''}">${n.label}</a>
  `).join('');

  const html = `
    <header class="site-header" id="site-header">
      <div class="container-page header-inner">
        <a href="index.html" class="logo" aria-label="Sunshine Techno System Home">
          <img src="assets/logo.png" alt="Sunshine Techno System Logo" class="logo-img" />
        </a>

        <nav class="desktop-nav" aria-label="Main navigation">${navLinks}</nav>

        <div class="header-cta">
          <a href="tel:${siteConfig.phone}" class="btn btn-ghost btn-sm">
            ${icons.phone} Call Now
          </a>
          <a href="contact.html" class="btn btn-sunshine btn-sm">Enquire Now</a>
        </div>

        <button class="hamburger" id="hamburger-btn" aria-label="Open menu" aria-expanded="false">
          <span id="hamburger-icon">${icons.menu}</span>
        </button>
      </div>

      <div class="mobile-menu" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
        <div class="container-page">
          <nav class="mobile-nav">${mobileLinks}</nav>
          <div class="mobile-cta-row" style="padding-bottom:.75rem">
            <a href="tel:${siteConfig.phone}" class="btn btn-outline btn-sm">${icons.phone} Call</a>
            <a href="contact.html" class="btn btn-sunshine btn-sm">Enquire</a>
          </div>
        </div>
      </div>
    </header>
  `;

  document.getElementById('header-placeholder').innerHTML = html;

  // Scroll effect
  const header = document.getElementById('site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Hamburger toggle
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  const iconEl = document.getElementById('hamburger-icon');
  let open = false;
  btn.addEventListener('click', () => {
    open = !open;
    menu.classList.toggle('open', open);
    iconEl.innerHTML = open ? icons.x : icons.menu;
    btn.setAttribute('aria-expanded', open);
  });

  // Close menu on nav link click
  menu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      open = false;
      menu.classList.remove('open');
      iconEl.innerHTML = icons.menu;
      btn.setAttribute('aria-expanded', false);
    });
  });
}

// ============================================================
// RENDER FOOTER
// ============================================================
function renderFooter() {
  const year = new Date().getFullYear();
  const html = `
    <footer class="site-footer">
      <div class="container-page footer-grid">

        <div>
          <a href="index.html" class="footer-logo" aria-label="Sunshine Techno System Home">
            <img src="assets/logo.png" alt="Sunshine Techno System Logo" class="footer-logo-img" />
          </a>
          <p class="footer-desc">
            Practical IT &amp; software training in Hyderabad. Programming, testing, SAP, data &amp; cloud —
            classroom and live online.
          </p>
          <div class="footer-socials">
            ${siteConfig.social.facebook && siteConfig.social.facebook !== '#' ? `<a href="${siteConfig.social.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-btn">${icons.facebook}</a>` : ''}
            ${siteConfig.social.youtube && siteConfig.social.youtube !== '#' ? `<a href="${siteConfig.social.youtube}" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="social-btn">${icons.youtube}</a>` : ''}
            ${siteConfig.social.twitter && siteConfig.social.twitter !== '#' ? `<a href="${siteConfig.social.twitter}" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" class="social-btn">${icons.twitter}</a>` : ''}
            ${siteConfig.social.instagram && siteConfig.social.instagram !== '#' ? `<a href="${siteConfig.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-btn">${icons.instagram}</a>` : ''}
            ${siteConfig.social.linkedin && siteConfig.social.linkedin !== '#' ? `<a href="${siteConfig.social.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-btn">${icons.linkedin}</a>` : ''}
          </div>
        </div>

        <div>
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html" class="footer-link">Home</a></li>
            <li><a href="about.html" class="footer-link">About</a></li>
            <li><a href="courses.html" class="footer-link">Courses</a></li>
            <li><a href="reviews.html" class="footer-link">Reviews</a></li>
            <li><a href="contact.html" class="footer-link">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Popular Courses</h4>
          <ul class="footer-links">
            <li><a href="courses.html" class="footer-link">Java</a></li>
            <li><a href="courses.html" class="footer-link">Python</a></li>
            <li><a href="courses.html" class="footer-link">Selenium</a></li>
            <li><a href="courses.html" class="footer-link">SAP</a></li>
            <li><a href="courses.html" class="footer-link">Data Science</a></li>
            <li><a href="courses.html" class="footer-link">AWS</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Contact</h4>
          <ul class="footer-contact-list">
            <li class="footer-contact-item">
              ${icons.mapPin}
              <span>
                ${siteConfig.address.line1},<br>
                ${siteConfig.address.line2},<br>
                ${siteConfig.address.city} — ${siteConfig.address.pin}
              </span>
            </li>
            <li class="footer-contact-item">
              ${icons.phone}
              <a href="tel:${siteConfig.phone}">${siteConfig.phoneDisplay}</a>
            </li>
            <li class="footer-contact-item">
              ${icons.mail}
              <a href="mailto:${siteConfig.email}" style="word-break:break-all">${siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container-page footer-bottom-inner">
          <p>© ${year} Sunshine Techno System. All Rights Reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `;
  document.getElementById('footer-placeholder').innerHTML = html;
}

// ============================================================
// RENDER FLOATING ACTIONS
// ============================================================
function renderFloatingActions() {
  const waNum = siteConfig.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${waNum}?text=${encodeURIComponent("Hi Sunshine Techno System, I'd like to enquire about a course.")}`;
  const html = `
    <div class="float-desktop">
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="float-btn float-wa">
        ${icons.messageCircle}
      </a>
      <a href="tel:${siteConfig.phone}" aria-label="Call now" class="float-btn float-call">
        ${icons.phone}
      </a>
    </div>
    <div class="mobile-bar">
      <a href="tel:${siteConfig.phone}" class="mobile-bar-btn">${icons.phone} Call</a>
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="mobile-bar-btn wa">${icons.messageCircle} WhatsApp</a>
      <a href="contact.html" class="mobile-bar-btn enquire">Enquire</a>
    </div>
  `;
  document.getElementById('floating-placeholder').innerHTML = html;
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `${type === 'success' ? icons.checkCircle : icons.x} ${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// Helper for 2-column hand-drawn sketch illustration SVGs
function getHeroSketchIllustration(type) {
  switch (type) {
    case 'courses':
      return `
        <svg class="about-hero-sketch-art" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="210" cy="190" r="150" stroke="rgba(245,200,66,0.18)" stroke-width="2" stroke-dasharray="6 6" />
          <path d="M 60 290 L 360 290" stroke="#f7f9fd" stroke-width="3.5" stroke-linecap="round" />
          <path d="M 100 290 L 95 340 M 320 290 L 325 340" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" />
          <path d="M 140 290 L 155 210 L 265 210 L 280 290 Z" stroke="#f5c842" stroke-width="3" fill="rgba(245,200,66,0.06)" />
          <rect x="160" y="218" width="100" height="62" rx="4" stroke="#a0c0f8" stroke-width="2" fill="rgba(14,23,41,0.7)" />
          <path d="M 172 235 L 184 243 L 172 251" stroke="#f5c842" stroke-width="2.5" stroke-linecap="round" />
          <line x1="192" y1="251" x2="215" y2="251" stroke="#a0c0f8" stroke-width="2.5" />
          <circle cx="210" cy="115" r="32" stroke="#f7f9fd" stroke-width="3" fill="rgba(14,23,41,0.85)" />
          <path d="M 175 115 A 35 35 0 0 1 245 115" stroke="#f5c842" stroke-width="4" stroke-linecap="round" />
          <rect x="172" y="105" width="8" height="20" rx="3" fill="#f5c842" />
          <rect x="240" y="105" width="8" height="20" rx="3" fill="#f5c842" />
          <circle cx="198" cy="114" r="9" stroke="#f7f9fd" stroke-width="2" />
          <circle cx="222" cy="114" r="9" stroke="#f7f9fd" stroke-width="2" />
          <path d="M 203 128 Q 210 135 217 128" stroke="#f5c842" stroke-width="2.5" stroke-linecap="round" />
          <path d="M 170 170 Q 210 145 250 170 L 260 230 L 160 230 Z" stroke="#3b6fd4" stroke-width="3" fill="rgba(59,111,212,0.18)" />
          <text x="45" y="110" fill="#f5c842" font-size="28" font-family="'Kalam', cursive" opacity="0.9">{ }</text>
          <text x="330" y="110" fill="#f5c842" font-size="28" font-family="'Kalam', cursive" opacity="0.9">&lt;/&gt;</text>
        </svg>`;

    case 'training':
      return `
        <svg class="about-hero-sketch-art" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="210" cy="190" r="150" stroke="rgba(245,200,66,0.18)" stroke-width="2" stroke-dasharray="6 6" />
          <rect x="70" y="160" width="120" height="90" rx="8" stroke="#a0c0f8" stroke-width="2.5" fill="rgba(14,23,41,0.6)" />
          <path d="M 110 200 Q 130 180 150 200" stroke="#f5c842" stroke-width="2.5" stroke-linecap="round" />
          <circle cx="130" cy="180" r="12" stroke="#f7f9fd" stroke-width="2" />
          <rect x="220" y="130" width="140" height="110" rx="6" stroke="#f5c842" stroke-width="3" fill="rgba(245,200,66,0.06)" />
          <path d="M 240 160 L 290 160 M 240 180 L 330 180 M 240 200 L 300 200" stroke="#a0c0f8" stroke-width="2" stroke-linecap="round" />
          <path d="M 130 80 Q 130 50 150 50 Q 170 50 170 80 Q 170 100 150 120 Q 130 100 130 80 Z" stroke="#f5c842" stroke-width="2.5" fill="rgba(245,200,66,0.15)" />
          <circle cx="150" cy="75" r="5" fill="#f5c842" />
        </svg>`;

    case 'why-us':
      return `
        <svg class="about-hero-sketch-art" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="210" cy="190" r="150" stroke="rgba(245,200,66,0.18)" stroke-width="2" stroke-dasharray="6 6" />
          <path d="M 160 140 L 260 140 L 250 220 Q 210 250 170 220 Z" stroke="#f5c842" stroke-width="3" fill="rgba(245,200,66,0.12)" />
          <path d="M 160 160 Q 130 160 140 190 Q 150 210 170 205" stroke="#f5c842" stroke-width="2.5" />
          <path d="M 260 160 Q 290 160 280 190 Q 270 210 250 205" stroke="#f5c842" stroke-width="2.5" />
          <path d="M 210 240 L 210 280 M 180 280 L 240 280" stroke="#f7f9fd" stroke-width="3" stroke-linecap="round" />
          <polygon points="210,80 220,105 245,108 225,125 232,150 210,135 188,150 195,125 175,108 200,105" stroke="#f5c842" stroke-width="2.5" fill="rgba(245,200,66,0.2)" />
        </svg>`;

    case 'reviews':
      return `
        <svg class="about-hero-sketch-art" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="210" cy="190" r="150" stroke="rgba(245,200,66,0.18)" stroke-width="2" stroke-dasharray="6 6" />
          <rect x="110" y="110" width="200" height="90" rx="12" stroke="#f5c842" stroke-width="3" fill="rgba(245,200,66,0.08)" />
          <path d="M 160 200 L 150 230 L 180 200" stroke="#f5c842" stroke-width="2.5" fill="rgba(245,200,66,0.08)" />
          <text x="135" y="160" fill="#f5c842" font-size="28" font-family="'Manrope', sans-serif" font-weight="bold">★ ★ ★ ★ ★</text>
          <text x="155" y="185" fill="#f7f9fd" font-size="14" font-family="'Kalam', cursive">5.0 Sulekha Rating</text>
          <circle cx="100" cy="240" r="28" stroke="#f7f9fd" stroke-width="2.5" />
          <path d="M 90 248 Q 100 258 110 248" stroke="#f5c842" stroke-width="2.5" stroke-linecap="round" />
        </svg>`;

    case 'faq':
      return `
        <svg class="about-hero-sketch-art" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="210" cy="190" r="150" stroke="rgba(245,200,66,0.18)" stroke-width="2" stroke-dasharray="6 6" />
          <text x="160" y="210" fill="#f5c842" font-size="140" font-family="'Kalam', cursive" font-weight="bold" opacity="0.95">?</text>
          <path d="M 290 120 A 22 22 0 1 0 278 145 L 302 145 A 22 22 0 0 0 290 120 Z" stroke="#f5c842" stroke-width="2.5" fill="rgba(245,200,66,0.15)" />
        </svg>`;

    case 'contact':
      return `
        <svg class="about-hero-sketch-art" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="210" cy="190" r="150" stroke="rgba(245,200,66,0.18)" stroke-width="2" stroke-dasharray="6 6" />
          <path d="M 190 120 Q 190 70 220 70 Q 250 70 250 120 Q 250 160 220 190 Q 190 160 190 120 Z" stroke="#f5c842" stroke-width="3" fill="rgba(245,200,66,0.15)" />
          <circle cx="220" cy="115" r="10" fill="#f5c842" />
          <rect x="70" y="190" width="120" height="80" rx="8" stroke="#a0c0f8" stroke-width="2.5" fill="rgba(14,23,41,0.6)" />
          <path d="M 70 190 L 130 240 L 190 190" stroke="#f5c842" stroke-width="2" />
        </svg>`;

    default: // 'about'
      return `
        <svg class="about-hero-sketch-art" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="210" cy="190" r="150" stroke="rgba(245,200,66,0.18)" stroke-width="2" stroke-dasharray="6 6" />
          <path d="M 60 290 L 360 290" stroke="#f7f9fd" stroke-width="3.5" stroke-linecap="round" />
          <path d="M 100 290 L 95 340 M 320 290 L 325 340" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" />
          <path d="M 140 290 L 155 210 L 265 210 L 280 290 Z" stroke="#f5c842" stroke-width="3" fill="rgba(245,200,66,0.06)" />
          <rect x="160" y="218" width="100" height="62" rx="4" stroke="#a0c0f8" stroke-width="2" fill="rgba(14,23,41,0.7)" />
          <circle cx="210" cy="115" r="32" stroke="#f7f9fd" stroke-width="3" fill="rgba(14,23,41,0.85)" />
          <circle cx="198" cy="112" r="10" stroke="#f5c842" stroke-width="2.5" />
          <circle cx="222" cy="112" r="10" stroke="#f5c842" stroke-width="2.5" />
          <path d="M 202 128 Q 210 136 218 128" stroke="#f7f9fd" stroke-width="2.5" stroke-linecap="round" />
          <text x="45" y="180" fill="#f5c842" font-size="28" font-family="'Kalam', cursive" opacity="0.9">{ }</text>
          <text x="330" y="110" fill="#f5c842" font-size="28" font-family="'Kalam', cursive" opacity="0.9">&lt;/&gt;</text>
        </svg>`;
  }
}

// ============================================================
// PAGE HERO (Hand-Drawn 2-Column Marker Sketch Theme)
// ============================================================
function renderPageHero(badge, titleLine1, titleLine2 = '', subtitle = '', illustrationType = 'about') {
  let line1 = titleLine1;
  let line2 = titleLine2;

  // Handle flexible signature renderPageHero(badge, title, subtitle)
  if (!line2 && subtitle === '') {
    // line1 was passed as full title, split into two lines
    const parts = line1.split(' ');
    if (parts.length > 2) {
      const mid = Math.ceil(parts.length / 2);
      line1 = parts.slice(0, mid).join(' ');
      line2 = parts.slice(mid).join(' ');
    } else {
      line2 = parts.pop() || '';
      line1 = parts.join(' ') || line1;
    }
  }

  const artSvg = getHeroSketchIllustration(illustrationType);

  return `
    <section class="about-hero-sketch" id="page-hero-sketch">
      <div class="about-hero-glow1"></div>
      <div class="about-hero-glow2"></div>

      <!-- Edge Tech Doodles -->
      <div class="about-doodles-left">
        <svg viewBox="0 0 120 220" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M 20 20 L 40 10 L 60 20" />
          <text x="10" y="55" fill="none" stroke="#f5c842" font-size="22" font-family="'Kalam', cursive">&lt;/&gt;</text>
          <path d="M 20 80 Q 40 70 60 80 Q 80 90 100 80" />
          <rect x="15" y="110" width="45" height="30" rx="4" />
          <path d="M 25 125 L 35 125 M 42 125 L 50 125" />
          <circle cx="80" cy="160" r="18" stroke-dasharray="4 3" />
        </svg>
      </div>

      <div class="container-page about-hero-grid">
        <!-- Left Column: Hand-drawn Marker Typography -->
        <div>
          <div class="about-hero-badge">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
            ${badge}
          </div>

          <h1 class="about-hero-title">
            <span class="about-hero-title-line1">${line1}</span>
            <span class="about-hero-title-line2">
              ${line2}
              <svg class="about-wavy-underline" viewBox="0 0 300 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 5 12 Q 25 3, 45 12 T 85 12 T 125 12 T 165 12 T 205 12 T 285 12 T 295 10" />
              </svg>
            </span>
          </h1>

          ${subtitle ? `<p class="about-hero-desc">${subtitle}</p>` : ''}
        </div>

        <!-- Right Column: Hand-Drawn Sketch Line-Art Artwork -->
        <div class="about-hero-illustration-wrap">
          ${artSvg}
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// SECTION HEADER
// ============================================================
function renderSectionHeader(eyebrow, title, subtitle = '', center = true) {
  return `
    <div class="section-header ${center ? 'center' : ''}">
      ${eyebrow ? `<div class="section-eyebrow">${icons.sparkles} ${eyebrow}</div>` : ''}
      <h2>${title}</h2>
      ${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}
    </div>
  `;
}

// ============================================================
// ENQUIRY FORM
// ============================================================
function renderEnquiryForm(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const courseOptions = courses.map(c =>
    `<option value="${c.title}">${c.title}</option>`
  ).join('');

  container.innerHTML = `
    <form class="enquiry-form" id="enquiry-form-${containerId}" novalidate>
      <div class="form-grid">
        <div class="form-field">
          <label class="form-label" for="ef-name-${containerId}">Full Name</label>
          <input class="form-input" id="ef-name-${containerId}" name="name" type="text" placeholder="Your full name" autocomplete="name" />
          <p class="form-error" id="ef-name-err-${containerId}" style="display:none"></p>
        </div>
        <div class="form-field">
          <label class="form-label" for="ef-phone-${containerId}">Phone Number</label>
          <input class="form-input" id="ef-phone-${containerId}" name="phone" type="tel" inputmode="tel" placeholder="+91 98765 43210" autocomplete="tel" />
          <p class="form-error" id="ef-phone-err-${containerId}" style="display:none"></p>
        </div>
        <div class="form-field full-col">
          <label class="form-label" for="ef-email-${containerId}">Email</label>
          <input class="form-input" id="ef-email-${containerId}" name="email" type="email" placeholder="you@example.com" autocomplete="email" />
          <p class="form-error" id="ef-email-err-${containerId}" style="display:none"></p>
        </div>
        <div class="form-field">
          <label class="form-label" for="ef-course-${containerId}">Interested Course</label>
          <select class="form-select" id="ef-course-${containerId}" name="course">
            <option value="">Select a course</option>
            ${courseOptions}
          </select>
          <p class="form-error" id="ef-course-err-${containerId}" style="display:none"></p>
        </div>
        <div class="form-field">
          <label class="form-label" for="ef-mode-${containerId}">Training Mode</label>
          <select class="form-select" id="ef-mode-${containerId}" name="mode">
            <option value="">Choose mode</option>
            <option value="Classroom">Classroom</option>
            <option value="Online">Live Online</option>
            <option value="Either">Either works</option>
          </select>
          <p class="form-error" id="ef-mode-err-${containerId}" style="display:none"></p>
        </div>
        <div class="form-field full-col">
          <label class="form-label" for="ef-msg-${containerId}">Message (optional)</label>
          <textarea class="form-textarea" id="ef-msg-${containerId}" name="message" rows="4" placeholder="Tell us about your background or any questions..."></textarea>
        </div>
      </div>
      <button type="submit" class="btn btn-sunshine btn-lg" id="ef-submit-${containerId}" style="width:100%;margin-top:1.5rem">
        Request a Callback
      </button>
      <p class="form-note">By submitting, you agree to be contacted by our training team.</p>
    </form>
  `;

  const form = document.getElementById(`enquiry-form-${containerId}`);
  form.addEventListener('submit', (e) => handleEnquirySubmit(e, containerId));
}

function handleEnquirySubmit(e, id) {
  e.preventDefault();
  const form = e.target;
  const fields = {
    name: form.querySelector(`#ef-name-${id}`),
    phone: form.querySelector(`#ef-phone-${id}`),
    email: form.querySelector(`#ef-email-${id}`),
    course: form.querySelector(`#ef-course-${id}`),
    mode: form.querySelector(`#ef-mode-${id}`),
  };
  const errors = {};

  // Validation
  const name = fields.name.value.trim();
  if (name.length < 2 || name.length > 80) errors.name = 'Please enter your name (2–80 chars)';

  const phone = fields.phone.value.trim();
  if (phone.length < 7 || phone.length > 20 || !/^[0-9+\-\s()]+$/.test(phone))
    errors.phone = 'Enter a valid phone number';

  const email = fields.email.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120)
    errors.email = 'Enter a valid email';

  if (!fields.course.value) errors.course = 'Please select a course';
  if (!fields.mode.value)   errors.mode = 'Please select a training mode';

  // Show/clear errors
  ['name','phone','email','course','mode'].forEach(k => {
    const inp = fields[k];
    const err = document.getElementById(`ef-${k}-err-${id}`);
    if (errors[k]) {
      inp.classList.add('error');
      err.textContent = errors[k];
      err.style.display = 'block';
    } else {
      inp.classList.remove('error');
      err.style.display = 'none';
    }
  });

  if (Object.keys(errors).length > 0) {
    showToast('Please fix the highlighted fields.', 'error');
    return;
  }

  // Simulate submission
  const btn = document.getElementById(`ef-submit-${id}`);
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span> Sending…`;

  setTimeout(() => {
    const container = document.getElementById(id);
    container.innerHTML = `
      <div class="form-success">
        <div class="form-success-icon">${icons.checkCircle}</div>
        <h3>Enquiry received</h3>
        <p>Thanks for reaching out. Our training team will call you back shortly.</p>
      </div>
    `;
    showToast('Thank you! Our team will call you back shortly.', 'success');
  }, 900);
}

// Helper for course-specific background doodle
function getCourseBgDoodle(title, category) {
  const t = (title || '').toLowerCase();
  const c = (category || '').toLowerCase();
  
  if (t.includes('python')) {
    return `<svg class="course-card-doodle" viewBox="0 0 80 80" fill="none" stroke="currentColor"><path d="M 20 25 Q 30 15 45 20 Q 60 25 55 40 L 40 40 Q 25 40 25 55 Q 25 70 40 65 Q 55 60 60 45" stroke-width="2" stroke-linecap="round"/><text x="15" y="70" font-family="'Kalam', cursive" font-size="16" fill="#f5c842">{ }</text></svg>`;
  } else if (t.includes('java') && t.includes('selenium')) {
    return `<svg class="course-card-doodle" viewBox="0 0 80 80" fill="none" stroke="currentColor"><rect x="15" y="20" width="50" height="40" rx="4" stroke-width="2"/><line x1="15" y1="32" x2="65" y2="32" stroke-width="1.5"/><path d="M 35 45 L 42 52 L 55 38" stroke="#f5c842" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  } else if (t.includes('java')) {
    return `<svg class="course-card-doodle" viewBox="0 0 80 80" fill="none" stroke="currentColor"><path d="M 25 35 Q 20 20 30 15 Q 40 30 35 35 Z" stroke-width="2"/><path d="M 25 40 L 55 40 L 50 65 L 30 65 Z" stroke-width="2"/><path d="M 50 45 Q 62 45 60 55 Q 58 63 48 62" stroke-width="2"/><text x="10" y="30" font-family="'Kalam', cursive" font-size="20" fill="#f5c842">{ }</text></svg>`;
  } else if (c.includes('data') || t.includes('ai') || t.includes('data')) {
    return `<svg class="course-card-doodle" viewBox="0 0 80 80" fill="none" stroke="currentColor"><circle cx="25" cy="25" r="5" stroke-width="2"/><circle cx="55" cy="25" r="5" stroke-width="2"/><circle cx="40" cy="55" r="5" stroke-width="2"/><line x1="25" y1="25" x2="40" y2="55" stroke-width="1.5"/><line x1="55" y1="25" x2="40" y2="55" stroke-width="1.5"/><line x1="25" y1="25" x2="55" y2="25" stroke-width="1.5"/><path d="M 40 15 L 40 25" stroke="#f5c842" stroke-width="2"/></svg>`;
  } else if (c.includes('cloud') || t.includes('aws') || t.includes('azure')) {
    return `<svg class="course-card-doodle" viewBox="0 0 80 80" fill="none" stroke="currentColor"><path d="M 20 50 Q 15 38 28 32 Q 35 22 48 26 Q 58 20 68 30 Q 75 42 65 52 Z" stroke-width="2"/><rect x="28" y="55" width="24" height="12" rx="2" stroke-width="1.5"/><circle cx="33" cy="61" r="1.5" fill="#f5c842"/></svg>`;
  } else if (c.includes('web') || t.includes('react') || t.includes('frontend')) {
    return `<svg class="course-card-doodle" viewBox="0 0 80 80" fill="none" stroke="currentColor"><rect x="15" y="20" width="50" height="40" rx="4" stroke-width="2"/><text x="25" y="48" font-family="'Kalam', cursive" font-size="18" fill="#f5c842">&lt;/&gt;</text></svg>`;
  } else if (c.includes('sap')) {
    return `<svg class="course-card-doodle" viewBox="0 0 80 80" fill="none" stroke="currentColor"><ellipse cx="40" cy="25" rx="22" ry="8" stroke-width="2"/><path d="M 18 25 L 18 55 Q 40 65 62 55 L 62 25" stroke-width="2"/><path d="M 18 40 Q 40 50 62 40" stroke-width="1.8" stroke="#f5c842"/></svg>`;
  }
  return `<svg class="course-card-doodle" viewBox="0 0 80 80" fill="none" stroke="currentColor"><text x="20" y="50" font-family="'Kalam', cursive" font-size="24" fill="#f5c842">&lt;/&gt;</text></svg>`;
}

// ============================================================
// COURSE CARD
// ============================================================
function renderCourseCard(course) {
  const iconSvg = courseIconSVGs[course.icon] || courseIconSVGs['code'];
  const doodleSvg = getCourseBgDoodle(course.title, course.category);
  return `
    <article class="course-card">
      <div class="course-card-doodle-wrap">${doodleSvg}</div>
      <div class="course-card-header">
        <div class="course-card-icon">${iconSvg}</div>
        <span class="course-badge">${course.category}</span>
      </div>
      <h3 class="course-card-title">
        <span>${course.title}</span>
        <svg class="course-title-underline" viewBox="0 0 120 10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 2 5 Q 30 1, 60 6 T 118 5" stroke="var(--sunshine)" stroke-width="3" fill="none" stroke-linecap="round" />
        </svg>
      </h3>
      <p class="course-card-desc">${course.description}</p>
      <p class="course-card-mode">${course.mode}</p>
      <div class="course-card-actions">
        <a href="course-detail.html?slug=${course.slug}" class="btn btn-outline btn-sm btn-view-course">
          View Course <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="btn-arrow"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        </a>
        <a href="contact.html" class="btn btn-sunshine btn-sm btn-enquire">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="btn-chat-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.598.598 0 01-.743-.594c.005-.336.037-.67.097-1.002C3.588 17.755 3 15.006 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg> Enquire
        </a>
      </div>
    </article>
  `;
}

// ============================================================
// ACCORDION
// ============================================================
function initAccordions(selector = '.accordion') {
  document.querySelectorAll(selector).forEach(accordion => {
    accordion.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        const isOpen = item.classList.contains('open');

        // Collapse all in same accordion
        accordion.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));

        if (!isOpen) item.classList.add('open');
      });
    });
  });
}

// ============================================================
// UTILS
// ============================================================
function getCurrentPage() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  if (file === 'index.html' || file === '') return 'home';
  return file.replace('.html', '');
}

function starsHTML(count = 5) {
  return Array.from({ length: count }, () => icons.star).join('');
}
