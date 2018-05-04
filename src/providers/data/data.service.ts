// import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Technology } from '../../models/technology';
import { Schedule } from '../../models/schedule';

@Injectable()
export class DataService {

  categories: string[] = [
    'Front',
    'Back',
    'FullStack',
    'Autre'
  ]

  constructor() {
    console.log('Hello DataProvider Provider');
  }

  priorities: string[] = [
    'basse',
    'moyenne',
    'haute'
  ];

  schedules: Schedule[] = [];

  technologies: Technology[] = [
    {'name':'Angular', 'category': 'Front'},
    {'name':'PWA', 'category': 'Hybride'},
    {'name':'Ionic', 'category': 'Hybride'},
    {'name':'Node', 'category': 'Backend'}
  ];

  getAllTechnologies(){
    return this.technologies;
  }
  getAllCategories(){
    return this.categories;
  }
    
  search(term: string){
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term));
  }

  addTechnology(technology:Technology){
    this.technologies = [...this.technologies, technology];
    console.log(this.technologies);
  }

  getAllPriorities() {
    return this.priorities;
  }

  getAllSchedules() {
    return this.schedules;
  }

  createSchedule(schedule: Schedule) {
    this.schedules = [...this.schedules, schedule];
    console.log(this.schedules)
  }

  edit(schedule: Schedule ) {

  }
}
