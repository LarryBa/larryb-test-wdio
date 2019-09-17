import { expect } from 'chai';
import DynamicloadingPage from '../pages/dynamicloading.page';
import Dynamicloading2Page from '../pages/dynamicloading2.page';

describe('Test2 on dynamic loading page', () => {
    it('open dynamic loading page', () => {
        DynamicloadingPage.open();
    
    });

    it('Click Example 2: Element rendered after the fact', () => {
        DynamicloadingPage.clickElementRenderedAfterTheFact();

  });

  it('Confirm "Hello World!" is rendered after the loading bar disappears', () => {

    Dynamicloading2Page.clickStartButton();
    Dynamicloading2Page.checkTextHelloWorld();

    expect(Dynamicloading2Page.helloWorld.getText()).to.equal('Hello World!');

 });

}); 