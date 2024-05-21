// wheel.js
document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');
    const result = document.getElementById('result');

    const prizes = [
        'Recharge of 25000 shell card',
        'Désolé tentez votre chance une prochaine fois',
        'A box of chocolate',
        'Désolé tentez votre chance une prochaine fois',
        'A full car checkup',
        'Désolé tentez votre chance une prochaine fois',
        'A box of chocolate',
        'Désolé tentez votre chance une prochaine fois'
    ];

    let isSpinning = false;
    let hasSpun = false;

    spinButton.addEventListener('click', () => {
        if (isSpinning || hasSpun) return;
        isSpinning = true;
        result.textContent = '';

        const randomDegree = Math.floor(Math.random() * 360) + 2880; // At least 8 full rotations
        const prizeIndex = (8 - Math.floor((randomDegree % 360) / 45)) % 8;

        wheel.style.transform = `rotate(${randomDegree}deg)`;

        setTimeout(() => {
            isSpinning = false;
            hasSpun = true;
            spinButton.disabled = true;
            spinButton.classList.add('opacity-50', 'cursor-not-allowed'); // Optional: Add Tailwind classes for disabled appearance
            result.textContent = `${prizes[prizeIndex]}`;
        }, 4000); // Match the CSS transition duration
    });
});
