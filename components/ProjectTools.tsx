export const Tool = ({ tools }: { tools: string[] | undefined }) => {
  return (
    <div className="flex cursor-default flex-wrap gap-2">
      {tools?.map((tool, i) => (
        <span
          key={i}
          className="border-[1px] border-solid border-[#040404] px-2 py-1 text-[12px] text-[#040404] transition-all duration-200 hover:border-[#5B7AC4] hover:text-[#5B7AC4] sm:text-[14px]"
        >
          {tool}
        </span>
      ))}
    </div>
  )
}
