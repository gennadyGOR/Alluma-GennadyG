import HomePage from "../pages/home.page";
import Header from "../pages/header";
import Footer from "../pages/footer";
const header = require("../data/expected.json").header;
const homePage = require("../data/expected.json").home

describe("HOME PAGE",()=>{
  before(()=>{
    HomePage.open("");
  })

  describe("HOME PAGE ELEMENTS ARE PRESENT AND HAVE CORRECT VALUES",()=>{

    it("Validate that Header is displayed on Home Page",()=> {
      expect(Header.header).toBeDisplayed()
    });

    it("Validate that Home page header title have correct value",()=> {
      expect(Header.headerTitle.getText()).toEqual(header.headerTitle)
    });

    it("Validate that Login form field is present",()=>{
      expect(HomePage.loginForm).toBeDisplayed()
    })

    it("Validate that Title 1 'CONNECTIONS' in Login form field is present",()=> {
      expect(HomePage.title1).toBeDisplayed()
    });

    it("Validate that Title 1 in Login form field have correct value",()=> {
      expect(HomePage.title1.getText()).toEqual(homePage.title1text)
    });

    it("Validate that Title 2 'WELCOME TO CONNECTIONS' in Login form field is present", ()=> {
      expect(HomePage.title2).toBeDisplayed()
    });

    it("Validate that Title 2 in Login form field have correct value", ()=> {
      expect(HomePage.title2.getText()).toEqual(homePage.title2text)
    });

    it("Validate that Title 3 'Connect people with the benefits they need, with one simple application.' in Login form field is present", ()=> {
      expect(HomePage.title3).toBeDisplayed()
    });

    it("Validate that Title 3 in Login form field have correct value", ()=> {
      expect(HomePage.title3.getText()).toEqual(homePage.title3text)
    });

    it("Validate that Title 4 'Curious what you may qualify for?' in Login form field is present", ()=> {
      expect(HomePage.title4).toBeDisplayed()
    });

    it("Validate that Title 4 in Login form field have correct value", ()=> {
      expect(HomePage.title4.getText()).toEqual(homePage.title4text)
    });

    it("Validate that 'Try our Quick Screener' link in Login form field is present", ()=> {
      expect(HomePage.screenerLink).toBeDisplayed()
    });

    it("Validate that Try our Quick Screener' link in Login form field have correct value", ()=> {
      expect(HomePage.screenerLink.getText()).toEqual(homePage.quickScreenerLinkText)
    });

    it("Validate that User name required label is present",()=> {
      expect(HomePage.userNameRequired).toBeDisplayed()
    });

    it("Validate that User name required label have correct value",()=> {
      expect(HomePage.userNameRequired.getText()).toEqual(homePage.userNameLabel)
    });

    it("Validate that User name placeholder is present",()=> {
      expect(HomePage.userNameField).toBeDisplayed()
    });

    it("Validate that password required label is present",()=> {
      expect(HomePage.passwordRequired).toBeDisplayed()
    });

    it("Validate that password required label have correct value",()=> {
      expect(HomePage.passwordRequired.getText()).toEqual(homePage.passwordLabel)
    });

    it("Validate that User name placeholder is present",()=> {
      expect(HomePage.passwordField).toBeDisplayed()
    });

    it("Validate that Forgot User Name link is present",()=> {
      expect(HomePage.forgotUsernameLink).toBeDisplayed()
    });

    it("Validate that Forgot User Name link has correct value",()=> {
      expect(HomePage.forgotUsernameLink.getText()).toEqual(homePage.forgotUserNameLinkTXT)
    });

    it("Validate that Forgot Password link is present",()=> {
      expect(HomePage.forgotUsernameLink).toBeDisplayed()
    });

    it("Validate that Forgot Password link has correct value",()=> {
      expect(HomePage.forgotPasswordLink.getText()).toEqual(homePage.forgotPasswordLinkTXT)
    });

    it("Validate that Login button is present",()=> {
      expect(HomePage.logInButton).toBeDisplayed()
    });

    it("Validate that Login button have correct value",()=> {
      expect(HomePage.logInButton.getText()).toEqual(homePage.logInButtonTXT)
    });

    it("Validate that Title 6 'If you need a user name, contact your system administrator.' is present", ()=> {
      expect(HomePage.title6).toBeDisplayed()
    });

    it("Validate that Title 6 have correct value", ()=> {
      expect(HomePage.title6.getText()).toEqual(homePage.title6text)
    });

    it("Validate that Title 7 'Interested in becoming a Connections user? Learn More' is present", ()=> {
      expect(HomePage.title7).toBeDisplayed()
    });

    it("Validate that Title 7 have correct value", ()=> {
      expect(HomePage.title7.getText()).toEqual(homePage.title7text)
    });

    it("Validate that Footer is displayed on Home Page",()=> {
      expect(Footer.footer).toBeDisplayed()
    });
  })
  
  describe("FUNCTIONALITY OF A HOME PAGE",()=>{
    beforeEach(()=>{
      HomePage.open("");
    })

    it("Validate that 'Try our Quick Screener' link is clickable",()=> {
      expect(HomePage.screenerLink).toBeClickable()
    });

    it("Validate that 'Try our Quick Screener' link redirects User to http://oxcdemo.alluma.org/#/quick/intro",()=> {
      HomePage.waitAndClick(HomePage.screenerLink)
      expect(browser.getUrl()).toEqual(homePage.quickScreenerURL)
    });


  })
})