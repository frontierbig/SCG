<template>
  <div class="contrainer_box">
    <div class="box_title">
        <div>
        <h1>แบบฟอร์มตรวจบ้าน</h1>
        <p>New Description</p>
        </div>
        <div>
            <span class="material-icons">edit</span>  
        </div>
                
        
    </div>
    


    <div class="right_title">
        <span class="material-icons">visibility</span>
        <span class="material-icons">save</span>
        <div>
            <button class="material-button">PUBLISH</button>
        </div>
        <span class="material-icons">close</span>
    </div>
    
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.contrainer_box{
    /* margin-top:0.5rem; */
    display: flex;
    flex-direction: row ;
    width:  1350px;
    font-size :1rem ;
    padding: 15px;
    box-shadow: -6px 1px 27px -5px rgba(0,0,0,0.59);
    -webkit-box-shadow: -6px 1px 27px -5px rgba(0,0,0,0.59);
    -moz-box-shadow: -6px 1px 27px -5px rgba(0,0,0,0.59);
    
    justify-content: space-between;
    align-items: center;
    border-style: solid 1px black;
    background-color: whitesmoke ;
    
    
}
.box_title{
    display: flex;
    flex-direction: row;
    align-items: top;
    
}
.right_title{
    display: flex;
    flex-direction: row;

}


.right_title .material-button
{
    border-radius: 15px;
    background-color:var(--dark);
    font-size: 1rem;
    padding: 1rem;
    /* position: absolute; */
    color:whitesmoke;
    margin-top:10px ;
}
.right_title .material-button:hover{
    color:var(--primary);
    

}
.right_title .material-icons{
    font-size: 2.8rem;
    padding: 1rem;


}
.right_title .material-icons:hover
{
   opacity: 0.6;
   cursor: pointer;
}

.box_title .material-icons{
    font-size: 2rem;
    padding-left:10px ;

}
.box_title .material-icons:hover
{
   opacity: 0.6;
   cursor: pointer;
}


</style>