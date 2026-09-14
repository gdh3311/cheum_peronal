import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { ContactBox, FaqList } from '../chrome';
import { contact, faqs } from '../site';

export const metadata: Metadata = {
  title: '수업 신청·문의',
  description:
    '채움 ON 교육·체험 신청 및 문의. 신청 유형과 희망 일정 등을 구글폼으로 남겨주시면 프로그램 구성과 비용을 안내드립니다.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">APPLICATION · CONTACT</span>
          <h1>
            우리 학교의 다음 경험,
            <br />
            여기서 시작해요.
          </h1>
          <p>
            프로그램을 골랐거나, 아직 고민 중이어도 괜찮습니다.
            <br />
            신청서를 남겨주시면 맞는 수업을 함께 찾겠습니다.
          </p>
          <a className="button primary contact-hero-action" href={contact.applicationUrl} target="_blank" rel="noopener noreferrer">
            신청서 바로 작성하기 <ArrowUpRight size={18} />
          </a>
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
