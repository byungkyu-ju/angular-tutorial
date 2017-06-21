import { AngularTourOfHerosMasterAndDetailPage } from './app.po';

describe('angular-tour-of-heros-master-and-detail App', () => {
  let page: AngularTourOfHerosMasterAndDetailPage;

  beforeEach(() => {
    page = new AngularTourOfHerosMasterAndDetailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
