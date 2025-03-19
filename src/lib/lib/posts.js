import fs from "fs";
import path from "path";
import matter from "gray-matter";

//process.cwd():node実行時のワーキングディレクトリのパスを取得、postsと結合
const postsDirPath = path.join(process.cwd(), "posts");

export function getPosts() {
  //fs.readdirSync:引数にとったパスのディレクトリ内のファイル名の配列を返す
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    const postPath = path.join(postsDirPath, postName);

    //postファイルを読み込み、FrontMatterを解析
    const result = matter(fs.readFileSync(postPath, "utf8"));
    return result.data;
  });
}
