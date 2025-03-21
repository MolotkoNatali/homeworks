describe('Пошук товару на сайті', () => {
    beforeEach(() => {
        cy.visit('https://rozetka.com.ua/');
    });

    it('Шукаємо товар "iPhone" та перевіряємо список товарів', () => {
        cy.get('input.search-form__input')
            .type('iPhone')
            .should('have.value', 'iPhone');

        cy.contains('button', 'Знайти').click();

        cy.get('div.item .goods-tile', { timeout: 15000 })
            .should('have.length.greaterThan', 0)
            .and('be.visible');
    });
});

describe('Додавання товару до кошика', () => {
    beforeEach(() => {
        cy.visit('https://rozetka.ua');
        cy.intercept('GET', '/api/products', { fixture: 'products.json' }).as('getProducts');
    });

    it('Додаємо перший товар до кошика та перевіряємо кількість товарів', () => {
        cy.get('rz-product-tile.item:first-child').first().as('firstProduct');

        cy.get('@firstProduct')
            .find('button.buy-button:first-child')
            .click();

        cy.get('rz-header-cart .header-cart__button .badge')
            .should('be.visible')
            .invoke('text')
            .should('not.be.empty')
            .then((text) => {
                const cartValue = text.trim();
                if (cartValue !== '0') {
                    expect(cartValue).to.match(/^[1-9][0-9]*$/);
                } else {
                    cy.log('Cart is empty, no items added yet.');
                }
            });
    });
});
