const fetch = require('node-fetch')
const generateAuthorization = require('./authorization')
const moment = require('moment')

// Faction Controller


// Factions

const getFactions = () => {

    return fetch(`http://${process.env.MEDIEVAL_DS_ADDRESS}:${process.env.MEDIEVAL_API_PORT}/vrageremote/v1/session/factions`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(json => {
       return(json.Data)
    });

}

const getFaction = (tag) => {

    return fetch(`http://${process.env.MEDIEVAL_DS_ADDRESS}:${process.env.MEDIEVAL_API_PORT}/vrageremote/v1/session/factions/${tag}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(json => {
       return(json.Data)
    });

}

module.exports = [getFactions, getFaction];