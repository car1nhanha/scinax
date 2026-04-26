import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  imports: [],
  templateUrl: './default.html',
  styleUrl: './default.scss',
})
export class Default {
  private router = inject(Router);

  goToHome() {
    this.router.navigate(['']);
  }
}
