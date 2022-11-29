/// <reference types="cypress" />

let visualWait = 0;

describe("Acessar HomePage", () => {
  beforeEach(() => {
    cy.visitVood("localhost");
    cy.wait(visualWait);
  });
  it("Teste Home Page", () => {
    cy.get("#titleHome").contains("Gaming Beyond Heights");
    cy.wait(visualWait);
    /* Pages */
    cy.get("#gamesHeader")
      .contains("Games")
      .click()
      .url()
      .should("include", "/games");
    cy.wait(visualWait);
    cy.get("#teamHeader")
      .contains("Team")
      .click()
      .url()
      .should("include", "/devs");
    cy.wait(visualWait);
    cy.get("#aboutUsHeader")
      .contains("About Us")
      .click()
      .url()
      .should("include", "/aboutus");
    cy.wait(visualWait);
  });
});
