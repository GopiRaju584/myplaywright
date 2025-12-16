exports.LoginPage = 
class LoginPage {


    constructor (page) {
        this.page = page;
        this.loginlink = page.getByRole('link', { name: 'Login' });
        this.WelcomeBackheader = page.getByText("Welcome Back");
        this.BanksecurityElement =page.getByText("Bank-Grade Security");
        this.SignIn = page.getByRole('Button', {name: 'Sign In'});
        this.emailtextBox = page.getByRole('Textbox', {name: "john@company.com"});
        this.password = page.getByRole('Textbox',{name: "••••••••"});
        this.Forgotlink = page.getByText("Forgot Password?");
            this.DashboardHeader = page.getByText('Button',{name:'Dashboard'});

    }

    //async verifycloseButton (){
       // await this.verifycloseButton.isvisible();
    

        
    async lanchApplication() {
        await this.page.goto('https://prople.pro//login');
       // await expect(this.page).toHaveTitle('PROPLE - Your 24×7 HR Co-Worker.');
    }

    async loginApplication() {
        await this.loginlink.click();
        await this.emailtextBox.fill('praveen.m@spearsoftech.com');
        await this.password.fill('Vihansh77**'); 
        await this.SignIn.click();
        await this.DashboardHeader.isVisible();
    }
}