import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DataService } from '../../providers/data/data.service'
import { Technology } from '../../models/technology'

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  technologies: Technology[];

  constructor(
    // Public
    public navCtrl: NavController, 
    public navParams: NavParams,
    // Private
    private dataService: DataService,
    private loadingController: LoadingController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AccueilPage');
  // }

  ionViewWillEnter() {
    const loader = this.loadingController.create({
      content: 'Veuillez patienter',
      duration: 1000
    });
    loader.present();
    this.technologies = this.dataService.getAllTechnologies();
    console.log(this.technologies);
    loader.dismiss();
  }

  search(event){
    this.technologies = this.dataService.search(event.target.value.trim());
  }

}
