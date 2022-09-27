/// <reference types ="cypress"/>

describe("E2E - Scrollowanie/ Najeżdżanie", () => {

    it("Najechanie na dany element", () => {
        cy.visit("https://automationpractice.com")
        cy.get('a[title="Dresses"]').eq(1).trigger("focus")
        cy.get('li.sfHover a[title="Summer Dresses"]').click();
    
    })
    it("Scrollowanie do boxa specials", () => {
        cy.get('a[title="Specials"]').first().scrollIntoView();

    })
})