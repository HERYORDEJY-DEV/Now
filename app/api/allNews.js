import axios from 'axios';

// export default () =>
//   axios.get(apiUrl).then((res) => {
//     const data = res.data;
//     return data;
//     // setAppState({ loading: false, repos: allRepos });
//   });

// export default function allNews(url) {
//   axios
//     .get(url)
//     .then(function (response) {
//       return response.data.articles;
//       // console.log(response.data.articles);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

export default function getArticles() {
  axios
    .get(
      'http://newsapi.org/v2/top-headlines?country=ng&apiKey=5b940d2bb1364af591fe9f96b23af26f',
    )
    .then((response) => {
      return response.data.articles.map((article) => ({
        time: `${article.publishedAt}`,
        title: `${article.title}`,
        url: `${article.url}`,
        source: `${article.source.name}`,
        // url: `${article.url}`,
      }));
    })
    // .then((articles) => {
    //   this.setState({
    //     articles,
    //     isLoading: false,
    //   });
    // })
    .catch((error) => this.setState({ error, isLoading: false }));
}

const url =
  'http://newsapi.org/v2/top-headlines?country=ng&apiKey=5b940d2bb1364af591fe9f96b23af26f';

export async function getNews() {
  let result = await fetch(url).then((response) => response.json());
  return result.articles;
}
