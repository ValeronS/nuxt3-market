export default defineEventHandler(async (e) => {
  const { id } = getQuery(e)
  return {
    url: `avatar/avatar_${id}.png`,
  }
})
