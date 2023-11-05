const API_URL = 'https://localhost:5000/api';
const LOGIN = '/login';
const LOGOUT = '/logout';

// System Admin
const SYSTEM_ADMIN = '/sa';
const SHOW_SCHOOLS = `${SYSTEM_ADMIN}/schools`;
const CREATE_SCHOOL = `${SYSTEM_ADMIN}/schools/create`;
const EDIT_SCHOOL = `${SYSTEM_ADMIN}/schools/`;

// School Admin
const SCHOOL_ADMIN = '/sha';
const SHOW_CLASSES = `${SCHOOL_ADMIN}/classes`;
const EDIT_CLASS = `${SCHOOL_ADMIN}/classes/`;
const SHOW_SUBJECTS = `${SCHOOL_ADMIN}/subjects`;
const EDIT_SUBJECT = `${SCHOOL_ADMIN}/subjects/`;
const SHOW_STUDENTS = `${SCHOOL_ADMIN}/students`;
const SHOW_TEACHERS = `${SCHOOL_ADMIN}/teachers`;
const SHOW_PARENTS = `${SCHOOL_ADMIN}/parents`;

export {
  API_URL,
  LOGIN,
  LOGOUT,
  SYSTEM_ADMIN,
  SHOW_SCHOOLS,
  CREATE_SCHOOL,
  EDIT_SCHOOL,
  SCHOOL_ADMIN,
  SHOW_CLASSES,
  EDIT_CLASS,
  SHOW_SUBJECTS,
  EDIT_SUBJECT,
  SHOW_STUDENTS,
  SHOW_TEACHERS,
  SHOW_PARENTS,
};
