import { createAction, props } from '@ngrx/store';
import type {
  TemplateMetadata,
  TemplateSummary,
  ValidateResponse,
} from '@templateStorage/shared-types';

// Load all
export const loadAll = createAction('[Templates] Load All');
export const loadAllSuccess = createAction(
  '[Templates] Load All Success',
  props<{ templates: TemplateSummary[] }>(),
);
export const loadAllFailure = createAction(
  '[Templates] Load All Failure',
  props<{ error: string }>(),
);

// Load one
export const loadOne = createAction('[Templates] Load One', props<{ id: string }>());
export const loadOneSuccess = createAction(
  '[Templates] Load One Success',
  props<{ template: TemplateMetadata }>(),
);
export const loadOneFailure = createAction(
  '[Templates] Load One Failure',
  props<{ error: string }>(),
);

// Upload
export const upload = createAction('[Templates] Upload', props<{ file: File }>());
export const uploadSuccess = createAction(
  '[Templates] Upload Success',
  props<{ id: string; metadata: TemplateMetadata }>(),
);
export const uploadFailure = createAction('[Templates] Upload Failure', props<{ error: string }>());

// Validate
export const validate = createAction('[Templates] Validate', props<{ file: File }>());
export const validateSuccess = createAction(
  '[Templates] Validate Success',
  props<{ result: ValidateResponse }>(),
);
export const validateFailure = createAction(
  '[Templates] Validate Failure',
  props<{ error: string }>(),
);

// Update metadata
export const updateMetadata = createAction(
  '[Templates] Update Metadata',
  props<{ id: string; metadata: Partial<TemplateMetadata> }>(),
);
export const updateMetadataSuccess = createAction(
  '[Templates] Update Metadata Success',
  props<{ metadata: TemplateMetadata }>(),
);
export const updateMetadataFailure = createAction(
  '[Templates] Update Metadata Failure',
  props<{ error: string }>(),
);

// Delete
export const deleteTemplate = createAction('[Templates] Delete', props<{ id: string }>());
export const deleteTemplateSuccess = createAction(
  '[Templates] Delete Success',
  props<{ id: string }>(),
);
export const deleteTemplateFailure = createAction(
  '[Templates] Delete Failure',
  props<{ error: string }>(),
);

// Downloads
export const downloadFile = createAction('[Templates] Download File', props<{ id: string }>());
export const downloadMetadata = createAction(
  '[Templates] Download Metadata',
  props<{ id: string }>(),
);
export const downloadBundle = createAction('[Templates] Download Bundle', props<{ id: string }>());
