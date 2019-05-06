import React from 'react';
import { connect } from 'react-redux';
import setTaskData from '../Actions/Tasks';
import uuidv4 from 'uuid/v4';
class AddTask extends React.Component {
    addItem = () => {
        if( this.refs.input.value ==='') return;
        let items = this.props.data.concat({ text: this.refs.input.value ,completed:false,deleted:false ,id:uuidv4() });
        this.refs.input.value ='';
        this.props.setData(items);

    }
    render() {


        return (
            <>
                <input type="text" ref="input" />
                <button type="submit" onClick={this.addItem} >Add</button>
             
            </>
        )
    }
}
const mapStateToProps = state => ({
    data : state.tasks,
    completed:state.tasks.completed,
    deleted:state.tasks.completed,
});
const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(setTaskData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
