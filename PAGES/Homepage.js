exports.Homepage = 
class Homepage {

    constructor (page) {
        this.page  = page;
        this.loginlink = page.getByRole('link',{name:"login"});
        this.Productsbutton = page.getByRole('Button',{name:'Products'});
        this.EN = page.getByRole('Button',{name:'EN',exact:true});
        this.Pricing = page.getByRole('link',{name:'Pricing'});
        this.Download = page.getByRole('link',{name:'Download'});
        this.About = page.getByRole('link',{name:"About"}).first();

        this.contactlink = page.getByRole('link',{name:'Contact'}).first();
    }
    async launchApplication(){
        await this.page.goto('https://prople.pro//logine.');
    } 

    async loginApplication(){
        await this.loginlink.click();
        //await this.EN.click();
        await this.contactlink.click();
        await this.Download.click();
        await this.Pricing.click();
        await this.About.click();
    }
}