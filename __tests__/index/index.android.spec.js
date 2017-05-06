import React from 'React';
import 'react-native';
import RNTestProject from '../../src/index.android';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
it('renders correctly', () => {
    const tree = renderer.create(React.createElement(RNTestProject, null));
    console.log(tree.toTree().nodeType);
});
//# sourceMappingURL=index.android.spec.js.map