import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  coordinate?: number[];
}

/** MouseTracker Component - Tracks mouse */
function Navbar({ coordinate }: Props) {
  const [appName, setappName] = useState("");
  const [logo] = useState("PLACEHOLDER FOR LOGO");
  const [user_info] = useState("PLACEHOLDER FOR USER INFORMATION");

  useEffect(() => {
    if (logo) setappName("APPLICATION NAME");
    else return;
  }, [logo, user_info]);

  return (
    <MouseTracker>
      <div>
        <Left>{logo}</Left>
        <div>
          <strong>{appName}</strong>
        </div>
        <Right>{user_info}</Right>
      </div>
    </MouseTracker>
  );
}

const MouseTracker = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  height: 64px;
  padding-top: 16px;
  // center application text
  padding-left: calc(50% - 89px);
  background-color: white;
  border-bottom: 1px solid #f1f1f1;
  inset: 0;
  bottom: auto;
  z-index: 1;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 16px;
  height: 64px;
  background: white;
  z-index: 1;
  border-right: 1px solid #f1f1f1;
  top: 0;
  left: 0;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 16px;
  height: 64px;
  background: white;
  z-index: 1;
  border-left: 1px solid #f1f1f1;
  top: 0;
  right: 0;
`;

export default Navbar;
