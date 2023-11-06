import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";
import "./index.css";
import { useState } from "react";

export function App() {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <section className="App">
      <TwitterFollowCard
        userName='midudev'
        initialIsFollowing={isFollowing}
      >
        <strong>Miguel Ángel Durán</strong>
      </TwitterFollowCard>

      <button onClick={() => setIsFollowing(!isFollowing)}>Cambiar estado de App</button>
    </section>
  );
}
