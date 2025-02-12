import model from "./model.js";

export const createCourse = (course) => {
  delete course._id;
  return model.create(course);
};

export const findAllCourses = () => model.find();

export const findCourseById = (courseId) => model.findById(courseId);

export const findCourseByCoursename = (coursename) =>
  model.findOne({ name: coursename });

export const updateCourse = (courseId, course) =>
  model.updateOne({ _id: courseId }, { $set: course });

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });

// export const findCourseByCredentials = (username, password) =>
//   model.findOne({ username, password });

// export const findUsersByRole = (role) => model.find({ role: role });
