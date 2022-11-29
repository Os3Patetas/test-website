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
    /* Main */
    cy.get("#logoHeader").click();
    cy.wait(visualWait);
    cy.get("#artGamesHome").first().contains("The Art Of Creating Games");
    cy.wait(visualWait);
    cy.get("#passionateHome").contains("Passionate Team");
    cy.wait(visualWait);
    cy.get("#funHome").last().contains("We Build 4Fun Games");
    cy.wait(visualWait);
    cy.get("#artGamesHome").contains("The Art Of Creating Games");
    cy.get("#passionateHome").contains("Passionate Team");
    cy.get("#funHome").contains("We Build 4Fun Games");
    /*  */
  });
});
