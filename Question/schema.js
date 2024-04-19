import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ["Multiple Choice", "True/False", "Fill in multiple blanks"],
      default: "Multiple Choice",
    },
    points: Number,
    index: Number,
    content: String,
    quizId: String,
    instruction: String,
    // MCQ
    MCQchoice: [{ text: String, isCorrect: Boolean }],
    // T/F
    answerForTF: Boolean,
    // FBQ
    answerForBlank: [{ text: String, isCaseSensitive: Boolean }],
    isEdit: { type: Boolean, default: false },
  },
  { collection: "questions" }
);

export default questionSchema;
