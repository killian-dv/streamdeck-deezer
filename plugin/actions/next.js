// Récupération du jeton d'accès OAuth
const accessToken = "XXX";

// Construction de l'URL pour passer à la piste suivante
const url = `https://api.deezer.com/user/me/player/next?access_token=${accessToken}`;

// Envoi de la requête HTTP POST à l'API de Deezer
fetch(url, { method: "POST" })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to skip to next track");
    }
  })
  .catch((error) => {
    console.error(error);
  });