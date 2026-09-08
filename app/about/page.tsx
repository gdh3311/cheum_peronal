import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '채움 ON 소개',
  description:
    '채움크리에이티브는 학교로 찾아가는 진로직업체험 채움 ON을 운영합니다. 배우고, 시도하고, 확장하고, 창작하는 네 단계의 수업 철학을 소개합니다.',
};

const values = [
  [
    '경험이 먼저입니다',
    '설명을 듣는 수업이 아니라 직접 해보는 수업을 만듭니다. 아이들은 결과물을 손에 쥐었을 때 가장 오래 기억합니다.',
  ],
  [
    '모든 아이의 속도를 존중합니다',
    '빠른 아이에게는 확장 과제를, 천천히 가는 아이에게는 기다림을. 저마다의 속도로 완성하는 수업을 지향합니다.',
  ],
  [
    '학교와 함께 설계합니다',
    '정해진 커리큘럼을 파는 것이 아니라, 학교의 교육목표와 아이들의 관심사에 맞춰 프로그램을 함께 구성합니다.',
  ],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">ABOUT CHAEUM ON</span>
          <h1>
            아이들의 호기심에
            <br />
            스위치를 켜는 사람들.
          </h1>
          <p>
            채움크리에이티브는 학교로 찾아가는 진로직업체험
            <br />
            <strong>채움 ON</strong>을 만듭니다.
          </p>
        </div>
      </section>
      <section className="section wrap about-story">
        <div className="about-story-grid">
          <div className="about-story-image">
            <img
              src="/images/classroom.webp"
              alt="교실에서 진행되는 채움 ON 체험 수업 현장"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span className="eyebrow">OUR STORY</span>
            <h2>
              “해보고 싶어요”라는 말에서
              <br />
              시작된 수업.
            </h2>
            <p>
              아이들은 눈으로 배운 것은 금세 잊지만, 손으로 만든 것은 오래
              기억합니다. 채움 ON은 웹툰 작가부터 플로리스트까지, 다양한 직업의
              하루를 교실 안에서 직접 체험하게 함으로써 “나도 할 수 있다”는
              감각을 심어주는 진로직업체험 프로그램입니다.
            </p>
            <p>
              강사와 재료가 학교로 찾아가고, 수업은 학교의 시간표와 교육목표에
              맞춰 구성됩니다. 아이들에게 필요한 것은 준비물이 아니라
              호기심뿐입니다.
            </p>
          </div>
        </div>
      </section>
      <section className="method-section">
        <div className="wrap method-layout">
          <div>
            <span className="eyebrow">THE CHAEUM WAY</span>
            <h2>
              네 단계로 완성되는
              <br />
              채움 ON의 수업.
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
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT WE BELIEVE</span>
            <h2>채움 ON이 지키는 세 가지.</h2>
          </div>
        </div>
        <div className="values-grid">
          {values.map(([title, desc], i) => (
            <article className="value-card" key={title}>
              <span className="value-index">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section wrap page-cta">
        <div className="page-cta-box">
          <h2>우리 학교의 다음 배움, 함께 만들어요.</h2>
          <p>학년, 인원, 일정을 알려주시면 꼭 맞는 수업을 제안해 드립니다.</p>
          <Link className="button primary" href="/contact">
            수업 문의하기 <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
