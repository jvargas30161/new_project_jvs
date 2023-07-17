describe("Bienvenido a mi proecto Cypress", () => {

    it("Mi proyecto con Cypress ==> Varias funcionalidades", () => {
        const tiempoEspera = 4000;      // Define el tiempo de espera en milisegundos
        cy.viewport(1700, 900);
        cy.visit("https://enlavaguada.com/")
        cy.wait(tiempoEspera);          // utiliza la variable tiempo espera 

        cy.get('.moove-gdpr-infobar-allow-all')
            .should('be.visible')
            .click()

        cy.get('#et-secondary-nav > .menu-item-655 > a > span')
            .should('be.visible')
            .click()

        cy.get('.et_pb_section_4_tb_body').scrollIntoView({ duration: 1500, easing: "linear" });
        cy.wait(tiempoEspera);
        
    });

});// Cierre de describe