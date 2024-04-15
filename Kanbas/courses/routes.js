// import Database from "../Database/index.js";
import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  // get courses
  // app.get("/api/courses", (req, res) => {
  //   const courses = Database.courses;
  //   res.send(courses);
  // });
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  // create courses
  // app.post("/api/courses", (req, res) => {
  //   const course = {
  //     ...req.body,

  //     _id: new Date().getTime().toString(),
  //   };
  //   Database.courses.push(course);
  //   res.send(course);
  // });
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };

  // delete courses
  // app.delete("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   Database.courses = Database.courses.filter((c) => c._id !== id);
  //   res.sendStatus(204);
  // });
  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  };

  // update courses
  // app.put("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const course = req.body;
  //   Database.courses = Database.courses.map((c) =>
  //     c._id === id ? { ...c, ...course } : c
  //   );
  //   res.sendStatus(204);
  // });
  const updateCourse = async (req, res) => {
    const id = req.params.id;
    const status = await dao.updateCourse(id, req.body);
    const currentCourse = await dao.findCourseById(id);
    res.json(status);
  };

  // get course by ID
  // app.get("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const course = Database.courses.find((c) => c._id === id);
  //   if (!course) {
  //     res.status(404).send("Course not found");
  //     return;
  //   }
  //   res.send(course);
  // });
  const findCourseById = async (req, res) => {
    const id = req.params.id;
    const course = await dao.findCourseById(id);
    if (course) {
      res.json(course);
    } else {
      res.status(404).send(`Course with id ${id} not found`);
    }
  };

  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:id", findCourseById);
  app.put("/api/courses/:id", updateCourse);
  app.delete("/api/courses/:id", deleteCourse);
}
