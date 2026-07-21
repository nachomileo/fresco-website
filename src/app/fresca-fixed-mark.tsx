import Image from "next/image";
import Link from "next/link";

export function FrescaFixedMark() {
  return (
    <Link className="nave-fixed-mark" href="/#la-nave" aria-label="Ir a Fresca. La Nave">
      <Image src="/branding/fresca-la-nave.png" alt="" fill sizes="48px" />
    </Link>
  );
}
