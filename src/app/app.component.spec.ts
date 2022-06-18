import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('Deve criar o app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('deve encerrar o jogo como derrota', async(() => {
    const tipoFinalizacao = 'derrota';
    const app = new AppComponent();
    app.encerrarJogo(tipoFinalizacao);
    expect(app.jogoEmAndamento).toEqual(false);
    expect(app.tipoEncerramento).toEqual(tipoFinalizacao);
  }));
  it('deve encerrar o jogo como vitoria', async(() => {
    const tipoFinalizacao = 'vitoria';
    const app = new AppComponent();
    app.encerrarJogo(tipoFinalizacao);
    expect(app.jogoEmAndamento).toEqual(false);
    expect(app.tipoEncerramento).toEqual(tipoFinalizacao);
  }));
  it('deve reiniciar o jogo', async(() => {
    const app = new AppComponent();
    app.reiniciarJogo();
    expect(app.jogoEmAndamento).toEqual(false);
    expect(app.tipoEncerramento).toEqual(undefined);
  }));
});
