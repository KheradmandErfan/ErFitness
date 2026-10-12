(() => {
'use strict';

/* ================= ابزارها ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const clone = o => JSON.parse(JSON.stringify(o));
const EX = window.EXERCISES || [];
const byId = id => EX.find(e => e.id === id);

/* ================= متن‌ها ================= */
const T = {
  fa: {
    brand: 'ورزش‌یار', tagline: 'هر روز یک حرکت؛ تمرین را ساده و روان کن.',
    searchPh: 'نام حرکت را جستجو کنید، مثلاً اسکات', search: 'جستجو', menu: 'منو', langName: 'تغییر زبان',
    plan: 'برنامه ورزشی', theme: 'تم', dark: 'تیره', light: 'روشن', auto: 'خودکار (مطابق سیستم)', close: 'بستن',
    randomTitle: 'تمرین پیشنهادی', another: 'یک حرکت دیگر', viewExercise: 'مشاهده حرکت',
    wToday: 'برنامه امروز', noPlanYet: 'هنوز برنامه‌ای نساخته‌اید.', makePlan: 'ساخت برنامه', restDay: 'برای امروز حرکتی تعیین نشده.', openPlan: 'مشاهده برنامه',
    wInterval: 'تایمر اینتروال', work: 'تمرین (ثانیه)', rest: 'استراحت (ثانیه)', rounds: 'تعداد دور',
    start: 'شروع', pause: 'توقف', resume: 'ادامه', reset: 'بازنشانی',
    ph_idle: 'آماده', ph_work: 'تمرین', ph_rest: 'استراحت', ph_done: 'تمام شد!', round: 'دور',
    wStopwatch: 'کرونومتر', lap: 'دور', wCounter: 'شمارنده تکرار', set: 'ست', nextSet: 'ست بعدی',
    wWater: 'آب امروز', glasses: 'لیوان', wBmi: 'شاخص توده بدنی', height: 'قد (سانتی‌متر)', weight: 'وزن (کیلوگرم)',
    bmiHint: 'قد و وزن را وارد کنید.', bmiUnder: 'کم‌وزن', bmiNormal: 'طبیعی', bmiOver: 'اضافه‌وزن', bmiObese: 'چاق',
    bmiNote: 'این عدد فقط یک راهنمای کلی است.',
    results: 'نتایج جستجو برای', noResults: 'حرکتی با این نام پیدا نشد. این حرکت‌ها را ببینید:', back: 'بازگشت',
    muscle: 'عضله هدف', level: 'سطح', lv1: 'مبتدی', lv2: 'متوسط', lv3: 'پیشرفته',
    noVideo: 'برای این حرکت هنوز ویدیویی اضافه نشده.', watchYT: 'جستجو در یوتیوب',
    steps: 'مراحل اجرا', tips: 'نکات مهم', source: 'منبع',
    planTitle: 'برنامه ورزشی هفتگی', planSub: 'برای هر روز هر چند حرکت که می‌خواهید اضافه کنید.',
    apply: 'اعمال برنامه', edit: 'ویرایش', cancel: 'انصراف', addEx: 'افزودن', addPh: 'نام حرکت یا تمرین دلخواه',
    emptyDay: 'روز استراحت', today: 'امروز', saved: 'برنامه ذخیره شد', planNeed: 'حداقل یک حرکت اضافه کنید.', remove: 'حذف',
    ownTitle: 'راهنمای کوتاه حرکت', artTitle: 'مقاله‌های مجله فیتامین', artNone: 'مقاله‌ای پیدا نشد.', artFail: 'دریافت مقاله‌ها ممکن نشد. اتصال اینترنت و فایل config.js را بررسی کنید.', openOrig: 'باز کردن در سایت فیتامین', frameHint: 'اگر مقاله نمایش داده نشد، احتمالاً سایت فیتامین نمایش در سایت‌های دیگر را مسدود کرده است؛ از دکمه بالا استفاده کنید.', loadingArt: 'در حال بارگذاری مقاله…', artSource: 'منبع: مجله فیتامین',
    madeA: 'ساخته‌شده با', madeB: 'توسط عرفان',
    days: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'], dayOrder: [6, 0, 1, 2, 3, 4, 5]
  },
  en: {
    brand: 'ErFitness', tagline: 'One move a day. Training made simple and smooth.',
    searchPh: 'Search an exercise, e.g. squat', search: 'Search', menu: 'Menu', langName: 'Change language',
    plan: 'Workout plan', theme: 'Theme', dark: 'Dark', light: 'Light', auto: 'Auto (match system)', close: 'Close',
    randomTitle: 'Suggested exercise', another: 'Another one', viewExercise: 'View exercise',
    wToday: "Today's plan", noPlanYet: "You haven't made a plan yet.", makePlan: 'Create plan', restDay: 'Nothing planned for today.', openPlan: 'View plan',
    wInterval: 'Interval timer', work: 'Work (sec)', rest: 'Rest (sec)', rounds: 'Rounds',
    start: 'Start', pause: 'Pause', resume: 'Resume', reset: 'Reset',
    ph_idle: 'Ready', ph_work: 'Work', ph_rest: 'Rest', ph_done: 'Done!', round: 'Round',
    wStopwatch: 'Stopwatch', lap: 'Lap', wCounter: 'Rep counter', set: 'Set', nextSet: 'Next set',
    wWater: "Today's water", glasses: 'glasses', wBmi: 'Body mass index', height: 'Height (cm)', weight: 'Weight (kg)',
    bmiHint: 'Enter your height and weight.', bmiUnder: 'Underweight', bmiNormal: 'Normal', bmiOver: 'Overweight', bmiObese: 'Obese',
    bmiNote: 'This number is only a general guide.',
    results: 'Search results for', noResults: "No exercise matched that name. Try these:", back: 'Back',
    muscle: 'Target muscles', level: 'Level', lv1: 'Beginner', lv2: 'Intermediate', lv3: 'Advanced',
    noVideo: 'No video has been added for this exercise yet.', watchYT: 'Search on YouTube',
    steps: 'How to do it', tips: 'Key tips', source: 'Source',
    planTitle: 'Weekly workout plan', planSub: 'Add as many exercises as you like to each day.',
    apply: 'Apply plan', edit: 'Edit', cancel: 'Cancel', addEx: 'Add', addPh: 'Exercise or custom activity',
    emptyDay: 'Rest day', today: 'Today', saved: 'Plan saved', planNeed: 'Add at least one exercise.', remove: 'Remove',
    ownTitle: 'Quick exercise guide', artTitle: 'Articles from Fitamin magazine', artNone: 'No articles found.', artFail: 'Could not load articles. Check your connection and config.js.', openOrig: 'Open on Fitamin', frameHint: 'If the article does not appear, Fitamin probably blocks embedding on other sites; use the button above.', loadingArt: 'Loading article…', artSource: 'Source: Fitamin magazine',
    madeA: 'Made with', madeB: 'by Erfan',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], dayOrder: [1, 2, 3, 4, 5, 6, 0]
  }
};

let lang = store.get('ef_lang', 'fa');
if (!T[lang]) lang = 'fa';
const t = k => T[lang][k] ?? k;
const dig = s => lang === 'fa' ? String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]) : String(s);
const exName = e => e.name[lang];

/* ================= نرمال‌سازی جستجو ================= */
const norm = s => String(s).toLowerCase()
  .replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/[ۀة]/g, 'ه')
  .replace(/[\u064B-\u065F\u0670]/g, '').replace(/[\u200c\u200f\-_]/g, ' ')
  .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  .replace(/\s+/g, ' ').trim();

function searchEx(q) {
  const n = norm(q);
  if (!n) return [];
  return EX.map(e => {
    const fields = [e.name.fa, e.name.en, ...(e.alias || [])].map(norm);
    let score = 0;
    fields.forEach(f => {
      if (f === n) score = Math.max(score, 100);
      else if (f.startsWith(n)) score = Math.max(score, 80);
      else if (f.split(' ').some(w => w.startsWith(n))) score = Math.max(score, 60);
      else if (f.includes(n)) score = Math.max(score, 40);
    });
    if (!score && (norm(e.muscle.fa).includes(n) || norm(e.muscle.en).includes(n))) score = 20;
    return { e, score };
  }).filter(x => x.score).sort((a, b) => b.score - a.score).map(x => x.e);
}

/* ================= زبان ================= */
function applyLang() {
  const h = document.documentElement;
  h.lang = lang; h.dir = lang === 'fa' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  $$('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
  $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  $('#langText').textContent = lang === 'fa' ? 'EN' : 'فا';
  document.title = 'ErFitness | ورزش‌یار';
  $('#exList').innerHTML = EX.map(e => `<option value="${esc(exName(e))}"></option>`).join('');
  renderChips(); renderRandom(false); renderToday(); ivRender(); swRender(); cRender(); waterRender(); bmiRender();
  if (planOpen) renderPlan();
  route(false);
}

function switchLang() {
  const app = $('#app'), btn = $('#langBtn');
  btn.classList.add('pop'); app.classList.add('swap');
  setTimeout(() => {
    lang = lang === 'fa' ? 'en' : 'fa';
    store.set('ef_lang', lang);
    applyLang();
    app.classList.remove('swap'); btn.classList.remove('pop');
  }, 280);
}
$('#langBtn').addEventListener('click', switchLang);

/* ================= تم ================= */
let themePref = store.get('ef_theme', 'auto');
const mq = matchMedia('(prefers-color-scheme: dark)');
function applyTheme(animate) {
  const dark = themePref === 'dark' || (themePref === 'auto' && mq.matches);
  const root = document.documentElement;
  if (animate) { root.classList.add('theme-anim'); setTimeout(() => root.classList.remove('theme-anim'), 700); }
  root.dataset.theme = dark ? 'dark' : 'light';
  $('#metaTheme').content = dark ? '#07181c' : '#e4f2ee';
  $$('#themeSeg button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.theme === themePref)));
}
$('#themeSeg').addEventListener('click', e => {
  const b = e.target.closest('button[data-theme]'); if (!b) return;
  themePref = b.dataset.theme; store.set('ef_theme', themePref); applyTheme(true);
});
mq.addEventListener?.('change', () => { if (themePref === 'auto') applyTheme(true); });

/* ================= پنل‌ها ================= */
let drawerOpen = false, planOpen = false;
const scrim = $('#scrim'), drawer = $('#drawer'), sheet = $('#planSheet');
function syncScrim() { scrim.classList.toggle('show', drawerOpen || planOpen); }
function setDrawer(open) {
  drawerOpen = open; drawer.classList.toggle('open', open); drawer.inert = !open;
  $('#menuBtn').setAttribute('aria-expanded', String(open)); syncScrim();
  if (open) setTimeout(() => $('#openPlan').focus({ preventScroll: true }), 350); else collapseTheme();
}
function collapseTheme() { $('#themeAcc').classList.remove('open'); $('#themeToggle').setAttribute('aria-expanded', 'false'); }
$('#menuBtn').addEventListener('click', () => setDrawer(!drawerOpen));
$('#drawerClose').addEventListener('click', () => setDrawer(false));
$('#themeToggle').addEventListener('click', () => {
  const open = !$('#themeAcc').classList.contains('open');
  $('#themeAcc').classList.toggle('open', open); $('#themeToggle').setAttribute('aria-expanded', String(open));
});
function setPlan(open) {
  planOpen = open; sheet.classList.toggle('open', open); sheet.inert = !open; syncScrim();
  if (open) { editing = !plan; draft = clone(plan || emptyPlan()); renderPlan(); }
}
$('#openPlan').addEventListener('click', () => { setDrawer(false); setTimeout(() => setPlan(true), 180); });
$('#planClose').addEventListener('click', () => setPlan(false));
scrim.addEventListener('click', () => { setDrawer(false); setPlan(false); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { setDrawer(false); setPlan(false); closeSuggest(); }
});

/* ================= پیام کوتاه ================= */
let toastTimer;
function toast(msg) {
  const el = $('#toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ================= نورِ شیشه دنبال اشاره‌گر ================= */
let pmRaf = 0, pmEv = null;
document.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;
  pmEv = e;
  if (pmRaf) return;
  pmRaf = requestAnimationFrame(() => {
    pmRaf = 0;
    const g = pmEv.target.closest?.('.glass'); if (!g) return;
    const r = g.getBoundingClientRect();
    g.style.setProperty('--mx', (pmEv.clientX - r.left) + 'px');
    g.style.setProperty('--my', (pmEv.clientY - r.top) + 'px');
  });
}, { passive: true });

/* ================= مسیریابی ================= */
const views = { home: $('#view-home'), results: $('#view-results'), detail: $('#view-detail'), article: $('#view-article') };
let navs = 0, firstRoute = true;
function show(name) {
  Object.entries(views).forEach(([k, el]) => {
    if (k === name) { el.hidden = false; el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; }
    else el.hidden = true;
  });
}
function route(scroll = true) {
  const raw = location.hash || '#/';
  const h = decodeURIComponent(raw);
  let m;
  if ((m = raw.match(/^#\/a\/(.+)$/))) { renderArticle(decodeURIComponent(m[1])); show('article'); }
  else if ((m = h.match(/^#\/e\/(.+)$/)) && byId(m[1])) { renderDetail(byId(m[1])); show('detail'); }
  else if ((m = h.match(/^#\/s\/(.*)$/))) { renderResults(m[1]); show('results'); }
  else show('home');
  if (scroll) window.scrollTo({ top: 0, behavior: firstRoute ? 'auto' : 'smooth' });
  firstRoute = false;
}
window.addEventListener('hashchange', () => { navs++; route(true); });
const goBack = () => navs > 0 ? history.back() : (location.hash = '#/');
const openEx = id => { location.hash = '#/e/' + id; };

/* ================= جستجو ================= */
const q = $('#q'), sug = $('#suggest');
let sugList = [], sugIdx = -1;
function closeSuggest() { sug.classList.remove('open'); sugIdx = -1; }
function renderSuggest() {
  const val = q.value.trim();
  if (!val) return closeSuggest();
  sugList = searchEx(val).slice(0, 6);
  sug.innerHTML = sugList.length
    ? sugList.map((e, i) => `<button type="button" class="sug-item" role="option" data-id="${e.id}" data-i="${i}"><span>${esc(exName(e))}</span><small>${esc(e.muscle[lang])}</small></button>`).join('')
    : `<div class="sug-empty">${esc(t('noResults').replace(':', ''))}</div>`;
  sug.classList.add('open'); sugIdx = -1;
}
q.addEventListener('input', renderSuggest);
q.addEventListener('focus', renderSuggest);
q.addEventListener('keydown', e => {
  const items = $$('.sug-item', sug);
  if (!items.length || !['ArrowDown', 'ArrowUp'].includes(e.key)) return;
  e.preventDefault();
  sugIdx = (sugIdx + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
  items.forEach((el, i) => el.classList.toggle('active', i === sugIdx));
});
sug.addEventListener('click', e => {
  const b = e.target.closest('.sug-item'); if (!b) return;
  closeSuggest(); q.blur(); q.value = b.querySelector('span').textContent; location.hash = '#/s/' + encodeURIComponent(q.value);
});
document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) closeSuggest(); });
$('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  const val = q.value.trim(); if (!val) return q.focus();
  if (sugIdx >= 0 && sugList[sugIdx]) q.value = exName(sugList[sugIdx]);
  closeSuggest(); q.blur();
  location.hash = '#/s/' + encodeURIComponent(q.value.trim());
});

function renderResults(query) {
  const res = searchEx(query);
  views.results.innerHTML = `
    <div class="page-head">
      <button class="btn back" data-act="back" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>${t('back')}</button>
      <h2>${t('results')} «${esc(query)}»</h2>
    </div>
    <section class="art-section" id="artBox" style="margin-top:0"></section>
    ${res.length ? `<section class="art-section"><h3>${t('ownTitle')}</h3><div class="grid">${res.map(e => `
      <button class="glass res-card" data-open="${e.id}" type="button">
        <h3>${esc(exName(e))}</h3>
        <span class="tag">${esc(e.muscle[lang])}</span>
        <p>${esc(e.desc[lang])}</p>
      </button>`).join('')}</div></section>` : ''}`;
  const terms = [query];
  if (res[0] && norm(res[0].name.fa) !== norm(query)) terms.push(res[0].name.fa);
  loadArticles($('#artBox', views.results), terms);
}
views.results.addEventListener('click', e => {
  if (e.target.closest('[data-act="back"]')) return goBack();
  const c = e.target.closest('[data-open]'); if (c) return openEx(c.dataset.open);
  const a = e.target.closest('[data-art]'); if (a) location.hash = '#/a/' + a.dataset.art;
});

/* ================= صفحه حرکت ================= */
function renderDetail(e) {
  const vid = /^[\w-]{11}$/.test(e.video || '');
  const yt = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(e.name.en + ' exercise proper form');
  const video = vid
    ? `<iframe src="https://www.youtube-nocookie.com/embed/${e.video}" title="${esc(exName(e))}" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`
    : `<div class="video-ph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="4"/><path d="m10 9.5 5 2.5-5 2.5Z"/></svg><p class="muted">${t('noVideo')}</p><a class="btn primary" href="${yt}" target="_blank" rel="noopener">${t('watchYT')}</a></div>`;
  views.detail.innerHTML = `
    <div class="page-head"><button class="btn back" data-act="back" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>${t('back')}</button></div>
    <div class="detail">
      <div class="glass video-box">${video}</div>
      <article class="glass article">
        <h2>${esc(exName(e))}</h2>
        <div><span class="tag">${t('muscle')}: ${esc(e.muscle[lang])}</span><span class="tag">${t('level')}: ${t('lv' + e.level)}</span></div>
        <p style="margin-top:10px">${esc(e.desc[lang])}</p>
        <h3>${t('steps')}</h3>
        <ol>${e.steps[lang].map(s => `<li>${esc(s)}</li>`).join('')}</ol>
        <h3>${t('tips')}</h3>
        <ul>${e.tips[lang].map(s => `<li>${esc(s)}</li>`).join('')}</ul>
        ${e.source ? `<p class="source">${t('source')}: <a href="${esc(e.source.url)}" target="_blank" rel="noopener">${esc(e.source.name)}</a></p>` : ''}
      </article>
    </div>
    <section class="art-section" id="artBox"></section>`;
  loadArticles($('#artBox', views.detail), [e.name.fa]);
}
views.detail.addEventListener('click', e => {
  if (e.target.closest('[data-act="back"]')) return goBack();
  const a = e.target.closest('[data-art]'); if (a) location.hash = '#/a/' + a.dataset.art;
});

/* ================= مقاله‌های فیتامین ================= */
const FT = window.FITAMIN || { enabled: false };
const artCache = new Map();
let artToken = 0;
const plain = h => new DOMParser().parseFromString(h || '', 'text/html').documentElement.textContent.trim();
function okUrl(u) {
  try { const x = new URL(u); return x.protocol === 'https:' && (FT.hosts || []).includes(x.hostname); } catch { return false; }
}
async function fetchTerm(term) {
  if (artCache.has(term)) return artCache.get(term);
  const u = `${FT.api}?search=${encodeURIComponent(term)}&per_page=${FT.perPage || 6}&_embed=wp:featuredmedia`;
  const r = await fetch(u, { headers: { Accept: 'application/json' } });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const j = await r.json(); artCache.set(term, j); return j;
}
async function loadArticles(box, terms) {
  if (!FT.enabled || !box) return;
  const token = ++artToken;
  box.innerHTML = `<h3>${t('artTitle')}</h3><div class="grid"><div class="skel"></div><div class="skel"></div><div class="skel"></div></div>`;
  try {
    const lists = await Promise.all([...new Set(terms)].map(fetchTerm));
    if (token !== artToken || !box.isConnected) return;
    const seen = new Set(), posts = [];
    lists.flat().forEach(p => { if (!seen.has(p.id) && okUrl(p.link)) { seen.add(p.id); posts.push(p); } });
    box.innerHTML = `<h3>${t('artTitle')}</h3>` + (posts.length ? `<div class="grid">${posts.map(p => {
      const img = p._embedded?.['wp:featuredmedia']?.[0]?.source_url;
      const d = p.date ? new Date(p.date).toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US') : '';
      return `<button type="button" class="glass art-card" data-art="${encodeURIComponent(p.link)}">${img && /^https:/.test(img) ? `<div class="thumb" style="background-image:url('${esc(img)}')"></div>` : ''}<div class="txt"><h4>${esc(plain(p.title?.rendered))}</h4><small>${esc(d)}</small></div></button>`;
    }).join('')}</div>` : `<p class="muted">${t('artNone')}</p>`);
  } catch (err) {
    if (token === artToken && box.isConnected) box.innerHTML = `<h3>${t('artTitle')}</h3><p class="muted">${t('artFail')}</p>`;
  }
}
function renderArticle(url) {
  if (!okUrl(url)) { views.article.innerHTML = `<p class="muted">${t('artFail')}</p>`; return; }
  views.article.innerHTML = `
    <div class="page-head">
      <button class="btn back" data-act="back" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>${t('back')}</button>
      <a class="btn primary" href="${esc(url)}" target="_blank" rel="noopener">${t('openOrig')}</a>
      <span class="muted">${t('artSource')}</span>
    </div>
    <div class="glass frame-box"><div class="loading">${t('loadingArt')}</div><iframe src="${esc(url)}" title="Fitamin" referrerpolicy="no-referrer-when-downgrade" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe></div>
    <p class="frame-hint">${t('frameHint')}</p>`;
  const f = $('iframe', views.article); f.addEventListener('load', () => f.classList.add('ready'));
}
views.article.addEventListener('click', e => { if (e.target.closest('[data-act="back"]')) goBack(); });

/* ================= صفحه اصلی: چیپ‌ها و تمرین رندوم ================= */
function renderChips() {
  $('#quickChips').innerHTML = EX.slice(0, 6).map(e => `<button class="chip" type="button" data-open="${e.id}">${esc(exName(e))}</button>`).join('');
}
const searchFor = id => { location.hash = '#/s/' + encodeURIComponent(byId(id).name.fa); };
$('#quickChips').addEventListener('click', e => { const c = e.target.closest('[data-open]'); if (c) searchFor(c.dataset.open); });

let rndId = EX.length ? EX[Math.floor(Math.random() * EX.length)].id : null;
function renderRandom(animate = false) {
  const card = $('#randomCard'); if (!rndId) return;
  const fill = () => {
    const e = byId(rndId);
    card.innerHTML = `
      <div class="body">
        <h3>${t('randomTitle')}</h3>
        <div class="rname">${esc(exName(e))}</div>
        <div><span class="tag">${esc(e.muscle[lang])}</span><span class="tag">${t('lv' + e.level)}</span></div>
        <p class="rdesc">${esc(e.desc[lang])}</p>
      </div>
      <div class="btns"><button class="btn primary" type="button" data-open="${e.id}">${t('viewExercise')}</button><button class="btn" type="button" data-act="shuffle">${t('another')}</button></div>`;
  };
  if (!animate) return fill();
  const body = $('.body', card); body?.classList.add('out');
  setTimeout(() => { fill(); const b = $('.body', card); b.classList.add('out'); void b.offsetWidth; b.classList.remove('out'); }, 260);
}
$('#randomCard').addEventListener('click', e => {
  if (e.target.closest('[data-act="shuffle"]')) {
    let n; do { n = EX[Math.floor(Math.random() * EX.length)].id; } while (n === rndId && EX.length > 1);
    rndId = n; renderRandom(true); return;
  }
  const o = e.target.closest('[data-open]'); if (o) searchFor(o.dataset.open);
});

/* ================= برنامه ورزشی ================= */
const emptyPlan = () => ({ days: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] } });
let plan = store.get('ef_plan', null);
let draft = null, editing = false, lastAdded = null;

const itemLabel = it => it.id ? (byId(it.id) ? exName(byId(it.id)) : it.id) : esc(it.t);
function chipHTML(it, day, i, edit) {
  const isNew = lastAdded && lastAdded.day === day && lastAdded.i === i;
  const rm = edit ? `<button class="chip-x" type="button" data-act="rm" data-day="${day}" data-i="${i}" aria-label="${t('remove')}">×</button>` : '';
  const link = !edit && it.id;
  const label = it.id ? esc(itemLabel(it)) : itemLabel(it);
  return link
    ? `<button class="chip" type="button" data-act="open" data-id="${it.id}">${label}</button>`
    : `<span class="chip${isNew ? ' new' : ''}">${label}${rm}</span>`;
}
function renderPlan() {
  const src = editing ? draft : plan;
  const today = new Date().getDay();
  $('#planBody').innerHTML = T[lang].dayOrder.map(d => {
    const items = (src && src.days[d]) || [];
    return `<div class="day${d === today ? ' today' : ''}">
      <h4>${t('days')[d]}${d === today ? `<span class="badge">${t('today')}</span>` : ''}</h4>
      <div class="list">${items.length ? items.map((it, i) => chipHTML(it, d, i, editing)).join('') : `<span class="muted">${t('emptyDay')}</span>`}</div>
      ${editing ? `<div class="add-row"><input id="in-${d}" list="exList" placeholder="${t('addPh')}" data-day="${d}" autocomplete="off" enterkeyhint="done"><button class="btn small" type="button" data-act="add" data-day="${d}">${t('addEx')}</button></div>` : ''}
    </div>`;
  }).join('');
  $('#planFoot').innerHTML = editing
    ? `${plan ? `<button class="btn" type="button" data-act="cancel">${t('cancel')}</button>` : ''}<button class="btn primary" type="button" data-act="apply">${t('apply')}</button>`
    : `<button class="btn primary" type="button" data-act="edit">${t('edit')}</button>`;
  lastAdded = null;
}
function addToDay(day) {
  const input = $('#in-' + day); const v = input.value.trim(); if (!v) return;
  const n = norm(v);
  const hit = EX.find(e => [e.name.fa, e.name.en, ...(e.alias || [])].some(x => norm(x) === n));
  draft.days[day].push(hit ? { id: hit.id } : { t: v });
  lastAdded = { day: +day, i: draft.days[day].length - 1 };
  renderPlan(); $('#in-' + day)?.focus();
}
$('#planBody').addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act;
  if (a === 'add') addToDay(b.dataset.day);
  else if (a === 'rm') { draft.days[b.dataset.day].splice(+b.dataset.i, 1); renderPlan(); }
  else if (a === 'open') { setPlan(false); searchFor(b.dataset.id); }
});
$('#planBody').addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.matches('input[data-day]')) { e.preventDefault(); addToDay(e.target.dataset.day); }
});
$('#planFoot').addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act;
  if (a === 'apply') {
    if (!Object.values(draft.days).some(l => l.length)) return toast(t('planNeed'));
    plan = clone(draft); store.set('ef_plan', plan); editing = false; renderPlan(); renderToday(); toast(t('saved'));
  } else if (a === 'edit') { draft = clone(plan); editing = true; renderPlan(); }
  else if (a === 'cancel') { editing = false; draft = clone(plan); renderPlan(); }
});

function renderToday() {
  const el = $('#wToday'); const d = new Date().getDay();
  const items = plan ? (plan.days[d] || []) : [];
  let body;
  if (!plan) body = `<p class="muted" style="margin-bottom:14px">${t('noPlanYet')}</p><button class="btn primary" type="button" data-act="plan">${t('makePlan')}</button>`;
  else if (!items.length) body = `<p class="muted" style="margin-bottom:14px">${t('restDay')}</p><button class="btn" type="button" data-act="plan">${t('openPlan')}</button>`;
  else body = `<div class="btns" style="margin-bottom:14px">${items.map(it => it.id
      ? `<button class="chip" type="button" data-open="${it.id}">${esc(itemLabel(it))}</button>`
      : `<span class="chip">${itemLabel(it)}</span>`).join('')}</div><button class="btn" type="button" data-act="plan">${t('openPlan')}</button>`;
  el.innerHTML = `<h3>${t('wToday')} · ${t('days')[d]}</h3>${body}`;
}
$('#wToday').addEventListener('click', e => {
  if (e.target.closest('[data-act="plan"]')) return setPlan(true);
  const o = e.target.closest('[data-open]'); if (o) searchFor(o.dataset.open);
});

/* ================= صدا ================= */
let ac;
function beep(freq = 880, dur = .14) {
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine'; o.frequency.value = freq; o.connect(g); g.connect(ac.destination);
    g.gain.setValueAtTime(.0001, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(.25, ac.currentTime + .01);
    g.gain.exponentialRampToValueAtTime(.0001, ac.currentTime + dur);
    o.start(); o.stop(ac.currentTime + dur + .02);
  } catch {}
  navigator.vibrate?.(50);
}
const mmss = s => dig(String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'));

/* ================= تایمر اینتروال ================= */
const iv = { phase: 'idle', left: 0, total: 1, round: 1, running: false, end: 0, id: null };
const ivCfg = () => ({
  work: clamp(parseInt($('#ivWork').value) || 40, 1, 3600),
  rest: clamp(isNaN(parseInt($('#ivRest').value)) ? 20 : parseInt($('#ivRest').value), 0, 3600),
  rounds: clamp(parseInt($('#ivRounds').value) || 1, 1, 99)
});
function ivSet(p) {
  const c = ivCfg(); iv.phase = p;
  iv.total = (p === 'work' ? c.work : c.rest) * 1000; iv.left = iv.total; iv.end = Date.now() + iv.left;
  beep(p === 'work' ? 988 : 659);
}
function ivTick() {
  if (!iv.running) return;
  iv.left = iv.end - Date.now();
  if (iv.left <= 0) {
    const c = ivCfg();
    if (iv.phase === 'work') {
      if (iv.round >= c.rounds) { iv.phase = 'done'; iv.running = false; iv.left = 0; clearInterval(iv.id); beep(988, .2); setTimeout(() => beep(1175, .3), 250); }
      else if (c.rest > 0) ivSet('rest');
      else { iv.round++; ivSet('work'); }
    } else if (iv.phase === 'rest') { iv.round++; ivSet('work'); }
  }
  ivRender();
}
function ivRender() {
  const c = ivCfg(), secs = Math.max(0, Math.ceil(iv.left / 1000));
  $('#ivTime').textContent = iv.phase === 'idle' ? mmss(c.work) : mmss(secs);
  $('#ivPhase').textContent = iv.phase === 'idle' ? t('ph_idle') : iv.phase === 'done' ? t('ph_done') : `${t('ph_' + iv.phase)} · ${t('round')} ${dig(iv.round)}/${dig(c.rounds)}`;
  const fg = $('#ringFg');
  fg.style.strokeDashoffset = iv.phase === 'idle' || iv.phase === 'done' ? (iv.phase === 'done' ? 326.7 : 0) : String(326.7 * (1 - iv.left / iv.total));
  fg.classList.toggle('rest', iv.phase === 'rest');
  $('#ivStart').textContent = iv.running ? t('pause') : (iv.phase === 'idle' || iv.phase === 'done') ? t('start') : t('resume');
}
$('#ivStart').addEventListener('click', () => {
  if (iv.running) { iv.left = iv.end - Date.now(); iv.running = false; clearInterval(iv.id); return ivRender(); }
  if (iv.phase === 'idle' || iv.phase === 'done') { iv.round = 1; ivSet('work'); }
  else iv.end = Date.now() + iv.left;
  iv.running = true; clearInterval(iv.id); iv.id = setInterval(ivTick, 100); ivRender();
});
$('#ivReset').addEventListener('click', () => { clearInterval(iv.id); Object.assign(iv, { phase: 'idle', running: false, left: 0, round: 1 }); ivRender(); });
['#ivWork', '#ivRest', '#ivRounds'].forEach(s => $(s).addEventListener('input', () => { if (iv.phase === 'idle') ivRender(); }));

/* ================= کرونومتر ================= */
const sw = { running: false, start: 0, elapsed: 0, id: null, laps: [] };
const swNow = () => sw.elapsed + (sw.running ? Date.now() - sw.start : 0);
const swFmt = ms => { const s = Math.floor(ms / 1000); return dig(`${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}.${Math.floor((ms % 1000) / 100)}`); };
function swRender() {
  $('#swTime').textContent = swFmt(swNow());
  $('#swStart').textContent = sw.running ? t('pause') : (sw.elapsed ? t('resume') : t('start'));
  $('#swLaps').innerHTML = sw.laps.map((l, i) => `<li><span>${t('lap')} ${dig(i + 1)}</span><span>${swFmt(l)}</span></li>`).reverse().join('');
}
$('#swStart').addEventListener('click', () => {
  if (sw.running) { sw.elapsed = swNow(); sw.running = false; clearInterval(sw.id); }
  else { sw.start = Date.now(); sw.running = true; sw.id = setInterval(() => { $('#swTime').textContent = swFmt(swNow()); }, 100); }
  swRender();
});
$('#swLap').addEventListener('click', () => { if (swNow() > 0) { sw.laps.push(swNow()); swRender(); } });
$('#swReset').addEventListener('click', () => { clearInterval(sw.id); Object.assign(sw, { running: false, elapsed: 0, laps: [] }); swRender(); });

/* ================= شمارنده ================= */
const cnt = { n: 0, set: 1 };
function cRender(bump) {
  const el = $('#cNum'); el.textContent = dig(cnt.n); $('#cSet').textContent = `${t('set')} ${dig(cnt.set)}`;
  if (bump) { el.classList.add('bump'); setTimeout(() => el.classList.remove('bump'), 160); }
}
$('#cPlus').addEventListener('click', () => { cnt.n++; cRender(true); navigator.vibrate?.(15); });
$('#cMinus').addEventListener('click', () => { cnt.n = Math.max(0, cnt.n - 1); cRender(true); });
$('#cNext').addEventListener('click', () => { cnt.set++; cnt.n = 0; cRender(true); });
$('#cReset').addEventListener('click', () => { cnt.n = 0; cnt.set = 1; cRender(); });

/* ================= آب ================= */
const dayKey = () => new Date().toDateString();
let water = store.get('ef_water', { d: dayKey(), n: 0 });
if (water.d !== dayKey()) water = { d: dayKey(), n: 0 };
const DROP = '<svg viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round"><path d="M12 3s6 6.2 6 10.5A6 6 0 0 1 6 13.5C6 9.2 12 3 12 3Z"/></svg>';
function waterRender() {
  $('#drops').innerHTML = Array.from({ length: 8 }, (_, i) => `<button type="button" class="drop${i < water.n ? ' on' : ''}" data-i="${i}" aria-pressed="${i < water.n}" aria-label="${dig(i + 1)}">${DROP}</button>`).join('');
  $('#waterTxt').textContent = `${dig(water.n)} / ${dig(8)} ${t('glasses')}`;
}
$('#drops').addEventListener('click', e => {
  const b = e.target.closest('.drop'); if (!b) return;
  const i = +b.dataset.i; water.n = (water.n === i + 1) ? i : i + 1;
  store.set('ef_water', water); waterRender();
});

/* ================= BMI ================= */
function bmiRender() {
  const h = parseFloat($('#bmiH').value), w = parseFloat($('#bmiW').value), out = $('#bmiOut');
  if (!h || !w || h < 50 || w < 10) { out.innerHTML = `<span class="muted">${t('bmiHint')}</span>`; return; }
  const v = w / ((h / 100) ** 2);
  const k = v < 18.5 ? 'bmiUnder' : v < 25 ? 'bmiNormal' : v < 30 ? 'bmiOver' : 'bmiObese';
  out.innerHTML = `<b>${dig(v.toFixed(1))}</b>${t(k)}<br><span class="muted" style="font-size:.85rem">${t('bmiNote')}</span>`;
}
$('#bmiH').addEventListener('input', bmiRender);
$('#bmiW').addEventListener('input', bmiRender);

/* ================= شروع ================= */
applyTheme(false);
applyLang();
})();
