const cards = document.querySelectorAll('.card');

cards.forEach(card => {

card.addEventListener('mousemove', () => {
card.style.transform = 'translateY(-12px) scale(1.02)';
});

card.addEventListener('mouseleave', () => {
card.style.transform = 'translateY(0px)';
});

});
