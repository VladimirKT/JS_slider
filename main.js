


function Slajd (){
     this.con = $('.container')
     this.slaj = $('ul');
     this.img = $('img');
     this.butt = $('button');
     this.butt1 = $("#next");
     this.butt2 = $("#prev");
     this.imgWidth = this.img[0].width;
     this.imgLen = this.img.length;
     this.count = 0;


  this.init = function () {
     var self = this;
     if(self.count === 0){
     self.con.hover(function(){
     self.butt2.css({"display":"block"});
     console.log(self.count);
     });
   }
   self.con.mouseleave(function(){
   self.butt.css({"display":"none"});
   });
     self.butt.on('click', function() {
       var dir = $(this).data("dirrection");
       if(dir === "next" && self.count < 0){
         self.count++;
         if(self.count === 0){
           self.butt1.css({"display":"none"});
           setTimeout(function (){
           location.reload();
         },500)
         }
       }
       if(dir === "prev" && self.count > -self.imgLen){
         self.count--;
         self.butt1.css({"display":"block"});
         self.con.mouseleave(function(){
         self.butt.css({"display":"none"});
         });
        if(self.count === -self.imgLen && dir === "prev"){
        self.count = 0;
        self.butt1.css({"display":"none"});
        setTimeout(function (){
        location.reload();

      },500)
      self.butt2.css({"display":"block"});
          }
       }
       if(self.count < 0){
       self.con.hover(function(){
       self.butt.css({"display":"block"});
       console.log(self.count);
       });
     };
       self.move = self.count * self.imgWidth;
        self.slaj.animate ({
        marginLeft : self.move
   },500);
   self.con.mouseleave(function(){
   self.butt.css({"display":"none"});
   });
 })
 }
}

var slajder = new Slajd().init();
