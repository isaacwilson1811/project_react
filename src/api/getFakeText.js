export async function getFakeText(quantity,characters){
  let quan = quantity.toString();
  let chars = characters.toString();
  let response = await fetch(`https://fakerapi.it/api/v1/texts?_quantity=${quan}&_characters=${chars}`);
  let object = await response.json();
  let array = object.data;
  return (array);
}