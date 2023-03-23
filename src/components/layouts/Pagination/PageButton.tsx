type Pages = {
  page: number
  isSelectedPage: boolean
}

interface PageButtonProps {
  page: Pages
  changePage: (page: string) => void
}

const PageButton = ({ page, changePage }: PageButtonProps) => {
  return (
    <button onClick={() => changePage(String(page.page))}>
      {page.isSelectedPage ? <span className="selected-page">{page.page}</span> : <span>{page.page}</span>}
    </button>
  )
}

export default PageButton
