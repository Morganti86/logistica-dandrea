import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "500", "700"],
});

export const metadata = {
  title: "Logistica D'ANDREA",
  description:
    "Expertos en soluciones logísticas integrales, comprometidos con la excelencia y la eficiencia. Ofrecemos servicios de almacenamiento, distribución y más para optimizar tus operaciones. Confía en nosotros para impulsar el éxito de tu empresa.",
};

export const viewport = {
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
