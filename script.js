const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const garden = document.getElementById('garden-overlay');
const scare = document.getElementById('scare-overlay');
const ground = document.querySelector('.ground');

// هيكل الوردة الكامل (بالضبط كما في مثالك)
const flowerFullHTML = `
    <div class="flower-top">
        <div class="flower-petal flower-petal__1"></div>
        <div class="flower-petal flower-petal__2"></div>
        <div class="flower-petal flower-petal__3"></div>
        <div class="flower-petal flower-petal__4"></div>
        <div class="flower-petal flower-petal__5"></div>
        <div class="flower-petal flower-petal__6"></div>
        <div class="flower-petal flower-petal__7"></div>
        <div class="flower-petal flower-petal__8"></div>
        <div class="flower-circle"></div>
        <div class="flower-light flower-light__1"></div>
        <div class="flower-light flower-light__2"></div>
        <div class="flower-light flower-light__3"></div>
    </div>
    <div class="flower-bottom">
        <div class="flower-stem"></div>
        <div class="flower-leaf flower-leaf__1"></div>
        <div class="flower-leaf flower-leaf__2"></div>
    </div>`;

yesBtn.onclick = () => {
    document.getElementById('question-container').style.display = 'none';
    garden.classList.remove('hidden');

    // إنشاء 10 وردات وتوزيعها
    for (let i = 0; i < 10; i++) {
        const container = document.createElement('div');
        container.className = 'flower-container';
        
        // توزيع عشوائي للورود في البستان
        container.style.left = (Math.random() * 80 + 10) + '%';
        container.style.top = (Math.random() * 50 + 20) + '%';
        container.style.width = (Math.random() * 10 + 5) + '%';

        container.innerHTML = flowerFullHTML;
        ground.appendChild(container);

        // تفعيل الأنميشن
        setTimeout(() => {
            container.classList.add('animate');
        }, i * 400);
    }
};

noBtn.onclick = () => {
    scare.classList.remove('hidden');
    document.getElementById('scare-sound').play();
    document.body.style.animation = "shake 0.1s infinite";
};

// اهتزاز للرعب
const s = document.createElement('style');
s.innerHTML = "@keyframes shake { 0% {transform:translate(2px,2px)} 50% {transform:translate(-2px,-2px)} }";
document.head.appendChild(s);