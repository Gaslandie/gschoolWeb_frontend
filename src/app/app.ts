import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HealthResponse, HealthService } from './core/health.service';

type ConnectionState = 'loading' | 'connected' | 'error';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly healthService = inject(HealthService);

  protected readonly title = signal('G-School Web');
  protected readonly subtitle = signal('Plateforme de formation en ligne');
  protected readonly state = signal<ConnectionState>('loading');
  protected readonly health = signal<HealthResponse | null>(null);

  ngOnInit(): void {
    this.healthService.check().subscribe({
      next: (response) => {
        this.health.set(response);
        this.state.set('connected');
      },
      error: () => this.state.set('error')
    });
  }
}
