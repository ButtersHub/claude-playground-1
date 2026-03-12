// === Equipment Data ===
const equipment = [
    {
        name: 'מתח עליון (לט)',
        icon: '🏋️',
        category: 'machines',
        description: 'מכונת משיכה עליונה לחיזוק שרירי הגב, כולל אחיזות שונות לווריאציות'
    },
    {
        name: 'חתירה יושב',
        icon: '🔧',
        category: 'machines',
        description: 'מכונת חתירה לחיזוק שרירי הגב האמצעי והתחתון'
    },
    {
        name: 'לחיצת חזה במכונה',
        icon: '⚙️',
        category: 'machines',
        description: 'מכונת לחיצת חזה לפיתוח שרירי החזה הקדמיים'
    },
    {
        name: 'פרפר (Pec Deck)',
        icon: '🦋',
        category: 'machines',
        description: 'מכונת פרפר לבידוד ופיתוח שרירי החזה'
    },
    {
        name: 'לחיצת כתפיים במכונה',
        icon: '⚙️',
        category: 'machines',
        description: 'מכונת לחיצת כתפיים לפיתוח הדלתואיד'
    },
    {
        name: 'לחיצת רגליים (Leg Press)',
        icon: '🦵',
        category: 'machines',
        description: 'מכונת לחיצת רגליים לחיזוק הירכיים, הישבן והשוקיים'
    },
    {
        name: 'יישור רגליים (Leg Extension)',
        icon: '🦵',
        category: 'machines',
        description: 'מכונת יישור רגליים לבידוד שריר הארבע ראשי'
    },
    {
        name: 'כפיפת רגליים (Leg Curl)',
        icon: '🦵',
        category: 'machines',
        description: 'מכונת כפיפת רגליים לחיזוק שרירי הירך האחוריים'
    },
    {
        name: 'כפיפת מרפק בכבל (Bicep Curl)',
        icon: '💪',
        category: 'machines',
        description: 'עמדת כבל לכפיפות יד ותרגילי בייספס'
    },
    {
        name: 'דחיקה בכבל לטרייספס',
        icon: '💪',
        category: 'machines',
        description: 'עמדת כבל עליון לדחיקות טרייספס'
    },
    {
        name: 'קרוסאובר כבלים',
        icon: '🔗',
        category: 'machines',
        description: 'מערכת כבלים דו-צדדית לתרגילי חזה, כתפיים וגב'
    },
    {
        name: 'סמית\' מכונה',
        icon: '🏗️',
        category: 'machines',
        description: 'מכונת סמית\' למגוון תרגילים מודרכים - סקוואט, לחיצת חזה ועוד'
    },
    {
        name: 'דמבלים (2-30 ק"ג)',
        icon: '🏋️',
        category: 'free-weights',
        description: 'סט דמבלים מקצועי מ-2 עד 30 ק"ג, מתאים לכל סוגי האימונים'
    },
    {
        name: 'בר אולימפי + משקולות',
        icon: '🏋️',
        category: 'free-weights',
        description: 'בר אולימפי 20 ק"ג עם דיסקיות מ-1.25 עד 20 ק"ג'
    },
    {
        name: 'קטלבלים',
        icon: '🔔',
        category: 'free-weights',
        description: 'קטלבלים במשקלים שונים - 8, 12, 16, 20, 24 ק"ג'
    },
    {
        name: 'ספסל מתכוונן',
        icon: '🪑',
        category: 'free-weights',
        description: 'ספסל עם אפשרות כיוון זווית - שטוח, משופע ודחוס'
    },
    {
        name: 'מוט מקבילים (דיפים)',
        icon: '🤸',
        category: 'free-weights',
        description: 'מתקן דיפים ומקבילים לעבודה עם משקל הגוף'
    },
    {
        name: 'מתח (Pull-Up Bar)',
        icon: '🤸',
        category: 'free-weights',
        description: 'מתקן מתח עם אחיזות מגוונות - צרה, רחבה וניטרלית'
    },
    {
        name: 'הליכון',
        icon: '🏃',
        category: 'cardio',
        description: 'הליכונים מקצועיים עם מסך ותוכניות מוגדרות מראש'
    },
    {
        name: 'אופני ספינינג',
        icon: '🚴',
        category: 'cardio',
        description: 'אופני ספינינג עם כוונון התנגדות ומסך דיגיטלי'
    },
    {
        name: 'אליפטיקל',
        icon: '🏃',
        category: 'cardio',
        description: 'מכשיר אליפטיקל לאימון קרדיו ללא עומס על המפרקים'
    },
    {
        name: 'מכונת חתירה (Rower)',
        icon: '🚣',
        category: 'cardio',
        description: 'מכונת חתירה לאימון קרדיו של כל הגוף'
    },
    {
        name: 'רצועות התנגדות',
        icon: '🎗️',
        category: 'accessories',
        description: 'סט רצועות התנגדות ברמות שונות - קל, בינוני, כבד'
    },
    {
        name: 'כדור פיטנס (פיזיובול)',
        icon: '⚽',
        category: 'accessories',
        description: 'כדורי פיטנס בגדלים שונים לתרגילי ליבה ויציבות'
    },
    {
        name: 'רולר קצף',
        icon: '🧊',
        category: 'accessories',
        description: 'רולר קצף לשחרור שרירים ומתיחות'
    },
    {
        name: 'מזרן אימון',
        icon: '🧘',
        category: 'accessories',
        description: 'מזרני אימון לתרגילי רצפה, בטן ומתיחות'
    },
    {
        name: 'TRX',
        icon: '🪢',
        category: 'accessories',
        description: 'מערכת רצועות TRX לאימון פונקציונלי עם משקל הגוף'
    },
    {
        name: 'בוסו (BOSU)',
        icon: '🔵',
        category: 'accessories',
        description: 'כדור חצי לאימוני שיווי משקל ויציבות'
    }
];

// === Workout Programs ===
const workouts = [
    {
        name: 'פלג גוף עליון - כוח',
        id: 'upper',
        icon: '💪',
        category: 'upper',
        duration: '45 דק\'',
        level: 'בינוני',
        exercises: [
            { name: 'לחיצת חזה במכונה', sets: 4, reps: '8-10', rest: '90 שניות' },
            { name: 'מתח עליון אחיזה רחבה', sets: 4, reps: '8-12', rest: '90 שניות' },
            { name: 'לחיצת כתפיים בדמבלים', sets: 3, reps: '10-12', rest: '60 שניות' },
            { name: 'חתירה יושב במכונה', sets: 3, reps: '10-12', rest: '60 שניות' },
            { name: 'פרפר (Pec Deck)', sets: 3, reps: '12-15', rest: '60 שניות' },
            { name: 'כפיפת מרפק בדמבל', sets: 3, reps: '10-12', rest: '45 שניות' },
            { name: 'דחיקת כבל לטרייספס', sets: 3, reps: '10-12', rest: '45 שניות' }
        ]
    },
    {
        name: 'פלג גוף עליון - סיבולת',
        id: 'upper',
        icon: '🔥',
        category: 'upper',
        duration: '40 דק\'',
        level: 'מתחילים',
        exercises: [
            { name: 'שכיבות סמיכה', sets: 3, reps: '12-15', rest: '45 שניות' },
            { name: 'מתח עליון בכבל', sets: 3, reps: '12-15', rest: '45 שניות' },
            { name: 'הרמה צידית בדמבלים', sets: 3, reps: '15', rest: '30 שניות' },
            { name: 'קרוסאובר כבלים - חזה', sets: 3, reps: '12-15', rest: '45 שניות' },
            { name: 'כפיפת מרפק ברצועת התנגדות', sets: 3, reps: '15', rest: '30 שניות' },
            { name: 'דיפים על ספסל', sets: 3, reps: '12-15', rest: '30 שניות' }
        ]
    },
    {
        name: 'פלג גוף תחתון - כוח',
        id: 'lower',
        icon: '🦵',
        category: 'lower',
        duration: '50 דק\'',
        level: 'בינוני',
        exercises: [
            { name: 'סקוואט בסמית\'', sets: 4, reps: '8-10', rest: '2 דקות' },
            { name: 'לחיצת רגליים במכונה', sets: 4, reps: '10-12', rest: '90 שניות' },
            { name: 'יישור רגליים', sets: 3, reps: '12-15', rest: '60 שניות' },
            { name: 'כפיפת רגליים', sets: 3, reps: '12-15', rest: '60 שניות' },
            { name: 'מכרעות עם דמבלים', sets: 3, reps: '10 לכל רגל', rest: '60 שניות' },
            { name: 'הרמת עקבים עומד', sets: 4, reps: '15-20', rest: '45 שניות' }
        ]
    },
    {
        name: 'פלג גוף תחתון - פונקציונלי',
        id: 'lower',
        icon: '⚡',
        category: 'lower',
        duration: '40 דק\'',
        level: 'מתחילים',
        exercises: [
            { name: 'גובלט סקוואט עם קטלבל', sets: 3, reps: '12', rest: '60 שניות' },
            { name: 'דדליפט רומני בדמבלים', sets: 3, reps: '10-12', rest: '60 שניות' },
            { name: 'סטפ-אפ על ספסל', sets: 3, reps: '10 לכל רגל', rest: '45 שניות' },
            { name: 'סקוואט בולגרי (TRX)', sets: 3, reps: '10 לכל רגל', rest: '60 שניות' },
            { name: 'סווינג קטלבל', sets: 3, reps: '15', rest: '45 שניות' },
            { name: 'גשר ישבני', sets: 3, reps: '15', rest: '30 שניות' }
        ]
    },
    {
        name: 'אימון גוף מלא - A',
        id: 'full',
        icon: '🏋️',
        category: 'full',
        duration: '55 דק\'',
        level: 'בינוני',
        exercises: [
            { name: 'סקוואט בסמית\'', sets: 4, reps: '8-10', rest: '2 דקות' },
            { name: 'לחיצת חזה במכונה', sets: 3, reps: '10-12', rest: '90 שניות' },
            { name: 'מתח עליון אחיזה רחבה', sets: 3, reps: '8-12', rest: '90 שניות' },
            { name: 'לחיצת כתפיים בדמבלים', sets: 3, reps: '10-12', rest: '60 שניות' },
            { name: 'יישור רגליים', sets: 3, reps: '12-15', rest: '60 שניות' },
            { name: 'כפיפת מרפק + דחיקת טרייספס (סופרסט)', sets: 3, reps: '10-12', rest: '60 שניות' },
            { name: 'פלאנק', sets: 3, reps: '45 שניות', rest: '30 שניות' }
        ]
    },
    {
        name: 'אימון גוף מלא - B',
        id: 'full',
        icon: '🔥',
        category: 'full',
        duration: '50 דק\'',
        level: 'בינוני',
        exercises: [
            { name: 'דדליפט רומני בבר', sets: 4, reps: '8-10', rest: '2 דקות' },
            { name: 'חתירה יושב במכונה', sets: 3, reps: '10-12', rest: '90 שניות' },
            { name: 'לחיצת חזה משופעת בדמבלים', sets: 3, reps: '10-12', rest: '90 שניות' },
            { name: 'לחיצת רגליים במכונה', sets: 3, reps: '12-15', rest: '60 שניות' },
            { name: 'הרמה צידית בדמבלים', sets: 3, reps: '12-15', rest: '45 שניות' },
            { name: 'קרוסאובר כבלים', sets: 3, reps: '12-15', rest: '45 שניות' },
            { name: 'כרסניות על כדור פיטנס', sets: 3, reps: '15-20', rest: '30 שניות' }
        ]
    },
    {
        name: 'ליבה ובטן',
        id: 'core',
        icon: '🧘',
        category: 'core',
        duration: '25 דק\'',
        level: 'כל הרמות',
        exercises: [
            { name: 'פלאנק', sets: 3, reps: '45-60 שניות', rest: '30 שניות' },
            { name: 'פלאנק צידי', sets: 3, reps: '30 שניות לצד', rest: '30 שניות' },
            { name: 'כרסניות על מזרן', sets: 3, reps: '20', rest: '30 שניות' },
            { name: 'הרמת רגליים שכיבה', sets: 3, reps: '15', rest: '30 שניות' },
            { name: 'רוסיאן טוויסט עם משקל', sets: 3, reps: '20 (10 לצד)', rest: '30 שניות' },
            { name: 'באג מת (Dead Bug)', sets: 3, reps: '10 לצד', rest: '30 שניות' },
            { name: 'גלגול בגלגל בטן / כדור פיטנס', sets: 3, reps: '10-12', rest: '45 שניות' }
        ]
    },
    {
        name: 'אימון HIIT מעגלי',
        id: 'full',
        icon: '⚡',
        category: 'full',
        duration: '30 דק\'',
        level: 'מתקדמים',
        exercises: [
            { name: 'סווינג קטלבל', sets: 4, reps: '30 שניות עבודה', rest: '15 שניות' },
            { name: 'שכיבות סמיכה', sets: 4, reps: '30 שניות עבודה', rest: '15 שניות' },
            { name: 'סקוואט קפיצה', sets: 4, reps: '30 שניות עבודה', rest: '15 שניות' },
            { name: 'חתירה ב-TRX', sets: 4, reps: '30 שניות עבודה', rest: '15 שניות' },
            { name: 'מכרעות מתחלפות', sets: 4, reps: '30 שניות עבודה', rest: '15 שניות' },
            { name: 'פלאנק דינמי', sets: 4, reps: '30 שניות עבודה', rest: '60 שניות בין סבבים' }
        ]
    }
];

// === App Logic ===
document.addEventListener('DOMContentLoaded', () => {
    initStats();
    renderEquipment();
    renderWorkouts();
    initNavigation();
    initFilters();
    initTimer();
    initQuickStart();
    initModal();
});

function initStats() {
    document.getElementById('equipment-count').textContent = equipment.length;
    document.getElementById('workout-count').textContent = workouts.length;
    const totalExercises = new Set(workouts.flatMap(w => w.exercises.map(e => e.name))).size;
    document.getElementById('exercise-count').textContent = totalExercises;
}

function renderEquipment(filter = 'all') {
    const grid = document.getElementById('equipment-grid');
    const filtered = filter === 'all' ? equipment : equipment.filter(e => e.category === filter);
    grid.innerHTML = filtered.map(item => `
        <div class="equipment-card">
            <div class="equipment-icon">${item.icon}</div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span class="equipment-tag">${getCategoryLabel(item.category)}</span>
        </div>
    `).join('');
}

function getCategoryLabel(cat) {
    const labels = {
        'free-weights': 'משקולות חופשיות',
        'machines': 'מכונות',
        'cardio': 'קרדיו',
        'accessories': 'אביזרים'
    };
    return labels[cat] || cat;
}

function renderWorkouts(filter = 'all') {
    const list = document.getElementById('workouts-list');
    const filtered = filter === 'all' ? workouts : workouts.filter(w => w.category === filter);
    list.innerHTML = filtered.map((workout, index) => `
        <div class="workout-card" data-index="${index}">
            <div class="workout-header" onclick="toggleWorkout(this)">
                <div class="workout-header-right">
                    <span class="workout-icon">${workout.icon}</span>
                    <div class="workout-info">
                        <h3>${workout.name}</h3>
                        <p>${workout.exercises.length} תרגילים • ${workout.duration}</p>
                    </div>
                </div>
                <div class="workout-meta">
                    <span class="workout-badge">${workout.level}</span>
                    <span class="workout-toggle">▼</span>
                </div>
            </div>
            <div class="workout-exercises">
                ${workout.exercises.map(ex => `
                    <div class="exercise-row">
                        <span class="exercise-name">${ex.name}</span>
                        <div class="exercise-details">
                            <span class="exercise-sets">${ex.sets}×${ex.reps}</span>
                            <span class="exercise-rest">מנוחה: ${ex.rest}</span>
                        </div>
                    </div>
                `).join('')}
                <button class="start-workout-btn" onclick="startWorkout(${workouts.indexOf(workout)})">התחל אימון</button>
            </div>
        </div>
    `).join('');
}

function toggleWorkout(header) {
    const card = header.closest('.workout-card');
    card.classList.toggle('open');
}

function initNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(btn.dataset.section).classList.add('active');
        });
    });
}

function initFilters() {
    document.querySelectorAll('.filter-bar').forEach(bar => {
        bar.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const section = btn.closest('.section');
                if (section.id === 'equipment') {
                    renderEquipment(btn.dataset.filter);
                } else if (section.id === 'workouts') {
                    renderWorkouts(btn.dataset.filter);
                }
            });
        });
    });
}

function initQuickStart() {
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Navigate to workouts section with filter
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('[data-section="workouts"]').classList.add('active');
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById('workouts').classList.add('active');

            // Apply filter
            const filter = btn.dataset.workout;
            const filterBar = document.querySelector('#workouts .filter-bar');
            filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            const targetFilter = filterBar.querySelector(`[data-filter="${filter}"]`);
            if (targetFilter) {
                targetFilter.classList.add('active');
                renderWorkouts(filter);
            }
        });
    });
}

// === Timer ===
let timerInterval = null;
let timerSeconds = 90;
let timerRunning = false;

function initTimer() {
    document.querySelectorAll('.timer-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            if (timerRunning) return;
            document.querySelectorAll('.timer-preset').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            timerSeconds = parseInt(btn.dataset.time);
            updateTimerDisplay();
        });
    });

    document.getElementById('timer-start').addEventListener('click', toggleTimer);
    document.getElementById('timer-reset').addEventListener('click', resetTimer);
}

function toggleTimer() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById('timer-start').textContent = 'התחל';
        document.getElementById('timer-start').classList.remove('running');
        document.getElementById('timer-display').classList.remove('running');
    } else {
        if (timerSeconds <= 0) return;
        timerRunning = true;
        document.getElementById('timer-start').textContent = 'עצור';
        document.getElementById('timer-start').classList.add('running');
        document.getElementById('timer-display').classList.add('running');
        document.getElementById('timer-display').classList.remove('done');
        timerInterval = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();
            if (timerSeconds <= 0) {
                clearInterval(timerInterval);
                timerRunning = false;
                document.getElementById('timer-start').textContent = 'התחל';
                document.getElementById('timer-start').classList.remove('running');
                document.getElementById('timer-display').classList.remove('running');
                document.getElementById('timer-display').classList.add('done');
                timerDone();
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    const activePreset = document.querySelector('.timer-preset.active');
    timerSeconds = activePreset ? parseInt(activePreset.dataset.time) : 90;
    updateTimerDisplay();
    document.getElementById('timer-start').textContent = 'התחל';
    document.getElementById('timer-start').classList.remove('running');
    document.getElementById('timer-display').classList.remove('running', 'done');
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    document.getElementById('timer-display').textContent =
        `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function timerDone() {
    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
    }
}

// === Active Workout Modal ===
function initModal() {
    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('workout-modal').classList.remove('open');
    });

    document.getElementById('workout-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            document.getElementById('workout-modal').classList.remove('open');
        }
    });
}

function startWorkout(index) {
    const workout = workouts[index];
    const modal = document.getElementById('workout-modal');
    document.getElementById('modal-title').textContent = workout.name;

    const body = document.getElementById('modal-body');
    body.innerHTML = workout.exercises.map((ex, i) => `
        <div class="active-exercise">
            <h4>
                <span>${i + 1}. ${ex.name}</span>
                <span class="exercise-sets">${ex.sets}×${ex.reps}</span>
            </h4>
            <div class="set-tracker">
                ${Array.from({length: ex.sets}, (_, s) => `
                    <button class="set-btn" onclick="toggleSet(this)">${s + 1}</button>
                `).join('')}
            </div>
        </div>
    `).join('');

    modal.classList.add('open');
}

function toggleSet(btn) {
    btn.classList.toggle('done');
}
