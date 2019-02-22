import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: any;
  editable;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.editable = this.adminService.getAdminStatus();
  }

}
