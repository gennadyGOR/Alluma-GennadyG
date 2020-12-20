import BasePage from "./Base.page";

class Header extends BasePage{

  get header() {
    return $(".gg-header")
  }

  get headerTitle() {
    return $(".gg-header-title");
  }
}
export default new Header();