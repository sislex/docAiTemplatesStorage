import type { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type {
  TemplateSummary,
  TemplateMetadata,
  UploadResponse,
  ValidateResponse,
} from '@templateStorage/shared-types';
import type { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TemplatesApiService {
  private readonly base = `${environment.apiBaseUrl}/templates`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<TemplateSummary[]> {
    return this.http.get<TemplateSummary[]>(this.base);
  }

  getOne(id: string): Observable<TemplateMetadata> {
    return this.http.get<TemplateMetadata>(`${this.base}/${id}/metadata`);
  }

  upload(file: File): Observable<UploadResponse> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<UploadResponse>(this.base, fd);
  }

  validate(file: File): Observable<ValidateResponse> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<ValidateResponse>(`${this.base}/validate`, fd);
  }

  updateMetadata(id: string, body: Partial<TemplateMetadata>): Observable<TemplateMetadata> {
    return this.http.patch<TemplateMetadata>(`${this.base}/${id}/metadata`, body);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  downloadFile(id: string): Observable<Blob> {
    return this.http.get(`${this.base}/${id}/file`, { responseType: 'blob' });
  }

  downloadMetadata(id: string): Observable<Blob> {
    return this.http.get(`${this.base}/${id}/metadata`, {
      responseType: 'blob',
      headers: { Accept: 'application/json' },
    });
  }

  downloadBundle(id: string): Observable<Blob> {
    return this.http.get(`${this.base}/${id}/bundle`, { responseType: 'blob' });
  }
}
