import HomePage from "../../pages/home.page";
import ForgotPasswordPage from "../../pages/forgotPassword.page";
import ForgotUsernamePage from "../../pages/forgotUsername.page"
const expected = require("../../expected/forgotPassword.json");
const data = require("../../expected/data.json").input;


describe("FUNCTIONALITY OF PASSWORD RECOVERY PAGE", ()=> {

  describe ("PASSWORD RECOVERY PAGE LINKS & BUTTONS ARE CLICKABLE", ()=>{
    before(()=> {
      ForgotPasswordPage.openPage()
    });

    it("5.22 Validate that 'I forgot my User Name'  link is clickable",()=> {
      expect(ForgotPasswordPage.forgotUserNameLink).toBeClickable();
    });

    it("5.23 Validate that 'Cancel' button is clickable",()=> {
      expect(ForgotPasswordPage.btnCancel).toBeClickable();
    });

    it("5.24 Validate that 'Continue' button is clickable",()=> {
      expect(ForgotPasswordPage.continueBtn).toBeClickable();
    });

    it("5.25 Validate that 'resend the email.' link is clickable",()=> {
      ForgotPasswordPage.waitAndSetValue(ForgotPasswordPage.userNameField,data.userName)
      ForgotPasswordPage.waitAndClick(ForgotPasswordPage.continueBtn)
      expect(ForgotPasswordPage.resendEmailLink).toBeClickable();
    });
  });

  describe("PASSWORD RECOVERY PAGE ERROR/NON ERROR MESSAGES", ()=>{
    beforeEach(()=>{
      ForgotPasswordPage.openPage()
    })

    it("5.26 Validate that PRP throws an Error message after User click on 'Continue' button with empty user name field",()=> {
      ForgotPasswordPage.continueBtn.click();
      expect(ForgotPasswordPage.usernameFieldError.getText()).toEqual(expected.forgotPassword.userNameFieldError);
    });

    it("5.27 Validate that after User input user name and click on 'Continue' button User should receive a message",()=> {
      ForgotPasswordPage.waitAndSetValue( ForgotPasswordPage.userNameField, data.userName);
      ForgotPasswordPage.continueBtn.click();
      expect(ForgotPasswordPage.emailSentError.getText()).toEqual(expected.forgotPassword.emailSentMessage);
    });
  });

  describe ("PASSWORD RECOVERY PAGE REDIRECTION FUNCTIONALITY", ()=>{
    beforeEach(()=>{
      ForgotPasswordPage.openPage()
    })

    it("5.28 Validate that after clicking on 'I forgot my User Name'  link User redirects to Recover Username Page",()=> {
      ForgotPasswordPage.waitAndClick(ForgotPasswordPage.forgotUserNameLink)
      expect(ForgotUsernamePage.recUsernameTitle2.getText()).toEqual(expected.forgotPassword.titleRecoverUsername);
    });

    it("5.29 Validate that after clicking on 'Cancel' button User redirects to Home Page",()=> {
      ForgotPasswordPage.waitAndClick( ForgotPasswordPage.btnCancel)
      expect(HomePage.title2.getText()).toEqual(expected.forgotPassword.title2text);
    });

    it("5.30 Validate that after clicking on 'Back to Login' button User should be redirected back to Home Page",()=> {
      ForgotPasswordPage.waitAndClick(ForgotPasswordPage.backToLoginBtn)
      expect(HomePage.title2.getText()).toEqual(expected.forgotPassword.title2text);
    });
  })
})