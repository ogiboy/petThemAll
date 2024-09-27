'use client'

import { useEffect, useRef, useActionState } from 'react'

function AddPetForm() {
  const userNameRef = useRef()

  //   const [state, formAction] = useActionState()

  useEffect(() => {
    userNameRef.current.focus()
  }, [])

  return (
    <form className="border-2">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="catName">Cat's Name</label>
        <input type="text" id="catName" name="catName" />
      </div>
      <button type="button">Send</button>
    </form>
  )
}

export default AddPetForm
