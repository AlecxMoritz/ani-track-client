import { Component, OnInit, Inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-admin-delete-dialog',
  templateUrl: './admin-delete-dialog.component.html',
  styleUrls: ['./admin-delete-dialog.component.css']
})
export class AdminDeleteDialogComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    public dialogRef: MatDialogRef<AdminDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick() {
    console.log('clicked')
    this.messageService.deleteMessage(this.data).subscribe(data => {
      this.onNoClick();
    })
  }

}
