import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Output() dialogClosed = new EventEmitter<any>();
  @Input() message: any;
  editable;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.editable = this.adminService.getAdminStatus();
  }

  onDialogClosed() {
    this.dialogClosed.emit()
  }

}
