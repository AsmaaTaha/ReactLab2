import React from 'react';
import {connect} from 'react-redux';
import SetCompletedTask from '../Actions/CompleteAction';
class DeletedTask extends React.Component
{
    checkboxChange=(e)=>
    {
        this.props.Setnotcompleted(e.target.dataset.did)
    }
render()
{
    return(
        <>
         { this.props.data.filter(t => (t.deleted===true)).map(t =><div key={t.id}> <p key={t.id}>{t.text} <input onChange={this.checkboxChange} data-did={t.id} type="checkbox" /> </p> </div>)}
        </>
    )
}
}
const mapStateToProps =state => ({
    data : state.tasks,
    completed:state.tasks.completed,
    deleted:state.tasks.completed,
});


const mapDispatchToProps = dispatch => ({
    Setnotcompleted: id => dispatch(SetCompletedTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletedTask);