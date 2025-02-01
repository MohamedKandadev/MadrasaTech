export enum USER_ROLE {
  SUPER_ADMIN = "SUPER_ADMIN", // Overall system administrator
  ADMIN = "ADMIN", // Application administrator
  TEACHER = "TEACHER", // Teacher/Professor
  EMPLOYEE = "EMPLOYEE", // General school employee
  STUDENT = "STUDENT", // Student
  PARENT = "PARENT", // Parent/Guardian
}

export enum USER_STATUS {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
  PENDING = "PENDING",
}
