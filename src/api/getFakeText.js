export async function getFakeText(quantity,characters){
  let quan = quantity.toString();
  let chars = characters.toString();
  let response = await fetch(`https://fakerapi.it/api/v1/texts?_quantity=${quan}&_characters=${chars}`);
  let object = await response.json();
  let array = object.data;
  array.forEach(post => {
    post.usersThatLike = [];
    post.usersThatDislike = [];
    post.totalLikes = 0;
    post.totalDislikes = 0;
    post.id = 'pid'+(Date.now().toString(36) + Math.random().toString(36).substr(2));
  });
  return (array);
}