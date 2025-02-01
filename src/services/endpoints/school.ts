import baseApi, { tagTypes } from "../api";
import type { RegisterSchoolRequest, School } from "../types/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerSchool: builder.mutation<any, RegisterSchoolRequest>({
      query: (schoolData) => ({
        url: "schools/register",
        method: "POST",
        body: schoolData,
        formData: true,
      }),
      invalidatesTags: [{ type: tagTypes.SCHOOL, id: "LIST" }],
    }),
  }),
});

export const { useRegisterSchoolMutation } = authApi;
