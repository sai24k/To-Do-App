document.getElementById('startApp').addEventListener('click', function () {
    let input = prompt('What would you like to do?');
    const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

    while (input !== 'quit' && input !== 'q') {
        if (input === 'list') {
            console.log('******************');
            todos.forEach((todo, index) => console.log(`${index}: ${todo}`));
            console.log('******************');
        } else if (input === 'new') {
            const newTodo = prompt('Ok, what is the new todo?');
            todos.push(newTodo);
            console.log(`${newTodo} added to the list!`);
        } else if (input === 'delete') {
            const index = parseInt(prompt('Ok, enter an index to delete:'), 10);
            if (!isNaN(index) && index >= 0 && index < todos.length) {
                const deleted = todos.splice(index, 1);
                console.log(`Ok, deleted: ${deleted[0]}`);
            } else {
                console.log('Invalid index!');
            }
        }
        input = prompt('What would you like to do?');
    }
    console.log('You quit the app.');
});
