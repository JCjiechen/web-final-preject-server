import db from "../Database/index.js";

function AssignmentRoutes(app) {
  // get assignments
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments.filter((m) => m.course === cid);
    res.send(assignments);
  });

  // create assigments
  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.assignments.push(newAssignment);
    res.send(newAssignment);
  });

  // delete assignments
  app.delete("/api/assignments/:mid", (req, res) => {
    const { mid } = req.params;
    db.assignments = db.assignments.filter((m) => m._id !== mid);
    res.sendStatus(200);
  });

  // update assignments
  app.put("/api/assignments/:mid", (req, res) => {
    const { mid } = req.params;
    const assignmentIndex = db.assignments.findIndex((m) => m._id === mid);
    db.assignments[assignmentIndex] = {
      ...db.assignments[assignmentIndex],
      ...req.body,
    };
    res.sendStatus(204);
  });
}

export default AssignmentRoutes;
