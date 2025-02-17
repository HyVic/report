import * as XLSX from "xlsx";
//将行,列转换
function transformSheets(sheets: { [key: string]: any }): any[] {
  var content: any[][] = [];
  var content1: any[][] = [];
  var tmplist = [];
  for (let key in sheets) {
    //读出来的workbook数据很难读,转换为json格式,参考https://github.com/SheetJS/js-xlsx#utility-functions
    tmplist.push(XLSX.utils.sheet_to_json(sheets[key]).length);
    content1.push(XLSX.utils.sheet_to_json(sheets[key]));
  }
  var maxLength = Math.max.apply(Math, tmplist);
  //进行行列转换
  for (let y in [...Array(maxLength)]) {
    content.push([]);
    for (let x in [...Array(tmplist.length)]) {
      try {
        for (let z in content1[x][y] as { [key: string]: any }) {
          content[y].push(content1[x][y][z]);
        }
      } catch (error) {
        content[y].push("");
      }
    }
  }
  content.unshift([]);
  for (let key in sheets) {
    content[0].push(key);
  }
  return content;
}
import axios from "axios";
export function commonSheet(url: string, sort: any) {
  type type1 = {
    Sample: string;
    'Raw reads': string;
    'Raw bases': string;
    'Q30(%)': string;
    'GC(%)': string;
    'Duplication(%)': string;

  }
  type type2 = {
    Sample: string;
    'Clean reads': string,
    'Clean bases': string,
    'Clean reads(%)': string,
    'Clean bases(%)': string
  }
  type type4 = {
    Sample: string;
    '[Total] Fraction of Mapped Reads': string,
    '[Target] Average depth': string,
    '[Target] Fraction Region covered >= 4x': string,
    '[Target] Fraction Region covered >= 10x': string,
    '[Target] Fraction Region covered >= 30x': string,
    '[flank] flank size': string,
    '[flank] Average depth': string
  }
  type type5 = {
    Sample: string;
    nRefHom: string;
    nNonRefHom: string;
    nHets: string;
    nMissing: string;
    nSingletons: string;
    nTransitions: string;
    nTransversions: string;
  }
  type type6 = {
    Type: string;
    Downstream: string,
    Exon: string,
    Intergenic: string,
    Intron: string,
    'Splice Site Acceptor': string,
    'Splice Site Donor': string,
    'Splice Site Region': string,
    Transcript: string,
    Upstream: string,
    'UTR 3 Prime': string,
  }
  type type7 = {
    CHROM: string,
    POS: string,
    ALT: string,
    '16-119': string,
    '16-120': string,
    '16-122': string,
    '16-146': string,
    '16-161': string,
    '16-176': string,
    '16-182': string,
    '16-183': string,
    '16-200': string,
    '16-201': string
  }
  type type8 = {
    Sample: string;
    nRefHom: string;
    nInsHets: string;
    nDelHets: string;
    nInsAltHoms: string;
    nDelAltHoms: string;
    nMissing: string;
    nSingletons: string;
  }
  let sheetTableData1: type1[] = [];
  let sheetTableData2: type2[] = [];
  let sheetTableData4: type4[] = [];
  let sheetTableData5: type5[] = [];
  let sheetTableData6: type6[] = [];
  let sheetTableData8: type8[] = [];
  let sheetTableData7: type7[] = [];
  let sheetData: any[][] = [];
  // let url = "/chrom.xlsx" //放在public目录下的文件可以直接访问
  //读取二进制excel文件
  axios
    .get(url, { responseType: "arraybuffer" })
    .then((res) => {
      let data = new Uint8Array(res.data);
      let wb = XLSX.read(data, { type: "array" });
      let sheets = wb.Sheets;
      sheetData = transformSheets(sheets).slice(1,);
      sheetData.forEach((item) => {
        if (sort === 1) {
          chromSheet1(sheetTableData1, item);
        } else if (sort === 2) {
          chromSheet2(sheetTableData2, item);
        } else if (sort === 4) {
          chromSheet4(sheetTableData4, item);
        } else if (sort === 5) {
          chromSheet5(sheetTableData5, item);
        } else if (sort === 6) {
          chromSheet6(sheetTableData6, item);
        } else if (sort === 7) {
          chromSheet7(sheetTableData7, item);
        } else if (sort === 8) {
          chromSheet8(sheetTableData8, item);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return sort === 1 ? sheetTableData1 : sort === 2 ? sheetTableData2 : sort === 4 ? sheetTableData4 : sort === 5 ? sheetTableData5 : sort === 6 ? sheetTableData6 : sort === 7 ? sheetTableData7 : sort === 8 ? sheetTableData8 : [];
}

export function chromSheet1(
  sheetTableData: {
    Sample: any;
    'Raw reads': string;
    'Raw bases': string;
    'Q30(%)': string;
    'GC(%)': string;
    'Duplication(%)': string;
  }[],
  item: { [key: string]: any }
) {
  sheetTableData.push({
    Sample: item[0],
    'Raw reads': item[1],
    'Raw bases': item[2],
    'Q30(%)': item[3],
    'GC(%)': item[4],
    'Duplication(%)': item[5],
  });
  return sheetTableData;
}
export function chromSheet2(
  sheetTableData: {
    Sample: string;
    'Clean reads': string,
    'Clean bases': string,
    'Clean reads(%)': string,
    'Clean bases(%)': string
  }[],
  item: { [key: string]: any }
) {
  sheetTableData.push({
    Sample: item[0],
    'Clean reads': item[1],
    'Clean bases': item[2],
    'Clean reads(%)': item[3],
    'Clean bases(%)': item[4]
  });
  return sheetTableData;
}
export function chromSheet4(
  sheetTableData: {
    Sample: string,
    '[Total] Fraction of Mapped Reads': string,
    '[Target] Average depth': string,
    '[Target] Fraction Region covered >= 4x': string,
    '[Target] Fraction Region covered >= 10x': string,
    '[Target] Fraction Region covered >= 30x': string,
    '[flank] flank size': string,
    '[flank] Average depth': string
  }[],
  item: { [key: string]: any }
) {
  sheetTableData.push({
    Sample: item[0],
    '[Total] Fraction of Mapped Reads': item[1],
    '[Target] Average depth': item[2],
    '[Target] Fraction Region covered >= 4x': item[3],
    '[Target] Fraction Region covered >= 10x': item[4],
    '[Target] Fraction Region covered >= 30x': item[5],
    '[flank] flank size': item[6],
    '[flank] Average depth': item[7]
  });
  return sheetTableData;
}
export function chromSheet5(
  sheetTableData: {
    Sample: string;
    nRefHom: string;
    nNonRefHom: string;
    nHets: string;
    nMissing: string;
    nSingletons: string;
    nTransitions: string;
    nTransversions: string;
  }[],
  item: { [key: string]: any }
) {
  sheetTableData.push({
    Sample: item[0],
    nRefHom: item[1],
    nNonRefHom: item[2],
    nHets: item[3],
    nMissing: item[4],
    nSingletons: item[5],
    nTransitions: item[6],
    nTransversions: item[7],
  });
  return sheetTableData;
}
export function chromSheet6(
  sheetTableData: {
    Type: string;
    Downstream: string,
    Exon: string,
    Intergenic: string,
    Intron: string,
    'Splice Site Acceptor': string,
    'Splice Site Donor': string,
    'Splice Site Region': string,
    Transcript: string,
    Upstream: string,
    'UTR 3 Prime': string,
  }[],
  item: { [key: string]: any }
) {
  sheetTableData.push({
    Type: item[0],
    Downstream: item[1],
    Exon: item[2],
    Intergenic: item[3],
    Intron: item[4],
    'Splice Site Acceptor': item[5],
    'Splice Site Donor': item[6],
    'Splice Site Region': item[7],
    Transcript: item[8],
    Upstream: item[9],
    'UTR 3 Prime': item[10]
  });
  return sheetTableData;
}
export function chromSheet7(
  sheetTableData: {
    CHROM: string;
    POS: string;
    ALT: string;
    '16-119': string,
    '16-120': string,
    '16-122': string,
    '16-146': string,
    '16-161': string,
    '16-176': string,
    '16-182': string,
    '16-183': string,
    '16-200': string,
    '16-201': string
  }[],
  item: { [key: string]: any }
) {
  sheetTableData.push({
    CHROM: item[0],
    POS: item[1],
    ALT: item[2],
    '16-119': item[3],
    '16-120': item[4],
    '16-122': item[5],
    '16-146': item[6],
    '16-161': item[7],
    '16-176': item[8],
    '16-182': item[9],
    '16-183': item[10],
    '16-200': item[11],
    '16-201': item[12]
  });
  return sheetTableData;
}
export function chromSheet8(
  sheetTableData: {
    Sample: string;
    nRefHom: string;
    nInsHets: string;
    nDelHets: string;
    nInsAltHoms: string;
    nDelAltHoms: string;
    nMissing: string;
    nSingletons: string;
  }[],
  item: { [key: string]: any }
) {
  sheetTableData.push({
    Sample: item[0],
    nRefHom: item[1],
    nInsHets: item[2],
    nDelHets: item[3],
    nInsAltHoms: item[4],
    nDelAltHoms: item[5],
    nMissing: item[6],
    nSingletons: item[7],
  });
  return sheetTableData;
}
export { transformSheets };
// export {transformSheets as default}

//其他文件读取
/* import { commonSheet } from "../../utils/read_xlsx";
let arr = commonSheet("/chrom.xlsx");
  setTimeout(async () => {
    sheetTableData.value = arr;
    console.log(12, sheetTableData.value);
  }, 1000); */