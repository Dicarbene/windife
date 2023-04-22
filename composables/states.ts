interface user { 'id': user; 'name': string; 'password': string; 'avatar': null | string; 'createdAt': string; 'updatedAt': string }

export const useCounter = () => useState<number>('counter', () => 0)
export const useColor = () => useState<string>('color', () => 'pink')
export const useUserStore = () => useState<null | user>('user', () => null)
export const useUserUnitStore = () => useState<any>('userUnit', () => null)
