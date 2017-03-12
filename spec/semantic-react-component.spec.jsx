import React from 'react/addons';
import SemanticReactComponent from '../lib/semantic-react-component.jsx';

describe('SemanticReactComponent', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <SemanticReactComponent/>
    );
  });

  it('should render', function() {
  });
});
