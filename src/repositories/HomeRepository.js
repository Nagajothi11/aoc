import Repository from "./Repository";

class HomeRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getData() {
    let url = `https://krds-assignment.github.io/aoc/api-assets/data.json`;
    const response = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  }

}

export default new HomeRepository();
