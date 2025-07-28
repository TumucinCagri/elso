import { json } from "@sveltejs/kit"
import * as database from './database.js'


export async function POST({ request, cookies }) {
    console.log('Megy')

    const data = await request.json()
    console.log(data)

    database.be(data)

    return json({
        'ok':true
    })
}