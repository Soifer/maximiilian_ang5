import { browser, element, by } from 'protractor';

export class ShoppingList {
    navigateTo() {
        return browser.get('/shopping-list');
    }

    getTextInput() {
        return element(by.id('name'));
            
    }

    getSubmitButton() {
        return element(by.id('submit'));
    }

    getIngredientFromList() {
        return element.all(by.css('app-shopping-list a .ingredient-name')).getText();
    }
}
// .then((t) => {
//     return  element(by.id('name'));
//   });