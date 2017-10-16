import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import {NotesService} from './services/notes.service';
import { NoteFormComponent } from './components/note-form/note-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoteItemComponent,
    NoteFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
