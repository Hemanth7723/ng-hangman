import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HangmanDisplayComponent } from './components/hangman-display/hangman-display.component';
import { HangmanQuestionComponent } from './components/hangman-question/hangman-question.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { HangmanKeyboardComponent } from './components/hangman-keyboard/hangman-keyboard.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HangmanComponent,
        HangmanDisplayComponent,
        HangmanKeyboardComponent,
        HangmanQuestionComponent
      ],
    }).compileComponents();
  });


});
