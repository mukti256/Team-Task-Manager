import { useEffect, useState } from "react";

import axios from "axios";

function Projects() {

  const [projects, setProjects] =
    useState([]);

  const [name, setName] = useState("");

  const [description, setDescription] =
    useState("");


  // FETCH PROJECTS

  const fetchProjects = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.get(
        "https://team-task-manager-production-1376.up.railway.app/api/projects",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setProjects(res.data);

    } catch (error) {

      console.log(error);

    }
  };


  // CREATE PROJECT

  const createProject = async () => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.post(
        "https://team-task-manager-production-1376.up.railway.app/api/projects",
        {
          name,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Project Created");

      setName("");
      setDescription("");

      fetchProjects();

    } catch (error) {

      alert("Error creating project");

    }
  };


  useEffect(() => {

    fetchProjects();

  }, []);


  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          fontSize: "40px",
          marginBottom: "30px"
        }}
      >
        Projects
      </h1>


      {/* Create Project */}

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "30px"
        }}
      >

        <h2>Create New Project</h2>

        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "none"
          }}
        />


        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "15px"
          }}
        />


        <button
          onClick={createProject}
          style={{
            background: "#38bdf8",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer"
          }}
        >
          Create Project
        </button>

      </div>


      {/* Projects List */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        {
          projects.map((project) => (

            <div
              key={project._id}
              style={{
                background: "#1e293b",
                padding: "25px",
                borderRadius: "15px",
                width: "300px"
              }}
            >

              <h2>{project.name}</h2>

              <p
                style={{
                  color: "#94a3b8"
                }}
              >
                {project.description}
              </p>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Projects;
