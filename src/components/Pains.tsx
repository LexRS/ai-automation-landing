const pains = [
  'Заявки разбросаны по Авито, Telegram и почте — и теряются',
  'Менеджеры вручную переносят данные из чатов в CRM',
  'Клиенты не получают ответ вовремя и уходят к конкурентам',
  'Сотрудники тратят часы на отчёты и документы',
];

export default function Pains() {
  return (
    <section className="section" style={{ background: 'var(--card)' }}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Знакомо?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {pains.map((p) => (
            <div key={p} className="card">
              <p className="text-lg">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}