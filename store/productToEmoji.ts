const PRODUCT_TO_EMOJI: Record<string, string> = {
  "egg": "🥚",
  "flour": "🌾",
  "fresh-sage": "🌿",
  "salt": "🧂",
  "sparkling-water": "🥤",
  "vegetable-oil": "🛢️",
  "white-bread": "🍞",
  "garlic": "🧄",
  "olive-oil": "🫒",
  "spring-onions": "🧅",
  "capers": "🍇",
  "anchovies": "🐟",
  "butter-sliced": "🧈",
  "chili-powder": "🌶️",
  "cherry-tomatoes": "🍅",
  "crusty-bread": "🥖",
  "salt-and-pepper": "🧂",
  "oregano": "🌿",
  "parsley": "🌿",
  "red-pepper-flakes": "🌶️",
  "vinegar-(white)": "🍾",
  "red-pepper": "🫑",
  "sugar-in-bowl": "🍚",
  "fresh-chives": "🌿",
  "radishes": "🍎",
  "tomatoes-canned": "🥫",
  "mixed-fresh-herbs": "🌿",
  "sundried-tomatoes": "🍅",
  "tomato": "🍅",
  "cornmeal": "🌽",
  "fennel": "🌿",
  "mozzarella": "🧀",
  "pepper": "🌶️",
  "paprika": "🌶️",
  "lemon-juice": "🍋",
  "lemon-wedge": "🍋",
  "black-pepper": "🌶️",
  "celery": "🌱",
  "parsley-curly": "🌿",
  "watercress": "🌿",
  "breadcrumbs": "🍞",
  "cauliflower": "🥦",
  "shallots": "🧅",
  "thyme": "🌿",
  "water": "💧",
  "tomato-paste": "🍅",
  "parmesan": "🧀",
  "red-onion": "🧅",
  "tomato-sauce-or-pasta-sauce": "🥫",
  "olives-mixed": "🫒",
  "black-olives": "🫒",
  "hard-boiled-egg": "🥚",
  "bell-pepper-orange": "🫑",
  "chicken-broth": "🍲",
  "pistachios": "🌰",
  "lemon": "🍋",
  "mayonnaise": "🍶",
  "dijon-mustard": "🍶",
  "iceberg-lettuce": "🥬",
  "roma-tomatoes": "🍅",
  "caper-berries": "🍇",
  "balsamic-vinegar": "🍾",
  "fresh-basil": "🌿",
  "port": "🍷",
  "prunes": "🍑",
  "broccoli": "🥦",
  "rosemary": "🌿",
  "anchovy-paste": "🐟",
  "avocado": "🥑",
  "romaine": "🥬",
  "shrimp": "🦐",
  "yellow-bell-pepper": "🫑",
  "english-cucumber": "🥒",
  "feta": "🧀",
  "spaghetti": "🍝",
  "green-tomato": "🍅",
  "pita-bread": "🥙",
  "white-pepper": "🧂",
  "sour-cream": "🍶",
  "artichokes": "🌱",
  "radicchio": "🥬",
  "spinach": "🍃",
  "shredded-cheese-white": "🧀",
  "raisins": "🍇",
  "turnip-greens": "🥬",
  "mint": "🌿",
  "zucchini": "🥒",
  "bucatini": "🍝",
  "italian-bread": "🥖",
  "sweet-onion": "🧅",
  "goat-cheese": "🧀",
  "bay-leaves": "🌿",
  "Edam-cheese": "🧀",
  "basil": "🌿",
  "manchego": "🧀",
  "ground-nutmeg": "🌰",
  "penne-pasta": "🍝",
  "lime-wedge": "🍋",
  "ribeye-raw": "🥩",
  "escarole": "🥬",
  "broccoli-carrots-cauliflower-mix": "🥦",
  "golden-raisins": "🍇",
  "pine-nuts": "🌰",
  "chicken-breasts": "🍗",
  "tarragon": "🌿",
  "almonds": "🌰",
  "beefsteak-tomato": "🍅",
  "broccoli-rabe": "🥦",
  "fusilli": "🍝",
  "kale": "🥬",
  "turkey-breast": "🦃",
  "pork-chops": "🥩",
  "swiss-chard": "🥬",
  "lemon-balm": "🍋",
  "buttermilk": "🥛",
  "sorrel": "🍃",
  "beets": "🍠",
  "tofu": "🍢",
  "whole-grain-mustard": "🍶",
  "white-beans": "🥫",
  "mushrooms": "🍄",
  "orange-zest": "🍊",
  "red-chili": "🌶️",
  "beef-broth": "🍲",
  "tbone-or-porterhouse-raw": "🥩",
  "corn-on-the-cob": "🌽",
  "fluid-cream": "🥛",
  "snow-pea-sprouts-or-pea-shoots": "🌱",
  "scallops": "🐚",
  "beef-cubes-raw": "🥩",
  "sliced-carrot": "🥕",
  "lamb-chops": "🥩",
  "raw-pork-ribs": "🥩",
  "arugula-or-rocket-salad": "🥬",
  "leg-of-lamb": "🍖",
  "canned-tuna": "🥫",
  "green-beans-or-string-beans": "🌱",
  "new-potatoes": "🥔",
  "raw-bacon": "🥓",
  "horseradish": "🌱",
  "potatoes-yukon-gold": "🥔",
  "egg-yolk": "🍳",
  "cod-fillet": "🐟",
  "fingerling-potatoes": "🥔",
  "marjoram": "🌿",
  "yellow-wax-beans": "🌱",
  "pattypan-squash": "🍽️",
  "hot-sauce-or-tabasco": "🌶️",
  "salmon": "🐟",
  "dill-pickles": "🥒",
  "turnips": "🍠",
  "eggplant": "🍆",
  "brussels-sprouts": "🍽️",
  "brown-rice-vermicelli": "🍜",
  "rum-dark": "🥃",
  "aloe-vera-juice": "🍵",
  "amaretti": "🍪",
  "apple": "🍏",
  "asparagus": "🌱",
  "beer": "🍺",
  "berries-mixed": "🍓",
  "cranberry-beans": "🍲",
  "breakfast-sausage-links": "🌭",
  "no": "❌",
  "butternut-squash": "🍽️",
  "cabbage": "🥬",
  "calamari-or-squid": "🦑",
  "cheddar-cheese": "🧀",
  "cheddar-cheese-soup": "🍲",
  "cherries": "🍒",
  "snack-mix": "🥣",
  "whole-chicken": "🍗",
  "chicken-liver": "🍗",
  "milk-chocolate": "🍫",
  "beef-chuck-roast": "🥩",
  "cinnamon": "🌿",
  "clams": "🐚",
  "brewed-coffee": "☕",
  "shortbread-cookies": "🍪",
  "sliced-baguette-or-crostini": "🥖",
  "cucumber": "🥒",
  "pie-crust": "🥧",
  "porridge-or-cream-of-wheat": "🥣",
  "dried-porcini-mushrooms": "🍄",
  "summer-savory": "🌿",
  "edible-flowers": "🌸",
  "farro-or-spelt": "🌾",
  "broad-beans": "🌱",
  "figs-fresh": "🍑",
  "filo-dough": "🥐",
  "fish-fillet": "🐟",
  "cooked-bacon": "🥓",
  "mixed-fresh-fruit": "🍇",
  "rice-wild-uncooked": "🌾",
  "mixed-greens-or-mesclun": "🥗",
  "halloumi": "🧀",
  "guinea-fowl": "🦃",
  "vanilla-ice-cream": "🍨",
  "lamb-shanks": "🍖",
  "lavender": "🌿",
  "leeks": "🌱",
  "lentils-brown": "🌱",
  "white-cream-fluffy": "🍨",
  "mussels": "🐚",
  "hazelnut-chocolate-spread": "🍫",
  "nuts-mixed": "🌰",
  "orange": "🍊",
  "pancetta": "🥓",
  "peach": "🍑",
  "pears-bosc": "🍐",
  "peas": "🌱",
  "green-pepper": "🫑",
  "pickled-beets": "🥫",
  "brown-flour": "🌾",
  "pomegranate": "🍇",
  "pork-tenderloin-raw": "🥩",
  "proscuitto": "🥓",
  "pumpkin": "🎃",
  "whole-rabbit": "🐇",
  "ravioli": "🍝",
  "ribs": "🥩",
  "uncooked-white-rice": "🌾",
  "ricotta": "🧀",
  "root-vegetables": "🍠",
  "rotisserie-chicken": "🍗",
  "raw-pork-sausage": "🌭",
  "simple-syrup": "🍯",
  "coleslaw-or-caesar-dressing": "🥗",
  "edible-pumpkin-flowers": "🌼",
  "strawberries": "🍓",
  "grannysmith-apple": "🍏",
  "truffle-oil": "🍄",
  "vanilla": "🌿",
  "meat-ground": "🥩",
  "mixed-vegetables": "🥗",
  "deli-turkey": "🍗",
  "walnuts": "🌰",
  "red-wine": "🍷",
  "wood-apple": "🍎",
  "fennel-seeds": "🌱",
  "plum-tomatoes": "🍅",
  "kaiser-roll": "🥖",
  "chickpeas": "🥫",
  "octopus": "🐙",
  "celeriac": "🍽️",
  "frisee": "🥬",
  "clam-juice": "🦪",
  "blanched-almonds": "🌰",
  "hazelnuts": "🌰",
  "dill": "🌿",
  "lambs-lettuce": "🥬",
  "yeast-granules": "🍞",
  "dry-mustard": "🍶",
  "plain-yogurt": "🥛",
  "dried-sage": "🌿",
  "beef-tenderloin": "🥩",
  "corn": "🌽",
  "shell-pasta": "🍝",
  "puff-pastry": "🥐",
  "light-brown-sugar": "🍯",
  "garlic-powder": "🧄",
  "flour-tortilla": "🌯",
  "muenster-cheese": "🧀",
  "ground-cumin": "🌿",
  "green-olives---sliced": "🫒",
  "focaccia": "🍞",
  "macaroni": "🍝",
  "whole-wheat-bread": "🍞",
  "portabello-mushrooms": "🍄",
  "ginger": "🌿",
  "lime": "🍋",
  "fish-sauce": "🐟",
  "sea-bass": "🐟",
  "sesame-oil": "🛢️",
  "soy-sauce": "🍶",
  "saffron": "🌱",
  "vermouth": "🍸",
  "trout": "🐟",
  "caraway-seeds": "🌰",
  "cilantro": "🌿",
  "ground-coriander": "🌿",
  "curry-powder": "🌶️",
  "lime-juice": "🍋",
  "mirin": "🍶",
  "miso": "🍜",
  "rice-vinegar": "🍶",
  "sake": "🍶",
  "soy-beans": "🌱",
  "turmeric": "🌿",
  "black-sesame-seeds-or-chia-seeds": "🌱",
  "daikon": "🍽️",
  "jalapeno-pepper": "🌶️",
  "kombu": "🌱",
  "lemongrass": "🌱",
  "bean-sprouts": "🌱",
  "napa-cabbage": "🥬",
  "shiitake-mushrooms": "🍄",
  "snow-peas": "🌱",
  "grouper-fresh": "🐟",
  "aniseed-or-anise": "🌿",
  "lime-leaves": "🌿",
  "asian-fish-sauce": "🐟",
  "tomato-yellow": "🍅",
  "olives-stuffed": "🫒",
  "cedar-wood-plank": "🌲",
  "egg-white": "🍳",
  "morel-mushrooms": "🍄",
  "baby-leeks": "🌱",
  "couscous-cooked": "🥘",
  "uncooked-brown-rice": "🌾",
  "cream-cheese": "🧈",
  "molasses": "🍶",
  "limoncello": "🍋",
  "allspice-ground": "🌿",
  "shiitake-mushrooms-dried": "🍄",
  "littleneck-clams": "🐚",
  "russet-or-idaho-potatoes": "🥔",
  "chorizo": "🥩",
  "italian-dressing": "🥗",
  "corn-flour": "🌽",
  "Butter-or-Boston-Bibb-lettuce": "🥬",
  "sweet-potato": "🍠",
  "baby-carrots": "🥕",
  "halibut-fillet": "🐟",
  "filet-mignon": "🥩",
  "pico-de-gallo": "🍲",
  "red-snapper": "🐟",
  "dried-parsley": "🌿",
  "ale": "🍺",
  "pecans": "🌰",
  "raw-tilapia": "🐟",
  "bluefish": "🐟",
  "blue-cheese": "🧀",
  "orange-juice": "🍊",
  "red-potatoes": "🥔",
  "black-beans": "🥫",
  "jicama": "🥔",
  "poblano-peppers": "🫑",
  "red-snapper-fresh": "🐟",
  "apple-cider-vinegar": "🍏",
  "spices": "🌶️",
  "salsa": "🍲",
  "plantains": "🍌",
  "chorizo-sausages": "🥩",
  "chervil": "🌿",
  "uncooked-quinoa": "🌾",
  "scotch-bonnet-chile": "🌶️",
  "crabmeat": "🦀",
  "tomato-juice": "🍅",
  "oyster-sauce": "🦪",
  "sesame-seeds": "🌱",
  "dry-sherry": "🍷",
  "parsnip": "🍽️",
  "guinness": "🍺",
  "dark-brown-sugar": "🍯",
  "ketchup": "🍅",
  "boston-butt-or-pork-butt": "🥩",
  "garlic-salt": "🧂",
  "bonito-fish-flakes": "🐟",
  "chicken-drumsticks": "🍗",
  "dry-cellophane-noodles": "🍜",
  "chinese-five-spice-powder": "🌶️",
  "honey": "🍯",
  "shortening": "🧈",
  "artichoke-hearts": "🌱",
  "peanut-oil": "🛢️",
  "coriander-seeds": "🌿",
  "salsa-verde": "🍲",
  "white-onion": "🧅",
  "thai-chiles": "🌶️",
  "lobster": "🦞",
  "snapper": "🐟",
  "agave": "🍯",
  "grapefruit-juice": "🍊",
  "zest-lime": "🍋",
  "horseradish-sauce": "🍶",
  "pickle-relish": "🥒",
  "regular-mustard": "🍶",
  "red-cabbage": "🍽️",
  "dry-cannellini-beans": "🥫",
  "raw-pangasius-fish-fillet": "🐟",
  "sourdough-bread": "🍞",
  "catfish": "🐟",
  "serrano-pepper": "🌶️",
  "chili-garlic-sauce": "🌶️",
  "pickled-jalapenos": "🥒",
  "tortilla-chips": "🌮",
  "pimento": "🫑",
  "star-anise": "🌿",
  "coconut-milk": "🥥",
  "monkfish": "🐟",
  "matzo": "🥖",
  "garlic-oil": "🧄",
  "pork-belly": "🥓",
  "rice-white-long-grain-or-basmatii-cooked": "🍚",
  "black-rice": "🍚",
  "mandarin-or-tangerines-or-clementines": "🍊",
  "pineapple": "🍍",
  "aji-amarillo": "🌶️",
  "beef-short-ribs": "🥩",
  "guacamole": "🥑",
  "tomatillos": "🍽️",
  "gravy": "🍲",
  "juniper-berries": "🌿",
  "strip-steak": "🥩",
  "pearl-onions": "🧅",
  "buttermilk-biscuits": "🍞",
  "chili-peppers-green": "🌶️",
  "red-grapes": "🍇",
  "fresh-ground-beef": "🥩",
  "sole": "🐟",
  "farmers-cheese": "🧀",
  "slab-bacon": "🥓",
  "mackerel-fish-fillets": "🐟",
  "cognac": "🥃",
  "crackers": "🍘",
  "trout-smoked": "🐟",
  "shredded-cheddar": "🧀",
  "cream-of-celery-soup": "🍲",
  "spinach-frozen": "🍃",
  "coconut-flakes": "🥥",
  "grapefruit": "🍊",
  "tamarind-juice": "🍹",
  "mackerel-fresh": "🐟",
  "shredded-coconut": "🥥",
  "galangal": "🌿",
  "cornflakes": "🌽",
  "orange-slices": "🍊",
  "pomegranate-seeds": "🍇",
  "almonds-slivered": "🌰",
  "canned-chipotle": "🌶️",
  "flounder-fresh": "🐟",
  "blueberries-dried": "🫐",
  "matcha-powder": "🍵",
  "skate-wings": "🐟",
  "pumpernickel": "🍞",
  "apple-cider": "🍏",
  "fried-rice": "🍚",
  "red-delicious-apples": "🍎",
  "onion-soup-mix": "🍲",
  "onion-powder": "🧅",
  "macadamia-nuts": "🌰",
  "apple-juice": "🍏",
  "basil-pesto": "🌿",
  "sugar-snap-peas": "🌱",
  "alfredo-sauce": "🍶",
  "bananas": "🍌",
  "banana-chips": "🍌",
  "sardines-fresh": "🐟",
  "wasabi-powder": "🌶️",
  "garam-masala": "🌶️",
  "mango": "🥭",
  "pumpkin-seeds": "🎃",
  "hemp-protein-powder": "🌿",
  "cardamom-ground": "🌿",
  "douchi": "🍱",
  "evaporated-milk": "🥛",
  "garlic-roasted": "🧄",
  "canned-salmon": "🥫",
  "blood-orange": "🍊",
  "bananas-ripe": "🍌",
  "smoked-sausage": "🥩",
  "cockles": "🐚",
  "hake-filet": "🐟",
  "white-cream": "🥛",
  "bacon-bits": "🥓",
  "chocolate-glaze": "🍫",
  "brioche-bun": "🍞",
  "strawberry-jam": "🍓",
  "orzo": "🍚",
  "swordfish": "🐟",
  "blood-orange-juice": "🍊",
  "guajillo-chiles": "🌶️",
  "orange-marmalade": "🍊",
  "rice-paper": "🍚",
  "lentils-green": "🌱",
  "oyster-mushrooms": "🍄",
  "ginger-pickled": "🌿",
  "coleslaw": "🥗",
  "spinach-pasta": "🍝",
  "shelled-edamame": "🌱",
  "tarragon-dried": "🌿",
  "chanterelles": "🍄",
  "red-grapefruit": "🍊",
  "dried-herbs": "🌿",
  "papaya": "🍈",
  "cashews": "🌰",
  "grand-marnier": "🍊",
  "tuna-steak": "🐟",
  "raw-brown-sugar": "🍯",
  "rhubarb": "🌿",
  "runner-beans": "🌱",
  "whiskey-bottle": "🥃",
  "chili-paste": "🌶️",
  "celery-leaves": "🌱",
  "kumquat": "🍊",
  "tangerine-juice": "🍊",
  "saltine-crackers": "🍘",
  "broth": "🍲",
  "pineapple-juice": "🍍",
  "rice-jasmine-cooked": "🍚",
  "coconut": "🥥",
  "cheddar-block": "🧀",
  "savoy-cabbage": "🥬",
  "butter": "🧈",
  "fenugreek": "🌿",
  "cloves": "🌿",
  "fresh-hibiscus": "🌺",
  "blackberries": "🫐",
  "grape-jelly": "🍇",
  "couscous-israeli": "🍚",
  "dried-cranberries": "🫐",
  "deer-back-backstrap-or-loin": "🦌",
  "haddock-smoked": "🐟",
  "ghee": "🧈",
  "mango-nectar": "🥭",
  "mixed-mushrooms": "🍄",
  "instant-potatoes": "🥔",
  "raw-eels": "🐍",
  "seasoning": "🌿",
  "tequila": "🍹",
  "goldfish-crackers": "🍘",
  "lump-crabmeat": "🦀",
  "cream-of-mushroom-soup": "🍲",
  "cooked-white-rice": "🍚",
  "mushrooms-white": "🍄",
  "canned-food": "🥫",
  "potatoes-purple": "🥔",
  "milk": "🥛",
  "gluten-free-flour": "🌾",
  "creamed-corn": "🌽",
  "stuffing-mix": "🍞",
  "maple-syrup": "🍁",
  "smoked-salmon": "🐟",
  "oysters": "🦪",
  "whitebait": "🐟",
  "rye-bread": "🍞",
  "crepes-isolated": "🥞",
  "English-muffins": "🍞",
  "poached-egg": "🍳",
  "hollandaise-sauce": "🍲",
  "coconut-cream": "🥥",
  "sardines-canned": "🥫",
  "oil-coconut": "🥥",
  "pomegranate-juice": "🍹",
  "white-rum": "🍹",
  "vodka": "🍸",
  "ox-tail": "🐂",
  "banana-leaf": "🍃",
  "almond-meal-or-almond-flour": "🌰",
  "coconut-flour-or-other-gluten-free-flour": "🥥",
  "rice-brown-cooked": "🍚",
  "rice-noodles": "🍜",
  "plain-protein-powder": "🥛",
  "cornbread": "🍞",
  "chile-chipotle": "🌶️",
  "poppyseed": "🌱",
  "ranch-dressing": "🥗",
  "okra": "🌱",
  "celery-seed": "🌱",
  "pickle-slices": "🥒",
  "lollo-rosso": "🥬",
  "granulated-garlic": "🧄",
  "slaw-mix": "🥗",
  "hamburger-bun": "🍔",
  "powdered-sugar": "🍚",
  "ham": "🍖",
  "bok-choy": "🥬",
  "peanut-butter": "🥜",
  "french-rolls": "🥖",
  "diced-ham": "🍖",
  "whole-wheat-hamburger-buns": "🍔",
  "cactus-leaves": "🌵",
  "corn-husks": "🌽",
  "epazote": "🌿",
  "mustard-seeds": "🌿",
  "pickle-juice": "🍶",
  "american-cheese": "🧀",
  "stock-cube": "🧂",
  "crayfish": "🦞",
  "stock-powder": "🌶️",
  "corn-muffins": "🌽",
  "rice-crispy-cereal": "🍚",
  "allspice-berries": "🌿",
  "green-curry-paste": "🍲",
  "sliced-tomato": "🍅",
  "apricot-jam": "🍑",
  "margarita-mix": "🍹",
  "milk-powdered": "🥛",
  "french-dressing": "🥗",
  "braeburn-apples": "🍎",
  "vanilla-yogurt": "🍦",
  "peanuts": "🥜",
  "liquid-egg-substitute": "🥚",
  "tahini-paste": "🍶",
  "apricot": "🍑",
  "sunflower-seeds": "🌻",
  "vanilla-extract": "🍦",
  "kohlrabi": "🍽️",
  "harissa": "🌶️",
  "barbecue-sauce": "🍶",
  "brown-sugar-pile": "🍯",
  "regular-chex": "🌾",
  "dried-arbol-chiles": "🌶️",
  "carrot-juice": "🥕",
  "nori": "🌿",
  "shiso-leaves": "🌿",
  "cooked-cannellini-beans": "🥫",
  "enoki-mushrooms": "🍄",
  "pineapple-with-can": "🍍",
  "tea-bags": "🍵",
  "oyster-crackers": "🍪",
  "champagne": "🍾",
  "habanero-pepper": "🌶️",
  "coffee-liqueur": "☕",
  "soy-milk": "🥛",
  "cardamom": "🌿",
  "garlic-paste": "🧄",
  "ginger-garlic-paste": "🌿",
  "Swiss-cheese": "🧀",
  "caviar": "🍤",
  "ackee": "🍽️",
  "cranberry-sauce": "🍲",
  "peanut-butter-cup": "🥜",
  "brandy": "🥃",
  "pepperoncini": "🌶️",
  "rolled-oats": "🌾",
  "chocolate-chips": "🍫",
  "sweet-pickle-juice-from-the-jar": "🥒",
  "escargot": "🐌",
  "fig-preserves": "🍑",
  "camembert": "🧀",
  "potato-chips": "🥔",
  "candlenut": "🌰",
  "shrimp-paste": "🍤",
  "corn-tortillas": "🌽",
  "vinaigrette": "🥗",
  "steel-cut-oats": "🌾",
  "tortillas-whole-wheat": "🍞",
  "ham-whole": "🍖",
  "light-green-liqueur": "🍸",
  "applesauce": "🍎",
  "dough": "🥖",
  "bamboo-shoots": "🌱",
  "mitsuba": "🌿",
  "hotdogs": "🌭",
  "choy-sum": "🥬",
  "chicken-parts": "🍗",
  "chicory-red": "🌿",
  "ciabatta-loaf": "🍞",
  "grape-leaves": "🍇",
  "romanesco": "🍽️",
  "chicken-or-turkey-sausage": "🍗",
  "elbow": "🍝",
  "burrata": "🧀",
  "peppadew-pepper": "🌶️",
  "cooked-chicken-breast": "🍗",
  "mung-beans": "🌱",
  "chicken-thighs": "🍗",
  "lamb-rib-chops": "🥩",
  "egg-noodles": "🍜",
  "chicken-wings": "🍗",
  "farfalle": "🍝",
  "drelli-or-cavatappi": "🍝",
  "colorful-sprinkles": "🎨",
  "sliced-beef-shank": "🥩",
  "baby-back-ribs": "🥩",
  "fontina": "🧀",
  "gelatin-powder": "🍡",
  "pita-chips": "🥙",
  "duck-legs": "🦆",
  "veal": "🥩",
  "collard-greens": "🥬",
  "pulled-pork": "🍖",
  "harissa-paste": "🌶️",
  "food-coloring": "🎨",
  "macaroni-and-cheese": "🧀",
  "turkey-drumstick": "🦃",
  "yeast-fresh": "🍞",
  "gruyere": "🧀",
  "skirt-steak": "🥩",
  "pork-shoulder": "🥩",
  "tamarind": "🌿",
  "wonton-wrappers": "🥟",
  "jerusalem-artichoke": "🍽️",
  "racks-of-lamb": "🍖",
  "gemelli": "🍝",
  "figs-dried": "🍑",
  "beef-brisket": "🥩",
  "prime-rib": "🥩",
  "nut-butter": "🥜",
  "whole-wheat-spaghetti": "🍝",
  "chickpea-flour-or-another-gluten-free-flour": "🌾",
  "lemon-basil": "🍋",
  "provolone-slices": "🧀",
  "toast": "🍞",
  "pancakes-isolated": "🥞",
  "acorn-squash": "🌰",
  "goji-berries": "🍒",
  "avocado-oil": "🥑",
  "grappa": "🍸",
  "lacinato-kale": "🥬",
  "blade-steak": "🥩",
  "plum": "🍑",
  "chili-oil": "🌶️",
  "pineapple-preserves": "🍍",
  "amarillo-chili-sauce": "🌶️",
  "pistachio-oil": "🌰",
  "walnut-oil": "🌰",
  "watermelon": "🍉",
  "Belacan-or-shrimp-paste-or-tamarind-pulp": "🍤",
  "bee-pollen": "🐝",
  "tomatoes-yellow": "🍅",
  "shi-chimi": "🌶️",
  "water-chestnuts": "🌰",
  "shredded-mexican-cheese-blend": "🧀",
  "ginger-juice": "🍵",
  "turbot": "🐟",
  "hash-brown-potatoes": "🥔",
  "all-bran-cereal": "🌾",
  "green-onion-cream-cheese-dip": "🌱",
  "canned-mandarin-oranges": "🍊",
  "cottage-cheese": "🥛",
  "chives-dried": "🌿",
  "dried-apricots": "🍑",
  "nacho-cheese": "🧀",
  "dropper": "💧",
  "wheat-germ": "🌾",
  "lavender-honey": "🍯",
  "tostada-shell": "🌮",
  "cassava": "🥔",
  "gouda": "🧀",
  "curry-leaves": "🌿",
  "japanese-eggplant": "🍆",
  "lobster-tails": "🦞",
  "quail-eggs": "🥚",
  "cream-of-chicken-soup": "🍲",
  "pork-fat-or-lard": "🥩",
  "wasabi": "🍣",
  "yuzu-juice": "🍋",
  "green-tea-leaves": "🍵",
  "angelhair": "🍝",
  "hazelnut-oil": "🌰",
  "beet-leaves": "🍽️",
  "white-grapefruit": "🍊",
  "dry-udon-noodles": "🍜",
  "aioli": "🍶",
  "olive-tapenade": "🫒",
  "bulgur-wheat": "🌾",
  "alfalfa-sprouts": "🌱",
  "flank-steak": "🥩",
  "whipped-cream": "🍦",
  "garlic-scapes": "🧄",
  "refried-beans": "🥫",
  "kabocha": "🎃",
  "fried-onions": "🧅",
  "lemon-oil": "🍋",
  "french-fries-isolated": "🍟",
  "shelled-hemp-seeds": "🌿",
  "avocado-slices": "🥑",
  "herring-fillets": "🐟",
  "gingersnaps": "🍪",
  "vanilla-pudding": "🍮",
  "black-eyed-peas": "🥫",
  "meatballs": "🍽️",
  "canned-mackerel": "🥫",
  "nutritional-yeast": "🌿",
  "kiwi": "🥝",
  "kidney-beans": "🥫",
  "mango-chutney": "🥭",
  "edamame": "🌱",
  "pepper-jack-cheese": "🧀",
  "kimchi": "🥬",
  "hearts-of-palm": "🌴",
  "apple-jelly": "🍏",
  "taco-shells": "🌮",
  "mint-chutney": "🌿",
  "white-grape-juice": "🍇",
  "shirataki-noodles": "🍜",
  "bread-bowl": "🍞",
  "pot-roast": "🥩",
  "baby-corn": "🌽",
  "shrimp-dried": "🦐",
  "sea-bream": "🐟",
  "red-mullet": "🐟",
  "buckwheat-flour": "🌾",
  "wax-peppers": "🫑",
  "corn-syrup": "🌽",
  "cocoa-powder": "🍫",
  "reeses-pieces-or-peanut-butter-candies": "🍫",
  "brownie-isolated": "🍫",
  "baking-chocolate": "🍫",
  "dark-chocolate-pieces": "🍫",
  "pomfret": "🐟",
  "urad-dal": "🌱",
  "neufchatel": "🧀",
  "french-roll-or-crusty-roll": "🍞",
  "ice-cream-sandwich": "🍦",
  "rigatoni": "🍝",
  "multigrain-bread": "🍞",
  "pepperoni": "🍕",
  "roast-beef-slices": "🥩",
  "salami": "🍕",
  "fruit-cocktail": "🍹",
  "wasabi-paste": "🌿",
  "chocolate-chip-cookie": "🍪",
  "asian-medley": "🥗",
  "blueberries": "🫐",
  "hummus": "🥣",
  "wasabi-peas": "🍢",
  "uncooked-soba-noodles": "🍜",
  "broccolini": "🥦",
  "basil-oil": "🌿",
  "cashew-milk": "🥛",
  "bourbon": "🥃",
  "baby-beets": "🍠",
  "spaghetti-squash": "🍝",
  "apricot-nectar-or-apricot-juice": "🍑",
  "red-pearl-onions": "🧅",
  "flax-seeds": "🌾",
  "shot-of-liquor": "🥃",
  "cantaloupe": "🍈",
  "cranberries": "🫐",
  "cooked-quinoa": "🍚",
  "pearl-barley": "🌾",
  "honeydew": "🍈",
  "raspberries": "🍓",
  "asian-toasted-sesame-dressing": "🥗",
  "stevia": "🌿",
  "tomato-soup": "🍲",
  "nectarines": "🍑",
  "beets-golden": "🍠",
  "lentils-puy": "🌱",
  "pinto-beans": "🌱",
  "langoustine-or-prawns": "🍤",
  "raw-shark-steak": "🦈",
  "grenadine": "🍷",
  "ice-cubes": "🧊",
  "maraschino": "🍒",
  "taleggio-cheese": "🧀",
  "curacao": "🍹",
  "plum-sauce": "🍑",
  "zaatar": "🌿",
  "baked-beans": "🥫",
  "fiddleheads": "🌿",
  "wild-rice-cooked": "🍚",
  "wakame": "🌱",
  "pickling-spices": "🌶️",
  "temporary-orange-liqueur": "🍹",
  "light-buttery-spread": "🧈",
  "dried-rice-noodles": "🍜",
  "pizza-isolated": "🍕",
  "passion-fruit": "🍋",
  "coconut-water": "🥥",
  "moong-dal": "🌱",
  "himalayan-pink-salt": "🧂",
  "potato-salad": "🥔",
  "caramel-sauce": "🍯",
  "whole-wheat-farfalle": "🍝",
  "peach-nectar": "🍑",
  "tangelo": "🍊",
  "almond-joy": "🍫",
  "sandwich-thins": "🍞"
};

export default PRODUCT_TO_EMOJI;