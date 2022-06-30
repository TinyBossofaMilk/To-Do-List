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

    const _createAddTaskButton = () => {
        const display = document.getElementById('display');
        
        const addButton = document.createElement('div');
        addButton.addEventListener('click', () => {
            _createEditTaskWindow();
        });
        addButton.innerText = '+ Add Task';
        

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
                _clearDisplayedTasks();
                _populateTasksList();
                _createAddTaskButton();
            });

            projectsTab.appendChild(project);            
        });
    };

    const _createEditTaskWindow = (item) => {
        const display = document.getElementById('addTask');
        const editTask = document.createElement('div');

        const title = document.createElement('input');
        title.type = 'text';
        // title.input=

        console.log("edit task window");
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
        title.innerText = task.title;

        const edit = document.createElement('span');
        edit.innerText = 'edit';
        edit.addEventListener('click', _createEditTaskWindow)
        
        const del = document.createElement('delete');
        del.innerText = 'del';
        del.addEventListener('click', () => {
            // _projects[_activeProject] = 

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