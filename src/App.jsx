import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  const[projectsState,setProjectsState]=useState({
    selectedProjectId:undefined,
    projects:[]
  })

  function handleStartAddProject(){
    setProjectsState((prevProjectsState)=>{
     return { ...prevProjectsState,selectedProjectId:null
      }
    })
  }

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject/>
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject}/>
     {content}
    </main>
  );
}

export default App;
