const stack = [
  'Python',
  'OpenAI',
  'Telegram API',
  'Bitrix24',
  'amoCRM',
  'Docker',
  'PostgreSQL',
  'n8n',
];

export default function TechStack() {
  return (
    <section className="section" style={{ background: 'var(--card)' }}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Технологии</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-lg text-sm font-medium"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}