export default defineEventHandler(async (e) => {
  const { id } = getQuery(e)
  return {
    logoUrl: `logo/logo_${id}.png`,
    name: 'Наследие',
    phone: '+71234567890',
  }
})
