export class Frase {
  public fraseEng: string;
  public  frasePtBr: string;
  constructor(data = {}) {
    Object.assign(this, data);
  }
}
