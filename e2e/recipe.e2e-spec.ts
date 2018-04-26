import { RecipePage } from './recipe.po';
import { browser } from 'protractor';

describe('new-cli App', () => {
  let page: RecipePage;

  beforeEach(() => {
    page = new RecipePage();
    browser.sleep(2000);
  });

  it('should display button <<New Recipe>>', () => {
    page.navigateTo();
    expect(page.getButtonText()).toEqual('New Recipe');
  });

  afterEach(() => {
    browser.sleep(2000);
  })
});
