import { useEffect } from 'react';
import { useAboutStore } from '../store/aboutStore';


export function About(){
  const [loading, companyData, fetchData, loadDataFromStorage, hasData, checkHasData] = 
  useAboutStore(state => [state.loading, state.companyData, state.fetchData, state.loadDataFromStorage, state.hasData, state.checkHasData]);
  const checkLoading = useAboutStore(state => state.checkLoading)

  useEffect(()=>{
    if(checkLoading()){fetchData()}
    
  },[]);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
        <h1>{companyData[0].name}</h1>
        <p>{companyData[0].phone}</p>
        </>
      )}
    </>

  );
}