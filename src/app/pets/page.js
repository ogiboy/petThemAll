import Image from 'next/image'
import Link from 'next/link'

import { Suspense } from 'react'
import { getPets } from '../lib/pets'

export const metadata = {
  title: 'Pets',
  description: 'List of all user submited pets...',
}

const PetGridItem = ({ pet }) => {
  const { pet_name, owner_name, image, slug } = pet

  return (
    <article>
      <figure>
        <Image src={image} width={200} height={200} />
        <figcaption>
          {pet_name} - <cite>{owner_name}</cite>
        </figcaption>
      </figure>
      <Link href={`/pets/${slug}`}>Details</Link>
    </article>
  )
}

const PetsGrid = ({ pets }) => {
  return (
    <ul>
      {pets.map((pet) => (
        <PetGridItem key={pet.id} pet={pet} />
      ))}
    </ul>
  )
}

const Pets = async () => {
  const pets = await getPets()

  return <PetsGrid pets={pets} />
}

export default async function Page() {
  // console.log(pets)
  return (
    <main>
      <h1>Pets</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Pets />
      </Suspense>
    </main>
  )
}
