function shuffleA(a, b) {
    a.sort((n1, n2) => n1-n2); 
    return b.map(item => {
        let l = 0, r = a.length-1;
        while(l < r){
            let mid = Math.trunc((l + r) / 2);
            if(a[mid] <= item)
            l = mid + 1;
            else
            r = mid;
        }
        if(l < a.length && a[l] > item){ // found
            let ans = a[l];
            a.splice(l,1);
            return ans;
        }
        else{ // not found
            return a.shift();
        }
    });
}