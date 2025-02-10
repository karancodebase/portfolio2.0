import ClientLayout from './ClientLayout'

export const metadata = {
  title: 'Jaydatt Karan',
  description: 'Full Stack Developer',
  icons: {
    icon: '/globe.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
