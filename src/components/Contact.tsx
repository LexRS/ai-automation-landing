'use client';

import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: подключить отправку (Formspree, Telegram Bot API, свой endpoint)
    setSent(true);
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--card)' }}>
      <div className="container max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Оставить заявку</h2>
        <p className="mb-8" style={{ color: 'var(--muted)' }}>
          Опишите задачу — отвечу в течение рабочего дня.
        </p>
        {sent ? (
          <div className="card">
            <p className="text-lg">Спасибо! Заявка получена. Свяжусь с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border"
              style={{ borderColor: 'var(--border)' }}
            />
            <input
              type="tel"
              placeholder="Телефон или Telegram"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border"
              style={{ borderColor: 'var(--border)' }}
            />
            <textarea
              placeholder="Опишите задачу"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border"
              style={{ borderColor: 'var(--border)' }}
            />
            <button type="submit" className="btn-primary w-full">
              Отправить
            </button>
          </form>
        )}
        <div className="mt-8 text-center">
          <p style={{ color: 'var(--muted)' }}>Или напишите напрямую:</p>
          <a
            href="https://t.me/your_username"
            className="inline-block mt-3 font-semibold"
            style={{ color: 'var(--accent)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram → @your_username
          </a>
        </div>
      </div>
    </section>
  );
}