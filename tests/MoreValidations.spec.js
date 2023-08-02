   const {test,expect} = require('@playwright/test')


test("Popup validations",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // await page.goto("http://google.com");
    // await page.goBack();
    // await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
   // await page.pause();
    page.on('dialog',dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
     const textCheck =await framesPage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);


})

test("Screenshot & Visual comparision",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
});
//screenshot -store -> screenshot -> 
test('visual',async({page})=>
{
      await page.goto("https://google.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

})





test.only ("PyramidCorevalidations",async({page})=>
{
    const pcoreUserName =  page.locator("#pydLogin_txtUserid");
    const pcorePassword =  page.locator("#pydLogin_txtUserPwd");
    const pcoreLoginButton =  page.locator("#pydLogin_btnLogin");
    const pcoreHome= page.locator("//a[normalize-space()='Home']");
    
    const orgChartLink = page.locator("#PCIMenut1");
    await page.goto("https://pyramidcore.pyramidci.com/Home/PCIhome.aspx");


    await expect (pcoreUserName).toBeVisible();
    await pcoreUserName.type ("");
    await pcorePassword.type ("");
    await pcoreLoginButton.click();
    await page.waitForLoadState('networkidle');
    await pcoreHome.click();
    const leftFrame = page.frameLocator("//frame[@name='contents']");
    await leftFrame.locator("#PCIMenut1").click();
    const mainFrame = page.frameLocator("//frame[@name='main']");
    await mainFrame.locator("#ddlEmployeeList").click();
    const dropdown = mainFrame.locator("#ddlEmployeeList");
    await dropdown.selectOption("9134");
   // await mainFrame.locator("#rbtnUpHierarchy").check();
    const anotherDropDown = mainFrame.locator("#ddlLevel");
    await anotherDropDown.selectOption("1");
    //await page.pause();
})





