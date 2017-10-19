import {Component, OnInit} from '@angular/core';
import {NotesService} from './services/notes.service';

@Component({
  selector: 'app-root',
  template: `

    <a 
            style="margin-bottom: 10px" 
            class="button is-success" 
            (click)="showNoteForm = !showNoteForm"
    >
      ADD NOTE
    </a>

    <app-note-form 
            *ngIf="showNoteForm" 
            (onSubmit)="notesService.addNote($event); showNoteForm = false" 
            (onCancel)="showNoteForm = false" >
    </app-note-form>

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

  showNoteForm = false;


  constructor(public notesService: NotesService) {}


  ngOnInit() {

  }

}
