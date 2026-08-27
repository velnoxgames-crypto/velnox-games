export type Game = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  destacado: boolean;
  descripcion?: string;
};
export const games: Game[] = [
{
  id: 1,
  nombre: "Grand Theft Auto V",
  imagen: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
  categoria: "Mundo abierto",
  precio: 29900,
  destacado: true,
  
},

{
  id: 2,
  nombre: "Red Dead Redemption 2",
  imagen: "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
  categoria: "Mundo abierto",
  precio: 29900,
  destacado: true,
  
},

{
  id: 3,
  nombre: "Cyberpunk 2077",
  imagen: "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
  categoria: "RPG",
  precio: 29900,
  destacado: true,
  
},

{
  id: 4,
  nombre: "Elden Ring",
  imagen: "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
  categoria: "Acción RPG",
  precio: 29900,
  destacado: true,
  
},

{
  id: 5,
  nombre: "Baldur's Gate 3",
  imagen: "https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg",
  categoria: "RPG",
  precio: 29900,
  destacado: true,
  
},

{
  id: 6,
  nombre: "God of War Ragnarök",
  imagen: "https://media.rawg.io/media/screenshots/3c4/3c4c51b66741363d83b56ce66b1240ec.jpg",
  categoria: "Acción",
  precio: 29900,
  destacado: true,
  
},

{
  id: 7,
  nombre: "Marvel's Spider-Man Remastered",
  imagen: "https://media.rawg.io/media/games/5f1/5f1399f755ed3a40b04a9195f4c06be5.jpg",
  categoria: "Acción",
  precio: 29900,
  destacado: true,
  
},

{
  id: 8,
  nombre: "Marvel's Spider-Man: Miles Morales",
  imagen: "https://media.rawg.io/media/games/048/048b46cdc66cbc7e235e1f359c2a77ec.jpg",
  categoria: "Acción",
  precio: 24900,
  destacado: false,
  
},

{
  id: 9,
  nombre: "The Last of Us Part I",
  imagen: "https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg",
  categoria: "Aventura",
  precio: 29900,
  destacado: true,
  
},

{
  id: 10,
  nombre: "Resident Evil 4 Remake",
  imagen: "https://media.rawg.io/media/games/51a/51a404b9918a0b19fc704a3ca248c69f.jpg",
  categoria: "Terror",
  precio: 29900,
  destacado: true,
  
},

{
  id: 11,
  nombre: "Resident Evil Village",
  imagen: "https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg",
  categoria: "Terror",
  precio: 24900,
  destacado: false,
  
},

{
  id: 12,
  nombre: "Resident Evil 2 Remake",
  imagen: "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg",
  categoria: "Terror",
  precio: 19900,
  destacado: false,
  
},

{
  id: 13,
  nombre: "Hogwarts Legacy",
  imagen: "https://media.rawg.io/media/games/044/044b2ee023930ca138deda151f40c18c.jpg",
  categoria: "Aventura",
  precio: 29900,
  destacado: true,
  
},

{
  id: 14,
  nombre: "Forza Horizon 5",
  imagen: "https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg",
  categoria: "Carreras",
  precio: 29900,
  destacado: false,
  
},

{
  id: 15,
  nombre: "Gran Turismo 7",
  imagen: "https://media.rawg.io/media/games/3f6/3f6a04b856f23310d3c2f5be8c5963f7.jpg",
  categoria: "Carreras",
  precio: 29900,
  destacado: false,
  
},

{
  id: 16,
  nombre: "Call of Duty: Modern Warfare III",
  imagen: "https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg",
  categoria: "Acción",
  precio: 29900,
  destacado: true,
  
},

{
  id: 17,
  nombre: "Call of Duty: Black Ops 6",
  imagen: "https://media.rawg.io/media/games/e89/e89f9a409bce5d36873f65ea9659c36e.jpg",
  categoria: "Acción",
  precio: 34900,
  destacado: true,
  
},

{
  id: 18,
  nombre: "Battlefield 2042",
  imagen: "https://media.rawg.io/media/games/af2/af2b640fa820e8a8135948a4cd399539.jpg",
  categoria: "Acción",
  precio: 19900,
  destacado: false,
  
},

{
  id: 19,
  nombre: "Starfield",
  imagen: "https://media.rawg.io/media/games/ba8/ba82c971336adfd290e4c0eab6504fcf.jpg",
  categoria: "RPG",
  precio: 29900,
  destacado: false,
  
},

{
  id: 20,
  nombre: "Diablo IV",
  imagen: "https://media.rawg.io/media/games/77d/77d51f8f4a07c3eecb0f8504027b1bf0.jpg",
  categoria: "RPG",
  precio: 29900,
  destacado: false,
  
},

{
  id: 21,
  nombre: "Assassin's Creed Mirage",
  imagen: "https://media.rawg.io/media/games/fbd/fbd0128013b7965904be571e75fb30c0.jpg",
  categoria: "Aventura",
  precio: 24900,
  destacado: false,
  
},

{
  id: 22,
  nombre: "Assassin's Creed Valhalla",
  imagen: "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg",
  categoria: "Mundo abierto",
  precio: 24900,
  destacado: false,
  
},

{
  id: 23,
  nombre: "Ghost of Tsushima Director's Cut",
  imagen: "https://media.rawg.io/media/games/193/193c9fe23ca026914fdf41d551ff3df9.jpg",
  categoria: "Acción",
  precio: 29900,
  destacado: true,
  
},

{
  id: 24,
  nombre: "Sekiro: Shadows Die Twice",
  imagen: "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
  categoria: "Acción RPG",
  precio: 29900,
  destacado: false,
  
},

{
  id: 25,
  nombre: "Death Stranding Director's Cut",
  imagen: "https://media.rawg.io/media/games/b6f/b6fa0cde8a1204c7d6edc2ec3c753df9.jpg",
  categoria: "Aventura",
  precio: 19900,
  destacado: false,
  
},

{
  id: 26,
  nombre: "Horizon Zero Dawn",
  imagen: "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
  categoria: "Aventura",
  precio: 19900,
  destacado: false,
  
},

{
  id: 27,
  nombre: "Horizon Forbidden West",
  imagen: "https://media.rawg.io/media/games/bf7/bf73b105ccbba42107986bbcd96fcada.jpg",
  categoria: "Aventura",
  precio: 29900,
  destacado: false,
  
},

{
  id: 28,
  nombre: "Days Gone",
  imagen: "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg",
  categoria: "Supervivencia",
  precio: 19900,
  destacado: false,
  
},

{
  id: 29,
  nombre: "The Witcher 3: Wild Hunt",
  imagen: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
  categoria: "RPG",
  precio: 24900,
  destacado: true,
  
},

{
  id: 30,
  nombre: "The Elder Scrolls V: Skyrim Special Edition",
  imagen: "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
  categoria: "RPG",
  precio: 19900,
  destacado: false,
  
},
{
  id: 31,
  nombre: "Resident Evil 3 Remake",
  imagen: "https://media.rawg.io/media/screenshots/de3/de3a30ea61f93a5634674977dc623ec8.jpg",
  categoria: "Terror",
  precio: 19900,
  destacado: false,
  
},

{
  id: 32,
  nombre: "Resident Evil 7 Biohazard",
  imagen: "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
  categoria: "Terror",
  precio: 19900,
  destacado: false,
  
},

{
  id: 33,
  nombre: "Silent Hill 2 Remake",
  imagen: "https://media.rawg.io/media/games/09b/09b41c1a2c5761c5b1772a4ae238bb0e.jpg",
  categoria: "Terror",
  precio: 29900,
  destacado: true,
  
},

{
  id: 34,
  nombre: "Dead Space Remake",
  imagen: "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
  categoria: "Terror",
  precio: 24900,
  destacado: false,
  
},

{
  id: 35,
  nombre: "The Evil Within",
  imagen: "https://media.rawg.io/media/games/157/1570121f5c4d240504f1eae5c3854733.jpg",
  categoria: "Terror",
  precio: 14900,
  destacado: false,
  
},

{
  id: 36,
  nombre: "The Evil Within 2",
  imagen: "https://media.rawg.io/media/games/d5f/d5fd2f970f48d0877a53aec98825faba.jpg",
  categoria: "Terror",
  precio: 14900,
  destacado: false,
  
},

{
  id: 37,
  nombre: "Outlast",
  imagen: "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
  categoria: "Terror",
  precio: 9900,
  destacado: false,
  
},

{
  id: 38,
  nombre: "Outlast 2",
  imagen: "https://media.rawg.io/media/games/880/880f6aa65fe9d786f1a455963df76180.jpg",
  categoria: "Terror",
  precio: 9900,
  destacado: false,
  
},

{
  id: 39,
  nombre: "Alien: Isolation",
  imagen: "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
  categoria: "Terror",
  precio: 14900,
  destacado: false,
  
},

{
  id: 40,
  nombre: "Sons of the Forest",
  imagen: "https://media.rawg.io/media/games/7a0/7a092fa63811a7f6ed90f456a8887e91.jpg",
  categoria: "Supervivencia",
  precio: 24900,
  destacado: true,
  
},

{
  id: 41,
  nombre: "The Forest",
  imagen: "https://media.rawg.io/media/games/1be/1be575aa6de86de328433a63fb534d9a.jpg",
  categoria: "Supervivencia",
  precio: 14900,
  destacado: false,
  
},

{
  id: 42,
  nombre: "Subnautica",
  imagen: "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg",
  categoria: "Supervivencia",
  precio: 14900,
  destacado: false,
  
},

{
  id: 43,
  nombre: "Dying Light 2 Stay Human",
  imagen: "https://media.rawg.io/media/games/73d/73db43df633477d4604c7248292f34b2.jpg",
  categoria: "Supervivencia",
  precio: 24900,
  destacado: false,
  
},

{
  id: 44,
  nombre: "Metro Exodus",
  imagen: "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg",
  categoria: "Acción",
  precio: 19900,
  destacado: false,
  
},

{
  id: 45,
  nombre: "Control Ultimate Edition",
  imagen: "https://media.rawg.io/media/games/a74/a7462cb98ad1ed06f646afd0a5a1454d.jpg",
  categoria: "Acción",
  precio: 19900,
  destacado: false,
  
},

{
  id: 46,
  nombre: "Alan Wake 2",
  imagen: "https://media.rawg.io/media/games/5b9/5b963d7633cd640fa2dbc4069d1c6377.jpg",
  categoria: "Terror",
  precio: 29900,
  destacado: true,
  
},

{
  id: 47,
  nombre: "Mafia Definitive Edition",
  imagen: "https://media.rawg.io/media/games/345/3452d9d4483686c602372e0e6b3bb4cc.jpg",
  categoria: "Acción",
  precio: 19900,
  destacado: false,
  
},

{
  id: 48,
  nombre: "Sleeping Dogs Definitive Edition",
  imagen: "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg",
  categoria: "Mundo abierto",
  precio: 14900,
  destacado: false,
  
},

{
  id: 49,
  nombre: "Watch Dogs Legion",
  imagen: "https://media.rawg.io/media/games/415/41563ce6cb061a210160687a4e5d39f6.jpg",
  categoria: "Mundo abierto",
  precio: 19900,
  destacado: false,
  
},

{
  id: 50,
  nombre: "Far Cry 6",
  imagen: "https://media.rawg.io/media/games/5dd/5dd4d2dd986d2826800bc37fff64aa4f.jpg",
  categoria: "Acción",
  precio: 24900,
  destacado: false,
  
},

{
  id: 51,
  nombre: "Batman: Arkham Knight",
  imagen: "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
  categoria: "Acción",
  precio: 14900,
  destacado: false,
  
},

{
  id: 52,
  nombre: "Middle-earth: Shadow of War",
  imagen: "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg",
  categoria: "Acción RPG",
  precio: 14900,
  destacado: false,
  
},

{
  id: 53,
  nombre: "Monster Hunter World",
  imagen: "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
  categoria: "RPG",
  precio: 19900,
  destacado: false,
  
},

{
  id: 54,
  nombre: "Monster Hunter Rise",
  imagen: "https://media.rawg.io/media/games/dbb/dbba6100aae179b5f24052c9141d426d.jpg",
  categoria: "RPG",
  precio: 24900,
  destacado: false,
  
},

{
  id: 55,
  nombre: "Nier: Automata",
  imagen: "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg",
  categoria: "RPG",
  precio: 19900,
  destacado: false,
  
},

{
  id: 56,
  nombre: "Final Fantasy VII Remake",
  imagen: "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
  categoria: "RPG",
  precio: 24900,
  destacado: false,
  
},

{
  id: 57,
  nombre: "Final Fantasy XVI",
  imagen: "https://media.rawg.io/media/games/22e/22e68bb62b3013283972cecf98ed51dc.jpg",
  categoria: "RPG",
  precio: 29900,
  destacado: false,
  
},

{
  id: 58,
  nombre: "Persona 5 Royal",
  imagen: "https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg",
  categoria: "RPG",
  precio: 24900,
  destacado: false,
  
},

{
  id: 59,
  nombre: "Fallout 4",
  imagen: "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
  categoria: "RPG",
  precio: 14900,
  destacado: false,
  
},

{
  id: 60,
  nombre: "Mass Effect Legendary Edition",
  imagen: "https://media.rawg.io/media/games/64e/64e2a77f37ddc48d102127234af99886.jpg",
  categoria: "RPG",
  precio: 19900,
  destacado: false,
  
},
{
  id: 61,
  nombre: "EA Sports FC 26",
  imagen: "https://media.rawg.io/media/screenshots/70f/70fb740261ef152d0d3392a9a306c9ca.jpg",
  categoria: "Deportes",
  precio: 29900,
  destacado: true,
  
},

{
  id: 62,
  nombre: "NBA 2K26",
  imagen: "https://media.rawg.io/media/screenshots/b77/b7728fb8d07d60093c25b97b8dba692d.jpg",
  categoria: "Deportes",
  precio: 29900,
  destacado: false,
  
},

{
  id: 63,
  nombre: "F1 25",
  imagen: "https://media.rawg.io/media/screenshots/a25/a25c7d9b979e08a6e35d513294f1e56f.jpg",
  categoria: "Carreras",
  precio: 29900,
  destacado: false,
  
},

{
  id: 64,
  nombre: "Need for Speed Unbound",
  imagen: "https://media.rawg.io/media/games/d7b/d7b45d416ca18bf86f9f1638ee331efa.jpg",
  categoria: "Carreras",
  precio: 19900,
  destacado: false,
  
},

{
  id: 65,
  nombre: "Need for Speed Heat",
  imagen: "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg",
  categoria: "Carreras",
  precio: 14900,
  destacado: false,
  
},

{
  id: 66,
  nombre: "Dirt Rally 2.0",
  imagen: "https://media.rawg.io/media/games/8f3/8f306808c45a4dbe0cd698e0b142af08.jpg",
  categoria: "Carreras",
  precio: 14900,
  destacado: false,
  
},

{
  id: 67,
  nombre: "Assetto Corsa Competizione",
  imagen: "https://media.rawg.io/media/games/19e/19ea8efb10fcbcf1b9c60729d510ed14.jpg",
  categoria: "Carreras",
  precio: 19900,
  destacado: false,
  
},

{
  id: 68,
  nombre: "WRC Generations",
  imagen: "https://media.rawg.io/media/games/41f/41f38f0a459c9267b3aff22f4d0fdd3e.jpg",
  categoria: "Carreras",
  precio: 19900,
  destacado: false,
  
},

{
  id: 69,
  nombre: "WWE 2K25",
  imagen: "https://media.rawg.io/media/screenshots/75c/75ca72f55bbf12059fd17e650bdf8c0f.jpg",
  categoria: "Deportes",
  precio: 29900,
  destacado: false,
  
},

{
  id: 70,
  nombre: "Mortal Kombat 1",
  imagen: "https://media.rawg.io/media/games/155/155087d7b9c1225cda0ab9e586b6374d.jpg",
  categoria: "Pelea",
  precio: 29900,
  destacado: true,
  
},

{
  id: 71,
  nombre: "Tekken 8",
  imagen: "https://media.rawg.io/media/games/ed3/ed3a5e9fab79022979de9ef420137f73.jpg",
  categoria: "Pelea",
  precio: 29900,
  destacado: true,
  
},

{
  id: 72,
  nombre: "Street Fighter 6",
  imagen: "https://media.rawg.io/media/games/ce2/ce2463db40cec363f360c29ddcc56884.jpg",
  categoria: "Pelea",
  precio: 24900,
  destacado: false,
  
},

{
  id: 73,
  nombre: "Dragon Ball: Sparking! ZERO",
  imagen: "https://media.rawg.io/media/screenshots/64f/64fdee7e7b863fbc22460cb8e38614b9.jpg",
  categoria: "Pelea",
  precio: 29900,
  destacado: true,
  
},

{
  id: 74,
  nombre: "Naruto X Boruto Ultimate Ninja Storm Connections",
  imagen: "https://media.rawg.io/media/screenshots/d35/d3536ff5243b0720b863dda14dd40bdf.jpg",
  categoria: "Pelea",
  precio: 19900,
  destacado: false,
  
},

{
  id: 75,
  nombre: "Minecraft",
  imagen: "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg",
  categoria: "Supervivencia",
  precio: 24900,
  destacado: true,
  
},

{
  id: 76,
  nombre: "Terraria",
  imagen: "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
  categoria: "Supervivencia",
  precio: 9900,
  destacado: false,
  
},

{
  id: 77,
  nombre: "Stardew Valley",
  imagen: "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
  categoria: "Simulación",
  precio: 9900,
  destacado: false,
  
},

{
  id: 78,
  nombre: "Hollow Knight",
  imagen: "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
  categoria: "Indie",
  precio: 14900,
  destacado: false,
  
},

{
  id: 79,
  nombre: "Cuphead",
  imagen: "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg",
  categoria: "Indie",
  precio: 14900,
  destacado: false,
  
},

{
  id: 80,
  nombre: "Hades",
  imagen: "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
  categoria: "Indie",
  precio: 14900,
  destacado: false,
  
},

{
  id: 81,
  nombre: "Among Us",
  imagen: "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg",
  categoria: "Indie",
  precio: 5900,
  destacado: false,
  
},

{
  id: 82,
  nombre: "Dead Cells",
  imagen: "https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg",
  categoria: "Indie",
  precio: 14900,
  destacado: false,
  
},

{
  id: 83,
  nombre: "Ori and the Will of the Wisps",
  imagen: "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg",
  categoria: "Plataformas",
  precio: 14900,
  destacado: false,
  
},

{
  id: 84,
  nombre: "Celeste",
  imagen: "https://media.rawg.io/media/games/594/59487800889ebac294c7c2c070d02356.jpg",
  categoria: "Plataformas",
  precio: 9900,
  destacado: false,
  
},

{
  id: 85,
  nombre: "Civilization VI",
  imagen: "https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg",
  categoria: "Estrategia",
  precio: 14900,
  destacado: false,
  
},

{
  id: 86,
  nombre: "Age of Empires IV",
  imagen: "https://media.rawg.io/media/games/23e/23e45acbf29bd241913ddcf5cf4053d5.jpg",
  categoria: "Estrategia",
  precio: 19900,
  destacado: false,
  
},

{
  id: 87,
  nombre: "Cities: Skylines II",
  imagen: "https://media.rawg.io/media/games/aa5/aa581a715c1afd3d3abdef4669e73852.jpg",
  categoria: "Simulación",
  precio: 24900,
  destacado: false,
  
},

{
  id: 88,
  nombre: "Euro Truck Simulator 2",
  imagen: "https://media.rawg.io/media/games/1f5/1f5ddf7199f2778ff83663b93b5cb330.jpg",
  categoria: "Simulación",
  precio: 14900,
  destacado: false,
  
},

{
  id: 89,
  nombre: "The Sims 4",
  imagen: "https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg",
  categoria: "Simulación",
  precio: 14900,
  destacado: false,
  
},

{
  id: 90,
  nombre: "Palworld",
  imagen: "https://media.rawg.io/media/games/4e9/4e9c951414c732923fa72d5b1da49402.jpg",
  categoria: "Supervivencia",
  precio: 19900,
  destacado: true,
  
},

];