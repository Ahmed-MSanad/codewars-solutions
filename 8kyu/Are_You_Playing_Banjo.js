function areYouPlayingBanjo(name) {
    return (name.startsWith('R') || name.startsWith('r')) ? 
        `${name} plays banjo` : `${name} does not play banjo`;
}

function areYouPlayingBanjo(name) {
    return (name[0].toLowerCase() === 'r') ?
        `${name} plays banjo` : `${name} does not play banjo`;
}