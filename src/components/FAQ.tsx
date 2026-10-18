const faqs = [
  {
    q: 'Сколько стоит автоматизация?',
    a: 'Зависит от сложности. Простой Telegram-бот — от 50 000 ₽, мультиагентная система с интеграцией CRM — от 150 000 ₽. Точная цена после аудита.',
  },
  {
    q: 'Сколько времени занимает разработка?',
    a: 'Типовой проект — 2–6 недель. Сроки зависят от количества интеграций и сложности логики.',
  },
  {
    q: 'Нужна ли нам CRM?',
    a: 'Нет. Если CRM нет — поможем выбрать и настроить под ваши процессы.',
  },
  {
    q: 'Кто поддерживает систему после внедрения?',
    a: 'Поддержка по договору. Передаём документацию и обучаем команду.',
  },
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Вопросы и ответы</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card">
              <summary className="cursor-pointer font-semibold text-lg">
                {f.q}
              </summary>
              <p className="mt-3" style={{ color: 'var(--muted)' }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}