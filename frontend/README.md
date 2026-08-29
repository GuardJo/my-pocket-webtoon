# My Pocket Webtoon

| 인증된 사용자만 접근 가능한 웹툰 서비스

## 인프라 구성

- Vercel 배포

## 모듈 구성

- Next.js 15
- Typescript 5
- React 19^
- nodejs 20^
- tailwindcss 4
- storybook 10
- msw 2.15

## 모듈 구조

```text
frontend/
├── public/
│   └── mockServiceWorker.js
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.stories.tsx
│   │   └── ...
│   │
│   ├── mocks/
│   │   ├── handlers.ts
│   │   └── browser.ts
│   │
│   └── ...
│
├── .storybook/
│   ├── main.ts
│   └── preview.ts
│
└── package.json
```