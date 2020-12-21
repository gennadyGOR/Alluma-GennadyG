import ForgotPasswordPage from "../../pages/forgotPassword.page";
const expected = require("../../helpers/expected.json");
import Header from "../../pages/header"
const data = require("../../helpers/data.json").input;
import Footer from "../../pages/footer";

describe("PASSWORD RECOVERY PAGE (PRP) NON FUNCTIONAL", ()=> {

  describe("Password recovery page -> text and elements correct/is present", ()=> {
    before(()=>{
      ForgotPasswordPage.openPage()
    })

    it("Validate that Header content is displayed correctly on PRP",()=> {
      expect(Header.header).toBeDisplayed();
    });

    it("Validate that Forgot Password form field is present",()=> {
      expect(ForgotPasswordPage.forgotPasswordForm).toBeDisplayed();
    });

    it("Validate that Title 1 'CONNECTIONS' in PRP form field is present",()=> {
      expect(ForgotPasswordPage.connectionsTitle).toBeDisplayed();
    });

    it("Validate that Title 1 in PRP form field text is correct",()=> {
      expect(ForgotPasswordPage.connectionsTitle.getText()).toEqual(expected.forgotPassword.connectionsTitle);
    });

    it("Validate that Title 2 'Forgot Password?' in PRP form field is present",()=> {
      expect(ForgotPasswordPage.forgotPasswordTitle).toBePresent();
    });

    it("Validate that Title 2 in PRP form field text is correct",()=> {
      expect(ForgotPasswordPage.forgotPasswordTitle.getText()).toEqual(expected.forgotPassword.forgotPasswordTitle);
    });

    it("Validate that Title 3 'Tell us ....' in PRP form is present",()=> {
      expect(ForgotPasswordPage.tellUsTitle).toBePresent();
    });

    it("Validate that Title 3 in PRP form text is correct",()=> {
      expect(ForgotPasswordPage.tellUsTitle.getText()).toEqual(expected.forgotPassword.titleTellUs);
    });

    it("Validate that 'I forgot my User Name' link is present",()=> {
      expect(ForgotPasswordPage.forgotUserNameLink).toBePresent();
    });

    it("Validate that 'I forgot my User Name' link have correct value",()=> {
      expect(ForgotPasswordPage.forgotUserNameLink.getText()).toEqual(expected.forgotPassword.linkIForgotUserName);
    });

    it("Validate that User name required label is present",()=> {
      expect(ForgotPasswordPage.userNameLabel).toBePresent();
    });

    it("Validate that User name field is present",()=> {
      expect(ForgotPasswordPage.userNameField).toBePresent();
    });

    it("Validate that 'Cancel' button is present",()=> {
      expect(ForgotPasswordPage.btnCancel).toBePresent();
    });

    it("Validate that 'Cancel' button have correct value",()=> {
      expect(ForgotPasswordPage.labelBtnCancel.getText()).toEqual(expected.forgotPassword.labelBtnCancel);
    });

    it("Validate that 'Continue' button is present",()=> {
      expect(ForgotPasswordPage.continueBtn).toBePresent();
    });

    it("Validate that 'Continue' button have correct value",()=> {
      expect(ForgotPasswordPage.continueBtn.getText()).toEqual(expected.forgotPassword.labelBtnContinue);
    });

    it("Validate that Footer content is displayed correctly on PRP",()=> {
      expect(Footer.footer).toBePresent();
    });
  });

  describe("Password recovery -> Email sent page",()=> {
    before(()=> {
      ForgotPasswordPage.openPage()
      ForgotPasswordPage.waitAndSetValue(ForgotPasswordPage.userNameField,data.userName)
      ForgotPasswordPage.waitAndClick(ForgotPasswordPage.continueBtn)
    })
    it("Validate that 'resend the email.' link is present",()=> {
      expect(ForgotPasswordPage.resendEmailLink.getText()).toEqual(expected.forgotPassword.resendEmailLink);
    });
    it("Validate that 'Back to Login' button is present",()=> {
      expect(ForgotPasswordPage.backToLoginBtn).toBePresent();
    });
    it("Validate that 'Back to Login' button have correct value",()=> {
      expect(ForgotPasswordPage.backToLoginBtn.getText()).toEqual(expected.forgotPassword.backToLoginBtn);
    });
  })
})