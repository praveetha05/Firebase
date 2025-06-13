import { Component, ViewEncapsulation } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'fire';

}
