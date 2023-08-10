import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('drinks_ingredients', [
      {
        id_ingredient: 1,
        str_ingredient: "Light rum"
      },
      {
        id_ingredient: 2,
        str_ingredient: "Applejack"
      },
      {
        id_ingredient: 3,
        str_ingredient: "Gin"
      },
      {
        id_ingredient: 4,
        str_ingredient: "Dark rum"
      },
      {
        id_ingredient: 5,
        str_ingredient: "Sweet Vermouth"
      },
      {
        id_ingredient: 6,
        str_ingredient: "Strawberry schnapps"
      },
      {
        id_ingredient: 7,
        str_ingredient: "Scotch"
      },
      {
        id_ingredient: 8,
        str_ingredient: "Apricot brandy"
      },
      {
        id_ingredient: 9,
        str_ingredient: "Triple sec"
      },
      {
        id_ingredient: 10,
        str_ingredient: "Southern Comfort"
      },
      {
        id_ingredient: 11,
        str_ingredient: "Orange bitters"
      },
      {
        id_ingredient: 12,
        str_ingredient: "Brandy"
      },
      {
        id_ingredient: 13,
        str_ingredient: "Lemon vodka"
      },
      {
        id_ingredient: 14,
        str_ingredient: "Blended whiskey"
      },
      {
        id_ingredient: 15,
        str_ingredient: "Dry Vermouth"
      },
      {
        id_ingredient: 16,
        str_ingredient: "Amaretto"
      },
      {
        id_ingredient: 17,
        str_ingredient: "Tea"
      },
      {
        id_ingredient: 18,
        str_ingredient: "Champagne"
      },
      {
        id_ingredient: 19,
        str_ingredient: "Coffee liqueur"
      },
      {
        id_ingredient: 20,
        str_ingredient: "Bourbon"
      },
      {
        id_ingredient: 21,
        str_ingredient: "Tequila"
      },
      {
        id_ingredient: 22,
        str_ingredient: "Vodka"
      },
      {
        id_ingredient: 23,
        str_ingredient: "Añejo rum"
      },
      {
        id_ingredient: 24,
        str_ingredient: "Bitters"
      },
      {
        id_ingredient: 25,
        str_ingredient: "Sugar"
      },
      {
        id_ingredient: 26,
        str_ingredient: "Kahlua"
      },
      {
        id_ingredient: 27,
        str_ingredient: "demerara Sugar"
      },
      {
        id_ingredient: 28,
        str_ingredient: "Dubonnet Rouge"
      },
      {
        id_ingredient: 29,
        str_ingredient: "Watermelon"
      },
      {
        id_ingredient: 30,
        str_ingredient: "Lime juice"
      },
      {
        id_ingredient: 31,
        str_ingredient: "Irish whiskey"
      },
      {
        id_ingredient: 32,
        str_ingredient: "Apple brandy"
      },
      {
        id_ingredient: 33,
        str_ingredient: "Carbonated water"
      },
      {
        id_ingredient: 34,
        str_ingredient: "Cherry brandy"
      },
      {
        id_ingredient: 35,
        str_ingredient: "Creme de Cacao"
      },
      {
        id_ingredient: 36,
        str_ingredient: "Grenadine"
      },
      {
        id_ingredient: 37,
        str_ingredient: "Port"
      },
      {
        id_ingredient: 38,
        str_ingredient: "Coffee brandy"
      },
      {
        id_ingredient: 39,
        str_ingredient: "Red wine"
      },
      {
        id_ingredient: 40,
        str_ingredient: "Rum"
      },
      {
        id_ingredient: 41,
        str_ingredient: "Grapefruit juice"
      },
      {
        id_ingredient: 42,
        str_ingredient: "Ricard"
      },
      {
        id_ingredient: 43,
        str_ingredient: "Sherry"
      },
      {
        id_ingredient: 44,
        str_ingredient: "Cognac"
      },
      {
        id_ingredient: 45,
        str_ingredient: "Sloe gin"
      },
      {
        id_ingredient: 46,
        str_ingredient: "Apple juice"
      },
      {
        id_ingredient: 47,
        str_ingredient: "Pineapple juice"
      },
      {
        id_ingredient: 48,
        str_ingredient: "Lemon juice"
      },
      {
        id_ingredient: 49,
        str_ingredient: "Sugar syrup"
      },
      {
        id_ingredient: 50,
        str_ingredient: "Milk"
      },
      {
        id_ingredient: 51,
        str_ingredient: "Strawberries"
      },
      {
        id_ingredient: 52,
        str_ingredient: "Chocolate syrup"
      },
      {
        id_ingredient: 53,
        str_ingredient: "Yoghurt"
      },
      {
        id_ingredient: 54,
        str_ingredient: "Mango"
      },
      {
        id_ingredient: 55,
        str_ingredient: "Ginger"
      },
      {
        id_ingredient: 56,
        str_ingredient: "Lime"
      },
      {
        id_ingredient: 57,
        str_ingredient: "Cantaloupe"
      },
      {
        id_ingredient: 58,
        str_ingredient: "Berries"
      },
      {
        id_ingredient: 59,
        str_ingredient: "Grapes"
      },
      {
        id_ingredient: 60,
        str_ingredient: "Kiwi"
      },
      {
        id_ingredient: 61,
        str_ingredient: "Tomato juice"
      },
      {
        id_ingredient: 62,
        str_ingredient: "Cocoa powder"
      },
      {
        id_ingredient: 63,
        str_ingredient: "Chocolate"
      },
      {
        id_ingredient: 64,
        str_ingredient: "Heavy cream"
      },
      {
        id_ingredient: 65,
        str_ingredient: "Galliano"
      },
      {
        id_ingredient: 66,
        str_ingredient: "Peach Vodka"
      },
      {
        id_ingredient: 67,
        str_ingredient: "Ouzo"
      },
      {
        id_ingredient: 68,
        str_ingredient: "Coffee"
      },
      {
        id_ingredient: 69,
        str_ingredient: "Spiced rum"
      },
      {
        id_ingredient: 70,
        str_ingredient: "Water"
      },
      {
        id_ingredient: 71,
        str_ingredient: "Espresso"
      },
      {
        id_ingredient: 72,
        str_ingredient: "Angelica root"
      },
      {
        id_ingredient: 73,
        str_ingredient: "Orange"
      },
      {
        id_ingredient: 74,
        str_ingredient: "Cranberries"
      },
      {
        id_ingredient: 75,
        str_ingredient: "Johnnie Walker"
      },
      {
        id_ingredient: 76,
        str_ingredient: "Apple cider"
      },
      {
        id_ingredient: 77,
        str_ingredient: "Everclear"
      },
      {
        id_ingredient: 78,
        str_ingredient: "Cranberry juice"
      },
      {
        id_ingredient: 79,
        str_ingredient: "Egg yolk"
      },
      {
        id_ingredient: 80,
        str_ingredient: "Egg"
      },
      {
        id_ingredient: 81,
        str_ingredient: "Grape juice"
      },
      {
        id_ingredient: 82,
        str_ingredient: "Peach nectar"
      },
      {
        id_ingredient: 83,
        str_ingredient: "Lemon"
      },
      {
        id_ingredient: 84,
        str_ingredient: "Firewater"
      },
      {
        id_ingredient: 85,
        str_ingredient: "Lemonade"
      },
      {
        id_ingredient: 86,
        str_ingredient: "Lager"
      },
      {
        id_ingredient: 87,
        str_ingredient: "Whiskey"
      },
      {
        id_ingredient: 88,
        str_ingredient: "Absolut Citron"
      },
      {
        id_ingredient: 89,
        str_ingredient: "Pisco"
      },
      {
        id_ingredient: 90,
        str_ingredient: "Irish cream"
      },
      {
        id_ingredient: 91,
        str_ingredient: "Ale"
      },
      {
        id_ingredient: 92,
        str_ingredient: "Chocolate liqueur"
      },
      {
        id_ingredient: 93,
        str_ingredient: "Midori melon liqueur"
      },
      {
        id_ingredient: 94,
        str_ingredient: "Sambuca"
      },
      {
        id_ingredient: 95,
        str_ingredient: "Cider"
      },
      {
        id_ingredient: 96,
        str_ingredient: "Sprite"
      },
      {
        id_ingredient: 97,
        str_ingredient: "7-Up"
      },
      {
        id_ingredient: 98,
        str_ingredient: "Blackberry brandy"
      },
      {
        id_ingredient: 99,
        str_ingredient: "Peppermint schnapps"
      },
      {
        id_ingredient: 100,
        str_ingredient: "Creme de Cassis"
      }      ,
      {
        id_ingredient: 101,
        str_ingredient: "Ginger ale"
      },
      {
        id_ingredient: 102,
        str_ingredient: "Ice"
      },
      {
        id_ingredient: 103,
        str_ingredient: "Grand Marnier"
      },
      {
        id_ingredient: 104,
        str_ingredient: "Egg White"
      },
      { 
        id_ingredient: 105,
        str_ingredient:  "Baileys irish cream"
      },
      { 
        id_ingredient: 106,
        str_ingredient:  "Frangelico"
      },
      { 
        id_ingredient: 107,
        str_ingredient:  "151 proof rum"
      },
      { 
        id_ingredient: 108,
        str_ingredient:  "Wild Turkey"
      },
      { 
        id_ingredient: 109,
        str_ingredient:  "Absolut Vodka"
      },
      { 
        id_ingredient: 110,
        str_ingredient:  "Tonic water"
      },
      { 
        id_ingredient: 111,
        str_ingredient:  "Peach schnapps"
      },
      { 
        id_ingredient: 112,
        str_ingredient:  "Pepsi Cola"
      },
      { 
        id_ingredient: 113,
        str_ingredient:  "Orange juice"
      },
      { 
        id_ingredient: 114,
        str_ingredient:  "Whisky"
      },
      { 
        id_ingredient: 115,
        str_ingredient:  "Powdered sugar"
      },
      { 
        id_ingredient: 116,
        str_ingredient:  "Peach Bitters"
      },
      { 
        id_ingredient: 117,
        str_ingredient:  "Mint"
      },
      { 
        id_ingredient: 118,
        str_ingredient:  "Vanilla vodka"
      },
      { 
        id_ingredient: 119,
        str_ingredient:  "Grain alcohol"
      },
      { 
        id_ingredient: 120,
        str_ingredient:  "Honey"
      },
      { 
        id_ingredient: 121,
        str_ingredient:  "White Creme de Menthe"
      },
      { 
        id_ingredient: 122,
        str_ingredient:  "Gold rum"
      },
      { 
        id_ingredient: 123,
        str_ingredient:  "Pernod"
      },
      { 
        id_ingredient: 124,
        str_ingredient:  "Angostura Bitters"
      },
      { 
        id_ingredient: 125,
        str_ingredient:  "Light cream"
      },
      { 
        id_ingredient: 126,
        str_ingredient:  "Club soda"
      },

    ], {})
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('drinks_ingredients', {});
  },
}