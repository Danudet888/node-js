import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
<<<<<<< HEAD
=======
import { Separator } from "@/components/ui/separator"
>>>>>>> a101d78 (update from another PC)

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "เว็บแอปพลิเคชันตัวอย่างที่สร้างด้วย Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
<<<<<<< HEAD
        <nav style={{
          padding: "1rem",
          borderBottom: "1px solid #eaeaea",
          marginBottom: "2rem",
        }}>
          <Link href="/" style={{ marginRight: "1rem" }}>หน้าแรก</Link>
          <Link href="/about" style={{ marginRight: '1rem' }}>เกี่ยวกับเรา</Link>
          <Link href="/products" style={{ marginRight: '1rem' }}>สินค้า</Link>
        </nav>
=======
        <header>
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link 
            href="/"
            className="flex items-center space-x-2 mr-8">
            <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              MyNextApp
            </span>
          </Link>
          <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
            <Link 
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors">
                หน้าหลัก
            </Link>
            <Link
              href="/about"
              className="tecxt-slate-600 hover:text-slate-900 transition-colors">
                เกี่ยวกับเรา     
            </Link>
            <Link
              href="/products"
              className="tecxt-slate-600 hover:text-slate-900 transition-colors">
                สินค้า
            </Link>
          </nav>
        </div>
        </header>
        <Separator className="my-4" />
>>>>>>> a101d78 (update from another PC)
        {children}
      </body>
    </html>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> a101d78 (update from another PC)
