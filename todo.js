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
        //give addToDogoal button function
        const addgoal = document.getElementById('addgoal');
        
        //populate to do table
        const display = document.getElementById('display');
        //clear children
        //get active
        _populateProjectsList();
        _populateGoalsList();
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

    const _changegoalCompletionStatus = (e, goal) => {
        goal.isCompleted = e.checked;
        console.log("_projects")
        console.log(goal)
    };

    //helper function for populating display
    const _creategoalElement = (goal) => {
        const tempDiv = document.createElement('div');
        tempDiv.classList.add('goal');

        const input = document.createElement('input');
        input.type = 'checkbox';
<<<<<<< Updated upstream
        input.checked = goal.isCompleted;
        input.addEventListener('toggle', _changegoalCompletionStatus(input, goal));
=======
        input.setAttribute("for", )//SOME SORT OF ID
        input.addEventListener('toggle', _changeItemCompletionStatus);
>>>>>>> Stashed changes

        const title = document.createElement('span');
        title.innerHTML = goal.title;
        
        tempDiv.appendChild(input);
        tempDiv.appendChild(title);
        return tempDiv;
    };

    const _populateGoalsList = () => {
        const display = document.getElementById('display');
<<<<<<< Updated upstream
        
        while(display.hasChildNodes())
        {
            display.removeChild(display.firstChild);
        }

        for(const goal of _projects[_activeProject])
=======

        for(const item of _projects[_activeProject])
>>>>>>> Stashed changes
        {
            display.appendChild(_creategoalElement(goal));
        }
    };


    _initialize();
}) ();