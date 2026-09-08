import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '채움크리에이티브 | 호기심을 켜고, 가능성을 채우다', description: '채움 ON 진로직업체험. AI·디지털, 로봇·과학, 디자인 등 5개 분야의 체험과 학교 맞춤형 프로그램을 만나보세요.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){return <html lang="ko"><body>{children}</body></html>}
