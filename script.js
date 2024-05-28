// For map pop up features
window.onload = function() {
    alert("Selamat datang di Curriculum Vitae Yudi Putra Wiratama!");
};

document.querySelector('.address').addEventListener('click', function() {
    document.getElementById('maps-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('maps-modal').style.display = 'none';
});

window.onclick = function(event) {
    var modal = document.getElementById('maps-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// For section skill
document.addEventListener('DOMContentLoaded', function () {
    const skillCards = document.querySelector('.skill-cards');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showSkills(index) {
        const totalCards = skillCards.children.length;
        const visibleCards = 2;
        const maxIndex = totalCards - visibleCards;
        if (index < 0) {
            currentIndex = maxIndex;
        } else if (index > maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        skillCards.style.transform = `translateX(${-currentIndex * 100 / visibleCards}%)`;
    }

    prevBtn.addEventListener('click', function () {
        showSkills(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function () {
        showSkills(currentIndex + 1);
    });

    setInterval(function () {
        showSkills(currentIndex + 1);
    }, 3000);
});
