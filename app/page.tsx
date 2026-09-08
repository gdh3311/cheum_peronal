'use client';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Bot,
  Palette,
  Scale,
  Flower2,
  Cpu,
  Download,
  Phone,
  Mail,
  Power,
  MessagesSquare,
  PencilRuler,
  School,
  Award,
  Plus,
} from 'lucide-react';
import { MobileNavigation, MotionEnhancements } from './motion';
const processSteps = [
  {
    icon: MessagesSquare,
    en: 'CONTACT',
    title: '문의 · 상담',
    description: '전화 또는 메일로 희망 일정, 학년, 인원을 알려주세요.',
  },
  {
    icon: PencilRuler,
    en: 'DESIGN',
    title: '맞춤 설계',
    description:
      '학교의 교육목표에 맞춰 프로그램과 차시를 구성해 안내드립니다.',
  },
  {
    icon: School,
    en: 'CLASS DAY',
    title: '찾아가는 수업',
    description: '강사와 수업 재료가 학교로 찾아가 수업을 진행합니다.',
  },
  {
    icon: Award,
    en: 'FOLLOW-UP',
    title: '마무리 · 피드백',
    description:
      '아이들의 결과물과 수업 이야기를 공유하며 다음 배움을 제안합니다.',
  },
];
const faqs = [
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
const programs = [
  {
    icon: Cpu,
    en: 'AI & DIGITAL',
    title: 'AI · 디지털 콘텐츠',
    description: '상상 속 아이디어가 나만의 콘텐츠로.',
    jobs: ['웹툰작가', '광고기획자', '버추얼 크리에이터', '영상 제작자'],
    grade: '초 3–6학년 · 중학생',
    note: '버추얼 크리에이터는 초 4학년부터',
    tools: 'PC · 태블릿 · 앱',
    color: 'pink',
  },
  {
    icon: Bot,
    en: 'SCIENCE & MAKER',
    title: '로봇 · 과학 · 메이커',
    description: '직접 탐구하고, 만들고, 문제를 해결해요.',
    jobs: ['로봇 엔지니어', '과학수사요원', '3D 디자이너'],
    grade: '초 3–6학년 · 중학생',
    tools: '로봇 · 과학 키트 · 3D펜',
    color: 'green',
  },
  {
    icon: Scale,
    en: 'THINK & SOLVE',
    title: '사회 · 기획 · 문제해결',
    description: '사건을 분석하고 새로운 해결책을 찾아요.',
    jobs: ['법조인', '방탈출 기획자'],
    grade: '초 4–6학년 · 중학생',
    tools: '키트 · 활동지',
    color: 'purple',
  },
  {
    icon: Palette,
    en: 'DESIGN & STYLE',
    title: '디자인 · 뷰티 · 펫',
    description: '취향과 감각을 더해 나만의 스타일을.',
    jobs: [
      '주얼리 디자이너',
      '펫 패션 디자이너',
      '반려동물 미용사',
      '네일 아티스트',
    ],
    grade: '초 1–6학년 · 중학생',
    tools: '공예 · 미용 · 네일 키트',
    color: 'peach',
  },
  {
    icon: Flower2,
    en: 'FOOD & FLOWER',
    title: '푸드 · 플라워',
    description: '재료를 알아가며 손끝으로 완성하는 작품.',
    jobs: ['플로리스트', '파티시에'],
    grade: '초 1–6학년 · 중학생',
    tools: '플라워 · 베이킹 키트',
    color: 'yellow',
  },
];
export default function Home() {
  return (
    <>
      <MotionEnhancements />
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <header className="header">
        <a href="#top" className="brand" aria-label="채움크리에이티브 홈">
          <span className="brand-symbol">
            <Power size={23} />
          </span>
          <span>
            chaeum<span className="brand-on">ON</span>
            <small>채움크리에이티브</small>
          </span>
        </a>
        <nav aria-label="주 메뉴">
          <a href="#about">채움 ON 소개</a>
          <a href="#programs">체험 프로그램</a>
          <a href="#custom">학교 맞춤 수업</a>
          <a href="#moments">수업 이야기</a>
        </nav>
        <div className="header-actions">
          <a className="nav-contact" href="#contact">
            수업 문의하기 <ArrowUpRight size={17} />
          </a>
          <MobileNavigation />
        </div>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">
              <i /> 학교로 찾아가는 진로직업체험
            </span>
            <h1 id="hero-title">
              호기심을{' '}
              <span className="on-word">
                켜고
                <svg viewBox="0 0 220 18" aria-hidden="true">
                  <path d="M3 12 Q108 -3 217 9 M16 17 Q110 6 198 15" />
                </svg>
              </span>
              ,<br />
              가능성을 채우다.
            </h1>
            <p>
              직접 해보는 순간, 배움은 경험이 됩니다.
              <br />
              아이들의 내일을 넓히는 첫 번째 도전, 채움 ON.
            </p>
            <div className="hero-actions">
              <a href="#programs" className="button primary">
                체험 프로그램 둘러보기 <ArrowRight size={19} />
              </a>
              <a
                href="/catalog.pdf"
                download="채움크리에이티브 카탈로그.pdf"
                className="catalog-link"
              >
                카탈로그 <Download size={17} />
              </a>
            </div>
            <div className="hero-foot">
              <span className="mini-spark">✳</span>
              <span>스스로 생각하고, 만들고, 표현하는 아이들.</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-grid" aria-hidden="true" />
            <span className="art-note">
              A little curiosity,
              <br />
              <em>a world of possibilities.</em>
            </span>
            <div className="photo-main">
              <img
                src="/images/explore.webp"
                alt="로봇과 노트북을 활용하는 진로체험 프로그램 소개 이미지"
                fetchPriority="high"
                decoding="async"
              />
              <span>
                내가 만드는, 나의 가능성 <ArrowUpRight size={16} />
              </span>
            </div>
            <div className="photo-small">
              <img
                src="/images/make.webp"
                alt="함께 만들고 탐구하는 수업 소개 이미지"
                decoding="async"
              />
              <span>LET’S TRY SOMETHING NEW</span>
            </div>
            <div className="round-stamp">
              <Sparkles size={28} />
              <span>
                생각이 자라는
                <br />
                <b>경험의 힘</b>
              </span>
            </div>
            <span className="art-star" aria-hidden="true">
              ✳
            </span>
            <span className="art-caption">LEARN. TRY. EXPAND. CREATE.</span>
          </div>
        </section>
        <div className="promise-strip" aria-label="채움 ON 프로그램 특징">
          <div className="promise-track">
            {[0, 1].map((n) => (
              <span
                className="promise-run"
                key={n}
                aria-hidden={n === 1 || undefined}
              >
                {[
                  ['CURIOSITY ON', '아이들의 호기심을 켜다'],
                  ['EXPERIENCE', '직업 체험 중심'],
                  ['PARTICIPATION', '학생 참여 중심'],
                  ['CAREER', '진로 탐색 지원'],
                  ['OUTCOME', '결과물 중심 수업'],
                ].map(([en, ko]) => (
                  <span className="promise-item" key={en}>
                    <em>{en}</em>
                    {ko}
                    <i>✦</i>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <section id="programs" className="section wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR PROGRAMS</span>
              <h2>어떤 가능성을 만나볼까요?</h2>
            </div>
            <p>
              다섯 가지 분야, 다양한 직업의 세계.
              <br />
              아이의 관심에서 새로운 경험이 시작됩니다.
            </p>
          </div>
          <div className="program-grid">
            {programs.map((p, i) => (
              <article className={`program-card ${p.color}`} key={p.en}>
                <div className="card-top">
                  <p.icon size={28} strokeWidth={1.5} />
                  <span>0{i + 1}</span>
                </div>
                <span className="card-en">{p.en}</span>
                <h3>{p.title}</h3>
                <p className="card-description">{p.description}</p>
                <ul>
                  {p.jobs.map((j) => (
                    <li key={j}>{j}</li>
                  ))}
                </ul>
                <div className="card-meta">
                  <span>{p.grade}</span>
                  <span>2차시 · 80–90분</span>
                  <span>{p.tools}</span>
                  {p.note && <small>{p.note}</small>}
                </div>
              </article>
            ))}
          </div>
          <p className="program-note">
            학년과 차시, 운영 시간은 학교 상황에 맞춰 조정할 수 있습니다. 일부
            프로그램은 시판 키트를 사용합니다.
          </p>
        </section>
        <section id="about" className="method-section">
          <div className="wrap method-layout">
            <div>
              <span className="eyebrow">THE CHAEUM WAY</span>
              <h2>
                배우는 데서 한 걸음 더,
                <br />
                나의 경험이 되도록.
              </h2>
              <p>
                하나의 원리를 이해하고, 직접 시도하고,
                <br />
                자신만의 방식으로 확장하는 수업을 만듭니다.
              </p>
              <span className="method-quote">“다르게 해보면 어떻게 될까?”</span>
            </div>
            <div className="steps">
              {[
                [
                  'LEARN',
                  '배우기',
                  '하나의 핵심 원리를 쉽고 명확하게 이해합니다.',
                ],
                [
                  'TRY',
                  '시도하기',
                  '배운 내용을 직접 해보며 원리를 확인합니다.',
                ],
                [
                  'EXPAND',
                  '확장하기',
                  '스스로 질문하고 새로운 방법에 도전합니다.',
                ],
                [
                  'CREATE',
                  '창작하기',
                  '자신의 생각을 더해 나만의 결과물을 완성합니다.',
                ],
              ].map(([en, ko, desc], i) => (
                <div className="step" key={en}>
                  <span className="step-number">0{i + 1}</span>
                  <div>
                    <h3>
                      {ko}
                      <span>{en}</span>
                    </h3>
                    <p>{desc}</p>
                  </div>
                  <span className="step-arrow" aria-hidden="true">
                    ↘
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="custom" className="section wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MADE FOR YOUR SCHOOL</span>
              <h2>우리 학교에 꼭 맞는 배움.</h2>
            </div>
            <p>
              학년, 시간, 인원, 관심 주제까지.
              <br />
              학교의 교육목표와 상황에 맞춰 유연하게 구성합니다.
            </p>
          </div>
          <div className="custom-grid">
            <div className="custom-image">
              <img
                src="/images/learn.webp"
                alt="만들기 활동을 함께하는 저학년 체험 수업 소개 이미지"
                loading="lazy"
              />
              <span>각자의 속도로, 함께 자라는 시간.</span>
            </div>
            <div className="custom-info">
              <div>
                <span>01 / 대상</span>
                <h3>초등 1학년부터 중학교 3학년까지</h3>
                <p>저학년 체험형부터 만들기·탐구형, 프로젝트·진로탐색형까지.</p>
              </div>
              <div>
                <span>02 / 구성</span>
                <h3>40분 · 80분 · 2차시</h3>
                <p>학급, 동아리, 소규모 그룹에 맞춘 수업 시간과 참여 방식.</p>
              </div>
              <div>
                <span>03 / 주제</span>
                <h3>학교가 원하는 경험을 함께 설계</h3>
                <p>학기 중 수업, 캠프, 동아리, 방과 후 활동에 맞춘 프로그램.</p>
              </div>
              <a className="text-link" href="#contact">
                맞춤 수업 상담하기 <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </section>
        <section id="moments" className="section moments">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">CHAEUM MOMENTS</span>
                <h2>작은 도전이 남긴, 큰 반짝임.</h2>
              </div>
              <p>
                채움 ON의 수업 현장과
                <br />
                아이들의 손끝에서 탄생한 결과물을 만나보세요.
              </p>
            </div>
            <div className="moments-grid">
              {[
                ['digital', '디지털 리터러시', '디지털로 넓히는 생각'],
                ['3dpen', '3D펜 피자', '상상이 입체가 되는 순간'],
                ['flower', '빅카네이션', '손끝에 피어난 마음'],
                ['book', '그림책 만들기', '나만의 이야기를 한 권에'],
                ['beads', '비즈 주얼리', '반짝임을 하나씩 꿰어서'],
                ['classroom', '교실 속 채움 ON', '우리 교실이 체험장으로'],
              ].map(([img, title, sub]) => (
                <figure key={img}>
                  <div>
                    <img
                      src={`/images/${img}.webp`}
                      alt={title}
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <span>{sub}</span>
                    <h3>{title}</h3>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section
          id="process"
          className="section wrap process-section"
          aria-labelledby="process-title"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">HOW IT WORKS</span>
              <h2 id="process-title">수업까지, 이렇게 진행돼요.</h2>
            </div>
            <p>
              문의부터 수업 마무리까지.
              <br />
              번거로운 준비 없이 네 단계면 충분합니다.
            </p>
          </div>
          <ol className="process-grid">
            {processSteps.map((s, i) => (
              <li className="process-card" key={s.en}>
                <span className="process-index">STEP 0{i + 1}</span>
                <s.icon size={30} strokeWidth={1.5} />
                <span className="process-en">{s.en}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </li>
            ))}
          </ol>
        </section>
        <section id="faq" className="faq-section">
          <div className="wrap faq-layout">
            <div className="faq-intro">
              <span className="eyebrow">FAQ</span>
              <h2>자주 묻는 질문</h2>
              <p>
                궁금한 점이 더 있으신가요?
                <br />
                편하게 문의 주시면 빠르게 답변드릴게요.
              </p>
              <a className="text-link" href="#contact">
                직접 문의하기 <ArrowUpRight size={19} />
              </a>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a], i) => (
                <details key={q} name="faq">
                  <summary>
                    <span className="faq-q">
                      <em>Q{i + 1}.</em>
                      {q}
                    </span>
                    <Plus size={19} className="faq-icon" aria-hidden="true" />
                  </summary>
                  <div className="faq-answer">
                    <p>{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section wrap">
          <div className="contact-box">
            <div className="contact-copy">
              <span className="eyebrow">TURN CURIOSITY ON</span>
              <h2>
                다음 배움의 시작,
                <br />
                채움과 함께해요.
              </h2>
              <p>
                희망 학년, 인원, 일정, 관심 프로그램을 알려주세요.
                <br />
                학교에 맞는 수업을 함께 구성해드립니다.
              </p>
              <div className="contact-details">
                <a href="tel:01064608659">
                  <Phone size={20} />
                  <span>
                    <small>전화 문의</small>010-6460-8659
                  </span>
                </a>
                <a href="mailto:chaeum-lab@naver.com">
                  <Mail size={20} />
                  <span>
                    <small>이메일</small>chaeum-lab@naver.com
                  </span>
                </a>
                <a
                  href="https://blog.naver.com/chaeum-lab"
                  target="_blank"
                  rel="noreferrer"
                >
                  채움 ON 블로그 <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const d = new FormData(e.currentTarget);
                const v = (k: string) => {
                  const g = d.get(k);
                  return typeof g === 'string' ? g.trim() : '';
                };
                const body = `학교명: ${v('school')}\n담당자: ${v('name') || '-'}\n희망 프로그램: ${v('program')}\n대상 학년 · 인원: ${v('size') || '-'}\n\n${v('message')}`;
                location.href = `mailto:chaeum-lab@naver.com?subject=${encodeURIComponent(`[수업 문의] ${v('school')}`)}&body=${encodeURIComponent(body)}`;
              }}
            >
              <h3>수업 문의 남기기</h3>
              <div className="form-row">
                <label>
                  학교명 · 기관명
                  <input
                    name="school"
                    required
                    autoComplete="organization"
                    placeholder="OO초등학교"
                  />
                </label>
                <label>
                  담당자 성함
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="홍길동 선생님"
                  />
                </label>
              </div>
              <label>
                희망 프로그램
                <select name="program" defaultValue="상담 후 결정">
                  <option>AI · 디지털 콘텐츠</option>
                  <option>로봇 · 과학 · 메이커</option>
                  <option>사회 · 기획 · 문제해결</option>
                  <option>디자인 · 뷰티 · 펫</option>
                  <option>푸드 · 플라워</option>
                  <option>상담 후 결정</option>
                </select>
              </label>
              <label>
                대상 학년 · 인원
                <input name="size" placeholder="예: 5학년 2개 반, 48명" />
              </label>
              <label>
                문의 내용
                <textarea
                  name="message"
                  rows={4}
                  placeholder="희망 일정과 궁금한 점을 편하게 적어주세요."
                />
              </label>
              <button className="button light form-submit" type="submit">
                메일로 문의 보내기 <ArrowRight size={18} />
              </button>
              <small>
                버튼을 누르면 메일 앱이 열리고, 작성한 내용이 자동으로 담깁니다.
              </small>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="footer-about">
            <a className="footer-brand" href="#top">
              <span className="brand-symbol">
                <Power size={19} />
              </span>
              chaeum ON
            </a>
            <p>
              학교로 찾아가는 진로직업체험, 채움크리에이티브.
              <br />
              아이들의 호기심을 켜고, 배움을 경험으로 연결합니다.
            </p>
          </div>
          <nav className="footer-col" aria-label="푸터 메뉴">
            <h3>바로가기</h3>
            <a href="#about">채움 ON 소개</a>
            <a href="#programs">체험 프로그램</a>
            <a href="#custom">학교 맞춤 수업</a>
            <a href="#moments">수업 이야기</a>
            <a href="#faq">자주 묻는 질문</a>
          </nav>
          <nav className="footer-col" aria-label="프로그램 분야">
            <h3>프로그램</h3>
            <a href="#programs">AI · 디지털 콘텐츠</a>
            <a href="#programs">로봇 · 과학 · 메이커</a>
            <a href="#programs">사회 · 기획 · 문제해결</a>
            <a href="#programs">디자인 · 뷰티 · 펫</a>
            <a href="#programs">푸드 · 플라워</a>
          </nav>
          <div className="footer-col" aria-label="문의처">
            <h3>문의</h3>
            <a href="tel:01064608659">
              <Phone size={15} />
              010-6460-8659
            </a>
            <a href="mailto:chaeum-lab@naver.com">
              <Mail size={15} />
              chaeum-lab@naver.com
            </a>
            <a
              href="https://blog.naver.com/chaeum-lab"
              target="_blank"
              rel="noreferrer"
            >
              네이버 블로그 <ArrowUpRight size={14} />
            </a>
            <a href="/catalog.pdf" download="채움크리에이티브 카탈로그.pdf">
              카탈로그 다운로드 <Download size={14} />
            </a>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 CHAEUM CREATIVE. All rights reserved.</span>
          <span>호기심을 켜고, 가능성을 채우다.</span>
        </div>
      </footer>
      <nav className="mobile-cta" aria-label="빠른 문의">
        <a href="tel:01064608659" className="mobile-cta-call">
          <Phone size={18} />
          전화 문의
        </a>
        <a href="#contact" className="mobile-cta-main">
          수업 문의하기 <ArrowUpRight size={17} />
        </a>
      </nav>
    </>
  );
}
