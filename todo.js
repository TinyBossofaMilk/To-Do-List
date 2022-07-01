//todo task factory function
let task = (title, description, isCompleted) => {

    return {title, description, isCompleted}; //, creationDate, dueDate};    
    // return {title, description, dueDate, creationDate, parentProject}
};

let display = (() => {
    let _projects = {
        defaultProject: [task('sampleTitle', 'sampledescription', false),
                         task('another note', 'sampledescription', true)],

        'get a job' : [task('complete the Odin Project', 'sampledescription', false),
                      task('make a capstone project', 'sampledescription', false),
                      task('apply for 50 jobs', 'sampledescription', false),
                      task('finish "Cracking the Coding interview"', 'sampledescription', false),]
    };

    let _activeProject = 'defaultProject';

    const _initialize = () => {
        // give addToDo task button function
        const addtask = document.getElementById('addtask');
        
        // const display = document.getElementById('display');
        _populateProjectsList();
        _populateTasksList();
        _createAddTaskButton();
    };

    const _reloadTasks = () => {
        _clearDisplayedTasks();
        _populateTasksList();
        _createAddTaskButton();
    };

    const _createAddTaskButton = () => {
        const display = document.getElementById('display');
        
        const addButton = document.createElement('div');
        addButton.addEventListener('click', () => {
            addButton.remove();
            _createEditTaskWindow();
        });
        addButton.innerText = ' + Add Task';
        

        addButton.type = 'text';


        display.appendChild(addButton);
    };

    const _populateProjectsList = () => {
        const projectsTab = document.getElementById('projects');

        //iterate through and create a task element
        Object.keys(_projects).forEach(name => {
            const project = document.createElement('div');
            project.innerHTML = name;
            project.addEventListener('click', () =>
            {
                _activeProject = project.innerHTML;
                _reloadTasks();
            });

            projectsTab.appendChild(project);            
        });
    };

    const _createEditTaskWindow = (item) => {
        const display = document.getElementById('display');
        const editTaskWindow = document.createElement('div');
        editTaskWindow.id = 'editTaskWindow';

        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.id = 'titleInput';
        if(item)
            titleInput.input = item.title;

        const options = document.createElement('div');
        
        const submitButton = document.createElement('button');
        submitButton.innerText = 'Submit';
        submitButton.addEventListener('click', _submitTaskButton);
        
        const cancelButton = document.createElement('button');
        cancelButton.innerText = 'Cancel';
        cancelButton.addEventListener('click', _cancelButton);
        //TO BE IMPLEMENTED LATER
        // const priorityBar = document.createElement('div'); 

        options.appendChild(submitButton);
        options.appendChild(cancelButton);
        editTaskWindow.appendChild(titleInput);
        editTaskWindow.appendChild(options);

        //makes the edit window.
        display.appendChild(editTaskWindow);
    };

    //helper function for creating/edittaskwindow
    const _submitTaskButton = () => 
    {
        //add task to active project
        _projects[_activeProject].push(task(document.getElementById('titleInput').value, '', false));
        
        //reload tasks page
        _reloadTasks();
    };

    //helper function for cancelling add task option
    const _cancelButton = () => 
    {
        //clear edit window
        document.getElementById('editTaskWindow').remove();
        _createAddTaskButton();
    };

    //helper function for populating tasks display
    const _createtaskElement = (task) => {
        const tempDiv = document.createElement('div');
        tempDiv.classList.add('task');

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = task.isCompleted;
        input.addEventListener('change', () => {task.isCompleted = input.checked;});

        const title = document.createElement('span');
        title.classList.add('title');
        title.innerText = task.title;

        const edit = document.createElement('span');
        edit.innerText = 'edit';
        edit.addEventListener('click', _createEditTaskWindow)
        
        const del = document.createElement('span');
        del.innerText = 'del';
        del.addEventListener('click', () => {
            const indexofDeletedTask = _projects[_activeProject].indexOf(task);
            _projects[_activeProject].splice(indexofDeletedTask, 1);
            _reloadTasks();
        });

        tempDiv.appendChild(input);
        tempDiv.appendChild(title);
        tempDiv.appendChild(edit);
        tempDiv.appendChild(del);
        return tempDiv;
    };

    const _clearDisplayedTasks = () => {
        const display = document.getElementById('display');
        while(display.hasChildNodes())
            {display.removeChild(display.firstChild);}
    };

    const _populateTasksList = () => {
        const display = document.getElementById('display');
        for(const task of _projects[_activeProject])
        {
            display.appendChild(_createtaskElement(task));
        }
    };

    //helper function for adding a task
    const addTask = () => 
    {

    };

    _initialize();
}) ();