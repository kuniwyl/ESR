import { api, TEACHER_TAG } from '@/store/api/api.ts';
import UserResponse from '@/model/UserResponse.ts';
import RegisterDto from '@/model/RegisterDto.ts';
import UserShortDto from '@/model/UserShortDto.ts';

const teacherSlice = api.injectEndpoints({
  endpoints: builder => ({
    getTeachers: builder.query<Array<UserShortDto>, void>({
      query: () => ({
        url: '/teachers',
        method: 'GET',
      }),
      providesTags: [TEACHER_TAG],
    }),
    getTeacher: builder.query<UserResponse, number>({
      query: id => ({
        url: `/teachers/${id}`,
        method: 'GET',
      }),
      providesTags: [TEACHER_TAG],
    }),
    postTeacher: builder.mutation<UserResponse, RegisterDto>({
      query: teacher => ({
        url: '/teachers',
        method: 'POST',
        body: teacher,
      }),
      invalidatesTags: [TEACHER_TAG],
    }),
    putTeacher: builder.mutation<
      UserResponse,
      { id: number; teacher: RegisterDto }
    >({
      query: ({ id, teacher }) => ({
        url: `/teachers/${id}`,
        method: 'PUT',
        body: teacher,
      }),
      invalidatesTags: [TEACHER_TAG],
    }),
    deleteTeacher: builder.mutation<boolean, number>({
      query: teacherId => ({
        url: `/teachers/${teacherId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TEACHER_TAG],
    }),
  }),
});

export const {
  useGetTeachersQuery,
  useGetTeacherQuery,
  usePostTeacherMutation,
  usePutTeacherMutation,
  useDeleteTeacherMutation,
} = teacherSlice;
