import { Exercise } from '../types';

export const exercise3: Exercise = {
  id: 3,
  title: '독해과제 3',
  levels: [
    {
      level: 1,
      questions: [
        {
          id: 1,
          type: 'trueFalse',
          question: '토끼는 채소를 좋아한다.',
          options: ['참', '거짓'],
          answer: '참',
        },
        {
          id: 2,
          type: 'trueFalse',
          question: '여름에는 눈에 많이 내린다.',
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
          question: '파란색큰세모를찾아O표하시오.',
          options: [
            './assets/circleBlueSmall.png',
            './assets/circleWhiteBig.png',
            './assets/rectagleWhiteBig.png',
            './assets/triangleBlueBig.png',
          ],
          answer: './assets/triangleBlueBig.png',
        },
        {
          id: 2,
          type: 'shapeIdentification',
          question: '빨간색 작은 동그라미를 찾아 O표 하시오.',
          options: [
            './assets/circleWhiteSmall.png',
            './assets/circleRedBig.png',
            './assets/circleRedSmall.png',
            './assets/squareGreenSmall.png',
            './assets/triangleWhiteSmall',
          ],
          answer: './assets/circleRedSmall.png',
        },
      ],
    },
    {
      level: 3,
      questions: [
        {
          id: 1,
          type: 'memory',
          text: '마당에서 노는 중에 모자가 바람에 날아가 버렸어요.',
          question: '무엇이 바람에 날아갔나요?',
          options: ['모자', '손수건', '우산'],
          answer: '모자',
        },
        {
          id: 2,
          type: 'memory',
          text: '친구와 산책을 하다 길모퉁이에서 꽃 한 송이를 발견했습니다.',
          question: '길모퉁이에서 발견한 것은 무엇인가요?',
          options: ['동전', '고양이', '꽃한송이'],
          answer: '꽃한송이',
        },
      ],
    },
    {
      level: 4,
      questions: [
        {
          id: 1,
          type: 'readingComprehension',
          text: '인터넷은 전 세계를 연결하며 현대 사회의 필수 기술로 자리 잡았습니다. 정보 접근을 용이하게 하고 전자 상거래와 같은 새로운 산업을 창출했지만, 개인정보 유출과 같은 부작용도 발생하고 있습니다. 이를 해결하기 위해 법적·기술적 노력이 요구됩니다.',
          question: '인터넷의 부작용으로 언급된 문제는 무엇인가요?',
          options: ['개인정보 유출', '네트워크 속도 증가', '산업의 감소'],
          answer: '개인정보 유출',
        },
        {
          id: 2,
          type: 'readingComprehension',
          text: '고대 이집트는 나일강을 중심으로 발전한 문명입니다. 이들은 나일강의 범람을 이용해 농업을 발전시켰으며, 피라미드와 같은 건축물을 남겼습니다. 특히, 피라미드는 파라오의 무덤으로 사용되었습니다.',
          question: '고대 이집트 문명이 발전한 강은 무엇인가요?',
          options: ['티그리스강', '나일강', '유프라테스강'],
          answer: '나일강',
        },
      ],
    },
    {
      level: 5,
      questions: [
        {
          id: 1,
          type: 'trueFalse',
          text: '맹장 수술환자의 퇴원 후 주의사항\n1. 가능한 입안에 고이는 침이나 피는 불편하더라도 뱉지 말고 삼키십시오. 침을 뱉는 것은 지혈에 도움이 되지 않습니다. 수술후일주일정도간헐적인출혈이있을수있습니다.\n2. 멍이 들거나 많이 부을 수 있으니 수술 부위는 48시간(2일) 동안 냉찜질 하십시오.\n3. 취침 시 유의사항. 평소보다 베개를 높게 해서 주무시면 붓기 예방에 도움이 됩니다.',
          question: '취침 시 베개 높이는 평소보다 낮게 해야한다.',
          options: ['O', 'X'],
          answer: 'X',
        },
        {
          id: 2,
          type: 'trueFalse',
          text: '맹장 수술환자의 퇴원 후 주의사항\n1. 가능한 입안에 고이는 침이나 피는 불편하더라도 뱉지 말고 삼키십시오. 침을 뱉는 것은 지혈에 도움이 되지 않습니다. 수술후일주일정도간헐적인출혈이있을수있습니다.\n2. 멍이 들거나 많이 부을 수 있으니 수술 부위는 48시간(2일) 동안 냉찜질 하십시오.\n3. 취침 시 유의사항. 평소보다 베개를 높게 해서 주무시면 붓기 예방에 도움이 됩니다.',
          question: '입안에 고인 침은 삼키면 안 되고 무조건 뱉어야 한다.',
          options: ['O', 'X'],
          answer: 'X',
        },
      ],
    },
  ],
};
