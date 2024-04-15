// import db from "../Database/index.js";
import * as dao from "./dao.js";
import { findCourseById } from "../courses/dao.js";

function ModuleRoutes(app) {
  // get modules
  // app.get("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const modules = db.modules.filter((m) => m.course === cid);
  //   res.send(modules);
  // });
  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  };

  // create modules
  // app.post("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const newModule = {
  //     ...req.body,
  //     course: cid,
  //     _id: new Date().getTime().toString(),
  //   };
  //   db.modules.push(newModule);
  //   res.send(newModule);
  // });
  const createModule = async (req, res) => {
    const cid = req.params.cid;
    const newModule = {
      ...req.body,
      course: cid,
    };
    delete newModule._id;
    const module = await dao.createModule(newModule);
    res.json(module);
  };

  // delete modules
  // app.delete("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   db.modules = db.modules.filter((m) => m._id !== mid);
  //   res.sendStatus(200);
  // });
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };

  // update modules
  // app.put("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   const moduleIndex = db.modules.findIndex((m) => m._id === mid);
  //   db.modules[moduleIndex] = { ...db.modules[moduleIndex], ...req.body };
  //   res.sendStatus(204);
  // });
  const updateModule = async (req, res) => {
    const mid = req.params.mid;
    const status = await dao.updateModule(mid, req.body);
    const currentModule = await dao.findModuleById(mid);
    res.json(status);
  };

  app.post("/api/courses/:cid/modules", createModule);
  app.get("/api/courses/:cid/modules", findAllModules);
  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);
}

export default ModuleRoutes;
