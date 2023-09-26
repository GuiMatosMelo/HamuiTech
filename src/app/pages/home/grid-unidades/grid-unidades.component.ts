import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-unidades',
  templateUrl: './grid-unidades.component.html',
  styleUrls: ['./grid-unidades.component.css']
})
export class GridUnidadesComponent {
  unidadeOption: string = '';
  enderecoOption: string = '';
  unidades: string[] = ['Click Componentes', 'Click & Cell', 'Stilo Cell'];
  enderecos = ['Avenida Presidente Vargas' , 'Avenida Rubens Caramez'];

  constructor(private router: Router) {}

  enviarOpcoesSelecionadas() {
    this.router.navigate(['/unidades'], {
      queryParams: { unidade: this.unidadeOption, endereco: this.enderecoOption },
    });
  }
}
