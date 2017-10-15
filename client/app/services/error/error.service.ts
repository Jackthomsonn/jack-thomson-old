import { IErrorResponse } from './../../interfaces/IErrorResponse';
import { IError } from './../../interfaces/IError';
import { DialogueService } from './../dialogue/dialogue.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {
  constructor(private dialogueService: DialogueService) { }

  public showError(response: IErrorResponse) {
    let user_message = '';

    const parsedError: IError = JSON.parse(response.error);
    user_message = parsedError.user_message;

    this.dialogueService.reason.next(user_message);

    this.dialogueService.showDialogue.next(true);
  }
}
