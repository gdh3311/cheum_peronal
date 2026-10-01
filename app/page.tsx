'use client';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Download,
  MessagesSquare,
  PencilRuler,
  School,
} from 'lucide-react';
import Link from 'next/link';
import { ContactBox, FaqList } from './chrome';
import { classDuration, faqs, moments, programCount, programs } from './site';

const processSteps = [
  {
    icon: MessagesSquare,
    en: 'CONTACT',
    title: '신청 · 문의',
    description: '신청서에 수업 유형과 희망 일정, 학년, 인원을 알려주세요.',
  },
  {
    icon: PencilRuler,
    en: 'DESIGN',
    title: '학교 맞춤 상담',
    description:
      '학교 상황과 운영 목적을 확인하고 맞는 수업을 함께 찾습니다.',
  },
  {
    icon: School,
    en: 'CLASS DAY',
    title: '프로그램 구성',
    description: '학년과 시간, 참여 인원에 맞춰 프로그램을 조정하고 확정합니다.',
  },
  {
    icon: Award,
    en: 'FOLLOW-UP',
    title: '찾아가는 수업',
    description:
      '강사와 수업 재료가 학교로 찾아가 체험과 결과물 중심 수업을 진행합니다.',
  },
];

export default function Home() {
  return (
    <>
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
          <div className="hero-art-panel" aria-hidden="true" />
          <img className="hero-collage" src="/brand/experience-collage.png" alt="디지털 드로잉, 로봇 제작, 협업 활동과 과학 실험에 참여하는 아이들" width="1536" height="1024" fetchPriority="high" decoding="async" />
          <span className="hero-art-kicker">EXPERIENCE MAKES THE DIFFERENCE</span>
          <span className="hero-art-mark" aria-hidden="true">ON</span>
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
            다섯 가지 분야, {programCount}가지 직업의 세계.
            <br />
            아이의 관심에서 새로운 경험이 시작됩니다.
          </p>
        </div>
        <div className="program-grid">
          {programs.map((p, i) => (
            <article className={`program-card ${p.color}`} key={p.slug}>
              <div className="card-top">
                <p.icon size={28} strokeWidth={1.5} />
                <span>0{i + 1}</span>
              </div>
              <span className="card-en">{p.en}</span>
              <h3>{p.title}</h3>
              <p className="card-description">{p.description}</p>
              {/* Redundant per spec, but Safari drops list semantics when
                  list-style is none. */}
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul role="list">
                {p.jobs.map((j) => (
                  <li key={j}>{j}</li>
                ))}
              </ul>
              <div className="card-meta">
                <span>{p.grade}</span>
                <span>{classDuration}</span>
                <span>{p.tools}</span>
                {p.note && <small>{p.note}</small>}
              </div>
              <Link className="card-link" href={`/programs#${p.slug}`}>
                자세히 보기 <ArrowUpRight size={15} />
              </Link>
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
            <br />
            <Link className="text-link" href="/about">
              채움 ON 더 알아보기 <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="steps">
            {[
              [
                'LEARN',
                '배우기',
                '하나의 핵심 원리를 쉽고 명확하게 이해합니다.',
              ],
              ['TRY', '시도하기', '배운 내용을 직접 해보며 원리를 확인합니다.'],
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
              src="/brand/experience-icons.png"
              alt="진로탐색, 직업체험, 문제해결, 협업, 진로설계, 역량개발의 여섯 가지 체험 가치"
              loading="lazy"
              decoding="async"
            />
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
            <Link className="text-link" href="/contact">
              맞춤 수업 상담하기 <ArrowUpRight size={17} />
            </Link>
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
            {moments.slice(0, 6).map(([img, title, sub]) => (
              <figure key={img}>
                <div>
                  <img
                    src={`/images/${img}.webp`}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <span>{sub}</span>
                  <h3>{title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="section-more">
            <Link className="text-link" href="/moments">
              수업 이야기 전체 보기 <ArrowUpRight size={17} />
            </Link>
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
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
        <ol className="process-grid" role="list">
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
            <Link className="text-link" href="/contact">
              직접 문의하기 <ArrowUpRight size={17} />
            </Link>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
      <section id="contact" className="contact-section wrap">
        <ContactBox />
      </section>
    </>
  );
}
