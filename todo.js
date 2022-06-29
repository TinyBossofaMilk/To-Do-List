//todo item factory function
let Item = (title, description, isCompleted) => {
    return {title, description, isCompleted}; //, creationDate, dueDate};    
    // return {title, description, dueDate, creationDate, parentProject}
};

let display = (() => {

    let _projects = {
        defaultProject: [Item('sampleTitle', 'sampledescription', false)]
    };

    let _activeProject = 'defaultProject';

    const _initialize = () => {
        //give addToDoItem button function
        const addItem = document.getElementById('addItem');
        
        //populate to do table
        const display = document.getElementById('display');
        //clear children
        //get active
        _populateList();
        
    };


    const _changeItemCompletionStatus = (e) => {

    };

    //helper function for populating display
    const _createItemElement = (item) => {
        const tempDiv = document.createElement('div');
        tempDiv.classList.add('item');

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.addEventListener('toggle', _changeItemCompletionStatus);

        const title = document.createElement('div');
        title.innerHTML = item.title;
        
        tempDiv.appendChild(input);
        tempDiv.appendChild(title);
        return tempDiv;
    };

    const _populateList = () => {
        const display = document.getElementById('display');
        
        for(const item of _projects[_activeProject])
        {
            display.appendChild(_createItemElement(item));
        }
    };


    _initialize();
}) ();