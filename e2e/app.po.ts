export class Ng2AdventurePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-adventure-app h1')).getText();
  }
}
