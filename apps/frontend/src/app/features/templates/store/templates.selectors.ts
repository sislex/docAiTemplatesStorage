import { createFeatureSelector, createSelector } from '@ngrx/store';

import type { TemplatesState } from './templates.reducer';
import { adapter } from './templates.reducer';

export const selectTemplatesState = createFeatureSelector<TemplatesState>('templates');

const { selectAll, selectEntities } = adapter.getSelectors();

export const selectAllTemplates = createSelector(selectTemplatesState, selectAll);
export const selectTemplateEntities = createSelector(selectTemplatesState, selectEntities);
export const selectTemplatesLoading = createSelector(selectTemplatesState, (s) => s.loading);
export const selectTemplatesError = createSelector(selectTemplatesState, (s) => s.error);

export const selectTemplateById = (id: string) =>
  createSelector(selectTemplateEntities, (entities) => entities[id]);
