$(document).ready(function(){
    $('#login').submit(function(event){
        event.preventDefault();
        let email = $('#email').val().trim();
        let pass = $('#pass').val().trim();
        if(email != ''&& email != ' '){
            if(pass!=''&& pass!=' '){
                if(email == 'bryan@antier.com'){
                    if(pass == 'bryan'){
                        console.log(email);
                        window.location.replace("../html/index.html");
                    }
                    else{
                        alert('Password is incorrect.');
                    }
                }
                else{
                    alert('Email not found');
                }
            }
        }
    })
});