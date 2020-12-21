import HomePage from "../../pages/home.page";
import ForgotPasswordPage from "../../pages/forgotPassword.page";
import ForgotUsernamePage from "../../pages/forgotUsername.page"
const expected = require("../../helpers/expected.json");
const data = require("../../helpers/data.json").input;


describe("FUNCTIONALITY OF PASSWORD RECOVERY PAGE", ()=> {

  describe ("Password recovery page is clickable", ()=>{
    before(()=> {
      ForgotPasswordPage.openPage()
    });

    it("Validate that 'I forgot my User Name'  link is clickable",()=> {
      expect(ForgotPasswordPage.forgotUserNameLink).toBeClickable();
    });

    it("Validate that 'Cancel' button is clickable",()=> {
      expect(ForgotPasswordPage.btnCancel).toBeClickable();
    });

    it("Validate that 'Continue' button is clickable",()=> {
      expect(ForgotPasswordPage.continueBtn).toBeClickable();
    });

    it("Validate that 'resend the email.' link is clickable",()=> {
      ForgotPasswordPage.waitAndSetValue(ForgotPasswordPage.userNameField,data.userName)
      ForgotPasswordPage.waitAndClick(ForgotPasswordPage.continueBtn)
      expect(ForgotPasswordPage.resendEmailLink).toBeClickable();
    });
  });

  describe("Password recovery page error/non error messages", ()=>{
    beforeEach(()=>{
      ForgotPasswordPage.openPage()
    })

    it("Validate that PRP throws an Error message after User click on 'Continue' button with empty user name field",()=> {
      ForgotPasswordPage.continueBtn.click();
      expect(ForgotPasswordPage.usernameFieldError.getText()).toEqual(expected.forgotPassword.userNameFieldError);
    });

    it("Validate that after User input user name and click on 'Continue' button User should receive a message",()=> {
      ForgotPasswordPage.waitAndSetValue( ForgotPasswordPage.userNameField, data.userName);
      ForgotPasswordPage.continueBtn.click();
      expect(ForgotPasswordPage.emailSentError.getText()).toEqual(expected.forgotPassword.emailSentMessage);
    });
  });

  describe ("Password recovery page redirections", ()=>{
    beforeEach(()=>{
      ForgotPasswordPage.openPage()
    })

    it("Validate that after clicking on 'I forgot my User Name'  link User redirects to Recover Username Page",()=> {
      ForgotPasswordPage.waitAndClick(ForgotPasswordPage.forgotUserNameLink)
      expect(ForgotUsernamePage.recUsernameTitle2.getText()).toEqual(expected.forgotUserName.recUsernameTitle2TXT);
    });

    it("Validate that after clicking on 'Cancel' button User redirects to Home Page",()=> {
      ForgotPasswordPage.waitAndClick( ForgotPasswordPage.btnCancel)
      expect(HomePage.title2.getText()).toEqual(expected.home.title2text);
    });

    it("Validate that after clicking on 'Back to Login' button User should be redirected back to Home Page",()=> {
      ForgotPasswordPage.waitAndClick(ForgotPasswordPage.backToLoginBtn)
      expect(HomePage.title2.getText()).toEqual(expected.home.title2text);
    });
  })
})