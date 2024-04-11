import type { Category, Department, Location } from '@types';

export const prepareCategoriesOptions = (categories: Category[]) => {
  return categories.map(({ id, title }) => ({
    label: title,
    value: id,
  }));
};

export const prepareLocationOptions = (locations: Location[]) => {
  return locations.map(({ id, title }) => ({
    label: title,
    value: id,
  }));
};

export const prepareDepartmentsOptions = (departments: Department[]) => {
  return departments.map(({ id, title }) => ({
    label: title,
    value: id,
  }));
};

export const getPrioritiesOptions = () => {
  return [
    {
      label: 'کم',
      value: 0,
    },
    {
      label: 'متوسط',
      value: 2,
    },
    {
      label: 'زیاد',
      value: 3,
    },
  ];
};
