import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { CreatePage } from '../create/create';
import { ListPage } from '../list/list';
import { ConfigPage } from '../config/config';

import { Events, Tabs } from 'ionic-angular';

import { Note } from '../../app/Note';
import { List } from '../../app/NoteList';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = CreatePage;
  tab2Root = ListPage;
  tab3Root = ConfigPage;
  
  noteList: List;

  @ViewChild('myTabs') tabRef: Tabs;
    constructor(public events: Events) 
    {
        events.subscribe('tab:clicked', (data) => 
        {
            this.tabRef.select(data['tab']);
        });
    }

  
}
