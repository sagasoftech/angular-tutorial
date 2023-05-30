export class AuthService{
    private loggeIn = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggeIn);
                }, 800);
            }
        );
        return promise;
    }

    login(){
        this.loggeIn = true;
    }

    logout(){
        this.loggeIn = false;
    }
}