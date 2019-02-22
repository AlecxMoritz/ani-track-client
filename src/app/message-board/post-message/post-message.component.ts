import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.css']
})
export class PostMessageComponent implements OnInit {
  message: FormGroup;
  @Output() messagePosted = new EventEmitter<any>()
  constructor(
    private messageService: MessageService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PostMessageComponent>
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.message = this.fb.group({
      content: new FormControl()
    })
  }

  postMessage() {
    this.messageService.postMessage(this.message.value).subscribe(data => {
      this.messagePosted.emit();
      this.onNoClick()
    })
  }

}
