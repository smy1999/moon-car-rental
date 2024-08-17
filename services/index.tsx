import request, {gql} from "graphql-request"

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
  const result = await request('https://us-west-2.cdn.hygraph.com/content/clzwvl2pn00c407uq8355dzmi/master', query);
  return result;
}

