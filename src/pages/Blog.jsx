import { Link } from "react-router-dom"
import { ArrowRight, CalendarDays, UserRound } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHero, SmartImage } from "@/components/shared"
import CtaBanner from "@/components/sections/CtaBanner"
import { posts } from "@/data/site"

export function PostCard({ post }) {
  return (
    <Card className="group flex flex-col overflow-hidden p-0 transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-14px_rgba(16,38,74,0.35)]">
      <Link to={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden">
        <SmartImage src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <Badge className="absolute left-4 top-4">{post.category}</Badge>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {post.date}</span>
          <span className="flex items-center gap-1"><UserRound className="h-3.5 w-3.5" /> {post.author}</span>
        </div>
        <h3 className="mt-3 text-base font-bold leading-snug text-navy group-hover:text-primary">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
          Read More <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Card>
  )
}

export default function Blog() {
  return (
    <>
      <PageHero title="Health Blog" subtitle="Expert tips, guides and news from our doctors to help you live healthier." crumbs={[{ label: "Blog" }]} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
