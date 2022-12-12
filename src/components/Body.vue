<template>
    <contrainer class="contrainer_box">

      <box class="addfile_box">
        <h1 class="title">Addfile</h1>

        <box  v-for="(item,index) in Menu" :key="index">

        <box class="box_subtitle">
          
        <h2 class="subtitle" >{{item.subtitle}}</h2>
        <span class="material-icons" >arrow_drop_down</span>  
      </box>

  
        <div class="component_box">
          <div class="component" v-for="(Menu,index) in item.menuItem" :key="index">
             <p > <span class="material-icons" >{{item.icons[index]}}</span> {{Menu}}</p>
          </div>
        </div>
      </box>

      </box>

      <box class="content_box">
        <h1 class="title">Content</h1>

        
      </box>

      <box class="poperties_box" >
        <h1 class="title"> Poperties</h1>

        <span class="dropdown" :class="{shown: state}">
      <a href="#" @click.prevent="toggleDropdown" class="dropdown-toggle">toggle menu</a>
            <div class="dropdown-menu" v-show="state">
                <ul class="list-unstyled">
                    <slot></slot>
                </ul>
            </div>
        <transition/>
    </span>

        

       

  
      </box>
      

    


    
    </contrainer>
</template>

<script>
import { Menu } from '../FakeData';
export default {
  name: 'dropdown',
  methods: {
    toggleDropdown (e) {
      this.state = !this.state
    },
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.state = false
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.close)
  },


  data (){
    return{
      Menu : [{
    subtitle:"Text",
    menuItem:["ShortAnswer","Paragrap","Remake"],
    icons:["align_horizontal_left","article","loop"]
    },
    {
        subtitle:"From",
        menuItem:["Title","Page Break"],
        icons:["title","article"]

    },
    {
        subtitle:"List",
        menuItem:["Multiple Choice","Checkboxs","Dropdown"],
        icons:["radio_button_checked","check_box","arrow_drop_down_circle"]
    },
    {
        subtitle:"Yes or No",
        menuItem:["Yes or No","Switch"],
        icons:["cancel_presentation","toggle_off"]
    },
    {
        subtitle:"Date time",
        menuItem:["Date Time"],
        icons:["cancel_presentation"]
    },
    {
        subtitle:"Multimedia",
        menuItem:["Embedded image"],
        icons:["camera_alt"]
    }
  ],
  state: false

    }
  }

}
</script>

<style scoped>
.contrainer_box{
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top: 1rem;
  width: 100%;
  
  
}

.addfile_box{
  border-radius: 10px 10px 0px 0px;
  display: flex;
	flex-direction: column;
  width: 25rem;
  justify-content: center;
  background-color:#ebebeb;
  
}


.content_box{
  
  display: flex;
	flex-direction: column;
  width: 30rem;
  background-color:#ebebeb;
}


.poperties_box{
  
  display: flex;
	flex-direction: column;
  width: 35rem;
  background-color:#ebebeb;
}

.title{
  background-color: var(--primary-alt);
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 0.4rem;
  padding-left:1rem ;

  

}
.material-icons{
  font-size: 1.3rem;
  margin-right: 10px;
  align-items: center;
}
/* .component_box{
  padding: 2rem 0rem 0rem 5rem ;
} */
.component p{
  padding-bottom:1rem ;
  padding: 1rem 0rem 1rem 5rem ; 
  /* บน ขวา ล่าง ซ้าย */
}
.component p:hover{
  cursor: pointer;
  border-radius:7px ;
  background-color:var(--primary) ;
}
.subtitle{
  font-size: 1.3rem;
  margin:1rem 0rem 1rem 2rem;
  padding-right:5rem ;
}
.box_subtitle{
  display: grid;
  grid-template-columns: 350px 1fr;
  align-items: center;
}
.box_subtitle :hover{
  cursor: pointer;
  opacity: 0.7;
 
}






</style>
