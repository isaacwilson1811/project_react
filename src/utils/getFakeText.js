export async function getFakeText(numChars){
  let response = await fetch(`https://fakerapi.it/api/v1/texts?_quantity=1&_characters=${numChars.toString()}`);
  let object = await response.json();
  return (object.data[0]);
}