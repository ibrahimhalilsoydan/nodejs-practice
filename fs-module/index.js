import { readFile, unlink,mkdir, rmdir } from "node:fs";
import { writeFile } from 'node:fs';
import { appendFile } from 'node:fs';
import * as fs from "node:fs/promises";

/* readFile("password.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data)
});
 */

/* readFile("password.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("dosya okundu");
}); */

/* writeFile("example.txt", "Hello Node.js", "utf8", (err, data) => {
  if (err) console.log(err);

}); */


writeFile("employees.json",'{"name": "Employee 1 Name", "salary": 2000}','utf8',(err,data)=>{
    if(err) throw err
    console.log("Employes.json dosyası oluşturuldu.")
})

readFile("employees.json","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data)
});



/* appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000}', 'utf8', (err)=>{
    if(err) throw err;
    console.log("yeni veri eklendi")
}); */

/* unlink("example.txt",(err)=>{
    if(err) throw err;
    console.log("dosya silindi")
})
 */

/* mkdir('uploads/img',{ recursive: true },(err) => {
  if (err) throw err;
  console.log ("klasör oluşturuldu")
}); */


/* rmdir('uploads',{ recursive: true },(err) => {
  if (err) throw err;
  console.log ("klasör silindi")
}); */



