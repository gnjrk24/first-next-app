//http:/~~~~~.~~~/posts/[id]
import Layout from "../../components/layout";
import { getIds } from "../../lib/posts";
import { getPostById } from "@/lib/posts";

export const getStaticProps = async ({ params }) => {
  console.log(params);
  return {
    props: {
      post: getPostById(params.id),
    },
  };
};
//getStaticPaths;指定のオブジェクトをreturnすることで動的ルートを設定
export const getStaticPaths = async ({ params }) => {
  const ids = getIds();
  console.log(ids);
  return {
    paths: getIds(),
    fallback: false, //記事にないidを指定すると404
  };
};

export default function Post({ post }) {
  return (
    <Layout>
      <h2>{post.title}</h2>
      <p>test</p>
      <p>{post.content}</p>
    </Layout>
  );
}
