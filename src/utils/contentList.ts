export const contentList = [
  {
    name: "项目概况",
    icon: "icon-shouye",
    route: "CarouselPage",
    label: "index-page",
    order: 0,
  },
  {
    name: "流程说明",
    icon: "icon-shuzihuajishufuwu",
    route: "ServiceIntroduce",
    label: "technical-service",
    order: 1,
    children: [
      {
        order: 0,
        icon: "icon-jishufuwu",
        name: "技术服务介绍",
        route: "ServiceIntroduce",
        label: "service-introduce",
      },
      {
        order: 1,
        icon: "icon-jishufuwu",
        name: "捕获测序",
        route: "CaptureSequencing",
        label: "capture-sequencing",
      },
      {
        order: 2,
        icon: "icon-jishufuwu",
        name: "重测序",
        route: "ResequencingPage",
        label: "resequencing-page",
      },
      {
        order: 3,
        icon: "icon-jishufuwu",
        name: "转录组测序",
        route: "TranscriptomeSequencing",
        label: "transcriptome-sequencing",
      },
      {
        order: 4,
        icon: "icon-jishufuwu",
        name: "数据服务",
        route: "DataService",
        label: "data-service",
      },
    ],
  },
  {
    name: "产品中心",
    icon: "icon-chanpinzhongxin1",
    route: "ProductSort",
    label: "product-center",
    order: 3,
    children: [
      {
        order: 0,
        icon: "icon-jishufuwu",
        name: "类别管理",
        route: "ProductSort",
        label: "product-sort",
      },
/*       {
        order: 1,
        icon: "icon-jishufuwu",
        name: "信息管理",
        route: "ProductInfo",
        label: "product-info",
      } */
    ],
  },
  {
    name: "客户解答",
    icon: "icon-jishufuwushang2",
    route: "AnimalRequirements",
    label: "customer-answer",
    order: 4,
    children: [
      {
        order: 0,
        icon: "icon-hangyexinwen",
        name: "动物送样要求",
        route: "AnimalRequirements",
        label: "animal-requirements",
      },
      {
        order: 1,
        icon: "icon-hangyexinwen",
        name: "作物送样要求",
        id: "overview",
        route: "ServicePage",
        label: "service-page",
      },
    ],
  },
  {
    name: "关于我们",
    icon: "icon-wode-guanyuwomen",
    path: "/fingerprint",
    label: "fingerprint",
    order: 5,
    children: [],
  },
  {
    name: "其他管理",
    icon: "icon-qitaguanli",
    path: "/fingerprint",
    label: "fingerprint",
    order: 6,
    children: [],
  },
];
export const cooperationList = [
  {
    image: "../src/assets/cooperation/1.jpg",
    title: "中科院遗传与发育研究所",
    en: "Institute of Genetics and Developmental Biology, Chinese Academy of Sciences",
  },
  {
    image: "../src/assets/cooperation/2.png",
    title: "中国农业大学",
    en: "China Agricultural University",
  },
  {
    image: "../src/assets/cooperation/3.png",
    title: "扬州大学",
    en: "Yangzhou University",
  },
  {
    image: "../src/assets/cooperation/4.jpg",
    title: "西北农林科技大学",
    en: "Northwest A&F University",
  },
  {
    image: "../src/assets/cooperation/5.jpg",
    title: "四川农业大学",
    en: "Sichuan Agricultural University",
  },
  {
    image: "../src/assets/cooperation/6.jpg",
    title: "四川大学",
    en: "Sichuan University",
  },
  {
    image: "../src/assets/cooperation/7.jpg",
    title: "山西农业大学 ",
    en: "Shanxi Agricultural University",
  },
  {
    image: "../src/assets/cooperation/8.jpg",
    title: "江苏省农科院",
    en: "Jiangsu Academy of Agricultural Sciences",
  },
  {
    image: "../src/assets/cooperation/9.jpg",
    title: "河南农业大学",
    en: "Henan Agricultural University",
  },
  {
    image: "../src/assets/cooperation/10.jpg",
    title: "河南科技大学",
    en: "Henan University of Science and Technology",
  },
  {
    image: "../src/assets/cooperation/11.jpg",
    title: "河南大学",
    en: "Henan University",
  },
  {
    image: "../src/assets/cooperation/12.jpg",
    title: "河北农业大学",
    en: "Hebei Agricultural University",
  },
  {
    image: "../src/assets/cooperation/13.jpg",
    title: "北京大学",
    en: "Peking University",
  },
  {
    image: "../src/assets/cooperation/14.jpg",
    title: "中国农业科学院",
    en: "Chinese Academy of Agricultural Sciences",
  },
];