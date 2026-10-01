# 채움 ON · 채움크리에이티브

학교로 찾아가는 진로직업체험 프로그램을 소개하는 반응형 웹사이트입니다.
아이들의 호기심을 켜고, 배움을 경험으로 연결합니다.

[사이트 보기](https://chaeum-on.netlify.app/) · [배포 안내](docs/DEPLOYMENT.md) · [수정 안내](CONTRIBUTING.md)

![채움 ON 로고](public/brand/logo-cream.png)

## 주요 구성

- **5개 분야 · 18개 직업 체험**: AI·디지털 콘텐츠, 로봇·과학·메이커, 사회·기획·문제해결, 디자인·뷰티·펫, 푸드·플라워
- 프로그램별 체험 활동, 권장 학년, 수업 시간 및 도구 안내
- 채움 ON 소개, 학교 맞춤형 프로그램, 수업 현장과 학생 결과물
- FAQ, 전화·이메일 문의, 구글폼 신청 연결
- 카탈로그 PDF 다운로드, 모바일 메뉴와 하단 신청 버튼
- 반응형 레이아웃과 스크롤·호버 애니메이션

신청 정보는 외부 구글폼에서 작성합니다. 이 사이트에는 자체 신청 데이터베이스나 결제 기능이 없습니다.

## 브랜드 색상

| 색상 | 코드 |
| --- | --- |
| 플럼 | `#4e2f4b` |
| 베이지 | `#e9d0b6` |
| 크림 | `#f1e4da` |

## 기술 구성

React 19, TypeScript, Vinext, Vite, Tailwind CSS, Lucide React를 사용합니다.
Next.js App Router 형식의 페이지를 Vinext로 빌드하며, `output: 'export'` 설정으로 정적 파일을 생성합니다.

## 로컬 실행

Node.js **22.13 이상인 22.x 버전**과 npm을 사용합니다. `.nvmrc`는 Node.js 22.x를 선택합니다.

```bash
git clone https://github.com/gdh3311/cheum_peronal.git
cd cheum_peronal
npm ci
npm run dev -- --port 3000
```

브라우저에서 <http://localhost:3000/>을 엽니다.
Windows PowerShell에서 npm 실행 정책 오류가 발생하면 `npm` 대신 `npm.cmd`를 사용하세요.

## 빌드

```bash
npm run build
```

배포할 파일은 **`dist/client/`**에 생성됩니다. 저장소 루트나 `dist/server/`를 정적 호스팅에 업로드하지 않습니다.
현재 `npm start`는 Wrangler 서버용 명령으로, 이 정적 사이트의 배포 과정에는 필요하지 않습니다.

```bash
npm run lint
npm run format
```

위 두 명령은 필요한 경우에 실행합니다. `format`은 파일을 변경하므로 실행 후 변경 내역을 확인하세요.
GitHub Actions는 push와 pull request에서 의존성 설치 및 정적 빌드만 확인합니다.

## 페이지

| 경로 | 내용 |
| --- | --- |
| `/` | 메인 소개, 프로그램, 수업 이야기, 신청 안내 |
| `/about` | 교육 철학과 운영 분야 |
| `/programs` | 분야별 프로그램과 체험 활동 |
| `/moments` | 수업 현장과 결과물 |
| `/contact` | 신청·문의 방법과 구글폼 연결 |
| `/catalog.pdf` | 다운로드 카탈로그 |

## 수정할 파일

```text
app/
  page.tsx             메인 페이지
  site.ts              프로그램, FAQ, 연락처, 신청 링크
  chrome.tsx           메뉴, 푸터, 신청 안내, 모바일 CTA
  globals.css          색상, 레이아웃, 반응형 스타일
  motion.tsx           애니메이션, 경로·앵커 이동
  layout.tsx           공통 레이아웃과 페이지 메타데이터
  about/page.tsx       소개 페이지
  programs/page.tsx    프로그램 상세 페이지
  moments/page.tsx     수업 이야기 페이지
  contact/page.tsx     신청·문의 페이지
public/
  brand/               로고와 브랜드 이미지
  images/              수업·결과물 이미지
  catalog.pdf          웹 다운로드용 카탈로그
docs/DEPLOYMENT.md     Netlify·Cloudflare 배포 방법
```

프로그램 내용은 `app/site.ts`에서 수정하면 메인과 상세 페이지에 함께 반영됩니다.
카탈로그를 교체할 때는 `public/catalog.pdf`를 갱신하세요. 화면에는 **카탈로그**, 다운로드 파일에는 **채움크리에이티브 카탈로그.pdf**라는 이름을 사용합니다.
연락처와 구글폼 주소도 `app/site.ts`에서 관리합니다.

## 운영 시 참고

- 현재 배포 주소: <https://chaeum-on.netlify.app/>
- Netlify의 Git 연결과 수동 ZIP 업로드는 서로 다른 배포 방식입니다. push만으로 자동 갱신되는지는 Netlify 연결 설정을 확인하세요.
- 일부 데스크톱 폭에서 메인 이미지가 오른쪽으로 넘치는 현상은 추가 보완이 필요합니다.
- 외부 폰트는 Google Fonts 및 jsDelivr에서 불러옵니다.
- 원본 자료와 ZIP 등 작업 파일은 저장소에 포함하지 않으며, 사이트에 필요한 파일만 `public/`에서 관리합니다.

## 자료 사용

로고, 카탈로그, 수업 사진 등 브랜드 자료는 채움크리에이티브 제공 자료입니다.
저장소 공개 여부와 별개로 자료의 재사용 권한을 부여하지 않습니다. 재사용은 권리자와 별도 확인하세요.
이 저장소에는 오픈소스 라이선스를 지정하지 않았습니다. 사용한 외부 라이브러리의 라이선스는 해당 프로젝트를 따릅니다.
