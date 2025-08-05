import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  menuOption:string = '';

  onOption(menuOption:string)
  {
    this.menuOption = menuOption;
  }
}
