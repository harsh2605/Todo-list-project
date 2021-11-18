//javascript code to make a todo list 
let text = prompt("what would you like to do");
const storage = []
while (text !== 'quit' && text !== 'q') {
    if (text === 'list') {
        //show list in the console
        console.log("***********");
        for (let i = 0; i < storage.length; i++) {
            console.log(`${i} : ${storage[i]}`);
        }
        console.log("***********");
    }
    else if (text === 'new') {
        //Ada a new to-do
        let adding = prompt("pls enter the content you want to add to your todo list");
        storage.push(adding);
        console.log(`${adding} added to the list`);//by using this dollar sign, called string literals we can add variables directly into a string
    }
    else if (text === 'delete') {
        //Delete a to-do item
        let index = prompt("enter the index of the element which you want to delete");
        let deleted = storage.splice(index, 1);
        console.log(`${deleted} deleted from the todo list`);
    }
    text = prompt("what would you like to do");
}
console.log("yeah!! you quit the app");