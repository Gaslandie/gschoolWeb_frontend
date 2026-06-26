import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from './api.config';

/** Réponse de l'endpoint GET /api/health du backend. */
export interface HealthResponse {
  status: string;
  app: string;
}

/** Service minimal pour vérifier l'état du backend. */
@Injectable({ providedIn: 'root' })
export class HealthService {
  private readonly http = inject(HttpClient);

  check(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(`${API_BASE_URL}/health`);
  }
}
