const express = require('express');
let array=[];
const app= express();
app.use(express.json());

app.get('/api/book',(req,res)=>{
    res.send(array)
})
app.post('/api/book',(req,res)=>{
    console.log(req.body);
    array.push(req.body);
    res.status(201).send('Book Added Successfully')
})
app.get('/api/book/:id',(req,res)=>{
    const id= req.params.id;
    let find= array.find(val=>val.id==id);
    if(find){
        res.send(find)
    }else{
        res.send('Book not found')
    }
})
app.delete('/api/book/:id',(req,res)=>{
    const id= req.params.id;
    array= array.filter(val=>val.id!=id);
    res.send('Book Deleted')
})
app.put('/api/book/:id',(req,res)=>{
    const id= req.params.id;
    const index= array.findIndex(val=>val.id==id);
    if(index>=0){
        array[index]=req.body; 
        res.send('Data updated')
    }else{
        res.send('Book not found to update')
    }
})

app.listen(5000,()=>console.log('Server started'))