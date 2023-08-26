class User{
    constructor(email, password) {
        this.email = email,
        this.password =password
    }
    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password= value
    }
}
const Kuntal = new User("K@Kuntal.ai", "abc")
console.log(Kuntal.password);