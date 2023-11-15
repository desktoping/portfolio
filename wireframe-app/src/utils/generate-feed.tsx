import { faker } from "@faker-js/faker";

export interface FeedItem {
  value: string;
  imgSrc: string;
}

export const generateFeed = (n: number): FeedItem[] =>
  faker.helpers.multiple(
    (): FeedItem => ({
      value: faker.internet.userName(),
      imgSrc: faker.image.avatar(),
    }),
    { count: n }
  );
