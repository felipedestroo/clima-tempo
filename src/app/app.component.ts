import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string = '';
  weatherData: any = null;
  error: string = '';

  private apiKey: string = 'deb270b3f6218164ccaac3983eb72d3a';
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather() {
    if (!this.city.trim()) {
      this.error = 'Por favor, insira o nome de uma cidade.';
      this.weatherData = null;
      return;
    }

    const url = `${this.apiUrl}?q=${this.city}&appid=${this.apiKey}&units=metric&lang=pt_br`;

    this.http.get(url).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.error = '';
      },
      error: (err) => {
        this.weatherData = null;
        if (err.status === 404) {
          this.error = 'Cidade não encontrada.';
        } else {
          this.error = 'Erro ao buscar dados do clima.';
        }
      }
    });
  }
}
