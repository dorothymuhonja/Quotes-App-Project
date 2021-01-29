import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // for displaying quotes
  quotes: Quote[] = [
   new Quote (1,`Hope is like a broken pen, wont work, but you hold on to it since it is the only pen you've got`,`Fawe`,`Dorothy Muhonja`, new Date(2021,1,29)),

   new Quote (2,`I see unconditional love when I look at my mother`,`Unknown`,`Dorothy Muhonja`, new Date(2021,1,29)),

 new Quote (3,`Knowledge is power is time is money`, `Rikkard Ambrose`,`Dorothy Muhonja`, new Date(2021,1,29)),

  new Quote (4,`God gives us ugliness so we don't take the beautiful things in life fot granted `,`From Ugly Love`,`Dorothy Muhonja`,new Date(2021,1,29)),
 
 new Quote (5, `You either die a hero or live long enough to see yourself become a villain`, `From Batman The Dark Knight`, `Dorothy Muhonja`, new Date(2021, 1, 29 )),
];
// adding a new quote
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.postedOn = new Date(quote.postedOn)
  this.quotes.push(quote)
}
// for toggling details button
toggleDetails(index) {
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}
// deleting quotes
readQuote(isRead, index) {
  if(isRead) {
    this.quotes.splice(index,1);
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
