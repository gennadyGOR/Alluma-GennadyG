import HomePage from "../../pages/home.page";
import Header from "../../pages/header";
import Footer from "../../pages/footer";
const expected = require("../../helpers/expected.json");

describe("HOME PAGE",()=> {
  before(() => {
    HomePage.open("");
  })

  describe("HOME PAGE ELEMENTS ARE PRESENT AND HAVE CORRECT VALUES", () => {

    it("Validate that Header is displayed on Home Page", () => {
      expect(Header.header).toBeDisplayed()
    });

    it("Validate that Home page header title have correct value", () => {
      expect(Header.headerTitle.getText()).toEqual(expected.header.headerTitle)
    });

    it("Validate that Login form field is present", () => {
      expect(HomePage.loginForm).toBeDisplayed()
    })

    it("Validate that Title 1 'CONNECTIONS' in Login form field is present", () => {
      expect(HomePage.title1).toBeDisplayed()
    });

    it("Validate that Title 1 in Login form field have correct value", () => {
      expect(HomePage.title1.getText()).toEqual(expected.home.title1text)
    });

    it("Validate that Title 2 'WELCOME TO CONNECTIONS' in Login form field is present", () => {
      expect(HomePage.title2).toBeDisplayed()
    });

    it("Validate that Title 2 in Login form field have correct value", () => {
      expect(HomePage.title2.getText()).toEqual(expected.home.title2text)
    });

    it("Validate that Title 3 'Connect people with the benefits they need, with one simple application.' in Login form field is present", () => {
      expect(HomePage.title3).toBeDisplayed()
    });

    it("Validate that Title 3 in Login form field have correct value", () => {
      expect(HomePage.title3.getText()).toEqual(expected.home.title3text)
    });

    it("Validate that Title 4 'Curious what you may qualify for?' in Login form field is present", () => {
      expect(HomePage.title4).toBeDisplayed()
    });

    it("Validate that Title 4 in Login form field have correct value", () => {
      expect(HomePage.title4.getText()).toEqual(expected.home.title4text)
    });

    it("Validate that 'Try our Quick Screener' link in Login form field is present", () => {
      expect(HomePage.screenerLink).toBeDisplayed()
    });

    it("Validate that Try our Quick Screener' link in Login form field have correct value", () => {
      expect(HomePage.screenerLink.getText()).toEqual(expected.home.quickScreenerLinkTXT)
    });

    it("Validate that User name required label is present", () => {
      expect(HomePage.userNameRequired).toBeDisplayed()
    });

    it("Validate that User name required label have correct value", () => {
      expect(HomePage.userNameRequired.getText()).toEqual(expected.home.userNameLabel)
    });

    it("Validate that User name placeholder is present", () => {
      expect(HomePage.userNameField).toBeDisplayed()
    });

    it("Validate that password required label is present", () => {
      expect(HomePage.passwordRequired).toBeDisplayed()
    });

    it("Validate that password required label have correct value", () => {
      expect(HomePage.passwordRequired.getText()).toEqual(expected.home.passwordLabel)
    });

    it("Validate that User name placeholder is present", () => {
      expect(HomePage.passwordField).toBeDisplayed()
    });

    it("Validate that Forgot User Name link is present", () => {
      expect(HomePage.forgotUsernameLink).toBeDisplayed()
    });

    it("Validate that Forgot User Name link has correct value", () => {
      expect(HomePage.forgotUsernameLink.getText()).toEqual(expected.home.forgotUserNameLinkTXT)
    });

    it("Validate that Forgot Password link is present", () => {
      expect(HomePage.forgotUsernameLink).toBeDisplayed()
    });

    it("Validate that Forgot Password link has correct value", () => {
      expect(HomePage.forgotPasswordLink.getText()).toEqual(expected.home.forgotPasswordLinkTXT)
    });

    it("Validate that Login button is present", () => {
      expect(HomePage.logInButton).toBeDisplayed()
    });

    it("Validate that Login button have correct value", () => {
      expect(HomePage.logInButton.getText()).toEqual(expected.home.logInButtonTXT)
    });

    it("Validate that Title 6 'If you need a user name, contact your system administrator.' is present", () => {
      expect(HomePage.title6).toBeDisplayed()
    });

    it("Validate that Title 6 have correct value", () => {
      expect(HomePage.title6.getText()).toEqual(expected.home.title6text)
    });

    it("Validate that Title 7 'Interested in becoming a Connections user? Learn More' is present", () => {
      expect(HomePage.title7).toBeDisplayed()
    });

    it("Validate that Title 7 have correct value", () => {
      expect(HomePage.title7.getText()).toEqual(expected.home.title7text)
    });

    it("Validate that Footer is displayed on Home Page", () => {
      expect(Footer.footer).toBeDisplayed()
    });
  });
});