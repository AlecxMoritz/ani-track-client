import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostMessageComponent } from '../post-message/post-message.component';

@Component({
  selector: 'app-message-index',
  templateUrl: './message-index.component.html',
  styleUrls: ['./message-index.component.css']
})
export class MessageIndexComponent implements OnInit {
  @Output() dialogClosed = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostMessageComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogClosed.emit();
    });
  }

  ngOnInit() {
  }

}
