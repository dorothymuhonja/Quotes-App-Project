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
   new Quote (1,`Hope is like a broken pen, won't work, but you hold on to it since it's the only pen you've got`,`Fawe`,`Dorothy Muhonja`, new Date(2021,1,29), 0,0),

   new Quote (2,`Ask me what unconditional love is, I'll show you my mom`,`Unknown`,`Dorothy Muhonja`, new Date(2021,1,29),0,0),

 new Quote (3,`Knowledge is power is time is money`, `Rikkard Ambrose`,`Dorothy Muhonja`, new Date(2021,1,29),0,0),

  new Quote (4,`God gives us ugliness so we don't take the beautiful things in life for granted `,`From Ugly Love`,`Dorothy Muhonja`,new Date(2021,1,29),0,0),
 
 new Quote (5, `You either die a hero or live long enough to see yourself become a villain`, `From Batman The Dark Knight`, `Dorothy Muhonja`, new Date(2021, 1, 29 ),0,0),
];
// adding a new quote
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.postedOn = new Date(quote.postedOn)
  this.quotes.unshift(quote)
}
// for toggling details button
toggleDetails(index) {
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}
// deleting quotes
readQuote(isRead, index) {
  if(isRead) {
    let toDelete = confirm(`Are you sure you want to delete${this.quotes[index].name}?`)

    if (toDelete) {
       this.quotes.splice(index,1);
    }
    
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
