import { Injectable } from '@angular/core';
import type { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';

import type { TemplatesApiService } from '../services/templates-api.service';

import * as TemplateActions from './templates.actions';

@Injectable()
export class TemplatesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly api: TemplatesApiService,
  ) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TemplateActions.loadAll),
      exhaustMap(() =>
        this.api.getAll().pipe(
          map((templates) => TemplateActions.loadAllSuccess({ templates })),
          catchError((err) => of(TemplateActions.loadAllFailure({ error: err.message }))),
        ),
      ),
    ),
  );

  loadOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TemplateActions.loadOne),
      exhaustMap(({ id }) =>
        this.api.getOne(id).pipe(
          map((template) => TemplateActions.loadOneSuccess({ template })),
          catchError((err) => of(TemplateActions.loadOneFailure({ error: err.message }))),
        ),
      ),
    ),
  );

  upload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TemplateActions.upload),
      exhaustMap(({ file }) =>
        this.api.upload(file).pipe(
          map((res) => TemplateActions.uploadSuccess({ id: res.id, metadata: res.metadata })),
          catchError((err) => of(TemplateActions.uploadFailure({ error: err.message }))),
        ),
      ),
    ),
  );

  validate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TemplateActions.validate),
      exhaustMap(({ file }) =>
        this.api.validate(file).pipe(
          map((result) => TemplateActions.validateSuccess({ result })),
          catchError((err) => of(TemplateActions.validateFailure({ error: err.message }))),
        ),
      ),
    ),
  );

  updateMetadata$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TemplateActions.updateMetadata),
      exhaustMap(({ id, metadata }) =>
        this.api.updateMetadata(id, metadata).pipe(
          map((updated) => TemplateActions.updateMetadataSuccess({ metadata: updated })),
          catchError((err) => of(TemplateActions.updateMetadataFailure({ error: err.message }))),
        ),
      ),
    ),
  );

  deleteTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TemplateActions.deleteTemplate),
      exhaustMap(({ id }) =>
        this.api.delete(id).pipe(
          map(() => TemplateActions.deleteTemplateSuccess({ id })),
          catchError((err) => of(TemplateActions.deleteTemplateFailure({ error: err.message }))),
        ),
      ),
    ),
  );

  downloadFile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TemplateActions.downloadFile),
        exhaustMap(({ id }) =>
          this.api.downloadFile(id).pipe(
            tap((blob) => this.saveBlobAs(blob, `${id}.docx`)),
            catchError(() => of(null)),
          ),
        ),
      ),
    { dispatch: false },
  );

  downloadMetadata$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TemplateActions.downloadMetadata),
        exhaustMap(({ id }) =>
          this.api.downloadMetadata(id).pipe(
            tap((blob) => this.saveBlobAs(blob, `${id}-metadata.json`)),
            catchError(() => of(null)),
          ),
        ),
      ),
    { dispatch: false },
  );

  downloadBundle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TemplateActions.downloadBundle),
        exhaustMap(({ id }) =>
          this.api.downloadBundle(id).pipe(
            tap((blob) => this.saveBlobAs(blob, `${id}-bundle.zip`)),
            catchError(() => of(null)),
          ),
        ),
      ),
    { dispatch: false },
  );

  private saveBlobAs(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}
