import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-6 text-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-base-content/60 mt-2 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link href="/" className="btn btn-primary">
        Back to Dashboard
      </Link>
    </div>
  );
}