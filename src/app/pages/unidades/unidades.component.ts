import { Component } from '@angular/core';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent {
  unidadeOption: string = '';
  enderecoOption: string = '';
  unidades: string[] = ['Click Componentes', 'Click & Cell', 'Stilo Cell'];
  enderecos = ['Avenida Presidente Vargas' , 'Avenida Rubens Caramez', 'Avenida Rubens Caramez'];
  items = [
    { title: 'Card 1', imageUrl: 'URL_DA_IMAGEM_1' },
    { title: 'Card 2', imageUrl: 'URL_DA_IMAGEM_2' },
  ];
}
