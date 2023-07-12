// const students = [{name: "BOB"}, {name:"SITI"}];
// try {
//   console.log(students[2].name)
// } catch (err) {
//   console.log("Murid tidak ada");
// }


// const wait = time => new Promise((resolve) => 
//   setTimeout(resolve, time))

// wait(3000).then(() => console.log("3"))
// wait(4000).then(() => console.log("4"))
// wait(2000).then(() => console.log("2"))

// console.log("1")

const songPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const songs = [
      {
        title: "Cuek",
        artists: [{ name: "Rizky febian" }],
        duration: 200,
      },
      {
        title: "yellow",
        artists: [{ name: "Coldplay" }],
        duration: 200,
      },
    ];
    resolve(songs);
    reject("gagal menampilkan")
  }, 2000); 
});

