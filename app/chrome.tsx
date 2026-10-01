'use client';

import {
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  Plus,
} from 'lucide-react';
import Link from 'next/link';
import { MobileNavigation } from './motion';
import { contact, navLinks, programs } from './site';

export function SiteHeader() {
  return (
    <header className="header">
      <Link href="/" className="brand" aria-label="채움크리에이티브 홈">
        <img className="brand-logo" src="/brand/logo-cream.png" alt="채움 ON" width="612" height="408" />
      </Link>
      <nav aria-label="주 메뉴">
        {navLinks.map(([href, label]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <a className="nav-contact" href={contact.applicationUrl} target="_blank" rel="noopener noreferrer">
          수업 신청하기 <ArrowUpRight size={17} />
        </a>
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
            <img className="footer-logo" src="/brand/logo-cream.png" alt="채움 ON" width="612" height="408" loading="lazy" />
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
          <Link href="/contact">수업 신청·문의</Link>
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
          <a href="/catalog.pdf" download="채움크리에이티브 카탈로그V2.pdf">
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
      <a href={contact.applicationUrl} className="mobile-cta-main" target="_blank" rel="noopener noreferrer">
        신청서 작성하기 <ArrowUpRight size={17} />
      </a>
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
          학교에 맞는 수업을 신청해 주세요.
          <br />
          내용을 확인한 뒤 구성과 일정, 비용을 안내드립니다.
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
      <div className="application-card">
        <div className="application-card-top">
          <span>CHAEUM ON APPLICATION</span>
          <span className="application-platform">Google Forms <ArrowUpRight size={14} /></span>
        </div>
        <h3>교육·체험 신청 및 문의</h3>
        <p className="application-intro">신청 유형에 맞는 질문만 따라가면 됩니다.</p>
        <ol className="application-steps">
          <li>
            <span>01</span>
            <div>
              <strong>담당자 정보</strong>
              <p>학교·기관명, 담당자명·업무, 연락처, 이메일</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>신청 유형과 수업 내용</strong>
              <p>희망 프로그램이나 주제, 학년·인원·예산 또는 문의사항</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>희망 일정</strong>
              <p>희망 요일·시간과 연락 가능한 시간</p>
            </div>
          </li>
        </ol>
        <div className="application-types" aria-label="신청 유형">
          <small>폼에서 선택</small>
          <span>진로직업 체험</span>
          <span>맞춤형 체험</span>
          <span>상담 후 결정</span>
        </div>
        <a className="application-link" href={contact.applicationUrl} target="_blank" rel="noopener noreferrer">
          구글폼에서 신청하기 <ArrowUpRight size={20} />
        </a>
        <p className="application-note">신청 후 담당자가 연락드립니다. 일정과 비용은 상담 후 최종 확정됩니다.</p>
      </div>
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
