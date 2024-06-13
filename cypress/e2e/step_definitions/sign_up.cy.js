import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let username;
let random_digits;

Given('a user is on the sign up page', ()=> {
    cy.visit('/')
    cy.get('#signin2').click();
})
When("the user type the username and password", ()=> {
    random_digits = Math.floor(1000 + Math.random() * 9000).toString()
    username ="daniel" + random_digits
    cy.get('#sign-username').type(username,{delay:0})
    cy.get('#sign-password').type('12345678',{delay:0})
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
})
Then('validate a submit pop up shows the message {string}', (message)=> {
    cy.on('window:alert', (alertMessage) => {
        expect(alertMessage).to.equal(message)
    })
    cy.wait(1000)
})

When("a user leaves the sign up form blank and press the submit button", ()=> {
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})

When('the user type the username {string} and password {string}', (username,password)=> {
    cy.get('#sign-username').type(username,{delay:0})
    cy.get('#sign-password').type(password,{delay:0})
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})
