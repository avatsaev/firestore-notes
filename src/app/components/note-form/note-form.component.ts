import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Note} from '../../models/note';

@Component({
  selector: 'app-note-form',
  template: `
    <div class="note-form is-clearfix">

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input [(ngModel)]="note.title" class="input" placeholder="Note title...">
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea [(ngModel)]="note.content" class="textarea" placeholder="Note contents..."></textarea>
        </div>
      </div>

      <div class="field is-grouped is-pulled-right">
        <div class="control">
          <button (click)="onCancel.emit()" class="button is-danger" >Cancel</button>
        </div>
        <div class="control">
          <button (click)="onSubmitClick()" class="button is-success">Submit</button>
        </div>

      </div>
    </div>
  `,
  styles: [`

    .note-form{
      margin-bottom: 10px;
      padding: 20px;
      background-color: whitesmoke;
      border-radius: 10px;
      animation: fadein 400ms;
    }


    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  
  `]
})
export class NoteFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Note>();
  @Output() onCancel = new EventEmitter<void>();

  note: Note;

  constructor() { }

  ngOnInit() {
    this.note = {
      title: '',
      content: ''
    }
  }

  onSubmitClick() {
    this.onSubmit.emit({...this.note});
    this.note.title = '';
    this.note.content = '';
  }

}
