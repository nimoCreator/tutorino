window.addEventListener('load', () => {
    this.document.getElementById('enter_button').addEventListener('click', () => {

        this.document.getElementById('step_1').classList.add('hidden');
        if( this.document.getElementById('enter_login').value == "test" )
        {
            // login
            document.getElementById('login_login').value = document.getElementById('enter_login').value;
            document.getElementById('login_login').disabled = true;

            this.document.getElementById('login').classList.remove('hidden');
            toast_notification({
                type:"success", 
                time:"5", 
                label:"Znaleziono użytkownika"
            });
        } else
        {
            // register
            this.document.getElementById('register').classList.remove('hidden');
            toast_notification({
                type:"success", 
                time:"5", 
                label:"Nowy użytkownik"
            });
        }

    });

    this.document.getElementById('login_button').addEventListener('click', () => {

        if( this.document.getElementById('login_login').value == "test" && this.document.getElementById('login_password').value == "test" )
        {
            toast_notification({
                type:"success", 
                time:"5", 
                label:"Zalogowano Pomyślnie",
                content:"Za chwilę zostaniesz przekierowany na stronę główną"
            });

            sessionStorage.setItem('login', 'test');

            window.location.href = "../MyAccount/";
            
        }
        else
        {
            this.document.getElementById('step_1').classList.remove('hidden');
            this.document.getElementById('login').classList.add('hidden');

            document.getElementById('login_login').value = document.getElementById('enter_login').value;
            toast_notification({
                type:"error", 
                time:"5", 
                label:"Błąd logowania",
                content:"Wpisano niepoprawne hasło!"
            });
        }
    });
});