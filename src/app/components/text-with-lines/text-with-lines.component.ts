import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-with-lines',
  standalone: true,
  imports: [],
  templateUrl: './text-with-lines.component.html',
  styleUrl: './text-with-lines.component.scss'
})
export class TextWithLinesComponent {
  @Input() text: string = '';
}
