import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target="_blank"
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jesse Warren</title>
        <meta
          name="description"
          content="I’m Jesse, an engineer and creative designer based in California."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Jesse, an engineer and creative designer based in California.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I was a seditious teenager, dropping out of high school and becoming involved in the authoring of an eventually-patched Mac OS X exploit.
              </p>
              <p>
                I continued to stay fascinated with systemic disruption, dabbling in school once more to attend (and lecture for) classes in the ethical hacking space.
              </p>
              <p>
                Eventually, I realized I could focus my energy towards teaching, so I&apos;ve spent the last decade in various instructional roles.
              </p>
              <p>
                Since 2020, I&apos;ve enjoyed leading the instruction of hundreds of tech-aspiring students (from a multitude of diverse backgrounds) and guiding them through the fundamentals of full-stack engineering.
              </p>
              <p>
                I currently make a portion of my money by doing full-stack engineering work (and not <em>deliberately</em> breaking anything, sadly).
              </p>
              <p>
                Outside of the day-to-day, I offer bespoke consultation (individually-focused or team-centric) to technical and creative folk alike; low-code startups, career pivots, and mentoring inquiries are all welcomed.
              </p>
              <p>
                As a caveat: Although I am passionate about ethical hacking and social engineering, I only offer consultation on these matters to established companies seeking to validate (or stress) their security.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list" className="flex">
              <SocialLink
                href="https://github.com/jessewarren-aa"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/jesse--warren/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
