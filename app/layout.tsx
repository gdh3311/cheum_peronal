import type { Metadata } from 'next';
import './globals.css';
import { MobileCta, SiteFooter, SiteHeader } from './chrome';
import { HashScroll, MotionEnhancements, RouteAnnouncer } from './motion';
export const metadata: Metadata = {
  title: {
    default: '채움크리에이티브 | 호기심을 켜고, 가능성을 채우다',
    template: '%s | 채움크리에이티브',
  },
  description:
    '학교로 찾아가는 진로직업체험 채움 ON. AI·디지털, 로봇·과학, 디자인 등 5개 분야의 체험과 학교 맞춤형 프로그램을 만나보세요.',
  openGraph: {
    title: '채움크리에이티브 | 호기심을 켜고, 가능성을 채우다',
    description:
      '학교로 찾아가는 진로직업체험 채움 ON. 5개 분야의 체험 프로그램과 학교 맞춤 수업.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '채움크리에이티브',
    images: ['/images/explore.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '채움크리에이티브 | 호기심을 켜고, 가능성을 채우다',
    description:
      '학교로 찾아가는 진로직업체험 채움 ON. 5개 분야의 체험 프로그램과 학교 맞춤 수업.',
    images: ['/images/explore.webp'],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#4e2f4b" />
        <link rel="preload" as="image" href="/brand/experience-collage.png" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500..800;1,400..700&display=swap"
        />
      </head>
      <body>
        <MotionEnhancements />
        <HashScroll />
        <RouteAnnouncer />
        <a className="skip-link" href="#main">
          본문 바로가기
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileCta />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '채움크리에이티브',
              alternateName: '채움 ON',
              description:
                '학교로 찾아가는 진로직업체험 프로그램을 운영하는 교육 기업',
              email: 'chaeum-lab@naver.com',
              telephone: '+82-10-6460-8659',
            }),
          }}
        />
      </body>
    </html>
  );
}
