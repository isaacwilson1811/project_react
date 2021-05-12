export async function getFakeImage(){
  let response = await fetch('https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_width=500');
  let object = await response.json();
  let array = object.data;
  let src = array[0].url
  return (src);
}