import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'meals_ingredients',
      [
        {
          id_ingredient: 1,
          str_ingredient: 'Chicken',
          str_description: 'The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th–2nd centuries BC).\r\n\r\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the \"bird that gives birth every day\" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III.',
          str_type: null
        },
        {
          id_ingredient: 2,
          str_ingredient: 'Salmon',
          str_description: 'Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.\r\n\r\nTypically, salmon are anadromous: they hatch in fresh water, migrate to the ocean, then return to fresh water to reproduce. However, populations of several species are restricted to fresh water through their lives. Folklore has it that the fish return to the exact spot where they hatched to spawn. Tracking studies have shown this to be mostly true. A portion of a returning salmon run may stray and spawn in different freshwater systems; the percent of straying depends on the species of salmon. Homing behavior has been shown to depend on olfactory memory. Salmon date back to the Neogene.',
          str_type: null
        },
        {
          id_ingredient: 3,
          str_ingredient: 'Beef',
          str_description: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.',
          str_type: null
        },
        {
          id_ingredient: 4,
          str_ingredient: 'Pork',
          str_description: 'Pork is the culinary name for the flesh of a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC.\r\n\r\nPork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPig is the most popular meat in the Eastern and non-Muslim parts of Southeastern Asia (Indochina, Philippines, Singapore, East Timor) and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish, Muslim and Rastafarian dietary law, for religious reasons, with several suggested possible causes.',
          str_type: null
        },
        {
          id_ingredient: 5,
          str_ingredient: 'Avocado',
          str_description: 'The avocado, a tree with probable origin in South Central Mexico, is classified as a member of the flowering plant family Lauraceae. The fruit of the plant, also called an avocado (or avocado pear or alligator pear), is botanically a large berry containing a single large seed.\r\n\r\nAvocados are commercially valuable and are cultivated in tropical and Mediterranean climates throughout the world. They have a green-skinned, fleshy body that may be pear-shaped, egg-shaped, or spherical. Commercially, they ripen after harvesting. Avocado trees are partially self-pollinating, and are often propagated through grafting to maintain predictable fruit quality and quantity. In 2017, Mexico produced 34% of the world supply of avocados.',
          str_type: null
        },
        {
          id_ingredient: 9,
          str_ingredient: 'Apple Cider Vinegar',
          str_description: 'Apple cider vinegar, or cider vinegar, is a vinegar made from fermented apple juice, and used in salad dressings, marinades, vinaigrettes, food preservatives, and chutneys. It is made by crushing apples, then squeezing out the juice. Bacteria and yeast are added to the liquid to start the alcoholic fermentation process, which converts the sugars to alcohol. In a second fermentation step, the alcohol is converted into vinegar by acetic acid-forming bacteria (Acetobacter species). Acetic acid and malic acid combine to give vinegar its sour taste. Apple cider vinegar has no medicinal or nutritional value. There is no high-quality clinical evidence that regular consumption of apple cider vinegar helps to maintain or lose body weight, or is effective to manage blood glucose and lipid levels.',
          str_type: null
        },
        {
          id_ingredient: 10,
          str_ingredient: 'Asparagus',
          str_description: 'Asparagus, or garden asparagus, folk name sparrow grass, scientific name Asparagus officinalis, is a perennial flowering plant species in the genus Asparagus. Its young shoots are used as a spring vegetable.\r\n\r\nIt was once classified in the lily family, like the related Allium species, onions and garlic. However, genetic research places lilies, Allium, and asparagus in three separate families—the Liliaceae, Amaryllidaceae, and Asparagaceae, respectively—with the Amaryllidaceae and Asparagaceae being grouped together in the order Asparagales. Sources differ as to the native range of Asparagus officinalis, but generally include most of Europe and western temperate Asia. It is widely cultivated as a vegetable crop.',
          str_type: null
        },
        {
          id_ingredient: 11,
          str_ingredient: 'Aubergine',
          str_description: 'Eggplant (US, Australia), aubergine (UK), or brinjal (South Asia and South Africa) is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit.\r\n\r\nMost commonly purple, the spongy, absorbent fruit is used in various cuisines. Although often considered a vegetable, it is a berry by botanical definition. As a member of the genus Solanum, it is related to tomato and potato. Like the tomato, its skin and seeds can be eaten, but, like the potato, it is usually eaten cooked. Eggplant is nutritionally low in macronutrient and micronutrient content, but the capability of the fruit to absorb oils and flavors into its flesh through cooking expands its use in the culinary arts.\r\n\r\nIt was originally domesticated from the wild nightshade species thorn or bitter apple, S. incanum, probably with two independent domestications: one in South Asia, and one in East Asia.',
          str_type: null
        },
        {
          id_ingredient: 13,
          str_ingredient: 'Baby Plum Tomatoes',
          str_description: 'The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl (Aztec language) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico. The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.',
          str_type: null
        },
        {
          id_ingredient: 14,
          str_ingredient: 'Bacon',
          str_description: 'Bacon is a type of salt-cured pork. Bacon is prepared from several different cuts of meat, typically from the pork belly or from back cuts, which have less fat than the belly. It is eaten on its own, as a side dish (particularly in breakfasts), or used as a minor ingredient to flavour dishes (e.g., the club sandwich). Bacon is also used for barding and larding roasts, especially game, including venison and pheasant. The word is derived from the Old High German bacho, meaning \"buttock\", \"ham\" or \"side of bacon\", and is cognate with the Old French bacon.',
          str_type: null
        },
        {
          id_ingredient: 15,
          str_ingredient: 'Baking Powder',
          str_description: 'Baking powder is a dry chemical leavening agent, a mixture of a carbonate or bicarbonate and a weak acid. The base and acid are prevented from reacting prematurely by the inclusion of a buffer such as cornstarch. Baking powder is used to increase the volume and lighten the texture of baked goods. It works by releasing carbon dioxide gas into a batter or dough through an acid-base reaction, causing bubbles in the wet mixture to expand and thus leavening the mixture. The first single-acting baking powder was developed by Birmingham based food manufacturer Alfred Bird in England in 1843. The first double-acting baking powder was developed by Eben Norton Horsford in America in the 1860s.',
          str_type: null
        },
        {
          id_ingredient: 16,
          str_ingredient: 'Balsamic Vinegar',
          str_description: 'Balsamic vinegar (Italian: aceto balsamico), occasionally shortened to balsamic, is a very dark, concentrated, and intensely flavoured vinegar originating in Italy, made wholly or partially from grape must. Grape must is freshly crushed grape juice with all the skins, seeds and stems.',
          str_type: null
        },
        {
          id_ingredient: 17,
          str_ingredient: 'Basil',
          str_description: 'Basil, also called great basil, is a culinary herb of the family Lamiaceae (mints).\r\n\r\nBasil is native to tropical regions from central Africa to Southeast Asia. It is a tender plant, and is used in cuisines worldwide. Depending on the species and cultivar, the leaves may taste somewhat like anise, with a strong, pungent, often sweet smell.',
          str_type: null
        },
        {
          id_ingredient: 18,
          str_ingredient: 'Basil Leaves',
          str_description: 'Basil, also called great basil, is a culinary herb of the family Lamiaceae (mints).\r\n',
          str_type: null
        },
        {
          id_ingredient: 19,
          str_ingredient: 'Basmati Rice',
          str_description: 'Basmati is a variety of long, slender-grained aromatic rice which is traditionally from the Indian subcontinent. As of 2018-19, India exported to over 90% of the overseas basmati rice market, while Pakistan accounted for the remainder, according to the Indian state-run Agricultural and Processed Food Products Export Development Authority  and the Pakistan government-run Economic Survey of Pakistan. Many countries use domestically grown basmati rice crops; however, basmati is geographically exclusive to select districts of India, Pakistan, Nepal and Bangladesh.',
          str_type: null
        },
        {
          id_ingredient: 20,
          str_ingredient: 'Bay Leaf',
          str_description: 'The bay leaf is an aromatic leaf commonly used in cooking. It can be used whole, or as dried and ground.',
          str_type: null
        },
        {
          id_ingredient: 21,
          str_ingredient: 'Bay Leaves',
          str_description: 'The bay leaf is an aromatic leaf commonly used in cooking. It can be used whole, or as dried and ground.',
          str_type: null
        },
        {
          id_ingredient: 23,
          str_ingredient: 'Beef Brisket',
          str_description: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.',
          str_type: null
        },
        {
          id_ingredient: 24,
          str_ingredient: 'Beef Fillet',
          str_description: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.',
          str_type: null
        },
        {
          id_ingredient: 25,
          str_ingredient: 'Beef Gravy',
          str_description: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.',
          str_type: null
        },
        {
          id_ingredient: 26,
          str_ingredient: 'Beef Stock',
          str_description: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.',
          str_type: null
        },
        {
          id_ingredient: 27,
          str_ingredient: 'Bicarbonate Of Soda',
          str_description: 'Sodium bicarbonate, commonly known as baking soda, is a chemical compound with the formula NaHCO3. It is a salt composed of a sodium cation (Na+) and a bicarbonate anion (HCO3−). Sodium bicarbonate is a white solid that is crystalline, but often appears as a fine powder. It has a slightly salty, alkaline taste resembling that of washing soda (sodium carbonate). The natural mineral form is nahcolite. It is a component of the mineral natron and is found dissolved in many mineral springs.',
          str_type: null
        },
        {
          id_ingredient: 28,
          str_ingredient: 'Biryani Masala',
          str_description: 'Biryani, also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It can be compared to mixing a curry, later combining it with semi-cooked rice separately. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan. It is made with Indian spices, rice, meat (chicken, goat, beef, lamb, prawn, or fish), vegetables or eggs.',
          str_type: null
        },
        {
          id_ingredient: 29,
          str_ingredient: 'Black Pepper',
          str_description: 'Black pepper (Piper nigrum) is a flowering vine in the family Piperaceae, cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning. When fresh and fully mature, it is about 5 mm (0.20 in) in diameter and dark red, and contains a single seed, like all drupes. Peppercorns and the ground pepper derived from them may be described simply as pepper, or more precisely as black pepper (cooked and dried unripe fruit), green pepper (dried unripe fruit), or white pepper (ripe fruit seeds).\r\n\r\nBlack pepper is native to present-day Kerala in Southwestern India, and is extensively cultivated there and elsewhere in tropical regions. Vietnam is the world\'s largest producer and exporter of pepper, producing 34% of the world\'s crop, as of 2013.',
          str_type: null
        },
        {
          id_ingredient: 30,
          str_ingredient: 'Black Treacle',
          str_description: 'Molasses (American English) or black treacle (British English) is a viscous product resulting from refining sugarcane or sugar beets into sugar. Molasses varies by amount of sugar, method of extraction, and age of plant. Sugarcane molasses is primarily used for sweetening and flavoring foods in the United States, Canada, and elsewhere. Molasses is a defining component of fine commercial brown sugar.\r\n\r\nSweet sorghum syrup may be colloquially called \"sorghum molasses\" in the southern United States.[2][3] Similar products include honey, maple syrup, corn syrup, and invert syrup. Most of these alternative syrups have milder flavors.',
          str_type: null
        },
        {
          id_ingredient: 31,
          str_ingredient: 'Borlotti Beans',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 32,
          str_ingredient: 'Bowtie Pasta',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 33,
          str_ingredient: 'Bramley Apples',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 34,
          str_ingredient: 'Brandy',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 35,
          str_ingredient: 'Bread',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 36,
          str_ingredient: 'Breadcrumbs',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 37,
          str_ingredient: 'Broccoli',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 38,
          str_ingredient: 'Brown Lentils',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 39,
          str_ingredient: 'Brown Rice',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 40,
          str_ingredient: 'Brown Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 41,
          str_ingredient: 'Butter',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 43,
          str_ingredient: 'Cacao',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 44,
          str_ingredient: 'Cajun',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 45,
          str_ingredient: 'Canned Tomatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 46,
          str_ingredient: 'Cannellini Beans',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 47,
          str_ingredient: 'Cardamom',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 49,
          str_ingredient: 'Carrots',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 50,
          str_ingredient: 'Cashew Nuts',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 51,
          str_ingredient: 'Cashews',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 52,
          str_ingredient: 'Caster Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 53,
          str_ingredient: 'Cayenne Pepper',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 54,
          str_ingredient: 'Celeriac',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 55,
          str_ingredient: 'Celery',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 56,
          str_ingredient: 'Celery Salt',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 57,
          str_ingredient: 'Challots',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 58,
          str_ingredient: 'Charlotte Potatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 59,
          str_ingredient: 'Cheddar Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 60,
          str_ingredient: 'Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 61,
          str_ingredient: 'Cheese Curds',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 62,
          str_ingredient: 'Cherry Tomatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 63,
          str_ingredient: 'Chestnut Mushroom',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 65,
          str_ingredient: 'Chicken Breast',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 66,
          str_ingredient: 'Chicken Breasts',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 67,
          str_ingredient: 'Chicken Legs',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 68,
          str_ingredient: 'Chicken Stock',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 70,
          str_ingredient: 'Chicken Thighs',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 71,
          str_ingredient: 'Chickpeas',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 72,
          str_ingredient: 'Chili Powder',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 73,
          str_ingredient: 'Chilled Butter',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 74,
          str_ingredient: 'Chilli',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 75,
          str_ingredient: 'Chilli Powder',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 76,
          str_ingredient: 'Chinese Broccoli',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 77,
          str_ingredient: 'Chocolate Chips',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 78,
          str_ingredient: 'Chopped Onion',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 79,
          str_ingredient: 'Chopped Parsley',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 80,
          str_ingredient: 'Chopped Tomatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 81,
          str_ingredient: 'Chorizo',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 82,
          str_ingredient: 'Christmas Pudding',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 83,
          str_ingredient: 'Cilantro',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 84,
          str_ingredient: 'Cinnamon',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 85,
          str_ingredient: 'Cinnamon Stick',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 87,
          str_ingredient: 'Cloves',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 88,
          str_ingredient: 'Coco Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 89,
          str_ingredient: 'Cocoa',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 90,
          str_ingredient: 'Coconut Cream',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 91,
          str_ingredient: 'Coconut Milk',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 92,
          str_ingredient: 'Colby Jack Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 93,
          str_ingredient: 'Cold Water',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 94,
          str_ingredient: 'Condensed Milk',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 95,
          str_ingredient: 'Coriander',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 96,
          str_ingredient: 'Coriander Leaves',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 97,
          str_ingredient: 'Coriander Seeds',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 98,
          str_ingredient: 'Corn Tortillas',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 99,
          str_ingredient: 'Cornstarch',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 100,
          str_ingredient: 'Cream',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 101,
          str_ingredient: 'Creme Fraiche',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 102,
          str_ingredient: 'Cubed Feta Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 103,
          str_ingredient: 'Cucumber',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 104,
          str_ingredient: 'Cumin',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 105,
          str_ingredient: 'Cumin Seeds',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 106,
          str_ingredient: 'Curry Powder',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 107,
          str_ingredient: 'Dark Brown Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 108,
          str_ingredient: 'Dark Soft Brown Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 109,
          str_ingredient: 'Dark Soy Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 110,
          str_ingredient: 'Demerara Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 111,
          str_ingredient: 'Diced Tomatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 112,
          str_ingredient: 'Digestive Biscuits',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 113,
          str_ingredient: 'Dill',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 114,
          str_ingredient: 'Doner Meat',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 115,
          str_ingredient: 'Double Cream',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 116,
          str_ingredient: 'Dried Oregano',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 117,
          str_ingredient: 'Dry White Wine',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 119,
          str_ingredient: 'Egg Plants',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 120,
          str_ingredient: 'Egg Rolls',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 121,
          str_ingredient: 'Egg White',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 122,
          str_ingredient: 'Egg Yolks',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 123,
          str_ingredient: 'Eggs',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 124,
          str_ingredient: 'Enchilada Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 125,
          str_ingredient: 'English Mustard',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 126,
          str_ingredient: 'Extra Virgin Olive Oil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 127,
          str_ingredient: 'Fajita Seasoning',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 128,
          str_ingredient: 'Farfalle',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 130,
          str_ingredient: 'Fennel Bulb',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 131,
          str_ingredient: 'Fennel Seeds',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 132,
          str_ingredient: 'Fenugreek',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 133,
          str_ingredient: 'Feta',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 134,
          str_ingredient: 'Fish Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 135,
          str_ingredient: 'Flaked Almonds',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 136,
          str_ingredient: 'Flax Eggs',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 137,
          str_ingredient: 'Flour',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 138,
          str_ingredient: 'Flour Tortilla',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 139,
          str_ingredient: 'Floury Potatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 140,
          str_ingredient: 'Free-range Egg, Beaten',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 141,
          str_ingredient: 'Free-range Eggs, Beaten',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 142,
          str_ingredient: 'French Lentils',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 143,
          str_ingredient: 'Fresh Basil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 144,
          str_ingredient: 'Fresh Thyme',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 145,
          str_ingredient: 'Freshly Chopped Parsley',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 146,
          str_ingredient: 'Fries',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 147,
          str_ingredient: 'Full Fat Yogurt',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 148,
          str_ingredient: 'Garam Masala',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 149,
          str_ingredient: 'Garlic',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 150,
          str_ingredient: 'Garlic Clove',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 151,
          str_ingredient: 'Garlic Powder',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 152,
          str_ingredient: 'Garlic Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 153,
          str_ingredient: 'Ghee',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 154,
          str_ingredient: 'Ginger',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 155,
          str_ingredient: 'Ginger Cordial',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 156,
          str_ingredient: 'Ginger Garlic Paste',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 157,
          str_ingredient: 'Ginger Paste',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 158,
          str_ingredient: 'Golden Syrup',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 159,
          str_ingredient: 'Gouda Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 160,
          str_ingredient: 'Granulated Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 161,
          str_ingredient: 'Grape Tomatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 162,
          str_ingredient: 'Greek Yogurt',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 163,
          str_ingredient: 'Green Beans',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 165,
          str_ingredient: 'Green Chilli',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 166,
          str_ingredient: 'Green Olives',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 167,
          str_ingredient: 'Green Red Lentils',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 168,
          str_ingredient: 'Green Salsa',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 169,
          str_ingredient: 'Ground Almonds',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 170,
          str_ingredient: 'Ground Cumin',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 171,
          str_ingredient: 'Ground Ginger',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 172,
          str_ingredient: 'Gruyère',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 173,
          str_ingredient: 'Hard Taco Shells',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 175,
          str_ingredient: 'Harissa Spice',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 176,
          str_ingredient: 'Heavy Cream',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 177,
          str_ingredient: 'Honey',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 178,
          str_ingredient: 'Horseradish',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 179,
          str_ingredient: 'Hot Beef Stock',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 180,
          str_ingredient: 'Hotsauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 181,
          str_ingredient: 'Ice Cream',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 182,
          str_ingredient: 'Italian Fennel Sausages',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 183,
          str_ingredient: 'Italian Seasoning',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 184,
          str_ingredient: 'Jalapeno',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 185,
          str_ingredient: 'Jasmine Rice',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 186,
          str_ingredient: 'Jerusalem Artichokes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 187,
          str_ingredient: 'Kale',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 188,
          str_ingredient: 'Khus Khus',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 189,
          str_ingredient: 'King Prawns',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 190,
          str_ingredient: 'Kosher Salt',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 191,
          str_ingredient: 'Lamb',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 192,
          str_ingredient: 'Lamb Loin Chops',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 193,
          str_ingredient: 'Lamb Mince',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 194,
          str_ingredient: 'Lasagne Sheets',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 195,
          str_ingredient: 'Lean Minced Beef',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 196,
          str_ingredient: 'Leek',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 197,
          str_ingredient: 'Lemon',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 198,
          str_ingredient: 'Lemon Juice',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 199,
          str_ingredient: 'Lemon Zest',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 200,
          str_ingredient: 'Lemons',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 201,
          str_ingredient: 'Lettuce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 202,
          str_ingredient: 'Lime',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 203,
          str_ingredient: 'Little Gem Lettuce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 204,
          str_ingredient: 'Macaroni',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 205,
          str_ingredient: 'Mackerel',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 206,
          str_ingredient: 'Madras Paste',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 207,
          str_ingredient: 'Marjoram',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 208,
          str_ingredient: 'Massaman Curry Paste',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 209,
          str_ingredient: 'Medjool Dates',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 210,
          str_ingredient: 'Meringue Nests',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 211,
          str_ingredient: 'Milk',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 212,
          str_ingredient: 'Minced Garlic',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 213,
          str_ingredient: 'Miniature Marshmallows',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 214,
          str_ingredient: 'Mint',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 215,
          str_ingredient: 'Monterey Jack Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 216,
          str_ingredient: 'Mozzarella Balls',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 217,
          str_ingredient: 'Muscovado Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 218,
          str_ingredient: 'Mushrooms',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 219,
          str_ingredient: 'Mustard',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 220,
          str_ingredient: 'Mustard Powder',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 221,
          str_ingredient: 'Mustard Seeds',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 222,
          str_ingredient: 'Nutmeg',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 223,
          str_ingredient: 'Oil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 224,
          str_ingredient: 'Olive Oil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 226,
          str_ingredient: 'Onion Salt',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 227,
          str_ingredient: 'Onions',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 228,
          str_ingredient: 'Orange',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 229,
          str_ingredient: 'Orange Zest',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 230,
          str_ingredient: 'Oregano',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 231,
          str_ingredient: 'Oyster Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 232,
          str_ingredient: 'Paprika',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 233,
          str_ingredient: 'Parma Ham',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 234,
          str_ingredient: 'Parmesan',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 235,
          str_ingredient: 'Parmesan Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 236,
          str_ingredient: 'Parmigiano-reggiano',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 237,
          str_ingredient: 'Parsley',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 238,
          str_ingredient: 'Peanut Butter',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 239,
          str_ingredient: 'Peanut Oil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 240,
          str_ingredient: 'Peanuts',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 241,
          str_ingredient: 'Peas',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 242,
          str_ingredient: 'Pecorino',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 243,
          str_ingredient: 'Penne Rigate',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 244,
          str_ingredient: 'Pepper',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 245,
          str_ingredient: 'Pine Nuts',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 246,
          str_ingredient: 'Pitted Black Olives',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 247,
          str_ingredient: 'Plain Chocolate',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 248,
          str_ingredient: 'Plain Flour',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 249,
          str_ingredient: 'Plum Tomatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 252,
          str_ingredient: 'Potato Starch',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 253,
          str_ingredient: 'Potatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 254,
          str_ingredient: 'Prawns',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 255,
          str_ingredient: 'Puff Pastry',
          str_description: null,
          str_type: 'Pastry'
        },
        {
          id_ingredient: 256,
          str_ingredient: 'Raspberry Jam',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 257,
          str_ingredient: 'Raw King Prawns',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 258,
          str_ingredient: 'Red Chile Flakes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 259,
          str_ingredient: 'Red Chilli',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 261,
          str_ingredient: 'Red Chilli Powder',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 263,
          str_ingredient: 'Red Onions',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 264,
          str_ingredient: 'Red Pepper',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 265,
          str_ingredient: 'Red Pepper Flakes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 266,
          str_ingredient: 'Red Wine',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 267,
          str_ingredient: 'Refried Beans',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 268,
          str_ingredient: 'Rice',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 269,
          str_ingredient: 'Rice Noodles',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 270,
          str_ingredient: 'Rice Stick Noodles',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 271,
          str_ingredient: 'Rice Vermicelli',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 272,
          str_ingredient: 'Rigatoni',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 273,
          str_ingredient: 'Rocket',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 274,
          str_ingredient: 'Rolled Oats',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 276,
          str_ingredient: 'Saffron',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 277,
          str_ingredient: 'Sage',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 278,
          str_ingredient: 'Sake',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 280,
          str_ingredient: 'Salsa',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 281,
          str_ingredient: 'Salt',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 282,
          str_ingredient: 'Salted Butter',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 283,
          str_ingredient: 'Sausages',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 284,
          str_ingredient: 'Sea Salt',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 286,
          str_ingredient: 'Self-raising Flour',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 287,
          str_ingredient: 'Semi-skimmed Milk',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 288,
          str_ingredient: 'Sesame Seed',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 289,
          str_ingredient: 'Shallots',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 290,
          str_ingredient: 'Shredded Mexican Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 291,
          str_ingredient: 'Shredded Monterey Jack Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 292,
          str_ingredient: 'Small Potatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 293,
          str_ingredient: 'Smoked Paprika',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 294,
          str_ingredient: 'Smoky Paprika',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 295,
          str_ingredient: 'Sour Cream',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 296,
          str_ingredient: 'Soy Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 297,
          str_ingredient: 'Soya Milk',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 298,
          str_ingredient: 'Spaghetti',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 299,
          str_ingredient: 'Spinach',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 301,
          str_ingredient: 'Spring Onions',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 302,
          str_ingredient: 'Squash',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 303,
          str_ingredient: 'Stir-fry Vegetables',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 304,
          str_ingredient: 'Strawberries',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 305,
          str_ingredient: 'Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 306,
          str_ingredient: 'Sultanas',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 307,
          str_ingredient: 'Sunflower Oil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 308,
          str_ingredient: 'Tamarind Ball',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 309,
          str_ingredient: 'Tamarind Paste',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 310,
          str_ingredient: 'Thai Fish Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 311,
          str_ingredient: 'Thai Green Curry Paste',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 312,
          str_ingredient: 'Thai Red Curry Paste',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 313,
          str_ingredient: 'Thyme',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 315,
          str_ingredient: 'Tomato Ketchup',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 316,
          str_ingredient: 'Tomato Puree',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 317,
          str_ingredient: 'Tomatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 318,
          str_ingredient: 'Toor Dal',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 319,
          str_ingredient: 'Tuna',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 320,
          str_ingredient: 'Turmeric',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 321,
          str_ingredient: 'Turmeric Powder',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 322,
          str_ingredient: 'Turnips',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 323,
          str_ingredient: 'Vanilla',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 324,
          str_ingredient: 'Vanilla Extract',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 325,
          str_ingredient: 'Veal',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 326,
          str_ingredient: 'Vegan Butter',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 327,
          str_ingredient: 'Vegetable Oil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 328,
          str_ingredient: 'Vegetable Stock',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 329,
          str_ingredient: 'Vegetable Stock Cube',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 330,
          str_ingredient: 'Vinaigrette Dressing',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 331,
          str_ingredient: 'Vine Leaves',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 332,
          str_ingredient: 'Vinegar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 333,
          str_ingredient: 'Water',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 334,
          str_ingredient: 'White Chocolate Chips',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 335,
          str_ingredient: 'White Fish',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 336,
          str_ingredient: 'White Fish Fillets',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 337,
          str_ingredient: 'White Vinegar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 338,
          str_ingredient: 'White Wine',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 339,
          str_ingredient: 'Whole Milk',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 340,
          str_ingredient: 'Whole Wheat',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 341,
          str_ingredient: 'Wholegrain Bread',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 342,
          str_ingredient: 'Worcestershire Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 343,
          str_ingredient: 'Yogurt',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 344,
          str_ingredient: 'Zucchini',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 345,
          str_ingredient: 'Pretzels',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 346,
          str_ingredient: 'Cream Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 347,
          str_ingredient: 'Icing Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 348,
          str_ingredient: 'Toffee Popcorn',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 349,
          str_ingredient: 'Caramel',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 350,
          str_ingredient: 'Caramel Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 351,
          str_ingredient: 'Tagliatelle',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 352,
          str_ingredient: 'Fettuccine',
          str_description: '',
          str_type: null
        },
        {
          id_ingredient: 353,
          str_ingredient: 'Clotted Cream',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 354,
          str_ingredient: 'Corn Flour',
          str_description: '',
          str_type: null
        },
        {
          id_ingredient: 355,
          str_ingredient: 'Mussels',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 356,
          str_ingredient: 'Fideo',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 357,
          str_ingredient: 'Monkfish',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 358,
          str_ingredient: 'Vermicelli Pasta',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 359,
          str_ingredient: 'Baby Squid',
          str_description: '',
          str_type: null
        },
        {
          id_ingredient: 360,
          str_ingredient: 'Squid',
          str_description: '',
          str_type: null
        },
        {
          id_ingredient: 361,
          str_ingredient: 'Fish Stock',
          str_description: '',
          str_type: null
        },
        {
          id_ingredient: 362,
          str_ingredient: 'Pilchards',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 363,
          str_ingredient: 'Black Olives',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 364,
          str_ingredient: 'Onion',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 365,
          str_ingredient: 'Tomato',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 366,
          str_ingredient: 'Duck',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 367,
          str_ingredient: 'Duck Legs',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 368,
          str_ingredient: 'Chicken Stock Cube',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 369,
          str_ingredient: 'Pappardelle Pasta',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 370,
          str_ingredient: 'Paccheri Pasta',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 371,
          str_ingredient: 'Linguine Pasta',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 373,
          str_ingredient: 'Sugar Snap Peas',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 374,
          str_ingredient: 'Crusty Bread',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 375,
          str_ingredient: 'Fromage Frais',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 376,
          str_ingredient: 'Clams',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 377,
          str_ingredient: 'Passata',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 378,
          str_ingredient: 'Rapeseed Oil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 379,
          str_ingredient: 'Stilton Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 380,
          str_ingredient: 'Lamb Leg',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 381,
          str_ingredient: 'Lamb Shoulder',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 382,
          str_ingredient: 'Apricot',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 383,
          str_ingredient: 'Butternut Squash',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 384,
          str_ingredient: 'Couscous',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 387,
          str_ingredient: 'Minced Beef',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 388,
          str_ingredient: 'Turkey Mince',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 389,
          str_ingredient: 'Barbeque Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 390,
          str_ingredient: 'Sweetcorn',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 391,
          str_ingredient: 'Goose Fat',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 392,
          str_ingredient: 'Duck Fat',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 393,
          str_ingredient: 'Fennel',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 394,
          str_ingredient: 'Red Wine Vinegar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 395,
          str_ingredient: 'Haricot Beans',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 396,
          str_ingredient: 'Rosemary',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 397,
          str_ingredient: 'Butter Beans',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 398,
          str_ingredient: 'Pinto Beans',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 399,
          str_ingredient: 'Tomato Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 401,
          str_ingredient: 'Mascarpone',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 402,
          str_ingredient: 'Mozzarella',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 403,
          str_ingredient: 'Ricotta',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 405,
          str_ingredient: 'Dried Apricots',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 406,
          str_ingredient: 'Capers',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 407,
          str_ingredient: 'Banana',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 408,
          str_ingredient: 'Raspberries',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 409,
          str_ingredient: 'Blueberries',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 410,
          str_ingredient: 'Walnuts',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 411,
          str_ingredient: 'Pecan Nuts',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 412,
          str_ingredient: 'Maple Syrup',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 413,
          str_ingredient: 'Light Brown Soft Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 414,
          str_ingredient: 'Dark Brown Soft Sugar',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 415,
          str_ingredient: 'Dark Chocolate Chips',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 416,
          str_ingredient: 'Milk Chocolate',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 417,
          str_ingredient: 'Dark Chocolate',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 418,
          str_ingredient: 'Pumpkin',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 419,
          str_ingredient: 'Shortcrust Pastry',
          str_description: null,
          str_type: "Pastry"
        },
        {
          id_ingredient: 420,
          str_ingredient: 'Peanut Cookies',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 421,
          str_ingredient: 'Gelatine Leafs',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 422,
          str_ingredient: 'Peanut Brittle',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 423,
          str_ingredient: 'Peaches',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 424,
          str_ingredient: 'Yellow Pepper',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 425,
          str_ingredient: 'Green Pepper',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 426,
          str_ingredient: 'Courgettes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 427,
          str_ingredient: 'Tinned Tomatos',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 428,
          str_ingredient: 'Chestnuts',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 429,
          str_ingredient: 'Wild Mushrooms',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 430,
          str_ingredient: 'Truffle Oil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 431,
          str_ingredient: 'Paneer',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 432,
          str_ingredient: 'Naan Bread',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 433,
          str_ingredient: 'Lentils',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 434,
          str_ingredient: 'Roasted Vegetables',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 435,
          str_ingredient: 'Kidney Beans',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 436,
          str_ingredient: 'Mixed Grain',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 437,
          str_ingredient: 'Tahini',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 438,
          str_ingredient: 'Tortillas',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 439,
          str_ingredient: 'Udon Noodles',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 440,
          str_ingredient: 'Cabbage',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 441,
          str_ingredient: 'Shiitake Mushrooms',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 442,
          str_ingredient: 'Mirin',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 443,
          str_ingredient: 'Sesame Seed Oil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 444,
          str_ingredient: 'Baguette',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 445,
          str_ingredient: 'Vine Tomatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 446,
          str_ingredient: 'Suet',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 447,
          str_ingredient: 'Swede',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 448,
          str_ingredient: 'Ham',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 449,
          str_ingredient: 'Oysters',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 450,
          str_ingredient: 'Stout',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 451,
          str_ingredient: 'Lard',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 452,
          str_ingredient: 'Lamb Kidney',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 453,
          str_ingredient: 'Beef Kidney',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 454,
          str_ingredient: 'Haddock',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 455,
          str_ingredient: 'Smoked Haddock',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 456,
          str_ingredient: 'Brussels Sprouts',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 457,
          str_ingredient: 'Raisins',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 458,
          str_ingredient: 'Currants',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 459,
          str_ingredient: 'Custard',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 460,
          str_ingredient: 'Mixed Peel',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 461,
          str_ingredient: 'Redcurrants',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 462,
          str_ingredient: 'Blackberries',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 463,
          str_ingredient: 'Hazlenuts',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 464,
          str_ingredient: 'Braeburn Apples',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 465,
          str_ingredient: 'Red Food Colouring',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 466,
          str_ingredient: 'Pink Food Colouring',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 467,
          str_ingredient: 'Blue Food Colouring',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 468,
          str_ingredient: 'Yellow Food Colouring',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 469,
          str_ingredient: 'Apricot Jam',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 470,
          str_ingredient: 'Marzipan',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 471,
          str_ingredient: 'Almonds',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 472,
          str_ingredient: 'Black Pudding',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 473,
          str_ingredient: 'Baked Beans',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 474,
          str_ingredient: 'White Flour',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 475,
          str_ingredient: 'Yeast',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 476,
          str_ingredient: 'Fruit Mix',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 477,
          str_ingredient: 'Dried Fruit',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 478,
          str_ingredient: 'Cherry',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 479,
          str_ingredient: 'Glace Cherry',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 480,
          str_ingredient: 'Treacle',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 481,
          str_ingredient: 'Oatmeal',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 482,
          str_ingredient: 'Oats',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 483,
          str_ingredient: 'Egg',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 484,
          str_ingredient: 'Beef Shin',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 485,
          str_ingredient: 'Bouquet Garni',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 486,
          str_ingredient: 'Single Cream',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 487,
          str_ingredient: 'Red Wine Jelly',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 488,
          str_ingredient: 'Apples',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 489,
          str_ingredient: 'Goats Cheese',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 490,
          str_ingredient: 'Prosciutto',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 491,
          str_ingredient: 'Unsalted Butter',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 492,
          str_ingredient: 'Brie',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 493,
          str_ingredient: 'Tarragon Leaves',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 494,
          str_ingredient: 'Chives',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 495,
          str_ingredient: 'Pears',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 496,
          str_ingredient: 'White Chocolate',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 497,
          str_ingredient: 'Star Anise',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 498,
          str_ingredient: 'Tiger Prawns',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 499,
          str_ingredient: 'Custard Powder',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 500,
          str_ingredient: 'Desiccated Coconut',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 501,
          str_ingredient: 'Frozen Peas',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 502,
          str_ingredient: 'Minced Pork',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 503,
          str_ingredient: 'Creamed Corn',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 504,
          str_ingredient: 'Sun-Dried Tomatoes',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 505,
          str_ingredient: 'Dijon Mustard',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 506,
          str_ingredient: 'Tabasco Sauce',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 507,
          str_ingredient: 'Canola Oil',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 508,
          str_ingredient: 'Cod',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 509,
          str_ingredient: 'Salt Cod',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 510,
          str_ingredient: 'Ackee',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 511,
          str_ingredient: 'Jerk',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 512,
          str_ingredient: 'Ground Beef',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 513,
          str_ingredient: 'Baby Aubergine',
          str_description: 'Eggplant (Solanum melongena) or aubergine is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America, Australia and New Zealand; in British English, it is aubergine, and in South Asia and South Africa, brinjal.\r\n\r\nThe fruit is widely used in cooking. As a member of the genus Solanum, it is related to the tomato and the potato. It was originally domesticated from the wild nightshade species, the thorn or bitter apple, S. incanum, probably with two independent domestications, one in South Asia and one in East Asia.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 514,
          str_ingredient: 'Paella Rice',
          str_description: "Paella[a] is a Valencian rice dish that has ancient roots but its modern form originated in the mid-19th century in the area around Albufera lagoon on the east coast of Spain, adjacent to the city of Valencia. Many non-Spaniards view paella as Spain's national dish, but most Spaniards consider it to be a regional Valencian dish. Valencians, in turn, regard paella as one of their identifying symbols.\r\n\r\nTypes of paella include Valencian paella, vegetable paella (Spanish: paella de verduras), seafood paella (Spanish: paella de mariscos), and mixed paella (Spanish: paella mixta), among many others. Valencian paella is believed to be the original recipe and consists of white rice, green beans (bajoqueta and tavella), meat (chicken, duck and rabbit), white beans (garrofón), snails, and seasoning such as saffron and rosemary. Another very common but seasonal ingredient is artichokes. Seafood paella replaces meat with seafood and omits beans and green vegetables. Mixed paella is a free-style combination of meat from land animals, seafood, vegetables, and sometimes beans. Most paella chefs use bomba rice due to it being less likely to overcook, but Valencians tend to use a slightly stickier (and thus more susceptible to overcooking) variety known as Senia. All types of paellas use olive oil.",
          str_type: null
        },
        {
          id_ingredient: 515,
          str_ingredient: 'Scotch Bonnet',
          str_description: 'Scotch bonnet, also known as bonney peppers, or Caribbean red peppers, is a variety of chili pepper named for its resemblance to a tam o\' shanter hat. Also called ata rodo by Yoruba speakers of Nigeria, it is found mainly in the Caribbean islands; it is also found in Guyana (where it is called the ball-of-fire pepper), the Maldives Islands (where it is called githeyo mirus), Panama (where it is called aji chombo) and West Africa. Most Scotch bonnets have a heat rating of 100,000–350,000 Scoville units. For comparison, most jalapeño peppers have a heat rating of 2,500 to 8,000 on the Scoville scale. However, completely sweet varieties of Scotch bonnet are grown on some of the Caribbean islands, called cachucha peppers.\r\n\r\nThese peppers are used to flavour many different dishes and cuisines worldwide and are often used in hot sauces and condiments. The Scotch bonnet has a sweeter flavour and stouter shape, distinct from its habanero relative with which it is often confused, and gives jerk dishes (pork/chicken) and other Caribbean dishes their unique flavour. Scotch bonnets are mostly used in West African, Antiguan, Kittitian/Nevisian, Anguilan, Dominican, St. Lucian, St Vincentian, Grenadian, Trinidadian, Jamaican, Barbadian, Guyanese, Surinamese, Haitian and Cayman cuisines and pepper sauces, though they often show up in other Caribbean recipes. It is also used in Costa Rica and Panama for Caribbean-styled recipes such as rice and beans, Rondón, saus, beef patties, and Ceviche.\r\n\r\nFresh, ripe Scotch bonnets can change from green to yellow to scarlet red, however many other breeds of this pepper can ripen to orange, yellow, peach, or even a chocolate brown.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 516,
          str_ingredient: 'Oxtail',
          str_description: 'Oxtail (occasionally spelled ox tail or ox-tail) is the culinary name for the tail of cattle. Formerly, it referred only to the tail of an ox or steer, a bullock (a castrated male).[citation needed] An oxtail typically weighs 2 to 4 lbs. (1–1.8 kg) and is skinned and cut into short lengths for sale.\r\n\r\nOxtail is a bony, gelatin-rich meat, which is usually slow-cooked as a stew[1] or braised. It is a traditional stock base for a soup. Traditional preparations involve slow cooking, so some modern recipes take a shortcut using a pressure cooker. Oxtail is the main ingredient of the Italian dish coda alla vaccinara (a classic of Roman cuisine). It is a popular flavour for powder, instant and premade canned soups in the United Kingdom and Ireland. Oxtails are also one of the popular bases for Russian aspic appetizer dishes (холодец or студень), along with pig trotters or ears or cow \"knees\", but are the preferred ingredients among Russian Jews because they can be Kosher.\r\n\r\nVersions of oxtail soup are popular traditional dishes in South America, West Africa, China, Spain [2] and Indonesia. In Chinese cuisine, it\'s usually made into a soup called 牛尾汤 (niúwěi tāng, \"oxtail soup\"). In Korean cuisine, a soup made with oxtail is called kkori gomtang (see gomguk). It is a thick soup seasoned with salt and eaten with a bowl of rice. It can be used as a stock for making tteokguk (rice cake soup). Stewed oxtail with butter bean or as main dish (with rice) is popular in Jamaica, Trinidad, and other West Indian cultures. Oxtail is also very popular in South Africa where it is often cooked in a traditional skillet called a potjie, which is a three-legged cast iron pot placed over an open fire. Oxtail is also eaten in other southern parts of Africa like Zimbabwe and served with sadza and greens. In the United States, oxtail is a mainstay in African American and West Indian households. In Cuban cuisine, a stew can be made from oxtail called rabo encendido. In the Philippines, it is prepared in a peanut based stew called Kare-kare. In Iran, Oxtail is slow-cooked and served as a substitute for shank in a main dish called Baghla-Poli-Mahicheh which is prepared with rice, shank (or oxtail) and a mixture of herbs including dill, coriander, parsley and garlic.\r\n\r\nIn the United States, oxtail has the meat-cutting classification NAMP 1791.',
          str_type: 'Meat'
        },
        {
          id_ingredient: 517,
          str_ingredient: 'Broad Beans',
          str_description: 'Vicia faba, also known as the broad bean, fava bean, faba bean, field bean, bell bean, or tic bean, is a species of flowering plant in the pea and bean family Fabaceae. It is native to North Africa[dubious – discuss] southwest and south Asia, and extensively cultivated elsewhere.[citation needed] A variety Vicia faba var. equina Pers. – horse bean has been previously recognized.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 518,
          str_ingredient: 'Red Snapper',
          str_description: 'The northern red snapper (Lutjanus campechanus) is a species of snapper native to the western Atlantic Ocean including the Gulf of Mexico, where it inhabits environments associated with reefs. This species is commercially important and is also sought-after as a game fish.\r\n\r\nThe northern red snapper\'s body is very similar in shape to other snappers, such as the mangrove snapper, mutton snapper, lane snapper, and dog snapper. All feature a sloped profile, medium-to-large scales, a spiny dorsal fin, and a laterally compressed body. Northern red snapper have short, sharp, needle-like teeth, but they lack the prominent upper canine teeth found on the mutton, dog, and mangrove snappers. This snapper reaches maturity at a length of about 39 cm (15 in). The common adult length is 60 cm (24 in), but may reach 100 cm (39 in). The maximum published weight is 38 kg (84 lb), and the oldest reported age is 100+ years. Coloration of the northern red snapper is light red, with more intense pigment on the back. It has 10 dorsal spines, 14 soft dorsal rays, three anal spines and eight to 9 anal soft rays. Juvenile fish (shorter than 30–35 cm) can also have a dark spot on their sides, below the anterior soft dorsal rays, which fades with age.',
          str_type: 'Fish'
        },
        {
          id_ingredient: 519,
          str_ingredient: 'Malt Vinegar',
          str_description: 'Vinegar is a liquid consisting of about 5–20% acetic acid (CH3COOH), water, and other trace chemicals, which may include flavorings. The acetic acid is produced by the fermentation of ethanol by acetic acid bacteria. Vinegar is now mainly used as a cooking ingredient, or in pickling. As the most easily manufactured mild acid, it has historically had a great variety of industrial, medical, and domestic uses, some of which (such as its use as a general household cleaner) are still commonly practiced today.\r\n\r\nCommercial vinegar is produced either by a fast or a slow fermentation process. In general, slow methods are used in traditional vinegars where fermentation proceeds slowly over the course of a few months or up to a year. The longer fermentation period allows for the accumulation of a non-toxic slime composed of acetic acid bacteria. Fast methods add mother of vinegar (bacterial culture) to the source liquid before adding air to oxygenate and promote the fastest fermentation. In fast production processes, vinegar may be produced between 20 hours to three days.',
          str_type: 'Seasoning'
        },
        {
          id_ingredient: 520,
          str_ingredient: 'Rice Vinegar',
          str_description: 'Rice vinegar is a vinegar made from fermented rice in China, Japan, Korea, and Vietnam.\r\n\r\nChinese rice vinegars are stronger than Japanese ones, and range in colour from clear to various shades of red, brown and black and are therefore known as rice wine vinegar. Chinese and especially Japanese vinegars are less acidic than the distilled Western vinegars which, for that reason, are not appropriate substitutes for rice vinegars. The majority of the Asian rice vinegar types are also more mild and sweet than vinegars typically used in the Western world, with black vinegars as a notable exception. Chinese rice vinegars are made from huangjiu, a type of rice wine.',
          str_type: 'Vinegar'
        },
        {
          id_ingredient: 521,
          str_ingredient: 'Water Chestnut',
          str_description: 'Eleocharis dulcis, the Chinese water chestnut or water chestnut, is a grass-like sedge native to Asia (China, Japan, India, Philippines, etc.), Australia, tropical Africa, and various islands of the Pacific and Indian Oceans. It is grown in many countries for its edible corms.\r\n\r\nThe water chestnut is not a nut at all, but an aquatic vegetable that grows in marshes, under water, in the mud. It has stem-like, tubular green leaves that grow to about 1.5 m. The water caltrop, which also is referred to by the same name, is unrelated and often confused with the water chestnut.\r\n\r\nThe small, rounded corms have a crisp, white flesh and may be eaten raw, slightly boiled, or grilled, and often are pickled or tinned. They are a popular ingredient in Chinese dishes. In China, they are most often eaten raw, sometimes sweetened. They also may be ground into a flour form used for making water chestnut cake, which is common as part of dim sum cuisine. They are unusual among vegetables for remaining crisp even after being cooked or canned, because their cell walls are cross-linked and strengthened by certain phenolic compounds, such as oligomers of ferulic acid. This property is shared by other vegetables that remain crisp in this manner, including the tiger nut and lotus root. The corms contain the antibiotic agent puchiin, which is stable to high temperature. Apart from the edible corms, the leaves can be used for cattlefeed, mulch or compost.\r\n\r\nThe corms are rich in carbohydrates (about 90% by dry weight), especially starch (about 60% by dry weight), and are also a good source of dietary fiber, riboflavin, vitamin B6, potassium, copper, and manganese.\r\n\r\nIf eaten uncooked, the surface of the plants may transmit fasciolopsiasis.',
          str_type: 'Sedge'
        },
        {
          id_ingredient: 522,
          str_ingredient: 'Tofu',
          str_description: 'Tofu, also known as bean curd, is a food cultivated by coagulating soy milk and then pressing the resulting curds into soft white blocks. It is a component in East Asian and Southeast Asian cuisines. Tofu can be soft, firm, or extra firm. Tofu has a subtle flavor and can be used in savory and sweet dishes. It is often seasoned or marinated to suit the dish.\r\n\r\nTofu has a low calorie count and relatively large amounts of protein. It is high in iron, and it can have a high calcium or magnesium content, depending on the coagulants used in manufacturing (e.g. calcium chloride, calcium sulfate, magnesium sulfate).',
          str_type: 'Curd'
        },
        {
          id_ingredient: 523,
          str_ingredient: 'Doubanjiang',
          str_description: 'Doubanjiang (IPA: [tôupântɕjâŋ]), or simply Douban, or Toban-djan, Chili bean sauce, is a spicy, salty paste made from fermented broad beans, soybeans, salt, rice, and various spices. Doubanjiang exists in plain and spicy versions, with the latter containing red chili peppers and called la doubanjiang (辣豆瓣酱; pinyin: là dòubànjiàng; là meaning \"hot\" or \"spicy\").\r\n\r\nIt is used particularly in Sichuan cuisine, and in fact, the people of the province commonly refer to it as \"the soul of Sichuan cuisine\". A particularly well-known variety is called Pixian Douban (simplified Chinese: 郫县豆瓣; traditional Chinese: 郫縣豆瓣; pinyin: Píxiàn dòubàn), named after the district of Pixian, Sichuan.[1]\r\n\r\nThis sauce is sometimes stir-fried with oil and eaten with rice or noodles as a quick meal, and is also commonly used as a primary flavoring for fried tofu dishes and cold tofu salads. It is also frequently mixed with instant noodles.\r\n\r\nIn many Chinese communities and food factories, doubanjiang is produced with only soybeans and salt, and does not contain the broad beans or chili peppers typical of Sichuan-style doubanjiang.\r\n\r\nIn Korean cuisine, a similar form of bean paste is called doenjang.',
          str_type: 'Sauce'
        },
        {
          id_ingredient: 524,
          str_ingredient: 'Fermented Black Beans',
          str_description: 'Douchi (Chinese: 豆豉; pinyin: dòuchǐ), or tochi is a type of fermented and salted black soybean. In English, it is known as fermented black soybeans, Chinese fermented black beans (Chinese: 黑豆豆豉; pinyin: hēidòu dòuchǐ), salted black beans, salty black beans, or just black beans. They are a flavoring most popular in the cuisine of China, where they are most widely used for making black bean sauce dishes.[1][page needed]\r\n\r\nDouchi is made by fermenting and salting black soybeans. The black type soybean is most commonly used and the process turns the beans soft, and mostly semi-dry (if the beans are allowed to dry). Regular soybeans (white soybeans) are also used, but this does not produce \"salted black beans\"; instead, these beans become brown. The smell is sharp, pungent, and spicy; the taste is salty, somewhat bitter and sweet.[citation needed] The product made with white soybeans is called mianchi.\r\n\r\nThe process and product are similar to ogiri and iru, both being African fermented bean products[citation needed].\r\n\r\nDouchi, \"Chinese salted black beans\", and \"black soybeans\" should not be confused with the black turtle bean, a variety of common bean that is commonly used in the cuisines of Central America, South America, and the Caribbean.',
          str_type: 'Bean'
        },
        {
          id_ingredient: 525,
          str_ingredient: 'Scallions',
          str_description: 'Scallions (green onion, spring onion and salad onion) are vegetables of various Allium onion species. Scallions have a milder taste than most onions. Their close relatives include the garlic, shallot, leek, chive, and Chinese onion.\r\n\r\nAlthough the bulbs of many Allium species are used as food, the defining characteristic of scallion species is that they lack a fully developed bulb. In common with all Allium species, scallions have hollow, tubular green leaves, growing directly from the bulb. These leaves are used as a vegetable; they are eaten either raw or cooked. The leaves are often chopped into other dishes, in the manner of onions or garlic. Also known as scallions or green onions, spring onions are in fact very young onions, harvested before the bulb has had a chance to swell.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 526,
          str_ingredient: 'Sichuan Pepper',
          str_description: 'Sichuan pepper, Sichuan peppercorn, or Szechuan pepper, is a commonly used spice in Chinese cuisine. It is derived from at least two species of the global genus Zanthoxylum, including Z. simulans and Z. bungeanum. The genus Zanthoxylum belongs in the rue or citrus family, and, despite its name, is not closely related to either black pepper nor the chili pepper.\r\n\r\nThe husk or hull (pericarp) around the seeds may be used whole, especially in Sichuan cuisine, and the finely ground powder is one of the ingredients for five-spice powder. It is also used in traditional Chinese medicine. The pericarp is most often used, but the leaves of various species are also used in some regions of China.\r\n\r\nAnother species of Zanthoxylum native to China, Z. schinifolium, called xiāng jiāo zi (香椒子, \"aromatic peppercorn\") or qīng huā jiāo (青花椒, \"green flower pepper\"), is used as a spice in Hebei.\r\n\r\nWhile the exact flavour and composition of different species from the genus Zanthoxylum vary, most share the same essential characteristics. So while the terms \"Sichuan pepper\" and sanshō may refer specifically to Z. simulans and Z. piperitum, respectively, the two are commonly used interchangeably.\r\n\r\nRelated species are used in the cuisines of Tibet, Bhutan, Nepal, Thailand, and India (the Konkani and Uttarakhandi people) and Toba Batak peoples. In Bhutan, this pepper is known as thingye and is used liberally in preparation of soups, gruels, and phaag sha paa (pork slices).[citation needed] In Nepal, timur is used in the popular foods momo, thukpa, chow mein, chicken chilli, and other meat dishes. It is also widely used in homemade pickles. People take timur as a medicine for stomach or digestion problems, in a preparation with cloves of garlic and mountain salt with warm water.',
          str_type: 'Spice'
        },
        {
          id_ingredient: 527,
          str_ingredient: 'Wonton Skin',
          str_description: 'Won ton skin. Paper-thin squares of dough made from flour, water, eggs and salt used to make won tons, egg rolls and gyoza.',
          str_type: 'Pastry'
        },
        {
          id_ingredient: 528,
          str_ingredient: 'Starch',
          str_description: 'Starch or amylum is a polymeric carbohydrate consisting of a large number of glucose units joined by glycosidic bonds. This polysaccharide is produced by most green plants as energy storage. It is the most common carbohydrate in human diets and is contained in large amounts in staple foods like potatoes, wheat, maize (corn), rice, and cassava.\r\n\r\nPure starch is a white, tasteless and odorless powder that is insoluble in cold water or alcohol. It consists of two types of molecules: the linear and helical amylose and the branched amylopectin. Depending on the plant, starch generally contains 20 to 25% amylose and 75 to 80% amylopectin by weight.[4] Glycogen, the glucose store of animals, is a more highly branched version of amylopectin.\r\n\r\nIn industry, starch is converted into sugars, for example by malting, and fermented to produce ethanol in the manufacture of beer, whisky and biofuel. It is processed to produce many of the sugars used in processed foods. Mixing most starches in warm water produces a paste, such as wheatpaste, which can be used as a thickening, stiffening or gluing agent. The biggest industrial non-food use of starch is as an adhesive in the papermaking process. Starch can be applied to parts of some garments before ironing, to stiffen them.',
          str_type: 'Side'
        },
        {
          id_ingredient: 529,
          str_ingredient: 'Rice wine',
          str_description: 'Rice wine is an alcoholic beverage fermented and distilled from rice, traditionally consumed in East Asia, Southeast Asia and South Asia. Rice wine is made from the fermentation of rice starch that has been converted to sugars. Microbes are the source of the enzymes that convert the starches to sugar.[1]\r\n\r\nRice wine typically has an alcohol content of 18–25% ABV. Rice wines are used in Asian gastronomy at formal dinners and banquets and in cooking. They are also used in a religious and ceremonial context.',
          str_type: 'Wine'
        },
        {
          id_ingredient: 530,
          str_ingredient: 'Cooking wine',
          str_description: 'Splash into casseroles, sauces and marinades for a rounded vibrant flavour.',
          str_type: 'Wine'
        },
        {
          id_ingredient: 531,
          str_ingredient: 'Duck Sauce',
          str_description: 'Duck sauce (or orange sauce) is a condiment with a sweet and sour flavor and a translucent orange appearance similar to a thin jelly. Offered at Chinese-American restaurants, it is used as a dip for deep-fried dishes such as wonton strips, spring rolls, egg rolls, duck, chicken, fish, or with rice or noodles. It is often provided in single-serving packets along with soy sauce, mustard, hot sauce or red chili powder. It may be used as a glaze on foods, such as poultry. Despite its name the sauce is not prepared using duck meat.',
          str_type: 'Sauce'
        },
        {
          id_ingredient: 532,
          str_ingredient: 'Gochujang',
          str_description: 'Gochujang or red chili paste is a savory, sweet, and spicy fermented condiment made from chili powder, glutinous rice, meju powder, yeotgireum, and salt.',
          str_type: 'Sauce'
        },
        {
          id_ingredient: 533,
          str_ingredient: 'Bean Sprouts',
          str_description: 'Bean sprouts are a common ingredient across the world. They are particularly common in Eastern Asian cuisine.\r\n\r\nThere are two types of common bean sprouts:\r\n\r\nMung bean sprout is made from the greenish-capped mung beans\r\nSoybean sprout is made from yellow, larger-grained soybean\r\nIt typically takes one week for them to become fully grown. The sprouted beans are more nutritious than the original beans and they require much less cooking time.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 534,
          str_ingredient: 'Noodles',
          str_description: 'Noodles are a staple food in many cultures. They are made from unleavened dough which is stretched, extruded, or rolled flat and cut into one of a variety of shapes. While long, thin strips may be the most common, many varieties of noodles are cut into waves, helices, tubes, strings, or shells, or folded over, or cut into other shapes. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are often pan-fried or deep-fried. Noodles are often served with an accompanying sauce or in a soup. Noodles can be refrigerated for short-term storage or dried and stored for future use. The material composition or geocultural origin must be specified when discussing noodles. The word derives from the German word Nudel.[1]',
          str_type: 'Side'
        },
        {
          id_ingredient: 535,
          str_ingredient: 'Wood Ear Mushrooms',
          str_description: 'Auricularia auricula-judae, known as the Jew\'s ear, wood ear, jelly ear or by a number of other common names, is a species of edible Auriculariales fungus found worldwide. The fruiting body is distinguished by its noticeably ear-like shape and brown colouration; it grows upon wood, especially elder. Its specific epithet is derived from the belief that Judas Iscariot hanged himself from an elder tree; the common name \"Judas\'s ear\" was largely eclipsed by the corruption \"Jew\'s ear\", while today \"jelly ear\" and other names are sometimes used. The fungus can be found throughout the year in temperate regions worldwide, where it grows upon both dead and living wood.\r\n\r\nIn the West, A. auricula-judae was used in folk medicine as recently as the 19th century for complaints including sore throats, sore eyes and jaundice, and as an astringent. Although it is not widely consumed in the West, it has long been popular in China, to the extent that Australia exported large volumes to China in the early twentieth century. Today, the fungus is a popular ingredient in many Chinese dishes, such as hot and sour soup, and also used in Chinese medicine. It is also used in Ghana, as a blood tonic. Modern research into possible medical applications has variously concluded that A. auricula-judae has antitumour, hypoglycemic, anticoagulant and cholesterol-lowering properties.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 536,
          str_ingredient: 'Dark Rum',
          str_description: 'Rum is a distilled alcoholic drink made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.\r\n\r\nThe majority of the world\'s rum production occurs in the Caribbean and Latin America. Rum is also produced in Australia, Portugal, Austria, Canada, Fiji, India, Japan, Mauritius, Nepal, New Zealand, the Philippines, Reunion Island, South Africa, Spain, Sweden, Taiwan, Thailand, the United Kingdom and the United States.\r\n\r\nRums are produced in various grades. Light rums are commonly used in cocktails, whereas \"golden\" and \"dark\" rums were typically consumed straight or neat, on the rocks, or used for cooking, but are now commonly consumed with mixers. Premium rums are also available, made to be consumed either straight or iced.\r\n\r\nRum plays a part in the culture of most islands of the West Indies as well as in The Maritimes and Newfoundland. This drink has famous associations with the Royal Navy (where it was mixed with water or beer to make grog) and piracy (where it was consumed as bumbo). Rum has also served as a popular medium of economic exchange, used to help fund enterprises such as slavery (see Triangular trade), organized crime, and military insurgencies (e.g., the American Revolution and Australia\'s Rum Rebellion).',
          str_type: 'Spirit'
        },
        {
          id_ingredient: 537,
          str_ingredient: 'Light Rum',
          str_description: 'Rum is a distilled alcoholic drink made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.\r\n\r\nThe majority of the world\'s rum production occurs in the Caribbean and Latin America. Rum is also produced in Australia, Portugal, Austria, Canada, Fiji, India, Japan, Mauritius, Nepal, New Zealand, the Philippines, Reunion Island, South Africa, Spain, Sweden, Taiwan, Thailand, the United Kingdom and the United States.\r\n\r\nRums are produced in various grades. Light rums are commonly used in cocktails, whereas \"golden\" and \"dark\" rums were typically consumed straight or neat, on the rocks, or used for cooking, but are now commonly consumed with mixers. Premium rums are also available, made to be consumed either straight or iced.\r\n\r\nRum plays a part in the culture of most islands of the West Indies as well as in The Maritimes and Newfoundland. This drink has famous associations with the Royal Navy (where it was mixed with water or beer to make grog) and piracy (where it was consumed as bumbo). Rum has also served as a popular medium of economic exchange, used to help fund enterprises such as slavery (see Triangular trade), organized crime, and military insurgencies (e.g., the American Revolution and Australia\'s Rum Rebellion).',
          str_type: 'Spirit'
        },
        {
          id_ingredient: 538,
          str_ingredient: 'Rum',
          str_description: 'Rum is a distilled alcoholic drink made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.\r\n\r\nThe majority of the world\'s rum production occurs in the Caribbean and Latin America. Rum is also produced in Australia, Portugal, Austria, Canada, Fiji, India, Japan, Mauritius, Nepal, New Zealand, the Philippines, Reunion Island, South Africa, Spain, Sweden, Taiwan, Thailand, the United Kingdom and the United States.\r\n\r\nRums are produced in various grades. Light rums are commonly used in cocktails, whereas \"golden\" and \"dark\" rums were typically consumed straight or neat, on the rocks, or used for cooking, but are now commonly consumed with mixers. Premium rums are also available, made to be consumed either straight or iced.\r\n\r\nRum plays a part in the culture of most islands of the West Indies as well as in The Maritimes and Newfoundland. This drink has famous associations with the Royal Navy (where it was mixed with water or beer to make grog) and piracy (where it was consumed as bumbo). Rum has also served as a popular medium of economic exchange, used to help fund enterprises such as slavery (see Triangular trade), organized crime, and military insurgencies (e.g., the American Revolution and Australia\'s Rum Rebellion).',
          str_type: 'Spirit'
        },
        {
          id_ingredient: 539,
          str_ingredient: 'English Muffins',
          str_description: 'English muffins are a small, round, flat yeast-leavened bread which is commonly sliced horizontally, toasted, and buttered.[2] Toasted English muffins, which are often used in the United States as a breakfast food, may be served with sweet toppings (e.g., fruit jam, or honey) or savoury toppings (e.g., eggs, sausage rounds, bacon, or cheese). English muffins are also used as the bread in a variety of breakfast sandwiches, and are an essential ingredient in Eggs Benedict and most of its variations.\r\n\r\nIn the United States and U.S.-influenced territories, they are called English muffins to distinguish them from U.S. muffins, which are larger and sweeter miniature baked quick breads. They are very similar to bolo do caco in Portuguese cuisine.',
          str_type: 'Bread'
        },
        {
          id_ingredient: 540,
          str_ingredient: 'Muffins',
          str_description: 'A muffin is an individual-sized, baked product. It can refer to two distinct items, a part-raised flatbread and a cupcake-like quickbread. The flatbread is of British or European derivation, and dates from at least the early 18th century, while the quickbread originated in North America during the 19th century. Both are common worldwide today.',
          str_type: 'Bread'
        },
        {
          id_ingredient: 541,
          str_ingredient: 'White Wine Vinegar',
          str_description: 'Wine vinegar is made from red or white wine, and is the most commonly used vinegar in Southern and Central Europe, Cyprus and Israel. As with wine, there is a considerable range in quality. Better-quality wine vinegars are matured in wood for up to two years, and exhibit a complex, mellow flavor. Wine vinegar tends to have a lower acidity than white or cider vinegars. More expensive wine vinegars are made from individual varieties of wine, such as champagne, sherry, or pinot gris.',
          str_type: 'Dressing'
        },
        {
          id_ingredient: 542,
          str_ingredient: 'Smoked Salmon',
          str_description: 'Smoked salmon is a preparation of salmon, typically a fillet that has been cured and hot or cold smoked. Due to its moderately high price, smoked salmon is considered a delicacy. Although the term lox is sometimes applied to smoked salmon, they are different products.',
          str_type: 'Fish'
        },
        {
          id_ingredient: 543,
          str_ingredient: 'Mars Bar',
          str_description: 'Mars is a variety of chocolate bar produced by Mars, Incorporated. It was first manufactured in 1932 in Slough, England by Forrest Mars, Sr. The bar was sold in two different formulations. In its original British version the bar consists of milk chocolate surrounding caramel and nougat, developed to resemble the American candy bar known as the Milky Way, which had been introduced a decade earlier. An American version of the Mars Bar was produced which had nougat and toasted almonds covered in milk chocolate; later, caramel was added to the recipe as well. The American version was discontinued in 2002, though it has been revived for short runs since then.',
          str_type: 'Confectionery'
        },
        {
          id_ingredient: 544,
          str_ingredient: 'Rice Krispies',
          str_description: 'Rice Krispies (also known as Rice Bubbles in Australia and New Zealand) is a breakfast cereal marketed by Kellogg\'s in 1927 and released to the public in 1928. Rice Krispies are made of crisped rice (rice and sugar paste that is formed into rice shapes or \"berries\", cooked, dried and toasted), and expand forming very thin and hollowed out walls that are crunchy and crisp. When milk is added to the cereal the walls tend to collapse, creating the \"Snap, crackle and pop\" sounds.\r\n\r\nRice Krispies cereal has a long advertising history, with the elf cartoon characters Snap, Crackle and Pop touting the brand. In 1963, The Rolling Stones recorded a short song for a Rice Krispies television advertisement.',
          str_type: 'Cereal'
        },
        {
          id_ingredient: 545,
          str_ingredient: 'Ancho Chillies',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 546,
          str_ingredient: 'Almond Milk',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 548,
          str_ingredient: 'Allspice',
          str_description: null,
          str_type: null
        },
        {
          id_ingredient: 550,
          str_ingredient: 'Almond Extract',
          str_description: 'The almond (Prunus dulcis, syn. Prunus amygdalus) is a species of tree native to Mediterranean climate regions of the Middle East, but widely cultivated elsewhere. The almond is also the name of the edible and widely cultivated seed of this tree. Within the genus Prunus, it is classified with the peach in the subgenus Amygdalus, distinguished from the other subgenera by corrugations on the shell (endocarp) surrounding the seed.\r\n\r\nThe fruit of the almond is a drupe, consisting of an outer hull and a hard shell with the seed, which is not a true nut, inside. Shelling almonds refers to removing the shell to reveal the seed. Almonds are sold shelled or unshelled. Blanched almonds are shelled almonds that have been treated with hot water to soften the seedcoat, which is then removed to reveal the white embryo.',
          str_type: 'Fruit'
        },
        {
          id_ingredient: 552,
          str_ingredient: 'Tripe',
          str_description: 'Tripe is a type of edible lining from the stomachs of various farm animals. Most tripe is from cattle and sheep.',
          str_type: 'Meat'
        },
        {
          id_ingredient: 553,
          str_ingredient: 'Goat Meat',
          str_description: 'The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the goat—antelope subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur, and skins across much of the world. Milk from goats is often turned into goat cheese.',
          str_type: 'Meat'
        },
        {
          id_ingredient: 554,
          str_ingredient: 'Black Beans',
          str_description: 'The black turtle bean is a small, shiny variety of the common bean (Phaseolus vulgaris) especially popular in Latin American cuisine, though it can also be found in the Cajun and Creole cuisines of south Louisiana. Like most common beans, it is native to the Americas, but has been introduced around the world. It is also used in East Indian cooking, Punjabi cuisine, and in Maharashtrian cuisine, it is known as Kala Ghevada. It is used interchangeably with vigna mungo (black gram) in countries such as the United States. The black turtle bean is often simply called the black bean (frijoles negros, zaragoza, judía negra, poroto negro, or caraota o habichuela negra in Spanish; and feijão preto in Portuguese), although this terminology can cause confusion with other black beans.',
          str_type: 'Bean'
        },
        {
          id_ingredient: 555,
          str_ingredient: 'Anchovy Fillet',
          str_description: 'Anchovies are tiny, silvery fish that come from the Mediterranean and southern European coasts. They\'re sold salt-cured, usually oil-packed, and filleted. Commonly they come either flat or rolled in cans or jars, or ground and mixed with oil or butter to make a paste that is sold in tubes. On their own, anchovies are very salty but mixed into sauces, dressings, or pastas they add a wonderful depth of flavor.',
          str_type: 'Fish'
        },
        {
          id_ingredient: 556,
          str_ingredient: 'Ras el hanout',
          str_description: 'Ras el hanout or rass el hanout (Arabic: راس الحانوت‎ raʾs al-ḥānūt, pronounced [rɑʔs ælħɑːnuːt] (About this soundlisten)) is a spice mix found in varying forms in Tunisia, Algeria, and Morocco.[1] It plays a similar role in North African cuisine as garam masala does in Indian cuisine. The name in Arabic means \"head of the shop\" and implies a mixture of the best spices the seller has to offer. Ras el hanout is used in many savory dishes, sometimes rubbed on meat or fish, or stirred into couscous or rice.\r\n\r\nThere is no definitive composition of spices that makes up ras el hanout. Each shop, company, or family may have their own blend. The mixture usually consists of over a dozen spices, in different proportions. Commonly used ingredients include cardamom, cumin, clove, cinnamon, nutmeg, mace, allspice, dry ginger, chili peppers, coriander seed, peppercorn, sweet and hot paprika, fenugreek, and dry turmeric. Some spices may be particular to the region, such as ash berries, chufa, grains of paradise, orris root, monk\'s pepper, cubebs, dried rosebud, fennel seed or aniseed, galangal, long pepper. Ingredients may be toasted before being ground or pounded in a mortar and mixed together. Some preparations include salt or sugar, but that is generally not the accepted practice. Garlic, saffron, nuts or dry herbs are generally not included, as they are usually added to dishes individually, but some commercial preparations, particularly in Europe and North America, may contain them.\r\n\r\nThe composition of ras el hanout differs somewhat from the Baharat spice mix, but they differ more by the types of dishes they are associated with and by region rather than the ingredients in them. Although used by Berber people, it should not be confused with \"berbere\" spice mix from Ethiopia.\r\n\r\nCertain supposed aphrodisiacs, including the notoriously dangerous \"green metallic beetles\", cantharides, have appeared in many Moroccan prescriptions, but these seem to be irrelevant for flavouring purposes.',
          str_type: 'Spice'
        },
        {
          id_ingredient: 557,
          str_ingredient: 'Filo Pastry',
          str_description: 'Filo or phyllo (Greek: φύλλο \"leaf\") is a very thin unleavened dough used for making pastries such as baklava and börek in Middle Eastern and Balkan cuisines. Filo-based pastries are made by layering many sheets of filo brushed with oil or butter; the pastry is then baked.',
          str_type: 'Pastry'
        },
        {
          id_ingredient: 558,
          str_ingredient: 'Orange Blossom Water',
          str_description: 'Orange flower water, or orange blossom water, is the clear, perfumed by-product of the distillation of fresh bitter-orange blossoms for their essential oil.\r\n\r\nUses\r\nMediterranean Relief.jpg\r\nThis essential water has traditionally been used as an aromatizer in many Mediterranean traditional dessert dishes, such as in France for the gibassier and pompe à l\'huile or in Spain for the Roscón de Reyes (King cake), or the Samsa in Tunisia or in Moroccan coffee, but has more recently found its way into other cuisines. For example, orange flower water is used in Europe to flavor madeleines, in Mexico to flavor little wedding cakes and Pan de muerto, and in the United States to make orange blossom scones and marshmallows. Orange flower water is also used as an ingredient in some cocktails, such as the Ramos Gin Fizz. In Malta and many North African as well as Middle Eastern countries, orange blossom water is widely used as medicine for stomach ache and given to small children as well as adults.\r\n\r\nOrange flower water has been a traditional ingredient used often in North African as well as in Middle Eastern cooking. In Arab variants of baklava, orange blossom water is often mixed with the sweet syrup for flavor. Orange blossoms are believed to be used in this manner because they are seen as the traditional bridal flower and, therefore, symbolize purity (white, small and delicate). It is also added to plain water in the Middle East to mask high mineral content and other unpleasant flavors (e.g. those arising from storage in a qulla, a type of clay jug that keeps water cool in a manner similar to the zeer); some add the fragrance irrespective of the taste of the plain water.',
          str_type: 'Drink'
        },
        {
          id_ingredient: 559,
          str_ingredient: 'Candied Peel',
          str_description: 'Candied fruit, also known as crystallized fruit or glacé fruit, has existed since the 14th century. Whole fruit, smaller pieces of fruit, or pieces of peel, are placed in heated sugar syrup, which absorbs the moisture from within the fruit and eventually preserves it.',
          str_type: 'Confectionery'
        },
        {
          id_ingredient: 560,
          str_ingredient: 'Grand Marnier',
          str_description: 'Grand Marnier is a French brand of liqueurs. The brand\'s best-known product is Grand Marnier Cordon Rouge, an orange-flavored liqueur created in 1880 by Alexandre Marnier-Lapostolle. It is made from a blend of Cognac brandy, distilled essence of bitter orange, and sugar. Grand Marnier Cordon Rouge is 40% alcohol.',
          str_type: 'Liqueur'
        },
        {
          id_ingredient: 561,
          str_ingredient: 'Sherry',
          str_description: 'Sherry is a fortified wine made from white grapes that are grown near the city of Jerez de la Frontera in Andalusia, Spain.',
          str_type: 'Wine'
        },
        {
          id_ingredient: 562,
          str_ingredient: 'Rose water',
          str_description: 'Rose water is a flavoured water made by steeping rose petals in water. Additionally, it is the hydrosol portion of the distillate of rose petals, a by-product of the production of rose oil for use in perfume. It is used to flavour food, as a component in some cosmetic and medical preparations, and for religious purposes throughout Europe and Asia.',
          str_type: 'Drink'
        },
        {
          id_ingredient: 563,
          str_ingredient: 'Mixed Spice',
          str_description: 'Mixed spice, also called pudding spice, is a British[1] blend of sweet spices, similar to the pumpkin pie spice used in the United States. Cinnamon is the dominant flavour, with nutmeg and allspice. It is often used in baking, or to complement fruits or other sweet foods.',
          str_type: 'Spice'
        },
        {
          id_ingredient: 564,
          str_ingredient: 'Mincemeat',
          str_description: 'Mincemeat is a mixture of chopped dried fruit, distilled spirits and spices, and sometimes beef suet, beef, or venison. Originally, mincemeat always contained meat. Many modern recipes contain beef suet, though vegetable shortening is sometimes used in its place.',
          str_type: 'Spice'
        },
        {
          id_ingredient: 565,
          str_ingredient: 'Sweet Potatoes',
          str_description: 'The sweet potato or sweetpotato is a dicotyledonous plant that belongs to the bindweed or morning glory family, Convolvulaceae. Its large, starchy, sweet-tasting, tuberous roots are a root vegetable. The young leaves and shoots are sometimes eaten as greens.',
          str_type: 'Root Vegetable'
        },
        {
          id_ingredient: 566,
          str_ingredient: 'Bread Rolls',
          str_description: 'A roll is a small, usually round or oblong individual loaf of bread served as a meal accompaniment (eaten plain or with butter) A roll can be served and eaten whole or cut transversely and dressed with filling between the two halves. Rolls are also commonly used to make sandwiches similar to those produced using slices of bread. They are found in most cuisines all over the world. In the Deipnosophistae, the author Athenaeus (c. 170 – c. 230) describes some of the bread, cakes, and pastries available in the Classical world. Among the breads mentioned are griddle cakes, honey-and-oil bread, mushroom-shaped loaves covered in poppy seeds, and the military specialty of rolls baked on a spit.',
          str_type: 'Bread'
        },
        {
          id_ingredient: 567,
          str_ingredient: 'Bun',
          str_description: 'A bun is a small, sometimes sweet, bread-based item[1] or roll. Though they come in many shapes and sizes, they are most commonly hand-sized or smaller, with a round top and flat bottom.',
          str_type: 'Bread'
        },
        {
          id_ingredient: 568,
          str_ingredient: 'Potatoe Buns',
          str_description: 'Potato bread is a form of bread in which potato flour or potato replaces a portion of the regular wheat flour. It is cooked in a variety of ways, including baking it on a hot griddle or pan, or in an oven. It may be leavened or unleavened, and may have a variety of other ingredients baked into it. The ratio of potato to wheat flour varies significantly from recipe to recipe, with some recipes having a majority of potato, and others having a majority of wheat flour. Some recipes call for mashed potatoes, with others calling for dehydrated potato flakes. It is available as a commercial product in many countries, with similar variations in ingredients, cooking method, and other variables.',
          str_type: 'Bread'
        },
        {
          id_ingredient: 569,
          str_ingredient: 'Ground Pork',
          str_description: 'Ground meat, called mince or minced meat outside of North America (i.e. in U.K. and Commonwealth countries), and keema or qeema (Hindustani: क़ीमा (Devanagari), قیمہ (Nastaleeq), (pronounced [ˈqiːmaː])) in the Indian subcontinent, is meat finely chopped by a meat grinder or a chopping knife. A common type of ground meat is ground beef, but many other types of meats are prepared in a similar fashion, including pork, lamb, and poultry. In the Indian subcontinent, both mutton and goat meat are also minced to produce keema.',
          str_type: 'Meat'
        },
        {
          id_ingredient: 570,
          str_ingredient: 'Pork Chops',
          str_description: 'A pork chop, like other meat chops, is a loin cut taken perpendicular to the spine of the pig and usually containing a rib or part of a vertebra. Pork chops are not processed and are leaner than other cuts of pork. Chops are commonly served as an individual portion.',
          str_type: 'Meat'
        },
        {
          id_ingredient: 571,
          str_ingredient: 'Yukon Gold Potatoes',
          str_description: 'Yukon Gold is a large cultivar of potato most distinctly characterized by its thin, smooth, eye-free skin and yellow-tinged flesh. This potato was developed in the 1960s by Garnet Johnston in Guelph, Ontario, Canada, with the help of Geoff Rowberry at the University of Guelph. The official cross was made in 1966 and Yukon Gold was finally released into the market in 1980.',
          str_type: 'Root Vegetable'
        },
        {
          id_ingredient: 572,
          str_ingredient: 'Yellow Onion',
          str_description: 'The brown onion or yellow onion is a variety of dry onion with a strong flavour. They have a greenish-white, light yellow, or white inside; its layers of papery skin have a yellow-brown or pale golden colour',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 573,
          str_ingredient: 'Beef Stock Concentrate',
          str_description: 'Stock, sometimes called bone broth, is a savory cooking liquid that forms the basis of many dishes, particularly soups, stews and sauces. Making stock involves simmering animal bones or meat, seafood, or vegetables in water or wine, often for an extended period of time. Mirepoix or other aromatics may be added for more flavor.',
          str_type: 'Stock'
        },
        {
          id_ingredient: 574,
          str_ingredient: 'Chicken Stock Concentrate',
          str_description: 'Stock, sometimes called bone broth, is a savory cooking liquid that forms the basis of many dishes, particularly soups, stews and sauces. Making stock involves simmering animal bones or meat, seafood, or vegetables in water or wine, often for an extended period of time. Mirepoix or other aromatics may be added for more flavor.',
          str_type: 'Stock'
        },
        {
          id_ingredient: 575,
          str_ingredient: 'Persian Cucumber',
          str_description: 'Cucumber (Cucumis sativus) is a widely cultivated plant in the gourd family, Cucurbitaceae. It is a creeping vine that bears cucumiform fruits that are used as vegetables. There are three main varieties of cucumber: slicing, pickling, and seedless. Within these varieties, several cultivars have been created. In North America, the term \"wild cucumber\" refers to plants in the genera Echinocystis and Marah, but these are not closely related. The cucumber is originally from South Asia, but now grows on most continents. Many different types of cucumber are traded on the global market.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 576,
          str_ingredient: 'Mayonnaise',
          str_description: 'Mayonnaise, informally mayo is a thick cold condiment or dressing commonly used in sandwiches and composed salads or on French fries. It is also a base in sauces such as Tartar sauce.',
          str_type: 'Sauce'
        },
        {
          id_ingredient: 577,
          str_ingredient: 'Sriracha',
          str_description: 'Sriracha is a type of hot sauce or chili sauce made from a paste of chili peppers, distilled vinegar, garlic, sugar, and salt.',
          str_type: 'Sauce'
        },
        {
          id_ingredient: 578,
          str_ingredient: 'Rhubarb',
          str_description: 'Rhubarb is a general term used for the cultivated plants in the genus Rheum in the family Polygonaceae. It is a herbaceous perennial growing from short, thick rhizomes. Historically, different plants have been called \"rhubarb\" in English.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 579,
          str_ingredient: 'Pita Bread',
          str_description: 'Pita or pitta, is a family of yeast-leavened round flatbreads baked from wheat flour, common in the Mediterranean, Middle East, and neighboring areas.',
          str_type: 'Bread'
        },
        {
          id_ingredient: 580,
          str_ingredient: 'Bulgur Wheat',
          str_description: 'Bulgur is a cereal food made from the cracked parboiled groats of several different wheat species, most often from durum wheat. It originates in Middle Eastern cuisine.',
          str_type: 'Cereal'
        },
        {
          id_ingredient: 581,
          str_ingredient: 'Quinoa',
          str_description: 'Quinoa is a flowering plant in the amaranth family. It is an herbaceous annual plant grown as a crop primarily for its edible seeds; the seeds are rich in protein, dietary fiber, B vitamins, and dietary minerals in amounts greater than in many grains.',
          str_type: 'Grain'
        },
        {
          id_ingredient: 582,
          str_ingredient: 'Dill Pickles',
          str_description: 'A pickled cucumber is a cucumber that has been pickled in a brine, vinegar, or other solution and left to ferment for a period of time, by either immersing the cucumbers in an acidic solution or through souring by lacto-fermentation. Pickled cucumbers are often part of mixed pickles.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 583,
          str_ingredient: 'Sesame Seed Burger Buns',
          str_description: 'A bun is a small, sometimes sweet, bread-based item or roll. Though they come in many shapes and sizes, they are most commonly hand-sized or smaller, with a round top and flat bottom. Buns are usually made from flour, sugar, milk, yeast and butter.',
          str_type: 'Bread'
        },
        {
          id_ingredient: 585,
          str_ingredient: 'Buns',
          str_description: 'A bun is a small, sometimes sweet, bread-based item or roll. Though they come in many shapes and sizes, they are most commonly hand-sized or smaller, with a round top and flat bottom. Buns are usually made from flour, sugar, milk, yeast and butter.',
          str_type: 'Bread'
        },
        {
          id_ingredient: 586,
          str_ingredient: 'Iceberg Lettuce',
          str_description: 'Iceberg is a variety of lettuce with crisp leaves that grow in a spherical head resembling cabbage. It is considered one of the sweeter lettuce varieties like romaine and butterhead. Mature iceberg lettuce grows to about one foot in diameter.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 587,
          str_ingredient: 'Gherkin Relish',
          str_description: 'A relish is a cooked and pickled product made of chopped vegetables, fruits or herbs and is a food item typically used as a condiment to enhance a staple. Examples are chutneys and the North American relish, a pickled cucumber jam eaten with hot dogs or hamburgers.',
          str_type: 'Sauce'
        },
        {
          id_ingredient: 588,
          str_ingredient: 'Cheese Slices',
          str_description: 'Processed cheese is a food product made from cheese and other unfermented dairy ingredients mixed with emulsifiers. Additional ingredients, such as vegetable oils, salt, food coloring, or sugar may be included. As a result, many flavors, colors, and textures of processed cheese exist.',
          str_type: 'Cheese'
        },
        {
          id_ingredient: 589,
          str_ingredient: 'Shortening',
          str_description: 'Shortening is any fat that is a solid at room temperature and used to make crumbly pastry and other food products. Although butter is solid at room temperature and is frequently used in making pastry, the term \"shortening\" seldom refers to butter, but is more closely related to margarine.',
          str_type: 'Fat'
        },
        {
          id_ingredient: 590,
          str_ingredient: 'Warm Water',
          str_description: 'Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth\'s hydrosphere and the fluids of most living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. Water is the name of the liquid state of H2O at standard ambient temperature and pressure. It forms precipitation in the form of rain and aerosols in the form of fog. Clouds are formed from suspended droplets of water and ice, its solid state. When finely divided, crystalline ice may precipitate in the form of snow. The gaseous state of water is steam or water vapor. Water moves continually through the water cycle of evaporation, transpiration (evapotranspiration), condensation, precipitation, and runoff, usually reaching the sea.',
          str_type: 'Liquid'
        },
        {
          id_ingredient: 591,
          str_ingredient: 'Boiling Water',
          str_description: 'Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth\'s hydrosphere and the fluids of most living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. Water is the name of the liquid state of H2O at standard ambient temperature and pressure. It forms precipitation in the form of rain and aerosols in the form of fog. Clouds are formed from suspended droplets of water and ice, its solid state. When finely divided, crystalline ice may precipitate in the form of snow. The gaseous state of water is steam or water vapor. Water moves continually through the water cycle of evaporation, transpiration (evapotranspiration), condensation, precipitation, and runoff, usually reaching the sea.',
          str_type: 'Liquid'
        },
        {
          id_ingredient: 592,
          str_ingredient: 'Pickle Juice',
          str_description: 'Pickling is the process of preserving or extending the shelf life of food by either anaerobic fermentation in brine or immersion in vinegar. In East Asia, vinaigrette is also used as a pickling medium. The pickling procedure typically affects the food\'s texture, taste and flavor.',
          str_type: 'Juice'
        },
        {
          id_ingredient: 593,
          str_ingredient: 'Powdered Sugar',
          str_description: 'Powdered sugar, also called confectioners\' sugar or icing sugar, is a finely ground sugar produced by milling granulated sugar into a powdered state. It usually contains a small amount of anti-caking agent to prevent clumping and improve flow',
          str_type: 'Sugar'
        },
        {
          id_ingredient: 594,
          str_ingredient: 'Kielbasa',
          str_description: 'Kielbasa is any type of meat sausage from Poland, and a staple of Polish cuisine. In American English the word typically refers to a coarse, U-shaped smoked sausage of any kind of meat, which closely resembles the Wiejska sausage in British English.',
          str_type: 'Meat'
        },
        {
          id_ingredient: 595,
          str_ingredient: 'Polish Sausage',
          str_description: 'Kielbasa is any type of meat sausage from Poland, and a staple of Polish cuisine. In American English the word typically refers to a coarse, U-shaped smoked sausage of any kind of meat, which closely resembles the Wiejska sausage in British English.',
          str_type: 'Meat'
        },
        {
          id_ingredient: 596,
          str_ingredient: 'Sauerkraut',
          str_description: 'Sauerkraut is finely cut raw cabbage that has been fermented by various lactic acid bacteria. It has a long shelf life and a distinctive sour flavor, both of which result from the lactic acid formed when the bacteria ferment the sugars in the cabbage leaves.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 597,
          str_ingredient: 'Caraway Seed',
          str_description: 'Caraway, also known as meridian fennel and Persian cumin (Carum carvi), is a biennial plant ... For example, it is used in goulash, sauerkraut, and caraway seed cake. The roots may be cooked as a vegetable like parsnips or carrots',
          str_type: 'Spice'
        },
        {
          id_ingredient: 598,
          str_ingredient: 'Herring',
          str_description: 'Herring are forage fish, mostly belonging to the family Clupeidae. Herring often move in large schools around fishing banks and near the coast, found particularly in shallow, temperate waters of the North Pacific and North Atlantic Oceans, including the Baltic Sea, as well as off the west coast of South America.',
          str_type: 'Fish'
        },
        {
          id_ingredient: 599,
          str_ingredient: 'Jam',
          str_description: 'Fruit preserves are preparations of fruits, vegetables and sugar, often stored in glass jam jars and Mason jars.\r\n\r\nMany varieties of fruit preserves are made globally, including sweet fruit preserves, such as those made from strawberry or apricot, and savory preserves, such as those made from tomatoes or squash. The ingredients used and how they are prepared determine the type of preserves; jams, jellies, and marmalades are all examples of different styles of fruit preserves that vary based upon the fruit used. In English, the word, in plural form, \"preserves\" is used to describe all types of jams and jellies.',
          str_type: 'Preserve'
        },
        {
          id_ingredient: 600,
          str_ingredient: 'Mulukhiyah',
          str_description: 'Mulukhiyah , molokheyya ,molokhia or mulukhiyyah (Arabic: ملوخية‎ mulūkhiyyah) Greek : molokha is the leaves of Corchorus olitorius, commonly known in English as jute, nalta jute, tossa jute , jute mallow or Jew\'s mallow. It is used as a vegetable. It is popular in Middle East, East African and North African countries and is called “Saluyot” in the Philippines. Mulukhiyah is rather bitter, and when boiled, the resulting liquid is a thick, highly mucilaginous broth; it is often described as \"slimy\", rather like cooked okra. Mulukhiyah is generally eaten cooked, not raw, and is most frequently turned into a kind of soup or stew, typically bearing the same name as the vegetable in the local language. Traditionally mulukhiyah is cooked with chicken or at least chicken stock for flavor and is served with white rice, accompanied with lemon or lime.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 601,
          str_ingredient: 'Sushi Rice',
          str_description: 'As the dietary staple of Japan, knowing how to cook Japanese rice is an important first step to becoming a Japanese cooking master. Perfectly prepared Japanese rice should be light, fluffy, and slightly sticky when cooked',
          str_type: 'Rice'
        },
        {
          id_ingredient: 602,
          str_ingredient: 'Figs',
          str_description: 'Ficus carica is an Asian species of flowering plant in the mulberry family, known as the common fig. It is the source of the fruit also called the fig and as such is an important crop in those areas where it is grown commercially.',
          str_type: 'Fruit'
        },
        {
          id_ingredient: 603,
          str_ingredient: 'Cider',
          str_description: 'Cider (/ˈsaɪdər/ SY-dər) is an alcoholic beverage made from the fermented juice of apples. Cider is widely available in the United Kingdom (particularly in the West Country) and the Republic of Ireland. The UK has the world\'s highest per capita consumption, as well as its largest cider-producing companies. Ciders from the South West of England are generally stronger. Cider is also popular in many Commonwealth countries, such as India, Canada, Australia, and New Zealand. As well as the UK and its former colonies, cider is popular in Portugal (mainly in Minho and Madeira), France (particularly Normandy and Brittany), northern Italy (Piedmont and Friuli), and northern Spain (especially the Principality of Asturias and the Basque Country). Central Europe also has its own types of cider with Rhineland-Palatinate and Hesse producing a particularly tart version known as Apfelwein. In the U.S., varieties of fermented cider are often called hard cider to distinguish alcoholic cider from non-alcoholic apple cider or \"sweet cider\", also made from apples. In Canada, cider cannot be called cider if there are no apples. Furthermore, according to the Food and Drug Regulations in Canada, cider cannot contain less than 2.5% or over 13% absolute alcohol by volume.',
          str_type: 'Drink'
        },
        {
          id_ingredient: 604,
          str_ingredient: 'Beetroot',
          str_description: 'The beetroot is the taproot portion of a beet plant, usually known in Canada and the USA as beets while the vegetable is referred to as beetroot in British English, and also known as the table beet, garden beet, red beet, dinner beet or golden beet.',
          str_type: 'Vegetable'
        },
        {
          id_ingredient: 605,
          str_ingredient: 'Sardines',
          str_description: '\"Sardine\" and \"pilchard\" are common names that refer to various small, oily forage fish in the herring family Clupeidae. The term \"sardine\" was first used in English during the early 15th century and may come from the Mediterranean island of Sardinia, around which sardines were once abundant.',
          str_type: 'Seafood'
        },
        {
          id_ingredient: 606,
          str_ingredient: 'Ciabatta',
          str_description: 'Ciabatta is an Italian white bread made from wheat flour, water, salt, yeast and olive oil, created in 1982 by a baker in Adria, province of Rovigo, Veneto, Italy, in response to the popularity of French baguettes.',
          str_type: 'Bread'
        },
        {
          id_ingredient: 607,
          str_ingredient: 'Buckwheat',
          str_description: 'Buckwheat (Fagopyrum esculentum), or common buckwheat, is a plant cultivated for its grain-like seeds and as a cover crop. The name \"buckwheat\" is used for several other species, such as Fagopyrum tataricum, a domesticated food plant raised in Asia. Despite the name, buckwheat is not closely related to wheat, as it is not a grass. Instead, buckwheat is related to sorrel, knotweed, and rhubarb. Buckwheat is referred to as a pseudocereal because its seeds\' culinary use is the same as cereals\', owing to their composition of complex carbohydrates.',
          str_type: 'Grain'
        }
      ],
      {} ,
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('meals_ingredients', {});
  },
};