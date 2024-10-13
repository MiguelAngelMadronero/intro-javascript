// const apiKey= 'Asf6pa0Hex1pk27VFleiKa4wwthTvCEL';

// const peticion=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//   .then(resp=>resp.json())
//   .then(({data})=>{
//     const {url} =data.images.original;
    
//     const img= document.createElement('img');
//     img.src=url;

//     document.body.append(img);
//   })
//   .catch(console.warn);

const peticion2=async()=>{

  const apiKey= 'Asf6pa0Hex1pk27VFleiKa4wwthTvCEL';

  const res=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  const jsondata=  await res.json();
  const {data}=jsondata;
  
  return data;


}

const renderGif=(data)=>{
  const img=document.createElement('img');
  const {url}=data.images.original;
  img.src=url
  document.body.append(img);

}


const render=await peticion2()
renderGif(render);
