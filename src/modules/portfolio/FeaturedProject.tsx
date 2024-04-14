import Image from 'next/image'
import { Fragment } from 'react'
import styles from './FeaturedProject.module.scss'
import bindableCf from 'classnames/bind'
import Markdown from 'markdown-to-jsx'
import { Project } from '@/modules/portfolio/data/project.interface'
import { LinkButton } from '@/modules/common/LinkButton'
import TechChip from '@/modules/portfolio/TechChip'
import { FitWidthImage } from '@/modules/portfolio/FitWidthImage'

const classnames = bindableCf.bind(styles)

export function FeaturedProject({
  description,
  image,
  links,
  tech,
  title,
  id,
}: Project) {
  return (
    <div className="grid grid-cols-12 isolate">
      <div
        className="
        lg:col-span-6 lg:col-start-1
        md:col-span-7 md:col-start-1
        col-span-12 row-start-1 
        flex flex-col justify-center gap-4
        z-10"
      >
        <h5 className="text-4xl text-accent font-medium" id={id}>
          {title}
        </h5>
        <div className="rounded-lg overflow-hidden bg-app-1 shadow-md p-3 relative">
          <Image
            className="absolute object-cover object-center opacity-10 grayscale md:hidden"
            src={image}
            alt={`Preview of ${title}`}
            fill
            draggable="false"
          />

          <div className="relative">
            <div
              // gap and flex-col are here because I can't seem to make line breaks work with markdown
              // TODO figure out how to make line breaks work
              className={classnames(
                'mb-5 gap-2 flex flex-col',
                styles.description,
              )}
            >
              <Markdown
                options={{
                  wrapper: Fragment,
                }}
              >
                {description}
              </Markdown>
            </div>
            <div>
              <div className="text-xs mb-1">Relevant technologies:</div>
              <div className="flex flex-row gap-2 flex-wrap">
                {tech.map(({ icon, label }) => (
                  <TechChip src={icon} label={label} key={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          {links.map(({ icon, label, url }, index) => (
            <LinkButton
              icon={icon}
              label={label}
              href={url}
              key={index}
              className="font-medium text-sm"
            />
          ))}
        </div>
      </div>

      <div
        className="
        md:block hidden
        col-start-5 col-span-8 row-start-1
        rounded-lg overflow-hidden"
      >
        <FitWidthImage
          src={image}
          alt={`Preview of ${title}`}
          className="w-full"
        />
      </div>
    </div>
  )
}
