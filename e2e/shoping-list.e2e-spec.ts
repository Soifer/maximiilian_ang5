import { ShoppingList } from './shoping-list.po';
import { browser } from 'protractor';
import { Alert } from 'selenium-webdriver';

describe('shopping list component', () => {
    let page: ShoppingList;

    function bindTextToInput() {
       return page.getTextInput().sendKeys("test");            
        };
    

    function addNewItem() {
        page.getSubmitButton().click();
        
    }

    beforeEach(() => {
        page = new ShoppingList();
        browser.sleep(2000);
    });

    it('should contain ingredient <<Test>>', () => {
        page.navigateTo();
        bindTextToInput().then(() =>{
            addNewItem();
        });
        

        expect(page.getIngredientFromList()).toContain('test');
    });

    afterEach(() => {
        browser.sleep(3000);
    })
});
