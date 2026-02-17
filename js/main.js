//zoom

const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".zoomable").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("active");
  });
});

if (modal) {
  modal.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}


// glitchhh <<3333

function glitchText(element, intensity = 1.5, interval = 60) {
  if (!element) return;

  const text = element.textContent;
  const chars = '!<>-_\\/[]{}—=+*^?#___';
  let timer;

  function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function glitchCycle() {
    let output = '';
    for (let i = 0; i < text.length; i++) {
      output += Math.random() < 0.1 * intensity
        ? randomChar()
        : text[i];
    }
    element.textContent = output;
  }

  element.addEventListener('mouseenter', () => {
    clearInterval(timer);
    timer = setInterval(glitchCycle, interval);
  });

  element.addEventListener('mouseleave', () => {
    clearInterval(timer);
    element.textContent = text;
  });
}
//header glitch
document.querySelectorAll('h2')
  .forEach(h => glitchText(h, 1.5, 60));


// onetime glitch

function autoGlitch(element, intensity = 2, duration = 1500, interval = 40) {
  if (!element) return;

  const original = element.textContent;
  const chars = '!<>-_\\/[]{}=+*^?#_____';
  let elapsed = 0;

  const t = setInterval(() => {
    let out = '';
    for (let i = 0; i < original.length; i++) {
      out += Math.random() < 0.08 * intensity
        ? chars[Math.floor(Math.random() * chars.length)]
        : original[i];
    }

    element.textContent = out;
    elapsed += interval;

    if (elapsed >= duration) {
      clearInterval(t);
      element.textContent = original;
    }
  }, interval);
}

window.addEventListener('load', () => {
  const header = document.querySelector('#landing h1');
  autoGlitch(header, 2, 1500, 40);
});

/*   its not working adn its makingme mad so ill deal with it later
//making the text space out
const header = document.querySelector('#landing h1');
window.addEventListener('scroll', () => {
  const maxScroll = 500;
  const progress = Math.min(window.scrollY / maxScroll, 1);

  const base = 0.0005;
  const maxExtra = 0.001; // subtle

  const spacing = base + progress * maxExtra;
  header.style.letterSpacing = spacing + 'em';
});
*/

/* the overlay */
document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".detail-card");
  const modals = document.querySelectorAll(".detail-modal");
  const closeButtons = document.querySelectorAll(".close-modal");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const modalId = card.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".detail-modal").classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

});

//my footers :P
const footer = document.querySelector('footer');
if (footer) {
  const phrases = [
    '[signal restored]',
    '[scanning memory sectors...]',
    '[connection: stable]',
    '[rebuilding index...]',
    '[data integrity: 97.4%]'
  ];
  setInterval(() => {
    const p = document.createElement('p');
    p.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    p.style.fontFamily = 'IBM Plex Mono, monospace';
    p.style.color = 'rgba(255,255,255,0.2)';
    p.style.fontSize = '0.7rem';
    footer.appendChild(p);
    setTimeout(() => p.remove(), 4000);
  }, 6000);
}

