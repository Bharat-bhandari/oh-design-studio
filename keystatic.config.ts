// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "Bharat-bhandari",
      name: "oh-design-studio",
    },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/site/images",
            publicPath: "/site/images",
            schema: {
              title: fields.text({
                label: "Caption",
                description:
                  "The text to display under the image in a caption.",
              }),
            },
          },
        }),
      },
    }),
  },
});
