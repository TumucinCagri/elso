import { json } from "@sveltejs/kit";
import * as database from './database.js'

export function load() {
    return {
        uzenet: database.ki()
    }
}

