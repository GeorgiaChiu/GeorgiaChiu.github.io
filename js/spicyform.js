const apiUrl = 'https://script.google.com/macros/s/AKfycbyEXg-ukmpFZcAUJQyV84DVM_SHhNf9N9rNnm_l3apyjPCfc45J/exec';

//the alert is collapsible yay
$(".alert").on("click", function() {
	$(this).hide("slow");
});

//apprearance

function stopimg(){

    document.getElementById('pic').classList.add('stopim');
    setTimeout(() => {
        document.getElementById('pic').classList.remove('showani')
    }, 500)
    document.getElementById("showtext").innerHTML = "太好了！請往下！";
}

function gogo(){

    document.getElementById('result').classList.add('');
}

var state = {
    number_confirmed: false,
}

document.getElementById('ready').innerHTML = "✘ 點上面圓圈，選擇版型";



var bigtypeBgMap = {
    "1": "#C1D7DF",
    "2": "#d3cdc4",
    "3": "#f0ece1",
    "4": "#95719F",
}

var typenameMap = {
    "1": "Type Ｖ",
    "2": "Type A",
    "3": "Halter Top 小肚兜",
    "4": "Custom Design 特殊訂製",
    // "5": "特殊降價",


}

var typenamedetailMap = {
    "1": {
        "1":"經典Ｖ字辣子",
        "2":"客製Ｖ字辣子",
        "3":"金屬材質混辣子",
    },
    "2":{ 
        "1":"經典A字辣子",
        "2":"圓圖騰Ａ字辣子",
        "3":"高領Ａ字辣子",

    },
    "3":{ 
        "1":"Ａ字小肚兜",
        "2":"Ｖ字小肚兜",
        "3":"肚兜辣子與飾品",

    },
    "4":{ 
        "1":"客製針織演出服裝",
        "2":"客製包包",
        "3":"客製飾品",

    }
}
var exampleImageUrlMap = {
    "1": {
        "1": "/resourse/classic /03-1-1.jpg",
        "2": "/resourse/classic /06-1-1.jpg",
        "3": "/resourse/classic /05-1-2.jpg",
        
        
    },
    "2": {
        "1": "/resourse/A-style/dou-pink01-1.jpg",
        "2": "/resourse/A-style/A02-1-1.jpg",
        "3": "/resourse/A-style/long01-2.jpg",
        
        
    },
    "3": {
        "1": "/resourse/halter-top/H01-1-1.jpg",
        "2": "/resourse/halter-top/H02-1-1.jpg",
        "3": "/resourse/halter-top/decwithlazi.jpg",
        
        
    },
    "4": {
        "1": "/resourse/lazi/custom-1.png",
        "2": "/resourse/lazi/custom-1.png",
        "3": "/resourse/lazi/custom-1.png",
    }
}

var colorMap= {
    "1": {
        "1": "以毛線或花線為主要材料，選用的是比較粗的毛線，會是比較蓬鬆舒服的感覺。",
        "2": "將依辣妹的描述，做材質的設計，有毛線/花線/棉線/麻線/絲質線等選擇。",
        "3": "以金屬釦環聯繫特殊的金屬色質感線材，適合大膽喜歡嘗試不一樣東西的妳。",
    },
    "2": {
        "1": "將依辣妹的描述，做材質的設計，有毛線/花線/棉線/麻線/絲質線等選擇。",
        "2": "將依辣妹的描述，做材質的設計，有毛線/花線/棉線/麻線/絲質線等選擇。",
        "3": "將依辣妹的描述，做材質的設計，有毛線/花線/棉線/麻線/絲質線等選擇。",
    },
    "3": {
        "1": "將依辣妹的描述，做材質的設計，有毛線/花線/棉線/麻線/絲質線等選擇。",
        "2": "將依辣妹的描述，做材質的設計，有毛線/花線/棉線/麻線/絲質線等選擇。",
        "3": "將依辣妹的描述，做材質的設計，有毛線/花線/棉線/麻線/絲質線等選擇，並加上一個飾品在辣子上。",
    },
    "4": {
        "1": "請先直接跳到【身形確認】的部分並完成以下填空，客製細節我會再與妳聯繫！",
        "2": "請先直接跳到【身形確認】的部分並完成以下填空，客製細節我會再與妳聯繫！" ,
        "3": "請先直接跳到【身形確認】的部分並完成以下填空，客製細節我會再與妳聯繫！",
    }
}
var priceMap= {
    "1": {
        "1": 1280,
        "2": 1880,
        "3": 1880,
    },
    "2": {
        "1": 2080,
        "2": 2280,
        "3": 2480,
    },
    "3": {
        "1": 2480,
        "2": 2480,
        "3": 2680,
    },
    "4": {
        "1": "::待討論::",
        "2": "::待討論::",
        "3": "::待討論::",
    }
}

// exampleImageUrlMap["1"]["2"]

function render() {
    var formData = new FormData(form);
    $("body").css("background", bigtypeBgMap[formData.get('bigtype')]);
    
    
    document.getElementById('types').innerHTML = typenameMap[formData.get('bigtype')];
    document.getElementById("pic").src = exampleImageUrlMap[formData.get('bigtype')][formData.get('number')];
    document.getElementById("howmany").innerHTML = colorMap[formData.get('bigtype')][formData.get('number')];
    if(state.type_confirmed){
        document.getElementById('types').innerHTML = typenameMap[formData.get('bigtype')];
    }
    else{
        document.getElementById('types').innerHTML = "請點上面圓圈，選擇版型";
    }

    if(state.number_confirmed){
        document.getElementById('pic').classList.remove('showani');
        document.getElementById('ready').innerHTML = "✔ 確認";
        document.getElementById("showtext").innerHTML = "太好了！請往下！";
    }
    else{
        document.getElementById('pic').classList.add('showani');
        document.getElementById('ready').innerHTML = "這是你要的辣子嗎？確認就按我！";
        document.getElementById("showtext").innerHTML = typenamedetailMap[formData.get('bigtype')][formData.get('number')];
        
        // "請選擇上面編號";
    }
    if(state.upup_confirmed){
        document.getElementById("showprice").innerHTML = priceMap [formData.get('bigtype')][formData.get('number')] + 180;
    }
    else{
        document.getElementById("showprice").innerHTML = priceMap [formData.get('bigtype')][formData.get('number')];
    }



   
}

//form

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('form');

        state.type_confirmed = false;
        render();
        $("input.variation").on("click", function() {
            state.type_confirmed = true;
            render();
        });
        $('.forcolor').on('click', function() {
            state.number_confirmed = false;
            state.upup_confirmed = false;
            render();
        })

        $('#readybtn').on("click", function(){
            state.number_confirmed = true;
            render();
        })

        $('#radio-10').on("click", function(){
           state.upup_confirmed = true;
           render();
        })

        form.addEventListener('submit', async e => {
            // prevent refresh page:
            e.preventDefault();

            
            // collect form data
            const formData = new FormData(form);
            // fix checkbox value to boolean
            form.querySelectorAll('input[type=checkbox]').forEach(
                input => formData.set(input.name, input.checked)
            );
            
            

            //可加效果
            if (!formData.get('bigtype') || !formData.get('name') ||!formData.get('phone') || !formData.get('number')||!formData.get('shape')) {
                document.getElementById('result').textContent = "好像還沒填完唷"

                return
            } else {
                document.getElementById('result').textContent = ""
            }
            
            if (!confirm("Ready to Get Spicy?")) {
                return
            }

            document.getElementById('submit').classList.add('rotating')

            // upload form (await!)
            const postReqest = await fetch(apiUrl, {
                method: 'POST',
                mode: 'cors',
                body: formData,
            })

            // decode response and log
            const response = await postReqest.json();
            console.log(postReqest, response);

            // after uploading complete effects:
            document.getElementById('submit').classList.remove('rotating')
            // if (formData.get('angry') === 'true') {
            //     document.getElementById('explosion').classList.add('doomed')
            //     setTimeout(() => {
            //         document.getElementById('explosion').classList.remove('doomed')
            //     }, 1000)
            // }

            document.getElementById('result').textContent = "感謝辣妹,請等待Email通知";
            
            return false;
        });
    });