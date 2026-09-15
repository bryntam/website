import { useEffect, type ReactNode } from 'react';

const SUPPORT_EMAIL = 'bryancktam@gmail.com';

type AppPageLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
};

const AppPageLayout = ({ children, title, description }: AppPageLayoutProps) => {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = descriptionMeta?.content;

    document.title = title;
    descriptionMeta?.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
      if (descriptionMeta && previousDescription) {
        descriptionMeta.setAttribute('content', previousDescription);
      }
    };
  }, [description, title]);

  return (
    <div className="min-h-screen bg-[#f4f3ef] text-[#0b0d0c]">
      <header className="border-b border-[#d7d6d1]">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6 sm:px-8 md:h-20">
          <a
            href="/"
            className="font-display text-[19px] font-semibold tracking-[-0.045em] transition-colors hover:text-stone-600 md:text-xl"
          >
            Bryan Tam.
          </a>
        </div>
      </header>

      {children}

      <footer className="border-t border-[#d7d6d1]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-stone-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Bryan Tam</p>
          <a className="transition-colors hover:text-stone-950" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
};

export const AppsIndex = () => (
  <AppPageLayout
    title="Apps — Bryan Tam"
    description="Independent apps designed and built by Bryan Tam."
  >
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:px-8 md:pb-32 md:pt-24">
      <h1 className="font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl md:text-7xl">
        Apps
      </h1>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        <a
          href="/apps/cart-scan"
          className="group flex min-h-72 flex-col justify-between rounded-[1.75rem] border border-[#d7d6d1] bg-[#ecebe6] p-7 transition-colors hover:bg-white sm:p-9"
        >
          <div className="flex items-start justify-between gap-5">
            <span className="rounded-full border border-[#c7c6c0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-500">
              iOS
            </span>
            <span aria-hidden="true" className="text-xl text-stone-400 transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em]">Cart Scan</h2>
            <p className="mt-3 max-w-md leading-7 text-stone-600">
              Capture and review product and price information while you shop.
            </p>
          </div>
        </a>

        <div className="flex min-h-72 flex-col justify-between rounded-[1.75rem] border border-[#d7d6d1] p-7 sm:p-9">
          <span className="w-fit rounded-full border border-[#d7d6d1] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400">
            Coming soon
          </span>
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-stone-400">
              Bridge with Friends
            </h2>
            <p className="mt-3 leading-7 text-stone-400">More details to come.</p>
          </div>
        </div>
      </div>
    </main>
  </AppPageLayout>
);

const LegalSection = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="scroll-mt-8 border-t border-[#d7d6d1] py-10 first:border-t-0 first:pt-0 md:py-12">
    <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{title}</h2>
    <div className="mt-5 space-y-4 text-[15px] leading-7 text-stone-600 sm:text-base sm:leading-8">
      {children}
    </div>
  </section>
);

export const CartScanPage = () => (
  <AppPageLayout
    title="Cart Scan — Privacy & Support"
    description="Privacy policy, support information, and important notices for Cart Scan."
  >
    <main>
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-14 sm:px-8 md:pb-20 md:pt-20">
        <a
          href="/apps"
          className="inline-flex items-center gap-2 text-xs font-medium text-stone-500 transition-colors hover:text-stone-950"
        >
          <span aria-hidden="true">←</span> All apps
        </a>

        <div className="mt-12 max-w-4xl md:mt-16">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            Cart Scan for iOS
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-[-0.06em] sm:text-6xl md:text-[5.25rem] md:leading-[0.95]">
            Privacy &amp; support.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
            Cart Scan is a simple shopping companion that helps you capture and review product and
            price information while you shop.
          </p>
          <p className="mt-5 text-xs text-stone-400">Last updated September 14, 2026</p>
        </div>
      </div>

      <div className="border-t border-[#d7d6d1]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 sm:px-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-20 md:py-20">
          <aside>
            <nav aria-label="On this page" className="md:sticky md:top-8">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                On this page
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-stone-500 md:flex-col md:gap-3">
                <a className="transition-colors hover:text-stone-950" href="#privacy">Privacy policy</a>
                <a className="transition-colors hover:text-stone-950" href="#support">Support</a>
                <a className="transition-colors hover:text-stone-950" href="#accuracy">Accuracy</a>
              </div>
            </nav>
          </aside>

          <article className="min-w-0 max-w-3xl">
            <LegalSection id="privacy" title="Privacy policy">
              <p>
                Cart Scan does not require you to create an account. When you choose to use a scanning
                feature, the app processes the image and text needed to return a result. Camera access is
                used only when you initiate a scan.
              </p>
              <p>
                Scan content is used only to provide Cart Scan’s features and is not used for advertising.
                Bryan Tam does not sell your personal information. Information you choose to keep in the app
                remains on your device unless you choose to share it.
              </p>
              <p>
                Cart Scan may rely on service providers for scanning, app distribution, crash reporting, or
                diagnostics. They may process information only as needed to provide those services and are
                expected to protect it consistently with this policy. Information handled by Apple is also
                governed by Apple’s privacy policies and your device settings.
              </p>
              <p>
                If you contact support, your email address and the information in your message will be used
                only to respond to your request and resolve the issue. Support correspondence is retained only
                as long as reasonably necessary for those purposes.
              </p>
              <p>
                Cart Scan keeps information only for as long as needed to provide the requested feature,
                maintain the app, or meet legal obligations. You can revoke camera access at any time in iOS
                Settings. You can remove information saved on your device through the app, where available,
                or by deleting the app.
              </p>
              <p>
                To request deletion of support correspondence or other personal information held by Bryan Tam,
                or to ask a question about this policy, email{' '}
                <a className="underline decoration-stone-300 underline-offset-4 hover:text-stone-950" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>.
              </p>
            </LegalSection>

            <LegalSection id="support" title="Support">
              <p>
                Need help with Cart Scan, want to report a problem, or have a privacy question? Email{' '}
                <a className="underline decoration-stone-300 underline-offset-4 hover:text-stone-950" href={`mailto:${SUPPORT_EMAIL}?subject=Cart%20Scan%20Support`}>
                  {SUPPORT_EMAIL}
                </a>{' '}
                and include “Cart Scan” in the subject line.
              </p>
            </LegalSection>

            <LegalSection id="accuracy" title="Accuracy disclaimer">
              <p>
                Cart Scan uses automated recognition and may produce incomplete, incorrect, or outdated
                product names, prices, quantities, or calculations. Results are provided for convenience and
                informational purposes only. Always verify important details against the product label,
                receipt, retailer listing, and in-store signage before making a purchase or relying on a result.
              </p>
            </LegalSection>

          </article>
        </div>
      </div>
    </main>
  </AppPageLayout>
);

export const NotFoundPage = () => (
  <AppPageLayout title="Page not found — Bryan Tam" description="The requested page could not be found.">
    <main className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-20 sm:px-8">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.055em]">Page not found.</h1>
        <a className="mt-8 inline-block text-sm underline decoration-stone-300 underline-offset-4" href="/">
          Return home
        </a>
      </div>
    </main>
  </AppPageLayout>
);
