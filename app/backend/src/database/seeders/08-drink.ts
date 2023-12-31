import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'drinks',
      [
        {
          id_drink: 1,
          str_drink: 'GG',
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 1,
          str_iba: null,
          str_alcoholic: 'Optional alcohol',
          str_glass: 'Collins Glass',
          str_instructions: 'Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.',
          str_drink_thumb: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',         
          str_image_source: null,
          str_image_attribution: null,          
          str_creative_commons_confirmed: "No",
          date_modified: '2016-07-18 22:06:00',
        },
        {
          id_drink: 2,
          str_drink: 'A1',
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 2,
          str_iba: null,
          str_alcoholic: 'Alcoholic',
          str_glass: 'Cocktail glass',
          str_instructions: 'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.',
          str_drink_thumb: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: 'No',
          date_modified: '2017-09-07 21:42:09',
        },
        {
          id_drink: 3,
          str_drink: "Ace",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 2,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Martini Glass",
          str_instructions: "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-09-07 22:05:06"
        },
        {
          id_drink: 4,
          str_drink: "747",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 6,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Shot glass",
          str_instructions: "pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2016-08-31 19:28:26"
        },
        {
          id_drink: 5,
          str_drink: "Kir",
          str_drink_alternate: null,
          str_tags: "IBA,ContemporaryClassic",
          str_video: null,
          id_category: 1,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Wine Glass",
          str_instructions: "Add the crème de cassis to the bottom of the glass, then top up with wine.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-09-02 17:38:14"
        },
        {
          id_drink: 6,
          str_drink: "ABC",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 6,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Shot glass",
          str_instructions: "Layered in a shot glass.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2016-08-31 19:32:08"
        },
        {
          id_drink: 7,
          str_drink: "252",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 6,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Shot glass",
          str_instructions: "Add both ingredients to shot glass, shoot, and get drunk quick",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",    
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2016-07-18 22:32:42"
        },
        {
          id_drink: 8,
          str_drink: "AT&T",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 1,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Highball Glass",
          str_instructions: "Pour Vodka and Gin over ice, add Tonic and Stir",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-04-24 22:00:19"
        },
        {
          id_drink: 9,
          str_drink: "Smut",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 9,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Beer mug",
          str_instructions: "Throw it all together and serve real cold.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-09-02 16:23:32"
        },
        {
          id_drink: 10,
          str_drink: "B-53",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 6,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Collins Glass",
          str_instructions: "Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2016-04-28 18:53:43"
        },
        {
          id_drink: 11,
          str_drink: "Adam",
          str_drink_alternate: null,
          str_tags: "Alcoholic,Holiday",
          str_video: null,
          id_category: 1,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Cocktail glass",
          str_instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "Yes",
          date_modified: "2016-09-02 11:29:29"
        },
        {
          id_drink: 12,
          str_drink: "ACID",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 6,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Shot glass",
          str_instructions: "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2016-11-15 11:28:37"
        },
        {
          id_drink: 13,
          str_drink: "H.D.",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 7,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Beer mug",
          str_instructions: "Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2016-08-31 19:26:18"
        },
        {
          id_drink: 14,
          str_drink: "B-52",
          str_drink_alternate: null,
          str_tags: "IBA,NewEra",
          str_video: null,
          id_category: 6,
          str_iba: "New Era Drinks",
          str_alcoholic: "Alcoholic",
          str_glass: "Shot glass",
          str_instructions: "Layer ingredients into a shot glass. Serve with a stirrer.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-09-02 18:07:51"
        },
        {
          id_drink: 15,
          str_drink: "Rose",
          str_drink_alternate: null,
          str_tags: "IBA,ContemporaryClassic",
          str_video: null,
          id_category: 1,
          str_iba: "Contemporary Classics",
          str_alcoholic: "Alcoholic",
          str_glass: "Cocktail glass",
          str_instructions: "Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-09-02 17:57:42"
        },
        {
          id_drink: 16,
          str_drink: "Derby",
          str_drink_alternate: null,
          str_tags: "Classic,IBA",
          str_video: "https://www.youtube.com/watch?v=bYQTTokGkFI",
          id_category: 1,
          str_iba: "Unforgettables",
          str_alcoholic: "Alcoholic",
          str_glass: "Cocktail glass",
          str_instructions: "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg",
          str_image_source: "https://commons.wikimedia.org/wiki/File:IBA_Cocktail_Derby_(28968231993).jpg",
          str_image_attribution: "Michael Styne https://www.flickr.com/photos/mstyne/28968231993/",
          str_creative_commons_confirmed: "No",
          date_modified: "2017-09-02 11:45:56"
        },
        {
          id_drink: 17,
          str_drink: "A. J.",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 1,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Cocktail glass",
          str_instructions: "Shake ingredients with ice, strain into a cocktail glass, and serve.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "Yes",
          date_modified: "2016-09-02 11:16:58"
        },
        {
          id_drink: 18,
          str_drink: "Bijou",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 2,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Cocktail glass",
          str_instructions: "Stir in mixing glass with ice and strain\r\n",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-12-19 18:09:45"
        },
        {
          id_drink: 19,
          str_drink: "50/50",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 1,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Collins Glass",
          str_instructions: "fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2016-04-29 09:41:56"
        },
        {
          id_drink: 20,
          str_drink: "Karsk",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 1,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Highball glass",
          str_instructions: "Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-02-20 14:54:31"
        },
        {
          id_drink: 21,
          str_drink: "Melya",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 7,
          str_iba: null,
          str_alcoholic: "Non alcoholic",
          str_glass: "Coffee mug",
          str_instructions: "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2015-09-03 03:32:59"
        },
        {
          id_drink: 22,
          str_drink: "Zorro",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 7,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Coffee Mug",
          str_instructions: "add all and pour black coffee and add whipped cream on top.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-01-28 16:34:43"
        },
        {
          id_drink: 23,
          str_drink: "Zombie",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 2,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Hurricane glass",
          str_instructions: "\r\nBlend at high speed for no more than 5 seconds.\r\n\r\nPour into a glass, add ice cubes to fill, then add the garnish.\r\n\r\n*Donn’s mix: Bring 3 crushed cinnamon sticks, 1 cup of sugar and 1 cup of water to a boil, stirring until the sugar is dissolved.\r\n\r\nSimmer for 2 minutes, then remove from the heat and let sit for at least 2 hours before straining into a clean glass bottle.\r\n\r\nThen add 1 part of the syrup and 2 parts of fresh grapefruit juice together.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-11-01 17:35:26"
        },
        {
          id_drink: 24,
          str_drink: "Orgasm",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 1,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Cocktail glass",
          str_instructions: "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "No",
          date_modified: "2017-09-08 16:55:14"
        },
        {
          id_drink: 25,
          str_drink: "Affair",
          str_drink_alternate: null,
          str_tags: null,
          str_video: null,
          id_category: 1,
          str_iba: null,
          str_alcoholic: "Alcoholic",
          str_glass: "Highball glass",
          str_instructions: "Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.",
          str_drink_thumb: "https://www.thecocktaildb.com/images/media/drink/h5za6y1582477994.jpg",
          str_image_source: null,
          str_image_attribution: null,
          str_creative_commons_confirmed: "Yes",
          date_modified: "2016-09-01 10:05:34"
        },
      ],
      {} ,
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('drinks', {});
  },
};
