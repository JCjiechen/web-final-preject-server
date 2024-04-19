import * as dao from "./dao.js";

function QuestionRoutes(app) {
  const createQuestion = async (req, res) => {
    const quizId = req.params.quizId;
    const questionData = req.body;
    questionData.quizId = quizId;
    const question = await dao.createQuestion(questionData);
    res.json(question);
  };

  // const findAllQuestions = async (req, res) => {
  //   const questions = await dao.findAllQuestions();
  //   res.json(questions);
  // };

  const findQuestionsByQuizId = async (req, res) => {
    const questions = await dao.findQuestionsByQuizId(req.params.quizId);
    res.json(questions);
  };

  const findQuestionById = async (req, res) => {
    const question = await dao.findQuestionById(req.params.questionId);
    res.json(question);
  };

  const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.updateQuestion(questionId, req.body);
    res.json(status);
  };

  const deleteQuestion = async (req, res) => {
    const status = await dao.deleteQuestion(req.params.questionId);
    res.json(status);
  };

  const deleteQuestionsByQuizId = async (req, res) => {
    const status = await dao.deleteQuestionsByQuizId(req.params.quizId);
    res.json(status);
  };

  app.post("/api/quizzes/:quizId/questions", createQuestion);
  // app.get("/api/quizzes/questions", findAllQuestions);
  app.get("/api/quizzes/:quizId/questions", findQuestionsByQuizId);
  app.get("/api/questions/:questionId", findQuestionById);
  app.put("/api/questions/:questionId", updateQuestion);
  app.delete("/api/questions/:questionId", deleteQuestion);
  app.delete("/api/quizzes/:quizId/questions", deleteQuestionsByQuizId);
}

export default QuestionRoutes;
