describe("Bienvenido a mi proecto Cypress", () => {

    it("Mi proyecto con Cypress ==> Varias funcionalidades", () => {
        const tiempoEspera = 4000;      // Define el tiempo de espera en milisegundos
        cy.viewport(1700, 900);
        cy.visit("https://www.google.es/")
        cy.wait(tiempoEspera);          // utiliza la variable tiempo espera 

        // Leer el archivo JSON
        cy.fixture("data_1.json").then((data) => {
                                        // Utilizar los datos del archivo JSON
            cy.log("Datos del archivo JSON:", data);

            cy.get('#W0wltc > .QS5gu')
                .should('be.visible')
                .click()

            cy.get('#APjFqb')
                .should('be.visible')
                .click()
                .type(data.busqueda.ciudad_1)
                .wait(tiempoEspera)
                .type("{enter}");       // Presionar la tecla Enter

            // Seleccionar el primer enlace dentro del primer resultado de búsqueda
            cy.get("#search .g")
                .eq(0)                  // Selecciona el primer elemento de resultado de búsqueda
                .find("a")
                .first()                // Selecciona el primer enlace dentro del resultado de búsqueda
                .should("be.visible")
                .click();

        });
    });

});// Cierre de describe