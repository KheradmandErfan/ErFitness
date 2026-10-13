/* تبدیل داده‌های فشرده ex1..ex4 به آبجکت حرکت + برچسب‌ها */
window.EXERCISES = (window.EXDATA || []).map(r => ({
  id: r[0],
  name: { fa: r[1], en: r[2] },
  equip: r[3],
  primary: r[4] ? r[4].split(',') : [],
  secondary: r[5] ? r[5].split(',') : [],
  level: r[6],
  desc: { fa: r[7], en: r[8] },
  steps: { fa: r[9].split('|'), en: r[10].split('|') },
  tips: { fa: r[11].split('|'), en: r[12].split('|') },
  alias: r[13] ? r[13].split(',') : []
}));

window.MUSCLES = {
  chest: { fa: 'سینه', en: 'Chest' },
  shoulders: { fa: 'شانه', en: 'Shoulders' },
  traps: { fa: 'ذوزنقه', en: 'Traps' },
  back: { fa: 'میان‌پشت', en: 'Mid back' },
  lats: { fa: 'پشت (لت)', en: 'Lats' },
  lowback: { fa: 'کمر', en: 'Lower back' },
  biceps: { fa: 'جلوبازو', en: 'Biceps' },
  triceps: { fa: 'پشت‌بازو', en: 'Triceps' },
  forearms: { fa: 'ساعد', en: 'Forearms' },
  abs: { fa: 'شکم', en: 'Abs' },
  obliques: { fa: 'پهلو', en: 'Obliques' },
  glutes: { fa: 'باسن', en: 'Glutes' },
  quads: { fa: 'جلوران', en: 'Quads' },
  hamstrings: { fa: 'پشت‌ران', en: 'Hamstrings' },
  calves: { fa: 'ساق', en: 'Calves' }
};

window.EQUIP = {
  bb: { fa: 'هالتر', en: 'Barbell' },
  db: { fa: 'دمبل', en: 'Dumbbell' },
  mc: { fa: 'دستگاه', en: 'Machine' },
  cb: { fa: 'کابل', en: 'Cable' },
  bw: { fa: 'وزن بدن', en: 'Bodyweight' },
  kb: { fa: 'کتل‌بل', en: 'Kettlebell' }
};

/* گروه‌های فیلتر کتابخانه */
window.GROUPS = [
  { id: 'chest', fa: 'سینه', en: 'Chest', m: ['chest'] },
  { id: 'back', fa: 'پشت', en: 'Back', m: ['back', 'lats', 'traps', 'lowback'] },
  { id: 'shoulders', fa: 'شانه', en: 'Shoulders', m: ['shoulders'] },
  { id: 'arms', fa: 'بازو', en: 'Arms', m: ['biceps', 'triceps', 'forearms'] },
  { id: 'legs', fa: 'پا و باسن', en: 'Legs & glutes', m: ['quads', 'hamstrings', 'glutes', 'calves'] },
  { id: 'core', fa: 'شکم', en: 'Core', m: ['abs', 'obliques'] }
];
