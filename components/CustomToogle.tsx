import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const CustomToggle: React.FC = () => {
  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find((cur) => cur !== locale)

  return (
    <Link
      className={`relative flex h-8 w-16 cursor-pointer rounded-full bg-[#F7F6FB] p-1 ${locale === 'pt' ? 'justify-start' : 'justify-end'}`}
      href={route}
      locale={otherLocale}
    >
      <div className="h-6 w-6">
        <Image
          src={
            locale === 'pt' ? '/assets/images/usa.png' : '/assets/images/br.png'
          }
          alt={locale === 'pt' ? 'Português' : 'English'}
          className="h-full w-full rounded-full object-cover"
          width={22}
          height={22}
        />
      </div>
    </Link>
  )
}

export default CustomToggle
