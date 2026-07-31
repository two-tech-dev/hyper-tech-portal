"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import type { LegitsAttachment } from "@/lib/discord";

export function ImageLightbox({
  images,
  index,
  returnFocus,
  onClose,
  onChange,
}: {
  images: LegitsAttachment[];
  index: number;
  returnFocus: HTMLButtonElement | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const { t } = useLocale();
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    node.showModal();
    return () => {
      if (node.open) node.close();
      returnFocus?.focus();
    };
  }, [returnFocus]);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") onChange((index + 1) % images.length);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [images.length, index, onChange]);

  const close = () => {
    dialog.current?.close();
    returnFocus?.focus();
    onClose();
  };
  const current = images[index];

  return (
    <dialog
      ref={dialog}
      aria-label={t("lightboxLabel")}
      onCancel={(event) => { event.preventDefault(); close(); }}
      onClick={(event) => event.target === dialog.current && close()}
      className="fixed inset-0 m-auto max-h-[90vh] max-w-[92vw] rounded-[var(--radius-md)] border border-white/20 bg-[var(--color-ink)] p-3 text-white shadow-2xl backdrop:bg-black/80"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="truncate text-xs text-white/70">{current?.filename}</p>
        <button type="button" onClick={close} className="grid size-9 place-items-center rounded-[var(--radius-sm)] text-lg hover:bg-white/10" aria-label={t("lightboxClose")}>×</button>
      </div>
      {current && <img src={current.url} alt={current.filename} className="mt-2 max-h-[76vh] max-w-[88vw] object-contain" />}
      {images.length > 1 && <div className="flex justify-center gap-2 pt-2"><button type="button" className="grid size-9 place-items-center rounded text-sm hover:bg-white/10" onClick={() => onChange((index - 1 + images.length) % images.length)} aria-label={t("lightboxPrevious")}>←</button><span className="self-center text-xs text-white/60">{index + 1} / {images.length}</span><button type="button" className="grid size-9 place-items-center rounded text-sm hover:bg-white/10" onClick={() => onChange((index + 1) % images.length)} aria-label={t("lightboxNext")}>→</button></div>}
    </dialog>
  );
}
