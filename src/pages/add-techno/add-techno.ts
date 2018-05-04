import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../providers/data/data.service';
import { Technology } from '../../models/technology';

@Component({
  selector: 'page-add-techno',
  templateUrl: 'add-techno.html',
})
export class AddTechnoPage {

  categories: string[];
  technology: Technology = { name: '', category: ''};

  constructor(
    // Public
    public navCtrl: NavController,
    public navParams: NavParams,
    // Private
    private dataService: DataService
  
  ) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AddTechnoPage');
  // }

  ionViewWillLoad() {
    console.log('ionViewWillLoad addTechnoPage');
    this.categories = this.dataService.getAllCategories()
  }

  addTechnology() {
    this.dataService.addTechnology(this.technology);
    this.technology = { name: '', category: ''};
  }

}
