import { getPetDetails } from '@/app/lib/pets'
import { notFound } from 'next/navigation'

import Image from 'next/image'

export async function generateMetadata({ params }) {
  const pet = await getPetDetails(params.pet)

  if (!pet) {
    notFound()
  }

  return {
    title: pet.pet_name,
    description: pet.pet_name,
  }
}

const Pet = async ({ params }) => {
  const pet = await getPetDetails(params.pet)
  // console.log('pet params:', params)
  // console.log(pet)

  const { pet_name, owner_name, image } = pet

  return (
    <main>
      <figure>
        <Image src={image} width={500} height={500} />
        <figcaption>
          <p>
            {pet_name} <cite>{owner_name}</cite>{' '}
          </p>
        </figcaption>
      </figure>
    </main>
  )
}
export default Pet
