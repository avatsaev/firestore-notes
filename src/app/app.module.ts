import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import {NotesService} from './services/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
