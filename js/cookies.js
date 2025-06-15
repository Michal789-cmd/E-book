(function() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  const nameConsent = 'cookie_consent';   // hodnoty: 'none','marketing'
  const loadMarketing = () => {
    // Příklad Sklik: načte se až po souhlasu
    const skr = document.createElement('script');
    skr.src = 'https://c.imedia.cz/creative/12345.js'; // nahraď vlastním ID
    skr.async = true;
    document.head.appendChild(skr);
  };

  // pokud existuje cookie, banner vůbec neukazuj, ale možná načti marketing
  const existing = document.cookie.split('; ').find(r => r.startsWith(nameConsent+'='));
  if (existing) {
    const val = existing.split('=')[1];
    if (val === 'marketing') loadMarketing();
    return;
  }

  // po načtení stránky banner vyjede
  window.addEventListener('load', () => {
    setTimeout(() => banner.classList.remove('translate-y-full'), 300);
  });

  // uživatel odmítne marketing → uložíme none a schováme banner
  declineBtn.addEventListener('click', () => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear()+1);
    document.cookie = `${nameConsent}=none; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    banner.classList.add('translate-y-full');
  });

  // uživatel souhlasí → uložíme marketing, schováme banner a načteme služby
  acceptBtn.addEventListener('click', () => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear()+1);
    document.cookie = `${nameConsent}=marketing; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    banner.classList.add('translate-y-full');
    loadMarketing();
  });
})();
