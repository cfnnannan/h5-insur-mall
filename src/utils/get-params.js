
const getParams = {
    getURLParams(fullURL) {
        let urlParams = new Object();
        if (fullURL != undefined && fullURL.indexOf("?") != -1) {
            let strArr = fullURL.split('?');
            let str = strArr[strArr.length - 1]
            let strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                urlParams[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
            }
        }
        return urlParams;
    }
}
export default getParams;