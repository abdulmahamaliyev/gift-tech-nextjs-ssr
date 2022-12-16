export interface Articles {
  contents?: ArticleContents[] | null;
  totalCount: number;
  offset: number;
  limit: number;
}

export interface ArticleContents {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  image: Image;
  body: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export const mockArticle = {
  body: '<p> Ad velit tempor ad non cillum duis quis est. Anim ad fugiat ipsum elit fugiat. Nisi sint labore incididunt voluptate consectetur eiusmod quis excepteur. Voluptate proident officia laborum occaecat aliqua elit sint in. Aute sit non cillum irure officia magna. Laboris nostrud ea mollit labore officia nostrud enim commodo anim. Aliquip sint dolore mollit ut. </p>',
  createdAt: new Date(Date.now()).toLocaleString(),
  description:
    'Esse eiusmod elit cillum mollit. Eu et esse consectetur nisi. Quis tempor ea excepteur qui. Sint ad ea consequat velit Lorem. Aliquip sint voluptate dolore qui. Eu nulla nostrud in cupidatat amet labore. Amet veniam occaecat proident in adipisicing do magna labore consequat anim culpa aliqua voluptate. Officia deserunt elit mollit veniam ex ex incididunt non duis. Reprehenderit elit in aliquip veniam ullamco non do quis mollit commodo exercitation. Id minim sunt nulla dolor ipsum voluptate ut minim nostrud minim esse culpa.',
  id: '231',
  image: {
    height: 1333,
    width: 1506,
    url: 'https://picsum.photos/1506/1333',
  },
  publishedAt: new Date(Date.now()).toLocaleString(),
  title:
    'Do labore consequat veniam quis ea. Incididunt esse sint ut officia dolor consequat dolore exercitation pariatur reprehenderit ex ex. Anim id tempor id reprehenderit laborum. Occaecat cupidatat elit cupidatat irure fugiat incididunt tempor ea laboris consectetur nisi cillum proident Lorem. Dolor incididunt dolor esse Lorem ullamco sint Lorem aliqua enim. Labore cillum minim id magna ex dolore et et consectetur in duis. Commodo cillum magna eiusmod consequat mollit est duis est.',
  revisedAt: new Date(Date.now()).toLocaleString(),
  updatedAt: new Date(Date.now()).toLocaleString(),
};
