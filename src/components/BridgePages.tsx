import { AppPageLayout, LegalSection, SUPPORT_EMAIL } from './AppPages';

export type BridgePageView = 'combined' | 'privacy' | 'support';

const BRIDGE_PATH = '/apps/bridge-with-friends';
const PRIVACY_PATH = `${BRIDGE_PATH}/privacy`;
const SUPPORT_PATH = `${BRIDGE_PATH}/support`;
const UPDATED_DATE = 'September 15, 2026';

const textLinkClass =
  'underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-950 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#81749d] focus-visible:ring-offset-2';

const PrivacyContent = () => (
  <LegalSection id="privacy" title="Privacy policy">
    <p>
      Bryan Tam, based in Canada, operates Bridge Circle. For a privacy question or request, email{' '}
      <a className={textLinkClass} href={`mailto:${SUPPORT_EMAIL}?subject=Bridge%20Circle%20Privacy`}>
        {SUPPORT_EMAIL}
      </a>.
    </p>
    <p>
      Bridge Circle uses the nickname you choose, an anonymous Firebase account identifier, invite
      codes, table membership, seats, Ready state, auction calls, played cards, tricks, results, and
      replay choices to run multiplayer games. Action and request identifiers and timestamps help
      keep devices synchronized and prevent duplicate actions.
    </p>
    <p>
      Your nickname, seat, and public gameplay are visible to members of your table. Your unplayed
      hand is stored separately and can be read only by your signed-in anonymous account. Bot
      practice stays on your device and does not create an online room. A small reconnect bookmark
      is also stored on your device.
    </p>
    <p>
      Multiplayer uses Firebase Anonymous Authentication, Cloud Firestore, Cloud Functions, and
      operational logging. Firebase may process your IP address, device and app signals, request
      timing, errors, and security information. Firebase App Check and Apple App Attest libraries
      are included, but App Check enforcement is currently off for this controlled beta.
    </p>
    <p>
      Bridge Circle does not request real names, email addresses, contacts, precise location,
      advertising identifiers, or payment information. It has no advertising, cross-app tracking,
      targeted advertising, or sale of personal information.
    </p>
    <p>
      Inactive waiting rooms are kept for up to 24 hours, active rooms for up to 7 days, and rooms
      waiting for replay for up to 48 hours. Rate-limit records generally expire after 1 hour, while
      action and duplicate-request records expire after 30 days. Default application logs are kept
      for 30 days and required administrator or system-event logs for 400 days. As verified on
      September 14, 2026, Firestore keeps one hour of version history, point-in-time recovery is off,
      and there are no scheduled or stored backups. Firebase Authentication backup deletion may
      take up to 180 days.
    </p>
    <p>
      To delete your anonymous account and associated multiplayer data, open{' '}
      <strong className="font-semibold text-stone-800">Help &amp; Privacy → Privacy → Delete My Data</strong>.
      This also signs you out and clears the reconnect bookmark. Some short-lived security records
      and required provider logs may remain until the retention periods above end. If deletion does
      not work, contact{' '}
      <a className={textLinkClass} href={`mailto:${SUPPORT_EMAIL}?subject=Bridge%20Circle%20Data%20Deletion`}>
        {SUPPORT_EMAIL}
      </a>.
    </p>
  </LegalSection>
);

const SupportContent = () => (
  <LegalSection id="support" title="Support">
    <p>
      To play with friends, one person chooses <strong className="font-semibold text-stone-800">Create
      a Table</strong> and shares the six-character invite code. The other three players enter the
      code, choose seats so partners sit opposite, and mark themselves Ready. The host can start when
      all four players are ready.
    </p>
    <p>
      If an invite does not work, check all six characters, confirm everyone has an internet
      connection, and make sure the original table is still open. “Room not found” usually means the
      code is incorrect or the table has ended or expired; create a new table if needed.
    </p>
    <p>
      After an interruption, keep the app open and choose <strong className="font-semibold text-stone-800">Retry</strong>.
      If the app closed, reopen it on the same device and use the reconnect option while the table is
      still available.
    </p>
    <p>
      Choose <strong className="font-semibold text-stone-800">Practice with Bots</strong> to test the
      game locally without creating an online room or sharing an invite code.
    </p>
    <p>
      To remove your anonymous account and multiplayer data, open{' '}
      <strong className="font-semibold text-stone-800">Help &amp; Privacy → Privacy → Delete My Data</strong>.
      Read the <a className={textLinkClass} href={PRIVACY_PATH}>Privacy Policy</a> for retention details.
    </p>
    <p>
      For help, email{' '}
      <a className={textLinkClass} href={`mailto:${SUPPORT_EMAIL}?subject=Bridge%20Circle%20Support`}>
        {SUPPORT_EMAIL}
      </a>. Include the app version, your iPhone model, and a short description of what happened.
      Please hide invite codes and do not send anyone’s cards.
    </p>
  </LegalSection>
);

const pageDetails: Record<
  BridgePageView,
  { title: string; description: string; heading: string; lead: string; canonical: string }
> = {
  combined: {
    title: 'Bridge Circle — Privacy & Support',
    description: 'Privacy policy and support information for the Bridge Circle iPhone app.',
    heading: 'Privacy & support.',
    lead: 'Privacy details and quick help for playing Bridge Circle with friends or practicing with bots.',
    canonical: 'https://bryantam.com/apps/bridge-with-friends/',
  },
  privacy: {
    title: 'Bridge Circle — Privacy Policy',
    description: 'Privacy information for the Bridge Circle iPhone app.',
    heading: 'Privacy policy.',
    lead: 'What Bridge Circle processes, why it is needed, how long it stays, and how to delete it.',
    canonical: 'https://bryantam.com/apps/bridge-with-friends/privacy/',
  },
  support: {
    title: 'Bridge Circle — Support',
    description: 'Help playing with friends, reconnecting, practicing, and deleting data in Bridge Circle.',
    heading: 'Support.',
    lead: 'Quick answers for starting a table, reconnecting, practicing, and managing your data.',
    canonical: 'https://bryantam.com/apps/bridge-with-friends/support/',
  },
};

export const BridgeCirclePage = ({ view }: { view: BridgePageView }) => {
  const details = pageDetails[view];
  const navigation = view === 'combined'
    ? [
        ['privacy', 'Privacy policy'],
        ['support', 'Support'],
      ]
    : [[view, view === 'privacy' ? 'Privacy policy' : 'Support']];

  return (
    <AppPageLayout title={details.title} description={details.description} canonical={details.canonical}>
      <main id="main-content">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-14 sm:px-8 md:pb-20 md:pt-20">
          <a
            href={view === 'combined' ? '/apps' : BRIDGE_PATH}
            className="inline-flex items-center gap-2 text-xs font-medium text-stone-500 transition-colors hover:text-stone-950 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#81749d] focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">←</span> {view === 'combined' ? 'All apps' : 'Bridge Circle'}
          </a>

          <div className="mt-12 max-w-4xl md:mt-16">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#716886]">
              Bridge Circle for iPhone
            </p>
            <h1 className="font-display text-5xl font-semibold tracking-[-0.06em] sm:text-6xl md:text-[5.25rem] md:leading-[0.95]">
              {details.heading}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">{details.lead}</p>
            <p className="mt-5 text-xs text-stone-400">Last updated {UPDATED_DATE}</p>

            <nav aria-label="Bridge Circle privacy and support" className="mt-8 flex flex-wrap gap-3">
              <a
                href={PRIVACY_PATH}
                aria-current={view === 'privacy' ? 'page' : undefined}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#81749d] focus-visible:ring-offset-2 ${
                  view === 'privacy'
                    ? 'border-[#81749d] bg-[#81749d] text-white'
                    : 'border-[#cec8d8] text-[#625873] hover:bg-[#ebe8f2]'
                }`}
              >
                Privacy
              </a>
              <a
                href={SUPPORT_PATH}
                aria-current={view === 'support' ? 'page' : undefined}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#81749d] focus-visible:ring-offset-2 ${
                  view === 'support'
                    ? 'border-[#81749d] bg-[#81749d] text-white'
                    : 'border-[#cec8d8] text-[#625873] hover:bg-[#ebe8f2]'
                }`}
              >
                Support
              </a>
            </nav>
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
                  {navigation.map(([id, label]) => (
                    <a
                      key={id}
                      className="transition-colors hover:text-stone-950 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#81749d] focus-visible:ring-offset-2"
                      href={`#${id}`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </nav>
            </aside>

            <article className="min-w-0 max-w-3xl">
              {view !== 'support' && <PrivacyContent />}
              {view !== 'privacy' && <SupportContent />}
            </article>
          </div>
        </div>
      </main>
    </AppPageLayout>
  );
};
