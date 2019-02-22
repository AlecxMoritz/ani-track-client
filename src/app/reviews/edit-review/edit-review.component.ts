import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {
  @Input() review;
  @Output() dialogClosed = new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data:  this.review
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogClosed.emit();
    });
  }

  ngOnInit() {
  }
}