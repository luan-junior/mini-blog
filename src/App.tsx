import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/luan-junior.png",
      name: "Luan Júnior",
      role: "CTO @Codeeducation",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Codeeducation. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "www.doctorcare.com.br" },
    ],
    publishedAt: new Date("2024-07-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/github.png",
      name: "Fulano Silva",
      role: "Educator @Codeeducation",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de aprender algo novo com a biblioteca React.JS, descobri que agora ela pode rodar também do lado do servidor.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-07-02 09:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
