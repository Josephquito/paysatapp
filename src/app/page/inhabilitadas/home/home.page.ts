import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  imports: [RouterLink],
})
export class HomePage {}
