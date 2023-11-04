import Link from './Link'
import siteConfig from '@/data/siteConfig'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteConfig.email}`} size={6} />
          <SocialIcon kind="github" href={siteConfig.github} size={6} />
          <SocialIcon kind="facebook" href={siteConfig.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteConfig.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteConfig.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteConfig.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteConfig.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteConfig.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
