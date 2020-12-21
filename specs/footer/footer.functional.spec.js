import Footer from "../../pages/footer";
const expected = require("../../helpers/expected.json");

describe(" FOOTER FUNCTIONALITY ", ()=> {

  describe(" LINKS ARE CLICKABLE ", ()=> {
    before(()=>{
      Footer.open("");
    })

    it("Validate that Footer Sub-title 'Site Link 1' should be clickable",()=> {
      expect(Footer.subTitleLink1).toBeClickable()
    });

    it("Validate that Footer Sub-title 'Site Link 2' should be clickable",()=> {
      expect(Footer.subTitleLink2).toBeClickable()
    });

    it("Validate that Footer Sub-title 'Site Link 2' should be clickable",()=> {
      expect(Footer.subTitlePhoneEmail).toBeClickable()
    });

    it("Validate that Facebook icon is clickable",()=> {
      expect(Footer.facebookIcon).toBeClickable()
    });

    it("Validate that Twitter icon is clickable",()=> {
      expect(Footer.twitterIcon).toBeClickable()
    });

    it("Validate that LinkedIn icon is clickable",()=> {
      expect(Footer.linkedinIcon).toBeClickable()
    });

    it("Validate that Footer logo 'alluma' is clickable",()=> {
      expect(Footer.allumaLogo).toBeClickable()
    });

    it("Validate that Footer text 'Alluma' is clickable",()=> {
      expect(Footer.allumaLink).toBeClickable()
    });

    it("Validate that 'Privacy Policy' link is clickable",()=> {
      expect(Footer.privacyPolicy).toBeClickable()
    });

    it("Validate that 'Non-discrimination Policy' link is clickable",()=> {
      expect(Footer.nDiscriminationPolicy).toBeClickable()
    });

    it("Validate that 'Terms of Use'  link is clickable",()=> {
      expect(Footer.termsOfUse).toBeClickable()
    });
  });

  describe(" LINKS ARE WORKING ", ()=> {
    beforeEach(()=>{
      Footer.open("");
      Footer.allumaLogo.waitForDisplayed()
    })

    it("Validate that clicking on Facebook icon redirects User to Alluma Facebook page",()=> {
      expect(Footer.getRedirectedUrl(Footer.facebookIcon)).toEqual(expected.footer.facebookUrl)
    });

    it("Validate that clicking on Twitter icon redirects User to Alluma Twitter page",()=> {
      expect(Footer.getRedirectedUrl(Footer.twitterIcon)).toEqual(expected.footer.twitterUrl)
    });

    it("Validate that clicking on LinkedIn icon redirects User to Alluma LinkedIn page",()=> {
      expect(Footer.linkedinHref.getAttribute("href")).toEqual(expected.footer.linkedinUrl)
    });

    it("Validate that clicking on Footer logo 'alluma'  redirects User to Alluma website https://www.alluma.org/",()=> {
      expect(Footer.getRedirectedUrl(Footer.allumaLogo)).toEqual(expected.footer.allumaUrl)
    });

    it("Validate that clicking on Footer text 'Alluma' redirects User to Alluma website https://www.alluma.org/",()=> {
      expect(Footer.getRedirectedUrl(Footer.allumaLink)).toEqual(expected.footer.allumaUrl)
    });
  })
})