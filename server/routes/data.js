const data = [
  {
    product_name: 'Avocado',
    category: 'Fruits and Vegetables',
    description:
      'A creamy and nutritious fruit with a green, pebbly skin and a large seed, commonly used in salads, spreads, and smoothies.',
    image_url: 'https://5.imimg.com/data5/VR/LB/MY-58843567/organic-avocado.jpg',
  },
  {
    product_name: 'Apple',
    category: 'Fruits and Vegetables',
    description:
      'A crisp and juicy fruit with a sweet or tart flavor, commonly eaten fresh or used in various culinary applications like pies and sauces.',
    image_url:
      'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg',
  },
  {
    product_name: 'Banana',
    category: 'Fruits and Vegetables',
    description:
      'A long, curved fruit with a yellow skin and soft, creamy flesh, rich in potassium and commonly eaten fresh or used in baking and smoothies.',
    image_url:
      'https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-99478112.jpg',
  },
  {
    product_name: 'Carrot',
    category: 'Fruits and Vegetables',
    description:
      'A crunchy and sweet root vegetable with an orange color, commonly eaten raw, cooked, or juiced.',
    image_url:
      'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg',
  },
  {
    product_name: 'Broccoli',
    category: 'Fruits and Vegetables',
    description:
      'A nutritious green vegetable with a compact head of clustered florets and a thick, edible stalk, commonly eaten raw or cooked.',
    image_url:
      'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2Farchive%2Fd852987f86aeae8b65926f9e7a260c28285ea744',
  },
  {
    product_name: 'Orange',
    category: 'Fruits and Vegetables',
    description:
      'A round citrus fruit with a bright orange skin and juicy segments, commonly eaten fresh or juiced.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg',
  },
  {
    product_name: 'Lettuce',
    category: 'Fruits and Vegetables',
    description:
      'A leafy green vegetable with crisp leaves, commonly used as a base for salads and sandwiches.',
    image_url:
      'https://www.bhg.com/thmb/oL0DwR0DXrhFynA2y-oiY-nkCbg=/1878x0/filters:no_upscale():strip_icc()/tango-oakleaf-lettuce-c6f6417e-4cffa63034624d96a9e9ec9a3fe158f9.jpg',
  },
  {
    product_name: 'Grapes',
    category: 'Fruits and Vegetables',
    description:
      'Small, juicy fruits with a sweet or tart flavor, commonly eaten fresh or used in making wine, jams, and juices.',
    image_url:
      'https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?cs=srgb&dl=pexels-pixabay-60021.jpg&fm=jpg',
  },
  {
    product_name: 'Tomato',
    category: 'Fruits and Vegetables',
    description:
      'A juicy, red fruit with a slightly sour flavor, commonly used in cooking and salads.',
    image_url:
      'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fHww',
  },
  {
    product_name: 'Bell Pepper',
    category: 'Fruits and Vegetables',
    description:
      'A colorful and crunchy vegetable with a mild, sweet flavor, commonly used in salads, stir-fries, and stuffed dishes.',
    image_url:
      'https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1901644783.jpg?sfvrsn=1986920b_0',
  },
  {
    product_name: 'Coffee',
    category: 'Beverages',
    description: 'A classic brewed beverage made from roasted coffee beans, typically served hot.',
    image_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/1200px-Roasted_coffee_beans.jpg',
  },
  {
    product_name: 'Tea',
    category: 'Beverages',
    description:
      'An aromatic beverage prepared by pouring hot or boiling water over cured or fresh tea leaves.',
    image_url:
      'https://www.blueberryagro.com/wp-content/uploads/2020/09/instant-black-tea-powder-285.jpg',
  },
  {
    product_name: 'Orange Juice',
    category: 'Beverages',
    description: 'A refreshing beverage made from freshly squeezed oranges, rich in vitamin C.',
    image_url:
      'https://media.istockphoto.com/id/915657126/photo/orange-juice-glass-jar-shot-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=rlj0FwRDQOAV_j8-MUQntzIj8fZegbMewj22nNXxiYc=',
  },
  {
    product_name: 'Cola',
    category: 'Beverages',
    description: 'A carbonated soft drink, usually with a sweet flavor and containing caffeine.',
    image_url:
      'https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg',
  },
  {
    product_name: 'Milk',
    category: 'Beverages',
    description:
      'A nutritious liquid produced by mammals to feed their young, often consumed by humans as a beverage.',
    image_url:
      'https://www.parents.com/thmb/qKThoOlGAzJwGZ-moTTGQVFRvhg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Grass-Fed-vs-Organic-Milk-9fff118133c14e578c2379ed86888817.jpg',
  },
  {
    product_name: 'Water',
    category: 'Beverages',
    description:
      'A transparent, tasteless, odorless, and nearly colorless chemical substance, essential for all forms of life.',
    image_url:
      'https://www.thespruceeats.com/thmb/4Uxr_CKC7aR-UhEicIvVqLaiO0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488636063-5ab2dbd8a8ff48049cfd36e8ad841ae5.jpg',
  },
  {
    product_name: 'Lemonade',
    category: 'Beverages',
    description:
      'A sweet and tart beverage made from lemon juice, water, and sugar, often served cold.',
    image_url:
      'https://www.allrecipes.com/thmb/-sGgcEhnlIhqr0legC4Q7TPkRhU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/32385-best-lemonade-ever-DDMFS-4x3-8cef7761205e417499c89eb178e5ba2b.jpg',
  },
  {
    product_name: 'Iced Tea',
    category: 'Beverages',
    description:
      'Chilled tea served over ice, often flavored with lemon, sugar, or other additives.',
    image_url:
      'https://www.nestleprofessional.in/sites/default/files/2021-08/Masala-Iced-Tea-Thumbnail.jpg',
  },
  {
    product_name: 'Smoothie',
    category: 'Beverages',
    description: 'A thick, smooth beverage made from blended fruits, vegetables, yogurt, or milk.',
    image_url:
      'https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*',
  },
  {
    product_name: 'Hot Chocolate',
    category: 'Beverages',
    description:
      'A warm, chocolate-flavored beverage made from melted chocolate or cocoa powder mixed with milk or water.',
    image_url: 'https://food-images.files.bbci.co.uk/food/recipes/hot_chocolate_78843_16x9.jpg',
  },
  {
    product_name: 'Beef',
    category: 'Meat',
    description:
      'The culinary name for meat from cattle, typically taken from cows, steers, or bulls, commonly used in various dishes like burgers, stews, and steaks.',
    image_url: 'https://example.com/beef_image.jpg',
  },
  {
    product_name: 'Chicken',
    category: 'Meat',
    description:
      'The culinary name for domesticated fowl raised for meat, commonly used in various dishes like curries, roasts, and salads.',
    image_url:
      'https://www.licious.in/blog/wp-content/uploads/2022/03/Chicken-Curry-Cut-min-1-750x750.png',
  },
  {
    product_name: 'Pork',
    category: 'Meat',
    description:
      'The culinary name for meat from domestic pigs, commonly used in various dishes like sausages, chops, and roasts.',
    image_url: 'https://assets.farmison.com/images/recipe-detail-1380/83392-835-flat-pork-loin.jpg',
  },
  {
    product_name: 'Lamb',
    category: 'Meat',
    description:
      'The culinary name for meat from young sheep, commonly used in various dishes like kebabs, curries, and roasts.',
    image_url:
      'https://www.checkyourfood.com/content/blob/Ingredients/Lamb-cutlets-bone-in-nutritional-information-calories.jpg',
  },
  {
    product_name: 'Turkey',
    category: 'Meat',
    description:
      'The culinary name for meat from domesticated turkeys, commonly consumed as a festive dish, especially during Thanksgiving and Christmas.',
    image_url:
      'https://www.allrecipes.com/thmb/cVQL59QQ70ikOvtpcZU3TmQRPkg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-166160-juicy-thanksgiving-turkey-VAT-4958-4x3-e9fdc719770d4661b5d831f958e6eb78.jpg',
  },
  {
    product_name: 'Salmon',
    category: 'Fish',
    description:
      'A flavorful and fatty fish with a pinkish-orange flesh, rich in omega-3 fatty acids, commonly grilled, baked, or smoked.',
    image_url:
      'https://www.licious.in/blog/wp-content/uploads/2022/09/Shutterstock_1191507805-1000-%C3%97-1000-750x750.jpg',
  },
  {
    product_name: 'Tuna',
    category: 'Fish',
    description:
      'A large and flavorful fish with dark flesh, commonly used in various dishes like salads, sandwiches, and sushi.',
    image_url:
      'https://www.bigbasket.com/media/uploads/p/l/40227733_1-fresho-yellofin-tuna-steaks.jpg',
  },
  {
    product_name: 'Cod',
    category: 'Fish',
    description:
      'A mild-flavored and flaky white fish, commonly used in various dishes like fish and chips, stews, and soups.',
    image_url:
      'https://static.wixstatic.com/media/f5a413_5996bff76c6a49f9ba2b918e6af93d65~mv2.jpg/v1/fill/w_480,h_312,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f5a413_5996bff76c6a49f9ba2b918e6af93d65~mv2.jpg',
  },
  {
    product_name: 'Trout',
    category: 'Fish',
    description:
      'A freshwater fish with tender flesh and a delicate flavor, commonly grilled, baked, or pan-fried.',
    image_url:
      'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/t/r/trout_himalayan.jpeg',
  },
  {
    product_name: 'Haddock',
    category: 'Fish',
    description:
      'A mild-flavored white fish with firm flesh, commonly used in various dishes like fish cakes, pies, and chowders.',
    image_url: 'https://assets.precisionnutrition.com/2016/07/Haddock.jpg',
  },
  {
    product_name: 'Milk',
    category: 'Dairy',
    description:
      'A nutritious liquid produced by mammals to feed their young, often consumed by humans as a beverage.',
    image_url:
      'https://www.parents.com/thmb/qKThoOlGAzJwGZ-moTTGQVFRvhg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Grass-Fed-vs-Organic-Milk-9fff118133c14e578c2379ed86888817.jpg',
  },
  {
    product_name: 'Cheese',
    category: 'Dairy',
    description:
      'A flavorful and versatile dairy product made from curdled or fermented milk, commonly used in various dishes like sandwiches, pizzas, and cheese boards.',
    image_url:
      'https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg',
  },
  {
    product_name: 'Yogurt',
    category: 'Dairy',
    description:
      'A creamy and tangy dairy product made from fermented milk, commonly eaten as a snack or used in cooking and baking.',
    image_url:
      'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2020/12/30182003/shutterstock_726271063-1.jpg',
  },
  {
    product_name: 'Butter',
    category: 'Dairy',
    description:
      'A smooth and creamy dairy product made by churning milk or cream, commonly used in cooking, baking, and as a spread.',
    image_url:
      'https://www.southernliving.com/thmb/VsoCB_mL_LI8ry98KRvuO1nSazY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How_To_Soften_Butter_011-2000-70b8e7a4108b482ea893a89759574193.jpg',
  },
  {
    product_name: 'Eggs',
    category: 'Dairy',
    description:
      'The culinary name for the reproductive bodies laid by birds, commonly used in various dishes like omelets, quiches, and baked goods.',
    image_url:
      'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/02/20141905/shutterstock_1282068550-1-8.jpg',
  },
  {
    product_name: 'Bread',
    category: 'Bakery',
    description:
      'A staple food made from flour, water, yeast, and salt, commonly baked and consumed as a sliced loaf.',
    image_url: 'https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg',
  },
  {
    product_name: 'Baguette',
    category: 'Bakery',
    description:
      'A long, narrow loaf of French bread with a crisp crust and chewy interior, commonly eaten fresh or used for making sandwiches.',
    image_url:
      'https://www.biggerbolderbaking.com/wp-content/uploads/2023/07/No-Knead-Baguettes-thumbnail2-scaled.jpg',
  },
  {
    product_name: 'Croissant',
    category: 'Bakery',
    description:
      'A buttery and flaky pastry made from layered dough, commonly eaten as a breakfast pastry or used in sandwiches.',
    image_url: 'https://www.linoui.in/cdn/shop/articles/Linoui_Blogs.png?v=1671109119',
  },
  {
    product_name: 'Muffin',
    category: 'Bakery',
    description:
      'A small, soft, and sweet baked good with a domed top and a tender crumb, commonly eaten as a snack or breakfast item.',
    image_url:
      'https://static01.nyt.com/images/2023/09/28/multimedia/ya-brown-butter-maple-muffins-zlkq/ya-brown-butter-maple-muffins-zlkq-superJumbo.jpg',
  },
  {
    product_name: 'Cookie',
    category: 'Bakery',
    description:
      'A sweet and baked treat made from dough, commonly containing ingredients like flour, sugar, butter, and chocolate chips.',
    image_url:
      'https://www.inspiredtaste.net/wp-content/uploads/2021/10/Soft-and-Chewy-Chocolate-Chip-Cookie-Recipe-1200.jpg',
  },
  {
    product_name: 'Cake',
    category: 'Bakery',
    description:
      'A sweet and baked dessert made from flour, sugar, eggs, and flavorings, commonly frosted and decorated for celebrations.',
    image_url:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/04/13/0/FNK_Perfect-Chocolate-Cake_H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1618334139530.jpeg',
  },
  {
    product_name: 'Toilet Paper',
    category: 'Household Items',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image_url: 'https://c.ndtvimg.com/2023-03/s87hvnl8_toilet-paper_625x300_14_March_23.jpg',
  },
  {
    product_name: 'Laundry Detergent',
    category: 'Household Items',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image_url: 'https://cdn.mos.cms.futurecdn.net/JSevUziNYH2EQCo7cXsUzk.jpg',
  },
  {
    product_name: 'Dish Soap',
    category: 'Household Items',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image_url: 'https://images.herzindagi.info/image/2023/Nov/dishwashing-liquid-soap.jpg',
  },
  {
    product_name: 'Paper Towels',
    category: 'Household Items',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image_url:
      'https://www.cnet.com/a/img/resize/9e0599586fce4fe071e1ced5eed6cf0691374a91/hub/2020/03/31/b6a01a45-51e4-4648-a4f6-2c8cbe379439/istock-1141161554.jpg?auto=webp&fit=crop&height=900&width=1200',
  },
  {
    product_name: 'Trash Bags',
    category: 'Household Items',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image_url:
      'https://www.bigbasket.com/media/uploads/p/m/40137710_19-bb-home-oxo-biodegradable-garbage-bag-medium-blue.jpg',
  },
  {
    product_name: 'Rice',
    category: 'Grains and Pasta',
    description:
      'A staple food grain, commonly consumed as a staple food in many parts of the world and used in various dishes like stir-fries, curries, and sushi.',
    image_url:
      'https://www.hindustantimes.com/ht-img/img/2023/05/13/1600x900/parboiled_rice_1683969590180_1683969607293.jpg',
  },
  {
    product_name: 'Quinoa',
    category: 'Grains and Pasta',
    description:
      'A nutritious grain-like seed with a slightly nutty flavor and a fluffy texture, commonly used as a substitute for rice or couscous.',
    image_url: 'https://nuttyyogi.com/cdn/shop/products/Quinoa_White.jpg?v=1677652891',
  },
  {
    product_name: 'Oats',
    category: 'Grains and Pasta',
    description:
      'A nutrient-rich cereal grain with multiple health benefits, commonly eaten as oatmeal or used in baking.',
    image_url: 'https://5.imimg.com/data5/XJ/WE/AP/SELLER-2968665/rolled-oats.jpg',
  },
  {
    product_name: 'Bulgur',
    category: 'Grains and Pasta',
    description:
      'A whole wheat grain that has been cracked and partially pre-cooked, commonly used in various dishes like salads, pilafs, and soups.',
    image_url: 'https://vidarbergum.com/wp-content/uploads/2022/01/bulgur-wheat-1.jpg',
  },
  {
    product_name: 'Biscuit',
    category: 'Grains and Pasta',
    description:
      'A small, sweet or savory baked product made from flour, sugar, and fat, commonly eaten as a snack or served with tea or coffee.',
    image_url: 'https://static.toiimg.com/thumb/62403305.cms?imgsize=566439&width=800&height=800',
  },
  {
    product_name: 'Chocolate',
    category: 'Sweets',
    description:
      'A sweet, brown food product made from cocoa beans, commonly used as a flavoring ingredient in various desserts and confectionery.',
    image_url:
      'https://www.thespruceeats.com/thmb/FhHcgQni8lgV0griUeDJMTAszxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate_hero1-d62e5444a8734f8d8fe91f5631d51ca5.jpg',
  },
  {
    product_name: 'Candy',
    category: 'Sweets',
    description:
      'A sweet confection made from sugar, flavorings, and often chocolate or fruit, commonly eaten as a treat or snack.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Candy_in_Damascus.jpg',
  },
  {
    product_name: 'Ice Cream',
    category: 'Sweets',
    description:
      'A frozen dessert made from cream, sugar, and flavorings, commonly eaten as a treat or dessert.',
    image_url:
      'https://assets-global.website-files.com/5e9ebc3fff165933f19fbdbe/61b31c9d289e22335b6753b2_Ice%20Cream%202.jpg',
  },
  {
    product_name: 'Cake',
    category: 'Sweets',
    description:
      'A sweet and baked dessert made from flour, sugar, eggs, and flavorings, commonly frosted and decorated for celebrations.',
    image_url: 'https://bakingamoment.com/wp-content/uploads/2023/07/IMG_2051-ice-cream-cake.jpg',
  },
  {
    product_name: 'Donut',
    category: 'Sweets',
    description:
      'A small, sweet, fried dough confection, commonly ring-shaped and topped with icing, glaze, or sprinkles.',
    image_url: 'https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg',
  },
  {
    product_name: 'Brownie',
    category: 'Sweets',
    description:
      'A rich, chocolate-flavored baked dessert, commonly dense and fudgy, often containing nuts or other additions.',
    image_url:
      'https://recipesblob.oetker.in/assets/0e7149831748458c9502e361e889f726/750x400/brownie-with-vanilla-ice-cream.jpg',
  },
];

export default data;
