'use client';

import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  Plus,
  Power,
} from 'lucide-react';
import Link from 'next/link';
import { MobileNavigation } from './motion';
import { contact, navLinks, programs } from './site';

export function SiteHeader() {
  return (
    <header className="header">
      <Link href="/" className="brand" aria-label="채움크리에이티브 홈">
        <span className="brand-symbol">
          <Power size={23} />
        </span>
        <span>
          chaeum<span className="brand-on">ON</span>
          <small>채움크리에이티브</small>
        </span>
      </Link>
      <nav aria-label="주 메뉴">
        {navLinks.map(([href, label]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link className="nav-contact" href="/contact">
          수업 문의하기 <ArrowUpRight size={17} />
        </Link>
        <MobileNavigation />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-about">
          <Link className="footer-brand" href="/">
            <span className="brand-symbol">
              <Power size={19} />
            </span>
            chaeum ON
          </Link>
          <p>
            학교로 찾아가는 진로직업체험, 채움크리에이티브.
            <br />
            아이들의 호기심을 켜고, 배움을 경험으로 연결합니다.
          </p>
        </div>
        <nav className="footer-col" aria-label="푸터 메뉴">
          <h3>바로가기</h3>
          <Link href="/about">채움 ON 소개</Link>
          <Link href="/programs">체험 프로그램</Link>
          <Link href="/moments">수업 이야기</Link>
          <Link href="/#faq">자주 묻는 질문</Link>
          <Link href="/contact">수업 문의</Link>
        </nav>
        <nav className="footer-col" aria-label="프로그램 분야">
          <h3>프로그램</h3>
          {programs.map((p) => (
            <Link key={p.slug} href={`/programs#${p.slug}`}>
              {p.title}
            </Link>
          ))}
        </nav>
        <div className="footer-col" aria-label="문의처">
          <h3>문의</h3>
          <a href={contact.tel}>
            <Phone size={15} />
            {contact.phone}
          </a>
          <a href={contact.mailto}>
            <Mail size={15} />
            {contact.email}
          </a>
          <a href={contact.blog} target="_blank" rel="noreferrer">
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
  );
}

export function MobileCta() {
  return (
    <nav className="mobile-cta" aria-label="빠른 문의">
      <a href={contact.tel} className="mobile-cta-call">
        <Phone size={18} />
        전화 문의
      </a>
      <Link href="/contact" className="mobile-cta-main">
        수업 문의하기 <ArrowUpRight size={17} />
      </Link>
    </nav>
  );
}

export function ContactBox() {
  return (
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
          <a href={contact.tel}>
            <Phone size={20} />
            <span>
              <small>전화 문의</small>
              {contact.phone}
            </span>
          </a>
          <a href={contact.mailto}>
            <Mail size={20} />
            <span>
              <small>이메일</small>
              {contact.email}
            </span>
          </a>
          <a href={contact.blog} target="_blank" rel="noreferrer">
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
          location.href = `${contact.mailto}?subject=${encodeURIComponent(`[수업 문의] ${v('school')}`)}&body=${encodeURIComponent(body)}`;
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
            {programs.map((p) => (
              <option key={p.slug}>{p.title}</option>
            ))}
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
  );
}

export function FaqList({
  items,
}: {
  items: readonly (readonly [string, string])[];
}) {
  return (
    <div className="faq-list">
      {items.map(([q, a], i) => (
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
  );
}
