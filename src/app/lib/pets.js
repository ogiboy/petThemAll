import sql from 'better-sqlite3'

const db = sql('pets.db')

export const getPets = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return db.prepare('SELECT * FROM pets').all()
}

export const getPetDetails = async (slug) => {
  try {
    // console.log('fetching details for slug:', slug)

    const result = await db
      .prepare('SELECT * FROM pets WHERE slug = ?')
      .get(slug)
    if (!result) throw new Error('Error fetching pet details')
    // console.log('query result:', result)
    return result
  } catch (error) {
    console.error(error)
  }
}
