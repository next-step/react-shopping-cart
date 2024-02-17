import { PageButton } from '@/components/layouts'

type Pages = {
  page: number
  isSelectedPage: boolean
}

interface PaginationProps {
  pages: Pages[]
  changePage: (page: string) => void
}

const Pagination = ({ pages, changePage }: PaginationProps) => {
  return (
    <div className="pagination">
      {pages.map((page) => (
        <PageButton key={page.page} page={page} changePage={changePage} />
      ))}
    </div>
  )
}

export default Pagination
