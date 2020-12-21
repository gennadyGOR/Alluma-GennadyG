import ForgotPasswordPage from "../../pages/forgotPassword.page";
const expected = require("../../expected/forgotPassword.json");
import Header from "../../pages/header"
const data = require("../../expected/data.json").input;
import Footer from "../../pages/footer";

describe("PASSWORD RECOVERY PAGE NON FUNCTIONAL", ()=> {

  describe("PASSWORD RECOVERY PAGE ELEMENTS AND THEIR VALUES ARE CORRECT & PRESENT", ()=> {
    before(()=>{
      ForgotPasswordPage.openPage()
    })

    it("5.01 Validate that Header content is displayed correctly on password recovery page",()=> {
      expect(Header.header).toBeDisplayed();
    });

    it("5.02 Validate that Forgot Password form field is present",()=> {
      expect(ForgotPasswordPage.forgotPasswordForm).toBeDisplayed();
    });

    it("5.03 Validate that Title 1 'CONNECTIONS' in PRP form field is present",()=> {
      expect(ForgotPasswordPage.connectionsTitle).toBeDisplayed();
    });

    it("5.04 Validate that Title 1 in PRP form field text is correct",()=> {
      expect(ForgotPasswordPage.connectionsTitle.getText()).toEqual(expected.forgotPassword.connectionsTitle);
    });

    it("5.05 Validate that Title 2 'Forgot Password?' in PRP form field is present",()=> {
      expect(ForgotPasswordPage.forgotPasswordTitle).toBePresent();
    });

    it("5.06 Validate that Title 2 in PRP form field text is correct",()=> {
      expect(ForgotPasswordPage.forgotPasswordTitle.getText()).toEqual(expected.forgotPassword.forgotPasswordTitle);
    });

    it("5.07 Validate that Title 3 'Tell us ....' in PRP form is present",()=> {
      expect(ForgotPasswordPage.tellUsTitle).toBePresent();
    });

    it("5.08 Validate that Title 3 in PRP form text is correct",()=> {
      expect(ForgotPasswordPage.tellUsTitle.getText()).toEqual(expected.forgotPassword.titleTellUs);
    });

    it("5.09 Validate that 'I forgot my User Name' link is present",()=> {
      expect(ForgotPasswordPage.forgotUserNameLink).toBePresent();
    });

    it("5.10 Validate that 'I forgot my User Name' link have correct value",()=> {
      expect(ForgotPasswordPage.forgotUserNameLink.getText()).toEqual(expected.forgotPassword.linkIForgotUserName);
    });

    it("5.11 Validate that User name required label is present",()=> {
      expect(ForgotPasswordPage.userNameLabel).toBePresent();
    });

    it("5.12 Validate that User name field is present",()=> {
      expect(ForgotPasswordPage.userNameField).toBePresent();
    });

    it("5.13 Validate that 'Cancel' button is present",()=> {
      expect(ForgotPasswordPage.btnCancel).toBePresent();
    });

    it("5.14 Validate that 'Cancel' button have correct value",()=> {
      expect(ForgotPasswordPage.labelBtnCancel.getText()).toEqual(expected.forgotPassword.labelBtnCancel);
    });

    it("5.15 Validate that 'Continue' button is present",()=> {
      expect(ForgotPasswordPage.continueBtn).toBePresent();
    });

    it("5.16 Validate that 'Continue' button have correct value",()=> {
      expect(ForgotPasswordPage.continueBtn.getText()).toEqual(expected.forgotPassword.labelBtnContinue);
    });

    it("5.17 Validate that Footer content is displayed correctly on PRP",()=> {
      expect(Footer.footer).toBePresent();
    });
  });

  describe("PASSWORD RECOVERY PAGE EMAIL CONFIRMATION",()=> {
    before(()=> {
      ForgotPasswordPage.openPage()
      ForgotPasswordPage.waitAndSetValue(ForgotPasswordPage.userNameField,data.userName)
      ForgotPasswordPage.waitAndClick(ForgotPasswordPage.continueBtn)
    })

    it("5.18 Validate that 'resend the email.' link is present",()=> {
      expect(ForgotPasswordPage.resendEmailLink.getText()).toEqual(expected.forgotPassword.resendEmailLink);
    });

    it("5.19 Validate that 'Back to Login' button is present",()=> {
      expect(ForgotPasswordPage.backToLoginBtn).toBePresent();
    });

    it("5.20 Validate that 'Back to Login' button have correct value",()=> {
      expect(ForgotPasswordPage.backToLoginBtn.getText()).toEqual(expected.forgotPassword.backToLoginBtn);
    });
  })
})