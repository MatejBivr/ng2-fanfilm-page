import { DivisionPage } from './app.po';

describe('division App', function() {
  let page: DivisionPage;

  beforeEach(() => {
    page = new DivisionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
