import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Output() editDialogClosed = new EventEmitter<any>();
  @Input() review: any;
  
  constructor() { }

  ngOnInit() {
  }

  onEditDialogClosed() {
    this.editDialogClosed.emit();
  }
}