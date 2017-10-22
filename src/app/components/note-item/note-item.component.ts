import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../../models/note';

@Component({
    selector: 'app-note-item',
    template: `
        <div class="card">
            <header class="card-header">
                <span class="card-header-title">
                  {{note.title}}
                </span>
            </header>
            <div class="card-content">
                <div class="content">
                    {{note.content}}
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item">Delete</a>
            </footer>
        </div>
    `,
    styles: [`
      .card{
        margin-bottom: 10px;
      }
     
  `]
})
export class NoteItemComponent implements OnInit {

    @Input() note: Note;

    constructor() { }

    ngOnInit() {}

}
