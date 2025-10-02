import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import quotes from 'src/assets/data/quotes';
import { Quotes } from 'src/assets/data/quotes.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit{
  quoteCollection: {category: string, quotes: Quotes[], icon: string;}[];
  constructor(
    private alertController: AlertController
  ) {}

  ngOnInit(){
    this.quoteCollection = quotes;
    console.log(this.quoteCollection);
  }
  async onAddToFavorite(SelectedQuote: Quotes) {
    const alert = await this.alertController.create({
      header: 'Add Quote',
      subHeader: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {text: 'Confirm',},
        {text: 'Not Confirm',}
      ]
    });
    await alert.present();
    
  }
}
