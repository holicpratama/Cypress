describe("Home dashbord kuncie", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://www.kuncie.com/premium/login/");
    cy.wait(6000);
  });

  it("Makesure url link Kuncie premium", () => {
    cy.url().should("eq", "https://www.kuncie.com/premium/login/");
    cy.wait(6000);
  });

  it("Button Phone Number", () => {
    //check button Masuk dengan phone number
    const button = cy.get(".font-weight-bold");
    button.should("be.visible");
    button.contains("Masuk dengan nomor HP");
  });

  it("enter phoene number", () => {
    const button = cy.get(".font-weight-bold");
    button.click();
    const number = cy.get("form > :nth-child(1) > .font-roboto");
    number.should("be.visible");
    number.should("have.attr", "type", "number");
    cy.wait(6000);
  });

  it.only("Button Phone Number", () => {
    const button = cy.get(".font-weight-bold");
    button.click();
    const number = cy.get("form > :nth-child(1) > .font-roboto");
    number.type("6282251111157");

    cy.get('.kuncie-btn-login').click()
  });

});