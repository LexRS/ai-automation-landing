const steps = [
  { n: '01', title: 'Аудит', desc: 'Разбираюсь в вашем процессе и болях.' },
  { n: '02', title: 'Прототип', desc: 'Показываю, как будет работать система.' },
  { n: '03', title: 'Разработка', desc: 'Пишу код, настраиваю интеграции.' },
  { n: '04', title: 'Внедрение', desc: 'Запускаю, обучаю команду, передаю документацию.' },
];

export default function Process() {
  return (
    <section className="section" style={{ background: 'var(--card)' }}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Как проходит работа</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n}>
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: 'var(--accent)' }}
              >
                {s.n}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p style={{ color: 'var(--muted)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}