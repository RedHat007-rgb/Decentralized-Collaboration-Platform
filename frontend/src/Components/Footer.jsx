const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h2>Empowering collaboration, one block at a time.</h2>
      <p>
        ©{new Date().getFullYear()} Decentralized Collaboration Platform. All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
