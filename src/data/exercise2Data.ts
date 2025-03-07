import { Exercise } from '../types';

export const exercise2: Exercise = {
  id: 2,
  title: '독해과제 2',
  levels: [
    {
      level: 1,
      questions: [
        {
          id: 1,
          type: 'trueFalse',
          question: '태양은 밤에 뜬다.',
          options: ['참', '거짓'],
          answer: '거짓',
        },
        {
          id: 2,
          type: 'trueFalse',
          question: '한국의 수도는 도쿄이다.',
          options: ['참', '거짓'],
          answer: '거짓',
        },
      ],
    },
    {
      level: 2,
      questions: [
        {
          id: 1,
          type: 'shapeIdentification',
          question: '초록색큰네모를찾아O표하시오.',
          options: [
            './assets/squareGreenSmall.png',
            './assets/circleWhiteSmall.png',
            './assets/triangleRedBig.png',
            './assets/rectangleGreenBig.png',
          ],
          answer: './assets/rectangleGreenBig.png',
        },
        {
          id: 2,
          type: 'shapeIdentification',
          question: '하얀색작은네모를찾아O표하시오.',
          options: [
            './assets/circleRedBig.png',
            './assets/triangleRedSmall.png',
            './assets/squareBlueSmall.png',
            './assets/circleWhiteSmall.png',
            './assets/squareWhiteSmall',
          ],
          answer: './assets/squareWhiteSmall',
        },
      ],
    },
    {
      level: 3,
      questions: [
        {
          id: 3,
          type: 'memory',
          text: ' 산책을 하다가 하늘에 떠 있는 무지개를 보았습니다.',
          question: '무엇을 발견했나요?',
          options: ['독수리', '무지개', '비행기'],
          answer: '무지개',
        },
        {
          id: 4,
          type: 'memory',
          text: ' 언니와 함께 동생을 데리러 교회에 갔습니다.',
          question: '동생을 데리러 어디로 갔나요?',
          options: ['학교', '놀이터', '교회'],
          answer: '교회',
        },
        {
          id: 5,
          type: 'readingComprehension',
          question:
            '산책을 하다가 하늘에 떠 있는 무지개를 보았습니다. 언니와 함께 동생을 데리러 교회에 갔습니다.',
          options: ['독수리', '무지개', '비행기'],
          answer: '무지개',
        },
      ],
    },
    {
      level: 4,
      questions: [
        {
          id: 6,
          type: 'readingComprehension',
          question:
            '산업혁명은 18세기 후반 영국에서 시작된 경제와 기술의 대변혁입니다. 증기기관의 발명은 생산성을 크게 향상시켰고, 도시화와 공업화를 촉진했습니다. 하지만 초기 산업혁명 시기에는 노동 환경이 열악하고 아동 노동이 만연했습니다.',
          options: ['영국', '독일', '프랑스'],
          answer: '영국',
        },
        {
          id: 7,
          type: 'readingComprehension',
          question:
            '르네상스는 14세기에서 17세기 사이 유럽에서 발생한 문화적 부흥 운동입니다. 이 시기에는 인간 중심의 사고가 강조되며, 예술과 철학이 크게 발전했습니다. 미켈란젤로와 레오나르도 다 빈치 같은 예술가들이 이 시기를 대표합니다.',
          options: ['인간중심의사고', '자연중심의사고', '종교중심의사고'],
          answer: '인간중심의사고',
        },
      ],
    },
    {
      level: 5,
      questions: [
        {
          id: 8,
          type: 'trueFalse',
          question:
            '수술후수술부위가딱딱하고둔한느낌은 이상 증상이므로 즉시 내원한다.',
          options: ['O', 'X'],
          answer: 'X',
        },
        {
          id: 9,
          type: 'trueFalse',
          question:
            '야외활동시수술부위색소침착을막기위해 자외선 차단제 사용을 권장한다.',
          options: ['O', 'X'],
          answer: 'O',
        },
      ],
    },
  ],
};
