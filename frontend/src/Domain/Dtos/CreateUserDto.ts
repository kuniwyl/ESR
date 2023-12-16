interface CreateUserDto {
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  schoolId: number;
}

export default CreateUserDto;
