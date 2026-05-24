export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface StudyRecord {
  id: string;
  topic: string;
  date: string;
  score: number;
  totalQuestions: number;
  timeSpent: number;
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  isFinished: boolean;
  topic: string;
  questions: Question[];
}
