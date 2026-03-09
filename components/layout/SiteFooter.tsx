import Link from "next/link";
import Image from "next/image";
import { BRAND, ROUTES } from "@/lib/constants/brand";
import { IMAGES } from "@/lib/constants/images";

export function SiteFooter() {
  return (
    <footer className="border-t border-bm-grayDark/30 bg-bm-black" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Coluna marca */}
          <div className="max-w-xs">
            <Link
              href={ROUTES.home}
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-bm-yellow focus:ring-offset-2 focus:ring-offset-bm-black"
              aria-label={`${BRAND.name} — início`}
            >
              <Image
                src={IMAGES.logoBee}
                alt=""
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-xl uppercase tracking-wider text-bm-yellow">
                {BRAND.name}
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-bm-grayLight/60">
              {BRAND.taglineSecondary.join(" · ")}
            </p>
          </div>
          {/* Coluna links */}
          <div className="flex gap-16">
            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-bm-grayLight/40">
                Navegação
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href={ROUTES.diagnostico}
                    className="text-sm text-bm-grayLight/70 transition-colors hover:text-bm-yellow"
                  >
                    Diagnóstico estratégico
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-bm-grayLight/40">
                Social
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://instagram.com/beemarkofc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-bm-grayLight/70 transition-colors hover:text-bm-yellow"
                  >
                    {BRAND.handle}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Linha inferior */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-bm-grayDark/20 pt-6 md:flex-row md:justify-between">
          <p className="text-xs text-bm-grayDark">
            © {new Date().getFullYear()} {BRAND.name}. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-bm-grayDark/60">
            Feito com estratégia + tecnologia
          </p>
        </div>
      </div>
    </footer>
  );
}
