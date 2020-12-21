import Header from "../../pages/header"
const expected = require("../../expected/header.json")

describe("HEADER",()=>{
  before(()=>{
    Header.open("");
  })

  it("1.01 Validate that header is present",()=> {
    expect (Header.header).toBeDisplayed()
  });

  it("1.02 Validate that header title have correct value",()=> {
    expect(Header.headerTitle.getText()).toEqual(expected.header.headerTitle)
  });
});