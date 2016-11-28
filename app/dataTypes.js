module.exports = {
  dataTypes : function(input){
    if(typeof(input) === 'function'){
      input(true);
      return ("called " + input.name);
    }
    else if(typeof(input) === 'undefined'){
      return 'no value';
    }
    else if(typeof(input) === 'string'){
      return input.length;
    }
    else if(typeof(input) === 'object'){
      if(input === null){
        return 'no value'
      }
      if(input === [] || input.length < 3){
        return 'undefined';
      }
      return input[2];
    }
    else if(typeof(input) === 'boolean'){
      if(input === true){
        return true
      }
      return false;
    }
    else if(typeof(input) === 'number'){
      if(input < 100){
        return 'less than 100';
      }else if(input === 100){
        return 'equal to 100';
      }else{
        return 'more than 100';
      }
    }
  
  }
}
