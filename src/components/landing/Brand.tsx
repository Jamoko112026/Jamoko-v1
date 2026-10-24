import Image from "next/image";
import Link from "next/link";
import styles from "./Chrome.module.css";

export function Brand({ subtitle }: { subtitle?: string }) {
  return (
    <Link href="/" className={styles.brand} aria-label="JaMoKo – Startseite">
      <Image src="/JaMoKo_Signet_Dark_2026.png" alt="" width={52} height={52} sizes="52px" className={styles.signet} />
      <span><span className={styles.wordmark}>JaMoKo</span>{subtitle ? <span className={styles.subtitle}>{subtitle}</span> : null}</span>
    </Link>
  );
}
