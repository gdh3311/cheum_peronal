import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section wrap not-found">
      <span className="not-found-code">404</span>
      <h1>이 페이지는 아직 비어 있어요.</h1>
      <p>
        주소가 바뀌었거나 잘못 입력된 것 같아요.
        <br />
        호기심은 홈에서 다시 켤 수 있습니다.
      </p>
      <Link className="button primary" href="/">
        홈으로 돌아가기 <ArrowRight size={18} />
      </Link>
    </section>
  );
}
