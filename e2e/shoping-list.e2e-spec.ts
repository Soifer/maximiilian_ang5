import { ShoppingList } from './shoping-list.po';
import { browser, protractor } from 'protractor';
import { Alert } from 'selenium-webdriver';

describe('shopping list component', () => {
    let page: ShoppingList;

    function bindTextToInput() {
       return page.getTextInput().sendKeys("test");            
        };
    

    function addNewItem() {
        page.getSubmitButton().click();
        
    }

    var origFn = browser.driver.controlFlow().execute;
    browser.driver.controlFlow().execute = function () {
    var args = arguments;

    origFn.call(browser.driver.controlFlow(), function () {
    return protractor.promise.delayed(200);   // here we can adjust the execution speed
    });
    return origFn.apply(browser.driver.controlFlow(), args);
    };

    beforeEach(() => {
        page = new ShoppingList();
    });

    it('should contain ingredient <<Test>>', () => {
        page.navigateTo();
        bindTextToInput().then(() =>{
            addNewItem();
        });
        

        expect(page.getIngredientFromList()).toContain('test');
    });

});
