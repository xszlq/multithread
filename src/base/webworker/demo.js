var i=0;

function timedCount()
{
    i=i+1;
    postMessage({count: i});
}

setTimeout(timedCount, 500)


onmessage = function (oEvent) {
    console.log(oEvent);
    postMessage(oEvent.data);
};
