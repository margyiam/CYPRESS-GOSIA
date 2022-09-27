/// reference types= "cypress" />

describe("E2E" - Akcje kliknięcia checkbox", () => {
    it("Checkbox", () => {
        cy.visit("/index.php?id_category=3&controller=category#/");
        cy.get('#ul_layered_category_0').find("input"). then(checkbox => {
            cy.get(checkbox).eq(0);
            cy.get9checkbox).eq(1);
        }

    })
})