import type { EntityState, EntityAdapter } from '@ngrx/entity';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import type { TemplateSummary } from '@templateStorage/shared-types';

import * as Actions from './templates.actions';

export interface TemplatesState extends EntityState<TemplateSummary> {
  loading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<TemplateSummary> = createEntityAdapter<TemplateSummary>();

export const initialState: TemplatesState = adapter.getInitialState({
  loading: false,
  error: null,
});

export const templatesReducer = createReducer(
  initialState,

  on(Actions.loadAll, (state) => ({ ...state, loading: true, error: null })),
  on(Actions.loadAllSuccess, (state, { templates }) =>
    adapter.setAll(templates, { ...state, loading: false }),
  ),
  on(Actions.loadAllFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(Actions.deleteTemplateSuccess, (state, { id }) => adapter.removeOne(id, state)),

  on(Actions.uploadSuccess, (state, { id, metadata }) =>
    adapter.addOne(
      {
        id,
        name: metadata.name,
        description: metadata.description,
        placeholderCount: metadata.placeholders.length,
        createdAt: metadata.createdAt,
        updatedAt: metadata.updatedAt,
      },
      state,
    ),
  ),

  on(Actions.updateMetadataSuccess, (state, { metadata }) =>
    adapter.updateOne(
      {
        id: metadata.id,
        changes: {
          name: metadata.name,
          description: metadata.description,
          placeholderCount: metadata.placeholders.length,
          updatedAt: metadata.updatedAt,
        },
      },
      state,
    ),
  ),
);
