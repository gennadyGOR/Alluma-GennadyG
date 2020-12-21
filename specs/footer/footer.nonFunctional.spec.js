import Footer from "../../pages/footer";
const expected = require("../../helpers/expected.json");

describe("FOOTER ELEMENTS ARE PRESENT AND HAVE CORRECT VALUES", ()=> {
  before(()=>{
    Footer.open("");
  })

  it("Validate that Footer content is present",()=> {
    expect(Footer.footer).toBeDisplayed();
  });
  it("Validate that Footer Title 1 'About this site' is present",()=> {
    expect(Footer.aboutTitle).toBeDisplayed();
  });
  it("Validate that Footer Title 1 text is correct",()=> {
    expect(Footer.aboutTitle.getText()).toEqual(expected.footer.titleAbout);
  });
  it("Validate that Footer Sub-title  'Site Link 1' is present",()=> {
    expect(Footer.subTitleLink1).toBeDisplayed();
  });
  it("Validate that Footer Sub-title 'Site Link 1' have correct value",()=> {
    expect(Footer.subTitleLink1.getText()).toEqual(expected.footer.subTitleLink1);
  });
  it("Validate that Footer Sub-title  'Site Link 2' is present",()=> {
    expect(Footer.subTitleLink2).toBeDisplayed();
  });
  it("Validate that Footer Sub-title 'Site Link 2' have correct value",()=> {
    expect(Footer.subTitleLink2.getText()).toEqual(expected.footer.subTitleLink2);
  });
  it("Validate that Footer Title 2 'Get help' is present",()=> {
    expect(Footer.helpTitle).toBePresent();
  });
  it("Validate that Footer Title 2 'Get help' have correct value",()=> {
    expect(Footer.helpTitle.getText()).toEqual(expected.footer.titleHelp);
  });
  it("Validate that Footer Sub-title 2.1 '888-888-8888' is present",()=> {
    expect(Footer.subTitlePhoneNumber).toBePresent();
  });
  it("Validate that Footer Sub-title 2.1 text is correct",()=> {
    expect(Footer.subTitlePhoneNumber.getText()).toEqual(expected.footer.subTitlePhoneNumber);
  });
  it("Validate that Footer Sub-title 2.2 'Support@email.com' is present",()=> {
    expect(Footer.subTitlePhoneEmail).toBePresent();
  });
  it("Validate that Footer Sub-title 2.2 'Support@email.com' have correct value",()=> {
    expect(Footer.subTitlePhoneEmail.getText()).toEqual(expected.footer.subTitlePhoneEmail);
  });
  it("Validate that Footer Sub-title 2.3 'Fax: 777-777-7777' is present",()=> {
    expect(Footer.subTitleFax).toBePresent();
  });
  it("Validate that Footer Sub-title 2.3 '777-777-7777' have correct value",()=> {
    expect(Footer.subTitleFax.getText()).toEqual(expected.footer.subTitleFax);
  });
  it("Validate that Footer Title 3 'Stay in touch' is present",()=> {
    expect(Footer.stayInTouchTitle).toBePresent();
  });
  it("Validate that Footer Title 3 'Stay in touch' is present",()=> {
    expect(Footer.stayInTouchTitle).toBePresent();
  });
  it("Validate that Footer Title 3 'Stay in touch' have correct value",()=> {
    expect(Footer.stayInTouchTitle.getText()).toEqual(expected.footer.titleStayInTouch);
  });
  it("Validate that Facebook icon is present",()=> {
    expect(Footer.facebookIcon).toBePresent();
  });
  it("Validate that Twitter icon is present",()=> {
    expect(Footer.twitterIcon).toBePresent();
  });
  it("Validate that LinkedIn icon is present",()=> {
    expect(Footer.linkedinIcon).toBePresent();
  });
  it("Validate that Footer logo 'alluma' is present",()=> {
    expect(Footer.allumaLogo).toBePresent();
  });
  it("Validate that Footer text 'Copyright 2019' is present",()=> {
    expect(Footer.copyright).toBePresent();
  });
  it("Validate that Footer text 'Copyright 2019' is correct",()=> {
    expect(Footer.copyright.getText()).toEqual(expected.footer.copyright);
  });
  it("Validate that Footer text 'Alluma' is present",()=> {
    expect(Footer.allumaLink).toBePresent();
  });
  it("Validate that Footer text 'Alluma' is correct",()=> {
    expect(Footer.allumaLink.getText()).toEqual(expected.footer.allumaLinkText);
  });
  it("Validate that Footer text 'Privacy Policy' is present",()=> {
    expect(Footer.privacyPolicy).toBePresent();
  });
  it("Validate that 'Privacy Policy' link have correct value",()=> {
    expect(Footer.privacyPolicy.getText()).toEqual(expected.footer.privacyPolicy);
  });
  it("Validate that Footer text 'Non-discrimination Policy' is present",()=> {
    expect(Footer.nDiscriminationPolicy).toBePresent();
  });
  it("Validate that 'Non-discrimination Policy' link  have correct value",()=> {
    expect(Footer.nDiscriminationPolicy.getText()).toEqual(expected.footer.nDiscriminationPolicy);
  });
  it("Validate that Footer text 'Terms of Use' is present",()=> {
    expect(Footer.termsOfUse).toBePresent();
  });
  it("Validate that 'Terms of Use' link have correct value",()=> {
    expect(Footer.termsOfUse.getText()).toEqual(expected.footer.termsOfUse);
  });
})