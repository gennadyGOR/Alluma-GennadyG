import Header from "../pages/header"
const header = require("../data/expected.json").header;

describe("HEADER",()=>{
  before(()=>{
    Header.open("/");
  })

  it("Validate that header is present",()=> {
    expect (Header.header).toBeDisplayed()
  });

  it("Validate that header title have correct value",()=> {
    expect(Header.headerTitle.getText()).toEqual(header.headerTitle)
  });
})