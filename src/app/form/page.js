import AddPetForm from '@/components/AddPetForm'

export const metadata = {
  title: 'Add Your Pet',
  description: 'Submit your pet!',
}

const FormPage = () => {
  return (
    <main>
      <AddPetForm />
    </main>
  )
}
export default FormPage
