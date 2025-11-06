export const metadata = { title: 'CRM' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', padding: 24, maxWidth: 980, margin: '0 auto' }}>{children}</body>
    </html>
  );
}
