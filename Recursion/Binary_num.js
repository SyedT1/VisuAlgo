function f(n = 5){
      if(n==0){
       return '\0';
      }else{
       var ni = n%2;
       return f(n>>=1)+String(ni);
      }
}
