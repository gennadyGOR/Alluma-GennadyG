import UsernamePage from "../../pages/forgotUsername.page";
import HomePage from "../../pages/home.page";
import ForgotPasswordPage from "../../pages/forgotPassword.page";
const expected = require("../../expected/forgotUsername.json");
const data = require("../../expected/data.json").input;
 
describe("FUNCTIONALITY OF LINKS & BUTTONS ON FORGOT USERNAME PAGE",()=>{
  beforeEach(()=>{
    UsernamePage.openPage()
  });

  it("4.17 Validate that 'I forgot my Password'  link is clickable",()=> {
    expect(UsernamePage.forgotPassLink).toBeClickable()
  });

  it("4.18 Validate that after clicking on 'I forgot my Password' link User redirects to Password Recovery page",()=>{
    UsernamePage.waitAndClick(UsernamePage.forgotPassLink)
    expect(ForgotPasswordPage.forgotPasswordTitle.getText()).toEqual(expected.forgotUserName.forgotPasswordTitle)
  })

  it("4.19 Validate that 'Back to Login' button is clickable",()=> {
    expect(UsernamePage.backToLogInBTN).toBeClickable()
  });

  it("4.20 Validate that after clicking on  'Back to Login' button User redirects to Home Page",()=>{
    UsernamePage.waitAndClick(UsernamePage.backToLogInBTN)
    expect(HomePage.title2.getText()).toEqual(expected.forgotUserName.title2text)
  })

  it("4.21 Validate that 'Recover Username' button is clickable",()=> {
    expect(UsernamePage.recoverUserBTN).toBeClickable()
  });


  it("4.22 Validate that after User enters his email and clicks 'Recover Username' button URP should display a message",()=> {
    UsernamePage.waitAndSetValue(UsernamePage.emailPlaceholder,data.email)
    UsernamePage.waitAndClick(UsernamePage.recoverUserBTN)
    expect(UsernamePage.waitAndGetText(UsernamePage.emailSentMSG)).toEqual(expected.forgotUserName.emailSentMsg)
  });

  it("4.23 Validate that URP throws an Error message after User click on Recover Username button with empty email field",()=> {
    UsernamePage.waitAndClick(UsernamePage.recoverUserBTN)
    expect(UsernamePage.waitAndGetText(UsernamePage.errorMSG)).toEqual(expected.forgotUserName.errorMsgTXT)
  });


})
  

