import { AngularTourOfHerosMultipleComponentsPage } from './app.po';

describe('angular-tour-of-heros-multiple-components App', () => {
  let page: AngularTourOfHerosMultipleComponentsPage;

  beforeEach(() => {
    page = new AngularTourOfHerosMultipleComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
