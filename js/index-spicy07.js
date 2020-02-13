const apiUrl = 'https://script.google.com/macros/s/AKfycbyEXg-ukmpFZcAUJQyV84DVM_SHhNf9N9rNnm_l3apyjPCfc45J/exec';

//the alert is collapsible yay
$(".alert").on("click", function() {
	$(this).hide("slow");
});

//apprearance

var onsale ="特殊降價";
var typeA = "A 經典辣";
var typeB = "B 特別辣";
var typeC = "C 肚兜辣";
var typeD = "D 其他";

var Acolor ={ normalcoA1:"2", 
               specialcoA1:"0",
               priceA1:980,
               picA1:"/resourse/classic /basic01.jpg",
               nameA1:"毛線經典辣",
               normalcoA2:"1", 
               specialcoA2:"1",
               picA2:"/resourse/bluee.jpg",
               priceA2:1180,
               nameA2:"花線經典辣",
               normalcoA3:"2", 
               specialcoA3:"0",
               picA3:"/resourse/bluee.jpg",
               priceA3:"Not Supply",
               nameA3:"2019經典",
               normalcoA4:"2", 
               specialcoA4:"0",
               picA4:"/resourse/bluee.jpg",
               priceA4:1080,
               nameA4:"2020經典",
               normalcoA5:"2", 
               specialcoA5:"0",
               picA5:"/resourse/bluee.jpg",
               priceA5:1080,
               nameA5:"安全辣",
               };
               
var Bcolor ={ normalcoB1:"2", 
               specialcoB1:"0",
               picB1:"/resourse/bluee.jpg",
               priceB1:1860,
               nameB1:"雙色辣子",
               normalcoB2:"2", 
               specialcoB2:"0",
               picB2:"/resourse/bluee.jpg",
               priceB2:1860,
               nameB1:"雙色辣子",
               normalcoB3:"2", 
               specialcoB3:"0",
               picB3:"/resourse/bluee.jpg",
               priceB3:2060,
               nameB3:"高領辣子",
               normalcoB4:"2", 
               specialcoB4:"1",
               picB4:"/resourse/bluee.jpg",
               priceB4:2260,
               nameB1:"高領花線辣子"
            };
var Ccolor ={ normalcoC1:"2", 
               specialcoC1:"0",
               picC1:"/resourse/bluee.jpg",
               priceC1:"Not Supply",
               nameC1:"2019小肚兜",
               normalcoC2:"2", 
               specialcoC2:"1",
               picC2:"/resourse/bluee.jpg",
               priceC2:2460,
               nameC2:"2020小肚兜",
               normalcoC3:"2", 
               specialcoC3:"0",
               picC3:"/resourse/bluee.jpg",
               priceC3:2680,
               nameC3:"雙色小肚兜",
               normalcoC4:"5", 
               specialcoC4:"2",
               picC4:"/resourse/bluee.jpg",
               priceC4:2680,
               nameC4:"線條小肚兜",
               normalcoC5:"5", 
               specialcoC5:"2",
               picC5:"/resourse/bluee.jpg",
               priceC5:2880,
               nameC5:"漸層小肚兜",
               normalcoC6:"5", 
               specialcoC6:"2",
               picC6:"/resourse/bluee.jpg",
               priceC6:"Not Supply",
               nameC6:"毛線小肚兜"};
var Dcolor ={ nameD1:"辣耳環",
              picD1:"/resourse/bluee.jpg",
              priceD1:"180/一附",
              nameD2:"辣髮帶",
              normalcoD2:"4", 
              specialcoD2:"1",
              picD2:"/resourse/bluee.jpg",
              priceD2:600
            };

var Ecolor ={ normalcoE1:"2", 
               specialcoE1:"0",
               picE1:"/resourse/bluee.jpg",
               priceE1:1860,
               nameE1:"雙色辣子",
               normalcoE2:"2", 
               specialcoE2:"0",
               picE2:"/resourse/bluee.jpg",
               priceE2:1860,
               nameE1:"雙色辣子",
               normalcoE3:"2", 
               specialcoE3:"0",
               picE3:"/resourse/bluee.jpg",
               priceE3:2060,
               nameE3:"高領辣子",
               normalcoE4:"2", 
               specialcoE4:"1",
               picE4:"/resourse/bluee.jpg",
               priceE4:2260,
               nameE1:"高領花線辣子"
            };

var no = "/resourse/car.jpg";

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



document.getElementById('ready').innerHTML = "✘ 點上面圓圈，選擇版型";

$("input.variation").on("click", function() {
    
    
    if ($(this).val() == 1) {

        $("body").css("background", "#C1D7DF");
		$("footer").attr('class','bluepurple');
        
       document.getElementById('types').innerHTML = typeA;
       document.getElementById('ready').innerHTML = "✘請選編號";
       document.getElementById('raa1').style.color='rgba(0,0,0)';
       document.getElementById('raa2').style.color='rgba(0,0,0)';
       document.getElementById('raa3').style.color='rgba(0,0,0)';
       document.getElementById('raa4').style.color='rgba(0,0,0)';
       document.getElementById('raa5').style.color='rgba(0,0,0)';
       document.getElementById('raa6').style.color='rgba(180, 175, 175, 0.616)';

       $("#radio-1").on("click", function(){
            document.getElementById("pic").src = Acolor.picA1;
            document.getElementById('pic').classList.add('showani');
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Acolor.priceA1;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Acolor.normalcoA1 + "個純色 及" + Acolor.specialcoA1 + "個花線";
            $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Acolor.priceA1 + 120 ;
            })
            $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Acolor.priceA1;
            })
            
           
        })
        $("#radio-2").on("click", function(){
            document.getElementById("pic").src = Acolor.picA2;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Acolor.normalcoA2 + "個純色 及" + Acolor.specialcoA2 + "個花線";
            document.getElementById("showprice").innerHTML = Acolor.priceA2;
               $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Acolor.priceA2 + 120 ;
                })
               $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Acolor.priceA2;
                })         
        }) 
        $("#radio-3").on("click", function(){
            document.getElementById("pic").src = Acolor.picA3;
            document.getElementById("showtext").innerHTML = "項目不再提供囉"; 
            document.getElementById("howmany").innerHTML = "請選其他品項";
            document.getElementById("showprice").innerHTML = "項目不存在";
        })
        $("#radio-4").on("click", function(){
            document.getElementById("pic").src = Acolor.picA4;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Acolor.priceA4;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Acolor.normalcoA4 + "個純色 及" + Acolor.specialcoA4 + "個花線";
                $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Acolor.priceA4 + 120 ;
                })
                $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Acolor.priceA4;
                })
           
        })
        $("#radio-5").on("click", function(){
            document.getElementById("pic").src = Acolor.picA5;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Acolor.priceA5;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Acolor.normalcoA4 + "個純色 及" + Acolor.specialcoA4 + "個花線";
                $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Acolor.priceA5 + 120 ;
                })
                $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Acolor.priceA5;
                })
           
        })
        $("#radio-6").on("click", function(){
            document.getElementById("pic").src = no;
            document.getElementById("showtext").innerHTML = "項目不存在唷"; 
            document.getElementById("howmany").innerHTML = "請選其他品項";
            document.getElementById("showprice").innerHTML = "項目不存在";
        })
       
  
		
    } 

    else if ($(this).val() == 2) {
       
        $("body").css("background", "#d3cdc4");
		$("footer").attr('class','sunset');

        document.getElementById("types").innerHTML = typeB;
        document.getElementById('ready').innerHTML = "✘請選擇編號";
        document.getElementById('raa1').style.color='rgba(0,0,0)';
        document.getElementById('raa2').style.color='rgba(0,0,0)';
        document.getElementById('raa3').style.color='rgba(0,0,0)';
        document.getElementById('raa4').style.color='rgba(0,0,0)';
        document.getElementById('raa5').style.color='rgba(180, 175, 175, 0.616)';
        document.getElementById('raa6').style.color='rgba(180, 175, 175, 0.616)';
        
         
        $("#radio-1").on("click", function(){
            document.getElementById("pic").src = Bcolor.picB1;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            ocument.getElementById("showprice").innerHTML = Bcolor.priceB1;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Bcolor.normalcoB1 + "個純色 及" + Bcolor.specialcoB1 + "個花線";
            $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Bcolor.priceB1 + 120 ;
            })
            $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Bcolor.priceB1;
            })
           
        })
        $("#radio-2").on("click", function(){
            document.getElementById("pic").src = Bcolor.picB2;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Bcolor.priceB2;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Bcolor.normalcoB2 + "個純色 及" + Bcolor.specialcoB2 + "個花線";
            $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Bcolor.priceB2 + 120 ;
            })
            $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Bcolor.priceB2;
            })
           
        }) 
        $("#radio-3").on("click", function(){
            document.getElementById("pic").src = Bcolor.picB3;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Bcolor.priceB3;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Bcolor.normalcoB3 + "個純色 及" + Bcolor.specialcoB3 + "個花線";
            $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Bcolor.priceB3 + 120 ;
            })
            $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Bcolor.priceB3;
            })
           
        })
        $("#radio-4").on("click", function(){
            document.getElementById("pic").src = Bcolor.picB4;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Bcolor.priceB4;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Bcolor.normalcoB4 + "個純色 及" + Bcolor.specialcoB4 + "個花線";
            $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Bcolor.priceB4 + 120 ;
            })
            $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Bcolor.priceB4;
            })
        })
        $("#radio-5").on("click", function(){
            document.getElementById("pic").src =no;
            document.getElementById("showtext").innerHTML = "項目不存在唷"; 
            document.getElementById("howmany").innerHTML = "請選其他品項";
            document.getElementById("showprice").innerHTML = "項目不存在";
      
        })
        $("#radio-6").on("click", function(){
            document.getElementById("pic").src =no;
            document.getElementById("showtext").innerHTML = "項目不存在唷"; 
            document.getElementById("howmany").innerHTML = "請選其他品項";
            document.getElementById("showprice").innerHTML = "項目不存在";
        })
       
        
		
    } 
    else if ($(this).val() == 3) {

        $("body").css("background", "#f0ece1");
		$("footer").attr('class','godiva');
       
        document.getElementById("types").innerHTML = typeC;
        document.getElementById('ready').innerHTML = "✘請選擇編號";
        document.getElementById('raa1').style.color='rgba(0,0,0)';
        document.getElementById('raa2').style.color='rgba(0,0,0)';
        document.getElementById('raa3').style.color='rgba(0,0,0)';
        document.getElementById('raa4').style.color='rgba(0,0,0)';
        document.getElementById('raa5').style.color='rgba(0,0,0)';
        document.getElementById('raa6').style.color='rgba(0,0,0)';
        
        $("#radio-1").on("click", function(){
            document.getElementById("pic").src = Ccolor.picC1;
            document.getElementById("showtext").innerHTML = "項目不再提供囉"; 
            document.getElementById("howmany").innerHTML = "請選其他品項";
            document.getElementById("showprice").innerHTML = "項目不存在";
           
        })
        $("#radio-2").on("click", function(){
            document.getElementById("pic").src = Ccolor.picC2;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Ccolor.priceC2;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Ccolor.normalcoC2 + "個純色 及" + Ccolor.specialcoC2 + "個花線";
            $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Ccolor.priceC2 + 120 ;
            })
            $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Ccolor.priceC2;
            })
           
        }) 
        $("#radio-3").on("click", function(){
            document.getElementById("pic").src = Ccolor.picC3;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Ccolor.priceC3;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Ccolor.normalcoC3 + "個純色 及" + Ccolor.specialcoC3 + "個花線";
            $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Ccolor.priceC3 + 120 ;
            })
            $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Ccolor.priceC3;
            })
           
        })
        $("#radio-4").on("click", function(){
            document.getElementById("pic").src = Ccolor.picC4;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Ccolor.priceC4;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Ccolor.normalcoC4 + "個純色 及" + Ccolor.specialcoC4 + "個花線";
            $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Ccolor.priceC4 + 120 ;
            })
            $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Ccolor.priceC4;
            })
           
        })
        $("#radio-5").on("click", function(){
            document.getElementById("pic").src = Ccolor.picC5;
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Ccolor.priceC5;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Ccolor.normalcoC5 + "個純色 及" + Ccolor.specialcoC5 + "個花線";
            $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Ccolor.priceC5 + 120 ;
            })
            $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Ccolor.priceC5;
            })
           
        })
        $("#radio-6").on("click", function(){
            document.getElementById("pic").src = Ccolor.picC6;
            document.getElementById("showtext").innerHTML = "項目不再提供囉"; 
            document.getElementById("howmany").innerHTML = "請選其他品項";
            document.getElementById("showprice").innerHTML = "項目不存在";
           
        })
        
		
    } 
    else if ($(this).val() == 4) {
        
        $("body").css("background", "#95719F");
		$("footer").attr('class','dark');
      
        document.getElementById("types").innerHTML = typeD;
        document.getElementById('ready').innerHTML = "✘請選擇編號";
        document.getElementById('raa1').style.color='rgba(0,0,0)';
        document.getElementById('raa2').style.color='rgba(0,0,0)';
        document.getElementById('raa3').style.color='rgba(180, 175, 175, 0.616)';
        document.getElementById('raa4').style.color='rgba(180, 175, 175, 0.616)';
        document.getElementById('raa5').style.color='rgba(180, 175, 175, 0.616)';
        document.getElementById('raa6').style.color='rgba(180, 175, 175, 0.616)';
        
        document.getElementById("pic").src = Dcolor.picD1;
            

        
        $("#radio-1").on("click", function(){
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Dcolor.priceD1;
            document.getElementById("howmany").innerHTML = 
            "我將私訊辣妹，做飾品訂做的詳細說明";
                $("#radio-10").on("click", function(){
                    document.getElementById("showprice").innerHTML = Dcolor.priceD1;
                })
                $("#radio-11").on("click", function(){
                    document.getElementById("showprice").innerHTML = Dcolor.priceD1;
                })
            }) 
        $("#radio-2").on("click", function(){
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("showprice").innerHTML = Dcolor.priceD2;
            document.getElementById("howmany").innerHTML = 
            "辣妹可選擇"+Dcolor.normalcoD2 + "個純色 及" + Dcolor.specialcoD2 + "個花線";
            $("#radio-10").on("click", function(){
                document.getElementById("showprice").innerHTML = Dcolor.priceD2;
            })
            $("#radio-11").on("click", function(){
                document.getElementById("showprice").innerHTML = Dcolor.priceD2;
            })
        }) 
        $("#radio-3").on("click", function(){
            document.getElementById("pic").src =no;
            document.getElementById("showtext").innerHTML = "項目不存在唷";
            document.getElementById("howmany").innerHTML = "請看別的品項"; 
           
        })
        $("#radio-4").on("click", function(){
            document.getElementById("pic").src =no;
            document.getElementById("showtext").innerHTML = "項目不存在唷"; 
            document.getElementById("howmany").innerHTML = "請選其他品項";
            document.getElementById("showprice").innerHTML = "項目不存在";
        })

        $("#radio-5").on("click", function(){
            document.getElementById("pic").src =no;
            document.getElementById("showtext").innerHTML = "項目不存在唷"; 
            document.getElementById("howmany").innerHTML = "請看別的品項"; 
            document.getElementById("showprice").innerHTML = "項目不存在";
           
        })
        $("#radio-6").on("click", function(){
            document.getElementById("pic").src =no;
            document.getElementById("showtext").innerHTML = "項目不存在唷"; 
            document.getElementById("howmany").innerHTML = "請看別的品項"; 
            document.getElementById("showprice").innerHTML = "項目不存在";
        })
        
       
		
    } 
    else if($(this).val()== 5){    

        $("body").css("background", "#B50000");
        $("footer").attr('class','pinkaru');
        
        document.getElementById("types").innerHTML = onsale;
        document.getElementById('ready').innerHTML = "✘請選擇編號";
        document.getElementById('raa1').style.color='rgba(0,0,0)';
        document.getElementById('raa2').style.color='rgba(0,0,0)';
        document.getElementById('raa3').style.color='rgba(0,0,0)';
        document.getElementById('raa4').style.color='rgba(0,0,0)';
        document.getElementById('raa5').style.color='rgba(180, 175, 175, 0.616)';
        document.getElementById('raa6').style.color='rgba(180, 175, 175, 0.616)';
        
        $("#radio-1").on("click", function(){
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("pic").src = Ecolor.picE1;
            document.getElementById("howmany").innerHTML = 
            "跳過選顏色，直接往下";
            document.getElementById("showprice").innerHTML = Ecolor.priceE1;
           
        })
        $("#radio-2").on("click", function(){
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("pic").src = Ecolor.picE2;
            document.getElementById("howmany").innerHTML = 
            "跳過選顏色，直接往下";
            document.getElementById("showprice").innerHTML = Ecolor.priceE2;
           
        }) 
        $("#radio-3").on("click", function(){
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("pic").src = Ecolor.picE3;
            document.getElementById("howmany").innerHTML = 
            "跳過選顏色，直接往下";
            document.getElementById("showprice").innerHTML = Ecolor.priceE3;
           
        })
        $("#radio-4").on("click", function(){
            document.getElementById("showtext").innerHTML = "這是你要的辣子嗎？";
            document.getElementById('ready').innerHTML = "✔ 確認";
            document.getElementById("pic").src = Ecolor.picE4;
            document.getElementById("howmany").innerHTML = 
            "跳過選顏色，直接往下";
            document.getElementById("showprice").innerHTML = Ecolor.priceE4;
           
        })

        $("#radio-5").on("click", function(){
            document.getElementById("pic").src =no;
            document.getElementById("showtext").innerHTML = "項目不存在唷"; 
            document.getElementById("howmany").innerHTML = "請看別的品項"; 
            document.getElementById("showprice").innerHTML = "項目不存在";
           
        })
        $("#radio-6").on("click", function(){
            document.getElementById("pic").src =no;
            document.getElementById("showtext").innerHTML = "項目不存在唷"; 
            document.getElementById("howmany").innerHTML = "請看別的品項"; 
            document.getElementById("showprice").innerHTML = "項目不存在";
        })

    }
    else{
        return
    }
	
});





//form

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('form');
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
            if (!formData.get('bigtype') || !formData.get('email') || !formData.get('number')||!formData.get('shape')) {
                document.getElementById('result').textContent = "好像還沒填完唷"

                return
            } else {
                document.getElementById('result').textContent = ""
            }
            
            if (!confirm("ARE YOU SURE???")) {
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
            if (formData.get('angry') === 'true') {
                document.getElementById('explosion').classList.add('doomed')
                setTimeout(() => {
                    document.getElementById('explosion').classList.remove('doomed')
                }, 1000)
            }

            document.getElementById('result').textContent = "感謝辣妹的訂購,請等待Email通知";
            
            return false;
        });
    });