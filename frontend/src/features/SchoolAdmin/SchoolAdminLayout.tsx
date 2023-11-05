import { useAuth } from '@/store/slices/authSlice.ts';
import { UserRoles } from '@/model/UserRoles.ts';
import { HeaderText, Navigation, SpinnerComponent } from '@/components/ui';
import { Outlet, useNavigate } from 'react-router-dom';
import { LOGIN } from '@/config.ts';
import { useGetSchoolOwnQuery } from '@/store/api/schoolAdminSlice.ts';
import { useGetStudentsQuery } from '@/store/api/studentSlice.ts';
import { useGetTeachersQuery } from '@/store/api/teacherSlice.ts';
import { useGetClassesQuery } from '@/store/api/classSlice.ts';
import { useGetSubjectsQuery } from '@/store/api/subjectSlice.ts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setClasses,
  setSchoolData,
  setStudents,
  setSubjects,
  setTeachers,
} from '@/store/slices/schoolSlice.ts';

const SchoolAdminLayout = () => {
  const { data: schoolData, isLoading: isSchoolLoading } =
    useGetSchoolOwnQuery();
  const { data: studentsData, isLoading: isStudentsLoading } =
    useGetStudentsQuery();
  const { data: teachersData, isLoading: isTeachersLoading } =
    useGetTeachersQuery();
  const { data: classesData, isLoading: isClassesLoading } =
    useGetClassesQuery();
  const { data: subjectsData, isLoading: isSubjectsLoading } =
    useGetSubjectsQuery();
  const dispatch = useDispatch();
  const isLoading =
    isSchoolLoading ||
    isStudentsLoading ||
    isTeachersLoading ||
    isClassesLoading ||
    isSubjectsLoading;

  useEffect(() => {
    dispatch(setSchoolData(schoolData));
  }, [schoolData, isSchoolLoading]);

  useEffect(() => {
    dispatch(setStudents(studentsData));
  }, [studentsData, isStudentsLoading]);

  useEffect(() => {
    dispatch(setTeachers(teachersData));
  }, [teachersData, isTeachersLoading]);

  useEffect(() => {
    dispatch(setClasses(classesData));
  }, [classesData, isClassesLoading]);

  useEffect(() => {
    dispatch(setSubjects(subjectsData));
  }, [subjectsData, isSubjectsLoading]);

  const auth = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return <SpinnerComponent />;
  } else if (
    auth.isAuth &&
    schoolData &&
    (auth.role === UserRoles.SCHOOL_ADMIN ||
      auth.role === UserRoles.SYSTEM_ADMIN)
  ) {
    return (
      <div>
        <Navigation />
        <HeaderText text={schoolData.name} />
        <Outlet />
      </div>
    );
  } else {
    navigate(LOGIN);
  }
};

export default SchoolAdminLayout;
