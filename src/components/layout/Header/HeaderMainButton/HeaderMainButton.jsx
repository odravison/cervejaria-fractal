import React from 'react';
import './HeaderMainButton.scss';
import { Link, useRouteMatch } from "react-router-dom";

export default function HeaderMainButton(props) {
  const headerButtonLinkClassName = "HeaderButtonLink";
  const routeOnClassName = "OnThisRoute";
  const routeOffClassName = "OutThisRoute";

  const match = useRouteMatch({
    path: props.to,
    exact: props.activeOnlyWhenExact
  });

  return (
    <Link to={props.to}>
      <button className={match ? `${routeOnClassName} ${headerButtonLinkClassName}` : `${headerButtonLinkClassName} ${routeOffClassName}`}>
        {props.label}
      </button>
    </Link>
  );
}

// class HeaderMainButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     const className = "HeaderButtonLink";
//     const to = this.props.to;
//     const activeOnlyWhenExact = this.props.activeOnlyWhenExact;
    
//     const isMatch = match({to, activeOnlyWhenExact});
//     return (
//       <Link to={this.props.to}>
//         <button className={isMatch ? '' : className}>
//           {this.props.label}
//         </button>
//       </Link>
//     );
//   }
// }

// export default HeaderMainButton;