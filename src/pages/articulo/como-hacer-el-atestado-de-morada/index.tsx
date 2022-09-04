import { NextPage } from "next";
import Article from "../../../components/Article";
import { getArticle } from "../../../controllers/notion";

const AtestadoMorada: NextPage<{ data: any }> = ({ data }) => {
  return <Article data={data} />;
};

export default AtestadoMorada;

export const getServerSideProps = getArticle("d75db668cf004fadbd22efd5d7a6bdd0");
