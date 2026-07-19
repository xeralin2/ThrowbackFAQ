import Image from "next/image";
import { Tag, type TagVariant } from "./Tag";
import { LinkButton } from "./LinkButton";
import { withBasePath } from "@/lib/asset";

export type DownloaderCardProps = {
  avatar: { src: string; alt: string };
  title: string;
  os?: { src: string; alt: string; label: string }[];
  tags: { label: string; variant?: TagVariant; color?: string }[];
  buttons: { label: string; href: string; secondary?: boolean }[];
};

export function DownloaderCard({
  avatar,
  title,
  os,
  tags,
  buttons,
}: DownloaderCardProps) {
  return (
    <div className="downloader-card mb-[1.25rem] flex flex-wrap items-start gap-6 rounded-[10px] border border-border bg-surface px-6 py-4 [transition:border-color_0.2s,box-shadow_0.2s,opacity_0.35s_ease,transform_0.35s_ease] hover:border-border-brand card-glow-hover">
      <Image
        src={withBasePath(avatar.src)}
        alt={avatar.alt}
        width={64}
        height={64}
        className="h-16 w-16 flex-shrink-0 rounded-full border border-border object-cover"
      />
      <div className="min-w-0 flex-1">
        <h3 className="mb-[0.35rem] font-display text-[1.3rem] font-bold text-text">
          {title}
        </h3>
        <div className="mb-4 flex flex-wrap gap-[0.4rem]">
          {tags.map((tag) => (
            <Tag key={tag.label} variant={tag.variant} color={tag.color}>
              {tag.label}
            </Tag>
          ))}
        </div>
        {os && (
          <div className="mb-4 flex items-center gap-4">
            {os.map((entry) => (
              <div
                key={entry.label}
                className="flex items-center gap-1.5 font-mono text-[0.72rem] tracking-[0.1em] text-text-muted"
              >
                <Image
                  src={withBasePath(entry.src)}
                  alt={entry.alt}
                  width={96}
                  height={96}
                  className="h-[18px] w-[18px] flex-shrink-0 object-contain"
                />
                <span>{entry.label}</span>
              </div>
            ))}
          </div>
        )}
        <div>
          {buttons.map((button) => (
            <LinkButton
              key={button.label}
              href={button.href}
              secondary={button.secondary}
            >
              {button.label}
            </LinkButton>
          ))}
        </div>
      </div>
    </div>
  );
}
