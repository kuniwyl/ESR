import { api, STUDENT_TAG } from '@/store/api/api.ts';
import UserResponse from '@/model/UserResponse.ts';
import RegisterDto from '@/model/RegisterDto.ts';
import UserShortDto from '@/model/UserShortDto.ts';

const studentSlice = api.injectEndpoints({
  endpoints: builder => ({
    getStudents: builder.query<Array<UserShortDto>, void>({
      query: () => ({
        url: '/students',
        method: 'GET',
      }),
      providesTags: [STUDENT_TAG],
    }),
    getStudent: builder.query<UserResponse, number>({
      query: id => ({
        url: `/students/${id}`,
        method: 'GET',
      }),
      providesTags: [STUDENT_TAG],
    }),
    postStudent: builder.mutation<UserResponse, RegisterDto>({
      query: student => ({
        url: '/students',
        method: 'POST',
        body: student,
      }),
      invalidatesTags: [STUDENT_TAG],
    }),
    putStudent: builder.mutation<
      UserResponse,
      { id: number; student: RegisterDto }
    >({
      query: ({ id, student }) => ({
        url: `/students/${id}`,
        method: 'PUT',
        body: student,
      }),
      invalidatesTags: [STUDENT_TAG],
    }),
    deleteStudent: builder.mutation<boolean, number>({
      query: studentId => ({
        url: `/students/${studentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [STUDENT_TAG],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  usePostStudentMutation,
  usePutStudentMutation,
  useDeleteStudentMutation,
} = studentSlice;
