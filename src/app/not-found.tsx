import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="steep-caps mb-4 text-steep-ink-3">404</p>
      <h1 className="steep-display mb-4 text-5xl">Lost the trail.</h1>
      <p className="steep-body mb-8 max-w-md text-steep-ink-2">
        That page doesn&apos;t exist on the steep buy site. The store itself is
        at steep.shashankthattai.dev.
      </p>
      <Link
        href="/"
        className="rounded-md bg-steep-moss px-5 py-3 text-base font-medium text-steep-bg hover:bg-steep-moss-2"
      >
        Back to the buy page
      </Link>
    </main>
  );
}
