import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-input',
  imports: [NgIcon],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  @Input({ required: true }) iconName!: string;
  @Input({ required: true }) placeholder!: string;
}
