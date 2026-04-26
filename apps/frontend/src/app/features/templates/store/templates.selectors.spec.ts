import type { TemplateSummary } from '@templateStorage/shared-types';

import type { TemplatesState } from './templates.reducer';
import { initialState, adapter } from './templates.reducer';
import * as Selectors from './templates.selectors';

describe('Templates Selectors', () => {
  const mockTemplate: TemplateSummary = {
    id: '1',
    name: 'T1',
    description: '',
    placeholderCount: 0,
    createdAt: '',
    updatedAt: '',
  };

  const populatedState: TemplatesState = adapter.addOne(mockTemplate, initialState);

  const rootState = { templates: populatedState };

  it('selectAllTemplates should return all entities', () => {
    const result = Selectors.selectAllTemplates(rootState);
    expect(result.length).toBe(1);
    expect(result[0]!.id).toBe('1');
  });

  it('selectTemplatesLoading should return loading flag', () => {
    const state = { templates: { ...initialState, loading: true } };
    expect(Selectors.selectTemplatesLoading(state)).toBe(true);
  });

  it('selectTemplatesError should return error', () => {
    const state = { templates: { ...initialState, error: 'err' } };
    expect(Selectors.selectTemplatesError(state)).toBe('err');
  });

  it('selectTemplateById should return entity by id', () => {
    const selector = Selectors.selectTemplateById('1');
    const result = selector(rootState);
    expect(result).toEqual(mockTemplate);
  });
});
