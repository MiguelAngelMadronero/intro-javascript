const getImagen=async()=>{

  try {

  const apiKey= 'Asf6pa0Hex1pk27VFleiKa4wwthTvCEL';

  const res=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  const {data}=  await res.json();
  const {url}=data.images.original;
  const img=document.createElement('img');
  img.src=url
  document.body.append(img);
    
  } catch (error) {

    //manejo del error

    console.error(error)
    
  }
  
 
}
getImagen();