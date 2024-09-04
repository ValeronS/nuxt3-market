import type { Locally } from '~/utils/types'

// для исключения ошибки доступа к localStorage из серверной части приложения
export default defineNuxtPlugin(() => {
  return {
    provide: {
      locally: {
        getItem(item: string): string | null | undefined {
          if (import.meta.client) {
            return localStorage.getItem(item)
          } else {
            return undefined
          }
        },

        setItem(item: string, value: string): void {
          if (import.meta.client) {
            localStorage.setItem(item, value)
          }
        },
      } as Locally,
    },
  }
})
