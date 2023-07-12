import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["700", "400"], subsets: ["latin"] });

export const metadata = {
    title: "Shopee Entrega padrão",
    description:
        "Descubra por qual transportadora seu produto está sendo transportado!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
