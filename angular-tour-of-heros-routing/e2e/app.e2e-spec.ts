import { AngularTourOfHerosRoutingPage } from './app.po';

describe('angular-tour-of-heros-routing App', () => {
  let page: AngularTourOfHerosRoutingPage;

  beforeEach(() => {
    page = new AngularTourOfHerosRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
