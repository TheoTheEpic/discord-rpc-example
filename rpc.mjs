import chalk from 'chalk'
console.log(chalk.cyan('[RPC]') + ' ' + chalk.yellow('Loading module "discord-rpc"...'))
import rpc from 'discord-rpc'
console.log('\n' + chalk.cyan('[RPC]') + ' ' + chalk.green('Module "discord-rpc" loaded.'))
console.log('\n' + chalk.cyan('[RPC]') + ' ' + chalk.yellow('Initializing RPC client...'))
const client = new rpc.Client({ transport: 'ipc' })
console.log('\n' + chalk.cyan('[RPC]') + ' ' + chalk.green('RPC client initialized.'))

const clientId = 'your client id'

client.on('ready', () => {
    console.log('\n' + chalk.cyan('[RPC]') + ' ' + chalk.green('RPC has started. Authenticated for user ' + client.user.username + '#' + client.user.discriminator + '.'))
    console.log('\n' + chalk.cyan('[RPC]') + ' ' + chalk.yellow('Attempting to set presence...'))
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : 'This is a test',
            assets : {
                large_image : 'testicon',
                large_text : 'test'
            },
            buttons : [{label : 'button 1' , url : 'https://example.com'},{label : 'button2', url : 'https://example.com'}]
        }
    });
    console.log('\n' + chalk.cyan('[RPC]') + ' ' + chalk.green('Presence set. Please leave the console open.'))
});

console.log('\n' + chalk.cyan('[RPC]') + ' ' + chalk.yellow('Starting RPC client...'))
client.login({clientId}).catch(console.log)
