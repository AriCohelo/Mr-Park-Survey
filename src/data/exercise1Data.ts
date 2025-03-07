import { Exercise } from '../types';

export const exercise1: Exercise = {
  id: 1,
  title: '독해과제 1',
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
          question: '여름에는 눈이 많이 내린다.',
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
          question: '설명에 알맞은 도형을 <보기>중에서 고르세요.',
          options: [
            './assets/squareBlueSmall.png',
            './assets/triangleBlueSmall.png',
            './assets/rectangleRedBig.png',
            './assets/triangleRedBig.png',
          ],
          answer: './assets/rectangleRedBig.png',
        },
        {
          id: 2,
          type: 'shapeIdentification',
          question: '노란색큰세모를찾아O표하시오. <보기>',
          options: [
            './assets/squareGreenSmall.png',
            './assets/circleWhiteSmall.png',
            './assets/triangleYellowBig.png',
            './assets/rectangleYellowBig.png',
            './assets/traingleGreenBig',
          ],
          answer: './assets/triangleYellowBig.png',
        },
      ],
    },
    {
      level: 3,
      questions: [
        {
          id: 1,
          type: 'memory',
          text: '주머니를 뒤적이다가 오래된 사진 한 장을 발견했습니다.',
          question: '무엇을 발견했나요?',
          options: ['오래된사진', '라이터', '편지'],
          answer: '오래된사진',
        },
        {
          id: 2,
          type: 'memory',
          text: '과일을 사서 나오는 길에 사과 한 개를 떨어뜨렸습니다.',
          question: '떨어뜨린 과일은 무엇인가요?',
          options: ['딸기', '배', '사과'],
          answer: '사과',
        },
      ],
    },
    {
      level: 4,
      questions: [
        {
          id: 1,
          type: 'readingComprehension',
          title: '기후변화',
          text: '기후 변화는 화석연료 사용과 삼림 파괴로 인해 발생합니다. 이는 지구 온난화와 이상 기후, 해수면 상승 같은 심각한 문제를 초래합니다. 국제 사회는 이를 해결하기 위해 파리협정과 같은 환경협약을 체결하고 있습니다.',
          question: '기후변화의 주요 원인 중 하나로 언급된 것은 무엇인가요?',
          options: ['화석연료 사용', '태양활동 감소', '대기압 변화'],
          answer: '화석연료 사용',
        },
        {
          id: 2,
          type: 'readingComprehension',
          title: '삼국통일',
          text: '삼국 시대에는 고구려, 백제, 신라가 한반도를 놓고 경쟁했습니다. 이들 중 신라는 당나라와 동맹을 맺어 고구려와 백제를 정복하고 삼국 통일을 이루었습니다. 하지만 통일 이후에도 당나라와의 갈등이 지속되었습니다.',
          question:
            '삼국통일을 이루기 위해 신라가 동맹을 맺은 나라는 어디인가요?',
          options: ['일본', '당나라', '몽골'],
          answer: '당나라',
        },
      ],
    },
    {
      level: 5,
      questions: [
        {
          id: 1,
          type: 'trueFalse',
          title: '맹장 수술환자의 퇴원 후 주의사항',
          text: `◎식이
      • 섬유질이 풍부한 음식(과일, 채소류)을 먹습니다.
      • 물(1-2L)을 충분히 섭취하도록 합니다.
      (단 심질환, 신질환자는 제한함)
      
      ◎활동
      • 수술 후 4주 동안 무거운 것을 들기, 대변 시 배에 힘주기 등과 같이 배에 힘을 주는 상황이나 활동을 피합니다.
      
      ◎퇴원 후 즉시 병원으로 와야 할 때
      • 수술 부위에 심한 출혈이나 통증이 있을 때
      • 수술 봉합한 부분이 벌어졌을 때`,
          question: '식사는 고기 위주의 고지방 고단백 음식을 먹는다.',
          options: ['O', 'X'],
          answer: 'X',
        },
        {
          id: 2,
          type: 'trueFalse',
          title: '맹장 수술환자의 퇴원 후 주의사항',
          text: `◎식이
      • 섬유질이 풍부한 음식(과일, 채소류)을 먹습니다.
      • 물(1-2L)을 충분히 섭취하도록 합니다.
      (단 심질환, 신질환자는 제한함)
      
      ◎활동
      • 수술 후 4주 동안 무거운 것을 들기, 대변 시 배에 힘주기 등과 같이 배에 힘을 주는 상황이나 활동을 피합니다.
      
      ◎퇴원 후 즉시 병원으로 와야 할 때
      • 수술 부위에 심한 출혈이나 통증이 있을 때
      • 수술 봉합한 부분이 벌어졌을 때`,
          question:
            '수술 봉합한 부분이 벌어지는 건 자연스러운 현상이니 병원에 오지 않고 그냥 두어도 된다.',
          options: ['O', 'X'],
          answer: 'X',
        },
      ],
    },
  ],
};
