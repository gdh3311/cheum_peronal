# 배포 안내

이 사이트는 정적 파일로 배포합니다. 환경 변수, 자체 서버, 데이터베이스는 필요하지 않습니다.

## Netlify Git 연동

Netlify에서 기존 사이트의 저장소를 연결하거나 Git 저장소로 새 프로젝트를 가져옵니다.

| 항목 | 값 |
| --- | --- |
| 저장소 | `gdh3311/cheum_peronal` |
| Production branch | `master` |
| Base directory | 저장소 루트 |
| Build command | `npm run build` |
| Publish directory | `dist/client` |
| Node.js | 22.x (`.nvmrc` 사용) |

같은 설정이 루트의 `netlify.toml`에 있습니다.
기존 사이트에 연결할 때는 배포 설정에서 프로젝트와 브랜치를 확인하세요.
연결 후 해당 브랜치에 push하면 Netlify가 빌드 및 배포를 진행합니다.
GitHub Actions의 빌드 확인과 Netlify의 배포는 별개입니다.

## Netlify 수동 업로드

1. `npm ci`로 의존성을 설치하고 `npm run build`를 실행합니다.
2. 생성된 `dist/client/` 폴더를 Netlify의 수동 배포 화면에 업로드합니다.
3. ZIP을 사용한다면 ZIP 루트에 `index.html`이 있도록 **폴더 안의 내용**을 압축합니다.
4. 배포 완료 후 실제 사이트에서 페이지와 카탈로그를 확인합니다.

수동 업로드는 로컬의 최신 빌드 결과를 사용해야 합니다. 코드만 수정하고 오래된 ZIP을 올리면 수정 내용이 반영되지 않습니다.

## Cloudflare Pages Git 연동

Cloudflare Pages에서 GitHub 저장소를 연결하고 다음 값을 설정합니다.

| 항목 | 값 |
| --- | --- |
| Production branch | `master` |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist/client` |
| Root directory | 저장소 루트 |
| Node.js | 22.x |

필요한 경우 빌드 환경 변수 `NODE_VERSION=22`를 지정합니다.
이 문서는 설정 안내이며, Cloudflare 계정 연결이나 배포를 자동으로 생성하지는 않습니다.

## 배포 후 확인

- `/`, `/about`, `/programs`, `/moments`, `/contact`를 직접 열고 새로고침합니다.
- 프로그램이 5개 분야·18개 직업으로 표시되는지 확인합니다.
- 로고와 수업 이미지가 표시되는지 확인합니다.
- `/catalog.pdf`가 열리는지, 다운로드 이름이 원래 이름인지 확인합니다.
- 신청 버튼이 구글폼의 응답용 `viewform` 주소로 연결되는지 확인합니다.
- 모바일에서 메뉴, 신청 버튼, 가로 넘침을 확인합니다.

별도 도메인을 구매하지 않아도 제공되는 `netlify.app` 또는 `pages.dev` 주소를 사용할 수 있습니다.
요금과 사용 한도는 해당 서비스의 현재 정책을 확인하세요.

## 참고 문서

- [Netlify 파일 기반 설정](https://docs.netlify.com/build/configure-builds/file-based-configuration/)
- [Netlify 빌드 환경](https://docs.netlify.com/build/configure-builds/available-software-at-build-time/)
- [Cloudflare Pages Git 연동](https://developers.cloudflare.com/pages/configuration/git-integration/)

`.openai/hosting.json`은 별도의 Sites 배포 정보를 보존하는 파일이며 Netlify 배포에는 사용되지 않습니다.
