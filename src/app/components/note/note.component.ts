import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../../models/note';

@Component({
  selector: 'app-note',
  template: `
    <div class="card">
      <header class="card-header">
        <span class="card-header-title">
          {{ note.title }}
        </span>
      </header>
      <div class="card-content">
        <div class="content">
          {{note.content}}
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Edit</a>
        <a (click)="onDelete.emit(note)" class="card-footer-item">Delete</a>
      </footer>
    </div>
  `,
  styles: [`
    .card {
      margin-bottom: 10px;
      animation: fadein 400ms;
    }

    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    `
  ]
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Output() onDelete = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

}
