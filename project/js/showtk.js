var start = document.getElementById('start');
var end = document.getElementById('end');
var deparure = document.getElementById('deparure')
var back = document.getElementById('back')
var form_submit1 = document.getElementById('form_submit1');
var e_tk = document.getElementById('e_tk');


form_submit1.addEventListener('click', function () {
    e_tk.innerHTML = 
        `<div class="e_tk_area">
<br>        
<h3>旅客電子機票 ELECTRONIC TICKET</h3>
<hr>
<p>** 請於飛機起飛前72小時向航空公司再確認 ** </p>
<p>** 請於飛機起飛前 2小時至機場櫃台報到 **</p>
<hr>
<p>行      程</p>
<p>出發地: ${start.value} - 目的地: ${end.value}  日期: ${deparure.value}  時間: 07:00~ 10:00 </p>
<p>出發地: ${end.value} - 目的地: ${start.value}  日期: ${back.value}  時間: 18:00~ 21:00 </p>
<hr>

<p>航空公司確認電話: Awesome 航空 +8864-23265860</p>
<p>注意事項:</p>
<ul>
    <li>1.請備妥旅遊所需文件. </li>                        
    <li>2.航班實際狀況仍以航空公司訂位記錄為準.</li>                        
    <li>3.祝您旅遊愉快! 事事順利!!</li>                        

</ul>
</div><hr>` ;
    start.value = ''; end.value = ''; deparure.value = ''; back.value = '';

});





var btn = document.querySelector("#form_submit1");
var tk = document.querySelector("#tk");
var x = document.querySelector("#close");
btn.addEventListener("click", function () {
    tk.showModal();
})

x.addEventListener("click", function () {
    console.log("ok");
    // tk.close();
})


