import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  /*
  public coracaoVazio = '/assets/coracao_vazio.png';
  public coracaoCheio = '/assets/coracao_cheio.png';
  */
  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao({cheio: true}),
    new Coracao({cheio: true}),
    new Coracao({cheio: true})
  ];

  constructor() {
  }
  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      const indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
  }
  ngOnInit() {
  }
}
