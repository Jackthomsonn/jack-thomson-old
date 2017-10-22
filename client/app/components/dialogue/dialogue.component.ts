import { DialogueService } from './../../services/dialogue/dialogue.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dialogue',
  templateUrl: 'dialogue.component.html',
  styleUrls: ['dialogue.component.scss']
})

export class DialogueComponent implements OnInit {
  public showDialogue: boolean;
  public reason: string;

  constructor(private dialogueService: DialogueService) { }

  public closeDialogue() {
    this.showDialogue = !this.showDialogue;
  }

  public ngOnInit() {
    this.dialogueService.showDialogue.subscribe((shouldShow: boolean) => {
      this.showDialogue = shouldShow;
    });
    this.dialogueService.reason.subscribe((reason) => {
      this.reason = reason;
    });
  }
}
