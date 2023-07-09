const SHOP_DATA =  [
    {
        id: 1,
        title: 'hats',
        routeName : 'hats',
        items : [
            {
                id : 1,
                name : 'blue-beanie',
                imageUrl : `${process.env.PUBLIC_URL}/resources/static/images/shop-img/hats/blue-beanie.png`,
                price: 25
            },
            {
                id : 2,
                name : 'blue-snapback',
                imageUrl : `${process.env.PUBLIC_URL}/resources/static/images/shop-img/hats/blue-snapback.png`,
                price: 18
            },
            {
                id : 3,
                name : 'brown-brim',
                imageUrl : `${process.env.PUBLIC_URL}/resources/static/images/shop-img/hats/brown-brim.png`,
                price : 23
            },
            {
                id : 4,
                name : 'brown-cowboy',
                imageUrl : `${process.env.PUBLIC_URL}/resources/static/images/shop-img/hats/brown-cowboy.png`,
                price : 34
            },
            {
                id : 5,
                name : 'green-beanie',
                imageUrl : `${process.env.PUBLIC_URL}/resources/static/images/shop-img/hats/green-beanie.png`,
                price : 32
            },
            {
                id : 6,
                name : 'gray-brim',
                imageUrl : `${process.env.PUBLIC_URL}/resources/static/images/shop-img/hats/gray-brim.png`,
                price : 13
            },
            {
                id : 7,
                name : 'palm-tree-cap',
                imageUrl : `${process.env.PUBLIC_URL}/resources/static/images/shop-img/hats/palm-tree-cap.png`,
                price: 17
            },
            {
                id : 8,
                name : 'red-beanie',
                imageUrl : `${process.env.PUBLIC_URL}/resources/static/images/shop-img/hats/red-beanie.png`,
                price : 19
            },
            {
                id : 9,
                name : 'wolf-cap',
                imageUrl : `${process.env.PUBLIC_URL}/resources/static/images/shop-img/hats/wolf-cap.png`,
                price : 20
            }
        ]
    }, 
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/sneakers/adidas-nmd.png`,
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/sneakers/yeezy.png`,
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/sneakers/black-converse.png`,
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/sneakers/white-nike-high-tops.png`,
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/sneakers/nikes-red.png`,
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/sneakers/nike-brown.png`,
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/sneakers/nike-funky.png`,
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/sneakers/timberlands.png`,
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/jackets/black-shearling.png`,
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/jackets/blue-jean-jacket.png`,
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/jackets/grey-jean-jacket.png`,
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/jackets/brown-shearling.png`,
          price: 165
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/jackets/brown-trench.png`,
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/womens/blue-tank.png`,
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/womens/floral-blouse.png`,
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/womens/floral-skirt.png`,
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/womens/red-polka-dot-dress.png`,
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/womens/striped-sweater.png`,
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/womens/yellow-track-suit.png`,
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/womens/white-vest.png`,
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/mens/camo-vest.png`,
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/mens/floral-shirt.png`,
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Longsleeve',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/mens/long-sleeve.png`,
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/mens/pink-shirt.png`,
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/mens/roll-up-jean-shirt.png`,
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl: `${process.env.PUBLIC_URL}/resources/static/images/shop-img/mens/polka-dot-shirt.png`,
          price: 25
        }
      ]
    }
  ];

  export default SHOP_DATA;  
