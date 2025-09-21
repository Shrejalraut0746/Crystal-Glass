// ==UserScript==
// @name         Messenger Liquid Glass Theme
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Applies an interactive liquid glass effect to Messenger.com
// @author       CtorW
// @match        https://www.messenger.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const myCss = `
body {
  background-image: url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExazRkZmE2azFmYnYwMXJ6cm82ajFqMWw5MXluZ2twdWdpdTVkb3p0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3q3SUqPnxZGQpMNcjc/giphy.gif') !important;
  background-size: cover !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}

  [aria-label="Inbox switcher"] {
   background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
}

  [aria-label="Thread list"] {
    padding: 0 8px;
  }

  [aria-label="Thread list"] {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
  }

  [data-pagelet="MWInboxDetail_ThreadDetail"] {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
  }

  [data-pagelet="MWInboxDetail_MessageList_ThreadComposer"] {
 background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
  }

.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x8mqhxd.x6ikm8r.x10wlt62.xcrg951.x14e42zd.x6zc37e.xyjqprf.x1tynv8c.xgu6akr.x1qpj6lr.x1105k1t.x1bc3s5a.xczebs5.x4pn7vq.xe95u6g {
background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
}
* {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
*:-webkit-scrollbar {
  display: none;
}

.xu0aao5 {
background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
}

.x1tlrc7v {
background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
}

.xgu6akr.xgu6akr{
background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
}

.xcrg951 {
background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
}

.xlai7qp {
background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
}

a[aria-current="page"] {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
}

.x9f619:nth-child(2) > .x78zum5:nth-child(1) > .x78zum5:nth-child(1) > .x78zum5:nth-child(1) > .x9f619:nth-child(1) > .x9f619:nth-child(1) > .x9f619:nth-child(2) > .x78zum5:nth-child(1) > .x78zum5:nth-child(1) > .x9f619:nth-child(1) {
margin: 20px 5px 20px 5px;
background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
}

.x7vuprf {
background: rgba(76, 76, 77, 0.72);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
}

.x11k2h6o {
filter: blur(2px);
}

.liquid-glass-effect {

  background-image: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.1) 40%
  );
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 2px 10px rgba(255, 255, 255, 0.2);
  transition: background-color 0.3s ease;
}

    `;
    GM_addStyle(myCss);

    const targetSelectors = [
        '[aria-label="Inbox switcher"]',
        '[aria-label="Thread list"]',
        '[data-pagelet="MWInboxDetail_ThreadDetail"]',
        '[data-pagelet="MWInboxDetail_MessageList_ThreadComposer"]'
    ];

    function applyLiquidEffect(element) {
        if (element.classList.contains('liquid-glass-applied')) {
            return;
        }
        element.classList.add('liquid-glass-applied', 'liquid-glass-effect');

        element.addEventListener('mousemove', e => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
        });
    }

    const observer = new MutationObserver((mutationsList, observer) => {
        for (const selector of targetSelectors) {
            document.querySelectorAll(selector).forEach(element => {
                applyLiquidEffect(element);
            });
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    console.log('Messenger Liquid Glass Script is active and waiting for elements...');

})();