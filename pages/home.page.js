import BasePage from "./Base.page";

class HomePage extends BasePage{
  
  open() {
    super.open("/");
  }

  get loginForm(){
    return $(".gg-login-form")
  }

  get title1() { return $(".gg-login-form-title1") }
  
  get title2() { return $(".gg-login-form-title2") }

  get title3() { return $(".gg-login-form-title3") }

  get title4() { return $$(".gg-login-form-title1")[1] }
  
  get screenerLink() { return $(".gg-links-text") }
  
  get userNameRequired() { return $(".gg-label-text")}
  
  get userNameField() { return $(".gg-form-input")}
  
  get passwordRequired() { return $$(".gg-label-text")[1]}
  
  get passwordField() { return $$(".gg-form-input")[1]}
  
  get forgotUsernameLink() { return $(".gg-link")}
  
  get forgotPasswordLink() { return $$(".gg-link")[1]}
  
  get logInButton() {return $(".gg-btn")}
  
  get title6() { return $(".gg-login-form-title4") }

  get title7() { return $$(".gg-login-form-title4")[1] }


  

}
export default new HomePage();