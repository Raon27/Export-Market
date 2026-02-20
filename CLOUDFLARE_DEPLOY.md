# Cloudflare Pages 배포 가이드

이 프로젝트는 **Next.js**로 제작되었으며, Cloudflare Pages에 배포하기 위해 `@cloudflare/next-on-pages` 어댑터가 설정되어 있습니다.

## 1. Cloudflare Pages 설정 (Build Settings)

Cloudflare 대시보드에서 프로젝트를 생성할 때 다음 설정을 입력하세요:

| 설정 항목 (Setting) | 값 (Value) | 비고 |
| :--- | :--- | :--- |
| **Framework Preset** | `None` | *Next.js를 선택하지 마세요* |
| **Build Command** | `npm run pages:build` | `npx @cloudflare/next-on-pages` 실행 |
| **Build Output Directory** | `.vercel/output/static` | Next.js 기본값(`out`)이 아님 |

## 2. 환경 변수 (Environment Variables)

필요한 경우 설정 > 환경 변수(Environment Variables)에서 다음 값을 추가하세요:

- **NODE_VERSION**: `20` (또는 `18` 이상)
- **COMPATIBILITY_DATE**: `2024-08-06` (권장)

## 3. 배포 프로세스

1. GitHub 저장소(`https://github.com/Raon27/Export-Market.git`)를 Cloudflare Pages와 연동합니다.
2. 위 **빌드 설정**을 그대로 입력합니다.
3. **Save and Deploy**를 클릭합니다.

> **참고**: 로컬에서 미러링 테스트를 하려면 `npm run pages:build` 후 `npx wrangler pages dev .vercel/output/static`을 실행할 수 있습니다.
