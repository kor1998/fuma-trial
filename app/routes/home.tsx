import type { Route } from './+types/home';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Link } from 'react-router';
import { baseOptions } from '@/lib/layout.shared';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Voltus SDK - Documentation' },
    { name: 'description', content: 'Build powerful integrations with the Voltus SDK. Type-safe, battle-tested, and developer-friendly.' },
  ];
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="p-4 flex flex-col items-center justify-center text-center flex-1 max-w-2xl mx-auto gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-fd-primary tracking-wide uppercase">Developer Documentation</p>
          <h1 className="text-4xl font-bold tracking-tight">Build with Voltus SDK - DEMO</h1>
          <p className="text-fd-muted-foreground text-lg leading-relaxed">
            A type-safe, intuitive SDK for the Voltus platform. From authentication to webhooks, everything you need to ship your integration fast.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            className="text-sm bg-fd-primary text-fd-primary-foreground rounded-full font-medium px-6 py-2.5 hover:opacity-90 transition-opacity"
            to="/docs"
          >
            Get Started
          </Link>
          <Link
            className="text-sm border border-fd-border text-fd-foreground rounded-full font-medium px-6 py-2.5 hover:bg-fd-accent transition-colors"
            to="/docs/api-reference/client"
          >
            API Reference
          </Link>
        </div>

        <div className="w-full max-w-lg mt-4 rounded-xl border bg-fd-card text-left p-4 shadow-sm">
          <p className="text-xs text-fd-muted-foreground mb-2 font-mono">Quick install</p>
          <code className="text-sm font-mono text-fd-foreground">npm install @voltus/sdk</code>
        </div>
      </div>
    </HomeLayout>
  );
}
