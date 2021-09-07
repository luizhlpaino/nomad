import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map/>', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    )
  })
  it('should render with the marker in the correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const second_place = {
      id: '2',
      name: 'Reykjavik',
      slug: 'reykjavik',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, second_place]} />)

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument()
  })
})
