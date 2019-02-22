import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  messages;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }

  onMessagePosted() {
    this.getMessages()
  }

  onDialogClosed() {
    this.getMessages();
  }

  getMessages() {
    this.messageService.getAllMessages().subscribe(messages => {
      this.messages = messages;
    })
  }

}