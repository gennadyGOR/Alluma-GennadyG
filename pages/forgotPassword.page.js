import BasePage from "./Base.page";
class ForgotPasswordPage extends BasePage{

  get forgotPasswordForm() { return $(".gg-login-form") };

  get connectionsTitle() { return $(".gg-login-form-title1") };

  get forgotPasswordTitle() { return $(".gg-login-form-title2") };

  get tellUsTitle() { return $(".gg-forgotpwd-msg1") };

  get forgotUserNameLink() { return $(".gg-link") };

  get recoverUsernameTitle() { return $(".gg-login-form-title2") };

  get userNameLabel() { return $(".gg-label-text") };

  get userNameField() { return $("#Username") };

  get btnCancel() { return $$(".gg-btn")[0] };

  get labelBtnCancel() { return $(".btn-label-cancel") };

  get title2() { return $(".gg-login-form-title2") };

  get continueBtn() { return $$(".gg-btn")[1] };

  get usernameFieldError() { return $(".validation-summary-errors") };

  get emailSentError() { return $(".gg-forgotpwd-msg2") };

  get resendEmailLink() { return $(".gg-button-as-link") };

  get backToLoginBtn() { return $(".gg-btn")};

  get forgotPasswordLink() { return $(".gg-link") };

  openPage() {
    super.open("")
    this.forgotUserNameLink.click()
    this.forgotPasswordLink.click()
  };
};
export default new ForgotPasswordPage();