import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'

import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Nomad"
        description="A simple project to show my favorite places in the world."
        canonical="https://nomad.luizhlpaino.com.br"
        openGraph={{
          url: 'https://nomad.luizhlpaino.com.br',
          title: 'Nomad',
          description:
            'A simple project to show my favorite places in the world.',
          images: [
            {
              url: 'https://nomad.luizhlpaino.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Nomad'
            }
          ],
          site_name: 'Nomad'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
