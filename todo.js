//todo item factory function
let Item = () => {
    return {title, description, isCompleted, creationDate, dueDate};    
    // return {title, description, dueDate, creationDate, parentProject}
};

let display = (() => {

    let _projects = {
        defaultProject: [Item('sampleTitle', 'sampledescription', )]
    };

    let _activeProject = 0;

    const _initialize = () => {
        document.getElementById('addItem');

        //getproject
    };

    
    //helper function for populating display
    const _createItemElement = () => {
        const tempDiv = document.createElement('div');
        tempDiv.classList.add('item');
        const input = document.createElement('input');
        input.addEventListener('toggle', )

        return tempDiv;
    };

    const _populateList = () => {
        const display = document.getElementById('display');

        for(const item of _projects[defaultProject])
        {
            
            

        }
    };







}) ();