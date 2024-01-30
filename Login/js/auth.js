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

            if (this.document.getElementById('enter_login').value.includes("@")) {
                document.getElementById('register_email').value = document.getElementById('enter_login').value;
                document.getElementById('register_email').disabled = true;
            } else {
                document.getElementById('register_login').value = document.getElementById('enter_login').value;
                document.getElementById('register_login').disabled = true;
            }

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

    this.document.getElementById('register_button').addEventListener('click', () => {

    if(this.document.getElementById('register_password').value != this.document.getElementById('register_password_repeat').value)
    {
        toast_notification({
            type:"error", 
            time:"5", 
            label:"Hasła nie są takie same!"
        });
        return;
    }

    if(this.document.getElementById('register_password').value.length < 8)
    {
        toast_notification({
            type:"error", 
            time:"5", 
            label:"Hasło jest za krótkie!"
        });
        return;
    }

    if(this.document.getElementById('register_login').value.length < 2 || 
    this.document.getElementById('register_email').value.length < 2 ||
    this.document.getElementById('register_name').value.length < 2 ||
    this.document.getElementById('register_surname').value.length < 2 )
    {
        toast_notification({
            type:"error", 
            time:"5", 
            label:"Wypełnij wszystkie pola!"
        });
        return;
    }
    
        this.document.getElementById('enter_login').value = this.document.getElementById('register_login').value;

        this.document.getElementById('step_1').classList.remove('hidden');
        this.document.getElementById('register').classList.add('hidden');

        document.getElementById('login_login').value = document.getElementById('enter_login').value;
        toast_notification({
            type:"success", 
            time:"20", 
            label:"Konto założone pomyślnie!",
            content:"Potwierdź rejestrację przez link wysłany na podany adres email aby móc się zalogować!"
        });
    });
});