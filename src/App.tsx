import React from "react";
import {Quest} from "./components/Quests";
import {quests} from "./components/ListQuests";





export const App = () => {
  return(
      <div className="App">
        <Quest quests={quests}/>
      </div>
  );
}
