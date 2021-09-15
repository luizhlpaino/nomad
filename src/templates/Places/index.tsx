import * as S from './styles'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { useRouter } from 'next/dist/client/router'

export type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}
export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - Nomad`}
        description={
          place.description?.text ||
          'A simple project to show my favorite places in the world.'
        }
        canonical="https://nomad.com"
        openGraph={{
          url: 'https://nomad.com',
          title: `${place.name} - Nomad`,
          description:
            place.description?.text ||
            'A simple project to show my favorite places in the world.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go Back to Map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <h1>{place.name}</h1>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
