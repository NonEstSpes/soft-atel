import {Component, input, InputSignal} from '@angular/core';
import {Title} from '../config';

@Component({
  selector: 'app-management',
  standalone: false,

  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent {
  isWorked: InputSignal<boolean> = input(false)
  protected readonly Title = Title;
}
