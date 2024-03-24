import { useTranslations, useLocale } from 'next-intl'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const TextEffect = () => {
  const t = useTranslations('TextEffect')
  const { locale } = useRouter()
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((prevKey) => prevKey + 1)
  }, [locale])

  return (
    <TypeAnimation
      key={key}
      sequence={[t('wordOne'), 1500, t('wordTwo'), 1500]}
      speed={50}
      className="text-[2rem] font-bold uppercase text-[#5B7AC4] md:text-[3rem]"
      repeat={Infinity}
    />
  )
}

export default TextEffect
