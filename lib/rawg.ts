const API_KEY = process.env.RAWG_API_KEY;


export async function getGameInfo(nombre:string) {


  if(!API_KEY){
    console.log("RAWG API KEY NO ENCONTRADA");
    return null;
  }



  try {


    const response = await fetch(

      `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(nombre)}`,

      {
        next:{
          revalidate:86400
        }
      }

    );



    if(!response.ok){

      console.log(
        "RAWG ERROR:",
        response.status
      );

      return null;

    }




    const data = await response.json();



    if(!data.results?.length){

      return null;

    }



    const game = data.results[0];



    return {

      portada: game.background_image,

      rating: game.rating,

      fecha: game.released,

      plataformas:
        game.platforms?.map(
          (p:any)=>p.platform.name
        ) || []

    };



  } catch(error){


    console.log(
      "RAWG FALLÓ:",
      error
    );


    return null;

  }


}