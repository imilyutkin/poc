import { PocAngularPage } from './app.po';

describe('poc-angular App', () => {
  let page: PocAngularPage;

  beforeEach(() => {
    page = new PocAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
