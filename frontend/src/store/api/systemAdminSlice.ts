import { api, AUTH_TAG } from '@/store/api/api.ts';
import {
  ModifySchoolData,
  SchoolResponse,
} from '@/model/SystemAdminInterfaces.ts';
import { RegisterData, UserResponse } from '@/model/AuthInterfaces.ts';

const systemAdminApi = api.injectEndpoints({
  endpoints: builder => ({
    getSchools: builder.query<Array<SchoolResponse>, void>({
      query: () => ({
        url: '/system-admin/schools',
        method: 'GET',
      }),
      providesTags: [AUTH_TAG],
    }),
    getSchool: builder.query<SchoolResponse, number>({
      query: id => ({
        url: `/system-admin/schools/${id}`,
        method: 'GET',
      }),
      providesTags: [AUTH_TAG],
    }),
    postSchool: builder.mutation<SchoolResponse, ModifySchoolData>({
      query: school => ({
        url: '/system-admin/schools',
        method: 'POST',
        body: school,
      }),
      invalidatesTags: [AUTH_TAG],
    }),
    putSchool: builder.mutation<SchoolResponse, ModifySchoolData>({
      query: school => ({
        url: '/system-admin/schools',
        method: 'PUT',
        body: school,
      }),
      invalidatesTags: [AUTH_TAG],
    }),
    deleteSchool: builder.mutation<boolean, number>({
      query: schoolId => ({
        url: `/system-admin/schools/${schoolId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [AUTH_TAG],
    }),
    postSchoolAdmin: builder.mutation<
      UserResponse,
      { id: number; schoolAdmin: RegisterData }
    >({
      query: ({ id, schoolAdmin }) => ({
        url: `/system-admin/schools/${id}/school-admins`,
        method: 'POST',
        body: schoolAdmin,
      }),
      invalidatesTags: [AUTH_TAG],
    }),
    putSchoolAdmin: builder.mutation<
      UserResponse,
      { schoolId: number; id: number; schoolAdmin: UserResponse }
    >({
      query: ({ schoolId, id, schoolAdmin }) => ({
        url: `/system-admin/schools/${schoolId}/school-admins/${id}`,
        method: 'PUT',
        body: schoolAdmin,
      }),
      invalidatesTags: [AUTH_TAG],
    }),
    deleteSchoolAdmin: builder.mutation<
      boolean,
      { id: number; schoolAdminId: number }
    >({
      query: ({ id, schoolAdminId }) => ({
        url: `/system-admin/schools/${id}/school-admins/${schoolAdminId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [AUTH_TAG],
    }),
  }),
});

export const {
  useGetSchoolsQuery,
  useGetSchoolQuery,
  usePostSchoolMutation,
  usePutSchoolMutation,
  useDeleteSchoolMutation,
  usePostSchoolAdminMutation,
  usePutSchoolAdminMutation,
  useDeleteSchoolAdminMutation,
} = systemAdminApi;
