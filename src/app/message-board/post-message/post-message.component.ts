import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.message = this.fb.group({
      content: new FormControl()
    })
  }

  postMessage() {
    this.messageService.postMessage(this.message.value).subscribe(data => {
      this.messagePosted.emit();
    })
  }

}
