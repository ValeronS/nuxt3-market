import type { AgentPerson } from '~/utils/types'

export default defineEventHandler(() => {
  const agents: AgentPerson[] = [
    {
      id: '1',
      name: 'Дмитрий Хитрый',
      imageUrl: 'avatar/avatar_1.png',
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
      rating: 4.3,
      reviewCount: 19,
      reviewStatus: 'approved',
    },
    {
      id: '2',
      name: 'Апполинарий Землеперекопский',
      imageUrl: 'avatar/avatar_2.png',
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей.',
      rating: null,
      reviewCount: 0,
      reviewStatus: 'approved',
    },
    {
      id: '3',
      name: 'Фёдор Сумкин',
      imageUrl: 'avatar/avatar_3.png',
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
      rating: 4.3,
      reviewCount: 198,
      reviewStatus: 'onReview',
    },
    {
      id: '4',
      name: 'Василий Копушин',
      imageUrl: 'avatar/avatar_4.png',
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
      rating: 4.9,
      reviewCount: 1083,
      reviewStatus: 'approved',
    },
    {
      id: '5',
      name: 'Феофан Кусакин',
      imageUrl: 'avatar/avatar_5.png',
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
      rating: 4.9,
      reviewCount: 1083,
      reviewStatus: 'onReview',
    },
    {
      id: '6',
      name: 'Василиса Землеперекопская',
      imageUrl: 'avatar/avatar_6.png',
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
      rating: 5,
      reviewCount: 103,
      reviewStatus: 'approved',
    },
    {
      id: '7',
      name: 'Без фотографии',
      imageUrl: '',
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
      rating: 2,
      reviewCount: 1,
      reviewStatus: 'onReview',
    },
  ]
  return agents
})
