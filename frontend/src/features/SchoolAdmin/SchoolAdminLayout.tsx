// import { UserRoles } from '@/Domain/Model/UserRoles.ts';
// import { HeaderText, Navigation, SpinnerComponent } from '@/components/ui';
// import { Outlet, useNavigate } from 'react-router-dom';
// import { LOGIN } from '@/Configuration/config.ts';
// import { useGetSchoolOwnQuery } from '@/store/api/schoolAdminSlice.ts';
// import { useGetTeachersQuery } from '@/store/api/teacherSlice.ts';
// import { useGetClassesQuery } from '@/store/api/classSlice.ts';
// import { useGetSubjectsQuery } from '@/store/api/subjectSlice.ts';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setClasses,
//   setParents,
//   setSchoolData,
//   // setStudents,
//   setSubjects,
//   setTeachers,
// } from '@/store/slices/schoolSlice.ts';
// import { useGetParentsQuery } from '@/store/api/parentSlice.ts';
// import { AuthSliceState } from '@/store/interfaces.ts';
// import { RootState } from '@/store';

const SchoolAdminLayout = () => {
  // const auth = useSelector<RootState>(state => state.auth) as AuthSliceState;
  // const navigate = useNavigate();
  // const { data: schoolData, isLoading: isSchoolLoading } =
  //   useGetSchoolOwnQuery();
  // // const { data: studentsData, isLoading: isStudentsLoading } =
  // //   useGetStudentsQuery();
  // const { data: teachersData, isLoading: isTeachersLoading } =
  //   useGetTeachersQuery();
  // const { data: classesData, isLoading: isClassesLoading } =
  //   useGetClassesQuery();
  // const { data: subjectsData, isLoading: isSubjectsLoading } =
  //   useGetSubjectsQuery();
  // const { data: parentsData, isLoading: isParentsLoading } =
  //   useGetParentsQuery();
  // const dispatch = useDispatch();
  // const isLoading =
  //   isSchoolLoading &&
  //   // isStudentsLoading &&
  //   isTeachersLoading &&
  //   isClassesLoading &&
  //   isSubjectsLoading &&
  //   isParentsLoading;
  //
  // useEffect(() => {
  //   if (auth.role !== UserRoles.SCHOOL_ADMIN) {
  //     navigate(LOGIN);
  //   }
  // }, []);
  //
  // useEffect(() => {
  //   if (schoolData) {
  //     dispatch(setSchoolData(schoolData));
  //   }
  // }, [schoolData, isSchoolLoading]);
  //
  // // useEffect(() => {
  // //   if (studentsData) {
  // //     dispatch(setStudents(studentsData));
  // //   }
  // // }, [studentsData, isStudentsLoading]);
  //
  // useEffect(() => {
  //   if (teachersData) {
  //     dispatch(setTeachers(teachersData));
  //   }
  // }, [teachersData, isTeachersLoading]);
  //
  // useEffect(() => {
  //   if (classesData) {
  //     dispatch(setClasses(classesData));
  //   }
  // }, [classesData, isClassesLoading]);
  //
  // useEffect(() => {
  //   if (subjectsData) {
  //     dispatch(setSubjects(subjectsData));
  //   }
  // }, [subjectsData, isSubjectsLoading]);
  //
  // useEffect(() => {
  //   if (parentsData) {
  //     dispatch(setParents(parentsData));
  //   }
  // }, [parentsData, isParentsLoading]);
  //
  // if (isLoading) {
  //   return <SpinnerComponent />;
  // } else if (schoolData) {
  return (
    <div>
      {/*<Navigation />*/}
      {/*<HeaderText text={schoolData.name} />*/}
      {/*<Outlet />*/}
    </div>
  );
};

export default SchoolAdminLayout;
