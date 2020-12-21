import Footer from "../../pages/footer";
const expected = require("../../expected/footer.json");

describe(" FOOTER FUNCTIONALITY ", ()=> {

  describe(" LINKS ARE CLICKABLE IN FOOTER ", ()=> {
    before(()=>{
      Footer.open("");
    })

    it("3.32 Validate that Footer Sub-title 'Site Link 1' should be clickable",()=> {
      expect(Footer.subTitleLink1).toBeClickable()
    });

    it("3.33 Validate that Footer Sub-title 'Site Link 2' should be clickable",()=> {
      expect(Footer.subTitleLink2).toBeClickable()
    });

    it("3.34 Validate that Footer Sub-title 'Site Link 2' should be clickable",()=> {
      expect(Footer.subTitlePhoneEmail).toBeClickable()
    });

    it("3.35 Validate that Facebook icon is clickable",()=> {
      expect(Footer.facebookIcon).toBeClickable()
    });

    it("3.36 Validate that Twitter icon is clickable",()=> {
      expect(Footer.twitterIcon).toBeClickable()
    });

    it("3.37 Validate that LinkedIn icon is clickable",()=> {
      expect(Footer.linkedinIcon).toBeClickable()
    });

    it("3.38 Validate that Footer logo 'alluma' is clickable",()=> {
      expect(Footer.allumaLogo).toBeClickable()
    });

    it("3.39 Validate that Footer text 'Alluma' is clickable",()=> {
      expect(Footer.allumaLink).toBeClickable()
    });

    it("3.40 Validate that 'Privacy Policy' link is clickable",()=> {
      expect(Footer.privacyPolicy).toBeClickable()
    });

    it("3.41 Validate that 'Non-discrimination Policy' link is clickable",()=> {
      expect(Footer.nDiscriminationPolicy).toBeClickable()
    });

    it("3.42 Validate that 'Terms of Use'  link is clickable",()=> {
      expect(Footer.termsOfUse).toBeClickable()
    });
  });

  describe(" LINKS REDIRECTION IN FOOTER ", ()=> {
    beforeEach(()=>{
      Footer.open("");
      Footer.allumaLogo.waitForDisplayed()
    })

    it("3.43 Validate that clicking on Facebook icon redirects User to Facebook page",()=> {
      expect(Footer.getRedirectedUrl(Footer.facebookIcon)).toEqual(expected.footer.facebookUrl)
    });

    it("3.44 Validate that clicking on Twitter icon redirects User to Twitter page",()=> {
      expect(Footer.getRedirectedUrl(Footer.twitterIcon)).toEqual(expected.footer.twitterUrl)
    });

    it("3.45 Validate that clicking on LinkedIn icon redirects User to LinkedIn page",()=> {
      expect(Footer.linkedinHref.getAttribute("href")).toEqual(expected.footer.linkedinUrl)
    });

    it("3.46 Validate that clicking on Footer logo 'alluma'  redirects User to Alluma website https://www.alluma.org/",()=> {
      expect(Footer.getRedirectedUrl(Footer.allumaLogo)).toEqual(expected.footer.allumaUrl)
    });

    it("3.47 Validate that clicking on Footer link 'Alluma' redirects User to Alluma website https://www.alluma.org/",()=> {
      expect(Footer.getRedirectedUrl(Footer.allumaLink)).toEqual(expected.footer.allumaUrl)
    });
  })
})