import { Send, Search, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

const steps = [
  {
    icon: Send,
    num: '01',
    title: 'Оставляете заявку',
    desc: 'Описываете задачу в 2–3 предложениях. Это бесплатно и ни к чему не обязывает.',
  },
  {
    icon: Search,
    num: '02',
    title: 'Я провожу аудит',
    desc: 'Разбираюсь в процессе, показываю, где теряются заявки и время. Вы получаете план автоматизации.',
  },
  {
    icon: CheckCircle,
    num: '03',
    title: 'Вы решаете',
    desc: 'Если план подходит — запускаем разработку. Если нет — у вас остаётся понимание, что улучшить.',
  },
];

export default function StartFlow() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">С чего начать?</h2>
        <p className="mb-10" style={{ color: 'var(--muted)' }}>
          Три простых шага. Без обязательств.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="relative">
                <div
                  className="text-5xl font-bold mb-4"
                  style={{ color: 'var(--accent)', opacity: 0.3 }}
                >
                  {s.num}
                </div>
                <Icon
                  size={28}
                  className="mb-3"
                  style={{ color: 'var(--accent)' }}
                />
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p style={{ color: 'var(--muted)' }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a
            href={siteConfig.contacts.telegram}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Начать с аудита
          </a>
        </div>
      </div>
    </section>
  );
}