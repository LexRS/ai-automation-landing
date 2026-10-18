export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Автоматизация бизнеса под ключ:{' '}
          <span style={{ color: 'var(--accent)' }}>
            собираю ИИ-системы, которые убирают рутину
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--muted)' }}>
          Разбираюсь в ваших процессах и пишу код сам. Никаких шаблонов — только
          рабочая инфраструктура: AI-агенты, Telegram-боты, Mini Apps, интеграции
          с CRM.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://t.me/your_username"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Обсудить задачу
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg font-semibold border transition"
            style={{ borderColor: 'var(--border)' }}
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
}