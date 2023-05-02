import * as toolkitRaw from '@reduxjs/toolkit';

export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

export const createSliceRaw = createSlice;

export const HYDRATE = '__REDUX_WRAPPER_HYDRATE__';

export const PRELOADED_STATE = '__PRELOADED_STATE__';
