import type { Metadata } from 'next';
import { Suspense } from 'react';
import { WorkspaceView } from '@/components/site/workspace-view';

export const metadata: Metadata = {
  title: 'Workspace',
  description: 'Preview the Arrab chat and studio workspace. Replies run in the desktop application.',
};

export default function WorkspacePage() {
  return (
    <Suspense fallback={null}>
      <WorkspaceView />
    </Suspense>
  );
}
