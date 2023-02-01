const gameId = 'eU8fUe323J6Z3a6jqAvT';

const fetchData = async () => {
  const data = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
  );
  const container = await data.json();
  return container;
};

export default fetchData;