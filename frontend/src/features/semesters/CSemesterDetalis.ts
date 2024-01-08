import useGetSemester from '@/logic/hooks/semester/useGetSemester.ts';

const CSemesterDetalis = (semesterId: number) => {
  const semester = useGetSemester(semesterId);

  return semester;
};

export default CSemesterDetalis;
