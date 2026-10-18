const cases = [
  {
    title: 'Студия мебели',
    result:
      'Объединил чаты с Авито и сайта в один Telegram-бот. Время ответа упало с 3 часов до 5 минут. Конверсия в замер выросла на 15%.',
  },
  {
    title: 'Агентство недвижимости',
    result:
      'ИИ-агент квалифицирует первичные заявки и передаёт менеджеру только «горячих» клиентов. Нагрузка на отдел продаж снизилась на 40%.',
  },
];

export default function Cases() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Кейсы</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="card">
              <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
              <p style={{ color: 'var(--muted)' }}>{c.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}