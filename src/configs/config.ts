 export const config = {
    microservices: {
        auth: `${process.env.BASE_URL}:${process.env.PORT_AUTH}`,
        users: `${process.env.BASE_URL}:${process.env.PORT_USER}`,
        subscribeProducts: `${process.env.BASE_URL}:${process.env.PORT_SUBSCRIBED_PRODUCTS}`,
      },
 }