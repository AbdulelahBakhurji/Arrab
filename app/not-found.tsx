import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="ab page">
      <h1>Page not found</h1>
      <p className="lede">This page is not part of Arrab.</p>
      <p className="lede" lang="ar" dir="rtl">هذه الصفحة ليست ضمن عرّاب.</p>
      <Link className="btn btn-primary" href="/">
        Arrab
      </Link>
    </main>
  );
}
