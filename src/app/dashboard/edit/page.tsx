import { Suspense } from 'react';
import ResumeEdit from './ResumeEdit';

export default function Page() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center bg-black text-white">Loading...</div>}>
      <ResumeEdit />
    </Suspense>
  );
}
