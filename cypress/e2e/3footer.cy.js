/// <reference types="cypress" />

let visualWait = 0;

describe("Acessar HomePage", () => {
  beforeEach(() => {
    cy.visitVood();
    cy.wait(visualWait);
  });
  it("Teste Home Page", () => {
    cy.get("#titleHome").contains("Gaming Beyond Heights");
    cy.wait(visualWait);
    /* Pages */
    cy.get("#gamesFooter").contains("Games").click();
    cy.get("#orbitFooter").contains("Orb It").click();
    cy.get("#teamFooter").contains("Team").click();
    cy.get("#aboutUsFooter").contains("About Us").click();
    cy.get("#biggerFontFooter").contains("BIGGER FONT").click();
    /* Socials */
    cy.get("#twitterFooter");
    cy.get("#appleStoreFooter");
    cy.get("#googlePlayFooter");
    cy.get("#termsFooter");
    cy.get("#privacyFooter");
    /*  */
  });
});
