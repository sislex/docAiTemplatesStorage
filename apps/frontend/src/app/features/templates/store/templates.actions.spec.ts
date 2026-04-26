import * as Actions from './templates.actions';

describe('Templates Actions', () => {
  it('loadAll should create action', () => {
    const action = Actions.loadAll();
    expect(action.type).toBe('[Templates] Load All');
  });

  it('loadAllSuccess should carry templates payload', () => {
    const templates = [
      { id: '1', name: 'T1', description: '', placeholderCount: 0, createdAt: '', updatedAt: '' },
    ];
    const action = Actions.loadAllSuccess({ templates });
    expect(action.templates).toEqual(templates);
  });

  it('loadAllFailure should carry error', () => {
    const action = Actions.loadAllFailure({ error: 'fail' });
    expect(action.error).toBe('fail');
  });

  it('upload should carry file', () => {
    const file = new File([''], 'test.docx');
    const action = Actions.upload({ file });
    expect(action.file).toBe(file);
  });

  it('deleteTemplate should carry id', () => {
    const action = Actions.deleteTemplate({ id: '42' });
    expect(action.id).toBe('42');
  });

  it('downloadFile should carry id', () => {
    const action = Actions.downloadFile({ id: '1' });
    expect(action.id).toBe('1');
  });

  it('downloadMetadata should carry id', () => {
    const action = Actions.downloadMetadata({ id: '1' });
    expect(action.id).toBe('1');
  });

  it('downloadBundle should carry id', () => {
    const action = Actions.downloadBundle({ id: '1' });
    expect(action.id).toBe('1');
  });
});
