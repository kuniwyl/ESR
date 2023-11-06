import { api, PARENT_TAG } from '@/store/api/api.ts';
import RegisterDto from '@/model/RegisterDto.ts';
import ParentDto from '@/model/ParentDto.ts';

const parentSlice = api.injectEndpoints({
  endpoints: builder => ({
    getParents: builder.query<Array<ParentDto>, void>({
      query: () => ({
        url: '/parents',
        method: 'GET',
      }),
      providesTags: [PARENT_TAG],
    }),
    getParent: builder.query<ParentDto, number>({
      query: id => ({
        url: `/parents/${id}`,
        method: 'GET',
      }),
      providesTags: [PARENT_TAG],
    }),
    postParent: builder.mutation<
      ParentDto,
      { parent: RegisterDto; studentId: number }
    >({
      query: ({ parent, studentId }) => ({
        url: `/parents/student/${studentId}`,
        method: 'POST',
        body: parent,
      }),
      invalidatesTags: [PARENT_TAG],
    }),
    putParent: builder.mutation<ParentDto, { id: number; parent: RegisterDto }>(
      {
        query: ({ id, parent }) => ({
          url: `/parents/${id}`,
          method: 'PUT',
          body: parent,
        }),
        invalidatesTags: [PARENT_TAG],
      },
    ),
    deleteParent: builder.mutation<boolean, number>({
      query: parentId => ({
        url: `/parents/${parentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [PARENT_TAG],
    }),
  }),
});

export const {
  useGetParentsQuery,
  useGetParentQuery,
  usePostParentMutation,
  usePutParentMutation,
  useDeleteParentMutation,
} = parentSlice;
