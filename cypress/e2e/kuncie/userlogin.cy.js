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
      // cy.wait(6000);
    });
  
    it("Contains Email dan Password Input,and Login Button", () => {
      // check email
      const email = cy.get("#elumine_login_username");
      email.should("be.visible");
      email.should("have.attr", "type", "text");
      email.should("have.attr", "placeholder", "Email");
  
      //check password
      const password = cy.get("input[name='elumine_login_password']");
      password.should("be.visible");
      password.should("have.attr", "type", "password");
      password.should("have.attr", "placeholder", "Password");
  
      //check button
      const button = cy.get("#elumine_login_submit");
      button.should("be.visible");
      button.contains("Masuk");
      button.should("have.attr", "type", "submit");
    });
  
    it.only("Do Login with Correct Value", () => {
      const email = cy.get("#elumine_login_username");
      email.type("nurkhalik92@gmail.com");
  
      const password = cy.get("input[name='elumine_login_password']");
      password.type("Polini12345");
  
      const button = cy.get("#elumine_login_submit");
      button.click();
      cy.wait(6000);
      // cy.url().should("eq", "https://www.kuncie.com/premium");
  
      cy.get(":nth-child(2) > .align-self-center > a > img").click();
    });
  });