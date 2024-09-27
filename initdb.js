const sql = require('better-sqlite3')
const db = sql('pets.db')

const dummyPets = [
  {
    pet_name: 'Minnoş',
    owner_name: 'Jim Burton',
    slug: 'minnos',
    image: '/minnos.jpg',
  },
  {
    pet_name: 'Tekir',
    owner_name: 'Jim Burton',
    slug: 'tekir',
    image: '/minnos.jpg',
  },
  {
    pet_name: 'Mırmır',
    owner_name: 'Jim Burton',
    slug: 'mirmir',
    image: '/minnos.jpg',
  },
  {
    pet_name: 'Pamuk',
    owner_name: 'Jim Burton',
    slug: 'pamuk',
    image: '/minnos.jpg',
  },
  {
    pet_name: 'Boncuk',
    owner_name: 'Jim Burton',
    slug: 'boncuk',
    image: '/minnos.jpg',
  },
]

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS pets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        pet_name TEXT NOT NULL,
        owner_name TEXT NOT NULL,
        image TEXT NOT NULL
     )
 `
).run()

async function initData() {
  const stmt = db.prepare(`
        INSERT INTO pets VALUES (
           null,
           @slug,
           @pet_name,
           @owner_name,
           @image
        )
     `)

  for (const pet of dummyPets) {
    stmt.run(pet)
  }
}

initData()
