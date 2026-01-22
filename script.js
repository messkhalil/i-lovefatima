document.addEventListener("DOMContentLoaded", () => {
    const border = document.getElementById("path-border");
    const fill = document.getElementById("path-fill");
    const btn = document.getElementById("love-btn");
    const starsContainer = document.getElementById("stars-container");

    // رسم القلب
    const length = border.getTotalLength();
    border.style.strokeDasharray = length;
    border.style.strokeDashoffset = length;
    setTimeout(() => {
        border.style.transition = "stroke-dashoffset 3s ease-in-out";
        border.style.strokeDashoffset = "0";
    }, 500);

    // توليد النجوم
    for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = star.style.height = Math.random() * 3 + "px";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.setProperty('--d', (Math.random() * 3 + 1) + 's');
        starsContainer.appendChild(star);
    }

    let fillLevel = 0;
    btn.addEventListener("click", (e) => {
        fillLevel += 0.15;
        if (fillLevel > 0.85) fillLevel = 0.85;
        fill.style.fillOpacity = fillLevel;

        for (let i = 0; i < 8; i++) {
            const h = document.createElement("div");
            h.innerHTML = ["❤️", "🌸", "💖", "🌺"][Math.floor(Math.random()*4)];
            h.className = "flying-heart";
            h.style.left = e.clientX + (Math.random() * 100 - 50) + "px";
            h.style.top = e.clientY + "px";
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 2500);
        }
    });
});