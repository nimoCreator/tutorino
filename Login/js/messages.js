document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    message('asdasdasd <b> asfdasf </b> <br> <i> aoguhoasdg </i>', ['problem'], 1000);
    message('asdasdasd <b> asfdasf </b> <br> <i> aoguhoasdg </i>', ['problem'], 2000);
    message('asdasdasd <b> asfdasf </b> <br> <i> aoguhoasdg </i>', ['problem'], 3000);
});


function message(text, classes, time) {
    const messageElement = document.createElement('message');

    classes.forEach(className => {
        messageElement.classList.add(className);
    });
    messageElement.innerHTML = text;
    messageElement.style.setProperty('--time', time + 'ms');

    messageElement.appendChild(document.createElement('counting'));

    document.getElementById('messages').appendChild(messageElement);

    setTimeout(() => {
        messageElement.classList.add('expired');
        setTimeout(() => {
            messageElement.remove();
        }, 1000);
    }, time);
}
