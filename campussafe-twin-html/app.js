(function() {
  "use strict";
  const P = {
    home: '<path d="M3 10.2a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6a2 2 0 0 1 .7 1.5V19a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/>',
    reportPin: '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><path d="M12 6.5v4"/><path d="M12 13.5h.01"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    clipboard: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12l2 2 4-4"/>',
    bell: '<path d="M10.3 21a2 2 0 0 0 3.4 0"/><path d="M3.3 15.3A1 1 0 0 0 4 17h16a1 1 0 0 0 .7-1.7C19.4 14 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.4 6-2.7 7.3"/><path d="M19 2.5c1.1.9 2 2.2 2.3 3.6"/>',
    userCircle: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.7V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.7"/>',
    logout: '<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    feed: '<rect width="16" height="18" x="4" y="3" rx="2"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/>',
    mapIcon: '<path d="M14.1 5.6a2 2 0 0 0 1.8 0l3.7-1.9A1 1 0 0 1 21 4.6v12.8a1 1 0 0 1-.6.9l-4.5 2.3a2 2 0 0 1-1.8 0l-4.2-2.1a2 2 0 0 0-1.8 0l-3.7 1.9A1 1 0 0 1 3 19.4V6.6a1 1 0 0 1 .6-.9l4.5-2.3a2 2 0 0 1 1.8 0z"/><path d="M15 5.8v15"/><path d="M9 3.2v15"/>',
    chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    settings: '<path d="M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.3a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.4a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.4a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.3a2 2 0 0 1 1 1.7v.2a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.3a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.4a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.4a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.3a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    eye: '<path d="M2.1 12.3a1 1 0 0 1 0-.7 10.8 10.8 0 0 1 19.8 0 1 1 0 0 1 0 .7 10.8 10.8 0 0 1-19.8 0"/><circle cx="12" cy="12" r="3"/>',
    eyeOff: '<path d="M10.7 5.1a10.7 10.7 0 0 1 11.2 6.6 1 1 0 0 1 0 .7 10.7 10.7 0 0 1-1.4 2.5"/><path d="M14.1 14.2a3 3 0 0 1-4.2-4.2"/><path d="M17.5 17.5a10.8 10.8 0 0 1-15.4-5.2 1 1 0 0 1 0-.7 10.8 10.8 0 0 1 4.4-5.1"/><path d="m2 2 20 20"/>',
    arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    chevronLeft: '<path d="m15 18-6-6 6-6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    search: '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.3-4.3"/>',
    cap: '<path d="M21.4 10.9a1 1 0 0 0 0-1.8L12.8 5.2a2 2 0 0 0-1.7 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.7 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    shieldAlert: '<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    hexEye: '<path d="M12 2.5 20.2 7v10L12 21.5 3.8 17V7z"/><path d="M7.6 12s1.7-2.8 4.4-2.8 4.4 2.8 4.4 2.8-1.7 2.8-4.4 2.8S7.6 12 7.6 12z"/><circle cx="12" cy="12" r=".9"/>',
    insights: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7.5v9"/><path d="m8 12.5 4 4 4-4"/>',
    warning: '<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    swap: '<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    minus: '<path d="M5 12h14"/>',
    calendar: '<path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.8 9.8 0 0 1 6.7 2.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-6.7-2.7L3 16"/><path d="M8 16H3v5"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    navigation: '<path d="M3 11 22 2l-9 19-2-8z"/>',
    alertCircle: '<circle cx="12" cy="12" r="9.5"/><path d="M12 8v4.5"/><path d="M12 16h.01"/>',
    wifiOff: '<path d="M12 20h.01"/><path d="M8.5 16.4a5 5 0 0 1 7 0"/><path d="M5 12.9a10 10 0 0 1 5.2-2.7"/><path d="M19 12.9a10 10 0 0 0-2-1.5"/><path d="M2 8.8a15 15 0 0 1 4.2-2.6"/><path d="M22 8.8a15 15 0 0 0-11.3-3.8"/><path d="m2 2 20 20"/>',
    inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-9 5.7a2 2 0 0 1-2 0L2 7"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    idCard: '<rect width="20" height="16" x="2" y="4" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5 16c.6-1.4 1.7-2 3-2s2.4.6 3 2"/><path d="M14 10h5M14 14h3"/>',
    layers: '<path d="m12.8 2.2a2 2 0 0 0-1.6 0L2.6 6.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0l8.6-3.9a1 1 0 0 0 0-1.8z"/><path d="m2 12 9.2 4.2a2 2 0 0 0 1.6 0L22 12"/><path d="m2 17 9.2 4.2a2 2 0 0 0 1.6 0L22 17"/>',
    crosshair: '<circle cx="12" cy="12" r="9"/><path d="M22 12h-4M6 12H2M12 6V2M12 22v-4"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    bookmark: '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    note: '<path d="M12 20h9"/><path d="M16.4 3.6a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z"/>'
  };
  function icon(name, cls = "") {
    return `<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${P[name] || ""}</svg>`;
  }
  function logo(variant = "light", cls = "") {
    if (variant === "light") {
      return `<svg class="logo ${cls}" viewBox="0 0 48 56" aria-hidden="true" focusable="false"><path d="M24 3.5 42.5 10v15.2c0 12.6-8 21.9-18.5 26.8C13.5 47.1 5.5 37.8 5.5 25.2V10z" fill="rgba(255,255,255,.08)" stroke="#fff" stroke-width="3.2" stroke-linejoin="round"/><path d="M24 10.5 36.5 15v10.6c0 9-5.4 15.8-12.5 19.3-7.1-3.5-12.5-10.3-12.5-19.3V15z" fill="#1d64dc"/><path d="m17.8 26.6 4.4 4.4 8.4-8.8" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }
    return `<svg class="logo ${cls}" viewBox="0 0 48 56" aria-hidden="true" focusable="false"><path d="M24 2.5 43.5 9.5v15.8c0 13-8.3 22.6-19.5 27.7C12.8 47.9 4.5 38.3 4.5 25.3V9.5z" fill="#173d80"/><path d="M24 10 36 14.4v10.8c0 8.7-5.2 15.3-12 18.7-6.8-3.4-12-10-12-18.7V14.4z" fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round"/><path d="M24 13.6v26c5.4-3.2 9.2-8.4 9.2-14.5v-8.6z" fill="#4f8ef7"/><path d="m18.4 26.2 3.9 3.9 7.2-7.4" fill="none" stroke="#fff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
  const googleLogo = `<svg class="g-logo" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>`;
  const TYPE_COLORS = {
    Theft: "#e5484d",
    "Suspicious Activity": "#f2b01e",
    Medical: "#1f5fd6",
    Vandalism: "#f07a2a",
    Other: "#7a869a"
  };
  function typeGlyph(type, size = 20) {
    const c = TYPE_COLORS[type] || TYPE_COLORS.Other;
    const inner = {
      Theft: `<path d="M12 2.5 19.5 5.3v6.1c0 5-3.2 8.9-7.5 10.6C7.7 20.3 4.5 16.4 4.5 11.4V5.3z" fill="${c}"/><path d="M9.1 10h5.8l-.6 5.6H9.7z" fill="#fff"/><path d="M10.6 10V9.3a1.4 1.4 0 0 1 2.8 0v.7" stroke="#fff" stroke-width="1.3" fill="none"/>`,
      "Suspicious Activity": `<circle cx="12" cy="12" r="9.5" fill="${c}"/><path d="M5.8 12s2.3-3.8 6.2-3.8 6.2 3.8 6.2 3.8-2.3 3.8-6.2 3.8S5.8 12 5.8 12z" fill="#fff"/><circle cx="12" cy="12" r="1.9" fill="${c}"/>`,
      Medical: `<path d="M12 22s7.5-6.4 7.5-12.3a7.5 7.5 0 0 0-15 0C4.5 15.6 12 22 12 22z" fill="${c}"/><path d="M10.8 5.6h2.4V8h2.4v2.4h-2.4v2.4h-2.4v-2.4H8.4V8h2.4z" fill="#fff"/>`,
      Vandalism: `<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="${c}"/><path d="m13.4 6.4-4 6.1h3l-1.3 5.1 4.4-6.6h-3z" fill="#fff"/>`,
      Other: `<circle cx="12" cy="12" r="9.5" fill="${c}"/><path d="M12 7.2v6" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="16.6" r="1.3" fill="#fff"/>`
    }[type] || "";
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true" focusable="false">${inner}</svg>`;
  }
  function tablePin(active) {
    const c = active ? "#e5484d" : "#f5a524";
    return `<svg class="tpin" viewBox="0 0 20 24" width="15" height="18" aria-hidden="true" focusable="false"><path d="M10 23s8-7 8-13.2A8 8 0 0 0 2 9.8C2 16 10 23 10 23z" fill="${c}"/><circle cx="10" cy="9.8" r="3.2" fill="#fff"/></svg>`;
  }
  const statGlyph = {
    siren: `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M6.5 17v-5.3a5.5 5.5 0 0 1 11 0V17z" fill="#2f6fdf"/><rect x="4.5" y="17" width="15" height="3.6" rx="1.3" fill="#2f6fdf"/><path d="M12 2.5v2M4.3 5.6l1.4 1.4M19.7 5.6l-1.4 1.4M2.6 11.6h1.8M19.6 11.6h1.8" stroke="#2f6fdf" stroke-width="1.8" stroke-linecap="round"/><path d="M9.8 12.2a2.3 2.3 0 0 1 2.2-2.3" stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none"/></svg>`,
    routes: `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M7 16.5 17 7.5" stroke="#22a05b" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="1 3.4"/><circle cx="6.3" cy="17.2" r="3.6" fill="#22a05b"/><path d="M17.7 2.8a3.8 3.8 0 0 1 3.8 3.8c0 2.8-3.8 6-3.8 6s-3.8-3.2-3.8-6a3.8 3.8 0 0 1 3.8-3.8z" fill="#22a05b"/><circle cx="17.7" cy="6.6" r="1.3" fill="#fff"/><circle cx="6.3" cy="17.2" r="1.3" fill="#fff"/></svg>`,
    alert: `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="m21.4 18.2-8-14a1.6 1.6 0 0 0-2.8 0l-8 14A1.6 1.6 0 0 0 4 20.6h16a1.6 1.6 0 0 0 1.4-2.4z" fill="#e5484d"/><path d="M12 9v4.6" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="16.9" r="1.3" fill="#fff"/></svg>`,
    active: `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e5484d"/><path d="M8.4 14.6v-2.4a3.6 3.6 0 0 1 7.2 0v2.4z" fill="#fff"/><rect x="7.2" y="14.6" width="9.6" height="2.2" rx=".8" fill="#fff"/></svg>`,
    resolved: `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M20 12.6c0 5-3.5 7.6-7.7 9.1a1 1 0 0 1-.6 0C7.5 20.2 4 17.6 4 12.6V5.8a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.6 17 4.8 19 4.8a1 1 0 0 1 1 1z" fill="#1fa35c"/><path d="m8.6 12.3 2.4 2.4 4.6-4.8" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    patrol: `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M4.5 3.5h15v9.7c0 3.9-3.1 6.5-7.5 7.8-4.4-1.3-7.5-3.9-7.5-7.8z" fill="#2f6fdf"/><path d="m12 6.8 1.3 2.7 2.9.3-2.2 2 .6 2.9L12 13.3l-2.6 1.4.6-2.9-2.2-2 2.9-.3z" fill="#fff"/></svg>`
  };
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (value = "") => String(value ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim());
  function debounce(fn, ms = 250) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  }
  function startOfDay(d = /* @__PURE__ */ new Date()) {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  }
  function dayDiff(a, b = /* @__PURE__ */ new Date()) {
    return Math.round((startOfDay(b) - startOfDay(a)) / 864e5);
  }
  const isToday = (iso2) => !!iso2 && dayDiff(new Date(iso2)) === 0;
  function clock(d) {
    return new Date(d).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  }
  function formatTime(iso2) {
    const d = new Date(iso2);
    const diff = dayDiff(d);
    if (diff === 0) return clock(d);
    if (diff === 1) return "Yesterday";
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  }
  function formatDateTime(iso2) {
    const d = new Date(iso2);
    const diff = dayDiff(d);
    if (diff === 0) return `Today, ${clock(d)}`;
    if (diff === 1) return `Yesterday, ${clock(d)}`;
    return `${d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}, ${clock(d)}`;
  }
  function timeAgo(iso2) {
    const mins = Math.round((Date.now() - new Date(iso2).getTime()) / 6e4);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins} min ago`;
    const hours = Math.round(mins / 60);
    if (hours < 24 && dayDiff(new Date(iso2)) === 0) return `${hours} h ago`;
    return formatTime(iso2);
  }
  function parseDateInput(value, endOfDay = false) {
    if (!value) return null;
    const [y, m, d] = value.split("-").map(Number);
    if (!y || !m || !d) return null;
    return endOfDay ? new Date(y, m - 1, d, 23, 59, 59, 999) : new Date(y, m - 1, d);
  }
  function toast(message, { type = "info", timeout = 3400 } = {}) {
    const root = document.getElementById("toast-root");
    if (!root) return;
    const el = document.createElement("div");
    el.className = `toast toast--${type}`;
    el.setAttribute("role", type === "error" ? "alert" : "status");
    const ic = type === "success" ? "check" : type === "error" ? "alertCircle" : type === "warning" ? "warning" : "bell";
    el.innerHTML = `<span class="toast__icon">${icon(ic)}</span><span class="toast__msg">${esc(message)}</span>`;
    root.appendChild(el);
    requestAnimationFrame(() => el.classList.add("is-in"));
    setTimeout(() => {
      el.classList.remove("is-in");
      setTimeout(() => el.remove(), 260);
    }, timeout);
  }
  function openModal({ title = "", body = "", size = "sm", onOpen, label } = {}) {
    closeMenus();
    const wrap = document.createElement("div");
    wrap.className = "modal";
    wrap.innerHTML = `
    <div class="modal__backdrop" data-close></div>
    <div class="modal__dialog modal__dialog--${size}" role="dialog" aria-modal="true" aria-label="${esc(label || title || "Dialog")}">
      <button type="button" class="modal__close" data-close aria-label="Close">${icon("x")}</button>
      ${title ? `<h2 class="modal__title">${esc(title)}</h2>` : ""}
      <div class="modal__body">${body}</div>
    </div>`;
    document.body.appendChild(wrap);
    const previous = document.activeElement;
    let closed = false;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") trapFocus(e, wrap);
    };
    function close() {
      if (closed) return;
      closed = true;
      wrap.classList.remove("is-open");
      document.removeEventListener("keydown", onKey);
      setTimeout(() => wrap.remove(), 180);
      if (previous && previous.focus) previous.focus();
    }
    document.addEventListener("keydown", onKey);
    wrap.addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) close();
    });
    requestAnimationFrame(() => {
      wrap.classList.add("is-open");
      const first = wrap.querySelector(".modal__body input, .modal__body select, .modal__body textarea, .modal__body button");
      (first || wrap.querySelector(".modal__close")).focus();
    });
    onOpen == null ? void 0 : onOpen(wrap.querySelector(".modal__body"), close);
    return close;
  }
  function trapFocus(e, container) {
    const items = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', container).filter(
      (el) => !el.disabled && el.offsetParent !== null
    );
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  function confirmDialog({ title, message, confirmLabel = "Confirm", danger = false }) {
    return new Promise((resolve) => {
      let answered = false;
      openModal({
        title,
        body: `<p class="modal__text">${esc(message)}</p>
        <div class="modal__actions">
          <button type="button" class="btn btn--ghost" data-answer="no">Cancel</button>
          <button type="button" class="btn ${danger ? "btn--danger" : "btn--primary"}" data-answer="yes">${esc(confirmLabel)}</button>
        </div>`,
        onOpen(body, close) {
          body.addEventListener("click", (e) => {
            const b = e.target.closest("[data-answer]");
            if (!b) return;
            answered = true;
            resolve(b.dataset.answer === "yes");
            close();
          });
          body.closest(".modal").addEventListener("click", (e) => {
            if (e.target.closest("[data-close]") && !answered) resolve(false);
          });
        }
      });
    });
  }
  let openMenuEl = null;
  function closeMenus() {
    if (openMenuEl) {
      openMenuEl.cleanup();
      openMenuEl = null;
    }
  }
  function openMenu(anchor, items, onSelect, { align = "end" } = {}) {
    var _a;
    if (openMenuEl && openMenuEl.anchor === anchor) {
      closeMenus();
      return;
    }
    closeMenus();
    const menu = document.createElement("div");
    menu.className = "menu";
    menu.setAttribute("role", "menu");
    menu.innerHTML = items.map(
      (it) => it.divider ? '<div class="menu__sep" role="separator"></div>' : `<button type="button" role="menuitem" class="menu__item${it.active ? " is-active" : ""}${it.danger ? " is-danger" : ""}" data-value="${esc(it.value)}">${it.icon ? icon(it.icon) : ""}<span>${esc(it.label)}</span>${it.badge ? `<span class="menu__badge">${esc(it.badge)}</span>` : ""}${it.active ? icon("check", "menu__check") : ""}</button>`
    ).join("");
    document.body.appendChild(menu);
    const r = anchor.getBoundingClientRect();
    const w = menu.offsetWidth;
    const h = menu.offsetHeight;
    let left = align === "end" ? r.right - w : r.left;
    left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
    let top = r.bottom + 6;
    if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 6);
    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
    anchor.setAttribute("aria-expanded", "true");
    const onDoc = (e) => {
      if (!menu.contains(e.target) && !anchor.contains(e.target)) closeMenus();
    };
    const onKey = (e) => {
      var _a2, _b;
      const btns = $$(".menu__item", menu);
      const idx = btns.indexOf(document.activeElement);
      if (e.key === "Escape") {
        closeMenus();
        anchor.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        (_a2 = btns[(idx + 1) % btns.length]) == null ? void 0 : _a2.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        (_b = btns[(idx - 1 + btns.length) % btns.length]) == null ? void 0 : _b.focus();
      }
    };
    const onScroll = () => closeMenus();
    menu.addEventListener("click", (e) => {
      const b = e.target.closest(".menu__item");
      if (!b) return;
      closeMenus();
      onSelect(b.dataset.value);
    });
    setTimeout(() => {
      document.addEventListener("pointerdown", onDoc);
      document.addEventListener("keydown", onKey);
      window.addEventListener("resize", onScroll);
      document.addEventListener("scroll", onScroll, true);
    });
    (_a = menu.querySelector(".menu__item")) == null ? void 0 : _a.focus({ preventScroll: true });
    openMenuEl = {
      anchor,
      cleanup() {
        anchor.setAttribute("aria-expanded", "false");
        document.removeEventListener("pointerdown", onDoc);
        document.removeEventListener("keydown", onKey);
        window.removeEventListener("resize", onScroll);
        document.removeEventListener("scroll", onScroll, true);
        menu.remove();
      }
    };
  }
  function setLoading(btn, loading, label) {
    if (!btn) return;
    if (loading) {
      btn.dataset.label = btn.innerHTML;
      btn.disabled = true;
      btn.classList.add("is-loading");
      btn.innerHTML = `<span class="spinner" aria-hidden="true"></span><span>${esc(label || "Please wait…")}</span>`;
    } else {
      btn.disabled = false;
      btn.classList.remove("is-loading");
      if (btn.dataset.label) btn.innerHTML = btn.dataset.label;
    }
  }
  function setFieldError(input, message) {
    const field = input == null ? void 0 : input.closest(".field");
    if (!field) return;
    field.classList.add("has-error");
    input.setAttribute("aria-invalid", "true");
    const msg = field.querySelector(".field__msg");
    if (msg) msg.textContent = message;
  }
  function clearErrors(form) {
    $$(".field.has-error", form).forEach((f2) => f2.classList.remove("has-error"));
    $$("[aria-invalid]", form).forEach((i) => i.removeAttribute("aria-invalid"));
    $$(".field__msg", form).forEach((m) => m.textContent = "");
    const banner = form.querySelector(".form-alert");
    if (banner) banner.hidden = true;
  }
  function showFormAlert(form, message) {
    const banner = form.querySelector(".form-alert");
    if (!banner) return toast(message, { type: "error" });
    banner.innerHTML = `${icon("alertCircle")}<span>${esc(message)}</span>`;
    banner.hidden = false;
  }
  function focusFirstError(form) {
    var _a;
    (_a = form.querySelector('[aria-invalid="true"]')) == null ? void 0 : _a.focus();
  }
  function bindPasswordToggles(root) {
    root.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-toggle-pw]");
      if (!btn) return;
      const input = btn.parentElement.querySelector("input");
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      btn.innerHTML = icon(show ? "eyeOff" : "eye");
      btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
  }
  function liveClearErrors(form) {
    const handler = (e) => {
      var _a, _b;
      const field = (_b = (_a = e.target).closest) == null ? void 0 : _b.call(_a, ".field");
      if (!field || !field.classList.contains("has-error")) return;
      field.classList.remove("has-error");
      field.querySelectorAll("[aria-invalid]").forEach((i) => i.removeAttribute("aria-invalid"));
      const msg = field.querySelector(".field__msg");
      if (msg) msg.textContent = "";
    };
    form.addEventListener("input", handler);
    form.addEventListener("change", handler);
  }
  const MAP_W = 1e3;
  const MAP_H = 700;
  const METERS_PER_UNIT = 4.65;
  function mulberry32(seed2) {
    let a = seed2 >>> 0;
    return function next() {
      a = a + 1831565813 >>> 0;
      let t = a;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const rand = mulberry32(4172);
  const ANGLE = -0.27;
  const SX = 94;
  const SY = 86;
  const CI = 7;
  const CJ = 8;
  const NI = 15;
  const NJ = 17;
  const key = (i, j) => `${i}:${j}`;
  const nodes = /* @__PURE__ */ new Map();
  for (let i = 0; i < NI; i++) {
    for (let j = 0; j < NJ; j++) {
      const bx = (i - CI) * SX;
      const by = (j - CJ) * SY;
      const x = 500 + bx * Math.cos(ANGLE) - by * Math.sin(ANGLE) + (rand() - 0.5) * 28;
      const y = 350 + bx * Math.sin(ANGLE) + by * Math.cos(ANGLE) + (rand() - 0.5) * 24;
      nodes.set(key(i, j), { id: key(i, j), i, j, x, y });
    }
  }
  const node = (i, j) => nodes.get(key(i, j));
  const inDraw = (n) => n.x > -170 && n.x < MAP_W + 170 && n.y > -170 && n.y < MAP_H + 170;
  const inRoute = (n) => n.x > 26 && n.x < MAP_W - 26 && n.y > 26 && n.y < MAP_H - 26;
  const edges = [];
  for (const n of nodes.values()) {
    for (const [di, dj] of [[1, 0], [0, 1]]) {
      const m = node(n.i + di, n.j + dj);
      if (!m || !inDraw(n) && !inDraw(m)) continue;
      const major = dj === 1 && n.i % 4 === 2 || di === 1 && n.j % 4 === 1;
      edges.push({ a: n, b: m, major, line: dj === 1 ? `c${n.i}` : `r${n.j}` });
    }
  }
  function neighbors(n) {
    const out = [];
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const m = node(n.i + di, n.j + dj);
      if (m && inRoute(m)) out.push(m);
    }
    return out;
  }
  const TARGETS = [
    { id: "library", name: "Library", x: 330, y: 245 },
    { id: "science-block", name: "Science Block", x: 590, y: 170 },
    { id: "residence", name: "Residence", x: 740, y: 480 },
    { id: "student-centre", name: "Student Centre", x: 505, y: 400 },
    { id: "parking-lot", name: "Parking Lot", x: 200, y: 525 },
    { id: "admin-building", name: "Admin Building", x: 830, y: 225 },
    { id: "sports-field", name: "Sports Field", x: 640, y: 610 },
    { id: "main-gate", name: "Main Gate", x: 100, y: 320 },
    { id: "cafeteria", name: "Cafeteria", x: 395, y: 560 },
    { id: "lecture-halls", name: "Lecture Halls", x: 890, y: 400 },
    { id: "security-office", name: "Security Office", x: 240, y: 380 }
  ];
  function nearestNode(x, y, exclude) {
    let best = null;
    let bd = Infinity;
    for (const n of nodes.values()) {
      if (!inRoute(n) || exclude && exclude.has(n.id)) continue;
      const d = Math.hypot(n.x - x, n.y - y);
      if (d < bd) {
        bd = d;
        best = n;
      }
    }
    return best;
  }
  const taken = /* @__PURE__ */ new Set();
  const locations = TARGETS.map((t) => {
    const n = nearestNode(t.x, t.y, taken);
    taken.add(n.id);
    return { id: t.id, name: t.name, x: n.x, y: n.y, nodeId: n.id };
  });
  const locationById = (id) => locations.find((l) => l.id === id) || null;
  function nearestLocation(x, y) {
    let best = null;
    let bd = Infinity;
    for (const l of locations) {
      const d = Math.hypot(l.x - x, l.y - y);
      if (d < bd) {
        bd = d;
        best = l;
      }
    }
    return { location: best, distance: bd };
  }
  const hp1 = nearestNode(430, 300, taken);
  taken.add(hp1.id);
  const hp2 = nearestNode(690, 545, taken);
  taken.add(hp2.id);
  const office = locationById("security-office");
  const helpPoints = [
    { id: "hp-office", name: "Security Office", note: "Staffed 24 hours", x: office.x, y: office.y },
    { id: "hp-central", name: "Emergency help point", note: "Call button and lighting", x: hp1.x, y: hp1.y },
    { id: "hp-south", name: "Emergency help point", note: "Call button and lighting", x: hp2.x, y: hp2.y }
  ];
  const cells = [];
  for (let i = 0; i < NI - 1; i++) {
    for (let j = 0; j < NJ - 1; j++) {
      const p = [node(i, j), node(i + 1, j), node(i + 1, j + 1), node(i, j + 1)];
      if (!p.some(inDraw)) continue;
      const cx = (p[0].x + p[1].x + p[2].x + p[3].x) / 4;
      const cy = (p[0].y + p[1].y + p[2].y + p[3].y) / 4;
      const r = rand();
      cells.push({
        pts: p.map(({ x, y }) => ({ x, y })),
        cx,
        cy,
        type: r < 0.31 ? "park" : r < 0.335 ? "water" : "built",
        seed: Math.floor(rand() * 1e9)
      });
    }
  }
  function nearestCell(x, y) {
    return cells.reduce((best, c) => Math.hypot(c.cx - x, c.cy - y) < Math.hypot(best.cx - x, best.cy - y) ? c : best);
  }
  nearestCell(660, 640).type = "sports";
  nearestCell(170, 560).type = "parking";
  nearestCell(300, 215).type = "built";
  const STREETS = ["University Ave", "College Rd", "Jacaranda St", "Library Walk", "Science Way", "Oak Lane", "Residence Rd"];
  const streetLabels = [];
  {
    const used = /* @__PURE__ */ new Set();
    for (const e of edges) {
      if (!e.major || used.has(e.line)) continue;
      const mx = (e.a.x + e.b.x) / 2;
      const my = (e.a.y + e.b.y) / 2;
      if (mx < 120 || mx > 880 || my < 90 || my > 610) continue;
      used.add(e.line);
      let ang = Math.atan2(e.b.y - e.a.y, e.b.x - e.a.x) * 180 / Math.PI;
      if (ang > 90) ang -= 180;
      if (ang < -90) ang += 180;
      streetLabels.push({ x: mx, y: my, angle: ang, name: STREETS[streetLabels.length % STREETS.length] });
    }
  }
  function findPath(startId, endId, cost = (a, b, len) => len) {
    if (startId === endId) return [nodes.get(startId)];
    const dist = /* @__PURE__ */ new Map([[startId, 0]]);
    const prev = /* @__PURE__ */ new Map();
    const open = /* @__PURE__ */ new Set([startId]);
    const done = /* @__PURE__ */ new Set();
    while (open.size) {
      let u = null;
      let best = Infinity;
      for (const id of open) {
        const v = dist.get(id);
        if (v < best) {
          best = v;
          u = id;
        }
      }
      open.delete(u);
      if (u === endId) break;
      done.add(u);
      const un = nodes.get(u);
      for (const m of neighbors(un)) {
        if (done.has(m.id)) continue;
        const len = Math.hypot(m.x - un.x, m.y - un.y);
        const nd = best + cost(un, m, len);
        if (nd < (dist.get(m.id) ?? Infinity)) {
          dist.set(m.id, nd);
          prev.set(m.id, u);
          open.add(m.id);
        }
      }
    }
    if (!dist.has(endId)) return null;
    const path = [endId];
    while (path[0] !== startId) path.unshift(prev.get(path[0]));
    return path.map((id) => nodes.get(id));
  }
  function polylineLength(points) {
    let total = 0;
    for (let i = 1; i < points.length; i++) total += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
    return total;
  }
  function loopPath(locationIds) {
    const pts2 = [];
    locationIds.forEach((id, k) => {
      const a = locationById(id);
      const b = locationById(locationIds[(k + 1) % locationIds.length]);
      const seg = findPath(a.nodeId, b.nodeId) || [];
      pts2.push(...k ? seg.slice(1) : seg);
    });
    return pts2.map(({ x, y }) => ({ x, y }));
  }
  function pointAlong(points, distance) {
    const total = polylineLength(points);
    if (!total) return points[0];
    let d = (distance % total + total) % total;
    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1];
      const b = points[i];
      const len = Math.hypot(b.x - a.x, b.y - a.y);
      if (d <= len) {
        const t = len ? d / len : 0;
        return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
      }
      d -= len;
    }
    return points[points.length - 1];
  }
  const KEY = "cst-db-v3";
  const DAY = 864e5;
  function at(daysAgo, h, m) {
    const d = startOfDay();
    d.setDate(d.getDate() - daysAgo);
    d.setHours(h, m, 0, 0);
    return d;
  }
  function past(date, minGapMin = 5) {
    const limit = Date.now() - minGapMin * 6e4;
    return new Date(Math.min(date.getTime(), limit));
  }
  const jitter = [
    [6, -4],
    [-5, 5],
    [4, 6],
    [-6, -3],
    [5, 2],
    [-3, 6],
    [2, -6],
    [-4, -5]
  ];
  function incident(n, type, locationId, reportedAt, status, extra = {}) {
    const loc = locationById(locationId);
    const [jx, jy] = jitter[n % jitter.length];
    const reported = reportedAt.toISOString();
    const timeline = [{ at: reported, label: "Report submitted", by: extra.reporterName || "Campus user" }];
    if (status !== "New") {
      timeline.push({ at: new Date(reportedAt.getTime() + 14 * 6e4).toISOString(), label: "Status changed to In Progress", by: "S. Officer" });
    }
    if (status === "Resolved") {
      timeline.push({ at: extra.resolvedAt || new Date(reportedAt.getTime() + 95 * 6e4).toISOString(), label: "Marked as Resolved", by: "S. Officer" });
    }
    return {
      id: `CS-2025-${String(n).padStart(4, "0")}`,
      type,
      locationId,
      location: loc.name,
      x: loc.x + jx,
      y: loc.y + jy,
      reportedAt: reported,
      status,
      priority: extra.priority || (type === "Medical" || type === "Theft" ? "High" : "Medium"),
      description: extra.description || "",
      reporterId: extra.reporterId || "u-other",
      reporterName: extra.reporterName || "Campus user",
      assignedTo: extra.assignedTo || null,
      resolvedAt: status === "Resolved" ? extra.resolvedAt || new Date(reportedAt.getTime() + 95 * 6e4).toISOString() : null,
      photo: null,
      timeline
    };
  }
  function seed() {
    const theftAt = past(at(0, 10, 24), 20);
    const suspAt = past(new Date(Math.min(at(0, 8, 50).getTime(), theftAt.getTime() - 90 * 6e4)), 30);
    const incidents2 = [
      incident(141, "Theft", "library", theftAt, "New", {
        description: "Laptop bag taken from a study desk on level 2 while the owner was away for about ten minutes.",
        reporterId: "u-alice",
        reporterName: "Alice Student",
        priority: "High"
      }),
      incident(140, "Suspicious Activity", "science-block", suspAt, "In Progress", {
        description: "Two people trying door handles of the labs along the east corridor.",
        reporterName: "Thabo M.",
        assignedTo: "p-1",
        priority: "Medium"
      }),
      incident(139, "Medical", "residence", at(1, 20, 30), "Resolved", {
        description: "Student fainted in the common room. Campus clinic responded.",
        reporterId: "u-alice",
        reporterName: "Alice Student",
        assignedTo: "p-2"
      }),
      incident(138, "Vandalism", "student-centre", at(1, 9, 15), "Resolved", {
        description: "Graffiti sprayed on the entrance wall next to the notice boards.",
        reporterName: "Lerato K."
      }),
      incident(137, "Theft", "parking-lot", at(1, 8, 5), "Resolved", {
        description: "Side mirror stolen from a parked car in row C.",
        reporterName: "James P."
      }),
      // Still open from earlier in the week.
      incident(136, "Suspicious Activity", "sports-field", at(2, 19, 40), "New", {
        description: "Group loitering near the equipment shed after closing.",
        reporterName: "Night staff"
      }),
      incident(135, "Other", "main-gate", at(2, 14, 10), "In Progress", {
        description: "Section of the perimeter fence is damaged near the pedestrian gate.",
        reporterName: "Facilities",
        priority: "Low",
        assignedTo: "p-3"
      }),
      incident(134, "Vandalism", "lecture-halls", at(3, 11, 20), "In Progress", {
        description: "Projector cables cut in Hall B.",
        reporterName: "Dr. N. Dlamini",
        assignedTo: "p-3"
      })
    ];
    const backlog = [
      ["Theft", "cafeteria"],
      ["Other", "admin-building"],
      ["Vandalism", "parking-lot"],
      ["Theft", "library"],
      ["Suspicious Activity", "residence"],
      ["Medical", "sports-field"],
      ["Theft", "student-centre"],
      ["Other", "lecture-halls"],
      ["Vandalism", "science-block"],
      ["Theft", "residence"],
      ["Suspicious Activity", "library"],
      ["Other", "cafeteria"]
    ];
    backlog.forEach(([type, loc], i) => {
      const resolvedAt = past(at(0, 6, 30 + i * 12), 2).toISOString();
      incidents2.push(
        incident(133 - i, type, loc, at(3 + i % 5, 9 + i % 9, 5 * i), "Resolved", {
          resolvedAt,
          description: "Followed up by patrol and closed after verification.",
          reporterName: ["Campus user", "Residence staff", "Library staff"][i % 3],
          reporterId: i === 3 ? "u-alice" : "u-other"
        })
      );
    });
    const history2 = ["Theft", "Vandalism", "Theft", "Suspicious Activity", "Medical", "Other", "Theft", "Vandalism", "Suspicious Activity", "Theft"];
    const hLocs = ["library", "parking-lot", "student-centre", "residence", "cafeteria", "main-gate", "library", "sports-field", "science-block", "parking-lot"];
    history2.forEach((type, i) => {
      incidents2.push(
        incident(121 - i, type, hLocs[i], at(9 + i * 2, 10 + i % 8, 15), "Resolved", {
          description: "Resolved incident from earlier this month.",
          reporterName: "Campus user"
        })
      );
    });
    const users = [
      { id: "u-alice", role: "student", name: "Alice Student", firstName: "Alice", email: "alice@campus.ac.za", campusId: "STU-20231", password: "password123", phone: "+27 71 234 5678", department: "Faculty of Engineering", emergencyContact: "Mary Student · +27 82 555 0199" },
      { id: "u-officer", role: "security", name: "S. Officer", firstName: "Sipho", email: "officer@campus.ac.za", campusId: "SEC-0042", password: "password123", phone: "+27 72 300 4412", department: "Campus Protection Services", emergencyContact: "Control room · ext. 4000" }
    ];
    const n = (id, userId, title, body, minutesAgo, read, link) => ({
      id,
      userId,
      title,
      body,
      at: new Date(Date.now() - minutesAgo * 6e4).toISOString(),
      read,
      link
    });
    const theftMin = Math.max(20, Math.round((Date.now() - theftAt.getTime()) / 6e4));
    const notifications2 = [
      n("n1", "u-alice", "New incident near Library", "Theft reported at the Library. Keep belongings with you.", theftMin, false, "#/incidents/CS-2025-0141"),
      n("n2", "u-alice", "Campus alert", "Street lights are out on Oak Lane. Use University Ave after dark.", theftMin + 70, false, "alerts"),
      n("n3", "u-alice", "Your report was resolved", "Report #CS-2025-0139 (Medical, Residence) has been resolved.", 900, false, "#/incidents/CS-2025-0139"),
      n("n4", "u-alice", "Safe route saved", "Library → Student Centre was added to your routes.", 2900, true, "#/routes"),
      n("s1", "u-officer", "New incident: Theft", "Theft reported at Library by Alice Student.", theftMin, false, "#/incidents/CS-2025-0141"),
      n("s2", "u-officer", "Patrol check-in", "Officer L. Naidoo checked in at Residence.", theftMin + 25, false, "#/patrols"),
      n("s3", "u-officer", "Incident escalated", "Suspicious Activity at Science Block is now In Progress.", theftMin + 80, false, "#/incidents/CS-2025-0140"),
      n("s4", "u-officer", "Daily report ready", "Yesterday’s incident summary is available in Reports.", 700, true, "#/reports")
    ];
    const alerts2 = [
      { id: "a1", level: "warning", title: "Street lights out on Oak Lane", body: "Facilities are repairing the lights. Use University Ave after dark.", at: new Date(Date.now() - (theftMin + 70) * 6e4).toISOString(), active: true },
      { id: "a2", level: "info", title: "Library closing early on Friday", body: "The Library closes at 18:00 this Friday.", at: at(3, 9, 0).toISOString(), active: false }
    ];
    const patrols2 = [
      { id: "p-1", officer: "Officer T. Mokoena", callSign: "Alpha 1", onDuty: true, loop: ["security-office", "library", "science-block", "admin-building"], speed: 26, status: "Responding" },
      { id: "p-2", officer: "Officer L. Naidoo", callSign: "Bravo 2", onDuty: true, loop: ["student-centre", "residence", "sports-field", "cafeteria"], speed: 22, status: "Patrolling" },
      { id: "p-3", officer: "Officer J. Smith", callSign: "Charlie 3", onDuty: true, loop: ["main-gate", "parking-lot", "cafeteria", "security-office"], speed: 18, status: "Patrolling" },
      { id: "p-4", officer: "Officer K. Pillay", callSign: "Delta 4", onDuty: false, loop: ["lecture-halls", "residence"], speed: 20, status: "Off duty" },
      { id: "p-5", officer: "Officer M. van Wyk", callSign: "Echo 5", onDuty: false, loop: ["admin-building", "lecture-halls"], speed: 20, status: "Off duty" }
    ];
    const savedRoutes = [
      { id: "r1", userId: "u-alice", from: "library", to: "student-centre" },
      { id: "r2", userId: "u-alice", from: "residence", to: "main-gate" }
    ];
    const reports2 = [
      { id: "RPT-0012", title: "Weekly incident summary", from: at(8, 0, 0).toISOString(), to: at(1, 0, 0).toISOString(), type: "All", createdAt: at(1, 7, 30).toISOString(), count: 17 },
      { id: "RPT-0011", title: "Theft hotspots review", from: at(30, 0, 0).toISOString(), to: at(1, 0, 0).toISOString(), type: "Theft", createdAt: at(4, 15, 10).toISOString(), count: 9 }
    ];
    const settings2 = {
      "u-officer": { soundAlerts: true, autoRefresh: true, refreshInterval: "30", emailDigest: false, showPatrols: true },
      "u-alice": { pushAlerts: true, nearbyOnly: false, emailDigest: true, shareLocation: true }
    };
    return { seedDay: startOfDay().getTime(), nextNumber: 142, incidents: incidents2, users, notifications: notifications2, alerts: alerts2, patrols: patrols2, savedRoutes, reports: reports2, settings: settings2, simulatedLive: false };
  }
  function shift(obj, delta) {
    if (Array.isArray(obj)) return obj.map((v) => shift(v, delta));
    if (obj && typeof obj === "object") {
      const out = {};
      for (const [k, v] of Object.entries(obj)) out[k] = shift(v, delta);
      return out;
    }
    if (typeof obj === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(obj)) {
      return new Date(new Date(obj).getTime() + delta).toISOString();
    }
    return obj;
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const data = JSON.parse(raw);
        const today = startOfDay().getTime();
        if (data.seedDay !== today) {
          const days = Math.round((today - data.seedDay) / DAY);
          const shifted = shift(data, days * DAY);
          shifted.seedDay = today;
          return shifted;
        }
        return data;
      }
    } catch {
    }
    return seed();
  }
  const db = load();
  function persist() {
    try {
      const copy = { ...db, incidents: db.incidents.map((i) => ({ ...i, photo: i.photo ? { name: i.photo.name } : null })) };
      localStorage.setItem(KEY, JSON.stringify(copy));
    } catch {
    }
  }
  function resetDb() {
    try {
      localStorage.removeItem(KEY);
      localStorage.removeItem("cst-session");
    } catch {
    }
  }
  persist();
  const listeners = /* @__PURE__ */ new Map();
  function on(evt, fn) {
    if (!listeners.has(evt)) listeners.set(evt, /* @__PURE__ */ new Set());
    listeners.get(evt).add(fn);
    return () => {
      var _a;
      return (_a = listeners.get(evt)) == null ? void 0 : _a.delete(fn);
    };
  }
  function emit(evt, payload) {
    var _a;
    (_a = listeners.get(evt)) == null ? void 0 : _a.forEach((fn) => fn(payload));
  }
  let failNext = 0;
  class ApiError extends Error {
    constructor(message, { code = "error", field } = {}) {
      super(message);
      this.code = code;
      this.field = field;
    }
  }
  function request(fn, { min = 280, max = 720 } = {}) {
    return new Promise((resolve, reject) => {
      const ms = min + Math.random() * (max - min);
      setTimeout(() => {
        if (typeof navigator !== "undefined" && navigator.onLine === false) {
          reject(new ApiError("You appear to be offline. Check your connection and try again.", { code: "offline" }));
          return;
        }
        if (failNext > 0) {
          failNext -= 1;
          reject(new ApiError("The server did not respond. Please try again.", { code: "network" }));
          return;
        }
        try {
          resolve(structuredClone(fn()));
        } catch (err) {
          reject(err);
        }
      }, ms);
    });
  }
  const clone = (v) => structuredClone(v);
  const SESSION_KEY = "cst-session";
  let session = null;
  try {
    const raw = localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (db.users.some((u) => u.id === s.userId)) session = s;
    }
  } catch {
    session = null;
  }
  function publicUser(u) {
    if (!u) return null;
    const { password, ...rest } = u;
    return clone(rest);
  }
  function currentUser() {
    return session ? publicUser(db.users.find((u) => u.id === session.userId)) : null;
  }
  function me() {
    const u = session && db.users.find((x) => x.id === session.userId);
    if (!u) throw new ApiError("Your session has expired. Please log in again.", { code: "auth" });
    return u;
  }
  function startSession(user, remember = true) {
    session = { userId: user.id, at: Date.now() };
    try {
      (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, JSON.stringify(session));
    } catch {
    }
    emit("auth", publicUser(user));
    return publicUser(user);
  }
  const auth = {
    login({ identifier, password, role, remember = true }) {
      return request(() => {
        const id = String(identifier || "").trim().toLowerCase();
        const user = db.users.find((u) => u.email.toLowerCase() === id || u.campusId.toLowerCase() === id);
        if (!user || user.password !== password) {
          throw new ApiError("Incorrect login details. Demo accounts: alice@campus.ac.za or officer@campus.ac.za, password “password123”.", { code: "credentials" });
        }
        if (role && user.role !== role) {
          const other = user.role === "security" ? "Security" : "Student";
          throw new ApiError(`This account is registered for ${other} access. Use “Log in as ${other}” instead.`, { code: "role" });
        }
        return startSession(user, remember);
      }, { min: 600, max: 1e3 });
    },
    loginWithGoogle(role = "student") {
      return request(() => startSession(db.users.find((u) => u.role === role)), { min: 900, max: 1300 });
    },
    signup({ role, name, email, password }) {
      return request(() => {
        if (db.users.some((u) => u.email.toLowerCase() === email.trim().toLowerCase())) {
          throw new ApiError("An account with this email already exists.", { field: "email" });
        }
        const first = name.trim().split(/\s+/)[0];
        const user = {
          id: `u-${Date.now()}`,
          role,
          name: name.trim(),
          firstName: first,
          email: email.trim(),
          campusId: `${role === "security" ? "SEC" : "STU"}-${String(Math.floor(1e4 + Math.random() * 89999))}`,
          password,
          phone: "",
          department: role === "security" ? "Campus Protection Services" : "",
          emergencyContact: ""
        };
        db.users.push(user);
        db.settings[user.id] = role === "security" ? { soundAlerts: true, autoRefresh: true, refreshInterval: "30", emailDigest: false, showPatrols: true } : { pushAlerts: true, nearbyOnly: false, emailDigest: true, shareLocation: true };
        db.notifications.push({ id: `n-${Date.now()}`, userId: user.id, title: "Welcome to CampusSafe Twin", body: "Your account is ready. Explore the campus map and safe routes.", at: (/* @__PURE__ */ new Date()).toISOString(), read: false, link: "#/dashboard" });
        persist();
        return startSession(user);
      }, { min: 800, max: 1200 });
    },
    requestPasswordReset(email) {
      return request(() => {
        if (!isEmail(email)) throw new ApiError("Enter a valid email address.", { field: "email" });
        return { sent: true };
      });
    },
    logout() {
      session = null;
      try {
        localStorage.removeItem(SESSION_KEY);
        sessionStorage.removeItem(SESSION_KEY);
      } catch {
      }
      emit("auth", null);
      return Promise.resolve();
    }
  };
  const INCIDENT_TYPES = ["Theft", "Suspicious Activity", "Medical", "Vandalism", "Other"];
  const STATUSES = ["New", "In Progress", "Resolved"];
  function byDate(a, b) {
    return new Date(b.reportedAt) - new Date(a.reportedAt);
  }
  const incidents = {
    list({ type = "", status = "", from = null, to = null, q = "", mine = false, limit = 0 } = {}) {
      return request(() => {
        const u = me();
        const query = q.trim().toLowerCase();
        let rows = db.incidents.filter((i) => {
          if (type && i.type !== type) return false;
          if (status && i.status !== status) return false;
          if (mine && i.reporterId !== u.id) return false;
          const t = new Date(i.reportedAt);
          if (from && t < from) return false;
          if (to && t > to) return false;
          if (query && !`${i.type} ${i.location} ${i.id} ${i.description} ${i.status}`.toLowerCase().includes(query)) return false;
          return true;
        });
        rows.sort(byDate);
        if (limit) rows = rows.slice(0, limit);
        return rows;
      });
    },
    get(id) {
      return request(() => {
        me();
        const inc = db.incidents.find((i) => i.id === id);
        if (!inc) throw new ApiError(`Incident ${id} could not be found.`, { code: "not_found" });
        const patrol = inc.assignedTo ? db.patrols.find((p) => p.id === inc.assignedTo) : null;
        return { ...inc, patrol: patrol ? { id: patrol.id, officer: patrol.officer, callSign: patrol.callSign } : null };
      });
    },
    create({ type, locationId, x, y, description, photo }) {
      return request(() => {
        const u = me();
        if (!INCIDENT_TYPES.includes(type)) throw new ApiError("Select an incident type.", { field: "type" });
        const loc = locationById(locationId);
        if (!loc) throw new ApiError("Choose a location from the list or the map.", { field: "location" });
        if (!description || description.trim().length < 10) throw new ApiError("Add a short description (at least 10 characters).", { field: "description" });
        const now = (/* @__PURE__ */ new Date()).toISOString();
        const inc = {
          id: `CS-2025-${String(db.nextNumber).padStart(4, "0")}`,
          type,
          locationId,
          location: loc.name,
          x: x ?? loc.x,
          y: y ?? loc.y,
          reportedAt: now,
          status: "New",
          priority: type === "Medical" || type === "Theft" ? "High" : "Medium",
          description: description.trim(),
          reporterId: u.id,
          reporterName: u.name,
          assignedTo: null,
          resolvedAt: null,
          photo: photo || null,
          timeline: [{ at: now, label: "Report submitted", by: u.name }]
        };
        db.nextNumber += 1;
        db.incidents.unshift(inc);
        db.users.filter((x2) => x2.role === "security").forEach((s) => {
          db.notifications.push({ id: `n-${Date.now()}-${s.id}`, userId: s.id, title: `New incident: ${type}`, body: `${type} reported at ${loc.name} by ${u.name}.`, at: now, read: false, link: `#/incidents/${inc.id}` });
        });
        persist();
        emit("incidents");
        emit("notifications");
        return inc;
      }, { min: 900, max: 1400 });
    },
    updateStatus(id, status, note = "") {
      return request(() => {
        const u = me();
        if (u.role !== "security") throw new ApiError("Only security staff can change an incident status.", { code: "forbidden" });
        const inc = db.incidents.find((i) => i.id === id);
        if (!inc) throw new ApiError("Incident not found.", { code: "not_found" });
        if (!STATUSES.includes(status)) throw new ApiError("Unknown status.");
        if (inc.status === status && !note) return inc;
        const now = (/* @__PURE__ */ new Date()).toISOString();
        if (inc.status !== status) {
          inc.status = status;
          inc.resolvedAt = status === "Resolved" ? now : null;
          inc.timeline.push({ at: now, label: status === "Resolved" ? "Marked as Resolved" : `Status changed to ${status}`, by: u.name });
        }
        if (note.trim()) inc.timeline.push({ at: now, label: `Note: ${note.trim()}`, by: u.name });
        if (inc.reporterId !== "u-other" && inc.reporterId !== u.id) {
          db.notifications.push({ id: `n-${Date.now()}`, userId: inc.reporterId, title: `Report ${status === "Resolved" ? "resolved" : "updated"}`, body: `Report #${inc.id} (${inc.type}, ${inc.location}) is now ${status}.`, at: now, read: false, link: `#/incidents/${inc.id}` });
        }
        persist();
        emit("incidents");
        emit("notifications");
        return inc;
      });
    },
    assign(id, patrolId) {
      return request(() => {
        const u = me();
        const inc = db.incidents.find((i) => i.id === id);
        const p = db.patrols.find((x) => x.id === patrolId);
        if (!inc || !p) throw new ApiError("Could not assign this patrol.");
        if (!p.onDuty) throw new ApiError(`${p.officer} is off duty.`);
        inc.assignedTo = p.id;
        p.status = "Responding";
        inc.timeline.push({ at: (/* @__PURE__ */ new Date()).toISOString(), label: `${p.callSign} (${p.officer}) dispatched`, by: u.name });
        if (inc.status === "New") {
          inc.status = "In Progress";
          inc.timeline.push({ at: (/* @__PURE__ */ new Date()).toISOString(), label: "Status changed to In Progress", by: u.name });
        }
        persist();
        emit("incidents");
        return inc;
      });
    }
  };
  const dashboard = {
    student() {
      return request(() => {
        const u = me();
        const dayAgo = Date.now() - 864e5;
        return {
          recentCount: db.incidents.filter((i) => new Date(i.reportedAt).getTime() >= dayAgo).length,
          savedRoutes: db.savedRoutes.filter((r) => r.userId === u.id).length,
          activeAlerts: db.alerts.filter((a) => a.active).length,
          recent: [...db.incidents].sort(byDate).slice(0, 3),
          mapIncidents: db.incidents.filter((i) => new Date(i.reportedAt).getTime() >= dayAgo || i.status === "New")
        };
      });
    },
    security() {
      return request(() => {
        me();
        return {
          active: db.incidents.filter((i) => i.status !== "Resolved").length,
          resolvedToday: db.incidents.filter((i) => i.status === "Resolved" && isToday(i.resolvedAt)).length,
          patrolsOnDuty: db.patrols.filter((p) => p.onDuty).length,
          feed: [...db.incidents].sort(byDate).slice(0, 5),
          activeIncidents: db.incidents.filter((i) => i.status !== "Resolved")
        };
      });
    }
  };
  let liveTimer = null;
  function startLiveFeed(delay = 4e4) {
    if (db.simulatedLive || liveTimer) return;
    liveTimer = setTimeout(() => {
      if (!session || db.simulatedLive) return;
      const loc = locationById("cafeteria");
      const now = (/* @__PURE__ */ new Date()).toISOString();
      const inc = {
        id: `CS-2025-${String(db.nextNumber).padStart(4, "0")}`,
        type: "Suspicious Activity",
        locationId: loc.id,
        location: loc.name,
        x: loc.x + 4,
        y: loc.y - 3,
        reportedAt: now,
        status: "New",
        priority: "Medium",
        description: "Unknown person photographing the rear entrance and staff door codes.",
        reporterId: "u-other",
        reporterName: "Cafeteria staff",
        assignedTo: null,
        resolvedAt: null,
        photo: null,
        timeline: [{ at: now, label: "Report submitted", by: "Cafeteria staff" }]
      };
      db.nextNumber += 1;
      db.incidents.unshift(inc);
      db.simulatedLive = true;
      db.users.filter((x) => x.role === "security").forEach((s) => {
        db.notifications.push({ id: `n-live-${s.id}`, userId: s.id, title: "New incident: Suspicious Activity", body: "Suspicious Activity reported at Cafeteria.", at: now, read: false, link: `#/incidents/${inc.id}` });
      });
      persist();
      emit("incidents", { live: inc });
      emit("notifications");
    }, delay);
  }
  function stopLiveFeed() {
    clearTimeout(liveTimer);
    liveTimer = null;
  }
  const alerts = {
    list() {
      return request(() => [...db.alerts].sort((a, b) => b.active - a.active || new Date(b.at) - new Date(a.at)));
    }
  };
  const notifications = {
    list() {
      return request(() => {
        const u = me();
        return db.notifications.filter((n) => n.userId === u.id).sort((a, b) => new Date(b.at) - new Date(a.at));
      });
    },
    unreadCount() {
      if (!session) return 0;
      return db.notifications.filter((n) => n.userId === session.userId && !n.read).length;
    },
    markRead(id) {
      return request(() => {
        const n = db.notifications.find((x) => x.id === id);
        if (n) n.read = true;
        persist();
        emit("notifications");
        return n;
      }, { min: 80, max: 160 });
    },
    markAllRead() {
      return request(() => {
        const u = me();
        db.notifications.filter((n) => n.userId === u.id).forEach((n) => n.read = true);
        persist();
        emit("notifications");
        return true;
      });
    }
  };
  const patrols = {
    list() {
      return request(
        () => db.patrols.map((p) => ({
          ...p,
          path: loopPath(p.loop),
          assigned: db.incidents.filter((i) => i.assignedTo === p.id && i.status !== "Resolved").map((i) => ({ id: i.id, type: i.type, location: i.location }))
        }))
      );
    },
    setDuty(id, onDuty) {
      return request(() => {
        const p = db.patrols.find((x) => x.id === id);
        if (!p) throw new ApiError("Patrol not found.");
        p.onDuty = onDuty;
        p.status = onDuty ? "Patrolling" : "Off duty";
        persist();
        emit("patrols");
        return p;
      });
    }
  };
  const TYPE_ORDER = [
    { label: "Theft", color: "#f2a81d" },
    { label: "Vandalism", color: "#e5484d" },
    { label: "Suspicious Activity", color: "#e0474c" },
    { label: "Medical", color: "#17907a" },
    { label: "Other", color: "#f2c94c" }
  ];
  const RANGES = {
    "7d": { share: [34, 22, 18, 12, 14], total: 41, labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    "30d": { share: [31, 24, 17, 14, 14], total: 168 },
    "90d": { share: [29, 25, 19, 13, 14], total: 472 }
  };
  const analytics = {
    get(range = "7d") {
      return request(() => {
        me();
        const cfg = RANGES[range] || RANGES["7d"];
        const types = TYPE_ORDER.map((t, i) => ({ ...t, value: cfg.share[i], display: `${cfg.share[i]}%` }));
        const trend = [2, 6, 4, 7, 5, 8, 5, 7, 6, 9, 6, 8, 10];
        const trendLabels = ["Mon", "", "Tue", "", "Wed", "", "Thu", "", "Fri", "", "Sat", "", "Sun"];
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const trendTips = trend.map((_, i) => `${days[Math.floor(i / 2)] || "Sun"} ${i % 2 ? "evening" : "morning"}`);
        const spot = (id, r, dx = 0, dy = 0) => {
          const l = locationById(id);
          return { x: l.x + dx, y: l.y + dy, r };
        };
        return {
          range,
          total: cfg.total,
          active: db.incidents.filter((i) => i.status !== "Resolved").length,
          avgResponse: range === "7d" ? "11 min" : range === "30d" ? "13 min" : "14 min",
          resolutionRate: range === "7d" ? "87%" : range === "30d" ? "91%" : "92%",
          types,
          trend,
          trendLabels,
          trendTips,
          weekly: range === "7d" ? [5, 7, 4, 8, 6, 9, 2] : range === "30d" ? [38, 44, 41, 45] : [128, 151, 193],
          weeklyLabels: range === "7d" ? days : range === "30d" ? ["Wk 1", "Wk 2", "Wk 3", "Wk 4"] : ["Month 1", "Month 2", "Month 3"],
          byHour: [1, 0, 0, 1, 3, 5, 4, 6, 8, 7, 4, 2],
          byHourLabels: ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22"],
          byLocation: [
            { label: "Library", value: 12, color: "#1f63e6" },
            { label: "Parking Lot", value: 9, color: "#1f63e6" },
            { label: "Student Centre", value: 7, color: "#1f63e6" },
            { label: "Residence", value: 6, color: "#1f63e6" },
            { label: "Science Block", value: 4, color: "#1f63e6" }
          ],
          hotspots: [
            { ...spot("library", 58), name: "Library", count: 12 },
            { ...spot("student-centre", 64, -20, 40), name: "Student Centre", count: 7 },
            { ...spot("parking-lot", 60, 30, -40), name: "Parking Lot", count: 9 },
            { ...spot("science-block", 52), name: "Science Block", count: 4 },
            { ...spot("cafeteria", 56, 10, -10), name: "Cafeteria", count: 5 }
          ]
        };
      });
    }
  };
  function routeCost(active) {
    return (a, b, len) => {
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      let penalty = 0;
      for (const i of active) {
        const d = Math.hypot(i.x - mx, i.y - my);
        if (d < 90) penalty += (90 - d) * 2.2;
      }
      for (const h of helpPoints) {
        if (Math.hypot(h.x - mx, h.y - my) < 70) penalty -= len * 0.15;
      }
      return Math.max(len * 0.6, len + penalty);
    };
  }
  const routes = {
    find(fromId, toId) {
      return request(() => {
        const from = locationById(fromId);
        const to = locationById(toId);
        if (!from || !to) throw new ApiError("Choose both a start and a destination.");
        if (from.id === to.id) throw new ApiError("Start and destination must be different.", { field: "to" });
        const active = db.incidents.filter((i) => i.status !== "Resolved");
        const path = findPath(from.nodeId, to.nodeId, routeCost(active));
        if (!path) throw new ApiError("No walkable route was found between these places.");
        const points = path.map(({ x, y }) => ({ x, y }));
        const meters = polylineLength(points) * METERS_PER_UNIT;
        const enRoute = active.filter((i) => Math.hypot(i.x - from.x, i.y - from.y) > 60 && Math.hypot(i.x - to.x, i.y - to.y) > 60);
        let closest = Infinity;
        for (const p of points) for (const i of enRoute) closest = Math.min(closest, Math.hypot(p.x - i.x, p.y - i.y));
        const safety = closest > 60 ? "High" : closest > 30 ? "Medium" : "Low";
        const nearbyHelp = helpPoints.filter((h) => points.some((p) => Math.hypot(p.x - h.x, p.y - h.y) < 70));
        return {
          from,
          to,
          points,
          distance: meters >= 1e3 ? `${(meters / 1e3).toFixed(1)} km` : `${Math.round(meters / 10) * 10} m`,
          minutes: Math.max(1, Math.round(meters / 100)),
          safety,
          helpPoints: nearbyHelp,
          avoided: enRoute.filter((i) => points.every((p) => Math.hypot(p.x - i.x, p.y - i.y) > 45)).length
        };
      }, { min: 700, max: 1100 });
    },
    saved() {
      return request(() => {
        const u = me();
        return db.savedRoutes.filter((r) => r.userId === u.id).map((r) => {
          var _a, _b;
          return { ...r, fromName: (_a = locationById(r.from)) == null ? void 0 : _a.name, toName: (_b = locationById(r.to)) == null ? void 0 : _b.name };
        });
      }, { min: 120, max: 260 });
    },
    save(from, to) {
      return request(() => {
        const u = me();
        if (db.savedRoutes.some((r2) => r2.userId === u.id && r2.from === from && r2.to === to)) {
          throw new ApiError("This route is already in your saved routes.");
        }
        const r = { id: `r-${Date.now()}`, userId: u.id, from, to };
        db.savedRoutes.push(r);
        persist();
        emit("routes");
        return r;
      });
    },
    remove(id) {
      return request(() => {
        db.savedRoutes = db.savedRoutes.filter((r) => r.id !== id);
        persist();
        emit("routes");
        return true;
      });
    }
  };
  const reports = {
    list() {
      return request(() => [...db.reports].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    },
    generate({ from, to, type }) {
      return request(() => {
        if (!from || !to) throw new ApiError("Choose a start and end date.", { field: "from" });
        if (from > to) throw new ApiError("The start date must be before the end date.", { field: "to" });
        const rows = db.incidents.filter((i) => {
          const t = new Date(i.reportedAt);
          return t >= from && t <= to && (!type || type === "All" || i.type === type);
        });
        const id = `RPT-${String(13 + db.reports.length - 2).padStart(4, "0")}`;
        const report = { id, title: `${type && type !== "All" ? type : "All incidents"} report`, from: from.toISOString(), to: to.toISOString(), type: type || "All", createdAt: (/* @__PURE__ */ new Date()).toISOString(), count: rows.length };
        db.reports.push(report);
        persist();
        return report;
      }, { min: 900, max: 1500 });
    },
    csv(reportId) {
      return request(() => {
        const r = db.reports.find((x) => x.id === reportId);
        if (!r) throw new ApiError("Report not found.");
        const rows = db.incidents.filter((i) => {
          const t = new Date(i.reportedAt);
          return t >= new Date(r.from) && t <= new Date(r.to) && (r.type === "All" || i.type === r.type);
        });
        const head = "Reference,Type,Location,Reported,Status,Priority";
        const body = rows.map((i) => [i.id, i.type, i.location, formatDateTime(i.reportedAt), i.status, i.priority].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","));
        return { filename: `${r.id}.csv`, content: [head, ...body].join("\n") };
      });
    }
  };
  const profile = {
    update(patch) {
      return request(() => {
        const u = me();
        if ("name" in patch) {
          if (!patch.name.trim()) throw new ApiError("Name cannot be empty.", { field: "name" });
          u.name = patch.name.trim();
          u.firstName = u.name.split(/\s+/)[0];
        }
        if ("phone" in patch) {
          if (patch.phone && !/^\+?[\d\s()-]{7,}$/.test(patch.phone)) throw new ApiError("Enter a valid phone number.", { field: "phone" });
          u.phone = patch.phone.trim();
        }
        if ("emergencyContact" in patch) u.emergencyContact = patch.emergencyContact.trim();
        persist();
        emit("auth", publicUser(u));
        return publicUser(u);
      });
    },
    changePassword(current, next) {
      return request(() => {
        const u = me();
        if (u.password !== current) throw new ApiError("Your current password is incorrect.", { field: "current" });
        if (next.length < 8) throw new ApiError("Use at least 8 characters.", { field: "next" });
        u.password = next;
        persist();
        return true;
      });
    }
  };
  const settings = {
    get() {
      return request(() => db.settings[me().id] || {}, { min: 150, max: 300 });
    },
    update(patch) {
      return request(() => {
        const u = me();
        db.settings[u.id] = { ...db.settings[u.id] || {}, ...patch };
        persist();
        return db.settings[u.id];
      }, { min: 150, max: 300 });
    }
  };
  const campus = { locations, locationById, helpPoints, nearestLocationTo: nearestLocation };
  if (typeof window !== "undefined") {
    window.campusSafe = {
      failNext(n = 1) {
        failNext = n;
        return `Next ${n} API call(s) will fail.`;
      },
      reset() {
        resetDb();
        location.hash = "#/login";
        location.reload();
      }
    };
  }
  function statusPill(status, { tone = "security" } = {}) {
    const cls = status === "New" ? "pill--new" : status === "Resolved" ? "pill--resolved" : tone === "student" ? "pill--progress" : "pill--progress-blue";
    return `<span class="pill ${cls}">${esc(status)}</span>`;
  }
  function initials(name = "") {
    return name.replace(/[^A-Za-z\s]/g, "").trim().split(/\s+/).map((p) => p[0]).slice(0, 1).join("").toUpperCase() || "U";
  }
  function userChip(user) {
    if (user.role === "security") {
      return `<button type="button" class="user-chip user-chip--officer" data-user-menu aria-haspopup="menu" aria-expanded="false">
      <span class="user-chip__text"><span class="user-chip__name">${esc(user.name)}</span><span class="user-chip__status"><span class="dot"></span>Online</span></span>
      <span class="avatar avatar--photo" aria-hidden="true">${icon("userCircle")}</span>
    </button>`;
    }
    return `<button type="button" class="user-chip" data-user-menu aria-haspopup="menu" aria-expanded="false">
    <span class="avatar" aria-hidden="true">${esc(initials(user.firstName || user.name))}</span>
    <span class="user-chip__name">${esc(user.firstName || user.name)} <span class="user-chip__role">${user.role === "student" ? "Student" : "Security"}</span></span>
    ${icon("chevronDown", "user-chip__caret")}
  </button>`;
  }
  function pageHead({ title, subtitle = "", back = null, actions = "", titleId = "page-title" }) {
    return `<header class="page-head">
    <div class="page-head__main">
      ${back ? `<a class="page-head__back" href="${esc(back)}" data-back aria-label="Go back">${icon("arrowLeft")}</a>` : ""}
      <div class="page-head__titles">
        <h1 class="page-head__title" id="${titleId}">${esc(title)}</h1>
        ${subtitle ? `<p class="page-head__sub">${esc(subtitle)}</p>` : ""}
      </div>
    </div>
    ${actions ? `<div class="page-head__actions">${actions}</div>` : ""}
  </header>`;
  }
  function loadingState(label = "Loading…") {
    return `<div class="state" role="status"><span class="spinner spinner--lg" aria-hidden="true"></span><span>${esc(label)}</span></div>`;
  }
  function errorState(message, { retry = true } = {}) {
    return `<div class="state state--error" role="alert">
    <span class="state__icon">${icon("wifiOff")}</span>
    <span class="state__title">Something went wrong</span>
    <span class="state__text">${esc(message)}</span>
    ${retry ? `<button type="button" class="btn btn--outline btn--sm" data-retry>${icon("refresh")}Try again</button>` : ""}
  </div>`;
  }
  function emptyState({ title, text = "", iconName = "inbox", action = "" }) {
    return `<div class="state">
    <span class="state__icon">${icon(iconName)}</span>
    <span class="state__title">${esc(title)}</span>
    ${text ? `<span class="state__text">${esc(text)}</span>` : ""}
    ${action}
  </div>`;
  }
  async function loadInto(el, loader, render2, { loading, onError } = {}) {
    let alive = true;
    const run = async () => {
      var _a;
      if (loading !== false) el.innerHTML = loading || loadingState();
      try {
        const data = await loader();
        if (alive && el.isConnected) render2(data);
      } catch (err) {
        if (!alive || !el.isConnected) return;
        el.innerHTML = errorState(err.message || "Please try again.");
        (_a = el.querySelector("[data-retry]")) == null ? void 0 : _a.addEventListener("click", run, { once: true });
        onError == null ? void 0 : onError(err);
      }
    };
    await run();
    return () => {
      alive = false;
    };
  }
  function incidentPopup(inc, { link = true } = {}) {
    return `<div class="pop">
    <div class="pop__title">${esc(inc.type)}</div>
    <div class="pop__meta">${esc(inc.location)} · ${esc(formatTime(inc.reportedAt))}</div>
    <div class="pop__row">${statusPill(inc.status)}${link ? `<a class="pop__link" href="#/incidents/${esc(inc.id)}">Details</a>` : ""}</div>
  </div>`;
  }
  function incidentMarkers(list) {
    return list.map((i) => ({
      id: i.id,
      x: i.x,
      y: i.y,
      color: i.status === "Resolved" ? "#f5a524" : "#e5484d",
      label: `${i.type} at ${i.location}, ${i.status}`,
      data: i
    }));
  }
  function typeIcon(type, size = 26) {
    return `<span class="type-icon">${typeGlyph(type, size)}</span>`;
  }
  function statCard({ glyph, tint, title, value, valueTone = "", link, linkLabel, dot = "" }) {
    return `<article class="stat">
    <span class="stat__icon stat__icon--${tint}">${statGlyph[glyph]}</span>
    <div class="stat__body">
      <h2 class="stat__title">${esc(title)}</h2>
      <p class="stat__value ${valueTone}">${esc(value)}</p>
      <a class="stat__link${dot ? " stat__link--muted" : ""}" href="${esc(link)}">${esc(linkLabel)}${dot ? `<span class="dot" style="color:${dot}"></span>` : ""}</a>
    </div>
  </article>`;
  }
  function statSkeleton(n = 3) {
    return Array.from({ length: n }, () => `<article class="stat" aria-hidden="true"><span class="stat__icon skel"></span><div class="stat__body"><span class="skel" style="width:60%;height:12px"></span><span class="skel" style="width:24px;height:20px;margin:9px 0 10px"></span><span class="skel" style="width:40%;height:10px"></span></div></article>`).join("");
  }
  function openAlertsModal() {
    openModal({
      title: "Campus Alerts",
      size: "md",
      body: `<div class="alerts-list">${loadingState("Loading alerts…")}</div>`,
      onOpen(body) {
        const el = body.querySelector(".alerts-list");
        loadInto(el, () => alerts.list(), (list) => {
          el.innerHTML = list.length ? list.map((a) => `<article class="alert-item${a.active ? " is-active" : ""}">
              <span class="alert-item__icon">${icon(a.level === "warning" ? "warning" : "bell")}</span>
              <div><h3>${esc(a.title)}</h3><p>${esc(a.body)}</p><span class="alert-item__meta">${a.active ? '<span class="pill pill--new">Active</span>' : '<span class="pill pill--neutral">Ended</span>'}<span>${esc(formatDateTime(a.at))}</span></span></div>
            </article>`).join("") : emptyState({ title: "No alerts", text: "There are no campus alerts right now.", iconName: "bell" });
        });
      }
    });
  }
  function openPatrolNamesModal() {
    openModal({
      title: "Patrols On Duty",
      body: `<div class="names">${loadingState("Loading patrols…")}</div>`,
      onOpen(body, close) {
        const el = body.querySelector(".names");
        loadInto(el, () => patrols.list(), (list) => {
          var _a;
          const on2 = list.filter((p) => p.onDuty);
          el.innerHTML = on2.length ? `<ul class="name-list">${on2.map((p) => `<li><span class="avatar avatar--sm">${esc(initials(p.officer.replace("Officer ", "")))}</span><div><strong>${esc(p.officer)}</strong><span>${esc(p.callSign)} · ${esc(p.status)}</span></div></li>`).join("")}</ul>
             <div class="modal__actions"><a class="btn btn--primary" href="#/patrols" data-go>Open Map &amp; Patrols</a></div>` : emptyState({ title: "No patrols on duty", iconName: "users" });
          (_a = el.querySelector("[data-go]")) == null ? void 0 : _a.addEventListener("click", () => close());
        });
      }
    });
  }
  let cached = null;
  function campusScene() {
    if (cached) return cached;
    let windows = "";
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 11; col++) {
        const x = 360 + col * 38;
        const y = 330 + row * 50;
        const lit = (row * 7 + col * 3) % 5 === 0;
        windows += `<rect x="${x}" y="${y}" width="20" height="30" rx="1.5" fill="${lit ? "#ffd58c" : "#9db8dc"}" opacity="${lit ? 0.55 : 0.3}"/>`;
      }
    }
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 5; col++) {
        const x = 118 + col * 34;
        const y = 400 + row * 46;
        const lit = (row + col * 2) % 4 === 1;
        windows += `<rect x="${x}" y="${y}" width="17" height="26" rx="1.5" fill="${lit ? "#ffd58c" : "#9db8dc"}" opacity="${lit ? 0.5 : 0.26}"/>`;
      }
    }
    let trees = "";
    const clusters = [
      [40, 520, 90],
      [120, 610, 70],
      [270, 600, 60],
      [330, 640, 52],
      [520, 650, 64],
      [640, 630, 58],
      [760, 640, 76],
      [60, 300, 110],
      [150, 240, 80]
    ];
    clusters.forEach(([cx, cy, r], i) => {
      trees += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${i % 2 ? "#1c3c3a" : "#173532"}"/>`;
      trees += `<circle cx="${cx + r * 0.55}" cy="${cy + r * 0.2}" r="${r * 0.7}" fill="#1f4540"/>`;
      trees += `<circle cx="${cx - r * 0.5}" cy="${cy + r * 0.25}" r="${r * 0.62}" fill="#18393a"/>`;
    });
    cached = `<svg class="scene" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="scene-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b7fbf"/><stop offset="1" stop-color="#20508e"/></linearGradient>
      <linearGradient id="scene-shade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0c3a7a" stop-opacity=".42"/><stop offset=".55" stop-color="#062c64" stop-opacity=".66"/><stop offset="1" stop-color="#042253" stop-opacity=".86"/></linearGradient>
    </defs>
    <rect width="800" height="900" fill="url(#scene-sky)"/>
    <path d="M60 380 L220 380 L220 330 L262 300 L300 330 L300 380 L330 380 V700 H60Z" fill="#4a4f66"/>
    <path d="M330 300 L410 255 L470 300 L560 300 L600 250 L650 300 L800 300 V700 H330Z" fill="#5a4b55"/>
    <rect x="330" y="296" width="470" height="12" fill="#6d5c64"/>
    <rect x="600" y="210" width="26" height="60" fill="#5a4b55"/>
    ${windows}
    <rect y="690" width="800" height="210" fill="#28505a"/>
    <path d="M300 900 C380 800 460 760 520 700 L560 700 C520 770 470 820 440 900Z" fill="#6f8aa6" opacity=".45"/>
    ${trees}
    <rect width="800" height="900" fill="url(#scene-shade)"/>
  </svg>`;
    return cached;
  }
  const DESKTOP = "(min-width: 900px)";
  const pwField = ({ id, label, placeholder, autocomplete = "current-password" }) => `
  <div class="field">
    <label class="field__label" for="${id}">${label}</label>
    <div class="control">
      <input class="input has-trail" id="${id}" name="password" type="password" placeholder="${placeholder}" autocomplete="${autocomplete}" required />
      <button type="button" class="control__trail" data-toggle-pw aria-label="Show password">${icon("eye")}</button>
    </div>
    <p class="field__msg" aria-live="polite"></p>
  </div>`;
  const textField = ({ id, name, label, placeholder, type = "text", autocomplete = "" }) => `
  <div class="field">
    <label class="field__label" for="${id}">${label}</label>
    <input class="input" id="${id}" name="${name}" type="${type}" placeholder="${placeholder}" ${autocomplete ? `autocomplete="${autocomplete}"` : ""} required />
    <p class="field__msg" aria-live="polite"></p>
  </div>`;
  const googleBtn = (role) => `<button type="button" class="btn btn--outline btn--google btn--block" data-google="${role}">${googleLogo}<span>Continue with Google</span></button>`;
  function hero() {
    const feat = (ic, a, b) => `<li class="hero__feat"><span class="hero__feat-icon">${icon(ic)}</span><span>${a}<br />${b}</span></li>`;
    return `<section class="auth-hero" aria-label="About CampusSafe Twin">
    <div class="auth-hero__bg">${campusScene()}</div>
    <div class="auth-hero__content">
      <div class="hero__brand">
        ${logo("light", "hero__logo")}
        <div>
          <p class="hero__name">CampusSafe Twin</p>
          <p class="hero__tag">Safer Campuses. Smarter Decisions.</p>
        </div>
      </div>
      <p class="hero__lead">Report. Monitor. Navigate.</p>
      <p class="hero__text">A digital twin for a safer campus community.</p>
      <ul class="hero__feats">
        ${feat("hexEye", "Report", "Incidents")}
        ${feat("shieldCheck", "Live", "Monitoring")}
        ${feat("route", "Safe", "Routes")}
        ${feat("insights", "Data", "Insights")}
      </ul>
    </div>
  </section>`;
  }
  function welcomeForm() {
    return `<form class="auth-form" id="login-form" novalidate aria-labelledby="welcome-title">
    <h1 class="auth-form__title" id="welcome-title">Welcome Back</h1>
    <p class="auth-form__sub">Log in to your account to continue.</p>
    <div class="form-alert" role="alert" hidden></div>
    ${textField({ id: "login-email", name: "identifier", label: "Email address", placeholder: "you@example.com", type: "email", autocomplete: "username" })}
    ${pwField({ id: "login-password", label: "Password", placeholder: "Enter your password" })}
    <div class="auth-form__row">
      <label class="checkbox"><input type="checkbox" name="remember" checked />Remember me</label>
      <button type="button" class="link-btn auth-form__forgot" data-forgot>Forgot password?</button>
    </div>
    <button class="btn btn--primary btn--block" type="submit">Log In</button>
    <div class="divider">or</div>
    ${googleBtn("student")}
    <p class="auth-form__foot">Don't have an account? <a href="#/signup">Create account</a></p>
  </form>`;
  }
  function splash() {
    return `<section class="splash" aria-labelledby="splash-title">
    <div class="splash__bg">${campusScene()}</div>
    <div class="splash__brand">
      ${logo("light", "splash__logo")}
      <h1 class="splash__name" id="splash-title">CampusSafe Twin</h1>
      <p class="splash__tag">Safer Campuses. Smarter Decisions.</p>
    </div>
    <div class="splash__actions">
      <a class="btn btn--primary btn--block btn--xl" href="#/login/choose">Log In</a>
      <button type="button" class="btn btn--outline btn--google btn--block btn--xl" data-google="student">${googleLogo}<span>Continue with Google</span></button>
      <p class="splash__foot">Don't have an account? <a href="#/signup">Create account</a></p>
    </div>
  </section>`;
  }
  function screen(inner, { back = "#/login", label }) {
    return `<section class="m-screen" aria-label="${esc(label)}">
    <div class="m-screen__bar"><a class="icon-btn m-screen__back" href="${back}" data-back aria-label="Back">${icon("arrowLeft")}</a></div>
    <div class="m-screen__inner">${inner}</div>
  </section>`;
  }
  function chooseScreen() {
    return screen(
      `<div class="m-brand">${logo("dark", "m-brand__logo")}<p class="m-brand__name">CampusSafe Twin</p></div>
     <h1 class="m-title m-title--choose">Choose Login Type</h1>
     <div class="role-cards">
       <a class="role-card role-card--student" href="#/login/student">
         <span class="role-card__icon">${icon("cap")}</span>
         <span class="role-card__text"><span class="role-card__title">Log in as Student</span><span class="role-card__desc">Report incidents, view safe routes, track campus updates.</span></span>
         ${icon("chevronRight", "role-card__chev")}
       </a>
       <a class="role-card role-card--security" href="#/login/security">
         <span class="role-card__icon">${icon("shieldCheck")}</span>
         <span class="role-card__text"><span class="role-card__title">Log in as Security</span><span class="role-card__desc">View incident feed, manage status, access analytics.</span></span>
         ${icon("chevronRight", "role-card__chev")}
       </a>
     </div>`,
      { back: "#/login", label: "Choose login type" }
    );
  }
  function roleLoginScreen(role) {
    const student = role === "student";
    return screen(
      `<div class="m-brand">${logo("dark", "m-brand__logo")}</div>
     <h1 class="m-title">${student ? "Student Login" : "Security Login"}</h1>
     <p class="m-sub">Welcome back! Please log in.</p>
     <form class="m-form" id="login-form" data-role="${role}" novalidate>
       <div class="form-alert" role="alert" hidden></div>
       ${textField({ id: "role-id", name: "identifier", label: student ? "Student ID / Email" : "Staff ID / Email", placeholder: student ? "Enter your student ID or email" : "Enter your staff ID or email", autocomplete: "username" })}
       ${pwField({ id: "role-password", label: "Password", placeholder: "Enter your password" })}
       <button class="btn btn--primary btn--block btn--xl" type="submit">Log In</button>
       <div class="divider">or</div>
       ${googleBtn(role)}
       <a class="m-link" href="#/signup?role=${role}">${student ? "Create student account" : "Create security account"}</a>
     </form>`,
      { back: "#/login/choose", label: student ? "Student login" : "Security login" }
    );
  }
  function signupScreen(role) {
    return screen(
      `<div class="m-brand">${logo("dark", "m-brand__logo")}</div>
     <h1 class="m-title">Create Account</h1>
     <p class="m-sub">Join CampusSafe Twin</p>
     <form class="m-form m-form--compact" id="signup-form" novalidate>
       <div class="segmented" role="radiogroup" aria-label="Account type">
         <button type="button" role="radio" class="segmented__btn${role === "student" ? " is-active" : ""}" aria-checked="${role === "student"}" data-role="student">Student</button>
         <button type="button" role="radio" class="segmented__btn${role === "security" ? " is-active" : ""}" aria-checked="${role === "security"}" data-role="security">Security</button>
       </div>
       <div class="form-alert" role="alert" hidden></div>
       ${textField({ id: "su-name", name: "name", label: "Full Name", placeholder: "Enter your full name", autocomplete: "name" })}
       ${textField({ id: "su-email", name: "email", label: "Email Address", placeholder: "you@example.com", type: "email", autocomplete: "email" })}
       ${pwField({ id: "su-password", label: "Password", placeholder: "Create a password", autocomplete: "new-password" })}
       <button class="btn btn--primary btn--block btn--xl" type="submit">Create Account</button>
       <p class="m-foot">Already have an account? <a href="#/login">Log in</a></p>
     </form>`,
      { back: "#/login", label: "Create account" }
    );
  }
  function bindLogin(root, ctx) {
    const form = $("#login-form", root);
    if (!form) return;
    liveClearErrors(form);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearErrors(form);
      const idInput = form.elements.identifier;
      const pw = form.elements.password;
      const role = form.dataset.role;
      let ok = true;
      const value = idInput.value.trim();
      if (!value) {
        setFieldError(idInput, role ? "Enter your ID or email." : "Enter your email address.");
        ok = false;
      } else if (!role && !isEmail(value)) {
        setFieldError(idInput, "Enter a valid email address.");
        ok = false;
      }
      if (!pw.value) {
        setFieldError(pw, "Enter your password.");
        ok = false;
      }
      if (!ok) return focusFirstError(form);
      const btn = form.querySelector("[type=submit]");
      setLoading(btn, true, "Logging in…");
      try {
        const user = await auth.login({ identifier: value, password: pw.value, role, remember: form.elements.remember ? form.elements.remember.checked : true });
        toast(`Welcome back, ${user.firstName}.`, { type: "success" });
        ctx.navigate("#/dashboard");
      } catch (err) {
        setLoading(btn, false);
        showFormAlert(form, err.message);
        if (err.code === "credentials") pw.select();
      }
    });
  }
  function bindSignup(root, ctx) {
    const form = $("#signup-form", root);
    if (!form) return;
    liveClearErrors(form);
    let role = ctx.query.get("role") === "security" ? "security" : "student";
    form.querySelector(".segmented").addEventListener("click", (e) => {
      const b = e.target.closest("[data-role]");
      if (!b) return;
      role = b.dataset.role;
      form.querySelectorAll("[data-role]").forEach((x) => {
        x.classList.toggle("is-active", x === b);
        x.setAttribute("aria-checked", String(x === b));
      });
    });
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearErrors(form);
      const { name, email, password } = form.elements;
      let ok = true;
      if (name.value.trim().length < 2) {
        setFieldError(name, "Enter your full name.");
        ok = false;
      }
      if (!isEmail(email.value)) {
        setFieldError(email, "Enter a valid email address.");
        ok = false;
      }
      if (password.value.length < 8) {
        setFieldError(password, "Use at least 8 characters.");
        ok = false;
      }
      if (!ok) return focusFirstError(form);
      const btn = form.querySelector("[type=submit]");
      setLoading(btn, true, "Creating account…");
      try {
        const user = await auth.signup({ role, name: name.value, email: email.value, password: password.value });
        toast(`Account created. Welcome, ${user.firstName}!`, { type: "success" });
        ctx.navigate("#/dashboard");
      } catch (err) {
        setLoading(btn, false);
        if (err.field === "email") {
          setFieldError(email, err.message);
          email.focus();
        } else showFormAlert(form, err.message);
      }
    });
  }
  function openForgot(prefill = "") {
    openModal({
      title: "Reset your password",
      body: `<form id="forgot-form" novalidate>
      <p class="modal__text">Enter the email linked to your account and we'll send you a reset link.</p>
      <div class="field" style="margin-top:16px">
        <label class="field__label" for="fp-email">Email address</label>
        <input class="input" id="fp-email" name="email" type="email" placeholder="you@example.com" value="${esc(prefill)}" autocomplete="email" />
        <p class="field__msg"></p>
      </div>
      <div class="modal__actions">
        <button type="button" class="btn btn--ghost" data-close>Cancel</button>
        <button type="submit" class="btn btn--primary">Send reset link</button>
      </div>
    </form>`,
      onOpen(body, close) {
        const form = body.querySelector("form");
        form.addEventListener("submit", async (e) => {
          e.preventDefault();
          clearErrors(form);
          const input = form.elements.email;
          if (!isEmail(input.value)) {
            setFieldError(input, "Enter a valid email address.");
            input.focus();
            return;
          }
          const btn = form.querySelector("[type=submit]");
          setLoading(btn, true, "Sending…");
          try {
            await auth.requestPasswordReset(input.value);
            close();
            toast(`Reset link sent to ${input.value.trim()}.`, { type: "success" });
          } catch (err) {
            setLoading(btn, false);
            setFieldError(input, err.message);
          }
        });
      }
    });
  }
  function authView(root, ctx) {
    const name = ctx.route.screen;
    const mq = window.matchMedia(DESKTOP);
    function render2() {
      const desktop = mq.matches;
      let panel;
      if (name === "login") panel = desktop ? welcomeForm() : splash();
      else if (name === "choose") panel = chooseScreen();
      else if (name === "student" || name === "security") panel = roleLoginScreen(name);
      else panel = signupScreen(ctx.query.get("role") === "security" ? "security" : "student");
      root.innerHTML = desktop ? `<div class="auth auth--${name}">${hero()}<section class="auth-panel">${panel}</section></div>` : `<div class="auth-mobile auth-mobile--${name}">${panel}</div>`;
      bindLogin(root, ctx);
      bindSignup(root, ctx);
      const focusTarget = root.querySelector("h1");
      if (focusTarget) {
        focusTarget.setAttribute("tabindex", "-1");
      }
    }
    const onClick = async (e) => {
      var _a;
      const back = e.target.closest("[data-back]");
      if (back && window.history.length > 1 && ctx.previous) {
        e.preventDefault();
        window.history.back();
        return;
      }
      if (e.target.closest("[data-forgot]")) {
        openForgot(((_a = root.querySelector("#login-email")) == null ? void 0 : _a.value) || "");
        return;
      }
      const g = e.target.closest("[data-google]");
      if (g) {
        setLoading(g, true, "Connecting to Google…");
        try {
          const user = await auth.loginWithGoogle(g.dataset.google);
          toast(`Signed in with Google as ${user.name}.`, { type: "success" });
          ctx.navigate("#/dashboard");
        } catch (err) {
          setLoading(g, false);
          const form = g.closest("form");
          if (form) showFormAlert(form, err.message);
          else toast(err.message, { type: "error" });
        }
      }
    };
    render2();
    bindPasswordToggles(root);
    root.addEventListener("click", onClick);
    const onMq = () => render2();
    mq.addEventListener("change", onMq);
    return () => {
      mq.removeEventListener("change", onMq);
      root.removeEventListener("click", onClick);
    };
  }
  let BASE = null;
  let uid = 0;
  const f = (n) => Math.round(n * 10) / 10;
  const pts = (arr) => arr.map((p) => `${f(p.x)},${f(p.y)}`).join(" ");
  function inset(p, k) {
    const cx = (p[0].x + p[1].x + p[2].x + p[3].x) / 4;
    const cy = (p[0].y + p[1].y + p[2].y + p[3].y) / 4;
    return p.map((q) => ({ x: cx + (q.x - cx) * k, y: cy + (q.y - cy) * k }));
  }
  function bil(p, u, v) {
    const ax = p[0].x + (p[1].x - p[0].x) * u;
    const ay = p[0].y + (p[1].y - p[0].y) * u;
    const bx = p[3].x + (p[2].x - p[3].x) * u;
    const by = p[3].y + (p[2].y - p[3].y) * u;
    return { x: ax + (bx - ax) * v, y: ay + (by - ay) * v };
  }
  const sub = (p, u0, u1, v0, v1) => [bil(p, u0, v0), bil(p, u1, v0), bil(p, u1, v1), bil(p, u0, v1)];
  const M = (p) => `M${f(p.x)} ${f(p.y)}`;
  const L = (p) => `L${f(p.x)} ${f(p.y)}`;
  function buildBase() {
    let land = "";
    let park = "";
    let water = "";
    let trees = "";
    let paths = "";
    let build = "";
    let sport = "";
    let sportLines = "";
    let parking = "";
    let stripes = "";
    for (const c of cells) {
      const r = mulberry32(c.seed);
      const q = inset(c.pts, 0.86);
      if (c.type === "park" || c.type === "water" || c.type === "sports") park += `<polygon points="${pts(q)}"/>`;
      if (c.type === "park") {
        const n = 2 + Math.floor(r() * 5);
        for (let t = 0; t < n; t++) {
          const p = bil(q, 0.15 + r() * 0.7, 0.15 + r() * 0.7);
          trees += `<circle cx="${f(p.x)}" cy="${f(p.y)}" r="${f(5 + r() * 8)}"/>`;
        }
        if (r() < 0.6) {
          const a = bil(q, 0.02, 0.2 + r() * 0.6);
          const m = bil(q, 0.5, 0.5);
          const b = bil(q, 0.98, 0.2 + r() * 0.6);
          paths += `${M(a)}Q${f(m.x + (r() - 0.5) * 30)} ${f(m.y + (r() - 0.5) * 30)} ${f(b.x)} ${f(b.y)}`;
        }
      } else if (c.type === "water") {
        water += `<polygon points="${pts(inset(q, 0.6))}"/>`;
      } else if (c.type === "sports") {
        sport += `<polygon points="${pts(inset(q, 0.74))}"/>`;
        sportLines += `${M(bil(q, 0.5, 0.2))}${L(bil(q, 0.5, 0.8))}`;
      } else if (c.type === "parking") {
        parking += `<polygon points="${pts(q)}"/>`;
        for (let u = 0.12; u < 0.9; u += 0.095) {
          stripes += `${M(bil(q, u, 0.1))}${L(bil(q, u, 0.42))}${M(bil(q, u, 0.58))}${L(bil(q, u, 0.9))}`;
        }
      } else {
        land += `<polygon points="${pts(q)}"/>`;
        const nx = 1 + Math.floor(r() * 3);
        const ny = 1 + Math.floor(r() * 2);
        const g = 0.07;
        for (let a = 0; a < nx; a++) {
          for (let b = 0; b < ny; b++) {
            if (r() > 0.84) {
              const p = bil(q, (a + 0.5) / nx, (b + 0.5) / ny);
              trees += `<circle cx="${f(p.x)}" cy="${f(p.y)}" r="${f(4 + r() * 4)}"/>`;
              continue;
            }
            build += `<polygon points="${pts(sub(q, a / nx + g, (a + 1) / nx - g, b / ny + g, (b + 1) / ny - g))}"/>`;
          }
        }
      }
    }
    let minor = "";
    let major = "";
    for (const e of edges) {
      const d = `${M(e.a)}${L(e.b)}`;
      if (e.major) major += d;
      else minor += d;
    }
    const streets = streetLabels.map((l) => `<text x="${f(l.x)}" y="${f(l.y)}" transform="rotate(${f(l.angle)} ${f(l.x)} ${f(l.y)})">${esc(l.name)}</text>`).join("");
    const poi = locations.map((l) => `<text x="${f(l.x + 12)}" y="${f(l.y - 10)}">${esc(l.name)}</text>`).join("");
    return `<g class="cmap__base">
    <rect x="-300" y="-300" width="${MAP_W + 600}" height="${MAP_H + 600}" fill="#e4e8e2"/>
    <g fill="#eef0ec">${land}</g>
    <g fill="#c6e5b3">${park}</g>
    <g fill="#b3d99e">${sport}</g>
    <path d="${sportLines}" stroke="#e8f4e0" stroke-width="2" fill="none"/>
    <g fill="#e1e4e9">${parking}</g>
    <path d="${stripes}" stroke="#fafbfc" stroke-width="1.4" fill="none"/>
    <g fill="#a8d2ee" stroke="#a8d2ee" stroke-width="16" stroke-linejoin="round">${water}</g>
    <g fill="#b2d99e">${trees}</g>
    <g fill="#dde1e7" stroke="#d0d5dd" stroke-width="1">${build}</g>
    <path d="${paths}" fill="none" stroke="#f4faef" stroke-width="2.2" stroke-dasharray="5 4"/>
    <path d="${minor}" stroke="#d3d8df" stroke-width="10.5" stroke-linecap="round" fill="none"/>
    <path d="${major}" stroke="#e6cf8e" stroke-width="15" stroke-linecap="round" fill="none"/>
    <path d="${minor}" stroke="#ffffff" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="${major}" stroke="#fdf3d3" stroke-width="12" stroke-linecap="round" fill="none"/>
    <g class="cmap__streets">${streets}</g>
    <g class="cmap__poi">${poi}</g>
  </g>`;
  }
  const PIN = "M0 0C-2.6-6.8-11-12-11-21A11 11 0 1 1 11-21C11-12 2.6-6.8 0 0Z";
  function markerMarkup(m) {
    if (m.kind === "user") {
      return `<g class="mk__inner mk__inner--dot"><circle r="16" class="mk-halo"/><circle r="7.5" fill="#1a6ae8" stroke="#fff" stroke-width="3"/></g>`;
    }
    if (m.kind === "patrol") {
      return `<g class="mk__inner mk__inner--dot"><circle r="12.5" fill="${m.color || "#1a6ae8"}" stroke="#fff" stroke-width="3"/><path d="M0-6.2 5-4.2v3.7C5 2.9 2.9 5.3 0 6.4-2.9 5.3-5 2.9-5-.5v-3.7z" fill="#fff"/></g>`;
    }
    return `<g class="mk__inner${m.pulse ? " mk__inner--pulse" : ""}"><ellipse cy="1.5" rx="6" ry="2.4" fill="rgba(15,33,80,.25)"/><path d="${PIN}" fill="${m.color || "#e5484d"}" stroke="rgba(0,0,0,.14)" stroke-width="1"/><circle cy="-21" r="4.6" fill="#fff"/></g>`;
  }
  function createCampusMap(host, options2 = {}) {
    const o = {
      controls: false,
      wheel: true,
      touch: "pan-y",
      maxZoom: 4,
      popup: null,
      onMarkerClick: null,
      onMapClick: null,
      ariaLabel: "Campus map",
      markerScale: 1,
      ...options2
    };
    BASE ?? (BASE = buildBase());
    const id = ++uid;
    host.classList.add("cmap");
    host.innerHTML = `
    <svg class="cmap__svg" viewBox="0 0 ${MAP_W} ${MAP_H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(o.ariaLabel)}">
      <defs>
        <radialGradient id="heat-${id}">
          <stop offset="0" stop-color="#e3221b" stop-opacity=".95"/>
          <stop offset=".28" stop-color="#ef4a1f" stop-opacity=".88"/>
          <stop offset=".56" stop-color="#f89a2c" stop-opacity=".6"/>
          <stop offset="1" stop-color="#fbd34a" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <g class="cmap__world">${BASE}<g class="cmap__zones"></g><g class="cmap__heat"></g><g class="cmap__routes"></g><g class="cmap__markers"></g></g>
    </svg>
    <div class="cmap__popup" hidden></div>
    ${o.controls ? `<div class="cmap__controls"><button type="button" data-zoom="in" aria-label="Zoom in">${icon("plus")}</button><button type="button" data-zoom="out" aria-label="Zoom out">${icon("minus")}</button></div>` : ""}`;
    const svg = host.querySelector("svg");
    const world = host.querySelector(".cmap__world");
    const popup = host.querySelector(".cmap__popup");
    const markersG = host.querySelector(".cmap__markers");
    const routesG = host.querySelector(".cmap__routes");
    const heatG = host.querySelector(".cmap__heat");
    const zonesG = host.querySelector(".cmap__zones");
    svg.style.touchAction = o.touch;
    let k = 1;
    let tx = 0;
    let ty = 0;
    let markers = [];
    let current = null;
    let anim = null;
    const screenScale = () => {
      const m = svg.getScreenCTM();
      return m && m.a ? m.a : 1;
    };
    function refreshScale() {
      const s = 1 / (screenScale() * k);
      for (const { el, m } of markers) el.setAttribute("transform", `translate(${f(m.x)} ${f(m.y)}) scale(${(s * o.markerScale).toFixed(4)})`);
      for (const r of routesG.querySelectorAll("[data-w]")) r.setAttribute("stroke-width", (Number(r.dataset.w) * s).toFixed(3));
      for (const z of zonesG.querySelectorAll("[data-w]")) z.setAttribute("stroke-width", (Number(z.dataset.w) * s).toFixed(3));
      positionPopup();
    }
    function apply() {
      world.setAttribute("transform", `translate(${f(tx)} ${f(ty)}) scale(${k.toFixed(4)})`);
      refreshScale();
    }
    function clamp() {
      tx = Math.min(0, Math.max(MAP_W * (1 - k), tx));
      ty = Math.min(0, Math.max(MAP_H * (1 - k), ty));
    }
    function toView(clientX, clientY) {
      const m = svg.getScreenCTM();
      if (!m) return { x: 0, y: 0 };
      const p = svg.createSVGPoint();
      p.x = clientX;
      p.y = clientY;
      return p.matrixTransform(m.inverse());
    }
    function zoomAt(vx, vy, nk) {
      nk = Math.max(1, Math.min(o.maxZoom, nk));
      tx = vx - (vx - tx) * (nk / k);
      ty = vy - (vy - ty) * (nk / k);
      k = nk;
      clamp();
      apply();
    }
    function animateTo(nk, cx, cy, ms = 380) {
      cancelAnimationFrame(anim);
      nk = Math.max(1, Math.min(o.maxZoom, nk));
      const from = { k, tx, ty };
      let ntx = MAP_W / 2 - cx * nk;
      let nty = MAP_H / 2 - cy * nk;
      ntx = Math.min(0, Math.max(MAP_W * (1 - nk), ntx));
      nty = Math.min(0, Math.max(MAP_H * (1 - nk), nty));
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const t0 = performance.now();
      const step = (now) => {
        const t = reduce ? 1 : Math.min(1, (now - t0) / ms);
        const e = 1 - Math.pow(1 - t, 3);
        k = from.k + (nk - from.k) * e;
        tx = from.tx + (ntx - from.tx) * e;
        ty = from.ty + (nty - from.ty) * e;
        apply();
        if (t < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    }
    function positionPopup() {
      if (!current || popup.hidden) return;
      const ctm = world.getScreenCTM();
      if (!ctm) return;
      const hr = host.getBoundingClientRect();
      const px = ctm.a * current.x + ctm.c * current.y + ctm.e - hr.left;
      const py = ctm.b * current.x + ctm.d * current.y + ctm.f - hr.top;
      const lift = current.kind === "user" || current.kind === "patrol" ? 18 : 38;
      const w = popup.offsetWidth;
      const h = popup.offsetHeight;
      const left = Math.min(Math.max(px, w / 2 + 8), hr.width - w / 2 - 8);
      const below = py - lift - h < 6;
      popup.classList.toggle("is-below", below);
      popup.style.left = `${left}px`;
      popup.style.top = `${below ? py + 14 : py - lift}px`;
      const outside = px < -10 || py < -10 || px > hr.width + 10 || py > hr.height + 10;
      popup.style.visibility = outside ? "hidden" : "visible";
    }
    function openPopup(m) {
      if (!o.popup) return;
      const html = o.popup(m);
      if (!html) return;
      popup.innerHTML = html;
      popup.hidden = false;
      current = m;
      positionPopup();
    }
    function closePopup() {
      popup.hidden = true;
      current = null;
    }
    function selectMarker(m) {
      var _a;
      (_a = o.onMarkerClick) == null ? void 0 : _a.call(o, m);
      openPopup(m);
    }
    const pointers = /* @__PURE__ */ new Map();
    let drag = null;
    let pinch = null;
    let moved = false;
    let downMarker = null;
    let lastTap = 0;
    svg.addEventListener("pointerdown", (e) => {
      var _a, _b;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        drag = { x: e.clientX, y: e.clientY, tx, ty };
        moved = false;
        const mk = e.target.closest(".mk");
        downMarker = mk ? (_a = markers[Number(mk.dataset.idx)]) == null ? void 0 : _a.m : null;
        (_b = svg.setPointerCapture) == null ? void 0 : _b.call(svg, e.pointerId);
      } else if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), k, mid: toView((a.x + b.x) / 2, (a.y + b.y) / 2) };
        moved = true;
      }
    });
    svg.addEventListener("pointermove", (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pinch && pointers.size >= 2) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        zoomAt(pinch.mid.x, pinch.mid.y, pinch.k * d / pinch.d);
        return;
      }
      if (!drag) return;
      const dxPx = e.clientX - drag.x;
      const dyPx = e.clientY - drag.y;
      if (!moved && Math.hypot(dxPx, dyPx) < 5) return;
      moved = true;
      host.classList.add("is-dragging");
      const s = screenScale();
      tx = drag.tx + dxPx / s;
      ty = drag.ty + dyPx / s;
      clamp();
      apply();
    });
    const end = (e) => {
      var _a;
      if (!pointers.has(e.pointerId)) return;
      pointers.delete(e.pointerId);
      host.classList.remove("is-dragging");
      if (pointers.size < 2) pinch = null;
      if (pointers.size > 0) return;
      const wasDrag = moved;
      drag = null;
      if (e.type === "pointercancel" || wasDrag) return;
      const now = Date.now();
      if (downMarker) {
        selectMarker(downMarker);
      } else if (now - lastTap < 280) {
        const p = toView(e.clientX, e.clientY);
        zoomAt(p.x, p.y, k * 1.7);
      } else {
        const p = toView(e.clientX, e.clientY);
        const w = { x: (p.x - tx) / k, y: (p.y - ty) / k };
        closePopup();
        (_a = o.onMapClick) == null ? void 0 : _a.call(o, w);
      }
      lastTap = downMarker ? 0 : now;
      downMarker = null;
    };
    svg.addEventListener("pointerup", end);
    svg.addEventListener("pointercancel", end);
    if (o.wheel) {
      svg.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
          const p = toView(e.clientX, e.clientY);
          zoomAt(p.x, p.y, k * Math.exp(-e.deltaY * 22e-4));
        },
        { passive: false }
      );
    }
    host.addEventListener("click", (e) => {
      const z = e.target.closest("[data-zoom]");
      if (z) animateTo(k * (z.dataset.zoom === "in" ? 1.6 : 1 / 1.6), (MAP_W / 2 - tx) / k, (MAP_H / 2 - ty) / k, 220);
    });
    svg.addEventListener("keydown", (e) => {
      const mk = e.target.closest(".mk");
      if (mk && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        selectMarker(markers[Number(mk.dataset.idx)].m);
      }
      if (e.key === "Escape") closePopup();
    });
    const ro = new ResizeObserver(() => refreshScale());
    ro.observe(host);
    const api = {
      setMarkers(list = []) {
        markersG.innerHTML = list.map(
          (m, idx) => `<g class="mk mk--${m.kind || "pin"}" data-idx="${idx}" tabindex="0" role="button" aria-label="${esc(m.label || "Map marker")}">${markerMarkup(m)}</g>`
        ).join("");
        const els = markersG.querySelectorAll(".mk");
        markers = list.map((m, idx) => ({ m, el: els[idx] }));
        if (current && !list.some((m) => m.id === current.id)) closePopup();
        else if (current) current = list.find((m) => m.id === current.id) || null;
        refreshScale();
      },
      moveMarker(markerId, x, y) {
        const found = markers.find((q) => q.m.id === markerId);
        if (!found) return;
        found.m.x = x;
        found.m.y = y;
        const sc = (o.markerScale / (screenScale() * k)).toFixed(4);
        found.el.setAttribute("transform", `translate(${f(x)} ${f(y)}) scale(${sc})`);
        if (current && current.id === markerId) positionPopup();
      },
      setRoutes(list = []) {
        routesG.innerHTML = list.map((r) => {
          const p = pts(r.points);
          const width = r.width || 5;
          const casing = r.casing === false ? "" : `<polyline points="${p}" fill="none" stroke="#fff" data-w="${width + 4}" stroke-linecap="round" stroke-linejoin="round" opacity=".95"/>`;
          const dash = r.dashed ? 'pathLength="100" stroke-dasharray="2.2 1.8"' : r.animate ? 'pathLength="1" class="route-draw"' : "";
          let stroke = r.color || "#1f63e6";
          let defs = "";
          if (r.gradient && r.points.length > 1) {
            const a = r.points[0];
            const b = r.points[r.points.length - 1];
            const gid = `rg-${id}-${Math.random().toString(36).slice(2, 7)}`;
            defs = `<defs><linearGradient id="${gid}" gradientUnits="userSpaceOnUse" x1="${f(a.x)}" y1="${f(a.y)}" x2="${f(b.x)}" y2="${f(b.y)}">${r.gradient.map((c, i) => `<stop offset="${(i / (r.gradient.length - 1)).toFixed(2)}" stop-color="${c}"/>`).join("")}</linearGradient></defs>`;
            stroke = `url(#${gid})`;
          }
          return `${defs}${casing}<polyline points="${p}" fill="none" stroke="${stroke}" data-w="${width}" stroke-linecap="round" stroke-linejoin="round" opacity="${r.opacity ?? 1}" ${dash}/>`;
        }).join("");
        refreshScale();
      },
      setHeat(spots = []) {
        heatG.innerHTML = spots.map((s) => `<circle cx="${f(s.x)}" cy="${f(s.y)}" r="${f(s.r)}" fill="url(#heat-${id})" opacity="${s.opacity ?? 0.92}"/>`).join("");
      },
      setZones(zones = []) {
        zonesG.innerHTML = zones.map((z) => `<circle cx="${f(z.x)}" cy="${f(z.y)}" r="${f(z.r)}" fill="rgba(242,176,30,.12)" stroke="#f2b01e" data-w="1.6" stroke-dasharray="6 5"/>`).join("");
        refreshScale();
      },
      focus(x, y, zoom = 2.2) {
        animateTo(zoom, x, y);
      },
      fit(points, pad = 70) {
        if (!(points == null ? void 0 : points.length)) return;
        const xs = points.map((p) => p.x);
        const ys = points.map((p) => p.y);
        const minX = Math.min(...xs) - pad;
        const maxX = Math.max(...xs) + pad;
        const minY = Math.min(...ys) - pad;
        const maxY = Math.max(...ys) + pad;
        const nk = Math.min(MAP_W / (maxX - minX), MAP_H / (maxY - minY), 2.6);
        animateTo(nk, (minX + maxX) / 2, (minY + maxY) / 2);
      },
      reset() {
        animateTo(1, MAP_W / 2, MAP_H / 2);
      },
      openMarker(markerId) {
        const found = markers.find((x) => x.m.id === markerId);
        if (found) openPopup(found.m);
      },
      closePopup,
      destroy() {
        cancelAnimationFrame(anim);
        ro.disconnect();
      }
    };
    apply();
    return api;
  }
  const legendPin = (c) => `<svg viewBox="0 0 14 18" aria-hidden="true"><path d="M7 17.5S1 12.4 1 7.2a6 6 0 0 1 12 0c0 5.2-6 10.3-6 10.3z" fill="${c}"/><circle cx="7" cy="7" r="2.3" fill="#fff"/></svg>`;
  const legendDot = `<svg viewBox="0 0 14 14" aria-hidden="true" style="height:14px"><circle cx="7" cy="7" r="5.5" fill="#1a6ae8" stroke="#fff" stroke-width="2"/><circle cx="7" cy="7" r="6.5" fill="none" stroke="#1a6ae8" stroke-opacity=".3"/></svg>`;
  function studentDashboard(el, ctx) {
    const { user } = ctx;
    el.innerHTML = `
    <header class="page-head page-head--dash">
      <div class="page-head__titles">
        <h1 class="page-head__title">Hello, ${esc(user.firstName)} <span class="wave" aria-hidden="true">👋</span></h1>
        <p class="page-head__sub">Stay safe, stay informed.</p>
      </div>
      ${userChip(user)}
    </header>
    <section class="stats" aria-label="Summary" data-stats>${statSkeleton()}</section>
    <div class="dash-grid dash-grid--student">
      <section class="card map-card" aria-labelledby="campus-map-title">
        <div class="card__head"><h2 class="card__title" id="campus-map-title">Campus Map</h2></div>
        <div class="map-card__map">
          <div data-map></div>
          <ul class="legend" aria-label="Map legend">
            <li>${legendPin("#e5484d")}Incident</li>
            <li>${legendPin("#22a05b")}Safe Route</li>
            <li>${legendDot}Your Location</li>
          </ul>
        </div>
      </section>
      <section class="card" aria-labelledby="recent-title">
        <div class="card__head"><h2 class="card__title" id="recent-title">Recent Incidents</h2></div>
        <div data-recent></div>
      </section>
    </div>`;
    const mapHost = el.querySelector("[data-map]");
    const map = createCampusMap(mapHost, {
      controls: true,
      wheel: false,
      markerScale: 0.82,
      ariaLabel: "Campus map showing recent incidents, safe points and your location",
      popup: (m) => m.data ? incidentPopup(m.data) : `<div class="pop"><div class="pop__title">${esc(m.title)}</div><div class="pop__meta">${esc(m.note)}</div></div>`
    });
    const me2 = campus.locationById("student-centre");
    const myPos = { x: me2.x - 34, y: me2.y + 26 };
    const statsEl = el.querySelector("[data-stats]");
    const recentEl = el.querySelector("[data-recent]");
    let first = true;
    function load2(quiet = false) {
      return loadInto(
        recentEl,
        () => dashboard.student(),
        (d) => {
          statsEl.innerHTML = [
            statCard({ glyph: "siren", tint: "blue", title: "Recent Incidents", value: d.recentCount, link: "#/incidents", linkLabel: "view all" }),
            statCard({ glyph: "routes", tint: "green", title: "Safe Routes", value: d.savedRoutes, link: "#/routes", linkLabel: "view routes" }),
            `<article class="stat">
            <span class="stat__icon stat__icon--red">${statGlyph.alert}</span>
            <div class="stat__body"><h2 class="stat__title">Campus Alerts</h2><p class="stat__value">${d.activeAlerts}</p><button type="button" class="stat__link link-btn" data-alerts>view alerts</button></div>
          </article>`
          ].join("");
          recentEl.innerHTML = d.recent.length ? `<ul class="inc-list">${d.recent.map(
            (i) => `<li class="inc-row"><a href="#/incidents/${esc(i.id)}">
                  ${typeIcon(i.type, 26)}
                  <span class="inc-row__text"><span class="inc-row__title">${esc(i.type)}</span><span class="inc-row__meta">${esc(i.location)} • ${esc(formatTime(i.reportedAt))}</span></span>
                  ${statusPill(i.status, { tone: "student" })}
                </a></li>`
          ).join("")}</ul>` : emptyState({ title: "All quiet", text: "No incidents have been reported recently.", iconName: "shieldCheck" });
          const markers = [
            ...d.mapIncidents.map((i) => ({ id: i.id, x: i.x, y: i.y, color: i.status === "New" ? "#e5484d" : i.status === "In Progress" ? "#f2b01e" : "#f5a524", label: `${i.type} at ${i.location}`, data: i, pulse: i.status === "New" })),
            ...campus.helpPoints.slice(0, 2).map((h) => ({ id: h.id, x: h.x, y: h.y, color: "#22a05b", label: h.name, title: h.name, note: h.note })),
            { id: "me", kind: "user", x: myPos.x, y: myPos.y, label: "Your location", title: "You are here", note: "Near Student Centre" }
          ];
          map.setMarkers(markers);
          if (first) {
            first = false;
            map.fit(markers, 40);
          }
        },
        {
          loading: quiet ? false : `<ul class="inc-list" aria-hidden="true">${[1, 2, 3].map(() => '<li class="inc-row"><a><span class="skel" style="width:26px;height:26px;border-radius:50%"></span><span class="inc-row__text"><span class="skel" style="width:40%;height:12px"></span><span class="skel" style="width:60%;height:10px"></span></span></a></li>').join("")}</ul>`,
          onError: () => {
            statsEl.innerHTML = "";
          }
        }
      );
    }
    el.addEventListener("click", (e) => {
      if (e.target.closest("[data-alerts]")) openAlertsModal();
    });
    load2();
    const off = on("incidents", () => load2(true));
    const offRoutes = on("routes", () => load2(true));
    return () => {
      off();
      offRoutes();
      map.destroy();
    };
  }
  function feedRows(list, { highlight = null } = {}) {
    return list.map(
      (i) => `<tr tabindex="0" data-href="#/incidents/${esc(i.id)}" class="${highlight === i.id ? "is-new-row" : ""}" aria-label="${esc(`${i.type} at ${i.location}, ${i.status}`)}">
        <td data-col="type"><span class="cell-type">${tablePin(i.status !== "Resolved")}${esc(i.type)}</span></td>
        <td data-col="location">${esc(i.location)}</td>
        <td data-col="time">${esc(formatTime(i.reportedAt))}</td>
        <td data-col="status">${statusPill(i.status)}</td>
      </tr>`
    ).join("");
  }
  function bindRowLinks(root, navigate2) {
    root.addEventListener("click", (e) => {
      const tr = e.target.closest("tr[data-href]");
      if (tr && !e.target.closest("a, button")) navigate2(tr.dataset.href);
    });
    root.addEventListener("keydown", (e) => {
      const tr = e.target.closest("tr[data-href]");
      if (tr && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        navigate2(tr.dataset.href);
      }
    });
  }
  function securityDashboard(el, ctx) {
    const { user } = ctx;
    el.innerHTML = `
    <header class="page-head page-head--dash">
      <div class="page-head__titles">
        <h1 class="page-head__title">Security Dashboard</h1>
        <p class="page-head__sub">Monitor incidents, respond faster.</p>
      </div>
      ${userChip(user)}
    </header>
    <section class="stats" aria-label="Summary" data-stats>${statSkeleton()}</section>
    <div class="dash-grid dash-grid--security">
      <section class="card feed-card" aria-labelledby="feed-title">
        <div class="card__head">
          <h2 class="card__title" id="feed-title">Live Incident Feed</h2>
          <span class="feed-card__live"><span class="dot"></span>Live</span>
        </div>
        <div data-feed></div>
      </section>
      <section class="card side-map" aria-label="Incident map">
        <div class="side-map__frame">
          <div data-map></div>
          <a class="btn btn--primary btn--sm side-map__btn" href="#/patrols">View Map</a>
        </div>
      </section>
    </div>`;
    const map = createCampusMap(el.querySelector("[data-map]"), {
      wheel: false,
      markerScale: 0.82,
      ariaLabel: "Map of active incidents",
      popup: (m) => incidentPopup(m.data)
    });
    const statsEl = el.querySelector("[data-stats]");
    const feedEl = el.querySelector("[data-feed]");
    let first = true;
    function load2({ quiet = false, highlight = null } = {}) {
      return loadInto(
        feedEl,
        () => dashboard.security(),
        (d) => {
          statsEl.innerHTML = [
            statCard({ glyph: "active", tint: "red", title: "Active Incidents", value: d.active, valueTone: "is-red", link: "#/feed?status=active", linkLabel: "View all", dot: "#e5484d" }),
            statCard({ glyph: "resolved", tint: "green", title: "Resolved Today", value: d.resolvedToday, link: "#/feed?status=Resolved", linkLabel: "View all", dot: "#1fa35c" }),
            `<article class="stat stat--security">
            <span class="stat__icon stat__icon--blue-soft">${statGlyph.patrol}</span>
            <div class="stat__body"><h2 class="stat__title">Patrols On Duty</h2><p class="stat__value">${d.patrolsOnDuty}</p><button type="button" class="stat__link link-btn" data-patrol-names>View names</button></div>
          </article>`
          ].join("");
          statsEl.querySelectorAll(".stat").forEach((s) => s.classList.add("stat--security"));
          feedEl.innerHTML = d.feed.length ? `<div class="table-wrap"><table class="table table--responsive">
              <thead><tr><th scope="col">Type</th><th scope="col">Location</th><th scope="col">Time</th><th scope="col">Status</th></tr></thead>
              <tbody>${feedRows(d.feed, { highlight })}</tbody>
            </table></div>` : emptyState({ title: "No incidents yet", text: "New reports will appear here in real time.", iconName: "feed" });
          map.setMarkers(incidentMarkers(d.activeIncidents));
          if (first) {
            first = false;
            map.fit(d.activeIncidents, 50);
          }
        },
        {
          loading: quiet ? false : `<div class="table-wrap" aria-hidden="true"><table class="table"><thead><tr><th>Type</th><th>Location</th><th>Time</th><th>Status</th></tr></thead><tbody>${[1, 2, 3, 4, 5].map(() => '<tr><td><span class="skel" style="width:110px;height:12px"></span></td><td><span class="skel" style="width:80px;height:12px"></span></td><td><span class="skel" style="width:60px;height:12px"></span></td><td><span class="skel" style="width:64px;height:18px"></span></td></tr>').join("")}</tbody></table></div>`,
          onError: () => {
            statsEl.innerHTML = "";
          }
        }
      );
    }
    bindRowLinks(feedEl, ctx.navigate);
    el.addEventListener("click", (e) => {
      if (e.target.closest("[data-patrol-names]")) openPatrolNamesModal();
    });
    load2();
    startLiveFeed();
    const off = on("incidents", (payload) => {
      var _a;
      if (payload == null ? void 0 : payload.live) toast(`New incident: ${payload.live.type} at ${payload.live.location}`, { type: "warning", timeout: 5e3 });
      load2({ quiet: true, highlight: ((_a = payload == null ? void 0 : payload.live) == null ? void 0 : _a.id) || null });
    });
    return () => {
      off();
      map.destroy();
    };
  }
  const MAX_PHOTO = 5 * 1024 * 1024;
  function reportView(el, ctx) {
    el.innerHTML = `
    <header class="page-head page-head--report">
      <div class="page-head__main"><h1 class="page-head__title">Report Incident</h1></div>
      <button type="button" class="info-btn" data-info aria-label="Reporting guidance" title="Reporting guidance">i</button>
    </header>
    <div class="report-grid">
      <form class="card report-form" id="report-form" novalidate>
        <div class="form-alert" role="alert" hidden></div>
        <div class="field">
          <label class="field__label" for="rf-type">Incident Type</label>
          <select class="select is-placeholder" id="rf-type" name="type" required>
            <option value="">Select category</option>
            ${INCIDENT_TYPES.map((t) => `<option value="${esc(t)}">${esc(t)}</option>`).join("")}
          </select>
          <p class="field__msg"></p>
        </div>
        <div class="field">
          <label class="field__label" for="rf-location">Location</label>
          <div class="combo">
            <input class="input combo__input" id="rf-location" name="location" type="text" role="combobox" aria-expanded="false" aria-controls="rf-location-list" aria-autocomplete="list" autocomplete="off" placeholder="Search or select location on map" />
            <button type="button" class="combo__toggle" tabindex="-1" aria-label="Show locations">${icon("chevronDown")}</button>
            <ul class="combo__list" id="rf-location-list" role="listbox" aria-label="Campus locations" hidden></ul>
          </div>
          <p class="field__msg"></p>
        </div>
        <div class="field">
          <label class="field__label" for="rf-desc">Description</label>
          <textarea class="textarea" id="rf-desc" name="description" rows="4" maxlength="600" placeholder="Describe what happened..."></textarea>
          <div class="field__foot"><p class="field__msg"></p><span class="field__count" data-count>0/600</span></div>
        </div>
        <div class="field">
          <span class="field__label" id="rf-photo-label">Add Photo (optional)</span>
          <div class="file">
            <label class="file__pick">
              <input type="file" name="photo" accept="image/*" aria-labelledby="rf-photo-label" />
              <span class="file__btn">Choose file</span>
              <span class="file__name" data-file-name>No file chosen</span>
            </label>
            <button type="button" class="file__clear" data-file-clear hidden aria-label="Remove photo">${icon("x")}</button>
          </div>
          <img class="file__preview" data-preview alt="Selected photo preview" hidden />
          <p class="field__msg"></p>
        </div>
        <button type="submit" class="btn btn--primary btn--block report-form__submit">Submit Report</button>
      </form>
      <section class="card report-map" aria-label="Pick the incident location">
        <div class="report-map__frame">
          <div data-map></div>
          <p class="map-hint" data-hint>${icon("crosshair")}Click the map to set the location</p>
        </div>
      </section>
    </div>`;
    const form = el.querySelector("#report-form");
    liveClearErrors(form);
    const typeSel = form.elements.type;
    const locInput = form.elements.location;
    const list = el.querySelector(".combo__list");
    const hint = el.querySelector("[data-hint]");
    let chosen = null;
    let photo = null;
    let active = -1;
    const map = createCampusMap(el.querySelector("[data-map]"), {
      controls: true,
      ariaLabel: "Campus map. Click to choose the incident location.",
      onMapClick(p) {
        const { location: location2, distance } = campus.nearestLocationTo(p.x, p.y);
        if (distance > 150) {
          toast("Choose a spot closer to a campus building or path.", { type: "warning" });
          return;
        }
        choose(location2, p);
      },
      popup: (m) => `<div class="pop"><div class="pop__title">${esc(m.title)}</div><div class="pop__meta">Incident location</div></div>`
    });
    function choose(loc, point = null) {
      chosen = { id: loc.id, name: loc.name, x: (point == null ? void 0 : point.x) ?? loc.x, y: (point == null ? void 0 : point.y) ?? loc.y };
      locInput.value = loc.name;
      closeList();
      map.setMarkers([{ id: "pick", x: chosen.x, y: chosen.y, color: "#e5484d", label: `Selected location: ${loc.name}`, title: loc.name }]);
      map.focus(chosen.x, chosen.y, 1.8);
      hint.hidden = true;
      const field = locInput.closest(".field");
      field.classList.remove("has-error");
      field.querySelector(".field__msg").textContent = "";
      locInput.removeAttribute("aria-invalid");
    }
    function renderList(q = "") {
      const query = q.trim().toLowerCase();
      const items = campus.locations.filter((l) => l.name.toLowerCase().includes(query));
      active = items.length ? 0 : -1;
      list.innerHTML = items.length ? items.map((l) => `<li role="option" id="loc-opt-${l.id}" data-id="${l.id}" class="combo__opt" aria-selected="${(chosen == null ? void 0 : chosen.id) === l.id}">${icon("pin")}<span>${esc(l.name)}</span></li>`).join("") : '<li class="combo__empty">No matching locations. Try the map.</li>';
      list.hidden = false;
      locInput.setAttribute("aria-expanded", "true");
      syncActive();
    }
    function syncActive() {
      const opts = [...list.querySelectorAll(".combo__opt")];
      opts.forEach((o, i) => o.classList.toggle("is-active", i === active));
      const cur = opts[active];
      if (cur) {
        locInput.setAttribute("aria-activedescendant", cur.id);
        cur.scrollIntoView({ block: "nearest" });
      } else locInput.removeAttribute("aria-activedescendant");
    }
    function closeList() {
      list.hidden = true;
      locInput.setAttribute("aria-expanded", "false");
      locInput.removeAttribute("aria-activedescendant");
    }
    locInput.addEventListener("input", () => {
      if (chosen && locInput.value !== chosen.name) {
        chosen = null;
        map.setMarkers([]);
        hint.hidden = false;
      }
      renderList(locInput.value);
    });
    locInput.addEventListener("focus", () => renderList(chosen ? "" : locInput.value));
    locInput.addEventListener("keydown", (e) => {
      const opts = list.querySelectorAll(".combo__opt");
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (list.hidden) renderList(locInput.value);
        active = Math.min(opts.length - 1, active + 1);
        syncActive();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        active = Math.max(0, active - 1);
        syncActive();
      } else if (e.key === "Enter" && !list.hidden) {
        e.preventDefault();
        const opt = opts[active];
        if (opt) choose(campus.locationById(opt.dataset.id));
      } else if (e.key === "Escape") closeList();
    });
    locInput.addEventListener("blur", () => setTimeout(closeList, 150));
    list.addEventListener("mousedown", (e) => e.preventDefault());
    list.addEventListener("click", (e) => {
      const opt = e.target.closest(".combo__opt");
      if (opt) choose(campus.locationById(opt.dataset.id));
    });
    el.querySelector(".combo__toggle").addEventListener("click", () => {
      if (list.hidden) {
        locInput.focus();
        renderList("");
      } else closeList();
    });
    typeSel.addEventListener("change", () => typeSel.classList.toggle("is-placeholder", !typeSel.value));
    const count = el.querySelector("[data-count]");
    form.elements.description.addEventListener("input", (e) => {
      count.textContent = `${e.target.value.length}/600`;
    });
    const fileInput = form.elements.photo;
    const fileName = el.querySelector("[data-file-name]");
    const clearBtn = el.querySelector("[data-file-clear]");
    const preview = el.querySelector("[data-preview]");
    function resetFile() {
      fileInput.value = "";
      photo = null;
      fileName.textContent = "No file chosen";
      clearBtn.hidden = true;
      preview.hidden = true;
      preview.removeAttribute("src");
    }
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      const field = fileInput.closest(".field");
      field.classList.remove("has-error");
      field.querySelector(".field__msg").textContent = "";
      if (!file) return resetFile();
      if (!file.type.startsWith("image/")) {
        resetFile();
        setFieldError(fileInput, "Please choose an image file (JPG, PNG or HEIC).");
        return;
      }
      if (file.size > MAX_PHOTO) {
        resetFile();
        setFieldError(fileInput, "Photos must be 5 MB or smaller.");
        return;
      }
      fileName.textContent = file.name;
      clearBtn.hidden = false;
      const reader = new FileReader();
      reader.onload = () => {
        photo = { name: file.name, url: reader.result };
        preview.src = reader.result;
        preview.hidden = false;
      };
      reader.readAsDataURL(file);
    });
    clearBtn.addEventListener("click", resetFile);
    el.querySelector("[data-info]").addEventListener("click", () => {
      openModal({
        title: "Before you report",
        body: `<div class="guide">
        <p class="guide__urgent">${icon("phone")}<span><strong>In immediate danger?</strong> Call Campus Security on <a href="tel:0182994000">018 299 4000</a> or SAPS on <a href="tel:10111">10111</a>.</span></p>
        <ul>
          <li>Choose the category that best matches what happened.</li>
          <li>Pick the location from the list, or click the exact spot on the map.</li>
          <li>Describe what you saw: people, vehicles, direction of travel.</li>
          <li>Only add a photo if it is safe to take one.</li>
        </ul>
      </div>`
      });
    });
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearErrors(form);
      let ok = true;
      if (!typeSel.value) {
        setFieldError(typeSel, "Select an incident type.");
        ok = false;
      }
      if (!chosen) {
        const match2 = campus.locations.find((l) => l.name.toLowerCase() === locInput.value.trim().toLowerCase());
        if (match2) choose(match2);
        else {
          setFieldError(locInput, locInput.value.trim() ? "Choose a location from the list or the map." : "Select where it happened.");
          ok = false;
        }
      }
      const desc = form.elements.description;
      if (desc.value.trim().length < 10) {
        setFieldError(desc, "Add a short description (at least 10 characters).");
        ok = false;
      }
      if (!ok) return focusFirstError(form);
      const btn = form.querySelector("[type=submit]");
      setLoading(btn, true, "Submitting report…");
      try {
        const inc = await incidents.create({ type: typeSel.value, locationId: chosen.id, x: chosen.x, y: chosen.y, description: desc.value, photo });
        ctx.navigate(`#/report/success/${inc.id}`);
      } catch (err) {
        setLoading(btn, false);
        const input = err.field && { type: typeSel, location: locInput, description: desc }[err.field];
        if (input) {
          setFieldError(input, err.message);
          input.focus();
        } else showFormAlert(form, `${err.message} Your report has not been sent yet.`);
      }
    });
    return () => map.destroy();
  }
  function reportSuccessView(el, ctx) {
    el.innerHTML = '<div class="success-wrap" data-body></div>';
    const body = el.querySelector("[data-body]");
    loadInto(
      body,
      () => incidents.get(ctx.params.id),
      (inc) => {
        body.innerHTML = `
        <section class="card success" aria-labelledby="success-title">
          <span class="success__check" aria-hidden="true">${icon("check")}</span>
          <h1 class="success__title" id="success-title" tabindex="-1">Incident Reported!</h1>
          <p class="success__text">Thank you for keeping our campus safe.<br />Your report has been submitted.</p>
          <div class="success__ref">
            <span class="success__ref-label">Reference Number</span>
            <strong class="success__ref-num">#${esc(inc.id)}</strong>
            <span class="success__ref-meta">${esc(inc.type)} · ${esc(inc.location)} · ${esc(formatDateTime(inc.reportedAt))}</span>
          </div>
          <a class="btn btn--primary btn--block success__btn" href="#/incidents/${esc(inc.id)}">View Incident</a>
          <a class="success__back" href="#/dashboard">Back to Dashboard</a>
        </section>`;
        body.querySelector("#success-title").focus({ preventScroll: true });
      }
    );
  }
  const PAGE_SIZE = 10;
  function incidentsView(el, ctx) {
    var _a;
    const security = ctx.user.role === "security";
    const q = ctx.query;
    const state = {
      type: INCIDENT_TYPES.includes(q.get("type")) ? q.get("type") : "",
      status: q.get("status") === "active" || STATUSES.includes(q.get("status")) ? q.get("status") : "",
      from: "",
      to: "",
      q: q.get("q") || "",
      mine: q.get("mine") === "1",
      sort: { key: "reportedAt", dir: "desc" },
      page: 1
    };
    const title = ctx.route.path === "/feed" ? "Incident Feed" : state.mine ? "My Reports" : "Incidents";
    el.innerHTML = `
    ${pageHead({ title, back: "#/dashboard", actions: security ? `<button type="button" class="btn btn--outline btn--sm" data-export>${icon("download")}Export CSV</button>` : `<a class="btn btn--primary btn--sm" href="#/report">${icon("plus")}Report Incident</a>` })}
    <section class="card incidents-card">
      <div class="filters" role="search">
        <div class="filters__row">
          <label class="sr-only" for="f-type">Category</label>
          <select class="select filters__select" id="f-type">
            <option value="">All Categories</option>
            ${INCIDENT_TYPES.map((t) => `<option ${state.type === t ? "selected" : ""}>${esc(t)}</option>`).join("")}
          </select>
          <label class="sr-only" for="f-status">Status</label>
          <select class="select filters__select" id="f-status">
            <option value="">All Statuses</option>
            <option value="active" ${state.status === "active" ? "selected" : ""}>Active (New + In Progress)</option>
            ${STATUSES.map((s) => `<option ${state.status === s ? "selected" : ""}>${esc(s)}</option>`).join("")}
          </select>
          <div class="daterange" role="group" aria-label="Date range">
            <input class="daterange__input" id="f-from" type="text" placeholder="From" aria-label="From date" data-date />
            <span class="daterange__sep" aria-hidden="true">→</span>
            <input class="daterange__input" id="f-to" type="text" placeholder="To" aria-label="To date" data-date />
            <button type="button" class="daterange__clear" data-clear-dates aria-label="Clear dates" hidden>${icon("x")}</button>
          </div>
        </div>
        <div class="control filters__search">
          <span class="control__lead">${icon("search")}</span>
          <input class="input has-lead" id="f-q" type="search" placeholder="Search incidents..." value="${esc(state.q)}" aria-label="Search incidents" />
        </div>
      </div>
      <div data-results aria-live="polite"></div>
    </section>`;
    const results = el.querySelector("[data-results]");
    let lastRows = [];
    function sortRows(rows) {
      const { key: key2, dir } = state.sort;
      const order = { New: 0, "In Progress": 1, Resolved: 2 };
      const val = (r) => key2 === "reportedAt" ? new Date(r.reportedAt).getTime() : key2 === "status" ? order[r.status] : String(r[key2]).toLowerCase();
      return [...rows].sort((a, b) => (val(a) > val(b) ? 1 : val(a) < val(b) ? -1 : 0) * (dir === "asc" ? 1 : -1));
    }
    const th = (key2, label) => {
      const sorted = state.sort.key === key2;
      const aria = sorted ? state.sort.dir === "asc" ? "ascending" : "descending" : "none";
      return `<th scope="col" aria-sort="${aria}"><button type="button" class="th-sort${sorted ? " is-sorted" : ""}" data-sort="${key2}">${label}${icon("chevronDown", sorted && state.sort.dir === "asc" ? "is-asc" : "")}</button></th>`;
    };
    function renderTable() {
      const rows = sortRows(lastRows);
      const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
      state.page = Math.min(state.page, pages);
      const slice = rows.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE);
      const filtered = state.type || state.status || state.from || state.to || state.q;
      if (!rows.length) {
        results.innerHTML = emptyState({
          title: filtered ? "No incidents match your filters" : state.mine ? "You haven’t reported anything yet" : "No incidents reported",
          text: filtered ? "Try a different category, status or date range." : "Reports will appear here once submitted.",
          iconName: "search",
          action: filtered ? '<button type="button" class="btn btn--outline btn--sm" data-reset>Clear filters</button>' : ""
        });
        return;
      }
      results.innerHTML = `
      <div class="table-wrap"><table class="table table--responsive table--incidents">
        <thead><tr>${th("type", "Type")}${th("location", "Location")}${th("reportedAt", "Time")}${th("status", "Status")}<th scope="col" class="col-ref">Reference</th></tr></thead>
        <tbody>${slice.map(
        (i) => `<tr tabindex="0" data-href="#/incidents/${esc(i.id)}" aria-label="${esc(`${i.type} at ${i.location}, ${formatDateTime(i.reportedAt)}, ${i.status}`)}">
              <td data-col="type"><span class="cell-type">${tablePin(i.status !== "Resolved")}${esc(i.type)}</span></td>
              <td data-col="location">${esc(i.location)}</td>
              <td data-col="time" title="${esc(formatDateTime(i.reportedAt))}">${esc(formatTime(i.reportedAt))}</td>
              <td data-col="status">${statusPill(i.status)}</td>
              <td data-col="ref" class="col-ref">#${esc(i.id)}</td>
            </tr>`
      ).join("")}</tbody>
      </table></div>
      <div class="pager">
        <span class="pager__info">Showing ${(state.page - 1) * PAGE_SIZE + 1}–${Math.min(rows.length, state.page * PAGE_SIZE)} of ${rows.length}</span>
        <div class="pager__btns">
          <button type="button" class="icon-btn pager__btn" data-page="-1" ${state.page === 1 ? "disabled" : ""} aria-label="Previous page">${icon("chevronLeft")}</button>
          <span class="pager__num">${state.page} / ${pages}</span>
          <button type="button" class="icon-btn pager__btn" data-page="1" ${state.page === pages ? "disabled" : ""} aria-label="Next page">${icon("chevronRight")}</button>
        </div>
      </div>`;
    }
    function load2({ quiet = false } = {}) {
      const from = parseDateInput(state.from);
      const to = parseDateInput(state.to, true);
      return loadInto(
        results,
        async () => {
          const rows = await incidents.list({ type: state.type, status: state.status === "active" ? "" : state.status, from, to, q: state.q, mine: state.mine });
          return state.status === "active" ? rows.filter((r) => r.status !== "Resolved") : rows;
        },
        (rows) => {
          lastRows = rows;
          renderTable();
        },
        { loading: quiet ? false : `<div class="results-loading">${[1, 2, 3, 4, 5, 6].map(() => '<span class="skel" style="height:18px;margin:12px 16px"></span>').join("")}</div>` }
      );
    }
    el.querySelector("#f-type").addEventListener("change", (e) => {
      state.type = e.target.value;
      state.page = 1;
      load2();
    });
    el.querySelector("#f-status").addEventListener("change", (e) => {
      state.status = e.target.value;
      state.page = 1;
      load2();
    });
    const search = el.querySelector("#f-q");
    search.addEventListener(
      "input",
      debounce(() => {
        state.q = search.value;
        state.page = 1;
        load2();
      }, 280)
    );
    const fromIn = el.querySelector("#f-from");
    const toIn = el.querySelector("#f-to");
    const clearDates = el.querySelector("[data-clear-dates]");
    [fromIn, toIn].forEach((input) => {
      input.addEventListener("focus", () => {
        var _a2;
        input.type = "date";
        try {
          (_a2 = input.showPicker) == null ? void 0 : _a2.call(input);
        } catch {
        }
      });
      input.addEventListener("blur", () => {
        if (!input.value) input.type = "text";
      });
      input.addEventListener("change", () => {
        if (fromIn.value && toIn.value && fromIn.value > toIn.value) {
          if (input === fromIn) toIn.value = fromIn.value;
          else fromIn.value = toIn.value;
        }
        if (fromIn.value) toIn.min = fromIn.value;
        state.from = fromIn.value;
        state.to = toIn.value;
        clearDates.hidden = !(state.from || state.to);
        state.page = 1;
        load2();
      });
    });
    clearDates.addEventListener("click", () => {
      fromIn.value = "";
      toIn.value = "";
      fromIn.type = "text";
      toIn.type = "text";
      state.from = "";
      state.to = "";
      clearDates.hidden = true;
      load2();
    });
    results.addEventListener("click", (e) => {
      var _a2;
      const s = e.target.closest("[data-sort]");
      if (s) {
        const key2 = s.dataset.sort;
        state.sort = state.sort.key === key2 ? { key: key2, dir: state.sort.dir === "asc" ? "desc" : "asc" } : { key: key2, dir: key2 === "reportedAt" ? "desc" : "asc" };
        renderTable();
        (_a2 = results.querySelector(`[data-sort="${key2}"]`)) == null ? void 0 : _a2.focus();
        return;
      }
      const p = e.target.closest("[data-page]");
      if (p) {
        state.page += Number(p.dataset.page);
        renderTable();
        el.querySelector(".incidents-card").scrollIntoView({ block: "start", behavior: "smooth" });
        return;
      }
      if (e.target.closest("[data-reset]")) {
        Object.assign(state, { type: "", status: "", from: "", to: "", q: "", page: 1 });
        el.querySelector("#f-type").value = "";
        el.querySelector("#f-status").value = "";
        search.value = "";
        clearDates.click();
      }
    });
    bindRowLinks(results, ctx.navigate);
    (_a = el.querySelector("[data-export]")) == null ? void 0 : _a.addEventListener("click", () => {
      const rows = sortRows(lastRows);
      const head = "Reference,Type,Location,Reported,Status";
      const csv = [head, ...rows.map((i) => [i.id, i.type, i.location, formatDateTime(i.reportedAt), i.status].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))].join("\n");
      const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
      const a = Object.assign(document.createElement("a"), { href: url, download: "incidents.csv" });
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1e3);
    });
    load2();
    const off = on("incidents", () => load2({ quiet: true }));
    return off;
  }
  function incidentDetailView(el, ctx) {
    const id = ctx.params.id;
    const security = ctx.user.role === "security";
    el.innerHTML = `${pageHead({ title: `Incident #${id}`, back: security ? "#/feed" : "#/incidents" })}<div data-body></div>`;
    const body = el.querySelector("[data-body]");
    let map = null;
    let patrolList = [];
    async function fetchAll() {
      const [inc, ps] = await Promise.all([incidents.get(id), security ? patrols.list() : Promise.resolve([])]);
      patrolList = ps;
      return inc;
    }
    function render2(inc) {
      map == null ? void 0 : map.destroy();
      const mine = inc.reporterId === ctx.user.id;
      body.innerHTML = `
      <div class="detail-grid">
        <div class="detail-main">
          <section class="card detail-card">
            <div class="detail-card__head">
              <span class="detail-card__glyph">${typeGlyph(inc.type, 34)}</span>
              <div class="detail-card__titles">
                <h2 class="detail-card__title">${esc(inc.type)}</h2>
                <p class="detail-card__meta">${icon("pin")}${esc(inc.location)}<span aria-hidden="true">•</span>${esc(timeAgo(inc.reportedAt))}</p>
              </div>
              ${statusPill(inc.status)}
            </div>
            <dl class="facts">
              <div><dt>Reference</dt><dd>#${esc(inc.id)}</dd></div>
              <div><dt>Reported</dt><dd>${esc(formatDateTime(inc.reportedAt))}</dd></div>
              <div><dt>Reported by</dt><dd>${esc(mine ? "You" : inc.reporterName)}</dd></div>
              <div><dt>Priority</dt><dd><span class="prio prio--${inc.priority.toLowerCase()}">${esc(inc.priority)}</span></dd></div>
              <div><dt>Assigned patrol</dt><dd>${inc.patrol ? `${esc(inc.patrol.callSign)} · ${esc(inc.patrol.officer)}` : '<span class="muted">Not assigned</span>'}</dd></div>
              <div><dt>Resolved</dt><dd>${inc.resolvedAt ? esc(formatDateTime(inc.resolvedAt)) : '<span class="muted">—</span>'}</dd></div>
            </dl>
            <div class="detail-card__section">
              <h3 class="section-label">Description</h3>
              <p class="detail-card__desc">${esc(inc.description || "No description provided.")}</p>
            </div>
            ${inc.photo ? `<div class="detail-card__section"><h3 class="section-label">Photo</h3>${inc.photo.url ? `<img class="detail-photo" src="${inc.photo.url}" alt="Photo attached to the report" />` : `<p class="muted">${icon("image")} ${esc(inc.photo.name)} (preview not stored)</p>`}</div>` : ""}
          </section>

          ${security ? actionsCard(inc) : studentNote(inc)}

          <section class="card">
            <div class="card__head"><h2 class="card__title">Activity</h2></div>
            <ol class="timeline">
              ${[...inc.timeline].reverse().map((t) => `<li class="timeline__item"><span class="timeline__dot"></span><div><p class="timeline__label">${esc(t.label)}</p><p class="timeline__meta">${esc(t.by)} · ${esc(formatDateTime(t.at))}</p></div></li>`).join("")}
            </ol>
          </section>
        </div>
        <section class="card detail-map" aria-label="Incident location map">
          <div class="card__head"><h2 class="card__title">Location</h2><button type="button" class="btn btn--ghost btn--sm" data-recenter>${icon("crosshair")}Recenter</button></div>
          <div class="detail-map__frame"><div data-map></div></div>
        </section>
      </div>`;
      map = createCampusMap(body.querySelector("[data-map]"), {
        controls: true,
        wheel: false,
        ariaLabel: `Map showing ${inc.location}`,
        popup: () => `<div class="pop"><div class="pop__title">${esc(inc.type)}</div><div class="pop__meta">${esc(inc.location)}</div></div>`
      });
      map.setMarkers([{ id: inc.id, x: inc.x, y: inc.y, color: inc.status === "Resolved" ? "#f5a524" : "#e5484d", label: `${inc.type} location`, pulse: inc.status === "New" }]);
      requestAnimationFrame(() => map.focus(inc.x, inc.y, 2));
      body.querySelector("[data-recenter]").addEventListener("click", () => map.focus(inc.x, inc.y, 2));
      if (security) bindActions(inc);
    }
    function studentNote(inc) {
      const msg = inc.status === "Resolved" ? "Campus Security has resolved this incident." : inc.status === "In Progress" ? "Campus Security is responding to this incident." : "Campus Security has been notified and will review this report shortly.";
      return `<section class="card note-card note-card--${inc.status === "Resolved" ? "ok" : "info"}">${icon(inc.status === "Resolved" ? "shieldCheck" : "bell")}<p>${esc(msg)}</p></section>`;
    }
    function actionsCard(inc) {
      const onDuty = patrolList.filter((p) => p.onDuty);
      return `<section class="card actions-card" aria-labelledby="actions-title">
      <div class="card__head"><h2 class="card__title" id="actions-title">Response</h2></div>
      <div class="card__body actions-card__body">
        <div class="field">
          <span class="field__label" id="status-label">Status</span>
          <div class="status-switch" role="radiogroup" aria-labelledby="status-label">
            ${STATUSES.map((s) => `<button type="button" role="radio" aria-checked="${inc.status === s}" class="status-switch__btn${inc.status === s ? " is-active" : ""}" data-status="${esc(s)}">${esc(s)}</button>`).join("")}
          </div>
        </div>
        <div class="field">
          <label class="field__label" for="assign">Dispatch patrol</label>
          <div class="inline-form">
            <select class="select" id="assign">
              <option value="">Select a patrol on duty</option>
              ${onDuty.map((p) => `<option value="${p.id}" ${inc.assignedTo === p.id ? "selected" : ""}>${esc(p.callSign)} · ${esc(p.officer)}</option>`).join("")}
            </select>
            <button type="button" class="btn btn--outline" data-assign>Dispatch</button>
          </div>
        </div>
        <div class="field">
          <label class="field__label" for="note">Add note</label>
          <textarea class="textarea" id="note" rows="2" placeholder="e.g. Spoke to witness, reviewing CCTV"></textarea>
          <p class="field__msg"></p>
          <div class="actions-card__foot"><button type="button" class="btn btn--primary btn--sm" data-note>Save note</button></div>
        </div>
      </div>
    </section>`;
    }
    function bindActions(inc) {
      body.querySelectorAll("[data-status]").forEach(
        (b) => b.addEventListener("click", async () => {
          const status = b.dataset.status;
          if (status === inc.status) return;
          if (status === "Resolved") {
            const ok = await confirmDialog({ title: "Mark as resolved?", message: `The reporter will be notified that #${inc.id} has been resolved.`, confirmLabel: "Mark resolved" });
            if (!ok) return;
          }
          body.querySelectorAll("[data-status]").forEach((x) => x.disabled = true);
          b.innerHTML = '<span class="spinner" aria-hidden="true"></span>';
          try {
            await incidents.updateStatus(inc.id, status);
            toast(`#${inc.id} marked as ${status}.`, { type: "success" });
          } catch (err) {
            toast(err.message, { type: "error" });
            load2(true);
          }
        })
      );
      body.querySelector("[data-assign]").addEventListener("click", async (e) => {
        const sel = body.querySelector("#assign");
        if (!sel.value) {
          sel.focus();
          toast("Select a patrol to dispatch.", { type: "warning" });
          return;
        }
        setLoading(e.currentTarget, true, "Dispatching…");
        try {
          const p = patrolList.find((x) => x.id === sel.value);
          await incidents.assign(inc.id, sel.value);
          toast(`${p.callSign} dispatched to ${inc.location}.`, { type: "success" });
        } catch (err) {
          setLoading(e.currentTarget, false);
          toast(err.message, { type: "error" });
        }
      });
      body.querySelector("[data-note]").addEventListener("click", async (e) => {
        const ta = body.querySelector("#note");
        const field = ta.closest(".field");
        if (!ta.value.trim()) {
          field.classList.add("has-error");
          field.querySelector(".field__msg").textContent = "Write a note first.";
          ta.focus();
          return;
        }
        field.classList.remove("has-error");
        field.querySelector(".field__msg").textContent = "";
        setLoading(e.currentTarget, true, "Saving…");
        try {
          await incidents.updateStatus(inc.id, inc.status, ta.value);
          toast("Note added to the activity log.", { type: "success" });
        } catch (err) {
          setLoading(e.currentTarget, false);
          toast(err.message, { type: "error" });
        }
      });
    }
    function load2(quiet = false) {
      return loadInto(body, fetchAll, render2, quiet ? { loading: false } : {});
    }
    load2();
    const off = on("incidents", () => load2(true));
    return () => {
      off();
      map == null ? void 0 : map.destroy();
    };
  }
  const options = (selected) => campus.locations.map((l) => `<option value="${l.id}" ${l.id === selected ? "selected" : ""}>${esc(l.name)}</option>`).join("");
  function safeRouteView(el, ctx) {
    var _a, _b;
    let from = ((_a = campus.locationById(ctx.query.get("from"))) == null ? void 0 : _a.id) || "library";
    let to = ((_b = campus.locationById(ctx.query.get("to"))) == null ? void 0 : _b.id) || "student-centre";
    let result = null;
    el.innerHTML = `
    <header class="page-head page-head--route">
      <div class="page-head__main">
        <a class="page-head__back" href="#/dashboard" aria-label="Go back">${icon("arrowLeft")}</a>
        <h1 class="page-head__title">Safe Route</h1>
      </div>
      <button type="button" class="icon-btn route-saved" data-saved aria-haspopup="menu" aria-expanded="false" aria-label="Saved routes" title="Saved routes">${icon("chevronRight")}</button>
    </header>
    <section class="card route-card">
      <form class="route-form" id="route-form" novalidate>
        <div class="route-field">
          <label class="route-field__label" for="r-from">From</label>
          <span class="route-field__icon">${icon("building")}</span>
          <select class="select route-field__select" id="r-from">${options(from)}</select>
        </div>
        <div class="route-field">
          <label class="route-field__label" for="r-to">To</label>
          <button type="button" class="route-field__icon route-field__swap" data-swap aria-label="Swap start and destination" title="Swap">${icon("swap")}</button>
          <select class="select route-field__select route-field__select--plain" id="r-to">${options(to)}</select>
        </div>
        <p class="route-form__error field__msg" data-error role="alert"></p>
        <button type="submit" class="btn btn--primary btn--block route-form__btn">Find Safe Route</button>
      </form>
      <div class="route-view">
        <div class="route-map"><div data-map></div></div>
        <aside class="route-panel" aria-live="polite" data-panel></aside>
      </div>
    </section>`;
    const form = el.querySelector("#route-form");
    const fromSel = el.querySelector("#r-from");
    const toSel = el.querySelector("#r-to");
    const panel = el.querySelector("[data-panel]");
    const errorEl = el.querySelector("[data-error]");
    const map = createCampusMap(el.querySelector("[data-map]"), {
      controls: true,
      wheel: false,
      ariaLabel: "Map showing the recommended safe route",
      popup: (m) => `<div class="pop"><div class="pop__title">${esc(m.title)}</div><div class="pop__meta">${esc(m.note || "")}</div></div>`
    });
    let activeIncidents = [];
    incidents.list({}).then((rows) => {
      activeIncidents = rows.filter((r) => r.status !== "Resolved");
      if (result) drawResult(result, false);
    }).catch(() => {
    });
    function panelRows(r) {
      return `<h2 class="route-panel__title">Recommended Route</h2>
      <ul class="route-stats">
        <li><span class="route-stats__label">${icon("pin")}Distance</span><strong>${esc(r.distance)}</strong></li>
        <li><span class="route-stats__label">${icon("clock")}Estimated time</span><strong>${r.minutes} min</strong></li>
        <li><span class="route-stats__label route-stats__label--safe">${icon("shieldCheck")}Safety level</span><strong class="safety safety--${r.safety.toLowerCase()}"><span class="dot"></span>${esc(r.safety)}</strong></li>
      </ul>
      <p class="route-panel__note">${r.avoided ? `Avoids ${r.avoided} active incident${r.avoided === 1 ? "" : "s"}` : "Uses well-lit main paths"}${r.helpPoints.length ? ` · passes ${r.helpPoints.length} help point${r.helpPoints.length === 1 ? "" : "s"}` : ""}.</p>
      <div class="route-panel__actions">
        <button type="button" class="btn btn--outline btn--sm" data-save>${icon("bookmark")}Save route</button>
      </div>`;
    }
    function drawResult(r, fit = true) {
      map.setRoutes([{ points: r.points, gradient: ["#1fa35c", "#1f63e6", "#e5484d"], width: 5, animate: fit }]);
      map.setMarkers([
        ...activeIncidents.map((i) => ({ id: i.id, x: i.x, y: i.y, color: "#e5484d", label: `${i.type} at ${i.location}`, title: i.type, note: `${i.location} · avoid this area` })),
        ...r.helpPoints.map((h) => ({ id: h.id, kind: "patrol", color: "#22a05b", x: h.x, y: h.y, label: h.name, title: h.name, note: h.note })),
        { id: "start", x: r.from.x, y: r.from.y, color: "#22a05b", label: `Start: ${r.from.name}`, title: r.from.name, note: "Start" },
        { id: "end", x: r.to.x, y: r.to.y, color: "#e5484d", label: `Destination: ${r.to.name}`, title: r.to.name, note: "Destination" }
      ]);
      if (fit) map.fit(r.points, 60);
    }
    async function find() {
      var _a2;
      errorEl.textContent = "";
      toSel.closest(".route-field").classList.remove("has-error");
      if (from === to) {
        errorEl.textContent = "Start and destination must be different.";
        toSel.closest(".route-field").classList.add("has-error");
        toSel.focus();
        return;
      }
      const btn = form.querySelector("[type=submit]");
      setLoading(btn, true, "Finding safest route…");
      panel.innerHTML = `<div class="route-panel__loading"><span class="spinner spinner--lg"></span><span>Checking incidents and lighting…</span></div>`;
      try {
        result = await routes.find(from, to);
        panel.innerHTML = panelRows(result);
        drawResult(result);
        history.replaceState(null, "", `#/routes?from=${from}&to=${to}`);
      } catch (err) {
        panel.innerHTML = errorState(err.message);
        (_a2 = panel.querySelector("[data-retry]")) == null ? void 0 : _a2.addEventListener("click", find);
        map.setRoutes([]);
      } finally {
        setLoading(btn, false);
      }
    }
    fromSel.addEventListener("change", () => from = fromSel.value);
    toSel.addEventListener("change", () => to = toSel.value);
    el.querySelector("[data-swap]").addEventListener("click", () => {
      [from, to] = [to, from];
      fromSel.value = from;
      toSel.value = to;
      if (result) find();
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      find();
    });
    panel.addEventListener("click", async (e) => {
      const save = e.target.closest("[data-save]");
      if (!save || !result) return;
      setLoading(save, true, "Saving…");
      try {
        await routes.save(result.from.id, result.to.id);
        save.outerHTML = `<span class="route-panel__saved">${icon("check")}Saved to your routes</span>`;
        toast(`${result.from.name} → ${result.to.name} saved.`, { type: "success" });
      } catch (err) {
        setLoading(save, false);
        toast(err.message, { type: err.message.includes("already") ? "info" : "error" });
      }
    });
    el.querySelector("[data-saved]").addEventListener("click", async (e) => {
      const anchor = e.currentTarget;
      try {
        const saved = await routes.saved();
        openMenu(
          anchor,
          saved.length ? [...saved.map((r) => ({ value: `${r.from}|${r.to}`, label: `${r.fromName} → ${r.toName}`, icon: "route", active: r.from === from && r.to === to })), { divider: true }, { value: "remove", label: "Remove current from saved", icon: "trash", danger: true }] : [{ value: "none", label: "No saved routes yet", icon: "bookmark" }],
          async (v) => {
            if (v === "none") return;
            if (v === "remove") {
              const match2 = saved.find((r) => r.from === from && r.to === to);
              if (!match2) return toast("The current route is not in your saved routes.");
              await routes.remove(match2.id);
              return toast("Route removed from saved routes.");
            }
            [from, to] = v.split("|");
            fromSel.value = from;
            toSel.value = to;
            find();
          }
        );
      } catch (err) {
        toast(err.message, { type: "error" });
      }
    });
    find();
    return () => map.destroy();
  }
  function niceMax(v, ticks) {
    const raw = Math.max(1, v) / ticks;
    const mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const step = [1, 2, 2.5, 5, 10].map((s) => s * mag).find((s) => s >= raw) || 10 * mag;
    return { max: Math.ceil(v / step) * step || step * ticks, step };
  }
  function mountChart(el, opts) {
    const o = { type: "line", height: 150, color: "#2f6fe0", ticks: 4, unit: "incidents", ...opts };
    el.classList.add("chart");
    const tip = document.createElement("div");
    tip.className = "chart__tip";
    tip.hidden = true;
    function draw() {
      const width = Math.max(220, el.clientWidth);
      const height = o.height;
      const pad = { l: 28, r: 10, t: 12, b: 24 };
      const iw = width - pad.l - pad.r;
      const ih = height - pad.t - pad.b;
      const n = o.values.length;
      const { max, step } = niceMax(Math.max(...o.values, 1), o.ticks);
      const y = (v) => pad.t + ih - v / max * ih;
      const band = iw / n;
      const x = o.type === "line" ? (i) => pad.l + (n === 1 ? iw / 2 : i * iw / (n - 1)) : (i) => pad.l + band * i + band / 2;
      let grid = "";
      for (let v = 0; v <= max + 1e-9; v += step) {
        grid += `<line x1="${pad.l}" x2="${width - pad.r}" y1="${y(v).toFixed(1)}" y2="${y(v).toFixed(1)}" class="chart__grid"/><text x="${pad.l - 7}" y="${(y(v) + 3.5).toFixed(1)}" text-anchor="end" class="chart__axis">${Math.round(v)}</text>`;
      }
      const every = Math.ceil(n / Math.max(2, Math.floor(iw / 44)));
      const xl = o.labels.map((l, i) => (o.allLabels ? l : i % every === 0 || i === n - 1) ? `<text x="${x(i).toFixed(1)}" y="${height - 6}" text-anchor="middle" class="chart__axis">${esc(l)}</text>` : "").join("");
      let body = "";
      const gid = `cg-${Math.random().toString(36).slice(2, 8)}`;
      if (o.type === "line") {
        const line = o.values.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join("");
        const area = `${line}L${x(n - 1).toFixed(1)} ${pad.t + ih}L${x(0).toFixed(1)} ${pad.t + ih}Z`;
        body = `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${o.color}" stop-opacity=".28"/><stop offset="1" stop-color="${o.color}" stop-opacity=".02"/></linearGradient></defs>
        <path d="${area}" fill="url(#${gid})"/>
        <path d="${line}" fill="none" stroke="${o.color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
        <line class="chart__cursor" y1="${pad.t}" y2="${pad.t + ih}" hidden/>
        <circle class="chart__dot" r="4.2" fill="#fff" stroke="${o.color}" stroke-width="2.2" hidden/>`;
      } else {
        const bw = Math.min(26, band * 0.56);
        body = o.values.map((v, i) => `<rect class="chart__bar" data-i="${i}" x="${(x(i) - bw / 2).toFixed(1)}" y="${y(v).toFixed(1)}" width="${bw.toFixed(1)}" height="${Math.max(0, pad.t + ih - y(v)).toFixed(1)}" rx="4" fill="${o.color}"/>`).join("");
      }
      el.innerHTML = `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${esc(o.ariaLabel || "Chart")}">${grid}${body}${xl}<rect class="chart__hit" x="${pad.l}" y="${pad.t}" width="${iw}" height="${ih}" fill="transparent"/></svg>`;
      el.appendChild(tip);
      const svg = el.querySelector("svg");
      const hit = el.querySelector(".chart__hit");
      const dot = el.querySelector(".chart__dot");
      const cursor = el.querySelector(".chart__cursor");
      const show = (i) => {
        var _a;
        const cx = x(i);
        const cy = y(o.values[i]);
        if (dot) {
          dot.hidden = false;
          dot.setAttribute("cx", cx);
          dot.setAttribute("cy", cy);
          cursor.hidden = false;
          cursor.setAttribute("x1", cx);
          cursor.setAttribute("x2", cx);
        }
        el.querySelectorAll(".chart__bar").forEach((b) => b.classList.toggle("is-dim", Number(b.dataset.i) !== i));
        tip.hidden = false;
        tip.innerHTML = `<strong>${o.values[i]}</strong> ${esc(o.values[i] === 1 ? o.unit.replace(/s$/, "") : o.unit)}<span>${esc(((_a = o.tooltipLabels) == null ? void 0 : _a[i]) || o.labels[i])}</span>`;
        const left = Math.min(Math.max(cx, tip.offsetWidth / 2 + 4), width - tip.offsetWidth / 2 - 4);
        tip.style.left = `${left}px`;
        tip.style.top = `${cy - 10}px`;
      };
      const hide = () => {
        tip.hidden = true;
        if (dot) {
          dot.hidden = true;
          cursor.hidden = true;
        }
        el.querySelectorAll(".chart__bar").forEach((b) => b.classList.remove("is-dim"));
      };
      const onMove = (e) => {
        const r = svg.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width * width;
        let i = o.type === "line" ? Math.round((px - pad.l) / iw * (n - 1)) : Math.floor((px - pad.l) / band);
        i = Math.max(0, Math.min(n - 1, i));
        show(i);
      };
      hit.addEventListener("pointermove", onMove);
      hit.addEventListener("pointerleave", hide);
    }
    draw();
    let last = el.clientWidth;
    const ro = new ResizeObserver(() => {
      if (Math.abs(el.clientWidth - last) > 2) {
        last = el.clientWidth;
        draw();
      }
    });
    ro.observe(el);
    return {
      update(next) {
        Object.assign(o, next);
        draw();
      },
      destroy: () => ro.disconnect()
    };
  }
  function barRows(items, { track = true, suffix = "" } = {}) {
    const max = Math.max(...items.map((i) => i.value), 1);
    return `<ul class="bars${track ? "" : " bars--plain"}">${items.map(
      (it) => `<li class="bars__row">
        <span class="bars__label"><span class="bars__dot" style="background:${it.color}"></span>${esc(it.label)}</span>
        ${track ? `<span class="bars__track"><span class="bars__fill" style="width:${(it.value / max * 100).toFixed(1)}%;background:${it.color}"></span></span>` : ""}
        <span class="bars__value">${esc(it.display ?? `${it.value}${suffix}`)}</span>
      </li>`
    ).join("")}</ul>`;
  }
  const TABS = [
    { id: "overview", label: "Overview" },
    { id: "hotspots", label: "Hotspots" },
    { id: "trends", label: "Trends" }
  ];
  function analyticsView(el, ctx) {
    let tab = TABS.some((t) => t.id === ctx.query.get("tab")) ? ctx.query.get("tab") : "hotspots";
    let range = "7d";
    let data = null;
    let disposers = [];
    el.innerHTML = `
    <header class="page-head">
      <div class="page-head__main"><h1 class="page-head__title">Incident Analytics</h1></div>
      <div class="page-head__actions">
        <label class="sr-only" for="a-range">Date range</label>
        <select class="select select--sm" id="a-range">
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>
    </header>
    <div class="tabs" role="tablist" aria-label="Analytics views">
      ${TABS.map((t) => `<button type="button" role="tab" id="tab-${t.id}" class="tabs__btn" aria-controls="tabpanel" data-tab="${t.id}">${t.label}</button>`).join("")}
    </div>
    <div id="tabpanel" role="tabpanel" data-panel></div>`;
    const panel = el.querySelector("[data-panel]");
    const tabBtns = [...el.querySelectorAll("[data-tab]")];
    function cleanupPanel() {
      disposers.forEach((d) => d());
      disposers = [];
    }
    function syncTabs() {
      tabBtns.forEach((b) => {
        const on2 = b.dataset.tab === tab;
        b.classList.toggle("is-active", on2);
        b.setAttribute("aria-selected", String(on2));
        b.tabIndex = on2 ? 0 : -1;
      });
      panel.setAttribute("aria-labelledby", `tab-${tab}`);
    }
    const typesCard = (d) => `<section class="card an-card"><div class="an-card__head"><h2 class="an-card__title">Top Incident Types</h2></div>${barRows(d.types, { track: false })}</section>`;
    function lineCard(d, title = "Incidents Over Time") {
      return `<section class="card an-card"><div class="an-card__head"><h2 class="an-card__title">${title}</h2></div><div data-chart="trend"></div></section>`;
    }
    function renderHotspots(d) {
      panel.innerHTML = `
      <div class="an-grid an-grid--hotspots">
        <section class="card an-map" aria-label="Incident heatmap">
          <div class="an-map__frame"><div data-map></div></div>
          <ul class="heat-legend" aria-label="Heat scale"><li>Low</li><li class="heat-legend__bar" aria-hidden="true"></li><li>High</li></ul>
        </section>
        <div class="an-side">${typesCard(d)}${lineCard()}</div>
      </div>`;
      const map = createCampusMap(panel.querySelector("[data-map]"), {
        controls: true,
        wheel: false,
        markerScale: 0.85,
        ariaLabel: "Heatmap of incident hotspots",
        popup: (m) => `<div class="pop"><div class="pop__title">${esc(m.title)}</div><div class="pop__meta">${m.count} incidents in this period</div></div>`
      });
      map.setHeat(d.hotspots);
      const top = [...d.hotspots].sort((a, b) => b.count - a.count);
      map.setMarkers(top.slice(0, 1).map((h, i) => ({ id: `hs-${i}`, x: h.x + 14, y: h.y + 30, color: "#1f8fb8", label: `Top hotspot ${h.name}: ${h.count} incidents`, title: `${h.name} (top hotspot)`, count: h.count })));
      disposers.push(() => map.destroy());
      mountTrend(d);
    }
    function mountTrend(d) {
      const host = panel.querySelector('[data-chart="trend"]');
      if (!host) return;
      const c = mountChart(host, { type: "line", values: d.trend, labels: d.trendLabels, tooltipLabels: d.trendTips, allLabels: true, color: "#2f6fe0", height: 132, ariaLabel: "Incidents over time line chart" });
      disposers.push(c.destroy);
    }
    function renderOverview(d) {
      const kpi = (label, value, ic, tone) => `<article class="kpi"><span class="kpi__icon kpi__icon--${tone}">${icon(ic)}</span><div><p class="kpi__label">${label}</p><p class="kpi__value">${esc(value)}</p></div></article>`;
      panel.innerHTML = `
      <div class="kpis">
        ${kpi("Total incidents", d.total, "clipboard", "blue")}
        ${kpi("Active now", d.active, "alertCircle", "red")}
        ${kpi("Avg. response", d.avgResponse, "clock", "amber")}
        ${kpi("Resolution rate", d.resolutionRate, "shieldCheck", "green")}
      </div>
      <div class="an-grid an-grid--overview">
        <section class="card an-card"><div class="an-card__head"><h2 class="an-card__title">Incidents per ${range === "7d" ? "day" : range === "30d" ? "week" : "month"}</h2></div><div data-chart="weekly"></div></section>
        ${typesCard(d)}
        <section class="card an-card"><div class="an-card__head"><h2 class="an-card__title">Top Locations</h2></div>${barRows(d.byLocation)}</section>
      </div>`;
      const c = mountChart(panel.querySelector('[data-chart="weekly"]'), { type: "bar", values: d.weekly, labels: d.weeklyLabels, color: "#2f6fe0", height: 190, ariaLabel: "Incidents per period bar chart" });
      disposers.push(c.destroy);
    }
    function renderTrends(d) {
      panel.innerHTML = `
      <div class="an-grid an-grid--trends">
        ${lineCard(d, "Incidents Over Time")}
        <section class="card an-card"><div class="an-card__head"><h2 class="an-card__title">Incidents by Time of Day</h2></div><div data-chart="hour"></div></section>
        <section class="card an-card an-insights">
          <div class="an-card__head"><h2 class="an-card__title">Insights</h2></div>
          <ul>
            <li>${icon("clock")}<span>Most incidents happen between <strong>14:00 and 18:00</strong>.</span></li>
            <li>${icon("pin")}<span><strong>Library</strong> remains the top hotspot, mostly theft of unattended items.</span></li>
            <li>${icon("chart")}<span>Reports rose toward the weekend; consider an extra patrol on Saturday evenings.</span></li>
          </ul>
        </section>
      </div>`;
      mountTrend(d);
      const c = mountChart(panel.querySelector('[data-chart="hour"]'), { type: "bar", values: d.byHour, labels: d.byHourLabels, color: "#f2a81d", height: 170, ariaLabel: "Incidents by hour bar chart" });
      disposers.push(c.destroy);
    }
    function renderTab() {
      cleanupPanel();
      syncTabs();
      if (!data) return;
      ({ overview: renderOverview, hotspots: renderHotspots, trends: renderTrends })[tab](data);
    }
    function load2() {
      cleanupPanel();
      syncTabs();
      loadInto(panel, () => analytics.get(range), (d) => {
        data = d;
        renderTab();
      });
    }
    el.querySelector(".tabs").addEventListener("click", (e) => {
      const b = e.target.closest("[data-tab]");
      if (!b || b.dataset.tab === tab) return;
      tab = b.dataset.tab;
      history.replaceState(null, "", `#/analytics?tab=${tab}`);
      renderTab();
    });
    el.querySelector(".tabs").addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const i = TABS.findIndex((t) => t.id === tab);
      const next = TABS[(i + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length];
      tab = next.id;
      renderTab();
      el.querySelector(`[data-tab="${tab}"]`).focus();
    });
    el.querySelector("#a-range").addEventListener("change", (e) => {
      range = e.target.value;
      load2();
    });
    load2();
    return cleanupPanel;
  }
  function patrolsView(el, ctx) {
    const layers = { incidents: true, patrols: true, help: true };
    let patrolData = [];
    let activeIncidents = [];
    let raf = null;
    let offset = Date.now() / 1e3 % 1e4;
    el.innerHTML = `
    ${pageHead({ title: "Map & Patrols", subtitle: "Live positions of patrol units and open incidents." })}
    <div class="patrol-grid">
      <section class="card patrol-map" aria-label="Live patrol map">
        <div class="layer-bar" role="group" aria-label="Map layers">
          <button type="button" class="chip is-on" data-layer="incidents" aria-pressed="true"><span class="chip__dot" style="background:#e5484d"></span>Incidents</button>
          <button type="button" class="chip is-on" data-layer="patrols" aria-pressed="true"><span class="chip__dot" style="background:#1a6ae8"></span>Patrols</button>
          <button type="button" class="chip is-on" data-layer="help" aria-pressed="true"><span class="chip__dot" style="background:#22a05b"></span>Help points</button>
        </div>
        <div class="patrol-map__frame"><div data-map></div></div>
      </section>
      <aside class="patrol-side">
        <section class="card">
          <div class="card__head"><h2 class="card__title">Patrol Units</h2><span class="muted small" data-onduty></span></div>
          <div data-units></div>
        </section>
        <section class="card">
          <div class="card__head"><h2 class="card__title">Open Incidents</h2></div>
          <div data-open></div>
        </section>
      </aside>
    </div>`;
    const map = createCampusMap(el.querySelector("[data-map]"), {
      controls: true,
      ariaLabel: "Map with patrol units, open incidents and help points",
      markerScale: 0.9,
      popup: (m) => {
        if (m.data) return incidentPopup(m.data);
        if (m.patrol) return `<div class="pop"><div class="pop__title">${esc(m.patrol.callSign)}</div><div class="pop__meta">${esc(m.patrol.officer)} · ${esc(m.patrol.status)}</div></div>`;
        return `<div class="pop"><div class="pop__title">${esc(m.title)}</div><div class="pop__meta">${esc(m.note)}</div></div>`;
      }
    });
    const unitsEl = el.querySelector("[data-units]");
    const openEl = el.querySelector("[data-open]");
    function markers() {
      const list = [];
      if (layers.help) campus.helpPoints.forEach((h) => list.push({ id: h.id, x: h.x, y: h.y, color: "#22a05b", label: h.name, title: h.name, note: h.note }));
      if (layers.incidents) activeIncidents.forEach((i) => list.push({ id: i.id, x: i.x, y: i.y, color: i.status === "New" ? "#e5484d" : "#f2b01e", pulse: i.status === "New", label: `${i.type} at ${i.location}`, data: i }));
      if (layers.patrols) patrolData.filter((p) => p.onDuty).forEach((p) => {
        const pos = position(p);
        list.push({ id: p.id, kind: "patrol", color: p.status === "Responding" ? "#e5484d" : "#1a6ae8", x: pos.x, y: pos.y, label: `${p.callSign}, ${p.officer}`, patrol: p });
      });
      return list;
    }
    function position(p) {
      const len = polylineLength(p.path);
      return pointAlong(p.path, (offset * p.speed + len * (Number(p.id.slice(2)) * 0.27)) % len);
    }
    function animate() {
      let last = performance.now();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const step = (now) => {
        if (now - last > 90) {
          offset += reduce ? 0 : (now - last) / 1e3;
          last = now;
          if (layers.patrols) patrolData.filter((p) => p.onDuty).forEach((p) => {
            const pos = position(p);
            map.moveMarker(p.id, pos.x, pos.y);
          });
        }
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }
    function renderUnits() {
      el.querySelector("[data-onduty]").textContent = `${patrolData.filter((p) => p.onDuty).length} on duty`;
      unitsEl.innerHTML = `<ul class="units">${patrolData.map(
        (p) => `<li class="unit${p.onDuty ? "" : " is-off"}">
          <button type="button" class="unit__main" data-locate="${p.id}" ${p.onDuty ? "" : "disabled"} aria-label="Show ${esc(p.callSign)} on map">
            <span class="avatar avatar--sm ${p.status === "Responding" ? "avatar--alert" : ""}">${esc(initials(p.officer.replace("Officer ", "")))}</span>
            <span class="unit__text"><strong>${esc(p.callSign)} <span class="unit__status unit__status--${p.onDuty ? p.status === "Responding" ? "busy" : "on" : "off"}">${esc(p.status)}</span></strong><span>${esc(p.officer)}</span>${p.assigned.length ? `<span class="unit__task">${icon("navigation")}${esc(p.assigned[0].type)} · ${esc(p.assigned[0].location)}</span>` : ""}</span>
          </button>
          <label class="switch" title="${p.onDuty ? "Set off duty" : "Set on duty"}"><input type="checkbox" data-duty="${p.id}" ${p.onDuty ? "checked" : ""} aria-label="${esc(p.callSign)} on duty" /><span></span></label>
        </li>`
      ).join("")}</ul>`;
    }
    function renderOpen() {
      openEl.innerHTML = activeIncidents.length ? `<ul class="open-list">${activeIncidents.map(
        (i) => `<li class="open-item">
              <button type="button" class="open-item__main" data-focus="${i.id}">
                <span class="open-item__title">${esc(i.type)}</span>
                <span class="open-item__meta">${esc(i.location)} · ${esc(formatTime(i.reportedAt))}</span>
              </button>
              ${statusPill(i.status)}
              <button type="button" class="icon-btn icon-btn--sm" data-dispatch="${i.id}" aria-label="Dispatch a patrol to ${esc(i.type)} at ${esc(i.location)}" title="Dispatch">${icon("navigation")}</button>
            </li>`
      ).join("")}</ul>` : emptyState({ title: "No open incidents", text: "Everything is resolved.", iconName: "shieldCheck" });
    }
    async function load2(quiet = false) {
      return loadInto(
        unitsEl,
        async () => {
          const [ps, inc] = await Promise.all([patrols.list(), incidents.list({})]);
          return { ps, inc };
        },
        ({ ps, inc }) => {
          patrolData = ps;
          activeIncidents = inc.filter((i) => i.status !== "Resolved");
          renderUnits();
          renderOpen();
          map.setMarkers(markers());
        },
        quiet ? { loading: false } : {}
      );
    }
    el.addEventListener("click", async (e) => {
      const chip = e.target.closest("[data-layer]");
      if (chip) {
        const k = chip.dataset.layer;
        layers[k] = !layers[k];
        chip.classList.toggle("is-on", layers[k]);
        chip.setAttribute("aria-pressed", String(layers[k]));
        map.setMarkers(markers());
        return;
      }
      const loc = e.target.closest("[data-locate]");
      if (loc) {
        const p = patrolData.find((x) => x.id === loc.dataset.locate);
        const pos = position(p);
        map.focus(pos.x, pos.y, 2.2);
        setTimeout(() => map.openMarker(p.id), 400);
        return;
      }
      const f2 = e.target.closest("[data-focus]");
      if (f2) {
        const i = activeIncidents.find((x) => x.id === f2.dataset.focus);
        map.focus(i.x, i.y, 2.2);
        setTimeout(() => map.openMarker(i.id), 400);
        return;
      }
      const d = e.target.closest("[data-dispatch]");
      if (d) {
        const onDuty = patrolData.filter((p) => p.onDuty);
        openMenu(
          d,
          onDuty.length ? onDuty.map((p) => ({ value: p.id, label: `${p.callSign} · ${p.officer.replace("Officer ", "")}`, icon: "users" })) : [{ value: "", label: "No patrols on duty", icon: "users" }],
          async (pid) => {
            if (!pid) return;
            try {
              await incidents.assign(d.dataset.dispatch, pid);
              toast(`${patrolData.find((p) => p.id === pid).callSign} dispatched.`, { type: "success" });
              load2(true);
            } catch (err) {
              toast(err.message, { type: "error" });
            }
          }
        );
      }
    });
    el.addEventListener("change", async (e) => {
      const duty = e.target.closest("[data-duty]");
      if (!duty) return;
      duty.disabled = true;
      try {
        const p = await patrols.setDuty(duty.dataset.duty, duty.checked);
        toast(`${p.callSign} is now ${p.onDuty ? "on duty" : "off duty"}.`);
        load2(true);
      } catch (err) {
        duty.checked = !duty.checked;
        duty.disabled = false;
        toast(err.message, { type: "error" });
      }
    });
    load2().then(() => map.reset());
    animate();
    const off = on("incidents", () => load2(true));
    return () => {
      off();
      cancelAnimationFrame(raf);
      map.destroy();
    };
  }
  const iconFor = (n) => /alert/i.test(n.title) ? "warning" : /resolved|saved|ready/i.test(n.title) ? "shieldCheck" : /patrol/i.test(n.title) ? "users" : "bell";
  function notificationsView(el, ctx) {
    let filter = "all";
    let items = [];
    el.innerHTML = `
    ${pageHead({ title: "Notifications", back: "#/dashboard", actions: '<button type="button" class="btn btn--outline btn--sm" data-read-all>Mark all as read</button>' })}
    <section class="card">
      <div class="card__head">
        <div class="seg-tabs" role="tablist" aria-label="Filter notifications">
          <button type="button" role="tab" class="seg-tabs__btn is-active" aria-selected="true" data-filter="all">All</button>
          <button type="button" role="tab" class="seg-tabs__btn" aria-selected="false" data-filter="unread">Unread <span class="seg-tabs__count" data-count></span></button>
        </div>
      </div>
      <div data-list></div>
    </section>`;
    const list = el.querySelector("[data-list]");
    function render2() {
      const unread = items.filter((n) => !n.read).length;
      el.querySelector("[data-count]").textContent = unread || "";
      el.querySelector("[data-read-all]").disabled = !unread;
      const rows = filter === "unread" ? items.filter((n) => !n.read) : items;
      list.innerHTML = rows.length ? `<ul class="notes">${rows.map(
        (n) => `<li class="note${n.read ? "" : " is-unread"}">
              <button type="button" class="note__btn" data-open="${esc(n.id)}">
                <span class="note__icon note__icon--${iconFor(n)}">${icon(iconFor(n))}</span>
                <span class="note__text"><span class="note__title">${esc(n.title)}</span><span class="note__body">${esc(n.body)}</span></span>
                <span class="note__time">${esc(timeAgo(n.at))}</span>
                ${n.read ? "" : '<span class="note__dot" aria-label="Unread"></span>'}
              </button>
            </li>`
      ).join("")}</ul>` : emptyState({ title: filter === "unread" ? "You’re all caught up" : "No notifications yet", text: filter === "unread" ? "There are no unread notifications." : "Updates about incidents and alerts will show up here.", iconName: "bell" });
    }
    function load2(quiet = false) {
      return loadInto(list, () => notifications.list(), (rows) => {
        items = rows;
        render2();
      }, quiet ? { loading: false } : {});
    }
    el.addEventListener("click", async (e) => {
      const f2 = e.target.closest("[data-filter]");
      if (f2) {
        filter = f2.dataset.filter;
        el.querySelectorAll("[data-filter]").forEach((b) => {
          b.classList.toggle("is-active", b === f2);
          b.setAttribute("aria-selected", String(b === f2));
        });
        render2();
        return;
      }
      const ra = e.target.closest("[data-read-all]");
      if (ra) {
        setLoading(ra, true, "Marking…");
        try {
          await notifications.markAllRead();
        } finally {
          setLoading(ra, false);
        }
        return;
      }
      const o = e.target.closest("[data-open]");
      if (o) {
        const n = items.find((x) => x.id === o.dataset.open);
        if (!n.read) notifications.markRead(n.id).catch(() => {
        });
        if (n.link === "alerts") openAlertsModal();
        else if (n.link) ctx.navigate(n.link);
      }
    });
    load2();
    return on("notifications", () => load2(true));
  }
  function profileView(el, ctx) {
    const u = currentUser();
    const student = u.role === "student";
    el.innerHTML = `
    ${pageHead({ title: "Profile", back: "#/dashboard" })}
    <div class="profile-grid">
      <section class="card profile-card">
        <span class="avatar avatar--lg${student ? "" : " avatar--photo"}" data-avatar>${student ? esc(initials(u.firstName || u.name)) : icon("userCircle")}</span>
        <h2 class="profile-card__name" data-name>${esc(u.name)}</h2>
        <span class="pill ${student ? "pill--progress-blue" : "pill--resolved"}">${student ? "Student" : "Security Staff"}</span>
        <dl class="profile-facts">
          <div><dt>${icon("mail")}Email</dt><dd>${esc(u.email)}</dd></div>
          <div><dt>${icon("idCard")}${student ? "Student ID" : "Staff ID"}</dt><dd>${esc(u.campusId)}</dd></div>
          ${u.department ? `<div><dt>${icon("building")}Department</dt><dd>${esc(u.department)}</dd></div>` : ""}
        </dl>
        ${student ? `<a class="btn btn--outline btn--sm btn--block" href="#/incidents?mine=1">${icon("clipboard")}My reports</a>` : `<a class="btn btn--outline btn--sm btn--block" href="#/settings">${icon("settings")}Settings</a>`}
      </section>
      <div class="profile-forms">
        <form class="card" id="profile-form" novalidate>
          <div class="card__head"><h2 class="card__title">Personal details</h2></div>
          <div class="card__body form-stack">
            <div class="form-alert" hidden></div>
            <div class="field"><label class="field__label" for="p-name">Full Name</label><input class="input" id="p-name" name="name" value="${esc(u.name)}" autocomplete="name" /><p class="field__msg"></p></div>
            <div class="field"><label class="field__label" for="p-phone">Phone</label><input class="input" id="p-phone" name="phone" type="tel" value="${esc(u.phone)}" placeholder="+27 ..." autocomplete="tel" /><p class="field__msg"></p></div>
            <div class="field"><label class="field__label" for="p-emergency">Emergency contact</label><input class="input" id="p-emergency" name="emergencyContact" value="${esc(u.emergencyContact)}" placeholder="Name · phone number" /><p class="field__msg"></p></div>
            <div class="form-actions"><button type="submit" class="btn btn--primary">Save changes</button></div>
          </div>
        </form>
        <form class="card" id="password-form" novalidate>
          <div class="card__head"><h2 class="card__title">Change password</h2></div>
          <div class="card__body form-stack">
            <div class="form-alert" hidden></div>
            <div class="field"><label class="field__label" for="pw-current">Current password</label><div class="control"><input class="input has-trail" id="pw-current" name="current" type="password" autocomplete="current-password" /><button type="button" class="control__trail" data-toggle-pw aria-label="Show password">${icon("eye")}</button></div><p class="field__msg"></p></div>
            <div class="field"><label class="field__label" for="pw-next">New password</label><div class="control"><input class="input has-trail" id="pw-next" name="next" type="password" autocomplete="new-password" /><button type="button" class="control__trail" data-toggle-pw aria-label="Show password">${icon("eye")}</button></div><p class="field__hint">At least 8 characters.</p><p class="field__msg"></p></div>
            <div class="form-actions"><button type="submit" class="btn btn--outline">Update password</button></div>
          </div>
        </form>
      </div>
    </div>`;
    bindPasswordToggles(el);
    const pf = el.querySelector("#profile-form");
    liveClearErrors(pf);
    pf.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearErrors(pf);
      const btn = pf.querySelector("[type=submit]");
      setLoading(btn, true, "Saving…");
      try {
        const next = await profile.update({ name: pf.elements.name.value, phone: pf.elements.phone.value, emergencyContact: pf.elements.emergencyContact.value });
        el.querySelector("[data-name]").textContent = next.name;
        if (student) el.querySelector("[data-avatar]").textContent = initials(next.firstName);
        toast("Profile updated.", { type: "success" });
      } catch (err) {
        if (err.field && pf.elements[err.field]) {
          setFieldError(pf.elements[err.field], err.message);
          pf.elements[err.field].focus();
        } else showFormAlert(pf, err.message);
      } finally {
        setLoading(btn, false);
      }
    });
    const pw = el.querySelector("#password-form");
    liveClearErrors(pw);
    pw.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearErrors(pw);
      const { current, next } = pw.elements;
      let ok = true;
      if (!current.value) {
        setFieldError(current, "Enter your current password.");
        ok = false;
      }
      if (next.value.length < 8) {
        setFieldError(next, "Use at least 8 characters.");
        ok = false;
      }
      if (!ok) return;
      const btn = pw.querySelector("[type=submit]");
      setLoading(btn, true, "Updating…");
      try {
        await profile.changePassword(current.value, next.value);
        pw.reset();
        toast("Password updated.", { type: "success" });
      } catch (err) {
        if (err.field) setFieldError(pw.elements[err.field], err.message);
        else showFormAlert(pw, err.message);
      } finally {
        setLoading(btn, false);
      }
    });
  }
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const shortDate = (s) => new Date(s).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  function reportsView(el) {
    const today = /* @__PURE__ */ new Date();
    const weekAgo = new Date(Date.now() - 7 * 864e5);
    el.innerHTML = `
    ${pageHead({ title: "Reports", subtitle: "Generate and download incident summaries." })}
    <div class="reports-grid">
      <form class="card" id="gen-form" novalidate>
        <div class="card__head"><h2 class="card__title">Generate report</h2></div>
        <div class="card__body form-stack">
          <div class="form-alert" hidden></div>
          <div class="form-row">
            <div class="field"><label class="field__label" for="g-from">From</label><input class="input" type="date" id="g-from" name="from" value="${iso(weekAgo)}" max="${iso(today)}" /><p class="field__msg"></p></div>
            <div class="field"><label class="field__label" for="g-to">To</label><input class="input" type="date" id="g-to" name="to" value="${iso(today)}" max="${iso(today)}" /><p class="field__msg"></p></div>
          </div>
          <div class="field"><label class="field__label" for="g-type">Incident type</label><select class="select" id="g-type" name="type"><option value="All">All types</option>${INCIDENT_TYPES.map((t) => `<option>${esc(t)}</option>`).join("")}</select></div>
          <div class="form-actions"><button type="submit" class="btn btn--primary">${icon("fileText")}Generate report</button></div>
        </div>
      </form>
      <section class="card">
        <div class="card__head"><h2 class="card__title">Generated reports</h2></div>
        <div data-list></div>
      </section>
    </div>`;
    const list = el.querySelector("[data-list]");
    let fresh = null;
    function load2(quiet = false) {
      return loadInto(list, () => reports.list(), (rows) => {
        list.innerHTML = rows.length ? `<div class="table-wrap"><table class="table table--static">
            <thead><tr><th>Report</th><th>Period</th><th>Type</th><th>Incidents</th><th>Created</th><th><span class="sr-only">Download</span></th></tr></thead>
            <tbody>${rows.map((r) => `<tr class="${fresh === r.id ? "is-new-row" : ""}">
              <td><strong class="text-strong">${esc(r.title)}</strong><span class="sub">${esc(r.id)}</span></td>
              <td>${esc(shortDate(r.from))} – ${esc(shortDate(r.to))}</td>
              <td>${esc(r.type)}</td>
              <td>${r.count}</td>
              <td>${esc(formatDateTime(r.createdAt))}</td>
              <td class="cell-end"><button type="button" class="btn btn--ghost btn--sm" data-download="${esc(r.id)}">${icon("download")}CSV</button></td>
            </tr>`).join("")}</tbody></table></div>` : emptyState({ title: "No reports yet", text: "Generate your first report using the form.", iconName: "fileText" });
      }, quiet ? { loading: false } : {});
    }
    const form = el.querySelector("#gen-form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearErrors(form);
      const from = parseDateInput(form.elements.from.value);
      const to = parseDateInput(form.elements.to.value, true);
      if (!from) return setFieldError(form.elements.from, "Choose a start date.");
      if (!to) return setFieldError(form.elements.to, "Choose an end date.");
      if (from > to) return setFieldError(form.elements.to, "End date must be after the start date.");
      const btn = form.querySelector("[type=submit]");
      setLoading(btn, true, "Generating…");
      try {
        const r = await reports.generate({ from, to, type: form.elements.type.value });
        fresh = r.id;
        toast(`${r.title} generated with ${r.count} incidents.`, { type: "success" });
        load2(true);
      } catch (err) {
        showFormAlert(form, err.message);
      } finally {
        setLoading(btn, false);
      }
    });
    list.addEventListener("click", async (e) => {
      const b = e.target.closest("[data-download]");
      if (!b) return;
      setLoading(b, true, "…");
      try {
        const { filename, content } = await reports.csv(b.dataset.download);
        const url = URL.createObjectURL(new Blob([content], { type: "text/csv" }));
        const a = Object.assign(document.createElement("a"), { href: url, download: filename });
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1e3);
      } catch (err) {
        toast(err.message, { type: "error" });
      } finally {
        setLoading(b, false);
      }
    });
    load2();
  }
  const SECURITY = [
    { key: "soundAlerts", label: "Sound alerts for new incidents", hint: "Play a tone when a new report arrives in the feed." },
    { key: "autoRefresh", label: "Auto-refresh incident feed", hint: "Keep the live feed and map up to date." },
    { key: "showPatrols", label: "Show patrols on maps", hint: "Display patrol units on dashboard maps." },
    { key: "emailDigest", label: "Daily email digest", hint: "Receive a summary of yesterday’s incidents at 07:00." }
  ];
  const STUDENT = [
    { key: "pushAlerts", label: "Campus alerts", hint: "Get notified about safety alerts on campus." },
    { key: "nearbyOnly", label: "Only incidents near me", hint: "Limit incident notifications to places close to you." },
    { key: "shareLocation", label: "Share location while using a safe route", hint: "Lets Campus Security see you on the map during a route." },
    { key: "emailDigest", label: "Weekly email summary", hint: "A short weekly summary of campus safety." }
  ];
  function settingsView(el, ctx) {
    const rows = ctx.user.role === "security" ? SECURITY : STUDENT;
    el.innerHTML = `
    ${pageHead({ title: "Settings", back: "#/dashboard" })}
    <div class="settings-stack">
      <section class="card"><div class="card__head"><h2 class="card__title">Notifications &amp; alerts</h2></div><div data-body></div></section>
      <section class="card">
        <div class="card__head"><h2 class="card__title">Prototype data</h2></div>
        <div class="card__body setting-row">
          <div><p class="setting-row__label">Reset demo data</p><p class="setting-row__hint">Restore the original incidents, notifications and accounts, then log out.</p></div>
          <button type="button" class="btn btn--outline btn--sm" data-reset>${icon("refresh")}Reset</button>
        </div>
      </section>
    </div>`;
    const body = el.querySelector("[data-body]");
    loadInto(body, () => settings.get(), (s) => {
      body.innerHTML = `<ul class="settings-list">${rows.map(
        (r) => `<li class="setting-row">
          <div><label class="setting-row__label" for="s-${r.key}">${esc(r.label)}</label><p class="setting-row__hint">${esc(r.hint)}</p>
          ${r.key === "autoRefresh" ? `<div class="setting-row__sub" ${s.autoRefresh ? "" : "hidden"} data-interval><label for="s-interval">Refresh every</label><select class="select select--sm" id="s-interval">${["15", "30", "60"].map((v) => `<option value="${v}" ${s.refreshInterval === v ? "selected" : ""}>${v} seconds</option>`).join("")}</select></div>` : ""}
          </div>
          <label class="switch"><input type="checkbox" id="s-${r.key}" data-key="${r.key}" ${s[r.key] ? "checked" : ""} /><span></span></label>
        </li>`
      ).join("")}</ul>`;
    });
    body.addEventListener("change", async (e) => {
      const input = e.target;
      const patch = input.dataset.key ? { [input.dataset.key]: input.checked } : input.id === "s-interval" ? { refreshInterval: input.value } : null;
      if (!patch) return;
      if (input.dataset.key === "autoRefresh") body.querySelector("[data-interval]").hidden = !input.checked;
      try {
        await settings.update(patch);
        toast("Settings saved.", { type: "success", timeout: 1800 });
      } catch (err) {
        if (input.type === "checkbox") input.checked = !input.checked;
        toast(err.message, { type: "error" });
      }
    });
    el.querySelector("[data-reset]").addEventListener("click", async () => {
      const ok = await confirmDialog({ title: "Reset demo data?", message: "All reports, notifications and account changes made in this browser will be lost.", confirmLabel: "Reset data", danger: true });
      if (ok) window.campusSafe.reset();
    });
  }
  const ROUTES = [
    { path: "/login", view: authView, screen: "login", public: true, title: "Log in" },
    { path: "/login/choose", view: authView, screen: "choose", public: true, title: "Choose login type" },
    { path: "/login/student", view: authView, screen: "student", public: true, title: "Student login" },
    { path: "/login/security", view: authView, screen: "security", public: true, title: "Security login" },
    { path: "/signup", view: authView, screen: "signup", public: true, title: "Create account" },
    { path: "/dashboard", view: (el, ctx) => (ctx.user.role === "security" ? securityDashboard : studentDashboard)(el, ctx), nav: "dashboard", title: "Dashboard" },
    { path: "/report", view: reportView, nav: "report", title: "Report Incident" },
    { path: "/report/success/:id", view: reportSuccessView, nav: "report", title: "Incident Reported" },
    { path: "/incidents", view: incidentsView, nav: "incidents", title: "Incidents" },
    { path: "/feed", view: incidentsView, nav: "incidents", roles: ["security"], title: "Incident Feed" },
    { path: "/incidents/:id", view: incidentDetailView, nav: "incidents", title: "Incident" },
    { path: "/routes", view: safeRouteView, nav: "routes", title: "Safe Route" },
    { path: "/analytics", view: analyticsView, nav: "analytics", roles: ["security"], title: "Incident Analytics" },
    { path: "/patrols", view: patrolsView, nav: "patrols", roles: ["security"], title: "Map & Patrols" },
    { path: "/notifications", view: notificationsView, nav: "notifications", title: "Notifications" },
    { path: "/profile", view: profileView, nav: "profile", title: "Profile" },
    { path: "/reports", view: reportsView, nav: "reports", roles: ["security"], title: "Reports" },
    { path: "/settings", view: settingsView, nav: "settings", title: "Settings" }
  ];
  const NAV = {
    student: {
      sidebar: [
        { key: "dashboard", label: "Dashboard", icon: "home", href: "#/dashboard" },
        { key: "report", label: "Report Incident", icon: "reportPin", href: "#/report" },
        { key: "routes", label: "Safe Routes", icon: "route", href: "#/routes" },
        { key: "incidents", label: "Incidents", icon: "clipboard", href: "#/incidents" },
        { key: "notifications", label: "Notifications", icon: "bell", href: "#/notifications", badge: true },
        { key: "profile", label: "Profile", icon: "userCircle", href: "#/profile" }
      ]
    },
    security: {
      sidebar: [
        { key: "dashboard", label: "Dashboard", icon: "home", href: "#/dashboard" },
        { key: "incidents", label: "Incident Feed", icon: "feed", href: "#/feed" },
        { key: "patrols", label: "Map & Patrols", icon: "mapIcon", href: "#/patrols" },
        { key: "analytics", label: "Analytics", icon: "chart", href: "#/analytics" },
        { key: "reports", label: "Reports", icon: "fileText", href: "#/reports" },
        { key: "settings", label: "Settings", icon: "settings", href: "#/settings" }
      ],
      drawer: [
        { key: "dashboard", label: "Dashboard", icon: "home", href: "#/dashboard" },
        { key: "report", label: "Report Incident", icon: "reportPin", href: "#/report" },
        { key: "incidents", label: "Incidents", icon: "clipboard", href: "#/feed" },
        { key: "patrols", label: "Map & Patrols", icon: "mapIcon", href: "#/patrols" },
        { key: "analytics", label: "Analytics", icon: "chart", href: "#/analytics" },
        { key: "notifications", label: "Notifications", icon: "bell", href: "#/notifications", badge: true },
        { key: "profile", label: "Profile", icon: "userCircle", href: "#/profile" }
      ]
    }
  };
  function match(path) {
    for (const r of ROUTES) {
      const keys = [];
      const re = new RegExp(`^${r.path.replace(/:(\w+)/g, (_, k) => (keys.push(k), "([^/]+)"))}$`);
      const m = path.match(re);
      if (m) return { route: r, params: Object.fromEntries(keys.map((k, i) => [k, decodeURIComponent(m[i + 1])])) };
    }
    return null;
  }
  function parseHash() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs = ""] = raw.split("?");
    return { path: path.replace(/\/+$/, "") || "/", query: new URLSearchParams(qs) };
  }
  function navigate(hash, { replace = false } = {}) {
    if (replace) {
      history.replaceState(null, "", hash);
      render();
    } else if (location.hash === hash) render();
    else location.hash = hash;
  }
  const app = document.getElementById("app");
  let shell = null;
  let cleanup = null;
  let previousPath = null;
  const COLLAPSE_KEY = "cst-sidebar-collapsed";
  function navMarkup(items, active, { drawer = false } = {}) {
    const count = notifications.unreadCount();
    return items.map(
      (it) => `<a class="nav-item${it.key === active ? " is-active" : ""}" href="${it.href}" data-nav="${it.key}" ${it.key === active ? 'aria-current="page"' : ""} title="${esc(it.label)}">
        ${icon(it.icon)}<span class="nav-item__label">${esc(it.label)}</span>
        ${it.badge ? `<span class="nav-badge" data-badge ${count ? "" : "hidden"} aria-label="${count} unread">${count}</span>` : ""}
      </a>`
    ).join("");
  }
  function buildShell(user) {
    const nav = NAV[user.role];
    let collapsed = false;
    try {
      collapsed = localStorage.getItem(COLLAPSE_KEY) === "1";
    } catch {
      collapsed = false;
    }
    app.innerHTML = `
    <a class="skip-link" href="#page" data-skip>Skip to content</a>
    <div class="shell${collapsed ? " is-collapsed" : ""}" data-role="${user.role}">
      <aside class="sidebar" aria-label="Main navigation">
        <div class="sidebar__brand">
          <a class="brand" href="#/dashboard" aria-label="CampusSafe Twin dashboard">${logo("light", "brand__logo")}<span class="brand__name">CampusSafe Twin</span></a>
          <button type="button" class="sidebar__toggle" data-collapse aria-label="${collapsed ? "Expand" : "Collapse"} sidebar" aria-expanded="${!collapsed}">${icon("menu")}</button>
        </div>
        <nav class="sidebar__nav" data-nav-list="sidebar"></nav>
        <div class="sidebar__foot">
          <button type="button" class="nav-item" data-logout title="Logout">${icon("logout")}<span class="nav-item__label">Logout</span></button>
        </div>
      </aside>

      <div class="drawer" data-drawer hidden>
        <div class="drawer__backdrop" data-close-drawer></div>
        <aside class="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div class="sidebar__brand">
            <a class="brand" href="#/dashboard">${logo("light", "brand__logo")}<span class="brand__name">CampusSafe Twin</span></a>
            <button type="button" class="sidebar__toggle" data-close-drawer aria-label="Close menu">${icon("x")}</button>
          </div>
          <nav class="sidebar__nav" data-nav-list="drawer"></nav>
          <div class="sidebar__foot">
            <button type="button" class="nav-item" data-logout>${icon("logout")}<span class="nav-item__label">Logout</span></button>
          </div>
        </aside>
      </div>

      <div class="main">
        <header class="topbar">
          <button type="button" class="icon-btn topbar__menu" data-open-drawer aria-label="Open menu" aria-expanded="false">${icon("menu")}<span class="topbar__dot" data-badge-dot hidden></span></button>
          <a class="topbar__brand" href="#/dashboard">${logo("dark", "topbar__logo")}<span>CampusSafe Twin</span></a>
          <button type="button" class="avatar topbar__avatar${user.role === "security" ? " avatar--photo" : ""}" data-user-menu aria-label="Account menu" aria-haspopup="menu" aria-expanded="false">${user.role === "security" ? icon("userCircle") : esc(initials(user.firstName || user.name))}</button>
        </header>
        <main class="page" id="page" tabindex="-1"></main>
      </div>
    </div>`;
    const root = $(".shell", app);
    const drawer = $("[data-drawer]", root);
    const openBtn = $("[data-open-drawer]", root);
    function openDrawer() {
      var _a;
      drawer.hidden = false;
      openBtn.setAttribute("aria-expanded", "true");
      requestAnimationFrame(() => drawer.classList.add("is-open"));
      document.body.classList.add("no-scroll");
      (_a = $(".drawer__panel .nav-item.is-active, .drawer__panel .nav-item", drawer)) == null ? void 0 : _a.focus();
    }
    function closeDrawer({ focus = true } = {}) {
      if (drawer.hidden) return;
      drawer.classList.remove("is-open");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
      setTimeout(() => drawer.hidden = true, 220);
      if (focus && getComputedStyle(openBtn).display !== "none") openBtn.focus();
    }
    root.addEventListener("click", async (e) => {
      if (e.target.closest("[data-open-drawer]")) return openDrawer();
      if (e.target.closest("[data-close-drawer]")) return closeDrawer();
      if (e.target.closest(".drawer .nav-item[href], .drawer .brand")) closeDrawer({ focus: false });
      if (e.target.closest("[data-collapse]")) {
        const on2 = !root.classList.contains("is-collapsed");
        root.classList.toggle("is-collapsed", on2);
        const b = e.target.closest("[data-collapse]");
        b.setAttribute("aria-label", `${on2 ? "Expand" : "Collapse"} sidebar`);
        b.setAttribute("aria-expanded", String(!on2));
        try {
          localStorage.setItem(COLLAPSE_KEY, on2 ? "1" : "0");
        } catch {
        }
        window.dispatchEvent(new Event("resize"));
        return;
      }
      if (e.target.closest("[data-logout]")) {
        closeDrawer({ focus: false });
        const ok = await confirmDialog({ title: "Log out?", message: "You will need to log in again to access CampusSafe Twin.", confirmLabel: "Log out", danger: true });
        if (ok) logout();
        return;
      }
      const um = e.target.closest("[data-user-menu]");
      if (um) {
        const u = currentUser();
        const count = notifications.unreadCount();
        openMenu(
          um,
          [
            { value: "profile", label: "Profile", icon: "userCircle" },
            { value: "notifications", label: "Notifications", icon: "bell", badge: count ? String(count) : "" },
            { value: "settings", label: "Settings", icon: "settings" },
            ...u.role === "student" ? [{ value: "routes", label: "Safe Routes", icon: "route" }] : [{ value: "reports", label: "Reports", icon: "fileText" }],
            { divider: true },
            { value: "logout", label: "Log out", icon: "logout", danger: true }
          ],
          async (v) => {
            if (v === "logout") {
              const ok = await confirmDialog({ title: "Log out?", message: "You will need to log in again to access CampusSafe Twin.", confirmLabel: "Log out", danger: true });
              if (ok) logout();
            } else navigate(`#/${v}`);
          }
        );
      }
      if (e.target.closest("[data-skip]")) {
        e.preventDefault();
        $("#page").focus();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !drawer.hidden) closeDrawer();
      if (e.key === "Tab" && !drawer.hidden) {
        const items = $$("a, button", $(".drawer__panel", drawer));
        if (!items.length) return;
        if (e.shiftKey && document.activeElement === items[0]) {
          e.preventDefault();
          items[items.length - 1].focus();
        } else if (!e.shiftKey && document.activeElement === items[items.length - 1]) {
          e.preventDefault();
          items[0].focus();
        }
      }
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
      if (e.matches) closeDrawer({ focus: false });
    });
    return {
      root,
      role: user.role,
      userId: user.id,
      setActive(key2) {
        $('[data-nav-list="sidebar"]', root).innerHTML = navMarkup(nav.sidebar, key2);
        $('[data-nav-list="drawer"]', root).innerHTML = navMarkup(nav.drawer || nav.sidebar, key2, { drawer: true });
        updateBadges();
      },
      closeDrawer
    };
  }
  function updateBadges() {
    const count = notifications.unreadCount();
    $$("[data-badge]").forEach((b) => {
      b.textContent = count;
      b.hidden = !count;
      b.setAttribute("aria-label", `${count} unread`);
    });
    $$("[data-badge-dot]").forEach((d) => d.hidden = !count);
  }
  async function logout() {
    stopLiveFeed();
    await auth.logout();
    toast("You have been logged out.");
    navigate("#/login");
  }
  on("notifications", updateBadges);
  on("auth", (user) => {
    if (user && shell && shell.userId === user.id) {
      $$(".topbar__avatar").forEach((a) => {
        if (user.role === "student") a.textContent = initials(user.firstName || user.name);
      });
    }
  });
  function render() {
    closeMenus();
    const { path, query } = parseHash();
    const user = currentUser();
    if (path === "/") return navigate(user ? "#/dashboard" : "#/login", { replace: true });
    const found = match(path);
    if (!found) {
      if (!user) return navigate("#/login", { replace: true });
      return renderNotFound(user);
    }
    const { route, params } = found;
    if (route.public && user) return navigate("#/dashboard", { replace: true });
    if (!route.public && !user) return navigate("#/login", { replace: true });
    if (route.roles && user && !route.roles.includes(user.role)) {
      toast("That page is only available to security staff.", { type: "warning" });
      return navigate("#/dashboard", { replace: true });
    }
    cleanup == null ? void 0 : cleanup();
    cleanup = null;
    document.body.classList.remove("no-scroll");
    document.title = `${route.title} · CampusSafe Twin`;
    const ctx = { route, params, query, user, navigate, previous: previousPath };
    previousPath = path;
    if (route.public) {
      shell = null;
      app.innerHTML = "";
      const el2 = document.createElement("div");
      el2.className = "view view--auth";
      app.appendChild(el2);
      cleanup = route.view(el2, ctx) || null;
      window.scrollTo(0, 0);
      return;
    }
    if (!shell || shell.userId !== user.id || !shell.root.isConnected) shell = buildShell(user);
    shell.setActive(route.nav);
    const page = $("#page");
    page.innerHTML = "";
    const el = document.createElement("div");
    el.className = `view view--${route.nav}`;
    page.appendChild(el);
    page.scrollTop = 0;
    window.scrollTo(0, 0);
    ctx.shell = shell;
    cleanup = route.view(el, ctx) || null;
  }
  function renderNotFound(user) {
    if (!shell || shell.userId !== user.id || !shell.root.isConnected) shell = buildShell(user);
    shell.setActive("");
    $("#page").innerHTML = `<div class="view"><div class="card not-found">
    <div class="state"><span class="state__icon">${icon("mapIcon")}</span><span class="state__title">Page not found</span><span class="state__text">The page you're looking for doesn't exist or has moved.</span><a class="btn btn--primary btn--sm" href="#/dashboard">Back to Dashboard</a></div>
  </div></div>`;
  }
  window.addEventListener("hashchange", render);
  render();
})();
