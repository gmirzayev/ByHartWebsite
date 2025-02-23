import Papa from 'papaparse'
import {readFile, writeFile} from 'fs/promises'
import {promisify} from "util"
import child_process from "child_process"

const exec = promisify(child_process.exec);

async function findPageAssets(){
    const {stdout} = await exec("egrep -r 'import.*assets' src/pages src/components/ProjectsGrid.astro", {
        cwd:new URL(`../..`, import.meta.url),
    })

    return stdout.trim().split("\n").map(line => {
        if (line.trim()){
            let [page, importLine] = line.split(":")
            let [_, asset, path] = importLine.match(/import\s*(\S*?)\s*from\s*".*?assets\/(.*?)"/)
            if (!path.match("\.(mp4|mov|webm)$")){
                return {page, asset, path}
            }
        }
    }).filter(a => !!a)
}

async function main(){
    let csv = new URL(`./alt-text.csv`, import.meta.url)
    let rows = Papa.parse(await readFile(csv, 'utf-8'), {header:true})

    let assets = await findPageAssets()
    let others = []

    for (const row of rows.data){
        let match = assets.find(a => a.path==row.path)
        if (match) match.alt = row.text.trim()
        if (!match) others.push({path:row.path, alt:row.text.trim()})
    }

    let outFile = new URL(`./alt-text-assets.csv`, import.meta.url)
    await writeFile(outFile, Papa.unparse(assets, {
        columns:["page", "asset", "path", "alt"]
    }))

    let etcFile = new URL(`./alt-text-others.csv`, import.meta.url)
    await writeFile(etcFile, Papa.unparse(others, {
        columns:["path", "alt"]
    }))

    console.log(`${outFile.pathname}: ${assets.length} assets`)
    console.log(`${etcFile.pathname}: ${others.length} assets`)
    // console.log(`merged ${assets.length} assets (${others.length} extra${others.length==1?'':'s'})`)
}


main()