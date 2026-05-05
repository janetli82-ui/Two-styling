import type { HeaderProps } from "../../types/types"

const Header = ({title, subtitle}: HeaderProps) => {
  return(
    <header className="py-16 px-4 text-center bg-[url(/bgc.jpeg)] bg-center">
      <div className="text-6xl mb-4">🍃</div>
      <h1 className="text-4xl md:text-5xl font-bold text-amber-800 font-fascinate">{title}</h1>
      <h3 className="text-lg text-gray-600 mt-3 mx-auto font-atomic">{subtitle}</h3>
    </header>
  )
}

export default Header