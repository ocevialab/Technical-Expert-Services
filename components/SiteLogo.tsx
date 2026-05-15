import Image from "next/image";

const LOGO_SRC = "/assets/technicalexpertsserviceLogo.png";

type SiteLogoProps = {
  /** Square logo size in CSS pixels */
  size?: number;
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ size = 40, className, priority = false }: SiteLogoProps) {
  return (
    <span
      className={`relative inline-block shrink-0 ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={LOGO_SRC}
        alt=""
        fill
        className="object-contain"
        sizes={`${size}px`}
        priority={priority}
      />
    </span>
  );
}
