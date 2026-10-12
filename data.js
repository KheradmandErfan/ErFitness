/*
  پایگاه داده حرکت‌ها / Exercise database

  برای افزودن حرکت جدید یک آبجکت مثل نمونه‌های پایین اضافه کنید.
  - video : شناسه ۱۱ کاراکتری ویدیوی یوتیوب (مثلاً "dQw4w9WgXcQ"). اگر خالی باشد دکمه جستجو در یوتیوب نمایش داده می‌شود.
  - source: اگر متن را از منبعی با اجازه صاحب اثر آورده‌اید، { name: "نام منبع", url: "https://..." } بگذارید تا زیر مقاله نمایش داده شود.
  - level : 1 مبتدی، 2 متوسط، 3 پیشرفته
*/
window.EXERCISES = [
  {
    id: "push-up",
    name: { fa: "شنا سوئدی", en: "Push-up" },
    alias: ["شنا", "push up", "pushup"],
    muscle: { fa: "سینه، سه‌سر بازو، شانه", en: "Chest, triceps, shoulders" },
    level: 1,
    desc: {
      fa: "شنا سوئدی با وزن بدن، سینه، سه‌سر و شانه را تقویت می‌کند و عضلات مرکزی بدن را هم درگیر نگه می‌دارد.",
      en: "The push-up builds the chest, triceps and shoulders using only your body weight, while keeping your core engaged."
    },
    steps: {
      fa: ["دست‌ها را کمی بازتر از عرض شانه روی زمین بگذارید و بدن را در یک خط راست نگه دارید.", "با خم کردن آرنج‌ها، سینه را تا نزدیک زمین پایین بیاورید.", "با فشار دادن زمین به حالت اول برگردید.", "هنگام پایین رفتن دم و هنگام بالا آمدن بازدم انجام دهید."],
      en: ["Place your hands slightly wider than your shoulders and keep your body in one straight line.", "Bend your elbows and lower your chest close to the floor.", "Press the floor away to return to the start.", "Inhale on the way down, exhale on the way up."]
    },
    tips: {
      fa: ["کمر نباید گود شود؛ شکم را سفت نگه دارید.", "اگر سخت است از حالت زانو یا دست‌ها روی سطح بلندتر شروع کنید."],
      en: ["Don't let your lower back sag; brace your abs.", "If it's too hard, start on your knees or with hands on a raised surface."]
    },
    video: "",
    source: null
  },
  {
    id: "squat",
    name: { fa: "اسکات", en: "Squat" },
    alias: ["اسکوات", "squats"],
    muscle: { fa: "چهارسر ران، باسن", en: "Quads, glutes" },
    level: 1,
    desc: {
      fa: "اسکات پایه‌ی تمرین پا است. باسن و جلوران را قوی می‌کند و تحرک مفصل ران و مچ پا را بهتر می‌کند.",
      en: "The squat is the foundation of leg training. It strengthens glutes and quads and improves hip and ankle mobility."
    },
    steps: {
      fa: ["پاها را به عرض شانه باز کنید و نوک پا را کمی به بیرون بچرخانید.", "باسن را به عقب و پایین ببرید، انگار می‌خواهید روی صندلی بنشینید.", "تا جایی که کمر صاف می‌ماند پایین بروید.", "با فشار دادن پاشنه‌ها به زمین بایستید."],
      en: ["Stand with feet shoulder-width apart, toes turned out slightly.", "Push your hips back and down, as if sitting into a chair.", "Go as low as you can while keeping your back straight.", "Drive through your heels to stand up."]
    },
    tips: {
      fa: ["زانوها در راستای پنجه پا بمانند و به داخل نیفتند.", "وزن را روی پاشنه و وسط کف پا نگه دارید."],
      en: ["Keep your knees tracking over your toes, not caving in.", "Keep your weight on your heels and mid-foot."]
    },
    video: "",
    source: null
  },
  {
    id: "plank",
    name: { fa: "پلانک", en: "Plank" },
    alias: ["plank", "تخته"],
    muscle: { fa: "شکم و عضلات مرکزی", en: "Abs and core" },
    level: 1,
    desc: {
      fa: "پلانک یک حرکت ایستا است که ثبات تنه را بالا می‌برد و شکم، کمر و شانه‌ها را همزمان درگیر می‌کند.",
      en: "The plank is a static hold that builds trunk stability, working your abs, back and shoulders together."
    },
    steps: {
      fa: ["آرنج‌ها را زیر شانه‌ها روی زمین بگذارید.", "پنجه پاها را تکیه‌گاه کنید و بدن را از سر تا پاشنه صاف نگه دارید.", "شکم و باسن را سفت کنید و نگاه را به زمین بدوزید.", "به تنفس عادی ادامه دهید و زمان مشخصی نگه دارید."],
      en: ["Place your elbows on the floor directly under your shoulders.", "Rest on your toes and keep your body straight from head to heels.", "Tighten your abs and glutes and look at the floor.", "Keep breathing normally and hold for the set time."]
    },
    tips: {
      fa: ["باسن نباید بالا یا پایین بیفتد.", "با ۲۰ تا ۳۰ ثانیه شروع کنید و کم‌کم زیادش کنید."],
      en: ["Don't let your hips rise or drop.", "Start with 20 to 30 seconds and build up gradually."]
    },
    video: "",
    source: null
  },
  {
    id: "lunge",
    name: { fa: "لانج", en: "Lunge" },
    alias: ["lunges", "لانژ"],
    muscle: { fa: "چهارسر ران، همسترینگ، باسن", en: "Quads, hamstrings, glutes" },
    level: 1,
    desc: {
      fa: "لانج یک حرکت تک‌پا است که تعادل و قدرت پا را تقویت می‌کند و تفاوت قدرت دو پا را کم می‌کند.",
      en: "The lunge is a single-leg movement that builds balance and leg strength and evens out differences between sides."
    },
    steps: {
      fa: ["صاف بایستید و یک قدم بلند به جلو بردارید.", "هر دو زانو را خم کنید تا زانوی عقب نزدیک زمین شود.", "با فشار پای جلو به حالت ایستاده برگردید.", "پاها را عوض کنید و تکرار کنید."],
      en: ["Stand tall and take a long step forward.", "Bend both knees until the back knee nearly touches the floor.", "Push through the front foot to return to standing.", "Switch legs and repeat."]
    },
    tips: {
      fa: ["تنه را عمودی نگه دارید.", "زانوی جلو از پنجه پا جلوتر نرود."],
      en: ["Keep your torso upright.", "Don't let the front knee travel past your toes."]
    },
    video: "",
    source: null
  },
  {
    id: "burpee",
    name: { fa: "برپی", en: "Burpee" },
    alias: ["burpees", "بورپی"],
    muscle: { fa: "تمام بدن، قلب و عروق", en: "Full body, cardio" },
    level: 3,
    desc: {
      fa: "برپی ترکیبی از اسکات، شنا و پرش است. ضربان قلب را سریع بالا می‌برد و برای تمرین‌های اینتروال عالی است.",
      en: "The burpee combines a squat, push-up and jump. It raises your heart rate fast and suits interval training."
    },
    steps: {
      fa: ["بایستید و بنشینید تا دست‌ها به زمین برسند.", "پاها را به عقب بپرانید تا در حالت شنا قرار بگیرید.", "یک شنا انجام دهید (اختیاری) و پاها را به دست‌ها نزدیک کنید.", "با یک پرش رو به بالا و دست‌ها بالای سر تمام کنید."],
      en: ["Stand, then squat down and place your hands on the floor.", "Jump your feet back into a push-up position.", "Do one push-up (optional), then jump your feet back toward your hands.", "Finish with an explosive jump, arms overhead."]
    },
    tips: {
      fa: ["اگر تازه‌کار هستید به‌جای پریدن، قدم بردارید.", "ریتم ثابت را به سرعت زیاد ترجیح دهید."],
      en: ["If you're new, step back instead of jumping.", "A steady rhythm beats a frantic pace."]
    },
    video: "",
    source: null
  },
  {
    id: "pull-up",
    name: { fa: "بارفیکس", en: "Pull-up" },
    alias: ["pull up", "pullup", "بارفیکس دست باز"],
    muscle: { fa: "پشت، دوسر بازو", en: "Back, biceps" },
    level: 3,
    desc: {
      fa: "بارفیکس یکی از بهترین حرکات برای قدرت کمر و بالاتنه است و با وزن بدن انجام می‌شود.",
      en: "The pull-up is one of the best bodyweight moves for back and upper-body strength."
    },
    steps: {
      fa: ["میله را کمی بازتر از عرض شانه بگیرید و آویزان شوید.", "کتف‌ها را پایین و عقب بکشید.", "آرنج‌ها را به سمت پایین بکشید تا چانه از میله بالاتر برود.", "آهسته به حالت اول برگردید."],
      en: ["Grip the bar slightly wider than your shoulders and hang.", "Pull your shoulder blades down and back.", "Drive your elbows down until your chin clears the bar.", "Lower yourself slowly to the start."]
    },
    tips: {
      fa: ["از تاب دادن بدن پرهیز کنید.", "برای شروع از باند کمکی یا بارفیکس منفی استفاده کنید."],
      en: ["Avoid swinging your body.", "Use a resistance band or slow negatives to build up."]
    },
    video: "",
    source: null
  },
  {
    id: "deadlift",
    name: { fa: "ددلیفت", en: "Deadlift" },
    alias: ["dead lift", "دد لیفت"],
    muscle: { fa: "همسترینگ، باسن، کمر", en: "Hamstrings, glutes, lower back" },
    level: 3,
    desc: {
      fa: "ددلیفت زنجیره پشتی بدن را قوی می‌کند. تکنیک درست در آن از وزن زیاد مهم‌تر است.",
      en: "The deadlift strengthens the whole back of the body. Good technique matters more than heavy weight."
    },
    steps: {
      fa: ["میله را روی وسط پا قرار دهید و به‌اندازه عرض شانه بایستید.", "با کمر صاف خم شوید و میله را بگیرید.", "با فشار پاها به زمین و باز کردن ران، میله را بالا ببرید.", "با کنترل و نزدیک بدن میله را پایین بیاورید."],
      en: ["Stand with the bar over mid-foot, feet hip-width apart.", "Hinge down with a flat back and grip the bar.", "Push the floor away and extend your hips to lift.", "Lower the bar under control, close to your body."]
    },
    tips: {
      fa: ["کمر هرگز گرد نشود.", "ابتدا با وزن سبک الگوی حرکتی را تمرین کنید."],
      en: ["Never round your lower back.", "Practice the movement pattern with light weight first."]
    },
    video: "",
    source: null
  },
  {
    id: "bench-press",
    name: { fa: "پرس سینه", en: "Bench press" },
    alias: ["بنچ پرس", "bench", "پرس سینه هالتر"],
    muscle: { fa: "سینه، سه‌سر بازو، جلو شانه", en: "Chest, triceps, front delts" },
    level: 2,
    desc: {
      fa: "پرس سینه حرکت اصلی برای قدرت و حجم سینه است و با هالتر یا دمبل انجام می‌شود.",
      en: "The bench press is the main lift for chest strength and size, done with a barbell or dumbbells."
    },
    steps: {
      fa: ["روی نیمکت دراز بکشید و کتف‌ها را جمع کنید.", "میله را کمی بازتر از عرض شانه بگیرید و از جاگذاری بردارید.", "میله را تا پایین سینه بیاورید.", "با قدرت میله را بالا برانید."],
      en: ["Lie on the bench and squeeze your shoulder blades together.", "Grip the bar slightly wider than shoulder width and unrack it.", "Lower the bar to your lower chest.", "Press it back up with power."]
    },
    tips: {
      fa: ["حتماً از یک همراه برای کمک استفاده کنید.", "پاها را محکم روی زمین بگذارید."],
      en: ["Always train with a spotter.", "Keep your feet planted firmly on the floor."]
    },
    video: "",
    source: null
  },
  {
    id: "bicep-curl",
    name: { fa: "جلو بازو", en: "Biceps curl" },
    alias: ["بای سپ", "curl", "جلو بازو دمبل", "bicep curl"],
    muscle: { fa: "دوسر بازو", en: "Biceps" },
    level: 1,
    desc: {
      fa: "جلو بازو با دمبل ساده‌ترین حرکت برای تقویت دوسر بازو است.",
      en: "The dumbbell curl is the simplest way to strengthen the biceps."
    },
    steps: {
      fa: ["دمبل‌ها را در دست بگیرید و آرنج‌ها را کنار بدن نگه دارید.", "دمبل‌ها را به سمت شانه بالا بیاورید.", "در بالا یک لحظه مکث کنید.", "آهسته پایین بیاورید."],
      en: ["Hold the dumbbells with your elbows pinned to your sides.", "Curl the weights up toward your shoulders.", "Pause briefly at the top.", "Lower them slowly."]
    },
    tips: {
      fa: ["بدن را تاب ندهید.", "مرحله پایین‌آوردن را آهسته انجام دهید."],
      en: ["Don't swing your body.", "Take your time on the way down."]
    },
    video: "",
    source: null
  },
  {
    id: "shoulder-press",
    name: { fa: "پرس سرشانه", en: "Shoulder press" },
    alias: ["شانه", "overhead press", "military press", "پرس شانه"],
    muscle: { fa: "شانه، سه‌سر بازو", en: "Shoulders, triceps" },
    level: 2,
    desc: {
      fa: "پرس سرشانه با دمبل یا هالتر، عضلات شانه را قوی و پهن می‌کند.",
      en: "The overhead press with dumbbells or a barbell builds strong, broad shoulders."
    },
    steps: {
      fa: ["دمبل‌ها را کنار شانه‌ها نگه دارید و شکم را سفت کنید.", "وزنه‌ها را بالای سر ببرید تا آرنج‌ها تقریباً صاف شوند.", "با کنترل به کنار شانه برگردانید."],
      en: ["Hold the dumbbells at shoulder height and brace your abs.", "Press them overhead until your arms are nearly straight.", "Lower them back to your shoulders under control."]
    },
    tips: {
      fa: ["کمر را بیش از حد به عقب خم نکنید.", "سر را کمی عقب ببرید تا وزنه از مسیر عبور کند."],
      en: ["Don't over-arch your lower back.", "Move your head slightly back so the weight can pass."]
    },
    video: "",
    source: null
  },
  {
    id: "crunch",
    name: { fa: "کرانچ شکم", en: "Crunch" },
    alias: ["دراز و نشست", "شکم", "crunches", "sit up"],
    muscle: { fa: "شکم", en: "Abs" },
    level: 1,
    desc: {
      fa: "کرانچ بخش بالایی عضلات شکم را هدف می‌گیرد و حرکتی کوتاه و کنترل‌شده است.",
      en: "The crunch targets the upper abs with a short, controlled movement."
    },
    steps: {
      fa: ["به پشت بخوابید و زانوها را خم کنید.", "دست‌ها را کنار سر بگذارید، نه پشت گردن.", "شانه‌ها را کمی از زمین بلند کنید و شکم را فشار دهید.", "آهسته برگردید."],
      en: ["Lie on your back with knees bent.", "Place your hands beside your head, not pulling on your neck.", "Lift your shoulders slightly off the floor and squeeze your abs.", "Lower back down slowly."]
    },
    tips: {
      fa: ["حرکت از شکم باشد نه گردن.", "تعداد کم با کیفیت بهتر از تعداد زیاد است."],
      en: ["Lead with your abs, not your neck.", "A few clean reps beat many sloppy ones."]
    },
    video: "",
    source: null
  },
  {
    id: "mountain-climber",
    name: { fa: "کوهنورد", en: "Mountain climber" },
    alias: ["mountain climbers", "کوه نورد"],
    muscle: { fa: "شکم، شانه، قلب و عروق", en: "Core, shoulders, cardio" },
    level: 2,
    desc: {
      fa: "کوهنورد یک حرکت هوازی است که شکم و شانه را هم درگیر می‌کند.",
      en: "The mountain climber is a cardio move that also works your core and shoulders."
    },
    steps: {
      fa: ["در حالت بالای شنا قرار بگیرید.", "یک زانو را به سمت سینه بکشید.", "سریع پاها را عوض کنید، مثل دویدن در جا روی زمین.", "کمر و باسن را صاف نگه دارید."],
      en: ["Start in a high plank position.", "Drive one knee toward your chest.", "Quickly switch legs, like running in place on the floor.", "Keep your back and hips level."]
    },
    tips: {
      fa: ["دست‌ها زیر شانه‌ها بمانند.", "سرعت را به تدریج بیشتر کنید."],
      en: ["Keep your hands under your shoulders.", "Build up your speed gradually."]
    },
    video: "",
    source: null
  },
  {
    id: "jumping-jack",
    name: { fa: "جامپینگ جک", en: "Jumping jack" },
    alias: ["jumping jacks", "پرش ستاره‌ای"],
    muscle: { fa: "تمام بدن، قلب و عروق", en: "Full body, cardio" },
    level: 1,
    desc: {
      fa: "جامپینگ جک یک گرم‌کردن ساده و پرانرژی است که ضربان قلب را بالا می‌برد.",
      en: "Jumping jacks are a simple, energetic warm-up that gets your heart rate up."
    },
    steps: {
      fa: ["صاف بایستید و دست‌ها کنار بدن باشند.", "همزمان پاها را باز کنید و دست‌ها را بالای سر ببرید.", "با یک پرش به حالت اول برگردید.", "ریتم را ثابت نگه دارید."],
      en: ["Stand tall with your arms at your sides.", "Jump your feet apart while raising your arms overhead.", "Jump back to the start.", "Keep a steady rhythm."]
    },
    tips: {
      fa: ["روی پنجه پا فرود بیایید.", "اگر زانو مشکل دارید، حالت بدون پرش را انجام دهید."],
      en: ["Land softly on the balls of your feet.", "If your knees are sensitive, do the step-out version."]
    },
    video: "",
    source: null
  },
  {
    id: "glute-bridge",
    name: { fa: "پل باسن", en: "Glute bridge" },
    alias: ["hip bridge", "بریج", "پل"],
    muscle: { fa: "باسن، همسترینگ", en: "Glutes, hamstrings" },
    level: 1,
    desc: {
      fa: "پل باسن روشی ملایم برای فعال کردن و تقویت عضلات باسن و پشت ران است.",
      en: "The glute bridge is a gentle way to activate and strengthen your glutes and hamstrings."
    },
    steps: {
      fa: ["به پشت بخوابید و زانوها را خم کنید، کف پاها روی زمین.", "پاشنه‌ها را فشار دهید و باسن را بالا ببرید.", "در بالا باسن را فشار دهید و مکث کنید.", "آهسته پایین بیایید."],
      en: ["Lie on your back, knees bent, feet flat.", "Press through your heels and lift your hips.", "Squeeze your glutes at the top and pause.", "Lower back down slowly."]
    },
    tips: {
      fa: ["کمر را بیش از حد قوس ندهید.", "بدن از شانه تا زانو یک خط باشد."],
      en: ["Don't over-arch your lower back.", "Aim for a straight line from shoulders to knees."]
    },
    video: "",
    source: null
  },
  {
    id: "dip",
    name: { fa: "دیپ پشت بازو", en: "Triceps dip" },
    alias: ["دیپ", "dips", "پشت بازو"],
    muscle: { fa: "سه‌سر بازو، سینه", en: "Triceps, chest" },
    level: 2,
    desc: {
      fa: "دیپ با صندلی یا نیمکت، سه‌سر بازو را بدون نیاز به وسیله خاص تقویت می‌کند.",
      en: "Bench dips strengthen the triceps without any special equipment."
    },
    steps: {
      fa: ["دست‌ها را روی لبه صندلی بگذارید و پاها را جلو ببرید.", "باسن را از صندلی جدا کنید.", "آرنج‌ها را به عقب خم کنید و بدن را پایین بیاورید.", "با فشار دست‌ها بالا بیایید."],
      en: ["Place your hands on the edge of a chair with legs out in front.", "Slide your hips off the seat.", "Bend your elbows back to lower your body.", "Press up through your hands."]
    },
    tips: {
      fa: ["آرنج‌ها به سمت عقب باشند نه بیرون.", "شانه‌ها را از گوش‌ها دور نگه دارید."],
      en: ["Keep elbows pointing back, not flaring out.", "Keep your shoulders away from your ears."]
    },
    video: "",
    source: null
  }
];
