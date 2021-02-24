//DOM操作
var send = document.querySelector('.sendBtn');
var list = document.querySelector('.list'); 
var data = JSON.parse(localStorage.getItem('myList')) || [];
updateList(data);


//送出事件監聽
send.addEventListener('click',saveTodoList);

//輸入代辦事項存入localStorage 
function saveTodoList(e){ 
    var str = document.querySelector('.textArea').value;//取值
    // alert(str);
    var todo = {
        content: str
    };
    data.push(todo);  //取值存入
    updateList(data);
    localStorage.setItem('myList',JSON.stringify(data)); //轉為字串存入localStorage     
};


// 將localStorage資料印出
function updateList(data) {
    var str = '';
    for(var i=0; i<data.length;i++) {
        // console.log(data[i].content);
        str += '<li><a href="#" data-index=' + i + '/>刪除</a><span>' + data[i].content + '<hr></span></li>';
    }
    list.innerHTML = str;
    
}


list.addEventListener('click',checkList);
//刪除代辦事項
function checkList(e){
    // console.log(e.target.nodeName); //確認所點擊的範圍
    e.preventDefault();
    if(e.target.nodeName !=='A'){return};
    var items = e.target.dataset.index;
    // console.log(items);
    data.splice(items,1);
    localStorage.setItem('myList',JSON.stringify(data));
    updateList(data);
}




