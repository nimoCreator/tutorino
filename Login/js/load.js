window.addEventListener('load', function() {
    this.document.getElementById('login_with_google').addEventListener('click', () => {
        toast_notification({
            type:"error", 
            time:"10", 
            label:"Logowanie za pomocą konta Google tymczasoswo niedostępne", 
            content:"Przepraszamy, możliwość logowania za pomocą konta Google jest tymczasowo niedostępna. Prosimy spróbować ponownie później."
        });
    });
    this.document.getElementById('login_with_facebook').addEventListener('click', () => {
        toast_notification({
            type:"error", 
            time:"10", 
            label:"Logowanie za pomocą konta Facebook tymczasoswo niedostępne", 
            content:"Przepraszamy, możliwość logowania za pomocą konta Facebook jest tymczasowo niedostępna. Prosimy spróbować ponownie później."
        });
    });
    this.document.getElementById('login_with_discord').addEventListener('click', () => {
        toast_notification({
            type:"error", 
            time:"10", 
            label:"Logowanie za pomocą konta Discord tymczasoswo niedostępne", 
            content:"Przepraszamy, możliwość logowania za pomocą konta Discord jest tymczasowo niedostępna. Prosimy spróbować ponownie później."
        });
    });

    document.getElementById('login_button').addEventListener('click', function(event) {
        event.preventDefault(); 
    });

    document.getElementById('enter_button').addEventListener('click', function(event) {
        event.preventDefault(); 
    });

    document.getElementById('register_button').addEventListener('click', function(event) {
        event.preventDefault(); 
    });

    this.document.querySelectorAll('.nimoweb_password_eye').forEach(e => {
        e.addEventListener('click', function(event) { event.preventDefault(); });
        e.addEventListener('click', () => {
            this.document.querySelectorAll('.nimoweb_password').forEach(el => {
                if (el.type === "password") {
                    this.document.querySelectorAll('.nimoweb_password_eye').forEach(ele => {
                        ele.getElementsByTagName("img")[0].src = "https://nimoweb.ddns.net/myaccount/login/img/eye_open.svg";
                    });
                    el.type = "text";

                    
                } else {
                    this.document.querySelectorAll('.nimoweb_password_eye').forEach(ele => {
                        ele.getElementsByTagName("img")[0].src = "https://nimoweb.ddns.net/myaccount/login/img/eye_closed.svg";
                    });
                    el.type = "password";
                }
            });
        });
    });
});