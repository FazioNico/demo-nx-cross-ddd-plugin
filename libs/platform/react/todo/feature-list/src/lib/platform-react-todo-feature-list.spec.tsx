import { render } from '@testing-library/react';

import PlatformReactTodoFeatureList from './platform-react-todo-feature-list';

describe('PlatformReactTodoFeatureList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlatformReactTodoFeatureList />);
    expect(baseElement).toBeTruthy();
  });
});
