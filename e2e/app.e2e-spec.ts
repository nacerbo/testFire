import { TestFirePage } from './app.po';

describe('test-fire App', () => {
  let page: TestFirePage;

  beforeEach(() => {
    page = new TestFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
