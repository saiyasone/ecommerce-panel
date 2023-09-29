import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() display = false;
  @Output() closeEmit = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeEmit.emit();
  }
}
