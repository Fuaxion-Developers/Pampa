import type { Metadata } from 'next';
import ClientRouteHandler from '@/app/ClientRouteHandle';
import './globals.css';
// import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata: Metadata = {
  title: 'PAMPA',
  description:
    'Sellos al por mayor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <UserProvider> */}
        <body>
          <ClientRouteHandler>{children}</ClientRouteHandler>
        </body>
      {/* </UserProvider> */}
    </html>
  );
}
