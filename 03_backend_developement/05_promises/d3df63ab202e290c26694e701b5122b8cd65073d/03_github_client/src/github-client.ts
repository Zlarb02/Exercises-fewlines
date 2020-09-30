import { rejects } from "assert";
import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string | void> {
    // You code goes here
    return fetch(`https://api.github.com/users/${nickname}`)
      .then((response: Response) => {
        if (response.status == 404) {
          throw new Error("L'utilisateur n'existe pas");
        }
        return response.json;
      })
      .then((json) => {
        json.repos_url;
      });
  }

  static getRepos() {
    // You code goes here
  }

  static printRepos() {
    // You code goes here
  }

  static printRepository() {
    // You code goes here
  }

  static getProjectInformations() {
    // You code goes here
  }
}
