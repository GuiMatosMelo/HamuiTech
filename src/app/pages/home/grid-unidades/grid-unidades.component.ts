import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-unidades',
  templateUrl: './grid-unidades.component.html',
  styleUrls: ['./grid-unidades.component.css']
})
export class GridUnidadesComponent {
  unidadeOption: string = '';
  enderecoOption: string = '';
  unidades: string[] = ['Click Componentes', 'Click & Cell', 'Stilo Cell'];
  enderecos = ['Avenida Presidente Vargas' , 'Avenida Rubens Caramez', 'Avenida Rubens Caramez'];
}
