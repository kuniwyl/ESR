interface CreateStudentDto {
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  schoolId: number;
  classId: number;
}

export default CreateStudentDto;
