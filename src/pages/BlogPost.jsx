import { Link, useParams } from "react-router-dom"
import { ArrowLeft, CalendarDays, UserRound } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SmartImage } from "@/components/shared"
import { PostCard } from "./Blog"
import { posts } from "@/data/site"
import NotFound from "./NotFound"

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFound />
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Button asChild variant="ghost" size="sm" className="-ml-3 text-muted-foreground">
          <Link to="/blog"><ArrowLeft /> Back to Blog</Link>
        </Button>
        <Badge className="mt-6">{post.category}</Badge>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">{post.title}</h1>
        <div className="mt-4 flex items-center gap-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><UserRound className="h-4 w-4" /> {post.author}</span>
        </div>
        <SmartImage src={post.image} alt={post.title} className="mt-8 aspect-[16/9] w-full rounded-xl object-cover" />

        <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-navy/85">
          <p className="text-lg font-medium text-navy">{post.excerpt}</p>
          <p>
            Good health is built on small, consistent choices. In this article, our specialist shares practical advice you can begin using
            today — no complicated routines, just sensible steps backed by evidence and years of clinical experience.
          </p>
          <h2 className="pt-2 text-xl font-bold text-navy">Start with the basics</h2>
          <p>
            Regular sleep, balanced meals, daily movement and staying hydrated form the foundation of wellbeing. When these are in place,
            the body is far better equipped to prevent and recover from illness.
          </p>
          <h2 className="pt-2 text-xl font-bold text-navy">Know when to see a doctor</h2>
          <p>
            Persistent symptoms, sudden changes or anything that worries you deserve a professional opinion. Early consultation often means
            simpler treatment and faster recovery.
          </p>
          <div className="rounded-xl border-l-4 border-primary bg-secondary p-5 text-sm text-navy">
            This article is for general information only and is not a substitute for professional medical advice. Please consult a doctor
            for concerns about your health.
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-muted p-6">
          <p className="font-heading text-lg font-bold text-navy">Have questions? Talk to our experts.</p>
          <Button asChild><Link to="/appointment">Book an Appointment</Link></Button>
        </div>
      </article>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy">Related Articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
