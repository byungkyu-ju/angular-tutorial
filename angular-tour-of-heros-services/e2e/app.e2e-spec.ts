import { AngularTourOfHerosServicesPage } from './app.po';

describe('angular-tour-of-heros-services App', () => {
  let page: AngularTourOfHerosServicesPage;

  beforeEach(() => {
    page = new AngularTourOfHerosServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
