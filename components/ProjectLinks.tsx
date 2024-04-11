export const Links = ({
  links,
}: {
  links: { name: string; url: string }[]
}) => {
  return (
    <div>
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank">
          <p className="text-[14px] text-[#040404] transition-all duration-200 hover:text-[#5B7AC4] sm:text-[14px]">
            {link.name}
          </p>
        </a>
      ))}
    </div>
  )
}
