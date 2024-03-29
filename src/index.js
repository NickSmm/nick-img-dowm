function imgDownFun(fileName, content, url) {
    let aLink = document.createElement('a');
    let file = content ? URL.createObjectURL(base64ToBlob(content)) : url;

    let evt = document.createEvent('HTMLEvents');
    evt.initEvent('click', true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
    aLink.download = fileName;
    aLink.href = file;
    aLink.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window })); //兼容火狐
}
//base64转blob
function base64ToBlob(code) {
    let parts = code.split(';base64,');
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
}

export default imgDownFun
