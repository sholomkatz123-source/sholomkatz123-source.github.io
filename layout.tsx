export const metadata = {
  title: 'Neilich | Evenings Filled with Purpose',
  description:
    'Neilich curates evening and nighttime programs that surround young people with mentorship, creativity, and belonging.',
};

const baseFont = '"Inter", "Plus Jakarta Sans", "Segoe UI", sans-serif';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: baseFont,
          margin: 0,
          padding: 0,
          background: 'radial-gradient(circle at top, #eaf1ff 0%, #f6f7fb 45%, #ffffff 100%)',
          color: '#18223a',
          minHeight: '100vh',
        }}
      >
        <style>{`
          * { box-sizing: border-box; }
          a { color: inherit; }
        `}</style>
        {children}
      </body>
    </html>
  );
}
