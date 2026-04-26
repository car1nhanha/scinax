import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideMail, lucidePhone, lucideRadio } from '@ng-icons/lucide';
import { Card } from '../../atoms/card/card';
import { InputComponent } from '../../molecules/input/input';
import { Default } from '../../templates/default/default';

@Component({
  selector: 'app-home',
  imports: [Default, Card, InputComponent, NgIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  viewProviders: [provideIcons({ lucideRadio, lucideArrowRight, lucideMail, lucidePhone })],
})
export class Home {
  private router = inject(Router);

  goToConfirmed() {
    this.router.navigate(['/confirmed/1234']);
  }
}
