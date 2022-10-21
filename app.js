new Vue({
    el:"#app",
    data:{
        
        game_is_on:false,
        player:100,
        monster :100,
        logs:[],
    },
    methods: {
        newgame :function(){
              this.game_is_on=true
        },
        attach:function(){
            var point=Math.ceil(Math.random()*10);  
            this.monster -= point ;
            this.add_to_log({turn: "p", text:"Oyuncu atağı ("+ point+")"})
             this.monster_attach();
             
        },
        special_attach:function(){
            var point=Math.ceil(Math.random()*20);
            this.monster -= point ;
            this.add_to_log({turn: "p", text:"özel Oyuncu atağı ("+ point+")"})
             this.monster_attach();
        },
        heal_up:function(){
            var point2=Math.ceil(Math.random()*15);
            this.player += point2;
            this.add_to_log({turn: "p", text:"ilk yardım ("+ point2+")"})
            this.monster_attach();
        },
        give_up:function(){
            this.player=0
            this.add_to_log({turn: "p", text:"Oyuncu pes etti"})
        },
        monster_attach:function(){
           var point2=Math.ceil(Math.random()*15);
           this.player -= point2;
           this.add_to_log({turn: "m", text:"Canavar atağı ("+ point2+")"})

        },
        add_to_log: function(log){
            this.logs.push(log);
        }

    },
    watch : {
        player:function(value){
            if(value<0){
                this.player=0;
                alert("Oyunu kaybettin. Tekrar denemek ister misin")
                this.player=100;
                this.monster=100;
                this.logs=[]
            }
            else if (value>100){
                this.player=100;
            }
        },
        monster:function(value){
            if(value<0){
              this.monster=0;
              alert("Oyunu kazandın. Tekrar denemek ister misin")
                this.player=100;
                this.monster=100;
                this.logs=[]
            }
            else if(value>100){
                this.monster=100;
            }
        }
    }
})