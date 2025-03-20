import Layout from "@/components/layout";
import Link from "next/link";
import { getPosts } from "../lib/posts";

//build時に外部のデータを取得する
export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};
// getStaticProps が実行されたら、Homeコンポーネントにpropsとして渡される
export default function Home({ posts }) {
  return (
    <Layout pageTitle="Home">
      <Link href="/about">About</Link>
      <ul>
        {posts.map(({ title }) => {
          return <p>{title}</p>;
        })}
      </ul>
    </Layout>
  );
}
