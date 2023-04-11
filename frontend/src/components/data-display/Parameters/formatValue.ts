import { ParametersValue } from './Parameters';

export const formatValue = (value?: ParametersValue) => {
  if (value === null || value === undefined) {
    return '—';
  } else if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  } else if (Array.isArray(value)) {
    return value.join(', ');
  } else {
    return value;
  }
};
