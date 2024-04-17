import * as dao from "./dao.js";

function QuizRoutes(app) {
  const findAllQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    res.json(quizzes);
  };

  const createQuiz = async (req, res) => {
    const courseId = req.params.courseId;
    const quizData = req.body;
    quizData.course = courseId;
    const quiz = await dao.createQuiz(quizData);
    res.json(quiz);
  };

  const findQuizById = async (req, res) => {
    const quiz = await dao.findQuizById(req.params.quizId);
    if (quiz) {
      res.json(quiz);
    } else {
      res.status(404).send(`Quiz with id ${id} not found`);
    }
  };

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  };

  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.quizId);
    res.json(status);
  };

  app.get("/api/courses/:courseId/quizzes", findAllQuizzes);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
}

export default QuizRoutes;
