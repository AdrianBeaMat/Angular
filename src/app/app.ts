import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly nombre = signal('Otorbi');

  protected cambiarNombre(valor: string) {
    const nuevoNombre = valor.trim();
    if (nuevoNombre) {
      this.nombre.set(nuevoNombre);
    }
  }
}
