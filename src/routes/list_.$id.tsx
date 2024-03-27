import { createFileRoute } from '@tanstack/react-router'
import Detail from '../components/Product/Detail'

export const Route = createFileRoute('/list/$id')({
  component: () => {
    const { id } = Route.useParams()
    return <Detail id={id} />
  },
})
