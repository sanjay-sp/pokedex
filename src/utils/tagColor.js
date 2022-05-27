export const typeColor = (type) => {
    switch(type) {
        case 'grass':
            return {'background-color':'green'}
        case 'fire':
            return {'background-color':'red'}
        case 'water':
            return {'background-color':'skyblue'}
        case 'electric':
            return {'background-color':'goldenrod'}
        case 'ice':
            return {'background-color':'lightblue'}
        case 'fighting':
            return {'background-color':'rgb(159, 6, 6)'}
        case 'poison':
            return {'background-color':'darkviolet'}
        case 'ground':
            return {'background-color':'gold'}
        case 'flying':
            return {'background-color':'violet'}
        case 'psychic':
            return {'background-color':'darkorchid'}
        case 'bug':
            return {'background-color':'yellowgreen'}
        case 'rock':
            return {'background-color':'tan'}
        case 'ghost':
            return {'background-color':'blue'}
        case 'dragon':
            return {'background-color':'royalblue'}
        case 'dark':
            return {'background-color':'burlywood'}
        case 'steel':
            return {'background-color':'steelblue'}
        case 'fairy':
            return {'background-color':'pink'}
        default :
            return {'background-color':'grey'}
    }
}