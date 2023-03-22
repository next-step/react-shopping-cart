import * as S from './styles'

interface ImgProps {
  src: string
  size: 'small' | 'medium' | 'large'
  alt: string
}

const Img = ({ src, size, alt }: ImgProps) => {
  return <S.Img size={size} src={src} alt={alt} />
}

export default Img
