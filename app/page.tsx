import { ThemeControlForm } from '@/components/ThemeControlForm';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Page() {
  return (
    <section className="grid sm:grid-cols-2 gap-4 sm:gap-8">
      <ThemeToggle className="sm:col-span-2 flex justify-end" />
      <div className="p-4 sm:p-6 md:p-8 rounded-md bg-muted">
        <ThemeControlForm />
      </div>
      <div className="rounded-md border border-muted grid grid-rows-2 overflow-hidden">
        <div className="p-4 bg-white text-accent">Light</div>
        <div className="p-4">Dark</div>
      </div>
    </section>
  );
}
