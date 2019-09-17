import { expect } from 'chai';
import ChallengingdomPage from '../pages/challengingdom.page';

describe('Test1 on challenging dom page', () => {
    it('open challenging dom', () => {
        ChallengingdomPage.open();
    
    });
    it('confirm that the red button label changes after it is clicked', () => {
     ChallengingdomPage.checkRedButtonText();
     ChallengingdomPage.clickRedButton();
     ChallengingdomPage.checkRedButtonText();
  });

}); 