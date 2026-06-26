import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { App } from './app';
import { API_BASE_URL } from './core/api.config';

describe('App', () => {
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    httpMock.expectOne(`${API_BASE_URL}/health`).flush({ status: 'UP', app: 'G-School Backend' });
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    httpMock.expectOne(`${API_BASE_URL}/health`).flush({ status: 'UP', app: 'G-School Backend' });
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('G-School Web');
  });

  it('should show the backend status when connected', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    httpMock.expectOne(`${API_BASE_URL}/health`).flush({ status: 'UP', app: 'G-School Backend' });
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const status = compiled.querySelector('.home__status')?.textContent ?? '';
    expect(status).toContain('Backend connecté : G-School Backend');
    expect(status).toContain('Statut : UP');
  });
});
