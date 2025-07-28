let database = []



export function be(data) {
    database.push(data)
    return true
}

export function ki() {
    return database
}


export function keres(pra) {
    return database.find((data)=> data.title === pra)
}
