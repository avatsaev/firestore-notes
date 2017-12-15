import { Injectable } from '@angular/core';
import {Note} from '../models/note';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {DocumentChangeAction} from 'angularfire2/firestore/interfaces';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NotesService {

  notesCollection: AngularFirestoreCollection<Note>;
  notes$: Observable<Note[]>;

  private mapChangeToNotes = (changes: DocumentChangeAction[]) =>
      changes.map(a => ({
        id: a.payload.doc.id,
        ...a.payload.doc.data()} as Note)
      );

  constructor(private afs: AngularFirestore) {
    this.notesCollection = this.afs.collection('/notes');
    this.notes$ = this.notesCollection.snapshotChanges().map(this.mapChangeToNotes);
  }


  addNote(note: Note) {
    this.notesCollection.add(note);
  }

  deleteNote(note: Note) {
    this.notesCollection.doc(note.id).delete();
  }

}
