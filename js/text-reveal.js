/* Character blur-smear text reveal (Timber-style).
   Add data-reveal to any element; chars sweep in left-to-right when
   it enters the viewport, and reset when it leaves so it can replay.
   Elements with data-reveal="manual" are only toggled externally
   (add/remove the .in class yourself). */
(() => {
  const STAGGER = 26; // ms per character

  function split(el) {
    const nodes = [...el.childNodes];
    el.textContent = '';
    let i = 0;

    const walk = (node, parent) => {
      if (node.nodeType === Node.TEXT_NODE) {
        for (const part of node.textContent.split(/(\s+)/)) {
          if (!part) continue;
          if (/^\s+$/.test(part)) {
            parent.appendChild(document.createTextNode(' '));
            continue;
          }
          const word = document.createElement('span');
          word.className = 'w';
          for (const ch of part) {
            const c = document.createElement('span');
            c.className = 'c';
            c.style.setProperty('--i', i++);
            c.textContent = ch;
            word.appendChild(c);
          }
          parent.appendChild(word);
        }
      } else {
        parent.appendChild(node); // keep <br> etc.
      }
    };

    nodes.forEach((n) => walk(n, el));
  }

  const els = [...document.querySelectorAll('[data-reveal]')];
  els.forEach(split);

  const observed = els.filter((el) => el.dataset.reveal !== 'manual');
  if (observed.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          e.target.classList.toggle('in', e.isIntersecting);
        }
      },
      { threshold: 0.25 }
    );
    observed.forEach((el) => io.observe(el));
  }
})();
