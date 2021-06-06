function soNguyenTo(x){
    if(x<2)
        return 0;
    if(x>2){
        if(x%2==0)
            return 0;
        for(let i=3;i<x;i++)
            if(x%i==0)
                return 0;
    }
    return 1;
}

let n = +prompt("Nhập n chữ số nguyên tố:");
let count = 0;
for(let i=0; ;i++){
    if(soNguyenTo(i)==1){
        document.write(i+ " ");
        count++;
    }
    if(count == n){
        break;
    }
}
