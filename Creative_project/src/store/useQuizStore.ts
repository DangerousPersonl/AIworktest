import { create } from 'zustand';
import { Question, QuizState } from '@/types';

interface QuizStore extends QuizState {
  setTopic: (topic: string) => void;
  setQuestions: (questions: Question[]) => void;
  selectAnswer: (index: number) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  currentQuestion: 0,
  answers: [],
  isFinished: false,
  topic: '',
  questions: [],
  
  setTopic: (topic: string) => set({ topic }),
  
  setQuestions: (questions: Question[]) => set({ questions }),
  
  selectAnswer: (index: number) => {
    const { answers } = get();
    const newAnswers = [...answers];
    newAnswers[get().currentQuestion] = index;
    set({ answers: newAnswers });
  },
  
  nextQuestion: () => {
    const { currentQuestion, questions, answers } = get();
    if (currentQuestion < questions.length - 1) {
      set({ currentQuestion: currentQuestion + 1 });
    } else {
      set({ isFinished: true });
    }
  },
  
  resetQuiz: () => set({
    currentQuestion: 0,
    answers: [],
    isFinished: false,
    topic: '',
    questions: []
  })
}));
