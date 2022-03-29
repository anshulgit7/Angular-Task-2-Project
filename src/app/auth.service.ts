export class AuthService{
    loggedIn: boolean = false;

    login(){
        this.loggedIn = true;
        console.log("On clicking: "+this.loggedIn);
    }
    
    logout(){
        this.loggedIn = false;
    }

    isAuthenticated(){
        return this.loggedIn;
    }
}