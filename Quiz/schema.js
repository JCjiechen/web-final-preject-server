import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    course: String,
    description: String,
    points: Number,
    type: String,
    group: String,
    time: Number,
    attemptTimes: Number,
    questions: Number,
    availableDate: Date,
    availableUntilDate: Date,
    dueDate: Date,
    accessCode: String,
    isShuffle: Boolean,
    isMultipleAttempts: Boolean,
    isOneQuestionAtaTime: Boolean,
    isWebcam: Boolean,
    isLockQuestionAfterAnswer: Boolean,
    isPublish: Boolean,
    showCorrectAnswers: {
      type: String,
      enum: ["Immediately", "After Due", "Never"],
      default: "Immediately",
    },
  },
  { collection: "quizzes" }
);

export default quizSchema;
