let isDragging = false;

function moveImage(event) {
    const gameImage = document.getElementById('gameImage');

    if (isDragging) {
        isDragging = false;
        gameImage.style.transition = 'top 0.3s, left 0.3s';
    } else {
        isDragging = true;
        gameImage.style.transition = 'none';
    }

    document.onmousemove = function(e) {
        if (isDragging) {
            const x = e.clientX - gameImage.width / 2;
            const y = e.clientY - gameImage.height / 2;

            gameImage.style.left = x + 'px';
            gameImage.style.top = y + 'px';
        }
    };

    document.onmouseup = function() {
        isDragging = false;
        document.onmousemove = null;
        document.onmouseup = null;
    };
}
