import { TypeAnimation } from 'react-type-animation'

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={['Programador', 1500, 'Desenvolvedor', 1500]}
      speed={50}
      className="text-[2rem] font-bold uppercase text-[#5B7AC4] md:text-[3rem]"
      repeat={Infinity}
    />
  )
}

export default TextEffect
