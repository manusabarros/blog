import { FC } from "react";
import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import { getStyleProps } from "../lib/utils";

const Article: FC<{ data: any }> = ({ data }) => {
  // console.log(data);
  return (
    <Box>
      <article>
        <header>
          <Heading>{data.title}</Heading>
          {data.cover && <Image src={data.cover} alt={data.title} w="100%" />}
        </header>
        <section>
          {data.results.map((block: any) =>
            block.paragraph ? (
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
            ) : block.image ? (
              <Image key={block.id} src={block.image.file.url} alt={block.id} w="100%" />
            ) : null
          )}
        </section>
        <footer></footer>
      </article>
    </Box>
  );
};

export default Article;
