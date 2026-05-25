export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
            OutletVault
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            outletvaultllc.com
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Coming Soon
          </h2>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We&apos;re building something great. Stay tuned.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            href="mailto:hello@outletvaultllc.com"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[200px]"
          >
            Get in Touch
          </a>
        </div>
      </main>
    </div>
  );
}
