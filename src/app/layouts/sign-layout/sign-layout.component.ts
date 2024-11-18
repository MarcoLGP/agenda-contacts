import { Component, Input } from '@angular/core';
import { IconBorderedComponent } from "@components/icon-bordered/icon-bordered.component";
import { NgIcon } from '@ng-icons/core';
import { ionArrowBackOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-sign-layout',
  standalone: true,
  imports: [IconBorderedComponent, NgIcon],
  templateUrl: './sign-layout.component.html',
  styleUrl: './sign-layout.component.scss'
})
export class SignLayoutComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) icon!: string;

  @Input() backNavigation: boolean = false;

  public arrowBackIcon = ionArrowBackOutline;

  public quotes = [
    { text: "A lembrança é a agenda que carregamos no coração.", author: "William Shakespeare", role: "Dramaturgo e Poeta" },
    { text: "As conexões humanas são a verdadeira riqueza da vida.", author: "Henry David Thoreau", role: "Filósofo e Escritor" },
    { text: "A verdadeira arte de guardar contatos é construir pontes, e não apenas listas.", author: "Khalil Gibran", role: "Poeta e Filósofo" },
    { text: "Amizades e contatos são como estrelas no céu: elas nos guiam mesmo nos momentos mais escuros.", author: "Victor Hugo", role: "Escritor e Poeta" },
    { text: "Na delicada arte de cultivar contatos, cada nome é uma história esperando para florescer.", author: "Pablo Neruda", role: "Poeta e Diplomata" },
    { text: "O mais belo presente da vida é a amizade, e a agenda é onde ela floresce.", author: "Albert Camus", role: "Filósofo e Escritor" },
    { text: "Uma agenda bem cuidada é um jardim de memórias e oportunidades.", author: "Rabindranath Tagore", role: "Poeta e Filósofo" },
    { text: "Guardar contatos é preservar histórias, sonhos e futuros possíveis.", author: "Fernando Pessoa", role: "Poeta" },
    { text: "A arte de lembrar as pessoas está em valorizá-las, mesmo à distância.", author: "Clarice Lispector", role: "Escritora" },
    { text: "Cada contato na agenda é uma nova janela para o mundo.", author: "Antoine de Saint-Exupéry", role: "Escritor e Aviador" },
    { text: "Amigos são como notas na melodia da vida; a agenda é o compasso que os organiza.", author: "Ludwig van Beethoven", role: "Compositor" },
    { text: "Uma boa agenda é a melhor aliada de uma mente ocupada e um coração aberto.", author: "Maya Angelou", role: "Poeta e Ativista" },
    { text: "A tecnologia passa, mas o valor de um bom contato é eterno.", author: "Steve Jobs", role: "Empreendedor e Visionário" },
    { text: "A vida é feita de encontros, e a agenda é o livro onde os registramos.", author: "Vinicius de Moraes", role: "Poeta e Compositor" },
    { text: "Manter contatos é nutrir relações; é a essência do que nos torna humanos.", author: "Carl Jung", role: "Psicólogo e Psiquiatra" }
  ];

  public currentQuoteIndex = 0;
  public currentQuote = this.quotes[0];

  private intervalId!: any;
  public isAnimating = false;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.isAnimating = true;

      setTimeout(() => {
        this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
        this.currentQuote = this.quotes[this.currentQuoteIndex];
        this.isAnimating = false; 
      }, 500); 
    }, 7000); 
  }
}
