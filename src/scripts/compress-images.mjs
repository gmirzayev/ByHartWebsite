import sharp from 'sharp'
import {glob} from 'glob'
import {dirname, basename} from 'path'
import {existsSync} from 'fs'
import {mkdir, stat, copyFile} from 'fs/promises'

const TO_PNG = [
    "Bluprint_BrandColors.jpg",

    "CharcoalBG-tile.png",
    "PaperBG-tile.png",
    "RedBG-tile.png",
    "CK_App_Home.png",
    "CK_Brand_Grid_01.png",
    "CK_Brand_Grid_02.png",
    "CK_Brand_Grid_03.png",
    "CK_Brand_Grid_04.png",
    "CK_Brand_Grid_05.png",
    "CK_Brand_Grid_06.png",
    "CK_Brand_Grid_07.png",
    "CK_Brand_Grid_08.png",
    "CK_Brand_Grid_09.png",
    "CK_Brand_Grid_10.png",
    "CK_Email.png",
    "CK_Icons_Mobile.png",
    "CK_Icons_Desktop.png",
    "CK_Mark.png",
    "CK_Logo_Illustration_Mobile.png",  // huge but needs transparency
    "CK_Logo_Illustration_Desktop.png", // huge but needs transparency
    "CK_Social.png", // huge but needs transparency

    "Kindra_Applicator_Guide2.png",
    "Kindra_Color_Desktop.png",
    "Kindra_Color_Mobile.png",
    "Kindra_Conditions_Thumbnail.jpg",
    "Kindra_Drawing_Words.png",
    "Kindra_Review1.png",
    "Kindra_Site_Background_Desktop.png",
    "Kindra_Site_Background_Mobile.png",
    "Kindra_ThanksCard.png",
    "Kindra_CC_Desktop.png", // huge but needs transparency
    "Kindra_CC_Mobile.png",  // huge but needs transparency

    "PearlyBites_BetterDental.png",
    "PearlyBites_SocialCarousel.png",
    "PearlyBites_SocialPages.png", // huge but needs transparency

    "Sage_Brand_Guide_Grid_05.png",
    "Sage_Brand_Guide_Grid_04.png",
    "Sage_Brand_Guide_Grid_03.png",
    "Sage_Brand_Guide_Grid_02.png",
    "Sage_Brand_Guide_Grid_01.png",
    "Sage_Brand_Guide_Grid_10.png",
    "Sage_Brand_Guide_Grid_09.png",
    "Sage_Brand_Guide_Grid_08.png",
    "Sage_Brand_Guide_Grid_07.png",
    "Sage_Social_2.png",
    "Sage_Photo.png", // huge but needs transparency

    "Pet_Center.png",
]

for (let srcPath of await glob("src/assets/**/orig/*.@(png|jpg)")){
    let dstDir = dirname(srcPath).replace(/orig$/, 'img')
    if (!existsSync(dstDir)){
        await mkdir(dstDir)
    }

    let fn = basename(srcPath)
    let dstFormat = TO_PNG.includes(fn) ? "png" : "jpeg"
    let dstExt = dstFormat == 'png' ? '.png' : '.jpg'
    let dstPath = `${dstDir}/${fn.replace(/\.(png|jpe?g)$/, dstExt)}`

    await sharp(srcPath)
        .resize({width:2800, withoutEnlargement:true})
        .toFormat(dstFormat)
        .toFile(dstPath)

    let oldSize = (await stat(srcPath)).size,
        newSize = (await stat(dstPath)).size
    console.log(`${dstPath}: ${Math.floor(newSize/oldSize * 100)}%`)
}
