export const setInputHeight= (e)=> {
  if(e.target.value.trim()===""){
    e.target.style.height= "40px"
  }

  if(e.target.scrollHeight>=304){
      e.target.style.height= "304px"
  }
  else{
    e.target.style.height = `${e.target.scrollHeight}px`
  }
    
}