async function getCurrentYear() {
  'use cache';
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();
  return (
    <footer className="py-10 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container text-center text-sm" style={{ color: 'var(--muted)' }}>
        <p className="mb-2">
          ИП Иванов И.И. · ИНН 000000000000 · email@example.com
        </p>
        <p>© {year} AI Automation. Все права защищены.</p>
      </div>
    </footer>
  );
}