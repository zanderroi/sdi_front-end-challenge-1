import { defineStore } from "pinia";
export const useNewsStore = defineStore('newsStore', {
  state: () => ({
    newsItems: []
  }),
  actions: {
    async fetchNewsData() {
      try {
        const [newsResponse, authorsResponse] = await Promise.all([
          useFetch("https://tmsph-sdi-challenges.pages.dev/challenges/news.json", {
            method: "GET"
          }),

          useFetch("https://tmsph-sdi-challenges.pages.dev/challenges/authors.json", {
            method: "GET"
          })
        ]);

        const newsData = newsResponse.data.value;
        const authorsData = authorsResponse.data.value;

        if (!newsData || !authorsData) {
          throw new Error("Failed to fetch data");
        }

        this.newsItems = newsData.map((newsItem) => {
          const author = authorsData.find(
            (author) => author.id === newsItem.author_id
          );
          return {
            ...newsItem,
            author: author ? author.name : "Unknown Author",
          };
        });
      } catch (err) {
        console.error("Error fetching data:", err);

      }
    }
  }
});