import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-void px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold" style={{ fontFamily: "Syne, sans-serif" }}>404</h1>
        <h2 className="mt-4 text-xl font-semibold text-frost">Page not found</h2>
        <p className="mt-2 text-sm text-dim">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-4 py-2 text-sm font-medium text-void transition-colors hover:bg-gold/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-void px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-frost">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-dim">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-sm bg-gold px-4 py-2 text-sm font-medium text-void transition-colors hover:bg-gold/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm border border-wire bg-surface px-4 py-2 text-sm font-medium text-frost transition-colors hover:bg-elevated"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#080c14" },
      { title: "Aman Parashar — Full-Stack Developer · Blockchain · AI" },
      {
        name: "description",
        content:
          "Aman Parashar — Full-Stack Developer from Agra, India. Building real-time collaborative platforms, AI-powered assessment tools, and exploring blockchain architecture.",
      },
      { name: "author", content: "Aman Parashar" },
      { property: "og:title", content: "Aman Parashar — Full-Stack · Blockchain · AI" },
      {
        property: "og:description",
        content:
          "Portfolio of Aman Parashar — full-stack engineer specializing in blockchain systems, AI platforms, and real-time collaborative apps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aman Parashar — Portfolio" },
      {
        name: "twitter:description",
        content: "Full-Stack Developer · Blockchain Specialist · AI Builder.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
