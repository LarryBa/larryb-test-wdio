import Page from './page';

class ChallengingdomPage extends Page {


    get redButton() { return $('//a[2]'); }
    get redButtonText() { return $('div#content a.button.alert'); }
    

    open() {
        super.open('/challenging_dom');
    }



    clickRedButton() {
        this.redButton.click();
    }


     checkRedButtonText(buttonText) {
    this.redButtonText.waitForDisplayed();
    this.redButtonText.getText(buttonText);
 
     }


}

export default new ChallengingdomPage();