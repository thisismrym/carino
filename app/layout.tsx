import styles from "./Layout.module.css";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <header className={styles.header}>
        <h1>carino</h1>
        <p>Buy your car</p>
      </header>
      {children}
      <footer className={styles.footer}> © 2026 Carino. Made with ❤️ by Maryam.</footer>
    </>
  );
}
