import Papa from 'papaparse'
import {readFile, writeFile} from 'fs/promises'


async function main(){
    let csv = new URL(`./awards.csv`, import.meta.url)
    let rows = Papa.parse(await readFile(csv, 'utf-8'), {header:true})

    const awards = rows.data.map(({
        CLASS:medal,
        Bestower:award,
        Category:category,
        Link:url,
        Client:client,
    }) => ({
        medal, award, category, url, client,
    }))

    console.log(JSON.stringify(awards, null, "  "))
}


main()