exports.Attendancepage =
class Attendancepage {

    constructor (page) {
        this.page = page;
        this.loginlink = page.getByRole('link', { name: 'Login' });
        this.WelcomeBackheader = page.getByText("Welcome Back");
        this.BanksecurityElement =page.getByText("Bank-Grade Security");
        this.SignIn = page.getByRole('Button', {name: 'Sign In'});
        this.emailtextBox = page.getByRole('Textbox', {name: "john@company.com"});
        this.password = page.getByRole('Textbox',{name: "••••••••"});
        this.Forgotlink = page.getByText("Forgot Password?");
        this.Loggedinbutton = page.getByRole('Button',{name:"Yes, Log me in here"});
        this.Attendance = page.getByRole('Button',{name:"Attendance"});
        this.attendancehome = page.getByRole('link',{name: "Attendance Home"});
        this.attendance = page.getByRole('link',{name: 'Attendance',exact:true});
        this.worktyperequest = page.getByRole('link',{name: "Work Type Request"})


    }
    async lanchApplication() {
            await this.page.goto('https://prople.pro//login');

    }
        async loginApplication() {
        await this.loginlink.click();
        await this.emailtextBox.fill('praveen.m@spearsoftech.com');
        await this.password.fill('Vihansh77**'); 
        await this.SignIn.click();
        await this.Loggedinbutton.click();
        await this.Attendance.click();
        await this.attendancehome.click();
        //await this.attendance.click();
        //await this.worktyperequest.click();

    }
    

}