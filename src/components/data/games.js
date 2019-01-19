export   const games =
[
   {
      "id": 1,
      "name": "Adventure Ho",
      "image": "adventure-ho.jpg",
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
      "id": 2,
      "name": "Adventure Ho!",
      "image": "winged-bullet.jpg",
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
      "image": "winged-bullet.jpg",
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
      "name": "Winged Bullet",
      "image": "winged-bullet.jpg",
      "link": "https://external.kongregate-games.com/gamez/0000/6057/live/embeddable_6057.swf",
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
    },
    {
      "id": 5,
      "name": "Winged Bullet",
      "image": "winged-bullet.jpg",
      "link": "https://external.kongregate-games.com/gamez/0000/6057/live/embeddable_6057.swf",
      "category":1,
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
      "id": 6,
      "name": "Winged Bullet",
      "image": "winged-bullet.jpg",
      "link": "https://external.kongregate-games.com/gamez/0000/6057/live/embeddable_6057.swf",
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
  const game = games.find(game => game.id = id)
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