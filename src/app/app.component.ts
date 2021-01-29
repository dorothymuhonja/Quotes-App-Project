import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 quotes: Quote[] = [
   {id:1, name:`Hope is like a broken pen, wont work, but you hold on to it since it is the only pen you've got`},
   {id:2, name: `I see unconditional love when I look at my mother`},
   {id:3, name: `Knowledge is power is time is money`},
   {id:4, name:`God gives us ugliness so we don't take the beautiful things in life fot granted`}
 ]

}
