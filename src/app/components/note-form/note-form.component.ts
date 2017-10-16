
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Note} from '../../models/note';

@Component({
  selector: 'app-note-form',
  template: `
    <div class="note-form is-clearfix">

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" [(ngModel)]="note.title" placeholder="Note title...">
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" [(ngModel)]="note.content" placeholder="Note contents..."></textarea>
        </div>
      </div>

      <div class="field is-grouped is-pulled-right">
        <div class="control">
          <button class="button is-danger" (click)="onFormCancel()">Cancel</button>
        </div>
        <div class="control">
          <button class="button is-success" (click)="onNoteSubmit()">Submit</button>
        </div>
        
      </div>
    </div>

  `,
  styles: [`
    .note-form{
      margin-bottom: 10px;
      padding: 20px;
      box-shadow: 0px 1px 1px rgba(1,1,1, 0.6);
      background-color: whitesmoke;
      border-radius: 10px;
    }
  `]
})
export class NoteFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Note>();
  @Output() onCancel = new EventEmitter<void>();

  note: Note = {
    content: '',
    title: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onNoteSubmit() {
    this.onSubmit.emit({...this.note} as Note);
    this.note.title = '';
    this.note.content = '';
  }

  onFormCancel () {
    this.note.title = '';
    this.note.content = '';

    this.onCancel.emit();
  }

}
