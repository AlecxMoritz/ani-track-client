import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-delete-review',
  templateUrl: './delete-review.component.html',
  styleUrls: ['./delete-review.component.css']
})
export class DeleteReviewComponent implements OnInit {
  @Input() reviewId;
  @Output() dialogClosed = new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '250px',
      data: this.reviewId
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogClosed.emit();
    });
  }

  ngOnInit() {
  }

}
