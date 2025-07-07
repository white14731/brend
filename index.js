window.addEventListener('resize', function() {
    scrollPosition = Math.min(scrollPosition, slider.scrollWidth - slider.offsetWidth);
});

const brandsSlider = document.getElementById('brandsSlider');
const cardWidthPop = 150 + 30;
let brandsScrollPosition = 0;

function scrollBrandsSlider(direction) {
    const cardWidthPop = brandsSlider.offsetWidth;
    const maxScroll = brandsSlider.scrollWidth - cardWidthPop;

    brandsScrollPosition += direction * cardWidthPop;

    brandsScrollPosition = Math.max(0, Math.min(brandsScrollPosition, maxScroll));

    brandsSlider.scrollTo({
        left: brandsScrollPosition,
        behavior: 'smooth'
    });
}

window.addEventListener('resize', function() {
    brandsScrollPosition = Math.min(brandsScrollPosition, brandsSlider.scrollWidth - brandsSlider.offsetWidth);
});

function toggleItems(groupId) {
    const moreItems = document.getElementById(`${groupId}-more`);
    const btn = document.querySelector(`[onclick="toggleItems('${groupId}')]`);

    if (moreItems.style.display === 'block') {
        moreItems.style.display = 'none';
        btn.classList.remove('expanded');
    } else {
        moreItems.style.display = 'block';
        btn.classList.add('expanded');
    }
}

// Обработка сортировки
document.querySelectorAll('.sort-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.sort-option').forEach(opt => {
            opt.classList.remove('active');
        });
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const letters = document.querySelectorAll('.letters');
    const producerItems = document.querySelectorAll('.producer-item');

    letters.forEach(letter => {
        letter.addEventListener('click', function() {
            // Удаляем активный класс у всех букв
            letters.forEach(l => l.classList.remove('active'));

            // Добавляем активный класс к выбранной букве
            this.classList.add('active');

            const selectedLetter = this.getAttribute('data-letter');

            // Показываем/скрываем производителей
            producerItems.forEach(item => {
                item.classList.remove('visible', 'all');

                if (selectedLetter === 'all') {
                    item.classList.add('all');
                } else if (item.getAttribute('data-letter') === selectedLetter) {
                    item.classList.add('visible');
                }
            });
        });
    });
});