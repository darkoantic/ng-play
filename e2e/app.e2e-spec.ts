import { NgTestPage } from './app.po';

describe('ng-test App', () => {
  let page: NgTestPage;

  beforeEach(() => {
    page = new NgTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
