import fs from "fs";
import path from "path";
import matter from "gray-matter";
//postsDirPath;絶対パス
//process.cwd():node実行時のワーキングディレクトリのパスを取得、postsと結合
const postsDirPath = path.join(process.cwd(), "posts");

export function getPosts() {
  //fs.readdirSync:ディレクトリ内のファイル一覧を取得,引数にとったパスのディレクトリ内のファイル名の配列を返す
  //postNames=['first-post.md']
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    const postPath = path.join(postsDirPath, postName);

    //各postファイルを読み込み、FrontMatterを解析
    const result = matter(fs.readFileSync(postPath, "utf8"));
    console.log(result);
    return { ...result.data, id: postName.replace(/\.md$/, "") };
  });
}

export function getIds() {
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    return {
      params: {
        id: postName.replace(/\.md$/, ""), //.mdを消す
      },
    };
  });
}

export function getPostById(id) {
  const postPath = path.join(postsDirPath, `${id}.md`);

  const result = matter(fs.readFileSync(postPath, "utf8"));

  return {
    id,
    ...result.data,
    content: result.content,
  };
}
