import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/approach")({
  component: ApproachPage,
  head: () => ({
    meta: [
      { title: "Approach — J3D.AI" },
      { name: "description", content: "How J3D.AI works: convening, intelligence, and market access for the firms shaping the next decade." },
      { property: "og:title", content: "Approach — J3D.AI" },
      { property: "og:url", content: `${SITE.url}/approach` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/approach` }],
  }),
});

function ApproachPage() {
  return (
    <>
      <section className="container-x pt-28 pb-16 sm:pt-40 max-w-3xl">
        <p className="eyebrow">Approach</p>
        <h1 className="display-1 mt-6">
          A practice built around three questions.
        </h1>
        <p className="lede mt-8">
          Who needs to be in the room. What signal they need to act. Which corridor
          turns intent into a deal.
        </p>
      </section>

      <section className="container-x pb-24">
        <ol className="grid gap-px bg-border md:grid-cols-3">
          {[
            { n: "01", t: "Convening", b: "We design closed rooms where decisions actually get made. HoC Davos is our flagship; salons run year-round across Tallinn, Singapore, and the Gulf." },
            { n: "02", t: "Intelligence", b: "Our VAY Score reads AI and governance readiness for boards that need a clean signal. We publish foresight briefings for our members." },
            { n: "03", t: "Market access", b: "Estonia–Asia corridors built around real procurement appetite. Introductions only when we know they'll convert." },
          ].map((x) => (
            <li key={x.n} className="bg-background p-10">
              <p className="eyebrow">{x.n}</p>
              <h2 className="display-3 mt-4">{x.t}</h2>
              <p className="mt-4 text-ink-soft">{x.b}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 text-center">
          <h2 className="display-2 max-w-2xl mx-auto">
            The clearest way to see how we work is to sit in the room.
          </h2>
          <Link
            to="/hoc"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Apply for HoC 2027
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
