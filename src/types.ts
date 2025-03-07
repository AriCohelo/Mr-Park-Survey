export interface Question {
  id: number;
  type: 'trueFalse' | 'shapeIdentification' | 'memory' | 'readingComprehension';
  title?: string;
  text?: string;
  question: string;
  options: string[];
  answer: string;
}

export interface Level {
  level: number;
  questions: Question[];
}

export interface Exercise {
  id: number;
  title: string;
  levels: Level[];
}
