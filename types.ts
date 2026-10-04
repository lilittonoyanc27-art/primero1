export type QuestionType =
  | 'choice'
  | 'true_false'
  | 'transform'
  | 'text_question'
  | 'fill_or_classify';

export interface OptionItem {
  key: string; // 'a', 'b', 'c', 'd' or 'true', 'false'
  textEs: string;
  textHy?: string;
}

export interface QuestionItem {
  id: string; // e.g. "ex1-q1"
  number: number;
  type: QuestionType;
  // Spanish sentence or question
  promptEs: string;
  // Armenian translation
  promptHy: string;
  // Secondary question text if any (e.g. "¿Qué modalidad es?")
  questionEs?: string;
  questionHy?: string;
  // Extra notes (like warnings about exclamation marks)
  noteEs?: string;
  noteHy?: string;
  // Target modality or category
  targetCategory?: string;
  // Options for choice questions
  options?: OptionItem[];
  // Correct answer code (e.g. 'b' or 'Dubitativa' or full text)
  correctKey: string;
  // Full correct answer description in Spanish
  correctAnswerEs: string;
  // Full correct answer description in Armenian
  correctAnswerHy?: string;
  // Detailed explanation in Spanish
  explanationEs?: string;
  // Detailed explanation in Armenian
  explanationHy?: string;
  // For transformation: prompt to change
  conversionInstructionEs?: string;
  conversionInstructionHy?: string;
  expectedInput?: string;
}

export interface ExamSection {
  id: string;
  titleEs: string;
  titleHy: string;
  descriptionEs?: string;
  descriptionHy?: string;
  // For mini exam with reading text
  storyEs?: string;
  storyHy?: string;
  storyTitleEs?: string;
  storyTitleHy?: string;
  questions: QuestionItem[];
}

export interface ExamModule {
  id: string;
  titleEs: string;
  titleHy: string;
  badge: string;
  level: string;
  descriptionEs: string;
  descriptionHy: string;
  sections: ExamSection[];
  totalQuestions: number;
}

export interface ModalityRule {
  nameEs: string;
  nameHy: string;
  icon: string;
  color: string;
  functionEs: string;
  functionHy: string;
  keyWordsEs: string;
  keyWordsHy: string;
  exampleEs: string;
  exampleHy: string;
}
