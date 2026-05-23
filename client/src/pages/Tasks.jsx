function Tasks() {

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
        Tasks
      </h1>


      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "15px"
        }}
      >

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
              <td>Create Backend APIs</td>
              <td style={{ color: "#22c55e" }}>
                Completed
              </td>
              <td>High</td>
            </tr>

            <tr style={{ height: "60px" }}>
              <td>Build React UI</td>
              <td style={{ color: "#f59e0b" }}>
                Pending
              </td>
              <td>Medium</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Tasks;