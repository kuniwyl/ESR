import { api } from '@/store/api/api.ts';
import SchoolDataDto from '@/model/SchoolDataDto.ts';

const schoolAdminSlice = api.injectEndpoints({
  endpoints: builder => ({
    getSchoolOwn: builder.query<SchoolDataDto, void>({
      query: () => ({
        url: '/school',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSchoolOwnQuery } = schoolAdminSlice;
