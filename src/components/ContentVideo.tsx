import { withBasePath } from "@/lib/asset";

type ContentVideoProps = {
  src: string;
  width: number;
  height: number;
  label: string;
  className?: string;
};

export function ContentVideo({
  src,
  width,
  height,
  label,
  className,
}: ContentVideoProps) {
  return (
    <video
      width={width}
      height={height}
      className={className}
      aria-label={label}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={withBasePath(src)} type="video/webm" />
    </video>
  );
}
