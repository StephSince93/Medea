

const clickedButton =  (e: React.SyntheticEvent): void => {
    let target = e.target as HTMLInputElement;
    console.log(target);
}

const LibTopBar = () => (
  <div
    style={{
      height: "20%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: "1px solid grey",
    }}
  >
    <h3 style={{ color: "white" }}>Recently Added</h3>
    <button
      style={{
        color: "white",
        backgroundColor: "#1F1F1F",
        height: "40px",
        borderRadius: "5px",
      }}
      onClick={clickedButton}
    >
      Add New Video
    </button>
  </div>
);

export default LibTopBar;
