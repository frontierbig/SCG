<template>
    <contrainer class="contrainer_box">

      <box class="addfile_box">
        <h1 class="title">Addfile</h1>
        <h2 class="subtitle">Text</h2>
        <div class="component_box">
          <div class="component">
             <p> <span class="material-icons" >align_horizontal_left</span> Short Answer</p>
             <p> <span class="material-icons" >article </span> Paragrap</p>
             <p> <span class="material-icons" >loop </span> Remake</p>  
          </div>
        </div>


        <h2 class="subtitle">From</h2>
        <div class="component_box">
          <div class="component">
             <p> <span class="material-icons" >title</span> Title</p>
             <p> <span class="material-icons" >article </span> Page Break</p>
          </div>
        </div>

        <h2 class="subtitle">List</h2>
        <div class="component_box">
          <div class="component">
             <p> <span class="material-icons" >radio_button_checked</span> Mutiple Choice</p>
             <p> <span class="material-icons" >check_box </span> Checkboxes</p>
             <p> <span class="material-icons" >arrow_drop_down_circle </span>Dropdown</p>
          </div>
        </div>

        <h2 class="subtitle">Yes/no</h2>
        <div class="component_box">
          <div class="component">
             <p> <span class="material-icons" >cancel_presentation</span>Yes or No</p>
             <p> <span class="material-icons" >toggle_off </span> Switch</p>
          </div>
        </div>

        <h2 class="subtitle">Dete time</h2>
        <div class="component_box">
          <div class="component">
             <p> <span class="material-icons" >cancel_presentation</span>Date Time</p>
          </div>
        </div>

        <h2 class="subtitle">Multimedia</h2>
        <div class="component_box">
          <div class="component">
             <p> <span class="material-icons" >cancel_presentation</span>Embedded image</p>
          </div>
        </div>



      </box>



      <box class="content_box">
        <h1 class="title">Content</h1>
      </box>

      <box class="poperties_box">
        <h1 class="title"> Poperties</h1>
      </box>

    </contrainer>
</template>

<script>
export default {

}
</script>

<style>
.contrainer_box{
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 1rem;
  justify-content: space-between;
  width: 100%;
  
  
}

.addfile_box{
  border-radius: 10px 10px 0px 0px;
  display: flex;
	flex-direction: column;
  width: 350px;
  justify-content: center;
  
}


.content_box{
  border-style: dashed;
  display: flex;
	flex-direction: column;
  width: 420px;
}


.poperties_box{
  border-style: dashed;
  display: flex;
	flex-direction: column;
  width: 420px;
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
}




</style>
