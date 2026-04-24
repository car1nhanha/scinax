import { Component } from '@angular/core';
import { Card } from '../../atoms/card/card';
import { Default } from '../../templates/default/default';

@Component({
  selector: 'app-home',
  imports: [Default, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
