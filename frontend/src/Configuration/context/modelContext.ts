import useAuthModel from '@/logic/models/useAuthModel';
import useClassModel from '@/logic/models/useClassModel';
import useParentModel from '@/logic/models/useParentModel';
import useStudentModel from '@/logic/models/useStudentModel';
import useSubjectModel from '@/logic/models/useSubjectModel';
import useSystemAdminModel from '@/logic/models/useSystemAdminModel';
import useTeacherModel from '@/logic/models/useTeacherModel';

export const injectAuthModel = () => {
  return useAuthModel;
};

export const injectClassModel = () => {
  return useClassModel;
};

export const injectParentModel = () => {
  return useParentModel;
};

export const injectStudentModel = () => {
  return useStudentModel;
};

export const injectSubjectModel = () => {
  return useSubjectModel;
};

export const injectSystemAdminModel = () => {
  return useSystemAdminModel;
};

export const injectTeacherModel = () => {
  return useTeacherModel;
};
