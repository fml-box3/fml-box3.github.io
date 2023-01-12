function copy_Anti_cheating(){
    var copy = document.getElementById("Anti_cheating");
    copy.select();
    copy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy.value);
}
