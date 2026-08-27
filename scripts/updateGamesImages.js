const fs = require("fs");
require("dotenv").config({
  path: ".env.local",
});


const API_KEY = process.env.RAWG_API_KEY;


if (!API_KEY) {
  console.log("❌ No se encontró RAWG_API_KEY");
  process.exit();
}



const filePath = "./data/games.ts";

const content = fs.readFileSync(
  filePath,
  "utf-8"
);



const gameNames = [
  ...content.matchAll(
    /nombre:\s*"([^"]+)"/g
  )
].map(
  match => match[1]
);



async function getImage(name){


  try {


    const response = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(name)}`
    );


    const data = await response.json();


    if(!data.results?.length){

      console.log(
        "❌ No encontrado:",
        name
      );

      return "";

    }


    console.log(
      "✅",
      name
    );


    return data.results[0].background_image || "";


  } catch(error){

    console.log(
      "Error:",
      name
    );

    return "";

  }


}



async function update(){


  let updated = content;



  for(const name of gameNames){


    const image =
      await getImage(name);



    updated =
      updated.replace(

        `nombre: "${name}",`,

        `nombre: "${name}",\n  imagen: "${image}",`

      );


    await new Promise(
      r=>setTimeout(r,600)
    );


  }



  fs.writeFileSync(
    "./data/games_with_images.ts",
    updated
  );



  console.log(
    "🎮 Terminado. Archivo creado: games_with_images.ts"
  );


}



update();