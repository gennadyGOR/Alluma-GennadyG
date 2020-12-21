import BasePage from "./Base.page";
import HomePage from "../pages/home.page";
class ForgotUsernamePage extends BasePage{

  get recUserNameField() { return $(".gg-login-form") }

  get recUsernameTitle1() { return $(".gg-login-form-title1") }

  get recUsernameTitle2() { return $(".gg-login-form-title2") }

  get emailRequiredLabel() { return $(".gg-label-text") }

  get emailPlaceholder() { return $(".gg-form-input") }

  get forgotPassLink() { return $(".gg-link") }

  get backToLogInBTN() { return $(".gg-btn") }

  get recoverUserBTN() { return $$(".gg-btn")[1] }

  get emailSentMSG() { return $$(".gg-login-form-title1")[1] }

  get errorMSG() { return $(".validation-summary-errors") }

  openPage(){
    HomePage.open("")
    HomePage.forgotUsernameLink.click()
  }

}
export default new ForgotUsernamePage();