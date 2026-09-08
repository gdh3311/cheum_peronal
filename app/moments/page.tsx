import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { contact, moments } from '../site';

export const metadata: Metadata = {
  title: '수업 이야기',
  description:
    '채움 ON의 수업 현장과 아이들의 손끝에서 탄생한 결과물. 디지털 리터러시부터 플라워 클래스까지 생생한 수업 이야기를 만나보세요.',
};

export default function MomentsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">CHAEUM MOMENTS</span>
          <h1>
            작은 도전이 남긴,
            <br />큰 반짝임.
          </h1>
          <p>
            수업이 끝난 교실에는 결과물보다 큰 것이 남습니다.
            <br />
            “다음엔 뭐 만들어요?”라는 질문이요.
          </p>
        </div>
      </section>
      <section className="section wrap">
        <div className="moments-grid gallery-grid">
          {moments.map(([img, title, sub]) => (
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
        <p className="program-note">
          더 많은 수업 현장은{' '}
          <a href={contact.blog} target="_blank" rel="noreferrer">
            채움 ON 블로그
          </a>
          에서 만나보실 수 있습니다.
        </p>
      </section>
      <section className="section wrap page-cta">
        <div className="page-cta-box">
          <h2>다음 이야기의 주인공은 우리 학교 아이들.</h2>
          <p>지금 문의하시면 다가오는 학기 일정으로 상담해 드립니다.</p>
          <Link className="button primary" href="/contact">
            수업 문의하기 <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
