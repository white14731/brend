function filterByLetter(letter) {
    const producers = document.querySelectorAll('.producer-item');
    const noResults = document.getElementById('noResults');

    // Сбрасываем поиск
    document.getElementById('searchInput').value = '';

    let hasVisibleItems = false;

    producers.forEach(item => {
        if (letter === 'all' || item.getAttribute('data-letter') === letter) {
            item.style.display = 'block';
            hasVisibleItems = true;
        } else {
            item.style.display = 'none';
        }
    });

    // Показываем или скрываем сообщение "нет результатов"
    noResults.style.display = hasVisibleItems ? 'none' : 'block';
}

// Функция для поиска производителей
function searchProducers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const producers = document.querySelectorAll('.producer-item');
    const noResults = document.getElementById('noResults');

    let hasVisibleItems = false;

    producers.forEach(item => {
        const producerName = item.textContent.toLowerCase();
        if (producerName.includes(searchTerm)) {
            item.style.display = 'block';
            hasVisibleItems = true;
        } else {
            item.style.display = 'none';
        }
    });

    // Показываем или скрываем сообщение "нет результатов"
    noResults.style.display = hasVisibleItems ? 'none' : 'block';

    // Сбрасываем активную букву
    document.querySelectorAll('.letters').forEach(letter => {
        letter.classList.remove('active');
    });
    document.querySelector('.letters[data-letter="all"]').classList.add('active');
}

// Инициализация событий
document.addEventListener('DOMContentLoaded', function() {
    // Клик по букве
    document.querySelectorAll('.letters').forEach(letter => {
        letter.addEventListener('click', function() {
            document.querySelectorAll('.letters').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            filterByLetter(this.getAttribute('data-letter'));
        });
    });

    // Поиск при вводе текста
    document.getElementById('searchInput').addEventListener('input', searchProducers);
});

// Функция для слайдера (оставлена как в оригинале)
function scrollBrandsSlider(direction) {
    const slider = document.getElementById('brandsSlider');
    slider.scrollBy({
        left: direction * 200,
        behavior: 'smooth'
    });
}