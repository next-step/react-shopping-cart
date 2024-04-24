import { useOverlayContext } from '@/contexts/overlay-context'
import { useId } from 'react'

export const useOverlay = () => {
  const currentOverlayId = useId()
  const { open, close } = useOverlayContext()

  return [open(currentOverlayId), close(currentOverlayId)] as const
}
