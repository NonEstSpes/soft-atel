import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  isMy: InputSignal<boolean> = input(true)
  numbers: number[] = []
  isListVisible = false;

  constructor() {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }

  toggleList() {
    this.isListVisible = !this.isListVisible;
  }
}
