// import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Technology } from '../../models/technology';
import { Schedule } from '../../models/schedule';
import Dexie from 'dexie';

@Injectable()
export class DataService {

  db;

  categories: string[] = [
    'Front',
    'Back',
    'FullStack',
    'Autre'
  ]

  priorities: string[] = [
    'basse',
    'moyenne',
    'haute'
  ];

  schedules: Schedule[] = [];

  // technologies: Technology[] = [
  //   {'name':'Angular', 'category': 'Front'},
  //   {'name':'PWA', 'category': 'Hybride'},
  //   {'name':'Ionic', 'category': 'Hybride'},
  //   {'name':'Node', 'category': 'Backend'}
  // ];

  technologies: Technology[] = [];

  constructor() {
    console.log('Hello DataProvider Provider');
    this.db = new Dexie('veilletechno');
    this.db.version(1).stores({
      schedules: '++id, name',
      technologies: '++id'
    })
  }

  // returns a Dexie.promise<Technologie[]>
  getAllTechnologies(): Dexie.Promise<Technology[]> {
    //return this.technologies;
    return this.db.technologies
      .toArray()
  }
  getAllCategories() {
    return this.categories;
  }

  search(term: string) {
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term));
  }

  addTechnology(technology: Technology) {
    // this.technologies = [...this.technologies, technology];
    // console.log(this.technologies);
    this.db.technologies.add(technology);
  }

  getAllPriorities() {
    return this.priorities;
  }

  getAllSchedules(): Dexie.Promise<Schedule[]> {
    return this.db.schedules
      .toArray();
  }

  createSchedule(schedule: Schedule) {
    // this.schedules = [...this.schedules, schedule];
    // console.log(this.schedules)
    this.db.schedules.add(schedule);
  }

  edit(schedule: Schedule) {

  }
}
