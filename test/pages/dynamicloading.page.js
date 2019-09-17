import Page from './page';

class DynamicloadingPage extends Page {

    get elementRenderedAfterTheFact() { return $('//a[contains(@href, "/dynamic_loading/2")]'); }
    get redButtonText() { return $('div#content a.button.alert'); }
    

    open() {
        super.open('/dynamic_loading');
    }

    clickElementRenderedAfterTheFact() {
        this.elementRenderedAfterTheFact.click();
    }
}

export default new DynamicloadingPage();