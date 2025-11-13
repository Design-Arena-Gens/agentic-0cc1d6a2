import Link from "next/link";
import { ForestScene } from "@/components/ForestScene";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-slate-950 via-emerald-950 to-black text-emerald-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(15,99,82,0.35),transparent_70%)]" />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-24 pt-24 sm:px-10 lg:px-20">
        <header className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">
              The Curio Woods
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-teal-50 sm:text-5xl lg:text-6xl">
              Ugly trees thriving in a breathtaking forest sanctuary.
            </h1>
            <p className="max-w-xl text-lg text-emerald-100/80 sm:text-xl">
              Wander into a grove where broken silhouettes and tangled branches
              refuse to be hidden. Each distorted trunk is bathed in serene
              light, proving that imperfection can glow even brighter against a
              backdrop of beauty.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-950">
              <Link
                className="rounded-full bg-emerald-300/90 px-6 py-3 text-emerald-950 shadow-lg shadow-emerald-500/40 transition-transform hover:-translate-y-0.5 hover:bg-emerald-200"
                href="#gallery"
              >
                Meet the misfit trees
              </Link>
              <Link
                className="rounded-full border border-emerald-300/60 px-6 py-3 text-emerald-100 transition-colors hover:border-emerald-200 hover:text-white"
                href="#story"
              >
                Read the forest lore
              </Link>
            </div>
          </div>
          <div className="mt-8 w-full flex-1 md:mt-0">
            <ForestScene />
          </div>
        </header>

        <section
          id="story"
          className="mt-20 grid gap-10 rounded-3xl border border-emerald-500/20 bg-emerald-950/40 p-10 shadow-[0_20px_90px_-50px_rgba(16,185,129,0.9)] backdrop-blur-sm md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-400/80">
              Chapter I
            </p>
            <h2 className="text-3xl font-semibold text-emerald-50 sm:text-4xl">
              The stubborn trees that made the forest unforgettable.
            </h2>
            <p className="text-lg leading-relaxed text-emerald-100/75">
              Legends say the grove began as an experiment gone wrong. A rogue
              gardener coaxed saplings into unnatural shapes, bending trunks and
              braiding branches until the grove became too odd for polite
              company. Yet the forest embraced them, weaving luminous moss and
              misty light that turned every knot and curve into an art piece.
            </p>
            <p className="text-lg leading-relaxed text-emerald-100/75">
              Nightfall brings a luminous hush. Fireflies cling to each warped
              limb, and the canopy reflects northern lights that never needed a
              sky. Here, ugliness is just another kind of story the forest is
              willing to tell.
            </p>
          </div>
          <ul className="grid gap-6">
            {[
              {
                title: "Fractured silhouettes",
                detail:
                  "Every tree twists into abstract geometry, defying symmetry and celebrating asymmetrical design.",
              },
              {
                title: "Bioluminescent understory",
                detail:
                  "Mosses and fungi illuminate the ground plane with teal and amber glows, framing the misfit trunks.",
              },
              {
                title: "Whispered mythology",
                detail:
                  "Guides say the grove listens—each branch creaks with the secrets of wayward wanderers.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-emerald-500/15 bg-emerald-900/40 p-6"
              >
                <h3 className="text-xl font-semibold text-emerald-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-emerald-100/70">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="gallery"
          className="mt-20 rounded-3xl border border-emerald-500/20 bg-slate-950/30 p-10 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-400/70">
                Visitation Notes
              </p>
              <h2 className="text-3xl font-semibold text-emerald-50 sm:text-4xl">
                Wander respectfully among the enchanting oddities.
              </h2>
            </div>
            <Link
              href="https://en.wikipedia.org/wiki/Tree"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/70 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-white"
            >
              Learn about real trees →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "The Crooked Noble",
                note: "Leans at an impossible 28° angle, draped in sapphire lichens.",
              },
              {
                name: "Bramble Crown",
                note: "Branches braid into thorny loops, glowing with amber spores.",
              },
              {
                name: "The Spiral Witness",
                note: "A trunk that spirals like a seashell, wrapped in pale moss.",
              },
              {
                name: "Knotwork Colossus",
                note: "Gnarled trunks fuse together to resemble a mythical creature.",
              },
              {
                name: "Fable Twins",
                note: "Two trunks born from one root, dividing and meeting again above.",
              },
              {
                name: "The Humble Glow",
                note: "Short, stumpy, and radiant—ground fireflies orbit its branches.",
              },
            ].map((tree) => (
              <div
                key={tree.name}
                className="rounded-2xl border border-emerald-500/10 bg-emerald-900/40 p-6"
              >
                <h3 className="text-lg font-semibold text-emerald-50">
                  {tree.name}
                </h3>
                <p className="mt-2 text-sm text-emerald-100/70">{tree.note}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 flex flex-col items-center gap-4 text-sm text-emerald-200/70">
          <p>
            Crafted for the ones who find beauty in crooked trunks and tangled
            stories.
          </p>
          <p className="text-xs text-emerald-300/60">
            Stay as long as the glow lasts.
          </p>
        </footer>
      </main>
    </div>
  );
}
