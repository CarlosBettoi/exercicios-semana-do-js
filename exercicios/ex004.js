const tarantinoMovies = [
    { name: 'Bastardos inglórios', release: 2009 },
    { name: 'Pulp Fiction', release: 1994 },
    { name: 'Kill Bill: Volume 2', release: 2004 },
    { name: 'Quatro Quartos', release: 1995 },
    { name: 'Sin City', release: 2005 },
    { name: 'Era uma Vez em... Hollywood', release: 2019 },
    { name: 'Django Livre', release: 2012 },
    { name: 'Cães de Aluguel', release: 1992 },
    { name: 'À Prova de Morte', release: 2007 },
    { name: 'Kill Bill: Volume 1', release: 2003 }
  ]

//const filmesantes2000 = tarantinoMovies.filter (filmes => filmes.release < 2000)

const filmesantes2000 = tarantinoMovies.filter (({release}) => release < 2000)

  console.log(filmesantes2000)