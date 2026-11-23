-- Einmal im Supabase SQL Editor ausführen.
create table if not exists public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  done jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.progress enable row level security;
create policy "eigene Daten lesen"   on public.progress for select using (auth.uid() = user_id);
create policy "eigene Daten anlegen" on public.progress for insert with check (auth.uid() = user_id);
create policy "eigene Daten ändern"  on public.progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
