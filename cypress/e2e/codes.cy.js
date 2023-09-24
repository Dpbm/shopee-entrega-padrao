const LOGGI_CODE = 'BR1234567890123';
const CORREIOS_CODE = 'AB123456789BR';
const POST_SPEED_CODE_1 = 'BR123456789012A';
const POST_SPEED_CODE_2 = '12345678901';
const POST_SPEED_CODE_3 = 'BR1234567890123';
const JT_CODE = 'BR123456789012A';
const TOTAL_EXPRESS_CODE = 'BR123456789012A';
const SHOPEE_XPRESS_CODE = 'BR123456789012ABCDEF123456';

const correct_char = '✅';

describe('Test codes', () => {
    it('Test Loggi', () => {
        cy.visit('/');
        cy.get('input').type(LOGGI_CODE);
        cy.get('#loggi-check').should('contain', correct_char);
    });
    
    it('Test Correios', () => {
        cy.visit('/');
        cy.get('input').type(CORREIOS_CODE);
        cy.get('#correios-check').should('contain', correct_char);
    });


    it('Test PotSpeed 1', () => {
        cy.visit('/');
        cy.get('input').type(POST_SPEED_CODE_1);
        cy.get('#potspeed-check').should('contain', correct_char);
    });
    
    it('Test PotSpeed 2', () => {
        cy.visit('/');
        cy.get('input').type(POST_SPEED_CODE_2);
        cy.get('#potspeed-check').should('contain', correct_char);
    });


    it('Test PotSpeed 3', () => {
        cy.visit('/');
        cy.get('input').type(POST_SPEED_CODE_3);
        cy.get('#potspeed-check').should('contain', correct_char);
    });
    
    it('Test JTExpress', () => {
        cy.visit('/');
        cy.get('input').type(JT_CODE);
        cy.get('#jtexpress-check').should('contain', correct_char);
    });
    
    it('Test Total Express', () => {
        cy.visit('/');
        cy.get('input').type(TOTAL_EXPRESS_CODE);
        cy.get('#totalexpress-check').should('contain', correct_char);
    });
    
    it('Test Shopee Xpress', () => {
        cy.visit('/');
        cy.get('input').type(SHOPEE_XPRESS_CODE);
        cy.get('#shopeexpress-check').should('contain', correct_char);
    });
});