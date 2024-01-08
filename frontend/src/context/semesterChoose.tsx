import { createContext, useEffect, useState } from 'react';
import SemesterDto from '@/domain/dtos/SemesterDto.ts';
import useGetCurrentSemester from '@/logic/hooks/semester/useGetCurrentSemester.ts';

const useSemesterChoose = () => {
  const [semester, setSemester] = useState<SemesterDto>();
  const getCurrent = useGetCurrentSemester();

  useEffect(() => {
    if (getCurrent.data?.data) {
      setSemester(getCurrent.data.data);
    }
  }, [getCurrent.data?.data]);

  const getSemester = () => {
    getCurrent.refetch();
  };

  const handleSemesterChange = (semester: SemesterDto) => {
    setSemester(semester);
  };

  return { semester, handleSemesterChange, getSemester };
};

type SemesterContextType = ReturnType<typeof useSemesterChoose>;
export const semesterContext = createContext({} as SemesterContextType);

export const SemesterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const semester = useSemesterChoose();

  return (
    <semesterContext.Provider value={semester}>
      {children}
    </semesterContext.Provider>
  );
};
