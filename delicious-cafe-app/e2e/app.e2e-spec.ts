import { DeliciousCafeAppPage } from './app.po';

describe('delicious-cafe-app App', () => {
  let page: DeliciousCafeAppPage;

  beforeEach(() => {
    page = new DeliciousCafeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
