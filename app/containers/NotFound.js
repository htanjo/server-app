// @flow
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  redirect: () => dispatch(push('/'))
});

class NotFound extends Component {
  static propTypes = {
    redirect: PropTypes.func.isRequired,
    redirectTo: PropTypes.string
  };

  componentWillMount() {
    const { redirect, redirectTo } = this.props;
    if (redirectTo) {
      redirect(redirectTo);
    }
  }

  render() {
    return null;
  }
}

const NotFoundContainer = connect(mapStateToProps, mapDispatchToProps)(NotFound);

export default NotFoundContainer;
