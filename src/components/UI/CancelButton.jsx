import "./CancelButtons.css";
import styled from "styled-components";
const CancelButton = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid red !important;
  background-color: red !important;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;
  transition: all 1s;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #510674 !important;
    border-color: #510674 !important;
  }

//   added important becase i have a global more specificed style
`;
// const CancelButton = () => {
//   return (
//     <div>
//       <button type="button" className="closeButton">
//         Cancel
//       </button>
//     </div>
//   );
// };
export default CancelButton;
