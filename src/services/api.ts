import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tagTypes = {
  SCHOOL: "School",
  AUTH: "Auth",
  USER: "User",
  CLASS: "Class",
  STUDENT: "Student",
  TEACHER: "Teacher",
  ATTENDANCE: "Attendance",
  SUBJECT: "Subject",
  GRADE: "Grade",
  SCHEDULE: "Schedule",
  NOTIFICATION: "Notification",
} as const;

const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  tagTypes: Object.values(tagTypes),
  endpoints: () => ({}),
});

export default Api;
