const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

//add version

yargs.version('1.1.0')

//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('adding a new note');
        
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
        
    }
})

console.log(yargs.argv)