import { ArrowUpRight, Clock3, GraduationCap, Package } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { programs } from '../site';

export const metadata: Metadata = {
  title: '체험 프로그램',
  description:
    '채움 ON의 5개 분야 진로직업체험 프로그램. AI·디지털, 로봇·과학, 사회·기획, 디자인·뷰티, 푸드·플라워까지 학교로 찾아갑니다.',
};

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">OUR PROGRAMS</span>
          <h1>
            다섯 가지 분야,
            <br />
            수십 가지 직업의 세계.
          </h1>
          <p>
            모든 프로그램은 학교로 찾아가는 방문형 수업으로,
            <br />
            학년과 차시를 학교 상황에 맞춰 조정할 수 있습니다.
          </p>
          <nav className="page-hero-tabs" aria-label="프로그램 바로가기">
            {programs.map((p, i) => (
              <a key={p.slug} href={`#${p.slug}`}>
                <em>0{i + 1}</em>
                {p.title}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <div className="wrap program-details">
        {programs.map((p, i) => (
          <section
            id={p.slug}
            className={`program-detail ${p.color}`}
            key={p.slug}
            aria-labelledby={`${p.slug}-title`}
          >
            <div className="detail-head">
              <p.icon size={34} strokeWidth={1.4} />
              <span className="detail-index">0{i + 1}</span>
            </div>
            <div className="detail-body">
              <span className="card-en">{p.en}</span>
              <h2 id={`${p.slug}-title`}>{p.title}</h2>
              <p className="detail-intro">{p.intro}</p>
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul className="detail-jobs" role="list">
                {p.jobs.map((j) => (
                  <li key={j}>{j}</li>
                ))}
              </ul>
            </div>
            <dl className="detail-meta">
              <div>
                <dt>
                  <GraduationCap size={16} /> 대상
                </dt>
                <dd>
                  {p.grade}
                  {p.note && <small>{p.note}</small>}
                </dd>
              </div>
              <div>
                <dt>
                  <Clock3 size={16} /> 시간
                </dt>
                <dd>2차시 · 80–90분 (조정 가능)</dd>
              </div>
              <div>
                <dt>
                  <Package size={16} /> 수업 도구
                </dt>
                <dd>{p.tools}</dd>
              </div>
              <Link className="text-link" href="/contact">
                이 프로그램 문의하기 <ArrowUpRight size={16} />
              </Link>
            </dl>
          </section>
        ))}
      </div>
      <section className="section wrap page-cta">
        <div className="page-cta-box">
          <h2>어떤 프로그램이 우리 반에 맞을지 고민되시나요?</h2>
          <p>학년과 인원을 알려주시면 가장 잘 맞는 프로그램을 추천해 드려요.</p>
          <Link className="button primary" href="/contact">
            수업 문의하기 <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
