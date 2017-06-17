import React from 'react';
import { connect } from 'react-redux';
import { test } from '../actions/testAction';
import { bindActionCreators } from 'redux'
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        test: test
    }, dispatch)
};
const mapStateToProps = (state) => {
    return {
        count: state.testReducer.count
    }
}
class Test extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }
    render() {
        return (
            <div onClick={() => this.props.test()}>
                Count: {this.props.count}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);