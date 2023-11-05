import { createSlice } from '@reduxjs/toolkit';
import UserShortDto from '@/model/UserShortDto.ts';
import SubjectDto from '@/model/SubjectDto.ts';
import ClassDto from '@/model/ClassDto.ts';
import SchoolDataDto from '@/model/SchoolDataDto.ts';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import ParentDto from '@/model/ParentDto.ts';

interface SchoolState {
  schoolData: SchoolDataDto;
  students: Array<UserShortDto>;
  teachers: Array<UserShortDto>;
  parents: Array<ParentDto>;
  subjects: Array<SubjectDto>;
  classes: Array<ClassDto>;
}

const initialState: SchoolState = {
  schoolData: {
    id: -1,
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phoneNumber: '',
    email: '',
    website: '',
    logoUrl: '',
  },
  students: [],
  teachers: [],
  parents: [],
  subjects: [],
  classes: [],
};

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    setSchoolData(state, action) {
      state.schoolData = action.payload;
    },
    setStudents(state, action) {
      state.students = action.payload;
    },
    setTeachers(state, action) {
      state.teachers = action.payload;
    },
    setParents(state, action) {
      state.parents = action.payload;
    },
    setSubjects(state, action) {
      state.subjects = action.payload;
    },
    setClasses(state, action) {
      state.classes = action.payload;
    },
  },
});

export default schoolSlice;
export const {
  setSchoolData,
  setStudents,
  setTeachers,
  setParents,
  setSubjects,
  setClasses,
} = schoolSlice.actions;

export const useSchool = () => useSelector((state: RootState) => state.school);
