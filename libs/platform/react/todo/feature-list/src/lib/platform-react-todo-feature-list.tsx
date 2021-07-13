import { Route, Link } from 'react-router-dom';

import './platform-react-todo-feature-list.module.css';

/* eslint-disable-next-line */
export interface PlatformReactTodoFeatureListProps {}

export function PlatformReactTodoFeatureList(
  props: PlatformReactTodoFeatureListProps
) {
  return (
    <div>
      <h1>Welcome to platform-react-todo-feature-list!</h1>

      <ul>
        <li>
          <Link to="/">platform-react-todo-feature-list root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => (
          <div>This is the platform-react-todo-feature-list root route.</div>
        )}
      />
    </div>
  );
}

export default PlatformReactTodoFeatureList;
