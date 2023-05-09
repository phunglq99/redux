export const todoListSelector = (state) => {
    const todoSearch = state.todoList.filter((todo) => {
        return todo.name.includes(state.filters.search);
    })
    console.log(todoSearch);
    return todoSearch
};
export const serachTextSelector = (state) => state.filters.search;
