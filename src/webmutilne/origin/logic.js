

class Page{
    constructor(options) {
        this.id = 'uid_' + Date.now();
        let {data, onShow, onHide, onUnload} = options;
        this.data = data || {};

        postMessage({
            event: 'firstRender',
            data: data || {},
        })
    }

    setData(data){
        let newData = Object.assign(this.data ,data);

        postMessage({
            event: 'setData',
            data: newData,
            pageId: this.id,
        })
    }
}

let page1 = new Page({
    show(){
        console.log('logic show')
    }
})
