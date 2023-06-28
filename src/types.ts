export type Character = {
  id : number,
  status : string,
  species :string
  type : string
  gender : string
  origin : Location
  location : Location
  image : string
  url : string
  created : string
  episode: string[]
}

export type Location = {
  id : number
  name : string
  url : string
  type : string
  dimension : string
  created : string 
  residents : string[]
}

export type Episode = {
  id : number
  name : string
  air_date : string
  episode : string
  characters : string[]
  url : string
  created : string

}