import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import Instagram from "@/assets/icons/instagram.svg"

export const SITE = {
  title: "ajt",
  description: "portfolio for alexander j. taylor.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/src/content/authors/Headshot-AlexanderJTaylor.jpeg",
  defaultPostImage: "/src/content/authors/Headshot-AlexanderJTaylor.jpeg",
} as const

export const NAVIGATION = [
  { href: "/blog", label: "Blog" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/ajtfati", label: "GitHub", icon: GitHub },
  { href: "https://www.instagram.com/alexanderjordantaylor/", label: "Instagram", icon: Instagram },
  { href: "mailto:ajt@alexanderjtaylor.com", label: "Email", icon: Email },
]