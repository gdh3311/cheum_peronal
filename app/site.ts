import { Bot, Cpu, Flower2, Palette, Scale } from 'lucide-react';

export const contact = {
  phone: '010-6460-8659',
  tel: 'tel:01064608659',
  email: 'chaeum-lab@naver.com',
  mailto: 'mailto:chaeum-lab@naver.com',
  blog: 'https://blog.naver.com/chaeum-lab',
  applicationUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSepNxdVZPBmoO5L-ETWwhhHbh9Ev6gHfaJC4DwYeRygKTZ1ww/viewform',
};

export const navLinks = [
  ['/about', '채움 ON 소개'],
  ['/programs', '체험 프로그램'],
  ['/moments', '수업 이야기'],
  ['/#faq', '자주 묻는 질문'],
] as const;

export const programs = [
  {
    slug: 'ai-digital',
    icon: Cpu,
    en: 'AI & DIGITAL',
    title: 'AI · 디지털 콘텐츠',
    description: '상상 속 아이디어가 나만의 콘텐츠로.',
    intro:
      '디지털 도구와 AI를 친구 삼아 웹툰, 광고, 영상 같은 나만의 콘텐츠를 직접 기획하고 완성해 보는 프로그램입니다. 화면 너머의 직업 세계를 창작자의 눈으로 경험합니다.',
    jobs: ['생성형 AI × 비전웹툰 작가', 'AI 광고기획자', '버추얼 크리에이터', '영상 제작자'],
    grade: '초 3–6학년 · 중학생',
    note: '버추얼 크리에이터는 초 4학년부터',
    tools: 'PC · 태블릿 · 앱',
    color: 'pink',
  },
  {
    slug: 'science-maker',
    icon: Bot,
    en: 'SCIENCE & MAKER',
    title: '로봇 · 과학 · 메이커',
    description: '직접 탐구하고, 만들고, 문제를 해결해요.',
    intro:
      '로봇과 과학 키트, 3D펜을 손에 쥐고 원리를 탐구하며 눈앞의 문제를 해결하는 프로그램입니다. 만들고 실패하고 다시 시도하는 과정에서 공학적 사고가 자랍니다.',
    jobs: ['로봇 엔지니어', '과학수사요원', '3D 디자이너'],
    grade: '초 3–6학년 · 중학생',
    tools: '로봇 · 과학 키트 · 3D펜',
    color: 'green',
  },
  {
    slug: 'think-solve',
    icon: Scale,
    en: 'THINK & SOLVE',
    title: '사회 · 기획 · 문제해결',
    description: '사건을 분석하고 새로운 해결책을 찾아요.',
    intro:
      '사건을 분석하고, 근거를 세우고, 함께 해결책을 설계하는 프로그램입니다. 법조인의 논리와 기획자의 상상력을 오가며 생각하는 힘을 키웁니다.',
    jobs: ['법조인', '방탈출 기획자'],
    grade: '초 4–6학년 · 중학생',
    tools: '키트 · 활동지',
    color: 'purple',
  },
  {
    slug: 'design-style',
    icon: Palette,
    en: 'DESIGN & STYLE',
    title: '디자인 · 뷰티 · 펫',
    description: '취향과 감각을 더해 나만의 스타일을.',
    intro:
      '주얼리, 펫 패션, 네일 아트까지 — 손끝의 감각으로 나만의 스타일을 완성하는 프로그램입니다. 취향을 발견하고 표현하는 일이 직업이 되는 과정을 경험합니다.',
    jobs: [
      '주얼리 디자이너',
      '펫 패션 디자이너',
      '반려동물 미용사',
      '네일 아티스트',
      '코스메틱 제품 디자이너',
    ],
    grade: '초 1–6학년 · 중학생',
    tools: '공예 · 미용 · 네일 키트',
    color: 'peach',
  },
  {
    slug: 'food-flower',
    icon: Flower2,
    en: 'FOOD & FLOWER',
    title: '푸드 · 플라워',
    description: '재료를 알아가며 손끝으로 완성하는 작품.',
    intro:
      '꽃과 재료를 알아가고, 배치하고, 완성하며 하나의 작품을 만드는 프로그램입니다. 플로리스트와 파티시에의 하루를 손끝으로 따라가 봅니다.',
    jobs: ['플로리스트', '파티시에'],
    grade: '초 1–6학년 · 중학생',
    tools: '플라워 · 베이킹 키트',
    color: 'yellow',
  },
];

export const faqs = [
  [
    '수업은 어디에서 진행되나요?',
    '채움 ON은 강사가 직접 학교로 찾아가는 방문형 진로직업체험입니다. 교실 등 학교 공간에서 바로 진행할 수 있으며, 수업에 필요한 재료와 키트를 함께 준비해 갑니다.',
  ],
  [
    '수업 시간과 차시는 조정할 수 있나요?',
    '네. 40분, 80분, 2차시(80–90분) 등 학교 시간표와 상황에 맞춰 유연하게 조정할 수 있습니다. 학급 단위 수업은 물론 동아리, 캠프, 방과 후 활동 형태로도 구성됩니다.',
  ],
  [
    '어떤 학년이 참여할 수 있나요?',
    '초등 1학년부터 중학교 3학년까지 참여할 수 있습니다. 프로그램마다 권장 학년이 조금씩 다르니, 상담 시 학년을 알려주시면 가장 잘 맞는 프로그램을 추천해 드립니다.',
  ],
  [
    '준비물은 학교에서 무엇을 챙겨야 하나요?',
    '수업에 필요한 키트와 재료는 기본적으로 채움 ON이 준비합니다. AI·디지털 프로그램 등 일부 수업은 PC나 태블릿 같은 학교 장비를 함께 활용하며, 필요한 사항은 사전에 안내드립니다.',
  ],
  [
    '비용은 어떻게 되나요?',
    '프로그램 종류, 참여 인원, 차시 구성에 따라 달라집니다. 문의를 주시면 학교 상황에 맞는 구성과 함께 견적을 안내드립니다.',
  ],
] as const;

export const moments = [
  ['digital', '디지털 리터러시', '디지털로 넓히는 생각'],
  ['3dpen', '3D펜 피자', '상상이 입체가 되는 순간'],
  ['flower', '빅카네이션', '손끝에 피어난 마음'],
  ['book', '그림책 만들기', '나만의 이야기를 한 권에'],
  ['beads', '비즈 주얼리', '반짝임을 하나씩 꿰어서'],
  ['classroom', '교실 속 채움 ON', '우리 교실이 체험장으로'],
  ['explore', '로봇 탐구 교실', '호기심이 향하는 곳으로'],
  ['make', '함께 만드는 시간', '손으로 배우는 즐거움'],
  ['learn', '저학년 체험 수업', '각자의 속도로, 함께'],
] as const;
