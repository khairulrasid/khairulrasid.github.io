alert("Selamat Pulang");

document.getElementById('mytitid').addEventListener('mouseover',myFunction)
function myFunction(){
    alert('Tesentuh')
}
document.getElementById('mytitid').innerHTML="punyaku";
//hapus
const lis= document.querySelectorAll('li');
const list=document.querySelector('ul');

//hapus list item
lis[0].remove();