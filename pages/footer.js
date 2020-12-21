import BasePage from "./Base.page";
class Footer extends BasePage{

  get footer() { return $(".gg-footer") };

  get aboutTitle() { return $(".gg-footer-hdr1") };

  get subTitleLink1() { return $(".gg-footer-link1") };

  get subTitleLink2() { return $(".gg-footer-link2") };

  get helpTitle() { return $(".gg-footer-hdr2") };

  get subTitlePhoneNumber() { return $(".gg-footer-link3") }

  get subTitlePhoneEmail() { return $(".gg-footer-link4") }

  get subTitleFax() { return $(".gg-footer-link5") }

  get stayInTouchTitle() { return $(".gg-footer-hdr3") };

  get facebookIcon() { return $(".gg-link-icon1") };

  get twitterIcon() { return $(".gg-link-icon2") };

  get linkedinIcon() { return $(".gg-link-icon3") };

  get linkedinHref() { return $$(".gg-footer-link-a")[5] };

  get allumaLogo() { return $(".gg-footer-cc-img") };

  get copyright() { return  $(".gg-footer-cc-text span") };

  get allumaLink() { return $$(".gg-footer-link4")[1] };

  get privacyPolicy() { return $$(".gg-footer-link-a")[9] };

  get nDiscriminationPolicy() { return $$(".gg-footer-link-a")[10] };

  get termsOfUse() { return $$(".gg-footer-link-a")[11] };
}
export default new Footer();