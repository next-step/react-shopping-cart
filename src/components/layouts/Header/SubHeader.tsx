interface SubHeaderProps {
  title: string
  type: 'cart' | 'order'
}
const SubHeader = ({ title, type }: SubHeaderProps) => {
  return (
    <header className="flex-col-center my-20">
      <h2 className={`${type}-section__title`}>{title}</h2>
      {/* <hr className="divide-line mt-20" /> */}
    </header>
  )
}

export default SubHeader
