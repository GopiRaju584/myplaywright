import{test,expect} from '@playwright/test';


test('homepage', async({page}) =>{


    await page.goto('https://tgsrtc.telangana.gov.in/');
    

    const booknowbutton = page.getByText("Book Now");

    await booknowbutton.click();

    const Buspassbutton = page.getByText("Dedicated to delivering top-notch services through teamwork, aiming for passenger satisfaction and a leading position in the transport sector. Additionally, TGSRTC offers a range of bus passes to cater to various passenger needs.");

    await Buspassbutton.click();
    
    const TGSRTCbutton = page.getByText("TGSRTC introduced Cargo and Parcel Services in June 2020, offering transportation of goods across the state and neighboring areas. With designated counters at key locations and appointed agents, consignors can conveniently book their shipments at any TGSRTC bus station, ensuring efficient delivery to their desired destinations for collection by the consignee.");

    await TGSRTCbutton.click();

    const Privacypolicies = page.getByText("Privacy Policies");

    await Privacypolicies.click();

    const NewUpdates = page.getByTestId("News & Updates");

    await NewUpdates.isVisible();

    //const booknowheader = page.locator('[id="light"]');
    //await booknowheader.click();


    

});