interface PageButtonProps {
  page: number
  changePage: (page: string) => void
}

const PageButton = ({ page, changePage }: PageButtonProps) => {
  return <button onClick={() => changePage(String(page))}>{page}</button>
}

export default PageButton
