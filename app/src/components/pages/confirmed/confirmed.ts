import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBadgeCheck, lucideLink } from '@ng-icons/lucide';
import { Card } from '../../atoms/card/card';
import { Toast } from '../../atoms/toast/toast';
import { Default } from '../../templates/default/default';

@Component({
  selector: 'app-confirmed',
  imports: [Default, Toast, NgIcon, Card],
  templateUrl: './confirmed.html',
  styleUrl: './confirmed.scss',
  viewProviders: [provideIcons({ lucideLink, lucideBadgeCheck })],
})
export class Confirmed {
  link = 'devstage.com/codecraft-summit-2025/1289';
  showToast = signal(false);

  shareLink() {
    navigator.clipboard.writeText(this.link);
    this.showToast.set(true);

    setTimeout(() => {
      this.showToast.set(false);
    }, 3000);
  }
}
