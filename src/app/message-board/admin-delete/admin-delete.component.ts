import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdminDeleteDialogComponent } from '../admin-delete-dialog/admin-delete-dialog.component';
// import { AdminDeleteDialogComponent } from './admin-delete.component';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {
  @Input() messageId;  
  @Output() dialogClosed = new EventEmitter<any>();
  
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminDeleteDialogComponent, {
      width: '250px',
      data: this.messageId
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogClosed.emit();
    });
  }

  ngOnInit() {
  }

}
