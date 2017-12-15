import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import {NotesService} from './services/notes.service';
import { NoteFormComponent } from './components/note-form/note-form.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {ServiceWorkerModule} from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConf),
    AngularFirestoreModule.enablePersistence(),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})

  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
