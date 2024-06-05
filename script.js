// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const statCards = document.querySelectorAll(".stat-card");

    statCards.forEach(card => {
        const target = parseInt(card.getAttribute("data-count"), 10);
        const h2 = card.querySelector("h2");
        let count = 0;

        const updateCount = () => {
            count += Math.ceil(target / 100);
            if (count > target) {
                count = target;
            }
            h2.textContent = `${count}${target >= 1000 ? '+' : '+'}`;

            if (count < target) {
                setTimeout(updateCount, 50);
            }
        };

        updateCount();
    });
});
