import { ExamModule } from './types';
import { EXAM_1, MODALITY_RULES } from './examData1';
import { EXAM_2 } from './examData2';
import { EXAM_3 } from './examData3';

export { MODALITY_RULES } from './examData1';
export { EXAM_1 } from './examData1';
export { EXAM_2 } from './examData2';
export { EXAM_3 } from './examData3';

export const ALL_EXAMS: ExamModule[] = [EXAM_1, EXAM_2, EXAM_3];

export const TOTAL_QUESTIONS_COUNT = EXAM_1.totalQuestions + EXAM_2.totalQuestions + EXAM_3.totalQuestions; // 30 + 50 + 37 = 117
