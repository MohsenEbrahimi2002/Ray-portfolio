type SectionHeadingProps =  {
    children: React.ReactNode
}

function SectionHeading({children}: SectionHeadingProps) {
  return (
    <h2 className="text-center text-gray-950 dark:text-gray-500 sm:text-4xl text-2xl my-20">{children}</h2>
  )
}

export default SectionHeading
