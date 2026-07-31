"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import type { LegitsMessage, LegitsPage } from "@/lib/discord";
import { ImageLightbox } from "@/components/site/ImageLightbox";

/* ── single message ─────────────────────────────────────── */
function Message({ message }: { message: LegitsMessage }) {
  const { locale, t } = useLocale();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [lightboxTrigger, setLightboxTrigger] = useState<HTMLButtonElement | null>(null);
  const date = new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(message.timestamp));
  const images = message.attachments;

  return (
    <article className="legits-message group flex gap-2 border-b border-[var(--color-border)] p-3 transition-colors hover:bg-[var(--color-surface-soft)] sm:gap-3 sm:p-4">
      {/* avatar */}
      <div className="size-9 shrink-0 overflow-hidden rounded-full bg-[var(--color-surface-soft)] ring-1 ring-[var(--color-border)]">
        {message.author.avatarUrl ? (
          <img
            src={message.author.avatarUrl}
            alt=""
            className="size-full object-cover"
          />
        ) : (
          <span className="grid size-full place-items-center text-[10px] font-bold text-[var(--color-ink-muted)]">
            {(message.author.displayName || message.author.username)
              .charAt(0)
              .toUpperCase()}
          </span>
        )}
      </div>

      {/* body */}
      <div className="min-w-0 flex-1">
        {/* header row */}
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-sm font-bold text-[var(--color-accent-hover)]">
            {message.author.displayName || message.author.username}
          </span>
          <time
            dateTime={message.timestamp}
            className="text-xs text-[var(--color-ink-muted)]"
          >
            {date}
          </time>
        </div>

        {/* reply indicator */}
        {message.replyTo && (
          <p className="mt-0.5 text-[11px] text-[var(--color-accent)]">
            ↩ {t("legitsReply")}
          </p>
        )}

        {/* content */}
        {message.content && (
          <p className="mt-1 whitespace-pre-wrap break-words text-[15px] leading-7 text-[var(--color-ink)]">
            {message.content}
          </p>
        )}

        {/* image thumbnails */}
        {images.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {images.slice(0, 4).map((attachment, index) => (
              <button
                type="button"
                key={attachment.id}
                onClick={(event) => { setLightboxTrigger(event.currentTarget); setLightbox(index); }}
                className="relative h-24 w-32 overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-surface-soft)] ring-1 ring-[var(--color-border)] transition-[transform,filter] hover:scale-[1.02] hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] sm:h-28 sm:w-40"
                aria-label={`${t("legitsAttachment")}: ${attachment.filename}`}
              >
                <img
                  src={attachment.url}
                  alt={attachment.filename}
                  className="size-full object-cover"
                  loading="lazy"
                />
                {index === 3 && images.length > 4 && (
                  <span className="absolute inset-0 grid place-items-center bg-black/50 text-xs font-semibold text-white">
                    +{images.length - 4}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* embeds */}
        {message.embeds.length > 0 && (
          <div className="mt-2 space-y-1">
            {message.embeds.map((embed, index) => (
              <a
                key={`${message.id}-embed-${index}`}
                href={embed.url || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-2xl border-l-[3px] border-[var(--color-accent)] bg-[var(--color-surface-soft)] px-3 py-2 text-[13px] transition-colors hover:bg-[var(--color-accent-soft)]"
              >
                {embed.title && (
                  <strong className="block font-semibold leading-snug text-[var(--color-ink)]">
                    {embed.title}
                  </strong>
                )}
                {embed.description && (
                  <p className="mt-0.5 line-clamp-2 text-xs text-[var(--color-ink-muted)]">
                    {embed.description}
                  </p>
                )}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* lightbox */}
      {lightbox !== null && (
        <ImageLightbox
          images={images}
          index={lightbox}
          returnFocus={lightboxTrigger}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      )}
    </article>
  );
}

/* ── feed container ─────────────────────────────────────── */
export function LegitsBoard() {
  const { t } = useLocale();
  const [messages, setMessages] = useState<LegitsMessage[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loadingRef = useRef(false);
  const seen = useRef(new Set<string>());

  const load = useCallback(
    async (before?: string | null) => {
      if (loadingRef.current || (!before && messages.length > 0) || (before && !hasMore)) return;
      loadingRef.current = true;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `/api/legits?limit=15${before ? `&before=${encodeURIComponent(before)}` : ""}`,
        );
        const payload = await response.json();
        if (!response.ok) throw new Error(t("legitsUnavailable"));
        const page = payload as LegitsPage;
        const fresh = page.messages.filter((m) => !seen.current.has(m.id));
        fresh.forEach((m) => seen.current.add(m.id));
        setMessages((current) => [...current, ...fresh]);
        setCursor(page.nextBefore);
        setHasMore(page.hasMore);
      } catch (cause) {
        setError(cause instanceof Error ? cause.message : t("legitsUnavailable"));
      } finally {
        loadingRef.current = false;
        setLoading(false);
      }
    },
    [hasMore, messages.length, t],
  );

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div className="min-w-0 max-w-[55rem]">
      <div
        onScroll={(event) => {
          const node = event.currentTarget;
          if (cursor && hasMore && node.scrollHeight - node.scrollTop - node.clientHeight < 240) void load(cursor);
        }}
        className="legits-feed border-b border-[var(--color-border)] bg-transparent"
      >
        <div>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>

        {messages.length === 0 && !loading && !error && (
          <p className="py-12 text-center text-sm text-[var(--color-ink-muted)]">{t("legitsEmpty")}</p>
        )}

        {error && (
          <div role="alert" className="m-4 rounded-xl border border-[var(--color-border)] p-4">
            <p className="text-sm text-[var(--color-ink-muted)]">{error}</p>
            <button type="button" onClick={() => void load(cursor)} className="secondary-button mt-3 text-sm">
              {t("legitsRetry")}
            </button>
          </div>
        )}

        {loading && (
          <div aria-live="polite" className="flex items-center justify-center gap-2 py-6">
            <span className="size-4 animate-spin rounded-full border-2 border-[var(--color-accent)] border-t-transparent" />
            <span className="text-sm text-[var(--color-ink-muted)]">
              {messages.length ? t("legitsLoadMore") : t("legitsLoading")}
            </span>
          </div>
        )}

        {!loading && hasMore && cursor && messages.length > 0 && (
          <div className="flex justify-center py-5">
            <button type="button" onClick={() => void load(cursor)} className="text-link text-sm">
              {t("legitsMore")} ↓
            </button>
          </div>
        )}

        {!loading && !hasMore && messages.length > 0 && (
          <p className="py-5 text-center text-xs text-[var(--color-ink-muted)]">{t("legitsEnd")}</p>
        )}
      </div>
    </div>
  );
}
