/// <reference types="cypress" />

const faker = require("faker");

describe('Cypress Sign up', () => {
    let user;

    before(() => {
        cy.task('newUser')
        .then((newUser) => {
            user = newUser
        });
    })
    it('should goes into "conduit" open "Sign Up" form enters data and press [Sign On]', () => {
    cy.visit('http://localhost:1667/#/');
    cy.get(':nth-child(3) > .nav-link')
    .click();
    cy.get(':nth-child(1) > .form-control')
    .type(user.username);
    cy.get(':nth-child(2) > .form-control')
    .type(user.email);
    cy.get(':nth-child(3) > .form-control')
    .type(user.password);
    cy.get('.btn')
    .click();
    cy.get('.navbar').contains(user.username)
    .should('exist');
    })
    });