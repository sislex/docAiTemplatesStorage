import type { TemplateSummary, TemplateMetadata } from '@templateStorage/shared-types';

import * as Actions from './templates.actions';
import { templatesReducer, initialState, TemplatesState } from './templates.reducer';

describe('Templates Reducer', () => {
  const mockSummary: TemplateSummary = {
    id: '1',
    name: 'Test',
    description: 'desc',
    placeholderCount: 2,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  };

  const mockMetadata: TemplateMetadata = {
    id: '1',
    name: 'Test',
    description: 'desc',
    placeholders: [],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  };

  it('should return initial state on unknown action', () => {
    const action = { type: 'NOOP' } as any;
    const state = templatesReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('loadAll should set loading true', () => {
    const state = templatesReducer(initialState, Actions.loadAll());
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('loadAllSuccess should populate entities and set loading false', () => {
    const state = templatesReducer(
      initialState,
      Actions.loadAllSuccess({ templates: [mockSummary] }),
    );
    expect(state.loading).toBe(false);
    expect(state.ids).toContain('1');
    expect(state.entities['1']).toEqual(mockSummary);
  });

  it('loadAllFailure should set error and loading false', () => {
    const state = templatesReducer(
      initialState,
      Actions.loadAllFailure({ error: 'Network error' }),
    );
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Network error');
  });

  it('deleteTemplateSuccess should remove entity', () => {
    let state = templatesReducer(
      initialState,
      Actions.loadAllSuccess({ templates: [mockSummary] }),
    );
    state = templatesReducer(state, Actions.deleteTemplateSuccess({ id: '1' }));
    expect(state.ids).not.toContain('1');
  });

  it('uploadSuccess should add entity', () => {
    const state = templatesReducer(
      initialState,
      Actions.uploadSuccess({ id: '1', metadata: mockMetadata }),
    );
    expect(state.ids).toContain('1');
  });
});
