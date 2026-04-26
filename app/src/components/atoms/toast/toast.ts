import { Component, Input } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-toast',
  imports: [Card],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {
  @Input({ required: true }) message!: string;
}
