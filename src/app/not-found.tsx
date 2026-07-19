import Link from "next/link";
import { Hero } from "@/components/Hero";

export default function NotFound() {
  return (
    <>
      <Hero
        tag="Error 404"
        corner="404"
        title={
          <>
            Page <em>Not Found</em>
          </>
        }
        description="The page you are looking for does not exist or has moved."
      />
      <p className="text-[0.92rem] leading-[1.75] text-text-muted">
        Try the{" "}
        <Link href="/" className="text-[#5b9bd4] hover:underline">
          home page
        </Link>{" "}
        or pick a section from the sidebar.
      </p>
    </>
  );
}
