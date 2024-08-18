import request, {gql} from "graphql-request"

const url = 'https://us-west-2.cdn.hygraph.com/content/clzwvl2pn00c407uq8355dzmi/master'

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        id
        name
        price
        seat
        publishedAt
        updatedAt
        createdAt
        carBrand
        carType
        image {
          url
        }
      }
    }
  `
  return await request(url, query);
}

export const getLocationList = async () => {
  const query = gql`
    query storeLocationLists {
      storeLocations {
        address
        publishedAt
        updatedAt
        createdAt
      }
    }
  `
  return await request(url, query);
}

