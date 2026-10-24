"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Maximize2 } from "lucide-react";
import { installProductPreview } from "./ProductPreviewRuntime";
import styles from "./ProductPreview.module.css";

type ProductPreviewProps = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  imageClassName?: string;
};

export function ProductPreview({ src, alt, label, width, height, sizes, priority, imageClassName }: ProductPreviewProps) {
  // Also initialize on client-side navigation; SSR initializes before hydration.
  useEffect(() => { installProductPreview(styles); }, []);
  const bootstrap = `(${installProductPreview.toString()})(${JSON.stringify(styles)});`;
  return <>
    <button type="button" className={styles.preview} data-jamoko-product-preview="3.3.3" data-preview-src={src} data-preview-alt={alt} data-preview-label={label} data-preview-width={width} data-preview-height={height} aria-label={`${label}: Vorschau vergrößern`} aria-haspopup="dialog">
      <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} className={imageClassName} />
      <span className={styles.openLabel}><Maximize2 size={15} aria-hidden="true" />Vorschau vergrößern</span>
    </button>
    <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
  </>;
}
