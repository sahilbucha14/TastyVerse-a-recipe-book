// array for details of the recipes with each element is an object with keys {title , ingredients , instructions , img , filter}
const recipes = [
  {
    title: "Rasmalai",
    ingredients: [
      "for chenna:",
      "2 litre milk",
      "2 tbsp vinegar",
      "1½ cup sugar",
      "3 pod cardamom",
      "7 cup water",
      "for rabdi:",
      "1 litre milk",
      "few saffron",
      "pinch saffron food colour",
      "½ cup sugar",
      "¼ tsp cardamom powder",
      "2 tbsp nuts (chopped)",
    ],
    instructions: [
      "how to prepare chenna for rasmalai:",
      "firstly, get 2 litre to a boil stirring in between to prevent it from burning.",
      "Add 2 tbsp vinegar and give stir.",
      "you will notice the milk starts to curdle.",
      "Add 1 more tbsp of vinegar and stir until the milk curdles fully separating water.",
      "Drain off the water over the cheesecloth.",
      "you can use any clean cloth here.",
      "Rinse with cold water to remove sourness and stop cooking.",
      "Squeeze the paneer gently and hang for 30 minutes.",
      "Now take the moist paneer and crumble gently.",
      "Using the palm, start to knead gently.",
      "Knead until the paneer mixture turns smooth without any grains.",
      "do not over-knead here as the rasgulla will turn hard.",
      "Pinch a small ball sized chenna and prepare smooth crack free balls, flatten slightly.",
      "Keep the flattened paneer ball aside and cover with a moist cloth.",
      "How to boil rasmalai in sugar syrup:",
      "Firstly, in a large vessel, take 1½ cup sugar, 3 pods cardamom and 7 cup water.",
      "Stir and dissolve sugar.",
      "Now boil the water for 5 minutes or until the syrup turns slightly sticky.",
      "Drop in a prepared flattened paneer ball keeping the flame on high.",
      "Cover and boil for 7 minutes or until the size of the ball doubles.",
      "Chenna has been cooked well.",
      "keep aside.",
      "how to make rabdi:",
      "firstly, in a large kadai heat 1-litre milk, few saffron and pinch of saffron food colour.",
      "Stir and get the milk to a boil.",
      "Continue to cook until the milk thickens slightly.",
      "Now add ½ cup sugar and continue to boil.",
      "Do not make very thick milk as it will be difficult for chenna to absorb milk.",
      "Also, add ¼ tsp cardamom powder and 2 tbsp nuts. mix well.",
      "How to soak rasmalai in rabdi:",
      "Squeeze off the sugar syrup from the cooked paneer balls.",
      "Place them in a tray and pour in prepared rabdi.",
      "Rest for at least 4 hours or until the rasmali is soaked well.",
      "Finally, enjoy rasmalai slightly warmed or chilled.",
    ],
    img: "/images/Rasmalai.jpg",
    filter: "sweet",
  },
  {
    title: "Moong Dal ka Halwa",
    ingredients: [
      "1 cup moong dal",
      "water (for soaking)",
      "½ cup ghee / clarified butter",
      "1 tbsp rava / semolina / suji",
      "2 cup milk",
      "1 cup sugar",
      "5 cashew (chopped)",
      "5 almond (chopped)",
      "½ tsp cardamom powder",
    ],
    instructions: [
      "firstly, rinse the moong dal and soak for 2 hours.",
      "drain off the water and transfer to a blender.",
      "blend to a slightly coarse paste adding water if required.",
      "keep aside in a large kadai heat ½ cup ghee and add 1 tbsp rava.",
      "roast on low flame until the rava turns aromatic.",
      "adding rava helps to give good texture to halwa. now add in prepared moong dal paste and mix well.",
      "keeping the flame on medium, mix until the moong dal absorbs the ghee.",
      "continue to cook breaking the lumps.",
      "cook until the mixture turns crumble and grainy texture. after 20 minutes, the mixture turns crisp.",
      "now add 2 cup milk, few saffron.",
      "you can alternatively use water or milk and water combination.",
      "stir continuously, until the mixture absorbs all the milk.",
      "the mixture will start to hold shape leaving the kadai.",
      "now add 1 cup sugar and mix well.",
      "the sugar starts to melt and turns the mixture watery.",
      "continue to cook on low flame breaking lumps in between. ",
      "cook until the mixture starts to separate the ghee and turns golden brown.",
      "take approximately 60 minutes. now add 5 cashew, 5 almond and ½ tsp cardamom powder.",
      "mix well.",
      "finally, enjoy moong dal halwa garnished with more nuts.",
    ],
    img: "/images/Moong-Dal-Halwa.jpg",
    filter: "sweet",
  },
  {
    title: "Chole Bhature",
    ingredients: [
      "for bhatura:",
      "2 cup maida",
      "2 tbsp rava / semolina, fine",
      "1 tsp sugar",
      "¼ tsp baking soda",
      "1 tsp sugar",
      "½ tsp salt",
      "2 tbsp oil",
      "¼ cup curd",
      "water, for kneading",
      "oil, for frying",
      "for pressure cooking chole:",
      "1 cup chana / chickpea, soaked overnight",
      "2 tea bags",
      "¼ tsp baking soda",
      "1 tsp salt",
      "3 cup water",
      "for chhole preparation:",
      "2 tbsp oil",
      "1 bay leaf",
      "1 black cardamom",
      "2 pod cardamom",
      "1 inch cinnamon",
      "1 tsp cumin / jeera",
      "½ tsp kasuri methi",
      "1 onion, finely chopped",
      "1 tsp ginger garlic paste",
      "¼ tsp turmeric",
      "1 tsp chilli powder",
      "1 tsp coriander powder",
      "½ tsp cumin powder",
      "½ tsp garam masala",
      "1 tsp aamchur",
      "¼ tsp salt",
      "1½ cup tomato puree",
      "2 tbsp coriander, finely chopped",
      "for tempering:",
      "1 tbsp ghee / clarified butter",
      "2 chilli, slit",
      "¼ tsp turmeric",
      "¼ tsp chilli powder",
      "¼ tsp garam masala",
    ],
    instructions: [
      "how to make bhatura recipe:",
      "firstly, in a large bowl take 2 cup maida, 2 tbsp rava, 1 tsp sugar, ¼ tsp baking soda, 1 tsp sugar, ½ tsp salt and 2 tbsp oil. mix well.",
      "now add ¼ cup curd and mix well making sure everything is well combined.",
      "further, add water as required and knead the dough.",
      "knead to the smooth and soft dough without putting much pressure.",
      "grease the dough with oil, cover and rest for 2 hours",
      "after 2 hours, knead the dough slightly.",
      "pinch a ball sized dough and make a ball without andy cracks.",
      "roll slightly thick, applying oil to prevent from sticking.",
      "drop the rolled dough into the hot oil.",
      "press until the bhature puffs up and splash oil to puff up fully.",
      "flip over and fry until it turns golden brown.",
      "finally, drain off the bhatura and is ready to enjoy with chole masala.",
      "how to make chole recipe for batura:",
      "firstly, in a pressure cooker take soaked chana. i have soaked 1 cup chana in enough water for 8 hours.",
      "add 2 tea bags, ¼ tsp baking soda, 1 tsp salt and 3 cup water.",
      "cover and pressure cook for 5 whistles. if you do not have tea bags, then you can prepare tea decoction and add to cooker.",
      "once the pressure releases, open the cooker and discard the tea bags. keep aside.",
      "in a large kadai, heat 2 tbsp oil, 1 bay leaf, 1 black cardamom, 2 pod cardamom, 1 inch cinnamon, 1 tsp cumin, ½ tsp kasuri methi. saute on low flame until the spices turn aroamtic.",
      "now add 1 onion, 1 tsp ginger garlic paste and saute until onions turn golden brown.",
      "add ¼ tsp turmeric, 1 tsp chilli powder, 1 tsp coriander powder, ½ tsp cumin powder, ½ tsp garam masala, 1 tsp aamchur and ¼ tsp salt.",
      "saute on low flame until the spices turn aromatic.",
      "further add 1½ cup tomato puree and saute until the oil separates. to prepare tomato puree, i have blended 2½ ripened tomatoes in blender without adding water.",
      "now add boiled chole and mix well. adjust consistency by adding water if required.",
      "cover and simmer for 10 minutes, or until chole absorbs all the flavour.",
      "to prepare the tempering, heat 1 tbsp ghee in a pan.",
      "add 2 chilli, ¼ tsp turmeri, ¼ tsp chilli powder and ¼ tsp garam masala.",
      "saute on low flame without burning the spices.",
      "pour the tempering over the chole masala, add 2 tbsp coriander and mix well.",
      "finally, chole bhature is ready to enjoy with some onions.",
    ],
    img: "/images/chole-bhature.jpg",
    filter: "snack",
  },
  {
    title: "Pav Bhaji",
    ingredients: [
      "for bhaji:",
      "1 tbsp + 1 tbsp butter",
      "3 to mato, finely chopped",
      "¼ cup peas / matar",
      "½ capsicum, finely chopped",
      "2 potato, boiled & mashed",
      "1 tsp salt",
      "1 tsp + ¼ tsp kashmiri red chilli powder / lal mirch powder",
      "¼ tsp turmeric / haldi",
      "1 tsp + ½ tsp pav bhaji masala",
      "1 tsp + 1 tsp kasuri methi / dry fenugreek leaves",
      "2 tbsp + 1 tbsp coriander leaves, finely chop ped",
      "1 tsp ginger garlic paste",
      "1 onion, finely chopped",
      "½ lemon juice",
      "3 drops red food colour, optional",
      "water to adjust consistency",
      "to toast pav:",
      "8 pav / bread roll",
      "4 tsp butter",
      "½ tsp kashmiri red chilli powder / lal mirch powder",
      "½ tsp pav bhaji masala",
      "4 tsp coriander leaves, finely chopped",
    ],
    instructions: [
      "firstly, in a large kadai heat 1 tbsp butter and add vegetables. cook and mash well.",
      "now add 1 tsp chilli powder, ¼ tsp turmeric, 1 tsp pav bhaji masala, 1 tsp kasuri methi and 2 tbsp coriander leaves.",
      "heat a tbsp of butter and add ¼ tsp chilli powder, ½ tsp pav bhaji masala, 1 tsp kasuri methi.",
      "also add 1 tbsp coriander leaves, 1 tsp ginger garlic paste, 1 onion and ½ lemon juice. saute well.",
      "now add 3 drops of red food colour and mix well.",
      "boil and mash for 5 minutes adjusting consistency.",
      "finally, serve pav and bhaji as pav bhaji.",
    ],
    img: "/images/Pav-Bhaji.jpg",
    filter: "snack",
  },
  {
    title: "Dal Makhani",
    ingredients: [
      "for pressure cooking dal:",
      "¾ cup whole black urad dal / sabut urad dal",
      "¼ cup kidney beans / rajma",
      "water for soaking",
      "3 cups water, for pressure cooking",
      "salt to taste",
      "for dal makhani recipe:",
      "1-2 tbsp ghee / clarified butter",
      "1 bay leaf / tej patta",
      "2 large tomatoes, finely chopped",
      "1 tsp ginger-garlic paste",
      "½ tsp turmeric powder",
      "one large onion, finely chopped",
      "1 tsp coriander powder",
      "½ tsp cumin powder",
      "1 tsp kashmiri chilli powder, or as per your spice level",
      "salt to taste",
      "1 cup water, or as required",
      "2 tbsp fresh cream, or as required",
      "few coriander leaves, chopped",
      "for tempering:",
      "1 tbsp ghee / clarified butter",
      "generous pinch hing / asafoetida",
      "¾ tsp kashmiri red chilli powder",
      "¼ tsp garam masala, optional",
    ],
    instructions: [
      "pressure cooking dal recipe:",
      "take 1 cup of black urad dal and ¼ cup of rajma in a large bowl.",
      "add enough water and soak overnight or atleast for 8 hours.",
      "rinse the dal in a running water and transfer into a cooker. add 3 cups of water.",
      "also add some salt to taste.",
      "close the lid and pressure cook on medium flame for 5 whistles. or till the dals are cooked completely.",
      "dal makhani recipe:",
      "in a large kadai add a tbsp of ghee and saute bay leaf for a minute. or till they turn fragrant.",
      "then add finely chopped onions and saute till they change in colour.",
      "once onions are done, add ginger-garlic paste. saute till raw smell disappears completely.",
      "now add chopped tomatoes and cook till they are soft.",
      "add turmeric, coriander powder, cumin powder, chilli powder and salt to taste. cook the masalas for a minute.",
      "once the masalas start releasing oil from sides, add cooked dal and give a good stir.",
      "adjust the consistency by adding 1 cup of water or as required.",
      "boil for 15 minutes or more till the dal absorbs flavour and turns thick.",
      "to get the creamy texture, add 2 tbsp of fresh cream. you can also skip or increase the amount of cream according to your preference.",
      "top up with fresh coriander leaves.",
      "tempering recipe:",
      "heat tadka pan, and add a tbsp or more ghee. once it begins to melts, add hing.",
      "also add chilli powder and garam masala (optional). fry for 2-3 seconds.",
      "and immediately pour the tempering over dal makhani. give a good mix to get bright colour and flavour.",
      "serve dal makhani with jeera rice or garlic naan.",
    ],
    img: "/images/Dal-Makhani.jpg",
    filter: "main cuisine",
  },
  {
    title: "Paneer Tikka",
    ingredients: [
      "½ cup curd / yogurt (thick)",
      "½ tsp turmeric / haldi",
      "1 tsp kashmiri red chilli powder / lal mirch powder",
      "½ tsp coriander powder / daniya powder",
      "¼ tsp cumin powder / jeera powder",
      "½ tsp garam masala",
      "½ tsp kasuri methi / dry fenugreek leaves (crushed)",
      "½ tsp chaat masala",
      "1 tsp ginger - garlic paste",
      "¼ tsp ajwain / carom seeds",
      "2 tsp besan / gram flour (dry roasted)",
      "1 tbsp lemon juice",
      "salt to taste",
      "3 tsp oil",
      "vegetables:",
      "½ onions (petals)",
      "½ capsicum (red & green, cubed)",
      "5 cubes paneer / cottage cheese",
    ],
    instructions: [
      "firstly, take ½ cup thick curd / yogurt.",
      "further add in all the spices along with salt.",
      "mix till all the spices are combined well with curd.",
      "now add ½ onion petals, ½ cubed capsicum (red & green) and 5 cubes paneer.",
      "also add 1 tsp of oil.",
      "mix gently till all the vegetables are coated well.",
      "furthermore, to marinate, cover and refrigerate for 30 minutes.",
      "after marination, insert the marinated paneer, capsicum and onions into wooden skewers.",
      "further, roast it on a hot tawa or grill in oven or tandoor.",
      "finally, sprinkle some chaat masala and serve paneer tikka immediately.",
    ],
    img: "/images/paneer-tikka.jpg",
    filter: "starter",
  },
  {
    title: "Chowmein",
    ingredients: [
      "for boiling noodles:",
      "water, for boiling",
      "1 tsp salt",
      "3 tsp oil",
      "3 pack noodles",
      "for sauce:",
      "1 tsp corn flour",
      "1 tsp chilli powder",
      "¼ tsp cumin powder",
      "¼ tsp coriander powder",
      "1 tsp sugar",
      "¾ tsp salt",
      "2 tbsp soy sauce",
      "2 tbsp vinegar",
      "2 tsp oil",
      "¼ tsp pepper powder",
      "for chowmein:",
      "2 tbsp oil",
      "3 clove garlic, finely chopped",
      "1 inch ginger, finely chopped",
      "few spring onion, chopped",
      "½ onion, sliced",
      "½ green capsicum, sliced",
      "½ red capsicum, sliced",
      "½ carrot, julienne",
      "½ cup cabbage, shredded",
    ],
    instructions: [
      "what is the best way to cook noodles:",
      "firstly, in a large vessel take water.",
      "add 1 tsp salt, 3 tsp oil. get the water to a rolling boil.",
      "now add 3 pack noodles and dip completely.",
      "boil for 3 minutes, or refer to package instructions to know the cooking time.",
      "separate the noodles and drain off.",
      "rinse with cold water to stop cooking and turning noodles mushy.",
      "what is chow mein sauce made of:",
      "firstly, in a small bowl take 1 tsp corn flour, 1 tsp chilli powder, ¼ tsp cumin powder and ¼ tsp coriander powder.",
      "also add 1 tsp sugar, ¾ tsp salt, 2 tbsp soy sauce and 2 tbsp vinegar.",
      "further, add 2 tsp oil and ¼ tsp pepper powder. traditionally, sesame oil and oyster sauce is also added.",
      "mix well making sure there are no lumps, chowmein sauce ready.",
      "how do you make chow mein from scratch:",
      "firstly, in a large wok, heat 2 tbsp oil and stir fry 3 clove garlic, 1 inch ginger and few spring onion.",
      "add ½ onion, ½ green capsicum, ½ red capsicum, ½ carrot and ½ cup cabbage.",
      "stir fry until the vegetables shrink yet remain crunchy.",
      "make sone space in the centre and pour the prepared sauce.",
      "stir fry on high flame for a minute until everything is well combined.",
      "also, add ½ cup cabbage and stir fry.",
      "further, add boiled noodles and give a good toss.",
      "make sure the spices are well combined with noodles.",
      "finally, add more spring onions, and enjoy veg chowmein.",
    ],
    img: "/images/chowmein.jpg",
    filter: "chinese",
  },
  {
    title: "Gobhi Manchurian",
    ingredients: [
      "for manchurian ball:",
      "3 cup cabbage (finely chopped)",
      "1 tsp chilli powder",
      "½ tsp pepper powder",
      "½ tsp salt",
      "1 tsp ginger garlic paste",
      "¼ cup maida",
      "2 tbsp corn flour",
      "oil (for frying)",
      "for manchurian sauce:",
      "2 tbsp oil",
      "1 chilli (chopped)",
      "5 clove garlic (chopped)",
      "1 inch ginger (chopped)",
      "½ onion (chopped)",
      "2 tbsp spring onion (chopped)",
      "½ capsicum (chopped)",
      "2 tbsp tomato sauce",
      "2 tbsp vinegar",
      "2 tbsp soy sauce",
      "1 tbsp chilli sauce",
      "½ tsp salt",
      "½ tsp chilli powder",
      "½ cup water",
      "1 tsp corn flour",
    ],
    instructions: [
      "firstly, in a large bowl take 3 cup cabbage, 1 tsp chilli powder, ½ tsp pepper powder, ½ tsp salt and 1 tsp ginger garlic paste.",
      "squeeze and mix well making sure everything is well combined.",
      "also, the cabbage starts release water. this water is enough for binding.",
      "now add ¼ cup maida and 2 tbsp corn flour.",
      "mix well forming a dough. do not add any extra water, the water from the cabbage is sufficient for binding.",
      "now grease the hand with oil and prepare a small ball-sized ball.",
      "deep fry in hot oil keeping the flame on medium.",
      "stir occasionally, until the manchurian balls turn golden brown and crisp.",
      "drain off to remove excess oil. keep aside.",
      "to prepare the manchurian sauce, heat 2 tbsp oil. add 1 chilli, 5 clove garlic, 1 inch ginger and stir fry on high flame.",
      "add ½ onion, 2 tbsp spring onion and ½ capsicum. stir fry on high flame.",
      "further add 2 tbsp tomato sauce, 2 tbsp vinegar, 2 tbsp soy sauce, 1 tbsp chilli sauce, ½ tsp salt, ½ tsp chilli powder.",
      "stir and mix well until all the sauces are well combined.",
      "add ¼ cup water to prevent the sauce from burning.",
      "now prepare the corn flour slurry, by mixing 1 tsp corn flour in ¼ cup water.",
      "pour in corn flour slurry and mix well.",
      "cook until the sauce turns glossy.",
      "add in fried cabbage ball, 2 tbsp spring onion and mix gently coating the sauce uniformly.",
      "finally, enjoy cabbage manchurian with tomato sauce.",
    ],
    img: "/images/manchurian.jpg",
    filter: "chinese",
  },
  {
    title: "Chilli Potato",
    ingredients: [
      "for boiling:",
      "water",
      "1 tsp salt",
      "2 potato / aloo (wedge)",
      "for crispy aloo:",
      "¼ tsp turmeric",
      "½ tsp chilli powder",
      "¼ tsp salt",
      "2 tbsp maida",
      "2 tbsp corn flour",
      "water (for batter)",
      "oil (for frying)",
      "for sauce:",
      "2 tbsp oil",
      "3 clove garlic (sliced)",
      "1 inch ginger (chopped)",
      "2 tbsp spring onions (chopped)",
      "½ onion (petals)",
      "½ capsicum (chopped)",
      "2 tbsp tomato sauce",
      "2 tbsp vinegar",
      "2 tbsp soy sauce",
      "¼ tsp chilli powder",
      "¼ tsp salt",
      "¼ tsp pepper powder",
      "1 tsp corn flour",
      "½ cup water",
      "2 tbsp spring onion (chopped)",
    ],
    instructions: [
      "firstly, in a large vessel take water and add 1 tsp salt.",
      "once the water comes to a boil, add 2 potato.",
      "boil for 2 minutes and drain off the potato.",
      "now add ¼ tsp turmeric, ½ tsp chilli powder and ¼ tsp salt.",
      "mix well making sure all the spices are well combined.",
      "further, add 2 tbsp maida, 2 tbsp cornflour and 2 tbsp water.",
      "mix well adding more water forming a smooth batter.",
      "now deep fry in hot oil, keeping the flame on medium.",
      "stir occasionally and fry until the aloo turns golden and crisp.",
      "drain off and keep aside.",
      "in a large wok, take 2 tbsp oil. stir fry 3 clove garlic, 1 inch ginger and 2 tbsp spring onions.",
      "add and stir fry ½ onion, ½ capsicum.",
      "now add 2 tbsp tomato sauce, 2 tbsp vinegar, 2 tbsp soy sauce, ¼ tsp chilli powder, ¼ tsp salt and ¼ tsp pepper powder.",
      "stir fry on high flame until the sauces are well combined.",
      "further, add ½ cup cornflour slurry. to prepare the slurry, mix 1 tsp cornflour in ½ cup water.",
      "cook until the slurry turns glossy.",
      "now add fried aloo, 2 tbsp spring onion and mix gently on high flame.",
      "finally, enjoy chilli potato recipe topped with roasted sesame.",
    ],
    img: "/images/chilli-potato.jpg",
    filter: "chinese",
  },
  {
    title: "Spring Roll",
    ingredients: [
      "for sheet / wrapper:",
      "2 cup maida / plain flour",
      "2 tbsp corn flour",
      "½ tsp salt",
      "2½ cup water",
      "for stuffing:",
      "2 tbsp oil",
      "3 clove garlic (finely chopped)",
      "2 chilli (finely chopped)",
      "2 tbsp spring onion (chopped)",
      "½ onion (sliced)",
      "1 carrot (julienne)",
      "2 cup cabbage (chopped)",
      "5 beans (chopped)",
      "½ capsicum (chopped)",
      "2 tbsp vinegar",
      "2 tbsp soy sauce",
      "2 tsp chilli sauce",
      "¼ tsp pepper powder",
      "½ tsp salt",
      "other ingredients:",
      "½ cup maida paste (for sealing)",
      "oil (for frying)",
    ],
    instructions: [
      "how to prepare spring roll wrapper:",
      "firstly, in a large bowl take 2 cup maida, 2 tbsp corn flour and ½ tsp salt.",
      "add 2½ cup water and mix well using a whisk.",
      "whisk until a smooth lump-free batter is formed adding water as required.",
      "now grease the pan and pour a ladleful of batter on a hot pan.",
      "swirl once making sure the batter is uniformly spread.",
      "cook for a minute or until the sheet is cooked without browning.",
      "now flip over gently and continue to cook.",
      "finally, spring roll wrapper is ready. you can cover and use to prepare patti samosa or spring rolls.",
      "how to prepare veg stuffing:",
      "firstly, in a large wok, heat 2 tbsp oil. saute 3 clove garlic, 2 chilli and 2 tbsp spring onion.",
      "add ½ onion and stir fry on high flame.",
      "now add 1 carrot, 2 cup cabbage, 5 beans, ½ capsicum.",
      "stir fry without losing the crunchiness of vegetables.",
      "further, add 2 tbsp vinegar, 2 tbsp soy sauce, 2 tsp chilli sauce, ¼ tsp pepper powder and ½ tsp salt.",
      "mix well making sure everything is well combined. stuffing is ready.",
      "how to fold and fry spring roll:",
      "firstly, take a prepared wrapper and place a tbsp of prepared veg stuffing.",
      "rub a tsp of maida paste around the edge. maida helps to seal the roll.",
      "now roll and fold the sides making sure the roll is sealed tight.",
      "deep fry in hot oil, keeping the flame on low.",
      "stir occasionally, until the roll turns golden brown and crisp.",
      "drain off removing excess oil.",
      "finally, enjoy veg spring roll with sweet chilli sauce.",
    ],
    img: "/images/Spring-Roll.jpg",
    filter: "chinese",
  },
  {
    title: "Rasgulla",
    ingredients: [
      "2 litre milk (full cream)",
      "2 tbsp lemon juice",
      "1 cup sugar",
      "5 cup water",
      "3 pod cardamom",
    ],
    instructions: [
      "firstly, in a large vessel get 2 litre milk of milk to a boil stirring occasionally.",
      "once the milk comes to a boil, pour 2 tbsp lemon juice and stir well. you can alternatively use curd or vinegar.",
      "stir until the milk curdles keeping the flame on low to medium.",
      "do not boil further once water separates completely.",
      "drain the curdled milk over a cloth-lined over a colander. you can use the leftover water to make soup or knead the dough as they are very nutritious.",
      "squeeze off the water completely. be careful as the curdled milk will be very hot.",
      "rinse off the curdled milk with fresh water to remove sourness from lemon juice.",
      "squeeze off the water completely. do not over squeeze as the moisture in paneer will be lost.",
      "hang for 1 hour making sure the water is drained completely, yet remain the moisture.",
      "after 1 hour, start to mash the paneer for 5 minutes.",
      "mash the paneer till it turns out smooth texture without any grains of paneer.",
      "now prepare small ball sized paneer and keep aside. cover and keep to prevent from drying.",
      "in a large vessel take 1 cup sugar, 5 cup water and 3 pod cardamom.",
      "stir and dissolve the sugar completely.",
      "now boil the water for 5 minutes.",
      "drop in rolled paneer balls one by one into boiling sugar water.",
      "cover and boil for 10 minutes or until rasgulla doubles in size.",
      "now drop into ice-cold water immediately, to prevent from shrinking in size.",
      "once cooled completely, take into a serving bowl and pour in leftover sugar water.",
      "finally, enjoy rasgulla chilled or as it is.",
    ],
    img: "/images/Rasgulla.jpg",
    filter: "sweet",
  },
  {
    title: "Gulab Jamun",
    ingredients: [
      "FOR JAMUN:",
      "¾ cup (100 grams) milk powder, unsweetened",
      "½ cup (60 grams) maida / plain flour",
      "½ tsp baking powder",
      "2 tbsp ghee / clarified butter",
      "milk, for kneading",
      "ghee or oil, for frying",
      "FOR SUGAR SYRUP:",
      "2 cup sugar",
      "2 cup water",
      "2 cardamom",
      "¼ tsp saffron / kesar",
      "1 tsp lemon juice",
      "1 tsp rose water",
    ],
    instructions: [
      "Firstly, in a large bowl take ¾ cup milk powder, ½ cup maida and ½ tsp baking powder.",
      "Mix well, homemade gulab jamun mix is ready.",
      "Now add 2 tbsp ghee and mix well making the flour moist.",
      "Further, add milk as required start to combine.",
      "Combine well forming a soft dough. do not knead the dough.",
      "Cover and rest for 10 minutes.",
      "Meanwhile, prepare the sugar syrup by taking 2 cup sugar, 2 cup water, 2 cardamom and ¼ tsp saffron.",
      "Mix well and boil for 5 minutes or until the sugar syrup turns sticky. do not attain any string consistency.",
      "Turn off the flame and add 1 tsp lemon juice and 1 tsp rose water. lemon juice is added to prevent sugar syrup from crystallizing.",
      "Cover and keep the sugar syrup aside.",
      "After 10 minutes or resting the dough, start to prepare small ball sized jamuns.",
      "Make sure there are no cracks in the jamun. if there are cracks then there are high chances for jamuns to break while frying.",
      "Deep fry in medium hot oil or ghee. frying in ghee gives good flavour to jamuns.",
      "Stir continuously and fry on low flame.",
      "Fry until the jamuns turn golden brown.",
      "Drain off and transfer the jamun into a hot sugar syrup.",
      "Cover and rest for 2 hours or until jamuns absorb the sugar syrup and doubles in size.",
      "Finally, enjoy gulab jamun with ice cream or as it is.",
    ],
    img: "/images/Gulab-jamun.jpg",
    filter: "sweet",
  },
  {
    title: "Rajbhog",
    ingredients: [
      "for paneer balls:",
      "1½ litre milk (cow)",
      "2 tbsp lemon juice",
      "1 tbsp rava / semolina / suji",
      "pinch saffron food colour",
      "pinch cardamom powder",
      "2 tbsp crushed dry fruits (cashew, pistachios, almonds)",
      "for sugar syrup:",
      "1½ cup sugar",
      "8 cup water",
      "2 tbsp  saffron / kesar water",
    ],
    instructions: [
      "firstly, knead fresh paneer till it turns out smooth texture without any grains of milk.",
      "now add a tbsp of suji, pinch saffron food colour and pinch cardamom powder.",
      "knead further for 5 more minutes or until a soft dough is formed.",
      "pinch a small ball sized ball and flatten it.",
      "place ½ tsp crushed dry fruit in the centre.",
      "get the edges together, and make a round ball without any cracks. keep aside.",
      "sugar syrup recipe:",
      "firstly, in a deep vessel take 1½ cup of sugar.",
      "furthermore, add 8 cups of water and 2 tbsp saffron.",
      "boil the syrup for 10 minutes on medium flame.",
      "after that, drop the prepared paneer balls into boiling sugar syrup.",
      "cover and boil for 15 minutes. the paneer balls will have doubled in size.",
      "furthermore, keep aside till it cools completely and then refrigerate.",
      "finally, serve rajbhog / kesar rasgulla chilled or at room temperature garnished with few saffron strands.",
    ],
    img: "/images/rajbhog.jpg",
    filter: "sweet",
  },
  {
    title: "Kadhai Paneer",
    ingredients: [
      "FOR KADAI MASALA:",
      "2 tbsp coriander seeds",
      "2 tsp cumin",
      "2 tsp fennel",
      "3 dried red chilli",
      "3 dried red chilli",
      "2 tsp pepper",
      "FOR SABZI:",
      "2 tbsp oil",
      "2 tsp ghee",
      "1 tsp cumin",
      "5 cloves garlic, finely chopped",
      "1 inch ginger, finely chopped",
      "2 onion, finely chopped",
      "½ tsp turmeric",
      "1 tsp chilli powder",
      "1 tbsp kadai masala",
      "1 tsp salt",
      "3 tomato, chopped",
      "2 tbsp cream",
      "1 tsp kasuri methi, crushed",
      "2 tbsp coriander, chopped",
      "1 inch ginger, julienne cut",
      "FOR STIR FRY:",
      "2 tsp oil",
      "onion",
      "capsicum",
      "tomato",
      "paneer",
      "1 tsp garam masala",
    ],
    instructions: [
      "Firstly, to prepare kadai masala, in a pan take 2 tbsp coriander seeds, 2 tsp cumin, 2 tsp fennel, 3 dried red chilli, 3 dried red chilli and 2 tsp pepper.",
      "Dry roast on low flame until the spices turn aromatic.",
      "Cool completely, and grind to a coarse powder. kadai masala is ready.",
      "To prepare the sabzi, in a kadai heat 2 tbsp oil, 2 tsp ghee and saute 1 tsp cumin until it turns aromatic.",
      "Now add 5 cloves garlic, 1 inch ginger, 2 onion and saute until the onions turn golden brown.",
      "Further keeping the flame low, add ½ tsp turmeric, 1 tsp chilli powder, 1 tbsp kadai masala, 1 tsp salt.",
      "Saute on low flame until the spices turn aromatic.",
      "Now add 3 tomato and saute until the tomato turn soft and mushy.",
      "Continue to cook until the oil separates from the sides.",
      "Further, in a pan take 2 tsp oil. add onion, capsicum, tomato, paneer and 1 tsp garam masala.",
      "Stir fry on high flame until the vegetables turn crunchy.",
      "Transfer the stir-fried vegetables, and add half a cup of water.",
      "Mix well and cook for 2 minutes.",
      "Further add 2 tbsp cream, 1 tsp kasuri methi, crushed, 2 tbsp coriander and 1-inch ginger. mix gently.",
      "Finally, kadai paneer recipe is ready to enjoy with roti or naan.",
    ],
    img: "/images/Kadai-Paneer.jpg",
    filter: "main cuisine",
  },
  {
    title: "Dum Aloo",
    ingredients: [
      "for aloo preparation:",
      "8 baby potatoes / aloo",
      "2 cups water, or as required",
      "½ tsp salt",
      "4 tbsp oil",
      "1 tsp kashmiri chilli powder",
      "½ tsp turmeric",
      "for masala paste / gravy:",
      "1 inch cinnamon stick, dalchini",
      "3 cloves",
      "2 cardamom, elachi",
      "½ onion, thinly sliced",
      "¾ tsp ginger-garlic paste",
      "1 large tomato, finely chopped",
      "10 cashews",
      "for dum aloo recipe:",
      "1 tsp oil",
      "¾ tsp jeera / cumin seeds",
      "1 - 1½ tsp chilli powder, adjust to your spice level",
      "¼ tsp turmeric powder",
      "¾ tsp coriander powder",
      "salt to taste",
      "¼ tsp cumin powder / jeera powder, optional",
      "¼ cup curd / yogurt",
      "1 tsp kasuri methi / dry fenugreek leaves",
      "¾ - 1 cup water, adjust to required consistency",
      "few coriander leaves, finely chopped",
    ],
    instructions: [
      "in a kadai, add a tsp of oil along with cumin seeds.",
      "once they splutter, add prepared masala paste and fry for 5-6 minutes.",
      "now add spices like chilli powder, turmeric powder, coriander powder, cumin powder and salt to taste.",
      "continue to fry till oil separates.",
      "turn the flame to low and add curd. give a good mix.",
      "add 1 cup of water or as required to adjust the consistency.",
      "finally, add fried aloos and cook for 20 min.",
      "lastly add some crushed kasuri methi.",
      "garnish with coriander leaves and serve dum aloo hot with rice, chapathi or naan.",
    ],
    img: "/images/dum-aloo.jpg",
    filter: "main cuisine",
  },
  {
    title: "Palak Paneer",
    ingredients: [
      "for palak paste:",
      "5 cup water",
      "1 bunch palak / spinach",
      "1 inch ginger",
      "1 clove garlic",
      "3 green chilli",
      "other ingredients:",
      "3 tsp oil",
      "1 tsp butter",
      "11 cube paneer / cottage cheese",
      "1 tsp cumin / jeera",
      "1 inch cinnamon",
      "4 cloves",
      "2 pod cardamom / elachi",
      "1 bay leaf / tej patta",
      "2 tsp kasuri methi / dry fenugreek leaves",
      "½ onion (finely chopped)",
      "½ tomato (finely chopped)",
      "¼ cup water",
      "¾ tsp salt",
      "¼ tsp garam masala",
      "2 tbsp cream / malai",
    ],
    instructions: [
      "take blanched palak, 1 inch ginger, 1 clove garlic and 4 green chilli.",
      "blend to smooth paste without adding any water. keep aside.",
      "now in a large kadai heat 3 tsp oil, 1 tsp butter and roast the spices till it turns aromatic.",
      "further, add ½ onion and saute till it turns golden brown",
      "additionally, add ½ tomato and saute till the tomatoes turn soft and mushy.",
      "add prepared palak paste, ¼ cup water and ¾ tsp salt.",
      "mix well adjusting consistency as required.",
      "further, add roasted paneer and mix well.",
      "simmer for 5 minutes or till paneer absorbs flavour.",
      "turn off the flame and add ¼ tsp garam masala, 1 tsp kasuri methi and 2 tbsp cream. mix well.",
      "finally, serve restaurant-style palak paneer with roti / naan.",
    ],
    img: "/images/palak-paneer.jpg",
    filter: "main cuisine",
  },
  {
    title: "Gobhi ki Sabzi",
    ingredients: [
      "for blanching:",
      "4 cup water",
      "1 tsp salt",
      "½ tsp turmeric",
      "2 cup gobi / cauliflower (florets)",
      "for sabzi:",
      "2 tbsp oil",
      "1 inch ginger (finely chopped)",
      "2 chilli (slit)",
      "few curry leaves",
      "1 onion (finely chopped)",
      "½ tsp turmeric",
      "½ tsp kashmiri red chilli powder",
      "½ tsp salt",
      "1 tomato (finely chopped)",
      "½ cup peas (boiled or frozen)",
      "2 tbsp water",
      "1 tsp lemon juice",
      "2 tbsp coriander (finely chopped)",
    ],
    instructions: [
      "firstly, in a large vessel take 4 cup water and boil with 1 tsp salt, ½ tsp turmeric.",
      "add 2 cup gobi and boil for 2 minutes or until gobi is blanched well.",
      "drain off the water and keep aside.",
      "in a kadai heat 2 tbsp oil and saute 1 inch ginger, 2 chilli and few curry leaves.",
      "add 1 onion and saute until onions shrink.",
      "further add ½ tsp turmeric, ½ tsp chilli powder and ½ tsp salt. saute well.",
      "now add 1 tomato and saute until tomatoes turn soft and mushy.",
      "additionally, add blanched gobi and ½ cup peas.",
      "mix gently without breaking gobi.",
      "add 2 tbsp water, cover and simmer for 5 minutes.",
      "now add 1 tsp lemon juice and 2 tbsp coriander. mix well.",
      "finally, enjoy gobhi ki sabji with hot steamed rice or phulka.",
    ],
    img: "/images/Gobi_Sabzi.jpg",
    filter: "main cuisine",
  },
  {
    title: "Shahi Paneer",
    ingredients: [
      "for onion tomato puree:",
      "1 tbsp butter",
      "2 pods cardamom",
      "1 inch cinnamon",
      "1 pod black cardamom",
      "3 cloves",
      "1 onion, sliced",
      "3 clove garlic",
      "1 inch ginger, chopped",
      "2 tomato, chopped",
      "1 cup water",
      "1 tsp salt",
      "for curry:",
      "1 tbsp butter",
      "½ tsp shahi jeera",
      "1 bay leaf",
      "¼ tsp turmeric",
      "1 tsp kashmiri red chilli powder",
      "¼ cup cream / malai",
      "15 cubes paneer / cottage cheese",
      "few threads saffron / kesar",
      "½ tsp kasuri methi, crushed",
      "¼ tsp garam masala",
    ],
    instructions: [
      "firstly, in a kadai heat 1 tbsp butter and saute 2 pods cardamom, 1 inch cinnamon,1 pod black cardamom and 3 cloves.",
      "now add 1 onion, 3 clove garlic and 1 inch ginger.",
      "saute slightly until onion softens.",
      "further, add 2 tomato and saute slightly.",
      "also, add 1 cup water and 1 tsp salt. mix well.",
      "cover and boil for 20 minutes or until it softens completely.",
      "cool completely and transfer to a blender. blend to smooth paste without adding any water.",
      "sieve the puree making sure the puree is smooth and silky. keep aside.",
      "in a large kadai heat 1 tbsp butter and saute ½ tsp shahi jeera and 1 bay leaf.",
      "keeping flame on low add ¼ tsp turmeric and 1 tsp chilli powder.",
      "saute slightly until the spices turn aromatic.",
      "add in the prepared tomato-onion puree and mix well.",
      "further, add ¼ cup cream and mix until everything is well combined.",
      "add in 15 cubes paneer, few threads saffron and mix well.",
      "cover and simmer for 5 minutes or until flavours are absorbed well.",
      "now add ½ tsp kasuri methi and ¼ tsp garam masala. mix well.",
      "finally, enjoy shahi paneer with roti or garlic naan.",
    ],
    img: "/images/shahi-paneer.jpg",
    filter: "main cuisine",
  },
];
//filters :  starter , main cuisine , snack , chinese

// on loading display all recipes
// ONLOAD Event listener on window so, when the webpage gets load it loads all dish-cards details
window.addEventListener("load", loadFunc);

// Function that gets called on loading of the window
function loadFunc() {
  let container = document.getElementById("recipes-container");
  let title = document.getElementsByClassName("dish-title");
  let ingredients = document.getElementsByClassName("dish-ingredients");
  let instructions = document.getElementsByClassName("dish-instructions");
  let image = document.getElementsByClassName("dish-image");

  for (let i = 0; i < recipes.length; i++) {
    let elem = recipes[i];

    let ing = "";
    elem.ingredients.forEach((value) => {
      ing += value + ",";
    });
    if (ing.length > 200) {
      ing = ing.substring(0, 200);
      ing += " ..... ";
    } else {
      ing = ing.substring(0, ing.length - 1);
    }

    let inst = "";
    elem.instructions.forEach((value) => {
      inst += value + ",";
    });
    if (inst.length > 400) {
      inst = inst.substring(0, 400);
      inst += " ..... ";
    } else {
      inst = inst.substring(0, inst.length - 1);
    }

    title[i].innerHTML = elem.title;
    image[i].src = elem.img;
    ingredients[i].insertAdjacentText("beforeend", ing);
    instructions[i].insertAdjacentText("beforeend", inst);
  }
}

// "pos" is used to if the user searches for any dish by writing in the input tag in header and the main is scrolled somewhat below
// so if the searching is complete by the user main element remains scrolled same on y axis as it was earlier before searching
let pos;

// FOCUS Event Listenere on the input element present in the header so that when the user starts searching for a recipe it marks the value of the y axis already scrolled . So that when the user search is complete we can make the webpage scrolled on the same length
document.getElementById("input").addEventListener("focus", () => {
  pos = window.scrollY;
  console.log(pos);
});

// KEYUP Event Listener on the input element present in the header so that when the user searches for a specific recipe it gets loaded on the webpage with matched recipes
document.getElementById("input").addEventListener("keyup", keyUpFunc);

// Function that gets called when the user is searching for a specific recipe by typing in the input element in the header
function keyUpFunc(e) {
  e.preventDefault();
  let tag = document.getElementById("input");
  let a = tag.value;
  a = a.toLowerCase();
  a = a.split(" ").join("");
  //   console.log(a);

  console.log("Pos : " + pos);

  if (a.length == 0) {
    scrollTo(0, pos);
    console.log("length 0 : " + window.scrollY);
  } else {
    scrollTo(0, 0);
    console.log("length !0 : " + window.scrollY);
  }

  let allCards = document.getElementsByClassName("dish-card");
  //   console.log(allCards.length);

  let count = 0;

  for (let i = 0; i < allCards.length; i++) {
    let t = document.getElementsByClassName("dish-title");
    // console.log("t: " + t);
    let b = t[i].innerHTML.toLowerCase();
    b = b.split(" ").join("");
    if (b.match(a)) {
      count++;
      // console.log(
      //   a +
      //     " : " +
      //     allCards[i].getElementsByClassName("dish-title")[0].innerHTML
      // );
      allCards[i].style.display = "flex";
      document.getElementById("no-dishes").style.display = "none";
      document.getElementById("recipes-title").style.display = "block";
    } else {
      allCards[i].style.display = "none";
    }
  }

  if (count == 0) {
    document.getElementById("no-dishes").style.display = "block";
    document.getElementById("recipes-title").style.display = "none";
  }
}

// scrollPos is used when we clicking on the read more button to check complete recipe and then after closing the modal of the recipe we are there in the same position scrolled in the webpage as it was before clicking the read more button

// Example : let recipe at the top is of rasmalai , and we scrolled the page and click read more button of recipe dal makhani then after closing the modal of dal makhani we are not at the top of the page seeing rasmalai recipe instead we are at the same position at the dal makhani recipe on the page
let scrollPos;

// getting all the buttons of class read-more and then adding event CLICK on all the buttons to display modal on the webpage
let content = document.getElementsByClassName("read-more");
for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("click", () => {
    // getting the scrolled value of the webpage when we click read more button of the recipe so after closing the modal we are at the same position as before
    scrollPos = window.scrollY;
    readMoreFunc(i);
  });
}

for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("touchstart", () => {
    // getting the scrolled value of the webpage when we click read more button of the recipe so after closing the modal we are at the same position as before
    scrollPos = window.scrollY;
    readMoreFunc(i);
  });
}

// Function called when we click read more button of any recipe
function readMoreFunc(i) {
  document.body.style.background = "#473e3e";

  document.getElementById("head").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("footer").style.display = "none";

  let modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.style.backgroundColor = "white";

  // setting title on the modal
  let title = document.getElementById("dish-title-modal");
  title.innerHTML = recipes[i].title;

  // setting image on the modal
  let image = document.getElementById("dish-image-modal");
  image.src = recipes[i].img;

  // setting ingredients list on the modal by traversing ingredients array elements one by one and adding li tags of each element on the webpage
  let inglist = document.getElementById("ingredients-list");
  console.log(recipes[i].ingredients);
  inglist.innerHTML = "";
  for (let j = 0; j < recipes[i].ingredients.length; j++) {
    let e = `<li>${recipes[i].ingredients[j]}</li>`;
    inglist.insertAdjacentHTML("beforeend", e);
  }

  // setting instructions list on the modal by traversing instructions array elements one by one and adding li tags of each element on the webpage
  let instlist = document.getElementById("instructions-list");
  console.log(recipes[i].instructions);
  instlist.innerHTML = "";
  for (let j = 0; j < recipes[i].instructions.length; j++) {
    let e = `<li>${recipes[i].instructions[j]}</li>`;
    instlist.insertAdjacentHTML("beforeend", e);
  }
}

// -> if there is no dish with the given name by the user show "NO AVAILABLE DISHES "

let recipe_modal = document.getElementById("modal");
let close = document.getElementById("close");
const closeFunc = () => {
  document.getElementById("head").style.display = "flex";
  document.getElementById("main").style.display = "block";
  document.getElementById("footer").style.display = "block";
  recipe_modal.style.display = "none";
  document.body.style.backgroundColor = "rgb(255, 255, 255)";
  window.scrollTo(0, scrollPos);
  // console.log(document.getElementById("main").style.top);
};

close.addEventListener("click", closeFunc);

// To DO :-
// then on applying filters event listener uske andar recipe-container ka content change kar dunga
