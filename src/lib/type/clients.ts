type ClientName =
  | 'argos'
  | 'avi'
  | 'camacol'
  | 'cct'
  | 'cerrejon'
  | 'clouxter'
  | 'danco'
  | 'esmt'
  | 'ficci'
  | 'gns'
  | 'griffith'
  | 'kondor'
  | 'mgm'
  | 'muebles-y-disenos'
  | 'mutant'
  | 'open-english'
  | 'skandia'
  | 'telecable'
  | 'vini'
  | 'xkale'

export interface Client {
  name: ClientName
  icon: {
    name: any
  }
}