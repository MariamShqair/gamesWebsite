export   const games =
[
   {
      "id": 1,
      "name": "Warlords: Heroes",
      "image": "https://img-hws.pog.com/cloud/y8-thumbs/1114/thumbnail464x348.jpg",
      "link": "https://external.kongregate-games.com/gamez/0002/3164/live/embeddable_23164.swf",
      "category":3,
      "likes":0,
      "comments": [
        {
          "id": "1",
          "userId":1,
          "name": "ahmad",
         "comment": "awsome game I like it very much"
        }
      ]
    },
    {
      "id": 2,
      "name": "Adventure Ho!",
      "image": "https://dodland.com/wp-content/uploads/2017/10/adventure-ho.jpg",
      "link": "https://external.kongregate-games.com/gamez/0001/6224/live/embeddable_16224.swf",
      "category":3,
      "likes":0,
      "comments": [
        {
          "id": "1",
          "userId":1,
          "name": "ahmad",
         "comment": "awsome game"
        }
      ]
    },
    {
      "id": 3,
      "name": "Winged Bullet",
      "image": "http://www.puffgames.net/wp-content/uploads/2018/07/22677.jpg",
      "link": "https://external.kongregate-games.com/gamez/0000/6057/live/embeddable_6057.swf",
      "category":1,
      "likes":0,
      "comments": [
        {
          "id": "1",
          "userId":1,
          "name": "ahmad",
         "comment": "awsome game"
        },
        {
          "id": "2",
          "userId":2,
          "name": "ahmad",
         "comment": "awsome game"
        },
        {
          "id": "3",
          "userId":3,
          "name": "ahmad",
         "comment": "awsome game"
        }
      ]
    },
    {
      "id": 4,
      "name": "MAD: Mutually Assured Destruction",
      "image": "https://i.ytimg.com/vi/cC3zz0N7Vpc/hqdefault.jpg",
      "link": "https://external.kongregate-games.com/gamez/0000/5196/live/embeddable_5196.swf",
      "category":2,
      "likes":0,
      "comments": [
        {
          "id": "1",
          "userId":1,
          "name": "ahmad",
         "comment": "WooooooooooooooooooooooooooooooooooW"
        }
      ]
    },
    {
      "id": 5,
      "name": "Stellar Squad ",
      "image": "http://funkypotato.com/images/2017/06/stellar-squad.jpg",
      "link": "https://external.kongregate-games.com/gamez/0026/4222/live/embeddable_264222.swf",
      "category":1,
      "likes":0,
      "comments": [
        {
          "id": "1",
          "userId":1,
          "name": "ahmad",
         "comment": "I would like to play this game always"
        }
      ]
    },
    {
      "id": 6,
      "name": "Castles of Talesworth",
      "image": "http://dl.dropant.com/_img/604/604.jpg",
      "link": "https://external.kongregate-games.com/gamez/0006/7999/live/embeddable_67999.swf",
      "category":2,
      "likes":0,
      "comments": [
        {
          "id": "1",
          "userId":1,
          "name": "ahmad",
         "comment": "awsome game"
        }
      ]
    }
  ]
export const categories =[
  {
    id:1,
    name:"cars-games",
    lable:"Cars Games"
  },
  {
    id:2,
    name:"girls-games",
    lable:"Garls Games"
  },
  {
    id:3,
    name:"learning-games",
    lable:"Learnings Games"
  }

]
  
export  function getGames(){
    return games.filter(g => g);
}
export  function getCategories(){
  return categories;
}
export function getGameById(id){
  const game = games.filter(g=>g.id == id)[0]
  return game;
}
export function getCategoryById(id){
  const category = categories.find(c=>c.id = id)
  return category;
}
export function getGamesByCategoryName(categoryName){
 
  const cat = categories.find(c=>c.name == categoryName)
  let gamesByCat=[];
  let i;
  for( i=0 ;i<games.length;i++)
  {
    
    if(games[i].category === cat.id){
        gamesByCat.push(games[i])
    }
  }
  return gamesByCat
}