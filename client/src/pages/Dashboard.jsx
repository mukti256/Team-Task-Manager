import {
  useState,
  useEffect
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

function Dashboard() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [evaluationType, setEvaluationType] =
  useState("");
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] =
  useState(false);
  const [evaluations, setEvaluations] =
  useState([]);
  const [taskId, setTaskId] = useState("");
  const [prompt, setPrompt] = useState("");
  const [betterResponse, setBetterResponse] =
  useState("");
  const [ratingA, setRatingA] =
  useState(0);
  const [ratingB, setRatingB] =
  useState(0); 
  const [selectedCategory, setSelectedCategory] =
  useState("all");
  const [tasks, setTasks] = useState([
  {
    title: "Login API",
    status: "completed"
  },

  {
    title: "MongoDB Save",
    status: "pending"
  },

  {
    title: "Railway Deploy",
    status: "overdue"
  }
 ]);
  const [newTask, setNewTask] =
  useState("");

  const [taskStatus, setTaskStatus] =
  useState("pending");
  const selectedStyle = {
  background: "#38bdf8",
  color: "white"
  };




  useEffect(() => {

  let interval;

  if (timerRunning) {

    interval = setInterval(() => {

      setSeconds((prev) => prev + 1);

    }, 1000);

  }

  return () => clearInterval(interval);

  }, [timerRunning]);

  const cardStyle = {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "18px",
    width: "230px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    transition: "0.3s"
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
        display: "flex"
      }}
    >

      {/* Sidebar */}

      <div
        style={{
          width: open ? "250px" : "80px",
          background: "#111827",
          padding: "20px",
          transition: "0.3s"
        }}
      >

        {/* Top */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >

          {
            open &&
            <h2 style={{ color: "#38bdf8" }}>
              TaskFlow
            </h2>
          }

          <h2
            onClick={() => setOpen(!open)}
            style={{
              cursor: "pointer"
            }}
          >
            ☰
          </h2>

        </div>


        {/* Menu */}

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "40px",
            lineHeight: "60px",
            fontSize: "18px"
          }}
        >

          <Link
            to="/dashboard"
            style={{
            textDecoration: "none",
            color: "white"
          }}
>
            <li style={{ cursor: "pointer" }}>
            📊 {open && "Dashboard"}
            </li>
          </Link>

          <Link
            to="/projects"
            style={{
            textDecoration: "none",
            color: "white"
        }}
>
            <li style={{ cursor: "pointer" }}>
                📁 {open && "Projects"}
            </li>
          </Link>

          <Link
            to="/tasks"
            style={{
            textDecoration: "none",
            color: "white"
        }}
>
            <li style={{ cursor: "pointer" }}>
                ✅ {open && "Tasks"}
            </li>
          </Link>

          <li style={{ cursor: "pointer" }}>
            👥 {open && "Team"}
          </li>

          <li style={{ cursor: "pointer" }}>
            ⚙ {open && "Settings"}
          </li>

        </ul>

      </div>


      {/* Main Content */}

      <div
        style={{
          flex: 1,
          padding: "30px"
        }}
      >

        {/* Header */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px"
          }}
        >

          <div>

            <h1
              style={{
                fontSize: "45px",
                marginBottom: "10px"
              }}
            >
              Welcome Back, Mukti 👋
            </h1>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "18px"
              }}
            >
              Manage your projects and tasks efficiently
            </p>

          </div>


          <button
            style={{
              background: "#38bdf8",
              border: "none",
              padding: "14px 22px",
              borderRadius: "12px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            + New Task
          </button>

        </div>
        

        {/* Cards */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >

          <div

            onClick={() =>
                setSelectedCategory("all")
            }

            style={{
                ...cardStyle,
                cursor: "pointer",
                border:
                    selectedCategory === "all"
                    ? "2px solid #38bdf8"
                    : "2px solid transparent",

                transform:
                    selectedCategory === "all"
                    ? "scale(1.03)"
                    : "scale(1)",

                transition: "0.3s"
            }}
            >
            <h3>Total Tasks</h3>
            <h1 style={{ fontSize: "50px" }}>12</h1>
          </div>

          <div

            onClick={() =>
                setSelectedCategory(
                selectedCategory === "completed"
                    ? ""
                    : "completed"
                )
            }

            style={{
                ...cardStyle,
                cursor: "pointer",
                transition: "0.3s",
                overflow: "hidden"
            }}
            >

            {
                selectedCategory === "completed"
                ? (
                    <div>

                    <h3
                        style={{
                        marginBottom: "20px"
                        }}
                    >
                        Completed Tasks
                    </h3>

                    <p>✔ Login API</p>

                    <p>✔ Authentication</p>

                    <p>✔ Dashboard Design</p>

                    </div>
                )
                : (
                    <>
                    <h3>Completed</h3>

                    <h1
                        style={{
                        fontSize: "50px",
                        color: "#22c55e"
                        }}
                    >
                        7
                    </h1>
                    </>
                )
            }

            </div>

          <div

            onClick={() =>
                setSelectedCategory(
                selectedCategory === "pending"
                    ? ""
                    : "pending"
                )
            }

            style={{
                ...cardStyle,
                cursor: "pointer",
                transition: "0.3s",
                overflow: "hidden"
            }}
            >

            {
                selectedCategory === "pending"
                ? (
                    <div>

                    <h3
                        style={{
                        marginBottom: "20px"
                        }}
                    >
                        Pending Tasks
                    </h3>

                    <p>🟡 MongoDB Save</p>

                    <p>🟡 Railway Deployment</p>

                    </div>
                )
                : (
                    <>
                    <h3>Pending</h3>

                    <h1
                        style={{
                        fontSize: "50px",
                        color: "#facc15"
                        }}
                    >
                        3
                    </h1>
                    </>
                )
            }

            </div>

          <div

                onClick={() =>
                    setSelectedCategory(
                    selectedCategory === "overdue"
                        ? ""
                        : "overdue"
                    )
                }

                style={{
                    ...cardStyle,
                    cursor: "pointer",
                    transition: "0.3s",
                    overflow: "hidden"
                }}
                >

                {
                    selectedCategory === "overdue"
                    ? (
                        <div>

                        <h3
                            style={{
                            marginBottom: "20px"
                            }}
                        >
                            Overdue Tasks
                        </h3>

                        <p>❌ README Update</p>

                        <p>❌ Backend Deploy</p>

                        </div>
                    )
                    : (
                        <>
                        <h3>Overdue</h3>

                        <h1
                            style={{
                            fontSize: "50px",
                            color: "#ef4444"
                            }}
                        >
                            2
                        </h1>
                        </>
                    )
                }

                </div>
        </div>
        

    
        {/* Productivity Section */}

        <div
        style={{
        marginTop: "40px",
        background: "#1e293b",
        padding: "25px",
        borderRadius: "18px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
        }}
>

        <h2
        style={{
        marginBottom: "20px"
        }}
>
        Today's Productivity
        </h2>


        <div
        style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px"
        }}
  >

        <div>
        <p style={{ color: "#94a3b8" }}>
            Current Task
        </p>

        <h3>
            Text to Image Comparison
        </h3>
        </div>


        <div>
        <p style={{ color: "#94a3b8" }}>
            Avg Time / Task
        </p>

        <h3>
            5 Minutes
        </h3>
        </div>


        <div>
        <p style={{ color: "#94a3b8" }}>
            Daily Goal
        </p>

        <h3>
            7 Hours
        </h3>
        </div>


        <div>
        <p style={{ color: "#94a3b8" }}>
            Completed
        </p>

        <h3 style={{ color: "#22c55e" }}>
            4.5 Hours
        </h3>
        </div>


        <div>
        <p style={{ color: "#94a3b8" }}>
            Remaining
        </p>

        <h3 style={{ color: "#f59e0b" }}>
            2.5 Hours
        </h3>
        </div>

        </div>
        {/* Evaluation Task Section */}

        <div
        style={{
            marginTop: "40px",
            background: "#1e293b",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
        }}
        >

        <h2
            style={{
            marginBottom: "25px"
            }}
        >
            AI Evaluation Task
        </h2>


        {/* Task ID */}

        <div
            style={{
            marginBottom: "20px"
            }}
        >

            <label
            style={{
                color: "#94a3b8"
            }}
            >
            Task ID
            </label>

            <input
            type="text"
            placeholder="Enter Task ID"
            value={taskId}
            onChange={(e) =>
              setTaskId(e.target.value)
            }
            style={{
                width: "100%",
                padding: "14px",
                marginTop: "10px",
                borderRadius: "12px",
                border: "none",
                outline: "none"
            }}
            />

        </div>


        {/* Prompt */}

        <div
            style={{
            marginBottom: "20px"
            }}
        >

            <label
            style={{
                color: "#94a3b8"
            }}
            >
            Prompt
            </label>

            <textarea
            placeholder="Write prompt here..."
            rows="4"
            value={prompt}
            onChange={(e) =>
              setPrompt(e.target.value)
            }
            style={{
                width: "100%",
                padding: "14px",
                marginTop: "10px",
                borderRadius: "12px",
                border: "none",
                outline: "none"
            }}
            />

        </div>

            {/* Evaluation Type */}

        <div
        style={{
            marginBottom: "20px"
        }}
        >

        <label
            style={{
            color: "#94a3b8"
            }}
        >
            Evaluation Type
        </label>

        <select

            value={evaluationType}

            onChange={(e) =>
            setEvaluationType(e.target.value)
            }

            style={{
            width: "100%",
            padding: "14px",
            marginTop: "10px",
            borderRadius: "12px",
            border: "none",
            outline: "none"
            }}
>

            <option value="">
                Select Evaluation Type
            </option>

            <option value="with">
                With Justification
            </option>

            <option value="without">
                Without Justification
            </option>

        </select>

        </div>


        {/* Justification */}

        {
         evaluationType === "with" && (

            <div
            style={{
                marginBottom: "20px"
            }}
            >

            <label
                style={{
                color: "#94a3b8"
                }}
            >
                Justification
            </label>

            <textarea
                placeholder="Write your justification here..."
                rows="4"
                style={{
                width: "100%",
                padding: "14px",
                marginTop: "10px",
                borderRadius: "12px",
                border: "none",
                outline: "none"
                }}
            />

            </div>

             )
            }

  {/* Response Sources */}

  <div
    style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap"
    }}
  >

    {/* Response A */}

    <div
      style={{
        flex: 1,
        minWidth: "300px"
      }}
    >

      <label
        style={{
          color: "#94a3b8"
        }}
      >
        Response A Source
      </label>

      <input
        type="text"
        placeholder="Paste Response A link"
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "10px",
          borderRadius: "12px",
          border: "none",
          outline: "none"
        }}
      />

    </div>


    {/* Response B */}

    <div
      style={{
        flex: 1,
        minWidth: "300px"
      }}
    >

      <label
        style={{
          color: "#94a3b8"
        }}
      >
        Response B Source
      </label>

      <input
        type="text"
        placeholder="Paste Response B link"
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "10px",
          borderRadius: "12px",
          border: "none",
          outline: "none"
        }}
      />

    </div>

  </div>


    {/* Better Response Selection */}

        <div
        style={{
            marginTop: "20px",
            marginBottom: "20px"
        }}
        >

        <label
            style={{
            color: "#94a3b8"
            }}
        >
            Better Response
        </label>
        

        <div
            style={{
            display: "flex",
            gap: "15px",
            marginTop: "12px",
            flexWrap: "wrap"
            }}
        >

            <button

            onClick={() =>
                setBetterResponse("Response A")
            }

            style={{
                padding: "12px 18px",
                borderRadius: "10px",
                border: "none",
                background:
                    betterResponse === "Response A"
                    ? "#38bdf8"
                    : "#334155",
                color: "white",
                cursor: "pointer"
                }}
            >
                Response A
                </button>


            <button

            onClick={() =>
                setBetterResponse("Response B")
            }

            style={{
                padding: "12px 18px",
                borderRadius: "10px",
                border: "none",
                background:
                    betterResponse === "Response B"
                    ? "#38bdf8"
                    : "#334155",
                color: "white",
                cursor: "pointer"
            }}
            >
                 Response B
            </button>


            <button
            

             onClick={() =>
             setBetterResponse("Tie")
            }

            style={{
                padding: "12px 18px",
                borderRadius: "10px",
                border: "none",
                background:
                    betterResponse === "Tie"
                    ? "#38bdf8"
                    : "#334155",
                color: "white",
                cursor: "pointer"
                }}
>
                Tie
            </button>

        </div>

        </div>

         {/* Ratings */}

        <div
        style={{
            marginTop: "25px",
            marginBottom: "20px"
        }}
        >

        <label
            style={{
            color: "#94a3b8"
            }}
        >
            Response Ratings
        </label>


        {/* Response A Rating */}

        <div
            style={{
            marginTop: "15px"
            }}
        >

            <p>Response A</p>

            <div
            style={{
                display: "flex",
                gap: "10px"
            }}
            >

            {
                [1,2,3,4,5].map((star) => (

                <button

                    key={star}

                    onClick={() =>
                    setRatingA(star)
                    }

                    style={{
                    background:
                        ratingA >= star
                        ? "#facc15"
                        : "#334155",

                    color: "white",

                    border: "none",

                    width: "40px",

                    height: "40px",

                    borderRadius: "10px",

                    cursor: "pointer"
                    }}
                >
                    ★
                </button>

                ))
            }

            </div>

        </div>


        {/* Response B Rating */}

        <div
            style={{
            marginTop: "20px"
            }}
        >

            <p>Response B</p>

            <div
            style={{
                display: "flex",
                gap: "10px"
            }}
            >

            {
                [1,2,3,4,5].map((star) => (

                <button

                    key={star}

                    onClick={() =>
                    setRatingB(star)
                    }

                    style={{
                    background:
                        ratingB >= star
                        ? "#facc15"
                        : "#334155",

                    color: "white",

                    border: "none",

                    width: "40px",

                    height: "40px",

                    borderRadius: "10px",

                    cursor: "pointer"
                    }}
                >
                    ★
                </button>

                ))
            }

            </div>

        </div>

        </div>

        {/* AHT Timer */}

        <div
        style={{
        marginBottom: "25px"
        }}
        >

        <label
        style={{
        color: "#94a3b8"
        }}
        >
        Evaluation Timer
        </label>


        <h1
        style={{
        marginTop: "10px",
        marginBottom: "15px",
        fontSize: "45px"
        }}
        >
        {Math.floor(seconds / 60)}:
        {String(seconds % 60).padStart(2, "0")}
        </h1>


        <div
        style={{
        display: "flex",
        gap: "15px"
        }}
        >

        <button

        onClick={() =>
            setTimerRunning(true)
            }

            style={{
            padding: "12px 18px",
            border: "none",
            borderRadius: "10px",
            background: "#22c55e",
            color: "white",
            cursor: "pointer"
            }}
        >
            Start
        </button>


        <button

            onClick={() =>
            setTimerRunning(false)
            }

            style={{
            padding: "12px 18px",
            border: "none",
            borderRadius: "10px",
            background: "#ef4444",
            color: "white",
            cursor: "pointer"
            }}
        >
            Stop
        </button>


        <button

            onClick={() => {
            setSeconds(0);
            setTimerRunning(false);
            }}

            style={{
            padding: "12px 18px",
            border: "none",
            borderRadius: "10px",
            background: "#334155",
            color: "white",
            cursor: "pointer"
            }}
        >
            Reset
        </button>

        </div>

        </div>

  {/* Submit Button */}

  <button

    onClick={() => {

        const newEvaluation = {

        taskId,

        prompt,

        evaluationType,

        betterResponse,

        timeTaken:
            `${Math.floor(seconds / 60)}m ${seconds % 60}s`

        };

        setEvaluations([
        ...evaluations,
        newEvaluation
        ]);

        alert("Evaluation Submitted");

    }}

    style={{
        marginTop: "25px",
        background: "#38bdf8",
        border: "none",
        padding: "14px 22px",
        borderRadius: "12px",
        color: "white",
        cursor: "pointer",
        fontSize: "16px"
    }}
    >
    Submit Evaluation
    </button>   

    </div>
    

    {/* Evaluation History */}

        <div
        style={{
            marginTop: "40px",
            background: "#1e293b",
            padding: "25px",
            borderRadius: "18px"
        }}
        >

        <h2
            style={{
            marginBottom: "20px"
            }}
        >
            Evaluation History
        </h2>


        <table
            width="100%"
            style={{
            borderCollapse: "collapse"
            }}
        >

            <thead>

            <tr style={{ color: "#94a3b8" }}>
                <th align="left">Task ID</th>
                <th align="left">Type</th>
                <th align="left">Better</th>
                <th align="left">AHT</th>
            </tr>

            </thead>


            <tbody>

            {
                evaluations.map((item, index) => (

                <tr
                    key={index}
                    style={{
                    height: "55px"
                    }}
                >

                    <td>{item.taskId}</td>

                    <td>{item.evaluationType}</td>

                    <td>{item.betterResponse}</td>

                    <td>{item.timeTaken}</td>

                </tr>

                ))
            }

            </tbody>

        </table>

        </div>

        {/* Progress Bar */}

        <div
            style={{
            marginTop: "25px"
            }}
    >

        <div
        style={{
            background: "#334155",
            height: "14px",
            borderRadius: "20px",
            overflow: "hidden"
        }}
        >

        <div
            style={{
            width: "65%",
            background: "#38bdf8",
            height: "100%"
            }}
        />

        </div>

        <p
        style={{
            marginTop: "10px",
            color: "#94a3b8"
        }}
        >
        65% Daily Goal Completed
        </p>

        </div>

        </div>


        {/* Dynamic Tasks View */}

        <div
        style={{
            marginTop: "40px",
            background: "#1e293b",
            padding: "25px",
            borderRadius: "18px"
        }}
        >

        <h2
            style={{
            marginBottom: "20px"
            }}
        >
            {
            selectedCategory === "all"
                ? "All Tasks"
                : selectedCategory === "completed"
                ? "Completed Tasks"
                : selectedCategory === "pending"
                ? "Pending Tasks"
                : "Overdue Tasks"
            }
        </h2>


        <ul
            style={{
            lineHeight: "45px"
            }}
        >

            {
            selectedCategory === "all" && (
                <>
                <li>✔ Build Login API</li>
                <li>🟡 Dashboard UI</li>
                <li>❌ Deploy Backend</li>
                </>
            )
            }


            {
            selectedCategory === "completed" && (
                <>
                <li>✔ Build Login API</li>
                </>
            )
            }


            {
            selectedCategory === "pending" && (
                <>
                <li>🟡 Dashboard UI</li>
                </>
            )
            }


            {
            selectedCategory === "overdue" && (
                <>
                <li>❌ Deploy Backend</li>
                </>
            )
            }

        </ul>

        </div>

        {/* Recent Tasks */}

        <div
          style={{
            marginTop: "40px",
            background: "#1e293b",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
          }}
        >

          <h2
            style={{
              marginBottom: "20px"
            }}
          >
            Recent Tasks
          </h2>

          <table
            width="100%"
            style={{
              borderCollapse: "collapse"
            }}
          >

            <thead>

              <tr style={{ color: "#94a3b8" }}>
                <th align="left">Task</th>
                <th align="left">Status</th>
                <th align="left">Priority</th>
              </tr>

            </thead>


            <tbody>

              <tr style={{ height: "60px" }}>
                <td>Build Login API</td>
                <td style={{ color: "#22c55e" }}>
                  Completed
                </td>
                <td>High</td>
              </tr>

              <tr style={{ height: "60px" }}>
                <td>Create Dashboard UI</td>
                <td style={{ color: "#f59e0b" }}>
                  Pending
                </td>
                <td>Medium</td>
              </tr>

              <tr style={{ height: "60px" }}>
                <td>Deploy Backend</td>
                <td style={{ color: "#ef4444" }}>
                  Overdue
                </td>
                <td>High</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;