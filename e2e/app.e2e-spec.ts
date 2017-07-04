import { Ng2Demo1Page } from './app.po';

describe('angular-explore App', () => {
  let page: Ng2Demo1Page;

  beforeEach(() => {
    page = new Ng2Demo1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
