// Selecting each button the Vanilla way
for (let i = 0; i < 5; i++) {
    document
        .querySelectorAll('button')
        [i].addEventListener('click', function () {
            document.querySelector('h1').style.color = 'purple';
        });
}

// Selecting each button the jQuery way
$('button').click(function () {
    $('h1').css('color', 'red');
});
