export default function ObjectSection() {
  const styles = {
    sectionStyle: {
      backgroundColor: "#f1ddc4",
      opacity: 0.6,
      width: "20%",
      borderRadius: "20px",
      margin: "20px",
    },
    sectionContainer: {
      display: "flex",
      flex: 1,
      height: "100%",
      justifyContent: "center",
      gap: "50px",
    },
  };

  return (
    <div style={styles.sectionContainer}>
      <div style={styles.sectionStyle} className="object-section"></div>
    </div>
  );
}
