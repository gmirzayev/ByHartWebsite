import fs from "fs/promises";
import path from "path";
import Papa from "papaparse";

const CSV_FILE = "./alt-text-assets.csv";

async function readCSV(filePath) {
  let rows = Papa.parse(await fs.readFile(filePath, "utf-8"), {
    header: true,
  });
  return rows.data;
}

async function updateJSFiles(data) {
  for (const { page, asset, pathname, alt } of data) {
    const filePath = path.resolve("../../", page);
    try {
      let content = await fs.readFile(filePath, "utf8");

      const imgRegex = new RegExp(
        `(<Image[^>]*src=\{${asset}\}).*?(alt=".*?")(.*?>)$`,
        "mis"
      );

      const updatedContent = content.replace(
        imgRegex,
        (match, before, altAttr, after) => {
          if (altAttr) {
            return `${before}alt="${alt}"${after}`;
          } else {
            return `${before} alt="${alt}"${after}`;
          }
        }
      );

      if (content !== updatedContent) {
        await fs.writeFile(filePath, updatedContent, "utf8");
        console.log(`Updated ${page}`);
      } else {
        console.log(`No changes made to ${page}`);
      }
    } catch (err) {
      console.error(`Error processing ${page}:`, err.message);
    }
  }
}

(async function () {
  try {
    const csvData = await readCSV(CSV_FILE);
    await updateJSFiles(csvData);
  } catch (err) {
    console.error("Error:", err);
  }
})();
