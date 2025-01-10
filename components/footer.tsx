export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-1 text-sm text-zinc-600 dark:text-zinc-400">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-semibold">Rewrap Package.</span>
          </div>

          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Built with 💜 by{" "}
            <a
              href="https://x.com/iamajfred_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Aj Fred
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
