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
const MU = window.MUSCLES, EQ = window.EQUIP, GR = window.GROUPS;

/* ================= متن‌ها ================= */
const T = {
  fa: {
    brand: 'ورزش‌یار', tagline: 'صد حرکت باشگاهی با توضیح کامل، نقشه عضلات و برنامه هفتگی.',
    searchPh: 'نام حرکت را جستجو کنید، مثلاً اسکات', search: 'جستجو', menu: 'منو', langName: 'تغییر زبان',
    plan: 'برنامه ورزشی', theme: 'تم', dark: 'تیره', light: 'روشن', auto: 'خودکار (مطابق سیستم)', close: 'بستن',
    randomTitle: 'تمرین پیشنهادی', another: 'یک حرکت دیگر', viewExercise: 'مشاهده حرکت',
    wToday: 'برنامه امروز', noPlanYet: 'هنوز برنامه‌ای نساخته‌اید.', makePlan: 'ساخت برنامه', restDay: 'برای امروز حرکتی تعیین نشده.', openPlan: 'مشاهده برنامه',
    wInterval: 'تایمر اینتروال', work: 'تمرین (ثانیه)', rest: 'استراحت (ثانیه)', rounds: 'تعداد دور',
    start: 'شروع', pause: 'توقف', resume: 'ادامه', reset: 'بازنشانی',
    ph_idle: 'آماده', ph_work: 'تمرین', ph_rest: 'استراحت', ph_done: 'تمام شد!', round: 'دور',
    wStopwatch: 'کرونومتر', lap: 'دور', wCounter: 'شمارنده تکرار', set: 'ست', nextSet: 'ست بعدی',
    wWater: 'آب امروز', glasses: 'لیوان', waterTap: 'روی قطره بزنید تا تا همان‌جا پر شود.', waterDone: 'آفرین! هدف امروز کامل شد.',
    wBmi: 'شاخص توده بدنی', height: 'قد (سانتی‌متر)', weight: 'وزن (کیلوگرم)',
    bmiHint: 'قد و وزن را وارد کنید.', bmiUnder: 'کم‌وزن', bmiNormal: 'طبیعی', bmiOver: 'اضافه‌وزن', bmiObese: 'چاق',
    bmiNote: 'این عدد فقط یک راهنمای کلی است.',
    libTitle: 'کتابخانه حرکت‌ها', all: 'همه', more: 'نمایش بیشتر',
    results: 'نتایج جستجو برای', noResults: 'حرکتی با این نام پیدا نشد. این حرکت‌ها را ببینید:', back: 'بازگشت',
    muscle: 'عضله اصلی', level: 'سطح', equip: 'تجهیزات', lv1: 'مبتدی', lv2: 'متوسط', lv3: 'پیشرفته',
    steps: 'مراحل اجرا', tips: 'نکات مهم',
    mapTitle: 'نقشه عضلات درگیر', front: 'روبه‌رو', side: 'پهلو', priM: 'عضله اصلی', secM: 'عضله فرعی',
    watchTitle: 'فیلم آموزشی', watchDesc: 'اجرای درست این حرکت را در آپارات ببینید.', watchBtn: 'دیدن فیلم در آپارات',
    planTitle: 'برنامه ورزشی هفتگی', planSub: 'برای هر روز هر چند حرکت که می‌خواهید اضافه کنید.',
    apply: 'اعمال برنامه', edit: 'ویرایش', cancel: 'انصراف', addEx: 'افزودن', addPh: 'نام حرکت یا تمرین دلخواه',
    emptyDay: 'روز استراحت', today: 'امروز', saved: 'برنامه ذخیره شد', planNeed: 'حداقل یک حرکت اضافه کنید.', remove: 'حذف',
    madeA: 'ساخته‌شده با', madeB: 'توسط عرفان',
    tabHome: 'صفحه اصلی', tabData: 'داده و تحلیل', tabMeasure: 'اندازه‌گیری‌ها', dataTitle: 'داده و تحلیل', measureTitle: 'اندازه‌گیری‌ها',
    chartTitle: 'ورزش هفتگی', thisWeek: 'این هفته', lastWeek: 'هفته قبل', total: 'مجموع این هفته', avg: 'میانگین روزانه', active: 'روز فعال', lastTotal: 'مجموع هفته قبل',
    min: 'دقیقه', tipTitle: 'تحلیل هفته', tipNoneH: 'شروع کن', tipUpH: 'بهتر از هفته قبل', tipDownH: 'کمتر از هفته قبل', tipFlatH: 'مثل هفته قبل',
    tipNone: 'هنوز تمرینی ثبت نکرده‌ای. اولین تمرین را ثبت کن تا نمودار شروع شود.',
    tipStart: 'شروع خوبی داشتی! هفته قبل تمرینی ثبت نشده بود و این هفته تا الان {a} ورزش کرده‌ای.',
    tipUp: 'عالی! تا همین‌جای هفته {p}٪ بیشتر از همین بازه هفته قبل ورزش کرده‌ای ({a} در برابر {b}).',
    tipFlat: 'تقریباً مثل هفته قبل عمل کرده‌ای ({a} در برابر {b}). با ۱۰ دقیقه بیشتر می‌توانی جلو بیفتی.',
    tipDown: 'تا همین‌جای هفته {p}٪ کمتر از همین بازه هفته قبل ورزش کرده‌ای ({a} در برابر {b}). یک تمرین کوتاه امروز می‌تواند جبرانش کند.',
    tipZero: 'این هفته هنوز تمرینی ثبت نکرده‌ای؛ تا همین بازه هفته قبل {b} ورزش کرده بودی.',
    logTitle: 'ثبت تمرین', logDay: 'روز', logPh: 'دقیقه دلخواه', logClear: 'پاک کردن این روز', logAdded: 'ثبت شد',
    dshort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
    days: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'], dayOrder: [6, 0, 1, 2, 3, 4, 5]
  },
  en: {
    brand: 'ErFitness', tagline: '100 gym exercises with full guides, muscle maps and a weekly plan.',
    searchPh: 'Search an exercise, e.g. squat', search: 'Search', menu: 'Menu', langName: 'Change language',
    plan: 'Workout plan', theme: 'Theme', dark: 'Dark', light: 'Light', auto: 'Auto (match system)', close: 'Close',
    randomTitle: 'Suggested exercise', another: 'Another one', viewExercise: 'View exercise',
    wToday: "Today's plan", noPlanYet: "You haven't made a plan yet.", makePlan: 'Create plan', restDay: 'Nothing planned for today.', openPlan: 'View plan',
    wInterval: 'Interval timer', work: 'Work (sec)', rest: 'Rest (sec)', rounds: 'Rounds',
    start: 'Start', pause: 'Pause', resume: 'Resume', reset: 'Reset',
    ph_idle: 'Ready', ph_work: 'Work', ph_rest: 'Rest', ph_done: 'Done!', round: 'Round',
    wStopwatch: 'Stopwatch', lap: 'Lap', wCounter: 'Rep counter', set: 'Set', nextSet: 'Next set',
    wWater: "Today's water", glasses: 'glasses', waterTap: 'Tap a drop to fill up to it.', waterDone: 'Great! Daily goal reached.',
    wBmi: 'Body mass index', height: 'Height (cm)', weight: 'Weight (kg)',
    bmiHint: 'Enter your height and weight.', bmiUnder: 'Underweight', bmiNormal: 'Normal', bmiOver: 'Overweight', bmiObese: 'Obese',
    bmiNote: 'This number is only a general guide.',
    libTitle: 'Exercise library', all: 'All', more: 'Show more',
    results: 'Search results for', noResults: 'No exercise matched that name. Try these:', back: 'Back',
    muscle: 'Main muscles', level: 'Level', equip: 'Equipment', lv1: 'Beginner', lv2: 'Intermediate', lv3: 'Advanced',
    steps: 'How to do it', tips: 'Key tips',
    mapTitle: 'Muscles worked', front: 'Front', side: 'Side', priM: 'Primary', secM: 'Secondary',
    watchTitle: 'Video tutorial', watchDesc: 'Watch the correct form on Aparat.', watchBtn: 'Watch on Aparat',
    planTitle: 'Weekly workout plan', planSub: 'Add as many exercises as you like to each day.',
    apply: 'Apply plan', edit: 'Edit', cancel: 'Cancel', addEx: 'Add', addPh: 'Exercise or custom activity',
    emptyDay: 'Rest day', today: 'Today', saved: 'Plan saved', planNeed: 'Add at least one exercise.', remove: 'Remove',
    madeA: 'Made with', madeB: 'by Erfan',
    tabHome: 'Home Page', tabData: 'Data & Analysis', tabMeasure: 'Measurements', dataTitle: 'Data & Analysis', measureTitle: 'Measurements',
    chartTitle: 'Weekly workout', thisWeek: 'This week', lastWeek: 'Last week', total: 'Total this week', avg: 'Daily average', active: 'Active days', lastTotal: 'Last week total',
    min: 'min', tipTitle: 'Weekly insight', tipNoneH: 'Get started', tipUpH: 'Better than last week', tipDownH: 'Less than last week', tipFlatH: 'Same as last week',
    tipNone: "You haven't logged a workout yet. Log your first one to start the chart.",
    tipStart: "Great start! Nothing was logged last week and you've done {a} so far this week.",
    tipUp: "Nice! You've trained {p}% more than the same period last week ({a} vs {b}).",
    tipFlat: "About the same as last week ({a} vs {b}). Ten extra minutes would put you ahead.",
    tipDown: "You've trained {p}% less than the same period last week ({a} vs {b}). A short session today could make up for it.",
    tipZero: "No workouts logged yet this week; by this point last week you had done {b}.",
    logTitle: 'Log a workout', logDay: 'Day', logPh: 'Custom minutes', logClear: 'Clear this day', logAdded: 'logged',
    dshort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], dayOrder: [1, 2, 3, 4, 5, 6, 0]
  }
};

let lang = store.get('ef_lang', 'fa');
if (!T[lang]) lang = 'fa';
const t = k => T[lang][k] ?? k;
const dig = s => lang === 'fa' ? String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]) : String(s);
const exName = e => e.name[lang];
const muscleName = c => MU[c][lang];
const muscleText = e => e.primary.map(muscleName).join(lang === 'fa' ? '، ' : ', ');

/* ================= جستجو ================= */
const norm = s => String(s).toLowerCase()
  .replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/[ۀة]/g, 'ه')
  .replace(/[\u064B-\u065F\u0670]/g, '').replace(/[\u200c\u200f\-_]/g, ' ')
  .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  .replace(/\s+/g, ' ').trim();

function searchEx(q) {
  const n = norm(q);
  if (!n) return [];
  return EX.map(e => {
    const fields = [e.name.fa, e.name.en, ...e.alias].map(norm);
    let score = 0;
    fields.forEach(f => {
      if (f === n) score = Math.max(score, 100);
      else if (f.startsWith(n)) score = Math.max(score, 80);
      else if (f.split(' ').some(w => w.startsWith(n))) score = Math.max(score, 60);
      else if (f.includes(n)) score = Math.max(score, 40);
    });
    if (!score) {
      const extra = [...e.primary, ...e.secondary].flatMap(c => [MU[c].fa, MU[c].en]).concat([EQ[e.equip].fa, EQ[e.equip].en]).map(norm);
      const prim = e.primary.flatMap(c => [MU[c].fa, MU[c].en]).map(norm);
      if (prim.some(x => x.includes(n))) score = 25;
      else if (extra.some(x => x.includes(n))) score = 15;
    }
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
  renderChips(); renderRandom(false); renderToday(); renderLibrary(); renderData(false);
  ivRender(); swRender(); cRender(); waterText(); bmiRender();
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

/* ================= نورِ شیشه (فقط ماوس) ================= */
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
const views = { home: $('#view-home'), results: $('#view-results'), detail: $('#view-detail'), data: $('#view-data'), measure: $('#view-measure') };
let navs = 0, firstRoute = true;
function show(name) {
  Object.entries(views).forEach(([k, el]) => {
    if (k === name) { el.hidden = false; el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; }
    else el.hidden = true;
  });
}
function route(scroll = true) {
  let h = location.hash || '#/';
  try { h = decodeURIComponent(h); } catch {}
  let m;
  if ((m = h.match(/^#\/e\/(.+)$/)) && byId(m[1])) { renderDetail(byId(m[1])); show('detail'); setTab('home'); }
  else if ((m = h.match(/^#\/s\/(.*)$/))) { renderResults(m[1]); show('results'); setTab('home'); }
  else if (h === '#/data') { show('data'); setTab('data'); renderData(true); }
  else if (h === '#/measure') { show('measure'); setTab('measure'); }
  else { show('home'); setTab('home'); }
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
    ? sugList.map((e, i) => `<button type="button" class="sug-item" role="option" data-id="${e.id}" data-i="${i}"><span>${esc(exName(e))}</span><small>${esc(muscleText(e))} · ${esc(EQ[e.equip][lang])}</small></button>`).join('')
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
  closeSuggest(); q.blur(); openEx(b.dataset.id);
});
document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) closeSuggest(); });
$('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  const val = q.value.trim(); if (!val) return q.focus();
  if (sugIdx >= 0 && sugList[sugIdx]) { closeSuggest(); q.blur(); return openEx(sugList[sugIdx].id); }
  const res = searchEx(val);
  closeSuggest(); q.blur();
  if (res.length === 1) openEx(res[0].id); else location.hash = '#/s/' + encodeURIComponent(val);
});

/* ================= کارت حرکت (سبک، بدون بلور) ================= */
const cardHTML = e => `
  <button class="res-card" data-open="${e.id}" type="button">
    <h3>${esc(exName(e))}</h3>
    <span class="tag">${esc(muscleText(e))}</span><span class="tag">${esc(EQ[e.equip][lang])}</span>
  </button>`;

function renderResults(query) {
  const res = searchEx(query);
  const list = res.length ? res : EX;
  views.results.innerHTML = `
    <div class="page-head">
      <button class="btn back" data-act="back" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>${t('back')}</button>
      <h2>${t('results')} «${esc(query)}»</h2>
    </div>
    ${res.length ? '' : `<p class="muted" style="margin-bottom:16px">${t('noResults')}</p>`}
    <div class="grid lib">${list.map(cardHTML).join('')}</div>`;
}
views.results.addEventListener('click', e => {
  if (e.target.closest('[data-act="back"]')) return goBack();
  const c = e.target.closest('[data-open]'); if (c) openEx(c.dataset.open);
});

/* ================= نقشه عضلات ================= */
function figure(view, pri, sec) {
  const B = window.BODY[view];
  const mir = d => `<g transform="translate(120 0) scale(-1 1)">${d}</g>`;
  let s = `<svg viewBox="0 0 120 270" class="fig" aria-hidden="true"><g class="bs">`;
  B.base.forEach(b => { s += b.t; if (b.mirror) s += mir(b.t); });
  s += '</g>';
  B.muscles.forEach(m => {
    const cls = pri.includes(m.m) ? 'p' : sec.includes(m.m) ? 's' : '';
    const p = `<path class="mu ${cls}" d="${m.d}"/>`;
    s += p; if (B.mirror) s += mir(p);
  });
  return s + '</svg>';
}

/* ================= صفحه حرکت ================= */
function renderDetail(e) {
  const aparat = 'https://www.aparat.com/search/' + encodeURIComponent(e.name.fa + ' آموزش');
  const mus = [...e.primary.map(c => `<span class="tag hot">${esc(muscleName(c))}</span>`), ...e.secondary.map(c => `<span class="tag warm">${esc(muscleName(c))}</span>`)].join('');
  views.detail.innerHTML = `
    <div class="page-head"><button class="btn back" data-act="back" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>${t('back')}</button></div>
    <article class="glass article">
      <h2>${esc(exName(e))}</h2>
      <div><span class="tag">${t('equip')}: ${esc(EQ[e.equip][lang])}</span><span class="tag">${t('level')}: ${t('lv' + e.level)}</span></div>
      <div class="art-top">
        <div class="muscle-box">
          <h3>${t('mapTitle')}</h3>
          <div class="figs">
            <figure>${figure('front', e.primary, e.secondary)}<figcaption>${t('front')}</figcaption></figure>
            <figure>${figure('side', e.primary, e.secondary)}<figcaption>${t('side')}</figcaption></figure>
          </div>
          <div class="legend"><span><i class="dot p"></i>${t('priM')}</span><span><i class="dot s"></i>${t('secM')}</span></div>
          <div class="mus">${mus}</div>
        </div>
        <div>
          <p class="lead">${esc(e.desc[lang])}</p>
          <div class="watch">
            <div><b>${t('watchTitle')}</b><p class="muted">${t('watchDesc')}</p></div>
            <a class="btn primary" href="${aparat}" target="_blank" rel="noopener">${t('watchBtn')}</a>
          </div>
          <h3>${t('steps')}</h3>
          <ol>${e.steps[lang].map(s => `<li>${esc(s)}</li>`).join('')}</ol>
          <h3>${t('tips')}</h3>
          <ul>${e.tips[lang].map(s => `<li>${esc(s)}</li>`).join('')}</ul>
        </div>
      </div>
    </article>`;
}
views.detail.addEventListener('click', e => { if (e.target.closest('[data-act="back"]')) goBack(); });

/* ================= صفحه اصلی: چیپ‌ها، تمرین رندوم، کتابخانه ================= */
const QUICK = ['barbell-bench-press', 'barbell-back-squat', 'deadlift', 'pull-up', 'lat-pulldown', 'barbell-curl'];
function renderChips() {
  $('#quickChips').innerHTML = QUICK.map(byId).filter(Boolean).map(e => `<button class="chip" type="button" data-open="${e.id}">${esc(exName(e))}</button>`).join('');
}
$('#quickChips').addEventListener('click', e => { const c = e.target.closest('[data-open]'); if (c) openEx(c.dataset.open); });

let rndId = EX.length ? EX[Math.floor(Math.random() * EX.length)].id : null;
function renderRandom(animate = false) {
  const card = $('#randomCard'); if (!rndId) return;
  const fill = () => {
    const e = byId(rndId);
    card.innerHTML = `
      <div class="body">
        <h3>${t('randomTitle')}</h3>
        <div class="rname">${esc(exName(e))}</div>
        <div><span class="tag">${esc(muscleText(e))}</span><span class="tag">${esc(EQ[e.equip][lang])}</span><span class="tag">${t('lv' + e.level)}</span></div>
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
  const o = e.target.closest('[data-open]'); if (o) openEx(o.dataset.open);
});

const lib = { group: 'all', shown: 24 };
function renderLibrary() {
  $('#libTitle').textContent = `${t('libTitle')} · ${dig(EX.length)}`;
  $('#libFilters').innerHTML = [{ id: 'all', fa: t('all'), en: t('all') }, ...GR].map(g =>
    `<button type="button" class="chip fchip" data-g="${g.id}" aria-pressed="${g.id === lib.group}">${esc(g[lang])}</button>`).join('');
  const grp = GR.find(g => g.id === lib.group);
  const list = grp ? EX.filter(e => e.primary.some(p => grp.m.includes(p))) : EX;
  $('#libGrid').innerHTML = list.slice(0, lib.shown).map(cardHTML).join('');
  const more = $('#libMore'); more.hidden = list.length <= lib.shown; more.textContent = t('more');
}
$('#libFilters').addEventListener('click', e => {
  const b = e.target.closest('[data-g]'); if (!b) return;
  lib.group = b.dataset.g; lib.shown = 24; renderLibrary();
});
$('#libMore').addEventListener('click', () => { lib.shown += 24; renderLibrary(); });
$('#libGrid').addEventListener('click', e => { const c = e.target.closest('[data-open]'); if (c) openEx(c.dataset.open); });

/* ================= برنامه ورزشی ================= */
const emptyPlan = () => ({ days: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] } });
let plan = store.get('ef_plan', null);
let draft = null, editing = false, lastAdded = null;

const itemLabel = it => it.id ? (byId(it.id) ? exName(byId(it.id)) : it.id) : it.t;
function chipHTML(it, day, i, edit) {
  const isNew = lastAdded && lastAdded.day === day && lastAdded.i === i;
  const rm = edit ? `<button class="chip-x" type="button" data-act="rm" data-day="${day}" data-i="${i}" aria-label="${t('remove')}">×</button>` : '';
  const label = esc(itemLabel(it));
  return (!edit && it.id)
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
  const hit = EX.find(e => [e.name.fa, e.name.en, ...e.alias].some(x => norm(x) === n));
  draft.days[day].push(hit ? { id: hit.id } : { t: v });
  lastAdded = { day: +day, i: draft.days[day].length - 1 };
  renderPlan(); $('#in-' + day)?.focus();
}
$('#planBody').addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act;
  if (a === 'add') addToDay(b.dataset.day);
  else if (a === 'rm') { draft.days[b.dataset.day].splice(+b.dataset.i, 1); renderPlan(); }
  else if (a === 'open') { setPlan(false); openEx(b.dataset.id); }
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
      : `<span class="chip">${esc(itemLabel(it))}</span>`).join('')}</div><button class="btn" type="button" data-act="plan">${t('openPlan')}</button>`;
  el.innerHTML = `<h3>${t('wToday')} · ${t('days')[d]}</h3>${body}`;
}
$('#wToday').addEventListener('click', e => {
  if (e.target.closest('[data-act="plan"]')) return setPlan(true);
  const o = e.target.closest('[data-open]'); if (o) openEx(o.dataset.open);
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
      if (iv.round >= c.rounds) { iv.phase = 'done'; iv.running = false; iv.left = 0; clearInterval(iv.id); beep(988, .2); setTimeout(() => beep(1175, .3), 250); addMinutes(dkey(new Date()), Math.max(1, Math.round(c.work * c.rounds / 60))); }
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
  fg.style.strokeDashoffset = iv.phase === 'idle' ? 0 : iv.phase === 'done' ? 326.7 : String(326.7 * (1 - iv.left / iv.total));
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

/* ================= آب (قطره‌ها یکی‌یکی پر می‌شوند) ================= */
const dayKey = () => new Date().toDateString();
let water = store.get('ef_water', { d: dayKey(), n: 0 });
if (water.d !== dayKey()) water = { d: dayKey(), n: 0 };
const DROP = 'M12 3s6 6.2 6 10.5A6 6 0 0 1 6 13.5C6 9.2 12 3 12 3Z';
function waterBuild() {
  $('#drops').innerHTML = Array.from({ length: 8 }, (_, i) => `
    <button type="button" class="drop" data-i="${i}" aria-pressed="false" aria-label="${dig(i + 1)}">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs><clipPath id="dc${i}"><path d="${DROP}"/></clipPath></defs>
        <g clip-path="url(#dc${i})"><g class="lvl"><path class="wave" d="M-24 4q6-4 12 0t12 0t12 0t12 0t12 0t12 0V30H-24Z"/></g></g>
        <path class="outline" d="${DROP}"/>
      </svg>
    </button>`).join('');
}
function waterText() {
  const done = water.n >= 8;
  $('#waterTxt').textContent = done ? t('waterDone') : `${dig(water.n)} / ${dig(8)} ${t('glasses')} · ${t('waterTap')}`;
}
function waterApply(oldN) {
  $$('#drops .drop').forEach((el, i) => {
    const on = i < water.n; let delay = 0;
    if (on && i >= oldN) delay = (i - oldN) * 170;
    else if (!on && i < oldN) delay = (oldN - 1 - i) * 110;
    el.style.setProperty('--d', delay + 'ms');
    el.classList.toggle('on', on); el.setAttribute('aria-pressed', String(on));
    if (on && i >= oldN) { el.classList.remove('pop'); setTimeout(() => { el.classList.add('pop'); setTimeout(() => el.classList.remove('pop'), 600); }, delay + 750); }
  });
  waterText();
}
$('#drops').addEventListener('click', e => {
  const b = e.target.closest('.drop'); if (!b) return;
  const i = +b.dataset.i, old = water.n;
  water.n = (water.n === i + 1) ? i : i + 1;
  store.set('ef_water', water); waterApply(old);
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


/* ================= نوار صفحه‌ها ================= */
function setTab(name) {
  $$('.tab').forEach(a => { if (a.dataset.tab === name) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  requestAnimationFrame(moveInd);
}
function moveInd() {
  const a = $('.tab[aria-current="page"]'), ind = $('#tabInd'); if (!a) return;
  ind.style.width = a.offsetWidth + 'px'; ind.style.transform = `translateX(${a.offsetLeft}px)`;
}
window.addEventListener('resize', moveInd);
window.addEventListener('load', moveInd);

/* ================= داده و تحلیل ================= */
let log = store.get('ef_log', {});
const pad = n => String(n).padStart(2, '0');
const dkey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const weekStartDay = () => lang === 'fa' ? 6 : 1;
function weekDays(off = 0) {
  const n = new Date(), s = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  s.setDate(s.getDate() - ((s.getDay() - weekStartDay() + 7) % 7) + off * 7);
  return Array.from({ length: 7 }, (_, i) => { const d = new Date(s); d.setDate(s.getDate() + i); return d; });
}
const minsOn = d => log[dkey(d)] || 0;
const todayIdx = () => (new Date().getDay() - weekStartDay() + 7) % 7;
const sum = a => a.reduce((x, y) => x + y, 0);
function fmtMin(m) {
  m = Math.round(m);
  if (m < 60) return `${dig(m)} ${t('min')}`;
  const h = Math.floor(m / 60), r = m % 60;
  return lang === 'fa' ? `${dig(h)} ساعت` + (r ? ` و ${dig(r)} دقیقه` : '') : `${h}h` + (r ? ` ${r}m` : '');
}
function addMinutes(key, n) {
  log[key] = clamp((log[key] || 0) + n, 0, 1440); store.set('ef_log', log);
  renderData(true); toast(`${fmtMin(n)} ${t('logAdded')}`);
}
function renderChart(animate) {
  const cur = weekDays(0), prev = weekDays(-1), ti = todayIdx();
  const v = cur.map(minsOn), p = prev.map(minsOn);
  const max = Math.max(60, Math.ceil(Math.max(...v, ...p) / 30) * 30);
  const total = sum(v), act = v.filter(x => x > 0).length;
  const grid = [1, .75, .5, .25].map(f => `<div class="gl" style="top:${(1 - f) * 100}%"><span>${dig(Math.round(max * f))}</span></div>`).join('');
  const cols = cur.map((d, i) => `<div class="col"><div class="bar prev" style="--h:${p[i] / max};--i:${i}"></div><div class="bar cur" style="--h:${v[i] / max};--i:${i}"></div></div>`).join('');
  const labels = cur.map((d, i) => `<div class="${i === ti ? 'today' : ''}"><b>${v[i] ? dig(v[i]) : '–'}</b><span>${t('dshort')[d.getDay()]}</span></div>`).join('');
  const el = $('#wChart');
  el.innerHTML = `
    <h3>${t('chartTitle')} <span class="muted" style="font-weight:400">(${t('min')})</span></h3>
    <div class="chart"><div class="chart-area">${grid}<div class="cols">${cols}</div></div><div class="labels">${labels}</div></div>
    <div class="chart-legend"><span><i></i>${t('thisWeek')}</span><span><i class="p"></i>${t('lastWeek')}</span></div>
    <div class="stats">
      <div class="stat"><small>${t('total')}</small><b>${fmtMin(total)}</b></div>
      <div class="stat"><small>${t('avg')}</small><b>${fmtMin(total / 7)}</b></div>
      <div class="stat"><small>${t('active')}</small><b>${dig(act)} / ${dig(7)}</b></div>
      <div class="stat"><small>${t('lastTotal')}</small><b>${fmtMin(sum(p))}</b></div>
    </div>`;
  const chart = $('.chart', el);
  if (animate) requestAnimationFrame(() => requestAnimationFrame(() => chart.classList.add('in')));
  else chart.classList.add('in');
}
const TIP_ICON = {
  up: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  down: '<path d="M3 7l6 6 4-4 8 8"/><path d="M15 17h6v-6"/>',
  flat: '<path d="M4 9h16M4 15h16"/>'
};
function renderTip() {
  const ti = todayIdx(), cur = weekDays(0).map(minsOn), prev = weekDays(-1).map(minsOn);
  const a = sum(cur.slice(0, ti + 1)), b = sum(prev.slice(0, ti + 1));
  let kind = 'flat', key = 'tipNone', head = 'tipNoneH', pct = 0;
  if (a === 0 && b === 0) { /* none */ }
  else if (b === 0) { kind = 'up'; key = 'tipStart'; head = 'tipUpH'; }
  else if (a === 0) { kind = 'down'; key = 'tipZero'; head = 'tipDownH'; }
  else {
    const r = (a - b) / b; pct = Math.round(Math.abs(r) * 100);
    if (r >= .1) { kind = 'up'; key = 'tipUp'; head = 'tipUpH'; }
    else if (r <= -.1) { kind = 'down'; key = 'tipDown'; head = 'tipDownH'; }
    else { key = 'tipFlat'; head = 'tipFlatH'; }
  }
  const text = t(key).replace('{p}', dig(pct)).replace('{a}', fmtMin(a)).replace('{b}', fmtMin(b));
  $('#wTip').innerHTML = `<h3>${t('tipTitle')}</h3>
    <div class="tip ${kind}"><div class="tip-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${TIP_ICON[kind]}</svg></div>
    <div class="pct">${t(head)}</div><p class="muted">${esc(text)}</p></div>`;
}
function renderLogControls() {
  const sel = $('#logDay'), keep = sel.value, ti = todayIdx();
  sel.innerHTML = weekDays(0).map((d, i) => `<option value="${dkey(d)}">${t('days')[d.getDay()]} · ${dig(d.getDate())}${i === ti ? ' (' + t('today') + ')' : ''}</option>`).join('');
  sel.value = [...sel.options].some(o => o.value === keep) ? keep : dkey(new Date());
  $$('#logQuick [data-add]').forEach(b => b.textContent = `+${dig(b.dataset.add)} ${t('min')}`);
}
function renderData(animate) { renderChart(animate); renderTip(); renderLogControls(); }
$('#logQuick').addEventListener('click', e => { const b = e.target.closest('[data-add]'); if (b) addMinutes($('#logDay').value, +b.dataset.add); });
$('#logAdd').addEventListener('click', () => {
  const n = parseInt($('#logMin').value); if (!n || n < 1) return $('#logMin').focus();
  addMinutes($('#logDay').value, clamp(n, 1, 600)); $('#logMin').value = '';
});
$('#logMin').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); $('#logAdd').click(); } });
$('#logClear').addEventListener('click', () => { delete log[$('#logDay').value]; store.set('ef_log', log); renderData(true); });

/* ================= شروع ================= */
applyTheme(false);
waterBuild();
applyLang();
requestAnimationFrame(() => requestAnimationFrame(() => waterApply(0)));
})();
