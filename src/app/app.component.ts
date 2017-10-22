import {Component, OnInit} from '@angular/core';
import {NotesService} from './services/notes.service';

@Component({
  selector: 'app-root',
  template: `      
    <a 
            style="margin-bottom: 10px" 
            class="button is-success" 
            (click)="notesService.addNote({title: 'note x', content: 'My Note X'})"
    >
      ADD NOTE
    </a>
    
    <h1>Notes:</h1>
    
    <app-note-item  
           *ngFor="let note of notesService.notes" 
           [note]="note"
           (onDelete)="notesService.deleteNote($event)" 
    ></app-note-item>
  `,
  styles: []
})

export class AppComponent implements OnInit{
  constructor(public notesService: NotesService) {}
  ngOnInit() {}
}
