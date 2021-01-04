export default class BasePage {

  open(url){
    browser.url(url);
  }

  waitAndClick(selector){
    selector.waitForDisplayed()
    selector.click()
  }

  waitAndGetText(selector){
    selector.waitForDisplayed()
    return selector.getText()
  }

  waitAndSetValue(selector,value){
    selector.waitForDisplayed()
    selector.setValue(value)
  }

  getRedirectedUrl(selector){
    selector.click();
    return browser.getUrl();
  }


}