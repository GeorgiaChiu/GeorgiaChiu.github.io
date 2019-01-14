var posts = [
    {
      id: 1,
      title: ":: 一辣年子 ::",
      date: "One Spicy",
      description: "<p>::音像互動裝置表演團體::</p><p></p><p>是傳說中「一年」和「辣子」的小孩，尚小，卻喜歡紅唇，生於二零一八年，爬百岳時會塗mac口紅。喜歡嘗試奇怪的穿戴式裝置，技術兼具，實用與美麗。<p>志向：成為穿戴裝置辣妹</p><p><p>表演團隊：邱靖雅, 王盈文</p><p>創團年份：2018<p> 表演素材:聲光 與 辣妹元素 <p>團隊期望：賺一波尾牙場</p>",
      image: "../resourse/spicyniuse.jpg",
      clip_path: "polygon(80% 0%, 100% 80%, 50% 100%, 0% 50%)" },
    
    {
      id: 2,
      title: "【 支撐 】",
      date: "Support",
      description: "<p>用電磁鐵把舞者吸起來，藉由通電和斷電，創造人可以漂浮的錯覺，看看什麼事會發生</p><p></p><p>『少了什麼會活不下去？』<p>  人們心裡必定有個分量特別大的什麼來維持每天的生活，他像於石窟深處歷經時光滄桑所沈澱出的渾厚氣場，倘若崩塌，生活就像粉塵碎屑，飄無定所且生無可戀。 『若是信仰不存在，那這個社會會不會崩壞？』 <p><p>盛悅晴：這是在一次機緣之下去印度的卡莉神廟得到的感受，在髒亂中看見人們心中的支柱。我曾經疑惑人們如何能不在意光腳踩著混了排泄物與沙塵的泥巴水生活，但是當我踏進那充滿習俗與參拜的神廟後我彷彿理解了些什麼，祂的力量填補了無法改變命運的無力感，我想用舞蹈的方式呈現那種想像的神力。</p>想要讓舞者做到在正常地吸引力下無法達成的動作，達到舞者與裝置有密不可分的關係。</p><iframe src='https://player.vimeo.com/video/309407403' width='800' height='500' frameborder='0' align='middle' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><p><p>創作類別：舞蹈裝置表演</p><p><p>表演團隊：邱靖雅, 盛悅晴,曾郁棻（舞者）</p><p>創作年份：2017<p>媒材: 電磁鐵, 布料, 木台裝置, 聲音, 燈光裝置, 舞蹈, 煙機<p>尺寸因場地而異 / Dimension Variable.</p>",
      image: "../resourse/work3.jpg",
      clip_path: "polygon(10% 13%, 90% 30%, 50% 100%, 0% 50%)" },
    
    {
      id: 3,
      title: "【 向光 】",
      date: "Follow the lights",
      description: "<p>::穿戴式聲音裝置實驗演出::</p><p><p>我喜歡與人接觸，不論是物理性抑或非物理性。 當人與人的肢體有了碰撞，我好奇，這會有怎麼樣的變化。</p> <p> 經由我右大腿上配置的一台自製控制器（聲音控制的選鈕以及錄製按鈕裝於其上），配上蔓延在自己手工編織的螢光外衣上的處壓感測，若特殊接觸點被他人所觸動，即有聲音的反饋（Puredata即時演算）。 藉由這些，我想把自己變成一個音樂的觸動裝置，讓他人可以和我一起探討接觸中的奧妙</h5><iframe src='https://player.vimeo.com/video/309489781' width='800' height='500' frameborder='0' align='middle' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><p><p>創作類別：穿戴式聲音裝置實驗演出</p><p><p>作者：邱靖雅</p><p>創作年份：2018<p>媒材: linkit7688Duo, 電子零件, 電容感測, 編織作品, puredata演算<p>尺寸因場地而異 / Dimension Variable.</p>",
      image: "../resourse/performance02.jpg",
      clip_path: "polygon(0 29%, 100% 0, 100% 70%, 48% 100%)" },
    
    
    // {
    //   id: 4,
    //   title: ":: 文字作品 ::",
    //   date: "Literary Creation",
    //   description: "<p>hi</p><p></p><a href='https://image.ibb.co/bF9iO5/1.jpg'>fu06j;6</a>",
    //   image: "../resourse/lit.jpg",
    //   clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" }
    ];
    
    
    
    var app = new Vue({
      el: "#app",
      data: function data() {
        return {
          test: "",
          posts: posts,
          selectedClipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
          postImage: posts[0].image,
          currentPost: null,
          postIndex: 0,
          selected: false,
          ready: false,
          lastSelectedPost: null,
          clipPath: posts[0].clip_path };
    
      },
      methods: {
        changePost: function changePost(index) {
          if (this.postImage != this.posts[index].image && this.selected == false) {
            this.postImage = this.posts[index].image;
            this.clipPath = this.posts[index].clip_path;
          }
        },
        closePost: function closePost() {
          if (this.lastSelectedPost != null) {
            this.selected = false;
            this.ready = false;
            this.clipPath = this.posts[this.lastSelectedPost].clip_path;
          }
        },
        selectedPost: function selectedPost(index) {var _this = this;
          this.selected = true;
          this.clipPath = this.selectedClipPath;
          this.lastSelectedPost = index;
          this.currentPost = this.posts[index];
          setTimeout(function () {
            _this.ready = true;
          }, 600);
        },
        nextPost: function nextPost() {var _this2 = this;
          if (this.lastSelectedPost < this.posts.length - 1) {
            this.lastSelectedPost++;
            this.ready = false;
            setTimeout(function () {
              _this2.currentPost = _this2.posts[_this2.lastSelectedPost];
              _this2.postImage = _this2.currentPost.image;
              _this2.ready = true;
            }, 600);
          }
        },
        prevPost: function prevPost() {var _this3 = this;
          if (
          this.lastSelectedPost <= this.posts.length - 1 &&
          this.lastSelectedPost != 0)
          {
            this.lastSelectedPost--;
            this.ready = false;
            setTimeout(function () {
              _this3.currentPost = _this3.posts[_this3.lastSelectedPost];
              _this3.postImage = _this3.currentPost.image;
              _this3.ready = true;
            }, 600);
          }
        } },
    
      created: function created() {var _this4 = this;
        window.addEventListener("keydown", function (e) {
          e.keyCode == 39 ? _this4.nextPost() : false;
          e.keyCode == 37 ? _this4.prevPost() : false;
          e.keyCode == 27 ? _this4.closePost() : false;
        });
      } });