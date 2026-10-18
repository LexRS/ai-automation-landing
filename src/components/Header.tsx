export default function Header() {
  return (
    <header className="py-6 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="container flex justify-between items-center">
        <div className="font-bold text-xl">AI Automation</div>
        <a
          href="https://t.me/your_username"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Написать в Telegram
        </a>
      </div>
    </header>
  );
}