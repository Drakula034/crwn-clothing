import React from "react";
//import { useLocation, useNavigate, useParams } from 'react-router-dom';// creating withRouter

import "./menu-item.styles.scss";

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//         <Component
//           {...props}
//           location={location}
//           params={params}
//           navigate={navigate}
//         />
//     );
//   }


//   return ComponentWithRouterProp;
// }

// const MenuItem = ({ title, image, size, history, linkUrl, match }) => (
//   <div
//     className={`${size} menu-item`}
//     onClick={() => history.go(`${match.url}${linkUrl}`)}
//   >
//     <div
//       className="background-image"
//       style={{ backgroundImage: `url(${image})` }}
//     />
//     <div className="content">
//       <h1 className="title">{title.toUpperCase()}</h1>
//       <span className="subtitle">SHOP NOW</span>
//     </div>
//   </div>
// );

// export default withRouter(MenuItem);

import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, image, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(linkUrl)}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;


