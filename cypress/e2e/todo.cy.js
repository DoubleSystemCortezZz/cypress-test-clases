describe('template spec', () => {

      it('1. Crear tarea:', () => {
        cy.visit('https://todomvc.com/examples/react-backbone/#/')
        cy.get('.new-todo').click().type("Tarea 1{enter}")
      })

      it('2. Marcar tarea como completada:', () => {
        cy.visit('https://todomvc.com/examples/react-backbone/#/')
        cy.get('.new-todo').click().type("Tarea 2{enter}")
        cy.get('.toggle').click()

      })
      it('3. Desmarcar tarea completada:', () => {
        cy.visit('https://todomvc.com/examples/react-backbone/#/')

        cy.get('.new-todo').click().type("Tarea 3{enter}")
        
        cy.get('.toggle').click()
        cy.get('.toggle').click()

      })
      it('4. Editar tarea:', () => {
        cy.visit('https://todomvc.com/examples/react-backbone/#/')
        cy.get('.new-todo').click().type("Tarea ?{enter}")
        cy.get('.view > label').dblclick()
        cy.get('.editing .edit').clear().type(' Tarea 4{enter}')

      })

      
      it('5. Borrar tarea:', () => {
        cy.visit('https://todomvc.com/examples/react-backbone/#/')
        cy.get('.new-todo').click().type("Tarea 5{enter}")
        cy.contains ('Tarea 5').parent().find('.destroy').invoke('show').click()
      })

      it('6. Filtrar tareas:', () => {
        cy.visit('https://todomvc.com/examples/react-backbone/#/')
        cy.get('.new-todo').click().type("Tarea a{enter}")
        cy.get('.new-todo').click().type("Tarea b{enter}")
        cy.get('.new-todo').click().type("Tarea c{enter}")
        cy.get('.new-todo').click().type("Tarea d{enter}")

        cy.contains ('Tarea a').parent().find('.toggle').click()
        cy.contains ('Tarea b').parent().find('.toggle').click()

        cy.contains('Active').click()

        cy.get('.view > label').contains('Tarea c')
        cy.get('.view > label').contains('Tarea d')

        cy.contains('Completed').click()
        
        cy.get('.view > label').contains('Tarea a')
        cy.get('.view > label').contains('Tarea b')

        cy.contains('All').click()


      })
})