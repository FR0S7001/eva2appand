import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage  {
  isModalOpen = false;
  newTopic = {
    title: '',
    description: ''
  };

  constructor(private modalController: ModalController) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  createTopic() {
    // Lógica para crear el tema
    console.log('Nuevo Tema:', this.newTopic);
    this.closeModal();
  }
}