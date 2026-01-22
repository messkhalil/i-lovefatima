document.addEventListener("DOMContentLoaded", () => {
    const path = document.getElementById("path-heart");
    const starsContainer = document.getElementById("stars-container");

    // 1. رسم القلب تدريجياً
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    setTimeout(() => {
        path.style.transition = "stroke-dashoffset 4s ease-in-out";
        path.style.strokeDashoffset = "0";
    }, 500);

    // 2. إنشاء نجوم لماعة بشكل عشوائي
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        
        const size = Math.random() * 3 + "px";
        star.style.width = size;
        star.style.height = size;
        
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        
        // سرعة لمعان مختلفة لكل نجمة
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        
        starsContainer.appendChild(star);
    }
});