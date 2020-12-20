export default class BasePage {

  open(url){
    browser.url(url);
    browser.maximizeWindow();
    browser.deleteAllCookies();
  }

  waitAndClick(selector){
    selector.waitForDisplayed()
    selector.click()
  }
}