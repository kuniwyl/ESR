export interface SubjectDto {
  id: string;
  name: string;
  description: string;
  schoolId: string;
  teacherId: string;
  studentsIds: number[];
  assignmentsIds: number[];
}

export interface ClassDto {
  id: string;
  name: string;
  description: string;
  schoolId: string;
  teacherId: string;
  studentsIds: number[];
}
