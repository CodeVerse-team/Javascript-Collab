document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.sidebar-toggle');
    var body = document.querySelector('body');

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('with-sidebar');
    });
});
