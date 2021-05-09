export async function getFakeCompany(){
  let response = await fetch('https://fakerapi.it/api/v1/companies?_quantity=1');
  let object = await response.json();
  let array = object.data;
  return (array);
}