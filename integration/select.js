/// <reference types ="cypress"/>

describe("E2E - Akcje wybrania opcji select", () => {

    it("Wybieranie opcji", () => {
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category")

        // Wybieranie opcji po nazwie
        cy.get("#selectProductSort").select("In stock")

        //Po nazwie
        cy.get("#selectProductSort").select("price:asc")

        // Po indeksach
        cy.get("#selectProductSort").select(7)

    })
    it.only("Wybieranie wszystkich opcji", () => {
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category")
        
        cy.get("#selectProductSort").then(select => {
            cy.wrap(select).find("option").each(opcja => {
               cy.wrap(select).select(opcja.text()) 
            })
        })

    })
})