import { GeocacherPage } from './app.po';

describe('geocacher App', () => {
  let page: GeocacherPage;

  beforeEach(() => {
    page = new GeocacherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
