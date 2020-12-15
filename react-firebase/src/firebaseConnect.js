import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB8Q3UCFhdI7Ln8tkbihiIS2Vzx-bOmeyY",
  authDomain: "nodereact-104.firebaseapp.com",
  databaseURL: "https://nodereact-104.firebaseio.com",
  projectId: "nodereact-104",
  storageBucket: "nodereact-104.appspot.com",
  messagingSenderId: "690334664957",
  appId: "1:690334664957:web:a7cceb30517a773b8a5694",
  measurementId: "G-ZYC9VLGCZY",
};

export const firebaseConnect = firebase.initializeApp(firebaseConfig);

//* Lấy dữ liệu từ firebase
var data = firebase.database().ref("data");
data.once("value").then(function(snapshot){
    console.log(snapshot.val());
})

//* Sửa dữ liệu trong firebase
var dataForNode4 = firebase.database().ref("data/node4");
dataForNode4.set({
    id: 4,
    title: "Ghi chú 4",
    content: "Nội dung của ghi chú 4"
})

//* Thêm dữ liệu vào firebase
//TODO Cách 1 sử dụng hàm set ở trên
//TODO Cách 2 sử dụng hàm push
// var dataPush = firebase.database().ref("data");
// dataPush.push({
//     title: "Ghi chú 5",
//     content: "Nội dung của ghi chú 5"
// })

//* Xóa dữ liệu trong firebase
var dataRemove = firebase.database().ref("data");
dataRemove.child("node4").remove();