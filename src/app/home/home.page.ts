import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('cardAnimation', [
      state('inactive', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('active', style({
        transform: 'scale(1.1)',
        opacity: 0.7
      })),
      transition('inactive <=> active', [
        animate('300ms ease-in-out')
      ]),
    ])
  ]
})

export class HomePage {
  animationState = 'inactive';

  animateCard() {
    this.animationState = this.animationState === 'inactive' ? 'active' : 'inactive';}



  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}