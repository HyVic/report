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
  console.log(url, sort);
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
    '[flank] flank size':string,
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
  type type7 = {
    sample: string;
    POS: string;
    ALT: string;
    num1: string;
    num2: string;
    num3: string;
    num4: string;
    num5: string;
    num6: string;
    num7: string;
    num8: string;
    num9: string;
    num10: string;
    num11: string;
    num12: string;
    num13: string;
    num14: string;
    num15: string;
    num16: string;
    num17: string;
    num18: string;
    num19: string;
    num20: string;
    num21: string;
    num22: string;
    num23: string;
    num24: string;
    num25: string;
    num26: string;
    num27: string;
    num28: string;
    num29: string;
    num30: string;
    num31: string;
    num32: string;
    num33: string;
    num34: string;
    num35: string;
    num36: string;
    num37: string;
    num38: string;
    num39: string;
    num40: string;
    num41: string;
    num42: string;
    num43: string;
    num44: string;
    num45: string;
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
  let sheetTableData7: type7[] = [];
  let sheetTableData8: type8[] = [];
  // let sheetTableData: tableData[] = []
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
  return sort === 1 ? sheetTableData1 : sort === 2 ? sheetTableData2 : sort === 4? sheetTableData4 :  sort === 5? sheetTableData5 : sort === 8? sheetTableData8 : [];
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
    '[flank] flank size':string,
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
    '[flank] flank size':item[6],
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
export function chromSheet7(
  sheetTableData: {
    sample: string;
    POS: string;
    ALT: string;
    num1: string;
    num2: string;
    num3: string;
    num4: string;
    num5: string;
    num6: string;
    num7: string;
    num8: string;
    num9: string;
    num10: string;
    num11: string;
    num12: string;
    num13: string;
    num14: string;
    num15: string;
    num16: string;
    num17: string;
    num18: string;
    num19: string;
    num20: string;
    num21: string;
    num22: string;
    num23: string;
    num24: string;
    num25: string;
    num26: string;
    num27: string;
    num28: string;
    num29: string;
    num30: string;
    num31: string;
    num32: string;
    num33: string;
    num34: string;
    num35: string;
    num36: string;
    num37: string;
    num38: string;
    num39: string;
    num40: string;
    num41: string;
    num42: string;
    num43: string;
    num44: string;
    num45: string;
  }[],
  item: { [key: string]: any }
) {
  sheetTableData.push({
    sample: item[0],
    POS: item[1],
    ALT: item[2],
    num1: item[3],
    num2: item[4],
    num3: item[5],
    num4: item[6],
    num5: item[7],
    num6: item[8],
    num7: item[9],
    num8: item[10],
    num9: item[11],
    num10: item[12],
    num11: item[13],
    num12: item[14],
    num13: item[15],
    num14: item[16],
    num15: item[17],
    num16: item[18],
    num17: item[19],
    num18: item[20],
    num19: item[21],
    num20: item[22],
    num21: item[23],
    num22: item[24],
    num23: item[25],
    num24: item[26],
    num25: item[27],
    num26: item[28],
    num27: item[29],
    num28: item[30],
    num29: item[31],
    num30: item[32],
    num31: item[33],    
    num32: item[34],
    num33: item[35],
    num34: item[36],
    num35: item[37],
    num36: item[38],
    num37: item[39],
    num38: item[40],
    num39: item[41],
    num40: item[42],
    num41: item[43],
    num42: item[44],
    num43: item[45],
    num44: item[46],
    num45: item[47]
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