const posts = [
  {
    name: "100 yıl sonra",
    author: "ibrahim halil soydan",
    dataCreated: "13/12/2025",
  },
 {
  name: "1984",
  author: "George Orwell",
  dateCreated: "08/06/1949",
},
{
  name: "Suç ve Ceza",
  author: "Fyodor Dostoyevski",
  dateCreated: "1866",
},
{
  name: "Sefiller",
  author: "Victor Hugo",
  dateCreated: "1862",
},
{
  name: "Fahrenheit 451",
  author: "Ray Bradbury",
  dateCreated: "1953",
},
{
  name: "Hayvan Çiftliği",
  author: "George Orwell",
  dateCreated: "17/08/1945",
},
{
  name: "Dönüşüm",
  author: "Franz Kafka",
  dateCreated: "1915",
}

];


const listPosts = () => {
  posts.map((post) => {
    console.log(post.name);
  });
};

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    //reject("Bir hata oluştu");
  });
};

/* addPost({name:"Bilinç açıklanıyor",author:"Daniel C. Dennett",dataCreated:"2006"})
    .then(()=>{
        console.log("Yeni liste");
        listPosts();
    }).catch((err)=>{
        console.log(err)
    }) */

async function getPosts() {
  try {
    await addPost({
      name: "Bilinç açıklanıyor",
      author: "Daniel C. Dennett",
      dataCreated: "2009",
    });
    console.log("Yeni liste");
    listPosts();
  } catch (err) {
    console.log(err);
  }
}

getPosts();
