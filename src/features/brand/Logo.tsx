import { cn } from "@/lib/utils";
import logo from "@/assets/VERTICE_LOGO.jpeg";

/**
 * Official logo slot. Only the approved file VERTICE_LOGO.jpeg may be used here,
 * unaltered.
 */
const LOGO_SRC = logo;

export function Logo({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  if (LOGO_SRC) {
    return <img src={LOGO_SRC} alt="VÉRTICE" className={cn("h-10 w-auto", imgClassName)} />;
  }
  return null;
}

export const HAS_OFFICIAL_LOGO = LOGO_SRC !== null;

