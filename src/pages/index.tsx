import { Link, Text } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import { notion } from "../lib/notion";
import { getStyleProps } from "../lib/utils";
import styles from "./index.module.scss";

const Home: NextPage<{ data: any }> = ({ data }) => {
  return (
    <div className={styles.HomePage}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {data.results.map((block: any) => (
        <Text key={block.id}>
          {block.paragraph.rich_text.map((text: any, i: number) =>
            text.href ? (
              <Link key={i} target="_blank" href={text.href} {...getStyleProps(text.annotations)}>
                {text.plain_text}
              </Link>
            ) : (
              <Text key={i} as="span" {...getStyleProps(text.annotations)}>
                {text.plain_text}
              </Text>
            )
          )}
        </Text>
      ))}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { data: await notion.blocks.children.list({ block_id: "5759ee3d-34b4-4838-a60c-7b873a5311cf" }) },
  };
};
