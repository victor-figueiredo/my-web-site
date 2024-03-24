import { useTranslations } from 'next-intl'
import { TypeAnimation } from 'react-type-animation'

const TextEffect = () => {
  const t = useTranslations('TextEffect')
  return (
    <TypeAnimation
      sequence={[t('wordOne'), 1500, t('wordTwo'), 1500]}
      speed={50}
      className="text-[2rem] font-bold uppercase text-[#5B7AC4] md:text-[3rem]"
      repeat={Infinity}
    />
  )
}

export default TextEffect
