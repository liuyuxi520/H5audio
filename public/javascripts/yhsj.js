const yhFn = (n,m) => {
    if(m > n) return false;
    if(m == 1 && n == 1) return 1;
    if(m == 1 || m == n) return 1;
    if(n > 2 && (m == 2 || m == n-1)) return n-1;
    return yhFn(n-1,m-1) + yhFn(n-1,m);
}