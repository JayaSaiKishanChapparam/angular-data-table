import { Component, OnInit } from '@angular/core';
import {Table} from './table';
import {TableService} from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  characters: Table[];
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      age: {
        title: 'Age'
      }
    }
  };

  constructor(private tservice: TableService) { }

  ngOnInit() {
    this
      .tservice
      .getCharacters()
      .subscribe((data: Table[]) => {
        this.characters = data;
      });
  }

}
