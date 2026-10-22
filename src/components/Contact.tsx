'use client';

import { useState } from 'react';
import { Send, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--card)' }}>
      <div className="container max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Обсудим задачу?</h2>
        <p className="mb-8" style={{ color: 'var(--muted)' }}>
          Напишите в удобный мессенджер или оставьте заявку — отвечу в течение рабочего дня.
        </p>

        {/* Быстрые каналы */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a
            href={siteConfig.contacts.telegram}
            className="card flex items-center gap-3 hover:border-[var(--accent)] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send size={20} style={{ color: 'var(--accent)' }} />
            <span>Telegram</span>
          </a>
          <a
            href={siteConfig.contacts.max}
            className="card flex items-center gap-3 hover:border-[var(--accent)] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} style={{ color: 'var(--accent)' }} />
            <span>MAX</span>
          </a>
          <a
            href={`mailto:${siteConfig.contacts.email}`}
            className="card flex items-center gap-3 hover:border-[var(--accent)] transition"
          >
            <Mail size={20} style={{ color: 'var(--accent)' }} />
            <span>Email</span>
          </a>
        </div>

        {/* Форма */}
        {sent ? (
          <div className="card text-center">
            <p className="text-lg mb-2">Спасибо! Заявка получена.</p>
            <p style={{ color: 'var(--muted)' }}>Свяжусь с вами в ближайшее время.</p>
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
              type="text"
              placeholder="Telegram или email для связи"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border"
              style={{ borderColor: 'var(--border)' }}
            />
            <textarea
              placeholder="Опишите задачу в двух словах"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border"
              style={{ borderColor: 'var(--border)' }}
            />
            <button type="submit" className="btn-primary w-full">
              Отправить заявку
            </button>
          </form>
        )}

        {/* <p className="mt-6 text-sm text-center" style={{ color: 'var(--muted)' }}>
          Телефон не публикую — для голосовой связи предоставлю по запросу в мессенджере.
        </p> */}
      </div>
    </section>
  );
}