import { Injectable } from '@angular/core';
import {Note} from '../models/note';

@Injectable()
export class NotesService {

  notes : Note[] = [
    {
      id: 1,
      title: 'Note 1',
      content: 'My note 1'
    },
    {
      id: 2,
      title: 'Note 2',
      content: 'My note 2'
    },
    {
      id: 3,
      title: 'Note 3',
      content: 'My note 3'
    }
  ];

  constructor() { }

  addNote(note: Note) {
    note.id = this.notes.length + 1;
    this.notes.push(note);
  }

  deleteNote(note: Note) {
    this.notes = this.notes.filter(n => n.id !== note.id);
  }

}
