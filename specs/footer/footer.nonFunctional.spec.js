import Footer from "../../pages/footer";
const expected = require("../../expected/footer.json");

describe("FOOTER ELEMENTS ARE PRESENT AND HAVE CORRECT VALUES", ()=> {
  before(()=>{
    Footer.open("");
  })

  it("3.01 Validate that Footer content is present",()=> {
    expect(Footer.footer).toBeDisplayed();
  });

  it("3.02 Validate that Footer Title 1 'About this site' is present",()=> {
    expect(Footer.aboutTitle).toBeDisplayed();
  });

  it("3.03 Validate that Footer Title 1 text is correct",()=> {
    expect(Footer.aboutTitle.getText()).toEqual(expected.footer.titleAbout);
  });

  it("3.04 Validate that Footer Sub-title  'Site Link 1' is present",()=> {
    expect(Footer.subTitleLink1).toBeDisplayed();
  });

  it("3.05 Validate that Footer Sub-title 'Site Link 1' have correct value",()=> {
    expect(Footer.subTitleLink1.getText()).toEqual(expected.footer.subTitleLink1);
  });

  it("3.06 Validate that Footer Sub-title  'Site Link 2' is present",()=> {
    expect(Footer.subTitleLink2).toBeDisplayed();
  });

  it("3.07 Validate that Footer Sub-title 'Site Link 2' have correct value",()=> {
    expect(Footer.subTitleLink2.getText()).toEqual(expected.footer.subTitleLink2);
  });

  it("3.08 Validate that Footer Title 2 'Get help' is present",()=> {
    expect(Footer.helpTitle).toBePresent();
  });

  it("3.09 Validate that Footer Title 2 'Get help' have correct value",()=> {
    expect(Footer.helpTitle.getText()).toEqual(expected.footer.titleHelp);
  });

  it("3.10 Validate that Footer Sub-title 2.1 '888-888-8888' is present",()=> {
    expect(Footer.subTitlePhoneNumber).toBePresent();
  });

  it("3.11 Validate that Footer Sub-title 2.1 text is correct",()=> {
    expect(Footer.subTitlePhoneNumber.getText()).toEqual(expected.footer.subTitlePhoneNumber);
  });

  it("3.12 Validate that Footer Sub-title 2.2 'Support@email.com' is present",()=> {
    expect(Footer.subTitlePhoneEmail).toBePresent();
  });

  it("3.13 Validate that Footer Sub-title 2.2 'Support@email.com' have correct value",()=> {
    expect(Footer.subTitlePhoneEmail.getText()).toEqual(expected.footer.subTitlePhoneEmail);
  });

  it("3.14 Validate that Footer Sub-title 2.3 'Fax: 777-777-7777' is present",()=> {
    expect(Footer.subTitleFax).toBePresent();
  });

  it("3.15 Validate that Footer Sub-title 2.3 '777-777-7777' have correct value",()=> {
    expect(Footer.subTitleFax.getText()).toEqual(expected.footer.subTitleFax);
  });

  it("3.16 Validate that Footer Title 3 'Stay in touch' is present",()=> {
    expect(Footer.stayInTouchTitle).toBePresent();
  });

  it("3.17 Validate that Footer Title 3 'Stay in touch' is present",()=> {
    expect(Footer.stayInTouchTitle).toBePresent();
  });

  it("3.18 Validate that Footer Title 3 'Stay in touch' have correct value",()=> {
    expect(Footer.stayInTouchTitle.getText()).toEqual(expected.footer.titleStayInTouch);
  });

  it("3.19 Validate that Facebook icon is present",()=> {
    expect(Footer.facebookIcon).toBePresent();
  });

  it("3.20 Validate that Twitter icon is present",()=> {
    expect(Footer.twitterIcon).toBePresent();
  });

  it("3.21 Validate that LinkedIn icon is present",()=> {
    expect(Footer.linkedinIcon).toBePresent();
  });

  it("3.22 Validate that Footer logo 'alluma' is present",()=> {
    expect(Footer.allumaLogo).toBePresent();
  });

  it("3.23 Validate that Footer text 'Copyright 2019' is present",()=> {
    expect(Footer.copyright).toBePresent();
  });

  it("3.24 Validate that Footer text 'Copyright 2019' is correct",()=> {
    expect(Footer.copyright.getText()).toEqual(expected.footer.copyright);
  });

  it("3.25 Validate that Footer text 'Alluma' is present",()=> {
    expect(Footer.allumaLink).toBePresent();
  });

  it("3.26 Validate that Footer text 'Alluma' is correct",()=> {
    expect(Footer.allumaLink.getText()).toEqual(expected.footer.allumaLinkText);
  });

  it("3.27 Validate that Footer text 'Privacy Policy' is present",()=> {
    expect(Footer.privacyPolicy).toBePresent();
  });

  it("3.28 Validate that 'Privacy Policy' link have correct value",()=> {
    expect(Footer.privacyPolicy.getText()).toEqual(expected.footer.privacyPolicy);
  });

  it("3.29 Validate that Footer text 'Non-discrimination Policy' is present",()=> {
    expect(Footer.nDiscriminationPolicy).toBePresent();
  });

  it("3.30 Validate that 'Non-discrimination Policy' link  have correct value",()=> {
    expect(Footer.nDiscriminationPolicy.getText()).toEqual(expected.footer.nDiscriminationPolicy);
  });

  it("3.31 Validate that Footer text 'Terms of Use' is present",()=> {
    expect(Footer.termsOfUse).toBePresent();
  });

  it("3.32 Validate that 'Terms of Use' link have correct value",()=> {
    expect(Footer.termsOfUse.getText()).toEqual(expected.footer.termsOfUse);
  });
})