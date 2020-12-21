import HomePage from "../../pages/home.page";
import UsernamePage from "../../pages/forgotUsername.page";
import ForgotPasswordPage from "../../pages/forgotPassword.page";
const data = require("../../helpers/data.json").input;
const expected = require("../../helpers/expected.json");
  
describe("FUNCTIONALITY OF USERNAME & PASSWORD FIELDS ON HOME PAGE",()=>{
  before(()=>{
    HomePage.open("");
  })

  it("Validate that User name field accepts Upper case letters", ()=> {
    HomePage.open("");
    HomePage.waitAndSetValue(HomePage.userNameField,data.upperLetters);
    expect(HomePage.userNameField.getValue()).toEqual(data.upperLetters);
  });

  it("Validate that User name field accepts Lower case letters", ()=> {
    HomePage.waitAndSetValue(HomePage.userNameField,data.lowerLetters);
    expect(HomePage.userNameField.getValue()).toEqual(data.lowerLetters);
  });

  it("Validate that User name field accepts special characters", ()=> {
    HomePage.waitAndSetValue(HomePage.userNameField,data.specCharacters)
    expect(HomePage.userNameField.getValue()).toEqual(data.specCharacters);
  });

  it("Validate that User name field accepts numbers", ()=> {
    HomePage.waitAndSetValue(HomePage.userNameField,data.numbers);
    expect(HomePage.userNameField.getValue()).toEqual(data.numbers);
  });

  it("Validate that User Password field accepts Upper case letters", ()=> {
    HomePage.waitAndSetValue(HomePage.passwordField,data.upperLetters);
    expect(HomePage.passwordField.getValue()).toEqual(data.upperLetters);
  });

  it("Validate that User Password field accepts Lower case letters", ()=> {
    HomePage.waitAndSetValue(HomePage.passwordField,data.lowerLetters);
    expect(HomePage.passwordField.getValue()).toEqual(data.lowerLetters);
  });

  it("Validate that User Password field accepts special characters", ()=> {
    HomePage.waitAndSetValue(HomePage.passwordField,data.specCharacters);
    expect(HomePage.passwordField.getValue()).toEqual(data.specCharacters)
  });

  it("Validate that User Password field accepts numbers", ()=> {
    HomePage.waitAndSetValue(HomePage.passwordField,data.numbers);
    expect(HomePage.passwordField.getValue()).toEqual(data.numbers);
  });


  it("Validate that Login button is clickable",()=> {
    expect(HomePage.logInButton).toBeClickable();
  });

  afterEach(()=>{
    HomePage.userNameField.clearValue();
    HomePage.passwordField.clearValue();
  })
});

describe("FUNCTIONALITY OF LINKS ON HOME PAGE",()=> {
  beforeEach(()=>{
    HomePage.open("");
    HomePage.logInButton.waitForDisplayed();
  })

  it("Validate that 'Try our Quick Screener' link is clickable",()=> {
    expect(HomePage.screenerLink).toBeClickable();
  });

  it("Validate that Forgot User Name link is clickable",()=> {
    expect(HomePage.forgotUsernameLink).toBeClickable();
  });

  it("Validate that Forgot Password link is clickable",()=> {
    expect(HomePage.forgotPasswordLink).toBeClickable();
  });

  it("Validate that 'Try our Quick Screener' link redirects User to http://oxcdemo.alluma.org/#/quick/intro",()=> {
    HomePage.waitAndClick(HomePage.screenerLink)
    expect(browser.getUrl()).toEqual(expected.home.quickScreenerURL);
  });

  it("Validate that Forgot User Name link redirects User to Recover Username page",()=> {
    HomePage.waitAndClick(HomePage.forgotUsernameLink)
    expect(UsernamePage.recUsernameTitle2.getText()).toEqual(expected.forgotUserName.recUsernameTitle2TXT);
  });

  it("Validate that Forgot Password link redirects User to Forgot Password page",()=> {
    HomePage.waitAndClick(HomePage.forgotPasswordLink)
    expect(ForgotPasswordPage.forgotPasswordTitle.getText()).toEqual(expected.forgotPassword.forgotPasswordTitle);
  });
});

describe( "ERROR MESSAGES ON HOME PAGE",()=>{
  before(()=>{
    HomePage.open("");
  })

  it("Validate that Home Page throws an Error message after User click on Log In button with empty username and password fields",()=> {
    HomePage.waitAndClick(HomePage.logInButton)
    expect(HomePage.errorMSG.getText()).toEqual(expected.home.errorMSGNoNameNoPass)
  });

  it("Validate that Home Page throws an Error message after User click on Log In button with only username value filled up",()=> {
    HomePage.waitAndSetValue(HomePage.userNameField,data.userName);
    HomePage.waitAndClick(HomePage.logInButton);
    expect(HomePage.errorMSG.getText()).toEqual(expected.home.errorPasswordReq);
  });

  it("Validate that Home Page throws an Error message after User click on Log In button with only password value filled up",()=> {
    HomePage.waitAndSetValue(HomePage.passwordField,data.password)
    HomePage.waitAndClick(HomePage.logInButton)
    expect(HomePage.errorMSG.getText()).toEqual(expected.home.errorUserNameReq)
  });
  afterEach(()=>{
    HomePage.userNameField.clearValue();
    HomePage.passwordField.clearValue();
  });
});


