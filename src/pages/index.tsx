import type { NextPage } from "next";
import Article from "../components/Article";
import { getArticle } from "../controllers/notion";

const HomePage: NextPage<{ data: any }> = ({ data }) => {
  return <Article data={data} />;
};

export default HomePage;

export const getServerSideProps = getArticle("5759ee3d-34b4-4838-a60c-7b873a5311cf");
