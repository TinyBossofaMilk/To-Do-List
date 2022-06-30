//todo goal factory function
let goal = (title, description, isCompleted) => {

    return {title, description, isCompleted}; //, creationDate, dueDate};    
    // return {title, description, dueDate, creationDate, parentProject}
};

let display = (() => {
    let _projects = {
        defaultProject: [goal('sampleTitle', 'sampledescription', false),
                         goal('another note', 'sampledescription', true)],

        'get a job' : [goal('complete the Odin Project', 'sampledescription', false),
                      goal('make a capstone project', 'sampledescription', false),
                      goal('apply for 50 jobs', 'sampledescription', false),
                      goal('finish "Cracking the Coding interview"', 'sampledescription', false),]
    };

    let _activeProject = 'defaultProject';

    const _initialize = () => {
        //give addToDo goal button function
        const addgoal = document.getElementById('addgoal');
        
        //populate to do table
        // const display = document.getElementById('display');
        //clear children
        //get active
        _populateProjectsList();
        _populateGoalsList();
        _createAddGoalButton();
    };

    const _createAddGoalButton = () => {
        const display = document.getElementById('display');
        
        const addButton = document.createElement('div');
        addButton.addEventListener('click', () => {

            _createEditGoalWindow;

        });
        addButton.innerText = '+ Add Goal';
        

        addButton.type = 'text';


        display.appendChild(addButton);
    };

    const _populateProjectsList = () => {
        const projectsTab = document.getElementById('projects');

        //iterate through and create a goal element
        Object.keys(_projects).forEach(name => {
            const project = document.createElement('div');
            project.innerHTML = name;
            project.addEventListener('click', () =>
            {
                _activeProject = project.innerHTML;
                _populateGoalsList();
            });

            projectsTab.appendChild(project);            
        });
    };

    const _createEditGoalWindow = () => {
        console.log("edit goal window")
    };

    //helper function for populating goals display
    const _creategoalElement = (goal) => {
        const tempDiv = document.createElement('div');
        tempDiv.classList.add('goal');

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = goal.isCompleted;
        input.addEventListener('change', () => {goal.isCompleted = input.checked;});

        const title = document.createElement('span');
        title.innerText = goal.title;

        const edit = document.createElement('span');
        edit.innerText = 'edit';
        edit.addEventListener('click', _createEditGoalWindow)
        
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

    const _populateGoalsList = () => {
        const display = document.getElementById('display');
        
        //clear display
        while(display.hasChildNodes())
        {display.removeChild(display.firstChild);}

        for(const goal of _projects[_activeProject])
        {display.appendChild(_creategoalElement(goal));}
    };

    //helper function for adding a goal
    const addGoal = () => 
    {

    };

    _initialize();
}) ();