import classNames from 'classnames'
import Image from 'next/image'
import { ReactNode } from 'react'
import { If, Then } from 'react-if'
import * as changeCase from 'change-case'
import Link from 'next/link'

export default function SkillLayout(props: {
  header: string
  side?: ReactNode
  className?: string
  iconSrc: string
  footer?: ReactNode
  children: ReactNode
}) {
  const id = changeCase.kebabCase(`skill ${props.header}`)

  return (
    <div
      id={id}
      className={classNames(
        'p-5 rounded-lg bg-app-2 flex flex-col gap-3',
        props.className,
      )}
    >
      <div className="flex flex-row items-center gap-3 col-none">
        <div className="relative h-12 w-12">
          <Image alt={props.header} src={props.iconSrc} fill />
        </div>
        <h4 className="text-4xl text-white">
          <Link
            href={{
              hash: id,
            }}
          >
            {props.header}
          </Link>
        </h4>
      </div>

      <div className="flex-auto">{props.children}</div>

      <If condition={!!props.footer}>
        <Then>
          <div className="flex-none flex flex-col gap-y-2">{props.footer}</div>
        </Then>
      </If>
    </div>
  )
}
