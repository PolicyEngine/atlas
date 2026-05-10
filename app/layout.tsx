import './globals.css';

export const metadata = {
  title: 'PolicyEngine Atlas',
  description: 'PolicyEngine public benefit innovation and policy library materials',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
