import UsernamePage from "../../pages/forgotUsername.page";
import Header from "../../pages/header";
import Footer from "../../pages/footer";
const expected = require("../../expected/forgotUsername.json");

describe("FORGOT USERNAME PAGE",()=>{
  before(()=>{
    UsernamePage.openPage()
  })

  describe("FORGOT USERNAME PAGE ELEMENTS ARE PRESENT AND HAVE CORRECT VALUES",()=> {

    it("4.01 Validate that Header content is displayed correctly on URP", () => {
      expect(Header.header).toBeDisplayed()
    });

    it("4.02 Validate that Recover Username form field is present", () => {
      expect(UsernamePage.recUserNameField).toBeDisplayed()
    });

    it("4.03 Validate that Title 1 'CONNECTIONS' in URP form field is present", () => {
      expect(UsernamePage.recUsernameTitle1).toBeDisplayed()
    });

    it("4.04 Validate that Title 1 in URP form field text is correct", () => {
      expect(UsernamePage.recUsernameTitle1.getText()).toEqual(expected.forgotUserName.recUsernameTitle1TXT)
    });

    it("4.05 Validate that Title 2 'Recover Username' in URP form field is present", () => {
      expect(UsernamePage.recUsernameTitle2).toBeDisplayed()
    });

    it("4.06 Validate that Title 2 in URP form field text is correct", () => {
      expect(UsernamePage.recUsernameTitle2.getText()).toEqual(expected.forgotUserName.recUsernameTitle2TXT)
    });

    it("4.07 Validate that Email required label is present", () => {
      expect(UsernamePage.emailRequiredLabel).toBeDisplayed()
    });

    it("4.08 Validate that Email required label have correct value", () => {
      expect(UsernamePage.emailRequiredLabel.getText()).toEqual(expected.forgotUserName.emailRequiredTXT)
    });

    it("4.09 Validate that Email placeholder is present", () => {
      expect(UsernamePage.emailPlaceholder).toBeDisplayed()
    });

    it("4.10 Validate that 'I forgot my Password' link is present", () => {
      expect(UsernamePage.forgotPassLink).toBeDisplayed()
    });

    it("4.11 Validate that 'I forgot my Password' link have correct value", () => {
      expect(UsernamePage.forgotPassLink.getText()).toEqual(expected.forgotUserName.forgotPassTXT)
    });

    it("4.12 Validate that 'Back to Login' button is present", () => {
      expect(UsernamePage.backToLogInBTN).toBeDisplayed()
    });

    it("4.13 Validate that 'Back to Login' button have correct value", () => {
      expect(UsernamePage.backToLogInBTN.getText()).toEqual(expected.forgotUserName.backToLogInBtnTXT)
    });

    it("4.14 Validate that 'Recover Username' button is present", () => {
      expect(UsernamePage.recoverUserBTN).toBeDisplayed()
    });

    it("4.15 Validate that 'Recover Username' button have correct value", () => {
      expect(UsernamePage.recoverUserBTN.getText()).toEqual(expected.forgotUserName.recoverUserBtnTXT)
    });

    it("4.16 Validate that Footer is displayed on User Name Recovery Page", () => {
      expect(Footer.footer).toBeDisplayed()
    });
  });
})