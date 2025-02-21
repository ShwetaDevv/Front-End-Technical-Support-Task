function toggleBox(index) {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box, i) => {
        if (i + 1 === index) {
            box.classList.toggle('active');
            box.querySelector('input[type=radio]').checked = true;
        } else {
            box.classList.remove('active');
            box.querySelector('input[type=radio]').checked = false;
        }
    });
}







