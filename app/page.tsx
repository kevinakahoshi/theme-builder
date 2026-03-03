import { ThemeToggle } from '@/components/ThemeToggle';

export default function Page() {
  return (
    <section className="grid sm:grid-cols-2 gap-4 sm:gap-8">
      <ThemeToggle className="sm:col-span-2 flex justify-end" />
      <div className="p-4 rounded-md bg-muted">Controls</div>
      <div className="p-4 rounded-md border border-muted">Display</div>
    </section>
  );
}
