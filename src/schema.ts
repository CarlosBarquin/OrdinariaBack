import { gql } from "graphql_tag";

export const typeDefs = gql`
  type Character {
    id: Int!
    name : String!
    status : String!
    gender : String!
    type : String!
    species : String!
    created : String!
    url : String!
    image : String!
    episode : [Episode!]!
    origin : Location!
    location : Location!
  }

  type Episode {
    id : Int!
    name : String!
    air_date : String!
    episode : String!
    characters : [Character!]!
    url : String!
    created : String!
  }

  type Location {
    id : Int!
    name : String!
    url : String!
    type : String!
    dimension : String!
    created : String!
    residents : [Character!]!
  }

  type Query {
    test : String!
    character(id: ID!): Character 
    charactersByIds(ids: [ID!]!): [Character] 
  }

`;
