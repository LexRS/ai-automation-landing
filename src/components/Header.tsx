import { Send, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Header() {
  return (
    <header className="py-6 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="container flex justify-between items-center gap-6">
        {/* Логотип */}
        <div className="font-bold text-xl whitespace-nowrap">Автоматизация процессов</div>

        {/* Правая часть с кнопками */}
        <div className="flex items-center gap-4">
          
          {/* Иконки мессенджеров — строго в ряд */}
          <div style={{ display: 'flex', gap: '12px' }} className="hidden md:flex">
            <a
              href={siteConfig.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Telegram"
              className="icon-btn"
            >
              <Send size={18} />
            </a>
            <a
              href={siteConfig.contacts.max}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в MAX"
              className="icon-btn"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={`mailto:${siteConfig.contacts.email}`}
              aria-label="Написать на email"
              className="icon-btn"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Основная кнопка */}
          <a href="#contact" className="btn-primary text-sm md:text-base whitespace-nowrap">
            Оставить заявку
          </a>
        </div>
      </div>
    </header>
  );
}