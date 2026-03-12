import { AccentColorChip } from '@/components/AccentColorChip';
import { DisplayCard } from '@/components/DisplayCard';
import { NeutralShades } from '@/components/NeutralShades';
import { ThemeControlForm } from '@/components/ThemeControlForm';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Page() {
  return (
    <section className="grid sm:grid-cols-2 gap-4 sm:gap-8">
      <ThemeToggle className="sm:col-span-2 flex justify-end" />
      <div className="p-4 sm:p-6 md:p-8 rounded-md bg-muted">
        <div className="grid gap-4 h-fit">
          <ThemeControlForm />
          <div className="grid gap-1">
            <div className="flex gap-1">
              <NeutralShades section="light" />
            </div>
            <div>
              <AccentColorChip />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-muted grid grid-rows-2 overflow-hidden">
        <div className="p-4 bg-white text-accent">
          <DisplayCard mode="light" />
        </div>
        <div className="p-4">
          <DisplayCard mode="dark" />
        </div>
      </div>
    </section>
  );
}
