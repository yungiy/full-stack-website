## 주요 기술 스택

*   **프레임워크:** [Next.js](https://nextjs.org/) (React 기반)
*   **언어:** TypeScript
*   **스타일링:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI 라이브러리:** [Material Tailwind](https://www.material-tailwind.com/)
*   **데이터베이스:** [Supabase](https://supabase.io/) (PostgreSQL)
*   **데이터 페칭/상태 관리:** [React Query](https://tanstack.com/query/v4)

## 시작 가이드

개발 서버를 실행하려면 다음 명령어를 사용하세요:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

서버가 실행되면 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인하세요.

`src/app/page.tsx` 파일을 수정하여 페이지를 편집할 수 있습니다. 파일을 저장하면 페이지가 자동으로 새로고침됩니다.

이 프로젝트는 Vercel에서 개발한 새로운 폰트인 [Geist](https://vercel.com/font)를 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)를 통해 자동으로 최적화하고 로드합니다.

## 기능 명세

이 애플리케이션은 간단한 '할 일 목록(To-Do List)' 웹사이트입니다. 주요 기능은 다음과 같습니다.

1.  **할 일(Todo) 조회:** 데이터베이스에 저장된 모든 할 일 목록을 화면에 표시합니다.
2.  **할 일(Todo) 추가:** 사용자가 새로운 할 일을 입력하고 추가할 수 있습니다.
3.  **할 일(Todo) 수정:** 기존 할 일의 내용을 수정할 수 있습니다.
4.  **할 일(Todo) 삭제:** 특정 할 일을 목록에서 삭제할 수 있습니다.
5.  **할 일(Todo) 완료 처리:** 할 일의 완료 상태를 토글(완료/미완료)할 수 있습니다.
