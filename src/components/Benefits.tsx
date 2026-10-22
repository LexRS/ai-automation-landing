import { Clock, TrendingUp, Wallet, Rocket, Brain, Moon } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Экономия 40+ часов в месяц',
    desc: 'Сотрудники занимаются продажами, а не рутиной.',
  },
  {
    icon: TrendingUp,
    title: 'Ни одной потерянной заявки',
    desc: 'Клиент получает ответ за минуту, даже ночью.',
  },
  {
    icon: Wallet,
    title: 'Окупаемость за 1–2 месяца',
    desc: 'Инвестиция возвращается за счёт сэкономленного времени команды.',
  },
  {
    icon: Rocket,
    title: 'Рост конверсии',
    desc: 'Быстрые ответы и умный поиск повышают продажи.',
  },
  {
    icon: Brain,
    title: 'Знания не уходят с сотрудником',
    desc: 'Регламенты и база знаний остаются в системе.',
  },
  {
    icon: Moon,
    title: 'Бизнес работает 24/7',
    desc: 'Бот не спит, не устаёт, не болеет.',
  },
];

export default function Benefits() {
  return (
    <section className="section" style={{ background: 'var(--card)' }}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Что вы получаете</h2>
        <p className="mb-10" style={{ color: 'var(--muted)' }}>
          Автоматизация — это не про технологии. Это про время, деньги и спокойствие.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="card card-accent transition-all duration-300"
              >
                <Icon
                  size={28}
                  className="mb-4"
                  style={{ color: 'var(--accent)' }}
                />
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p style={{ color: 'var(--muted)' }}>{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}