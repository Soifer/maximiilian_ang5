import { RecipePage } from './recipe.po';
import { browser } from 'protractor';

describe('recipe component', () => {
  let page: RecipePage;

  beforeEach(() => {
    page = new RecipePage();
  });

  it('should display button <<New Recipe>>', () => {
    page.navigateTo();
    expect(page.getButtonText()).toEqual('New Recipe');
  });


});
