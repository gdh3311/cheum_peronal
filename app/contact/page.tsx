import type { Metadata } from 'next';
import { ContactBox, FaqList } from '../chrome';
import { faqs } from '../site';

export const metadata: Metadata = {
  title: '수업 문의',
  description:
    '채움 ON 진로직업체험 수업 문의. 희망 학년, 인원, 일정을 알려주시면 학교에 맞는 프로그램을 함께 구성해 드립니다.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">CONTACT</span>
          <h1>
            문의는 가볍게,
            <br />
            상담은 꼼꼼하게.
          </h1>
          <p>
            아직 정해진 것이 없어도 괜찮습니다.
            <br />
            학년과 인원만 알려주셔도 상담을 시작할 수 있어요.
          </p>
        </div>
      </section>
      <section className="contact-section wrap">
        <ContactBox />
      </section>
      <section className="faq-section">
        <div className="wrap faq-layout">
          <div className="faq-intro">
            <span className="eyebrow">FAQ</span>
            <h2>문의 전에 확인해 보세요.</h2>
            <p>
              선생님들께서 가장 많이
              <br />
              물어보시는 질문을 모았습니다.
            </p>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
