const solutions = [
  {
    title: 'Мультиагентная инфраструктура',
    desc: 'Агенты общаются между собой и распределяют задачи: квалификация лида, ответ, передача менеджеру.',
  },
  {
    title: 'Telegram-боты и Mini Apps',
    desc: 'Приём заявок, квалификация, запись, оплата — всё внутри Telegram.',
  },
  {
    title: 'Интеграции с CRM',
    desc: 'Битрикс24, amoCRM, Авито, почта, мессенджеры — в едином контуре.',
  },
  {
    title: 'Кастомная разработка',
    desc: 'Пишу код под ваш процесс, а не подстраиваю бизнес под чужой шаблон.',
  },
];

export default function Solution() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Что я делаю</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="card">
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p style={{ color: 'var(--muted)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}