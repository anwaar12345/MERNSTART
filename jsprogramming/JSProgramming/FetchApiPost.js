let createPost = async (data) => {
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
  let responce = await p.json();
  return responce;
}
    let data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      };
    
let main = async (data) => {
    let result = await createPost(data);
    console.log(result,123);
}

main();