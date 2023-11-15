import { faker } from "@faker-js/faker";

export interface AttachmentItem {
  id: string;
  type: string;
  content: any;
}

export interface PostItem {
  id: string;
  author: string;
  avatar: string;
  message: string;
  attachments: AttachmentItem[];
}

export const generatePost = (n: number): PostItem[] =>
  faker.helpers.multiple(
    (): PostItem => ({
      id: faker.string.uuid(),
      author: faker.internet.userName(),
      avatar: faker.image.avatar(),
      message: faker.lorem.sentences(2),
      attachments:
        faker.number.int({ min: 1, max: 10 }) > 5
          ? [
              {
                id: faker.string.uuid(),
                type: "image",
                content: faker.image.urlLoremFlickr(),
              },
              {
                id: faker.string.uuid(),
                type: "file",
                content: faker.internet.displayName(),
              },
            ]
          : [],
    }),
    { count: n }
  );
