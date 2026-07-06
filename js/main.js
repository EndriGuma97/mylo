'use strict';

/* ================= Wedding configuration ================= */
const WEDDING_DATE = new Date(2026, 7, 3, 18, 0, 0); // 3 gusht 2026, 18:00
const WEDDING_END = new Date(2026, 7, 3, 19, 30, 0);

/* ================= Translations ================= */
const i18n = {
  sq: {
    'nav.story': 'Historia jonë',
    'nav.ceremony': 'Ceremonia',
    'nav.gallery': 'Galeria',
    'nav.rsvp': 'Konfirmo',
    'hero.eyebrow': 'Me bekimin e Jehovait',
    'hero.date': 'E hënë, 3 gusht 2026 · ora 18:00',
    'hero.verse': '«Litari trefish nuk këputet shpejt.»',
    'hero.verseRef': '— Eklisiastiu 4:12',
    'hero.cta': 'Konfirmo pjesëmarrjen',
    'hero.calendar': 'Shto në kalendar',
    'hero.guest': (name) => `E dashur ${name},`,
    'cd.days': 'Ditë',
    'cd.hours': 'Orë',
    'cd.mins': 'Minuta',
    'cd.secs': 'Sekonda',
    'cd.married': 'U martuam!',
    'photo.main': 'Vendosni këtu foton tuaj kryesore',
    'photo.here': 'Foto këtu',
    'story.eyebrow': 'Rrugëtimi ynë',
    'story.title': 'Historia jonë',
    'story.item1.title': 'Si u njohëm',
    'story.item1.text': 'Shkruani këtu historinë tuaj — ku u takuat për herë të parë, çfarë ju bëri përshtypje dhe si nisi gjithçka.',
    'story.item2.title': 'Propozimi',
    'story.item2.text': 'Momenti i veçantë kur vendosët të bashkoni jetët tuaja — shkruani këtu se si ndodhi.',
    'story.item3.title': 'Dita e madhe',
    'story.item3.text': 'Dhe tani, me gëzim të madh, ju ftojmë të ndani me ne ditën më të bukur të jetës sonë.',
    'ceremony.eyebrow': '3 gusht 2026 · ora 18:00',
    'ceremony.title': 'Ceremonia',
    'ceremony.hall.title': 'Salla e Mbretërisë',
    'ceremony.hall.text': 'Fjalimi biblik i dasmës do të mbahet në Sallën e Mbretërisë së Dëshmitarëve të Jehovait.',
    'ceremony.hall.address': '[Adresa e Sallës së Mbretërisë]',
    'ceremony.hall.map': 'Hap hartën',
    'ceremony.time.title': 'Orari',
    'ceremony.time.text': "Fjalimi fillon pikërisht në orën 18:00. Ju lutemi të mbërrini 15 minuta më herët për t'u ulur të qetë.",
    'ceremony.time.detail': 'Mbërritja: 17:45 · Fillimi: 18:00',
    'ceremony.zoom.title': 'Ndiqni në Zoom',
    'ceremony.zoom.text': 'Për familjarët dhe miqtë që ndodhen larg, ceremonia do të transmetohet drejtpërdrejt në Zoom.',
    'ceremony.zoom.detail': 'ID: [000 0000 0000] · Kodi: [emri]',
    'ceremony.zoom.join': 'Lidhu në Zoom',
    'ceremony.dress.title': 'Veshja',
    'ceremony.dress.text': 'Ju lutemi veshje elegante dhe modeste, siç i përshtatet një rasti të tillë të veçantë në Sallën e Mbretërisë.',
    'gallery.eyebrow': 'Çaste të bukura',
    'gallery.title': 'Galeria',
    'gallery.sub': 'Pas dasmës, këtu do të gjeni fotot më të bukura të ditës sonë të veçantë.',
    'rsvp.eyebrow': 'Ju lutemi përgjigjuni deri më 20 korrik',
    'rsvp.title': 'A do të vini?',
    'rsvp.sub': 'Prania juaj është dhurata më e çmuar për ne. Na tregoni nëse do të jeni pjesë e kësaj dite të veçantë.',
    'rsvp.name': 'Emri dhe mbiemri',
    'rsvp.namePh': 'p.sh. Arta Hoxha',
    'rsvp.guests': 'Numri i personave',
    'rsvp.attend': 'Pjesëmarrja',
    'rsvp.opt.yes': 'Po, do të vij në ceremoni',
    'rsvp.opt.zoom': 'Në Zoom nga larg',
    'rsvp.opt.no': "Me keqardhje, s'do të mundem",
    'rsvp.message': 'Urimi juaj (opsional)',
    'rsvp.messagePh': 'Shkruani një urim për çiftin...',
    'rsvp.send': 'Dërgo përgjigjen',
    'rsvp.sending': 'Duke dërguar...',
    'rsvp.ok': 'Faleminderit nga zemra! Përgjigjja juaj u dërgua me sukses.',
    'rsvp.err': 'Diçka shkoi keq. Ju lutemi provoni përsëri ose na shkruani direkt.',
    'rsvp.nameReq': 'Ju lutemi shkruani emrin tuaj.',
    'rsvp.demo': 'Demo: forma nuk është lidhur ende. Krijoni një formë falas në formspree.io dhe vendosni ID-në te index.html.',
    'footer.thanks': 'Me dashuri dhe mirënjohje, ju presim me gëzim!',
    'cal.title': 'Dasma e Endrit dhe Kristjanës',
    'cal.desc': 'Fjalimi i dasmës në Sallën e Mbretërisë.',
    'cal.location': 'Salla e Mbretërisë',
  },
  en: {
    'nav.story': 'Our story',
    'nav.ceremony': 'Ceremony',
    'nav.gallery': 'Gallery',
    'nav.rsvp': 'RSVP',
    'hero.eyebrow': "With Jehovah's blessing",
    'hero.date': 'Monday, August 3, 2026 · 6:00 PM',
    'hero.verse': '"A threefold cord cannot quickly be torn apart."',
    'hero.verseRef': '— Ecclesiastes 4:12',
    'hero.cta': 'RSVP now',
    'hero.calendar': 'Add to calendar',
    'hero.guest': (name) => `Dear ${name},`,
    'cd.days': 'Days',
    'cd.hours': 'Hours',
    'cd.mins': 'Minutes',
    'cd.secs': 'Seconds',
    'cd.married': 'We got married!',
    'photo.main': 'Place your main photo here',
    'photo.here': 'Photo here',
    'story.eyebrow': 'Our journey',
    'story.title': 'Our story',
    'story.item1.title': 'How we met',
    'story.item1.text': 'Write your story here — where you first met, what impressed you, and how it all began.',
    'story.item2.title': 'The proposal',
    'story.item2.text': 'The special moment you decided to join your lives — write here how it happened.',
    'story.item3.title': 'The big day',
    'story.item3.text': 'And now, with great joy, we invite you to share with us the most beautiful day of our lives.',
    'ceremony.eyebrow': 'August 3, 2026 · 6:00 PM',
    'ceremony.title': 'The ceremony',
    'ceremony.hall.title': 'Kingdom Hall',
    'ceremony.hall.text': "The Bible-based wedding talk will be held at the Kingdom Hall of Jehovah's Witnesses.",
    'ceremony.hall.address': '[Kingdom Hall address]',
    'ceremony.hall.map': 'Open map',
    'ceremony.time.title': 'Schedule',
    'ceremony.time.text': 'The talk begins promptly at 6:00 PM. Please arrive 15 minutes early to be seated calmly.',
    'ceremony.time.detail': 'Arrival: 5:45 PM · Start: 6:00 PM',
    'ceremony.zoom.title': 'Watch on Zoom',
    'ceremony.zoom.text': 'For family and friends who are far away, the ceremony will be streamed live on Zoom.',
    'ceremony.zoom.detail': 'ID: [000 0000 0000] · Passcode: [name]',
    'ceremony.zoom.join': 'Join on Zoom',
    'ceremony.dress.title': 'Dress code',
    'ceremony.dress.text': 'Kindly wear elegant, modest attire, fitting for such a special occasion at the Kingdom Hall.',
    'gallery.eyebrow': 'Beautiful moments',
    'gallery.title': 'Gallery',
    'gallery.sub': 'After the wedding, you will find the most beautiful photos of our special day here.',
    'rsvp.eyebrow': 'Kindly reply by July 20',
    'rsvp.title': 'Will you join us?',
    'rsvp.sub': 'Your presence is the most precious gift for us. Let us know if you will be part of this special day.',
    'rsvp.name': 'Full name',
    'rsvp.namePh': 'e.g. Arta Hoxha',
    'rsvp.guests': 'Number of guests',
    'rsvp.attend': 'Attendance',
    'rsvp.opt.yes': "Yes, I'll attend the ceremony",
    'rsvp.opt.zoom': 'On Zoom from afar',
    'rsvp.opt.no': "Regretfully, I can't attend",
    'rsvp.message': 'Your wishes (optional)',
    'rsvp.messagePh': 'Write a wish for the couple...',
    'rsvp.send': 'Send reply',
    'rsvp.sending': 'Sending...',
    'rsvp.ok': 'Thank you from the heart! Your reply was sent successfully.',
    'rsvp.err': 'Something went wrong. Please try again or contact us directly.',
    'rsvp.nameReq': 'Please enter your name.',
    'rsvp.demo': 'Demo: the form is not connected yet. Create a free form at formspree.io and set the ID in index.html.',
    'footer.thanks': 'With love and gratitude, we joyfully await you!',
    'cal.title': 'Wedding of Endri and Kristjana',
    'cal.desc': 'Wedding talk at the Kingdom Hall.',
    'cal.location': 'Kingdom Hall',
  },
};

let lang = localStorage.getItem('wedding-lang') || 'sq';

function t(key) {
  return (i18n[lang] && i18n[lang][key]) || i18n.sq[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = t(el.dataset.i18n);
    if (typeof value === 'string') el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.getElementById('langToggle').textContent = lang === 'sq' ? 'EN' : 'SQ';
  renderGuestGreeting();
}

document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'sq' ? 'en' : 'sq';
  localStorage.setItem('wedding-lang', lang);
  applyLanguage();
});

/* ================= Personalized guest greeting (?guest=Emri) ================= */
function renderGuestGreeting() {
  const guest = new URLSearchParams(location.search).get('guest');
  const el = document.getElementById('guestGreeting');
  if (guest && guest.trim()) {
    const name = guest.trim().slice(0, 60);
    el.textContent = i18n[lang]['hero.guest'](name);
    el.hidden = false;
  }
}

/* ================= Countdown ================= */
const cd = {
  days: document.getElementById('cdDays'),
  hours: document.getElementById('cdHours'),
  mins: document.getElementById('cdMins'),
  secs: document.getElementById('cdSecs'),
};

function pad(n) {
  return String(n).padStart(2, '0');
}

function tick() {
  const diff = WEDDING_DATE - Date.now();
  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<p style="font-family:var(--serif);font-style:italic;font-size:26px;color:var(--gold);">' +
      t('cd.married') + '</p>';
    clearInterval(timer);
    return;
  }
  cd.days.textContent = Math.floor(diff / 86400000);
  cd.hours.textContent = pad(Math.floor(diff / 3600000) % 24);
  cd.mins.textContent = pad(Math.floor(diff / 60000) % 60);
  cd.secs.textContent = pad(Math.floor(diff / 1000) % 60);
}

const timer = setInterval(tick, 1000);
tick();

/* ================= Navbar ================= */
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('navBurger');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
  })
);

/* ================= Reveal on scroll ================= */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

/* ================= Add to calendar (.ics download) ================= */
function icsDate(d) {
  return (
    d.getFullYear() +
    pad(d.getMonth() + 1) +
    pad(d.getDate()) +
    'T' +
    pad(d.getHours()) +
    pad(d.getMinutes()) +
    '00'
  );
}

document.getElementById('calBtn').addEventListener('click', () => {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Endri&Kristjana//Wedding//SQ',
    'BEGIN:VEVENT',
    'UID:' + Date.now() + '@endri-kristjana',
    'DTSTAMP:' + icsDate(new Date()),
    'DTSTART:' + icsDate(WEDDING_DATE),
    'DTEND:' + icsDate(WEDDING_END),
    'SUMMARY:' + t('cal.title'),
    'DESCRIPTION:' + t('cal.desc'),
    'LOCATION:' + t('cal.location'),
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'dasma-endri-kristjana.ics';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

/* ================= RSVP form ================= */
const form = document.getElementById('rsvpForm');
const statusEl = document.getElementById('formStatus');
const submitBtn = form.querySelector('button[type="submit"]');

function showStatus(msg, ok) {
  statusEl.textContent = msg;
  statusEl.className = 'form-status ' + (ok ? 'ok' : 'err');
  statusEl.hidden = false;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('fName').value.trim();
  if (!name) {
    showStatus(t('rsvp.nameReq'), false);
    document.getElementById('fName').focus();
    return;
  }

  if (form.action.includes('YOUR_FORM_ID')) {
    showStatus(t('rsvp.ok') + ' — ' + t('rsvp.demo'), true);
    form.reset();
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = t('rsvp.sending');

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      showStatus(t('rsvp.ok'), true);
      form.reset();
    } else {
      showStatus(t('rsvp.err'), false);
    }
  } catch (err) {
    showStatus(t('rsvp.err'), false);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t('rsvp.send');
  }
});

/* ================= Init ================= */
applyLanguage();
