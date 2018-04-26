import { browser, element, by } from 'protractor';

export class RecipePage {
  navigateTo() {
    return browser.get('/recipes');
  }

  getButtonText() {
    return element(by.css('app-recipe-list button')).getText();
  }
}
