import { Injectable } from '@angular/core';
import { Quotes } from 'src/assets/data/quotes.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private favoriteQuotes: Quotes[] = [];
  constructor(){}
  addQuoteToFavorite(quote: Quotes) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }
  getFavoriteQuote() {
    return this.favoriteQuotes.slice();
  }
  removeQuoteFromFavorite(quote: Quotes) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quotes) => {
      return quoteEl.id === quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
    console.log(position);
    console.log(this.favoriteQuotes);
  }
  isQuoteFavorite(quote: Quotes) {
    return this.favoriteQuotes.find((quoteEl: Quotes) => {
      return quoteEl.id === quote.id;
    });
  }
}
