//javascript code to make a todo list 
let text = prompt("what would you like to do");
const storage = []
while (text !== 'quit' && text !== 'q') {
    if (text === 'list') {
        console.log("***********");
        for (let i = 0; i < storage.length; i++) {
            console.log(`${i} : ${storage[i]}`);
        }
        console.log("***********");
    }
    else if (text === 'new') {
        let adding = prompt("pls enter the content you want to add to your todo list");
        storage.push(adding);
        console.log(`${adding} added to the list`);//by using this dollar sign concept it is called string literals  
    }
    else if (text === 'delete') {
        let index = prompt("enter the index of the element which you want to delete");
        let deleted = storage.splice(index, 1);
        console.log(`${deleted} deleted from the todo list`);
    }
    text = prompt("what would you like to do");
}
console.log("yeah!! you quit the app");