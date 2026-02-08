type SystemId =
  |'01'
  |'02'
  |'03'
  |'04'

type SystemIconName =
  | 'book'
  | 'graduation-cap'
  | 'rocket'
  | 'heart-handshake'

export interface System {
  id: SystemId
  iconName: SystemIconName
  title: string
  description:string
}