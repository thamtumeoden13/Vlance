import {
  cloneDeep as lodashCloneDeep,
  find as lodashFind,
  findIndex as lodashFindIndex,
  flattenDeep as lodashFlattenDeep,
  get as lodashGet,
  isEmpty as lodashIsEmpty,
  isEqual as lodashIsEqual,
  isString as lodashIsString,
  memoize as lodashMemoize,
  parseInt as lodashParseInt,
  remove as lodashRemove,
  size as lodashSize,
  unionBy as lodashUnionBy,
  uniqBy as lodashUniqueBy,
} from 'lodash';

import {
  addMonths as dateAddMonth,
  subMonths as dateSubMonth,
  addDays as dateAddDays,
  addWeeks as dateAddWeeks,
  endOfDay as dateEndOfDay,
  endOfWeek as dateEndOfWeek,
  format as dateFormat,
  getDate as dateGetDate,
  isAfter as dateIsAfter,
  isBefore as dateIsBefore,
  isSameDay as dateIsSameDay,
  startOfWeek as dateStartOfWeek,
  subWeeks as dateSubWeeks,
} from 'date-fns';
import {printLogs} from './logUtils';

// define lodash functions here instead of import all library  and use more then one function in different screens
export const isEmpty = (...args) => lodashIsEmpty(...args);
export const parseInt = (...args) => lodashParseInt(...args);
export const find = (...args) => lodashFind(...args);
export const unionBy = (...args) => lodashUnionBy(...args);
export const get = (...args) => lodashGet(...args);
export const isString = (...args) => lodashIsString(...args);
export const isEqual = (...args) => lodashIsEqual(...args);
export const memoize = (...args) => lodashMemoize(...args);
export const cloneDeep = (...args) => lodashCloneDeep(...args);
export const flattenDeep = (...args) => lodashFlattenDeep(...args);
export const remove = (...args) => lodashRemove(...args);
export const uniqBy = (...args) => lodashUniqueBy(...args);
export const findIndex = (...args) => lodashFindIndex(...args);
export const size = (...args) => lodashSize(...args);

export const subWeeks = dateSubWeeks;
export const isSameDay = dateIsSameDay;
export const isBefore = dateIsBefore;
export const isAfter = dateIsAfter;
export const format = dateFormat;
export const endOfDay = dateEndOfDay;
export const addWeeks = dateAddWeeks;
export const endOfWeek = dateEndOfWeek;
export const getDate = dateGetDate;
export const startOfWeek = dateStartOfWeek;
export const addDays = dateAddDays;
export const addMonth = dateAddMonth;
export const subMonth = dateSubMonth;

export const replace = (key, value, selectedOption, array, setArrayList) => {
  printLogs('replace', key, value, selectedOption, array, setArrayList);
  // setArrayList(
  array.forEach(function (o) {
    if (o.tenLoaiHso === selectedOption) {
      printLogs('if', o.tenLoaiHso === selectedOption);
      if (key in o) {
        o[key] = value;
        printLogs('ifff', (o[key] = value));
      }
    }
  });

  // );
};
