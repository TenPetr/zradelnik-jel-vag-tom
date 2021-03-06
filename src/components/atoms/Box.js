import styled from "@emotion/styled";
import img from "../../images/food-placeholder.png";

const Box = styled.div({
  display: "flex",
  border: "1px solid white",
  cursor: "pointer",
  backgroundColor: "grey",
  height: "120px",
  textAlign: "center",
  padding: "15px",
  backgroundSize: "cover",
  backgroundImage: `url(${img})`,
});

export default Box;
