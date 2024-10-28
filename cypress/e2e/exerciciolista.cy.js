describe("Testes de calculadora basica", () => {
  it("Teste soma com sucesso", () => {
    let count = "8";
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/"
    );
    cy.get(":nth-child(1) > :nth-child(2) > .ng-pristine").type(5);
    cy.get(":nth-child(2) > :nth-child(2) > .ng-pristine").type(3);
    cy.get(":nth-child(3) > :nth-child(2) > .ng-valid").select("+");
    cy.get(".result").should("contain.text", count);
  });

  it("Teste soma com falha", () => {
    let count = "8";
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/"
    );
    cy.get(":nth-child(1) > :nth-child(2) > .ng-pristine").type(5);
    cy.get(":nth-child(2) > :nth-child(2) > .ng-pristine").type(3);
    cy.get(":nth-child(3) > :nth-child(2) > .ng-valid").select("-");
    cy.get(".result").should("not.contain.text", count);
  });

  it("Teste multiplicação com sucesso", () => {
    let mult = "108";
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/"
    );
    cy.get(":nth-child(1) > :nth-child(2) > .ng-pristine").type(36);
    cy.get(":nth-child(2) > :nth-child(2) > .ng-pristine").type(3);
    cy.get(":nth-child(3) > :nth-child(2) > .ng-valid").select("*");
    cy.get(".result").should("contain.text", mult);
  });
  it("Teste subtração com sucesso", () => {
    let sub = "-33";
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/"
    );
    cy.get(":nth-child(1) > :nth-child(2) > .ng-pristine").type(3);
    cy.get(":nth-child(2) > :nth-child(2) > .ng-pristine").type(36);
    cy.get(":nth-child(3) > :nth-child(2) > .ng-valid").select("-");
    cy.get(".result").should("contain.text", sub);
  });

  it("Teste divisão com sucesso", () => {
    let div = "5";
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/"
    );
    cy.get(":nth-child(1) > :nth-child(2) > .ng-pristine").type(15);
    cy.get(":nth-child(2) > :nth-child(2) > .ng-pristine").type(3);
    cy.get(":nth-child(3) > :nth-child(2) > .ng-valid").select("/");
    cy.get(".result").should("contain.text", div);
  });

  it("Teste divisão por zero com sucesso", () => {
    let resp = "null";
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/"
    );
    cy.get(":nth-child(1) > :nth-child(2) > .ng-pristine").type(15);
    cy.get(":nth-child(2) > :nth-child(2) > .ng-pristine").type(0);
    cy.get(":nth-child(3) > :nth-child(2) > .ng-valid").select("/");
    cy.get(".result").should("contain.text", resp);
  });
});
