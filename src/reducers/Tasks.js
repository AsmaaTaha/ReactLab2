export default (state, action) => {
  switch (action.type) {
    case 'SET_TASKS_DATA':
      return { ...state, tasks: action.data };
    case 'SET_COMPLETED_DATA':
      state.tasks.find(t => (t.id === action.id)).completed = !(state.tasks.find(t => (t.id === action.id)).completed);
     if ( state.tasks.find(t => (t.id === action.id)).deleted)
     {
      state.tasks.find(t => (t.id === action.id)).completed=false;
      state.tasks.find(t => (t.id === action.id)).deleted=false;
     }
      return { ...state, tasks: [...state.tasks] };

    case 'SET_DELETED_DATA':
     state.tasks.find(t => (t.id === action.id)).deleted = true;
      return { ...state, tasks: [...state.tasks] };

    default:
      return state;
  }
};