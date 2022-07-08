const fetchShopStyle = async (endpoint, limit) => {
  const baseUrl = "https://api.shopstyle.com/api/v2/"
  const pid = "uid2100-33117110-56"
  const userId = "SomePrettyThing"

  return fetch(
    `${baseUrl}${endpoint}?pid=${pid}&userId=${userId}&limit=${limit}`
  )
}

export async function getShopStyleLists() {
  let data = await fetchShopStyle("lists", "50").then((res) => res.json())

  return data
}

export async function getShopStyleListById(listId) {
  const list = await fetchShopStyle(`lists/${listId}`, 1).then((res) =>
    res.json()
  )

  return list
}

export async function getAllShopStyleFavorites() {
  let { lists } = await fetchShopStyle("lists", 50).then((res) => res.json())

  const groups = await Promise.all(
    lists.map(async (list) => {
      const favorites = await fetchShopStyle(`lists/${list.id}/items`, 50).then(
        (res) => res.json()
      )
      return { favorites: favorites.favorites }
    })
  )

  let merged = []

  for (var i = 0; i < groups.length; i++) {
    merged = merged.concat(groups[i].favorites)
  }

  return merged
}

export async function getShopStyleFeatured() {
  let { lists } = await fetchShopStyle("lists", "50").then((res) => res.json())

  const groups = await Promise.all(
    lists.map(async (list) => {
      const favorites = await fetchShopStyle(`lists/${list.id}/items`, 10).then(
        (res) => res.json()
      )
      return { favorites: favorites.favorites }
    })
  )

  let merged = []

  for (var i = 0; i < groups.length; i++) {
    merged = merged.concat(groups[i].favorites)
  }

  return merged
}

export async function getAllShopStyleFavoritesByList(listId) {
  const favorites = await fetchShopStyle(`lists/${listId}/items`, 50).then(
    (res) => res.json()
  )

  return { favorites: favorites.favorites }
}
