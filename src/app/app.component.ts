import { Component } from '@angular/core';
import {NotesService} from './services/notes.service';
import {Note} from './models/note';


@Component({
  selector: 'app-root',
  template: `
    <h1>Notes:</h1>

    <a
      style="margin-bottom: 10px"
      class="button is-success"
      (click)="showForm = !showForm" 
    >
      ADD NOTE
    </a>

    <app-note-form *ngIf="showForm" 
                   (onSubmit)="notesService.addNote($event); showForm = false" 
                   (onCancel)="showForm = false" 
    ></app-note-form>
    
    <app-note  *ngFor="let note of notes; trackBy: noteTrackByFn" 
               [note]="note"
               (onDelete)="notesService.deleteNote($event)" 
    > </app-note>

    
  `,
  styles: []
})
export class AppComponent {

  showForm = false;
  notes: Note[];

  noteTrackByFn = (note: Note) => note.id;

  constructor(public notesService: NotesService) {

    this.notesService.notes$.subscribe(notes => this.notes = notes);
  }
}
