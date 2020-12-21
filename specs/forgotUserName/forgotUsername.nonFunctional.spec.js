import UsernamePage from "../../pages/forgotUsername.page";
import Header from "../../pages/header";
import Footer from "../../pages/footer";
const expected = require("../../helpers/expected.json");

describe("FORGOT USERNAME PAGE",()=>{
  before(()=>{
    UsernamePage.openPage()
  })

  describe("FORGOT USERNAME PAGE ELEMENTS ARE PRESENT AND HAVE CORRECT VALUES",()=> {

    it("Validate that Header content is displayed correctly on URP", () => {
      expect(Header.header).toBeDisplayed()
    });

    it("Validate that Recover Username form field is present", () => {
      expect(UsernamePage.recUserNameField).toBeDisplayed()
    });

    it("Validate that Title 1 'CONNECTIONS' in URP form field is present", () => {
      expect(UsernamePage.recUsernameTitle1).toBeDisplayed()
    });

    it("Validate that Title 1 in URP form field text is correct", () => {
      expect(UsernamePage.recUsernameTitle1.getText()).toEqual(expected.forgotUserName.recUsernameTitle1TXT)
    });

    it("Validate that Title 2 'Recover Username' in URP form field is present", () => {
      expect(UsernamePage.recUsernameTitle2).toBeDisplayed()
    });

    it("Validate that Title 2 in URP form field text is correct", () => {
      expect(UsernamePage.recUsernameTitle2.getText()).toEqual(expected.forgotUserName.recUsernameTitle2TXT)
    });

    it("Validate that Email required label is present", () => {
      expect(UsernamePage.emailRequiredLabel).toBeDisplayed()
    });

    it("Validate that Email required label have correct value", () => {
      expect(UsernamePage.emailRequiredLabel.getText()).toEqual(expected.forgotUserName.emailRequiredTXT)
    });

    it("Validate that Email placeholder is present", () => {
      expect(UsernamePage.emailPlaceholder).toBeDisplayed()
    });

    it("Validate that 'I forgot my Password' link is present", () => {
      expect(UsernamePage.forgotPassLink).toBeDisplayed()
    });

    it("Validate that 'I forgot my Password' link have correct value", () => {
      expect(UsernamePage.forgotPassLink.getText()).toEqual(expected.forgotUserName.forgotPassTXT)
    });

    it("Validate that 'Back to Login' button is present", () => {
      expect(UsernamePage.backToLogInBTN).toBeDisplayed()
    });

    it("Validate that 'Back to Login' button have correct value", () => {
      expect(UsernamePage.backToLogInBTN.getText()).toEqual(expected.forgotUserName.backToLogInBtnTXT)
    });

    it("Validate that 'Recover Username' button is present", () => {
      expect(UsernamePage.recoverUserBTN).toBeDisplayed()
    });

    it("Validate that 'Recover Username' button have correct value", () => {
      expect(UsernamePage.recoverUserBTN.getText()).toEqual(expected.forgotUserName.recoverUserBtnTXT)
    });

    it("Validate that Footer is displayed on User Name Recovery Page", () => {
      expect(Footer.footer).toBeDisplayed()
    });
  });
})