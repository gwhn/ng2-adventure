import { Ng2AdventurePage } from './app.po';

describe('ng2-adventure App', function() {
  let page: Ng2AdventurePage;

  beforeEach(() => {
    page = new Ng2AdventurePage();
  });

  it('should display messages saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-adventure works!');
  });
});
