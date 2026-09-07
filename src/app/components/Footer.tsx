export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[color:var(--hairline)]">
      <div className="mx-auto flex w-full max-w-3xl justify-center px-6 py-8">
        <p className="text-sm text-zinc-500">
          NMG Systems LLC {currentYear}
        </p>
      </div>
    </footer>
  );
}
