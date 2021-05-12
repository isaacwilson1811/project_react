import { useState, useEffect } from 'react';
import { useAboutStore } from '../store/aboutStore';
import { getFakeImage } from '../api/getFakeImage';


export function About(){
  const [imageLoading, setImageLoading] = useState(true);
  const [imgURL, setImgURL] = useState('');
  const [loading, companyData, fetchData, loadDataFromStorage, hasData, checkHasData] = 
  useAboutStore(state => [state.loading, state.companyData, state.fetchData, state.loadDataFromStorage, state.hasData, state.checkHasData]);
  const checkLoading = useAboutStore(state => state.checkLoading)

  useEffect(()=>{
    if(checkLoading()){fetchData()}
    
    const getImg = async () =>{
      let src = await getFakeImage();
      setImageLoading(false)
      setImgURL(src);
    }
    getImg()

  },[]);

  return (
    <div style={{width:'400px',margin:'0 auto'}}>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
        <h1>{companyData[0].name}</h1>
        <p>{companyData[0].phone}</p>
        <p>{companyData[0].addresses[0].city}</p>
        <p>{companyData[0].addresses[0].country}</p>
        </>
      )}

        <img src={imageLoading ? '' : imgURL } />

    </div>

  );
}