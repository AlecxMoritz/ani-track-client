import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PostReviewComponent } from '../post-review/post-review.component';



@Component({
  selector: 'app-review-index',
  templateUrl: './review-index.component.html',
  styleUrls: ['./review-index.component.css']
})
export class ReviewIndexComponent implements OnInit {

  @Output() dialogClosed = new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostReviewComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogClosed.emit();
    });
  }

  ngOnInit() {
  }
}