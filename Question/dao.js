import model from "./model.js";

export const createQuestion = (question) => {
  delete question._id;
  return model.create(question);
};

// export const findAllQuestions = () => model.find();

export const findQuestionsByQuizId = (quizId) => model.find({ quizId });

export const findQuestionById = (questionId) => model.findById(questionId);

export const updateQuestion = (questionId, question) =>
  model.updateOne({ _id: questionId }, { $set: question });

export const deleteQuestion = (questionId) =>
  model.deleteOne({ _id: questionId });

export const deleteQuestionsByQuizId = (quizId) => model.deleteMany({ quizId });
