import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {
  unidadeOption: string = '';
  enderecoOption: string = '';
  cardsFiltrados: any[] = [];
  unidades: string[] = ['Click Componentes', 'Click & Cell', 'Stilo Cell'];
  enderecos: string[] = ['Avenida Presidente Vargas', 'Avenida Rubens Caramez'];
  items = [
    { unidade: 'Click Componentes', endereco: 'Avenida Presidente Vargas, N°217', foto: '../assets/images/clickComponentes.jpg' },
    { unidade: 'Click & Cell', endereco: 'Avenida Rúbens Caramez, N°220', foto: '../assets/images/Stillo cell.jpg' },
    { unidade: 'Stilo Cell', endereco: 'Avenida Rubens Caramez, N°175 - Central de Ofertas', foto: '../assets/images/Stillo cell.jpg' },
  ];

  unidadeDisable = false;
  enderecoDisable = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    localStorage.setItem('itemsOriginal', JSON.stringify(this.items));

    this.route.queryParams.subscribe((queryParams) => {
      this.unidadeOption = queryParams['unidade'] || '';
      this.enderecoOption = queryParams['endereco'] || '';
    });

    if(this.unidadeOption != '' || this.enderecoOption != ''){
      this.filtrarCards();
    }
  }


  filtrarCards() {
    const itemsOriginalJSON = localStorage.getItem('itemsOriginal');
    const itemsOriginal = itemsOriginalJSON ? JSON.parse(itemsOriginalJSON) : [];
  
    if (this.unidadeOption === '' && this.enderecoOption === '') {
      this.items = itemsOriginal;
    } else {
      this.cardsFiltrados = itemsOriginal.filter((item: { unidade: string; endereco: string; }) => {
        const unidadeMatch = this.unidadeOption === '' || item.unidade === this.unidadeOption;
        const enderecoMatch = this.enderecoOption === '' || item.endereco === this.enderecoOption;
        return unidadeMatch && enderecoMatch;
      });
      this.items = this.cardsFiltrados;
    }
  }
}
