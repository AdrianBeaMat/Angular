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

  protected mensaje() {
    const nuevoNombre = prompt('Dime nombre...')?.trim();
    if (nuevoNombre) {
      this.nombre.set(nuevoNombre);
    }
  }
}
