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

export const fetchProducts = async () => {
  const res = await axios.post("http://localhost:1337/graphql", {
    query: `
        query{
            products(pagination: { page: 1, pageSize: 15 }){
            data{
                id
                attributes{
                name
                title
                price
                display
                discount
                displayImage{
                    data{
                      id
                      attributes{
                        url
                      }
                    }
                  }
                descriptionImage{
                    data{
                    id
                    attributes{
                        url
                    }
                    }
                }
                productImage{
                    data{
                    id
                    attributes{
                        url
                    }
                    }
                }
                variation{
                    id
                    color
                    quantity
                    image{
                    data{
                        id
                        attributes{
                        url
                        }
                    }
                    }
                }
                category{
                    data{
                    id
                    attributes{
                    categoryName
                    }
                    }
                }
                brand{
                    data{
                    id
                    attributes{
                        name
                        brandImage{
                        data{
                            id
                            attributes{
                            url
                            }
                        }
                        }
                    }
                    }
                }
                ratings{
                    data{
                    id
                    attributes{
                        rating
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
