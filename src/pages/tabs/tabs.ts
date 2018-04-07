import { Component } from '@angular/core';

import { AcceuilPage } from '../acceuil/acceuil';
import { AddTechnoPage } from '../add-techno/add-techno';
import { SchedulePage } from '../schedule/schedule';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AcceuilPage;
  tab2Root = AddTechnoPage;
  tab3Root = SchedulePage;

  constructor() {

  }
}
