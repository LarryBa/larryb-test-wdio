import Page from './page';

class Dynamicloading2Page extends Page {

    get startButton() { return $('div#start > button'); }
    get loadingBar() { return $('#loading > img'); }
    get helloWorld() { return $('#finish > h4'); }
    

    open() {
        super.open('/dynamic_loading/2');
    }

    clickStartButton() {
        this.startButton.click();
        this.loadingBar.waitForDisplayed();
        browser.pause(2000);
    }

    checkTextHelloWorld() {
       this.helloWorld.getText();     
    }
}

export default new Dynamicloading2Page();