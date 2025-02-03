import Papa from 'papaparse'
import {readFile} from 'fs/promises'


async function main(){
    let csv = new URL('./project-tags.csv', import.meta.url)
    let rows = Papa.parse(await readFile(csv, 'utf-8'), {header:true})

    let tags = {}

    for (const row of rows.data){
        let project = row['']
        delete row['']
        tags[project] = Object.entries(row).filter(([tag, active]) => active.trim()=='X').map(kv => kv[0])
    }
    console.log(tags)
}


main()