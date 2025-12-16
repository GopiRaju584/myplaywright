exports.DashBoardpage =
class DashBoardpage {

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
        this.DashboardHeader = page.getByRole('link', {name: 'Dashboard'});
        this.clockinbutton = page.getByRole('Button',{name:"Clock In"});
        this.clockin = page.getByRole('button',{name:"lucide lucide-x h-4 w-4"});
        this.newrequestbutton = page.getByRole('button', { name: '+ New Request' });
        this.newrequest = page.getByRole('button').filter({ name: /^$/ }).nth(3); 
        this.Applyforleavebutton = page.getByRole('button', { name: 'Apply for Leave' });
        this.Applyforleaves = page.getByRole('button',{name:"close"});
        this.Sendamessagebutton = page.getByRole('button', { name: 'Send A Message' });
        this.sendamessage = page.getByRole('button',{name: "close"});
        //this.Grantpermissionbutton = page.getByRole('Button',{name:'Grant Permission'});
        this.Showallholidaysbutton = page.getByRole('Button',{name:'Show All Holidays'});
        this.showallholidays = page.getByRole('button',{name:"close"});
        
       // this.attendancebutton = page.getByRole('Button',{name:"Attendance"});

    }

    async lanchApplication() {
        await this.page.goto('https://prople.pro//login')
    }

    async loginApplication() {
        await this.loginlink.click();
        await this.emailtextBox.fill('praveen.m@spearsoftech.com');
        await this.password.fill('Vihansh77**'); 
        await this.SignIn.click();
        await this.Loggedinbutton.click();
        await this.DashboardHeader.click();
        await this.clockinbutton.click();
        await this.clockinbutton.click();
        //await this.newrequestbutton.click();
        //await this.newrequest.click();
        await this.Applyforleavebutton.click();
        await this.Applyforleaves.click();
        await this.Sendamessagebutton.click();
        await this.sendamessage.click();
        await this.Showallholidaysbutton.click();
        await this.showallholidays.click();

       // await this.attendancebutton.click();

    }



}