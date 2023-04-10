//menampilkan data dummy
let data = [];
const Apidata = (req, res)=> {
    res.json(data);
}

//tambah data
const Kirimdata = (req, res)=>{
    const newData = req.body;
    data.push(newData)
    res.json(newData)
}

//edit data
const Editdata = (req, res)=>{
    const userId = req.params.id;
    const user = data.find(user => user.id == userId);

    if(!user){
        return res.status(404).send(`User dengan id ${userId} Tidak Ditemukan`);
    }
    const {nama} = req.body;
    if(!nama){
        return res.status(400).send(`Nama user tidak boleh kosong`);
    }
    user.nama = nama;
    res.send(`User dengan id ${userId} berhasil di edit`);
}

//delete data
const Delete = (req, res) => {
    const userId = req.params.id;
    const proses = data.findIndex(nama => nama.id == userId);

    if(proses !== -1){
        data.splice(proses, 1);
        res.send('User Dihapus');
    } else {
        res.status(404).send('Data tidak ditemukan')
    }
}

//route 
const Home = (req, res)=> {
    let responseText = 'HALLO INI HOMEPAGE'
    res.send(responseText)
}

const About = (req, res)=> {
    res.send('ABOUT LAGI BRO');
}

const Contact = (req, res)=> {
    res.send('CONTACT LAGI BRO');
}

module.exports = {Home, About, Contact, Apidata, Kirimdata, Editdata, Delete}