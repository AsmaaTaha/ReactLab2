import React from 'react';
import {connect} from 'react-redux';
// import setcompleted from '../Actions/CompleteAction';
import setCompletedData from '../Actions/CompleteAction';
class CompletedTask extends React.Component
{
    checkboxchange=(e)=>
    {
        this.props.setcompleted(e.target.dataset.cid)
    }
render()
{

    return(
        <>
       {
      this.props.data.filter(t => (t.completed===true && t.deleted===false)).map(t => <div key={t.id}><p key={t.id}>{t.text} <input onChange={this.checkboxchange} data-cid={t.id} type="checkbox" /></p></div>)

    }
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
    setcompleted: id => dispatch(setCompletedData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTask);
