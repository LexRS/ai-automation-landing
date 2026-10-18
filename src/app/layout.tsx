import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: 'Автоматизация бизнеса с помощью ИИ | AI-агенты, боты, CRM под ключ',
  description:
    'Убираю ручную рутину: создаю мультиагентные ИИ-системы, Telegram-ботов, Mini Apps и интеграции с CRM. Разбираюсь в ваших процессах, пишу код сам — без коробочных шаблонов.',
  keywords: [
    'автоматизация бизнеса',
    'ИИ агенты',
    'мультиагентные системы',
    'telegram боты',
    'telegram mini app',
    'интеграция CRM',
    'автоматизация продаж',
  ],
  openGraph: {
    title: 'Автоматизация бизнеса с помощью ИИ под ключ',
    description:
      'Мультиагентные ИИ-системы, Telegram-боты, Mini Apps, интеграции с CRM. Кастомная разработка без шаблонов.',
    url: 'https://your-domain.com',
    siteName: 'AI Automation',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Автоматизация бизнеса с помощью ИИ',
  description:
    'Создание мультиагентных ИИ-систем, Telegram-ботов, Mini Apps и интеграций с CRM. Кастомная разработка под процессы клиента.',
  provider: {
    '@type': 'Organization',
    name: 'AI Automation',
    url: 'https://your-domain.com',
  },
  areaServed: 'RU',
  serviceType: 'Разработка систем автоматизации бизнеса',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит автоматизация бизнеса с помощью ИИ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стоимость зависит от сложности процесса. Простой Telegram-бот — от 50 000 ₽, мультиагентная инфраструктура с интеграцией CRM — от 150 000 ₽. Точная цена после аудита.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько времени занимает разработка?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Типовой проект — от 2 до 6 недель. Сроки зависят от количества интеграций и сложности логики агентов.',
      },
    },
    {
      '@type': 'Question',
      name: 'Нужна ли нам CRM для старта?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Нет. Если CRM нет — поможем выбрать и настроить под ваши процессы (Битрикс24, amoCRM и др.).',
      },
    },
    {
      '@type': 'Question',
      name: 'Кто поддерживает систему после внедрения?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Поддержка доступна по договору. Также передаём документацию и обучаем команду.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}