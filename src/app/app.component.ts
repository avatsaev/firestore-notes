import {Component, OnInit} from '@angular/core';
import {Note} from './models/note';

@Component({
  selector: 'app-root',
  template: `
    <h1>Notes:</h1>
      
      <ul>
        <li *ngFor="let note of notes">{{note.title}}: {{note.content}}</li>
      </ul>
    
  `,
  styles: []
})
export class AppComponent implements OnInit{

  notes: Note[];

  constructor() {}


  ngOnInit() {

    this.notes = [
      {
        id: 1,
        title: 'Note 1',
        content: 'My note 1'
      },
      {
        id: 1,
        title: 'Note 2',
        content: 'My note 2'
      },
      {
        id: 1,
        title: 'Note 3',
        content: 'My note 3'
      }
    ]
  }

}
