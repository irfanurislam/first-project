import { TAcademicsemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";

// year 4 digit code
const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    { role: "student" },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

export const generateStudentId = async (payload: TAcademicsemester) => {
  // 0001 increasing
  let currentId = (0).toString(); // by defualt 0000 theke start hobe
  const lastStudentId = await findLastStudentId();

  // 2030 01 0001
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);
  const currentSemesterCode = payload.code;
  const currentyear = payload.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentyear
  ) {
    currentId = lastStudentId.substring(6);
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
