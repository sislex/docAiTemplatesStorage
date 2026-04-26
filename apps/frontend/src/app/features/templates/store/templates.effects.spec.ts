import type { TemplateSummary, TemplateMetadata } from '@templateStorage/shared-types';
import { of, throwError } from 'rxjs';

import type { TemplatesApiService } from '../services/templates-api.service';

import * as Actions from './templates.actions';
import { TemplatesEffects } from './templates.effects';

describe('TemplatesEffects', () => {
  let effects: TemplatesEffects;
  let api: jest.Mocked<TemplatesApiService>;

  const mockSummary: TemplateSummary = {
    id: '1',
    name: 'T1',
    description: '',
    placeholderCount: 0,
    createdAt: '',
    updatedAt: '',
  };

  const mockMetadata: TemplateMetadata = {
    id: '1',
    name: 'T1',
    description: '',
    placeholders: [],
    createdAt: '',
    updatedAt: '',
  };

  beforeEach(() => {
    api = {
      getAll: jest.fn(),
      getOne: jest.fn(),
      upload: jest.fn(),
      validate: jest.fn(),
      updateMetadata: jest.fn(),
      delete: jest.fn(),
      downloadFile: jest.fn(),
      downloadMetadata: jest.fn(),
      downloadBundle: jest.fn(),
    } as any;
  });

  function createEffects(source$: any): TemplatesEffects {
    return new TemplatesEffects(source$, api);
  }

  describe('loadAll$', () => {
    it('should return loadAllSuccess on success', (done) => {
      api.getAll.mockReturnValue(of([mockSummary]));
      const eff = createEffects(of(Actions.loadAll()));

      eff.loadAll$.subscribe((action) => {
        expect(action).toEqual(Actions.loadAllSuccess({ templates: [mockSummary] }));
        done();
      });
    });

    it('should return loadAllFailure on error', (done) => {
      api.getAll.mockReturnValue(throwError(() => new Error('fail')));
      const eff = createEffects(of(Actions.loadAll()));

      eff.loadAll$.subscribe((action) => {
        expect(action).toEqual(Actions.loadAllFailure({ error: 'fail' }));
        done();
      });
    });
  });

  describe('loadOne$', () => {
    it('should return loadOneSuccess on success', (done) => {
      api.getOne.mockReturnValue(of(mockMetadata));
      const eff = createEffects(of(Actions.loadOne({ id: '1' })));

      eff.loadOne$.subscribe((action) => {
        expect(action).toEqual(Actions.loadOneSuccess({ template: mockMetadata }));
        done();
      });
    });
  });

  describe('upload$', () => {
    it('should return uploadSuccess on success', (done) => {
      const file = new File([''], 'test.docx');
      api.upload.mockReturnValue(of({ id: '1', metadata: mockMetadata }));
      const eff = createEffects(of(Actions.upload({ file })));

      eff.upload$.subscribe((action) => {
        expect(action).toEqual(Actions.uploadSuccess({ id: '1', metadata: mockMetadata }));
        done();
      });
    });
  });

  describe('deleteTemplate$', () => {
    it('should return deleteTemplateSuccess on success', (done) => {
      api.delete.mockReturnValue(of(undefined));
      const eff = createEffects(of(Actions.deleteTemplate({ id: '1' })));

      eff.deleteTemplate$.subscribe((action) => {
        expect(action).toEqual(Actions.deleteTemplateSuccess({ id: '1' }));
        done();
      });
    });
  });

  describe('updateMetadata$', () => {
    it('should return updateMetadataSuccess on success', (done) => {
      api.updateMetadata.mockReturnValue(of(mockMetadata));
      const eff = createEffects(
        of(Actions.updateMetadata({ id: '1', metadata: { name: 'Updated' } })),
      );

      eff.updateMetadata$.subscribe((action) => {
        expect(action).toEqual(Actions.updateMetadataSuccess({ metadata: mockMetadata }));
        done();
      });
    });
  });
});
