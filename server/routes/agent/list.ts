import { agentsPersons } from '~/server/routes/data'

export default defineEventHandler(() => {
  // список всех агентов
  return agentsPersons
})
