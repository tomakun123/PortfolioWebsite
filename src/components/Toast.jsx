export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-8 right-8 z-9999 pointer-events-none">
      <div className="toast animate-toast">
        <span className="text-mint text-lg">✓</span>
        <span>{message}</span>
      </div>
    </div>
  );
}
