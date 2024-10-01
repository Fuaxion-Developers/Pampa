import type { Metadata } from 'next';
import ClientRouteHandler from '@/app/ClientRouteHandle';
import './globals.css';


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
   
        <body>
          <ClientRouteHandler>{children}</ClientRouteHandler>
        </body>
     
    </html>
  );
}
