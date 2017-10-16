import { Injectable } from '@angular/core';
import {Note} from '../models/note';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {DocumentChangeAction} from 'angularfire2/firestore/interfaces';
import * as firebase from 'firebase';

@Injectable()
export class NotesService {

  private notesCollection: AngularFirestoreCollection<Note>;

  notes$: Observable<Note[]>;

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

  constructor(private afs: AngularFirestore) {
    this.notesCollection = this.afs.collection<Note>('notes');
    this.notes$ = this.notesCollection
        .snapshotChanges()
        .map(this.mapActionsToNotes);


  }


  mapActionsToNotes(actions: DocumentChangeAction[]): Note[] {
    return actions.map(a => (
        {
          id: a.payload.doc.id,
          ...a.payload.doc.data()
        } as Note)
    )
  }

  addNote(note: Note): Promise<any> {
    return this.afs.collection('/notes').add(note);
  }

  deleteNote(note: Note): Promise<any> {
    return this.afs.doc(`/notes/${note.id}`).delete();
  }

}
