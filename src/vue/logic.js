let pages = {};

function postInfo(pageId,event, data){
  postMessage({
    event,
    data,
    pageId
  })
}

onmessage = function(e={}){
  const {event, data, pageId} = e.data;

  if(event === 'click'){
    const page = pages[pageId];
    // 修改data值
    page.options.onClick.call(page, data);
  }
}

function Page(options){
  return new RunTime(options)
}


class RunTime{
  constructor (options){
    this.id = 'uuid_' + Date.now();
    this.options = options;
    this.data = options.data || {};
    pages[this.id] = this;

    if(options.onLoad){
      options.onLoad.call(this);
    }

    postInfo(this.id, 'initRender', this.data || {} )
  }
  // todo
  setData(newData){
    Object.assign(this.data, newData)
    postInfo(this.id, 'render', this.data);
  }
}


// 开发者编写的代码
Page({
  data:{
    text: 'hello ui',
  },
  onLoad(){
    console.log('')
  },

  onShow(){

  },
  onHide(){

  },
  onUnload(){

  },
  onClick(e){
    this.setData({
      text: '新文案'
    })
  }
})