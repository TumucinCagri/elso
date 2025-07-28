import * as database from '../database.js'
import { json } from '@sveltejs/kit'



export function load({ params }) {
    console.log(database.keres(params.slug))
    return {
        data: database.keres(params.slug)
    }
}