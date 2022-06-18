import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao = 'Traduza a frase';
  public frases: Frase[] = FRASES;
  public resposta: string;
  public rodada: number;
  public rodadaFrase: Frase;
  public progresso: number;
  public tentativas: number;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();
  constructor() {
    this.rodada = 0;
    this.progresso = 0;
    this.tentativas = 3;
    this.atualizaRodada();
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }

  public atualizarResposta(resp: Event) {
    // console.log((<HTMLInputElement>resp.target).value);
    this.resposta = (<HTMLInputElement>resp.target).value;
  }

  public verificarResposta() {
    // tradução correta
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      // trocar a pergunta e a rodada
        this.rodada++;
        this.atualizaRodada();
      if (this.rodada <= (this.frases.length - 1)) {
        // progresso
        this.progresso += (100 / this.frases.length);
      }
      if (this.rodada === this.frases.length) {
        this.encerrarJogo.emit('vitoria');
      }
    } else {
      this.tentativas--;
    }

    if (this.tentativas === -1) {
      this.encerrarJogo.emit('derrota');
    }
  }
  public atualizaRodada() {
    this.rodadaFrase = this.frases[this.rodada];
    // limpar a resposta do usuario
    this.resposta = '';
  }
}
