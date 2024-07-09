export function filterFilmsByDirector(list, director) {
  if (director) return list.filter((film) => film.director === director);
  else return list;
}

export function getListOf(list, prop) {
  return [...new Set(list.map((film) => film[prop] || ""))];
}

export function getFilmsStats(list) {
  const avg_score =
    list.reduce((sum, film) => sum + parseInt(film.rt_score), 0) / list.length;
  const acc_score = list.reduce(
    (sum, film) => sum + parseInt(film.rt_score),
    0
  );
  const total = list.length;
  const latest = Math.max(...list.map((film) => parseInt(film.release_date)));

  return { avg_score, acc_score, total, latest };
}

/**
 *
 * @param {Array} list An array of "movie" objects
 * @returns  An object with the accumulated score, average score, total count and latest release date for the given list of movies
 */

export function getFilmsStats(list) {
  //The total movie count is simply the length of the array
  const total = list.length;

  if (total == 0) {
    return {
      avg_score: 0,
      acc_score: 0,
      latest: 0,
      total: 0,
    };
  }

  let acc_score = 0;
  for (let i = 0; i < total; i++) {
    acc_score += Number(list[i].rt_score);
  }

  const acc_score2 = list.reduce((acc, curr) => {
    return acc + Number(curr.rt_score);
  }, 0);

  const avg_score = acc_score / total;

  const latest = Math.max(...list.map((movie) => Number(movie.release_date)));

  let mostRecent = Number(list[0].release_date);
  for (let i = 1; i < list.length; i++) {
    if (Number(list[i].release_date) > mostRecent) {
      mostRecent = Number(list[i].release_date);
    }
  }

  return {
    acc_score,
    avg_score,
    total,
    latest,
  };
}
