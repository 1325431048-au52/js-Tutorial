function add (a){
    let b = a+10;
    add (b);
    return b

}
add (12)