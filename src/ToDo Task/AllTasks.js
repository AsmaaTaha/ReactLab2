import React from 'react';
import { connect } from 'react-redux'
import uuid from 'uuid';
import setDeletedTask from '../Actions/DeleteAction';
import setCompletedTask from '../Actions/CompleteAction';
class AllTasks extends React.Component {
    checkboxChange = (e) => {
        this.props.setCompleted(e.target.dataset.id);

    }
    deleteChange = (e) => {
        this.props.setDeleted(e.target.dataset.id)
    }
    render() {
        return (
            <>
                {

                    this.props.data.filter(t => (!t.completed && !t.deleted)).map(t => <div key={t.id}><span>{t.text}</span> <span onClick={this.deleteChange} data-id={t.id} className="fa fa-close"></span> <input onChange={this.checkboxChange} data-id={t.id} type="checkbox" /></div>)
                }
            </>
        )
    }
}
const mapStateToProps = state => ({
    data: state.tasks,
    completed: state.tasks.completed,
    deleted: state.tasks.completed,
    id: state.tasks.id,
});
const mapDispatchToProps = dispatch => ({
    setDeleted: data => dispatch(setDeletedTask(data)),
    setCompleted: data => dispatch(setCompletedTask(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AllTasks);
