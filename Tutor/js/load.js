window.addEventListener('load', function () {
    this.document.getElementById('user_profile').addEventListener('click', () => {
        window.location.href = '../myaccount/index.html';
    });
    this.document.getElementById('icon_tutorino').addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});
function addToInput(subject) {
    document.getElementById('search_input').value = subject;
}