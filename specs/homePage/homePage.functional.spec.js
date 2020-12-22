import HomePage from "../../pages/home.page";
import UsernamePage from "../../pages/forgotUsername.page";
import ForgotPasswordPage from "../../pages/forgotPassword.page";
const data = require("../../expected/data.json").input;
const expected = require("../../expected/homePage.json");
  
describe("FUNCTIONALITY OF USERNAME & PASSWORD FIELDS ON HOME PAGE",()=>{
  before(()=>{
    HomePage.open("");
  })

  it("2.31 Validate that User name field accepts Upper case letters", ()=> {
    HomePage.open("");
    HomePage.waitAndSetValue(HomePage.userNameField,data.upperLetters);
    expect(HomePage.userNameField.getValue()).toEqual(data.upperLetters);
  });

  it("2.32 Validate that User name field accepts Lower case letters", ()=> {
    HomePage.waitAndSetValue(HomePage.userNameField,data.lowerLetters);
    expect(HomePage.userNameField.getValue()).toEqual(data.lowerLetters);
  });

  it("2.33 Validate that User name field accepts special characters", ()=> {
    HomePage.waitAndSetValue(HomePage.userNameField,data.specCharacters)
    expect(HomePage.userNameField.getValue()).toEqual(data.specCharacters);
  });

  it("2.34 Validate that User name field accepts numbers", ()=> {
    HomePage.waitAndSetValue(HomePage.userNameField,data.numbers);
    expect(HomePage.userNameField.getValue()).toEqual(data.numbers);
  });

  it("2.35 Validate that User Password field accepts Upper case letters", ()=> {
    HomePage.waitAndSetValue(HomePage.passwordField,data.upperLetters);
    expect(HomePage.passwordField.getValue()).toEqual(data.upperLetters);
  });

  it("2.36 Validate that User Password field accepts Lower case letters", ()=> {
    HomePage.waitAndSetValue(HomePage.passwordField,data.lowerLetters);
    expect(HomePage.passwordField.getValue()).toEqual(data.lowerLetters);
  });

  it("2.37 Validate that User Password field accepts special characters", ()=> {
    HomePage.waitAndSetValue(HomePage.passwordField,data.specCharacters);
    expect(HomePage.passwordField.getValue()).toEqual(data.specCharacters)
  });

  it("2.38 Validate that User Password field accepts numbers", ()=> {
    HomePage.waitAndSetValue(HomePage.passwordField,data.numbers);
    expect(HomePage.passwordField.getValue()).toEqual(data.numbers);
  });


  it("2.39 Validate that Login button is clickable",()=> {
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

  it("2.39 Validate that 'Try our Quick Screener' link is clickable",()=> {
    expect(HomePage.screenerLink).toBeClickable();
  });

  it("2.40 Validate that Forgot User Name link is clickable",()=> {
    expect(HomePage.forgotUsernameLink).toBeClickable();
  });

  it("2.41 Validate that Forgot Password link is clickable",()=> {
    expect(HomePage.forgotPasswordLink).toBeClickable();
  });

  it("2.42 Validate that 'Try our Quick Screener' link redirects User to http://oxcdemo.alluma.org/#/quick/intro",()=> {
    HomePage.waitAndClick(HomePage.screenerLink)
    expect(browser.getUrl()).toEqual(expected.home.quickScreenerURL);
  });

  it("2.43 Validate that Forgot User Name link redirects User to Recover Username page",()=> {
    HomePage.waitAndClick(HomePage.forgotUsernameLink)
    expect(UsernamePage.recUsernameTitle2.getText()).toEqual(expected.home.recoverUserBtnTXT);
  });

  it("2.44 Validate that Forgot Password link redirects User to Forgot Password page",()=> {
    HomePage.waitAndClick(HomePage.forgotPasswordLink)
    expect(ForgotPasswordPage.forgotPasswordTitle.getText()).toEqual(expected.home.forgotPasswordTitle);
  });
});

describe( "ERROR MESSAGES ON HOME PAGE",()=>{
  before(()=>{
    HomePage.open("");
  })

  it("2.45 Validate that Home Page throws an Error message after User click on Log In button with empty username and password fields",()=> {
    HomePage.waitAndClick(HomePage.logInButton)
    expect(HomePage.errorMSG.getText()).toEqual(expected.home.errorMSGNoNameNoPass)
  });

  it("2.46 Validate that Home Page throws an Error message after User click on Log In button with only username value filled up",()=> {
    HomePage.waitAndSetValue(HomePage.userNameField,data.userName);
    HomePage.waitAndClick(HomePage.logInButton);
    expect(HomePage.errorMSG.getText()).toEqual(expected.home.errorPasswordReq);
  });

  it("2.47 Validate that Home Page throws an Error message after User click on Log In button with only password value filled up",()=> {
    HomePage.waitAndSetValue(HomePage.passwordField,data.password)
    HomePage.waitAndClick(HomePage.logInButton)
    expect(HomePage.errorMSG.getText()).toEqual(expected.home.errorUserNameReq)
  });
  afterEach(()=>{
    HomePage.userNameField.clearValue();
    HomePage.passwordField.clearValue();
  });
});


