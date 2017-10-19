import { Injectable } from '@angular/core';
import {Note} from '../models/note';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {DocumentChangeAction} from 'angularfire2/firestore/interfaces';

@Injectable()
export class NotesService {

  private notesCollection: AngularFirestoreCollection<Note>;

  notes$: Observable<Note[]>;

  constructor(private afs: AngularFirestore) {
    this.notesCollection = this.afs.collection<Note>('notes');
    this.notes$ = this.notesCollection
        .snapshotChanges()
        .map(this.mapActionsToNotes);
  }

  addNote(note: Note): Promise<any> {
    return this.afs.collection('/notes').add(note);
  }

  deleteNote(note: Note): Promise<any> {
    return this.afs.doc(`/notes/${note.id}`).delete();
  }

  private mapActionsToNotes = (actions: DocumentChangeAction[]): Note[] =>
      actions.map(a => ({
          id: a.payload.doc.id,
          ...a.payload.doc.data()
      } as Note));


}
