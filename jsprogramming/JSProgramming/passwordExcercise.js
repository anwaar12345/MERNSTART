class password{

    password;

    basicPasswordGenerator(){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 8;
        for (var i = 0; i < passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            this.password += chars.substring(randomNumber, randomNumber +1);
           }
        return this.password.substring(this.password.indexOf('i')+4,this.password.length);
    }

}

let basicPassword = new password();
console.log(basicPassword.basicPasswordGenerator());