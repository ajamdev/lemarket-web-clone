import type { Stags } from '../type/stags'

export const STAGS: Stags[] = [
  {
    description:
      'Es el tiempo que los equipos de ventas dedican a cerrar negocios.',
    classList: 'time',
  },
  {
    description:
      'De los compradores ya decidio su compra antes de conectar con un vendedor.',
    classList: 'compradores',
  },
  {
    description: 'De los correos y llamadas en frio no son contestados.',
    classList: 'correos',
  },
  {
    description:
      'De las ventas requieren 5 llamadas de seguimiento tras una reunion.',
    classList: 'seguimiento',
  },
]