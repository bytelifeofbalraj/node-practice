const myUrl = new URL(
  "https://myshop.com/orders?status=shipped&page=2&sort=newest",
);

console.log(myUrl.searchParams.get("status"));
console.log(myUrl.searchParams.get("page"));
console.log(myUrl.searchParams.get("sort"));
console.log(myUrl.searchParams.get("doesnotexist"));

myUrl.searchParams.set("page", "3");
console.log(myUrl.searchParams.get("page"));
