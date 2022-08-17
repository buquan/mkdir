#! /usr/bin/env node
const fs = require("fs");
const path = require("path");
// test
// 获取配置
function getOpt() {
    const mkUrl = path.resolve(process.cwd(), 'mk');
    const dataUrl = path.resolve(process.cwd(), 'mk', 'data.js');
    const templateUrl = path.resolve(process.cwd(), 'mk', 'template.js');
    if (
        !fs.existsSync(mkUrl)
        || !fs.existsSync(dataUrl)
        || !fs.existsSync(templateUrl)
    ) {
        throw new Error('path needs to exist');
    }
    let profileData = require(dataUrl);
    let template = require(templateUrl);
    return {
        profileData,
        template
    };
}

// 解析参数
function parseParam(arr) {
    return arr.reduce((acc, cur) => {
        const k = cur.split('=')[0];
        const v = cur.split('=')[1];
        acc[k] = v;
        return acc;
    }, {});
}

// 递归创建目录
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            console.log('\x1B[36m%s\x1B[0m', `目录创建成功 -> ${dirname}`);
            return true;
        }
    }
}

// 生成根路径
function initRoot() {
    const params = parseParam(process.argv.slice(2));
    const root = params.root || '';
    const rootPath = `${path.resolve(process.cwd(), root)}`;
    mkdirsSync(rootPath);
    return rootPath;
}

//遍历配置文件并调用创建目录方法
function gen(item = {}, preRoot) {
    const itemFolder = item.folder;
    if (!itemFolder) {
        return;
    }
    preRoot = `${preRoot}/${itemFolder}`;
    fs.mkdirSync(preRoot);
    const itemFile = item.file;
    if (itemFile && !!itemFile.length) {
        itemFile.forEach(file => {
            fs.writeFile(`${preRoot}/${file.name}`, template.page(file), function (err) {
                if (err) {
                    return console.log('\x1B[31m%s\x1B[0m', '文件创建失败', err);
                }
                console.log('\x1B[36m%s\x1B[0m', `文件创建成功 -> ${preRoot}/${file.name}`);
            });
        });
    }
    if (item.next) {
        gen(item.next, preRoot);
    }
};

const {
    profileData,
    template
} = getOpt();
const rootPath = initRoot();
profileData.data.forEach((item) => {
    gen(item, rootPath);
});