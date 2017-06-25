import { AngularTourOfHerosHttpPage } from './app.po';

describe('angular-tour-of-heros-http App', () => {
  let page: AngularTourOfHerosHttpPage;

  beforeEach(() => {
    page = new AngularTourOfHerosHttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
