import PageButton from './PageButton'

interface PaginationProps {
  pages: number[]
  changePage: (page: string) => void
}

const Pagination = ({ pages, changePage }: PaginationProps) => {
  return (
    <div className="pagination">
      {pages.map((page) => (
        <PageButton key={page} page={page} changePage={changePage} />
      ))}
    </div>
  )
}

export default Pagination
