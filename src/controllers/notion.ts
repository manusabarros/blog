import { GetServerSideProps } from "next";
import { notion } from "../lib/notion";

export const getArticle =
  (id: string): GetServerSideProps =>
  async () => {
    const page: any = await notion.pages.retrieve({ page_id: id });
    const blocks: any = await notion.blocks.children.list({ block_id: id });
    return {
      props: {
        data: {
          title: page.properties.title.title[0].plain_text,
          cover: page.cover?.file.url || null,
          ...blocks,
        },
      },
    };
  };
