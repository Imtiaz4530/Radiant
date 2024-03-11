import axios from "axios";

export const fetchCatagories = async () => {
  const res = await axios.post("http://localhost:1337/graphql", {
    query: `
        query{
            categories{
            data{
                id
                attributes{
                categoryName
                categoryImage{
                    data{
                    id
                    attributes{
                        alternativeText
                        width
                        height
                        url
                        size
                    }
                    }
                }
                }
            }
            }
        }
        `,
  });

  return res.data?.data;
};

// import axios from "axios";

// export const fetchProducts = async () => {
//   const res = await axios.post("http://localhost:1337/graphql", {
//     query: `
//         query{
//           products{
//             data{
//               id
//               attributes{
//                 name
//                 description
//                 price
//                 Variation{
//                     id
//                     color
//                     quantity
//                     productImage {
//                       data{
//                         attributes{
//                           url
//                         }
//                       }
//                     }
//                   }
//               }
//             }
//           }
//         }
//         `,
//   });

//   return res.data?.data;
// };

// export const fetchProduct = async (id) => {
//   const res = await axios.post("http://localhost:1337/graphql", {
//     query: `
//         query{
//           product(id: ${id}){
//             data{
//               id
//               attributes{
//                 name
//                 description
//                 price
//                 Variation{
//                     id
//                     color
//                     quantity
//                     productImage {
//                       data{
//                         attributes{
//                           url
//                         }
//                       }
//                     }
//                   }
//               }
//             }
//           }
//         }
//         `,
//   });

//   return res.data?.data;
// };
