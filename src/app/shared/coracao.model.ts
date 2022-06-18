export class Coracao {
  public cheio: boolean;
  public urlCoracaoCheio = '/assets/coracao_cheio.png';
  public urlCoracaoVazio = '/assets/coracao_vazio.png';
  constructor(data = {}) {
    Object.assign(this, data);
  }
  public exibeCoracao (): string {
    if (this.cheio) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }
}
