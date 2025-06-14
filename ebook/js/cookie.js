// Konfigurace pro Klaro.js
klaro.init({
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'ebook_cookies',
    default: false, // služby jsou výchozí vypnuté
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    translations: {
        cs: {
            consentModal: {
                title: 'Nastavení cookies',
                description: 'Na webu používáme cookies pro analytiku a marketing. Vyberte, s čím souhlasíte.'
            },
            purposes: {
                analytics: 'Analytika',
                marketing: 'Marketing'
            },
            ok: 'Uložit'
        }
    },
    apps: [
        {
            name: 'ga4',
            title: 'Google Analytics 4',
            purposes: ['analytics'],
            callback: function(consent) {
                if (consent) {
                    var s = document.createElement('script');
                    s.async = true;
                    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
                    document.head.appendChild(s);

                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XXXXXXXXXX');
                }
            }
        },
        {
            name: 'google-ads',
            title: 'Google Ads',
            purposes: ['marketing'],
            callback: function(consent) {
                if (consent) {
                    var s = document.createElement('script');
                    s.async = true;
                    s.src = 'https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX';
                    document.head.appendChild(s);

                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-XXXXXXXXX');
                }
            }
        },
        {
            name: 'sklik',
            title: 'Seznam Sklik',
            purposes: ['marketing'],
            callback: function(consent) {
                if (consent) {
                    var s = document.createElement('script');
                    s.async = true;
                    s.src = 'https://c.imedia.cz/js/retargeting.js';
                    document.body.appendChild(s);
                    window.rc = window.rc || function(){window.rc.queue.push(arguments);};
                    window.rc.queue = window.rc.queue || [];
                    window.rc('create', '123456');
                    window.rc('send', 'view');
                }
            }
        },
        {
            name: 'facebook',
            title: 'Facebook Pixel',
            purposes: ['marketing'],
            callback: function(consent) {
                if (consent) {
                    !(function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1234567890');
                    fbq('track', 'PageView');
                }
            }
        }
    ]
});
