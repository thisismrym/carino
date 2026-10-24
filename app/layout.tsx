import styles from "./Layout.module.css";
import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>
        <header className={styles.header}>
          <Link href="/">
            <h1>carino</h1>
            <p>Buy your car</p>
          </Link>
        </header>
        <div className={styles.container }>{children}</div>
        

        <footer className={styles.footer}>
          <a href="https://thisismaryam.ir/" target="_blank">
            © 2026 Carino. Made with ❤️ by Maryam.
          </a>
        </footer>
      </body>
    </html>
  );
}
