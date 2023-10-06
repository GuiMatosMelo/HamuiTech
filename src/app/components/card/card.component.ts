import { Component, Input } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() unidade: string = '';
  @Input() endereco: string = '';
  @Input() foto: string = '';

  whatsappIcon = faWhatsapp;

  enviarMensagemWhatsApp(): void {
    const phoneNumber = '5511940645167';
    const message = 'Olá! Gostaria de realizar um orçamento com vocês. \n\nUnidade: ' + this.unidade;

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappLink);
  }
}
